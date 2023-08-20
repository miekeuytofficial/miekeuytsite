<script setup lang="ts">
import type { ImageItemsItem } from '@/util/types';
import { computed } from 'vue';

const props = defineProps<{ role: string, company: string, date: string, description: (string | string[])[], techstack: ImageItemsItem[] }>();

const isRoleMultiline = computed(() => typeof props.role != 'string');
const descHasSublist = (d: string | string[]) => { console.log('bap', d, typeof d); return typeof d != 'string'; }




</script>

<template>
    <div class="experience-window">
        <div class="experience-header">
            <div class="header-title">{{ isRoleMultiline ? role[0] : role }}</div>
            <div v-if="isRoleMultiline" class="header-title-2">{{ role[1] }}</div>
            <div class="header-subtitle">{{ company }}</div>
            <div class="header-date">{{ date }}</div>
        </div>
        <div class="experience-body">
            <div class="experience-body--inner">
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
                <div class="techstack-wrapper">
                    <div class="techstack-title">Tech stack</div>
                    <div class="techstack-grid">
                        <div v-for="tech in techstack" :key="tech.img" class="techstack-img"
                            :class="{ 'img-size-2': tech.size === 2, 'img-size-3': tech.size === 3 }">
                            <div class="img-inner"
                                :style="{ 'background-image': `url(src/assets/skills-img/${tech.img}.png)`, }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.experience-window {
    background-color: var(--light-gray);
    border-radius: 20px;

    // width: fit-content;

    .experience-header {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        margin: 0;
        padding: 0.5rem 1.5rem;

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

        .header-subtitle {}

        .header-date {}
    }


    .experience-body {
        height: 100%;
        width: 100%;

        &--inner {
            padding: 0.5rem;
            background-color: var(--lighter-gray);
            display: grid;
            grid-template-columns: 60% 40%;
            border-bottom-right-radius: 15px;

            border-bottom-left-radius: 15px;

            .description-wrapper {
                background-color: var(--gray);
                border-bottom-left-radius: 13px;
                padding: 0.5rem 1rem;
                width: 100%;
                height: 100%;

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

            .techstack-wrapper {

                border-bottom-right-radius: 13px;
                width: 100%;
                height: 100%;
                padding: 0.5rem;


                .techstack-title {
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    color: var(--darkest-gray);
                    margin: 0;
                    padding: 0;
                }

                .techstack-grid {
                    margin-top: 0.5rem;
                    display: grid;
                    --w: calc(100% - 4rem);
                    --h: calc(80% - 1rem);
                    grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
                    background-color: var(--lightest-gray);
                    padding: 0.4rem 0.2rem;
                    gap: 0.25rem;

                    // max-width: 20rem;
                    // min-width: 10rem;
                    align-content: center;
                    justify-content: center;

                    .techstack-img {

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
                            min-width: 2rem;
                            min-height: 2rem;
                            max-width: 100%;
                            background-color: white;
                            box-shadow: 0px 0px 1px 1px var(--light-gray);

                        }

                    }
                }
            }
        }
    }

}

@media (max-width: 767px) {
    .experience-window .experience-body .experience-body--inner {
        grid-template-columns: 1fr; // Stack the description and tech stack on small screens

        .description-wrapper,
        .techstack-wrapper {
            border-radius: 13px 13px 0 0;
        }
    }
}
</style>