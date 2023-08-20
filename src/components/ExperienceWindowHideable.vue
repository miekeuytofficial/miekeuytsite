<script setup lang="ts">
import type { ImageItemsItem } from '@/util/types';
import { computed, ref } from 'vue';

const props = defineProps<{ role: string | string[], company: string, date: string, description: (string | string[])[], skills: ImageItemsItem[] }>();
const emit = defineEmits(['trigger-layout']);
const isRoleMultiline = computed(() => typeof props.role != 'string');
const descHasSublist = (d: string | string[]) => typeof d != 'string';

const showBody = ref(false);

const handleShowBody = () => {
    showBody.value = !showBody.value;
    emit('trigger-layout')
}

const determineIconsToShow = (skillItems: ImageItemsItem[]) => {
    let count = 4;
    const skills = skillItems.slice(0, count);
    skills.forEach(skill => {
        if (skill.size === 2) {
            count -= 1;
        }
        if (skill.size === 3) {
            count -= 2;
        }
    });

    return skillItems.slice(0, count === 1 ? 2 : count)

}

</script>

<template>
    <div class="experience-window" @click="handleShowBody">
        <div class="experience-header" :class="{ 'hidden-body': !showBody }">
            <div class="header-group-wrapper">
                <div class="header-title-group">
                    <div class="header-title">{{ isRoleMultiline ? role[0] : role }}</div>
                    <div v-if="isRoleMultiline" class="header-title-2">{{ role[1] }}</div>
                    <div class="header-subtitle">{{ company }}</div>
                    <div class="header-date">{{ date }}</div>
                </div>

                <div class="skills-grid">
                    <div v-for="(skill, idx) in determineIconsToShow(skills)" :key="skill.img" class="skills-img"
                        :class="{ 'img-size-2': skill.size === 2, 'img-size-3': skill.size === 3 }">
                        <div class="img-inner"
                            :style="{ 'background-image': `url(src/assets/tech-stack-img/${skill.img}.png)`, }">
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrow"><font-awesome-icon :icon="`fa-icon ${showBody ? 'fa-chevron-up' : 'fa-chevron-down'}`"
                    size="xs" />
            </div>

        </div>
        <div v-if="showBody" class="experience-body">
            <div class="experience-body--inner" :class="{ 'experience-body--inner--no-skills': skills.length === 0 }">
                <div v-if="skills.length != 0" class="skills-wrapper">
                    <div class="skills-grid">
                        <div v-for="skill in skills" :key="skill.img" class="skills-img"
                            :class="{ 'img-size-2': skill.size === 2, 'img-size-3': skill.size === 3 }">
                            <div class="img-inner"
                                :style="{ 'background-image': `url(src/assets/tech-stack-img/${skill.img}.png)`, }">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="description-wrapper">
                    <div class="description-title">Description</div>
                    <ul>
                        <li v-for="(desc, descIdx) in description" :key="descIdx">{{ descHasSublist(desc) ?
                            desc[0] : desc }}
                            <ul v-if="descHasSublist(desc)">
                                <li v-for="item in desc[1]" :key="item">{{ item }}</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
.experience-window {
    background-color: var(--light-gray);
    border-radius: 20px;
    min-width: fit-content;

    .experience-header {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        &.hidden-body {
            border-radius: 20px;
            display: flex;

            flex-direction: column;
            justify-content: space-between;
            grid-column: span 1;
            border-radius: 5px;
            border-radius: 20px;

            .header-group-wrapper {
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }



            .skills-grid {
                display: grid;
                gap: 0.3rem;
                grid-template-columns: repeat(4, minmax(2.5rem, 1fr));
                align-content: center;
                align-items: center;
            }

            .img-size-2 {
                grid-column: span 2;

            }

            .img-size-3 {
                grid-column: span 4;
            }

            .img-inner {
                border-radius: 5px;

                height: 100%;
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: contain;
                min-width: 2.5rem;
                min-height: 2.5rem;

                background-color: white;
                box-shadow: 0px 0px 1px 1px var(--light-gray);

            }


        }

        margin: 0;
        padding: 0.5rem 1.5rem;
        padding-top: 1rem;
        background-color: var(--yellow);

        .header-title {
            font-size: 14px;
            color: var(--darkest-gray);
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }

        .header-title-2 {
            font-size: 12px;
            color: var(--darkest-gray);
            font-weight: 800;

            letter-spacing: 0.1rem;
        }

    }


    .experience-body {
        height: 100%;
        width: 100%;

        &--inner {
            padding: 0.5rem;
            background-color: var(--lighter-gray);
            display: grid;
            border-bottom-right-radius: 15px;

            border-bottom-left-radius: 15px;
            min-width: fit-content;

            .description-wrapper {
                background-color: var(--gray);
                border-bottom-left-radius: 13px;
                padding: 0.5rem 1rem;
                width: 100%;
                height: 100%;
                min-width: fit-content;

                .description-title {
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    color: var(--lightest-gray);
                }

                ul {
                    color: var(--white);
                    padding-inline: 1.5rem;
                    margin-top: 0.5rem;

                    li {
                        font-size: 12px;
                        margin-block-end: 1rem;

                        ul {
                            padding-inline: 1rem;

                            li {

                                margin-block-end: 0.5rem;
                            }
                        }
                    }
                }
            }

            .skills-wrapper {

                border-bottom-right-radius: 13px;
                width: 100%;
                height: 100%;
                padding: 0.5rem;
                min-width: fit-content;

                .skills-title {
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    color: var(--darkest-gray);
                    margin: 0;
                    padding: 0;
                }

                .skills-grid {
                    display: grid;
                    --w: calc(100% - 4rem);
                    --h: calc(80% - 1rem);
                    grid-template-columns: repeat(auto-fit, minmax(2.5rem, 1fr));
                    background-color: var(--lightest-gray);
                    padding: 0.4rem 0.2rem;
                    gap: 0.5rem;
                    min-width: fit-content;
                    align-content: center;
                    justify-content: center;

                    .skills-img {

                        grid-column: span 1;
                        border-radius: 5px;
                        border-radius: 20px;

                        &.img-size-2 {
                            grid-column: span 2;

                        }

                        &.img-size-3 {
                            grid-column: span 4;
                        }

                        .img-inner {
                            border-radius: 5px;

                            height: 100%;
                            background-position: 50%;
                            background-repeat: no-repeat;
                            background-size: contain;
                            min-width: 2.5rem;
                            min-height: 2.5rem;

                            background-color: white;
                            box-shadow: 0px 0px 1px 1px var(--light-gray);

                        }

                    }
                }
            }

            &--no-skills {
                grid-template-columns: 1fr;
            }
        }
    }


    .arrow {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--gray);
    }


}


@media (max-width: 767px) {


    .experience-window .experience-body .experience-body--inner {
        grid-template-columns: 1fr;

        .description-wrapper,
        .skills-wrapper {
            border-radius: 13px 13px 0 0;
        }
    }
}
</style>