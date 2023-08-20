<script lang="ts" setup>
import ExperienceWindowHideable from '@/components/ExperienceWindowHideable.vue';
import SoftSkillComponent from '@/components/SoftSkillComponent.vue';
import Masonry from 'masonry-layout';
import { ref, onMounted, nextTick } from 'vue';
import { useExperienceStore } from '../stores/experience';

const masonry = ref<Element>();
const experienceStore = useExperienceStore();
const experiences = ref();
const msnry = ref();
onMounted(async () => {
    await experienceStore.getExperiences();
    experiences.value = experienceStore.experiences;
    await nextTick();
    if (masonry.value) {
        msnry.value = new Masonry(masonry.value, {
            itemSelector: '.item',
            columnWidth: '.item-sizer',
            gutter: 10,
            percentPosition: true,
            horizontalOrder: true,
            originTop: true,
        });
    }
});


const handleRelayout = async () => {
    await nextTick()
    await msnry.value?.layout();
}
</script>
<template>
    <div class="experience-view dark-bg">

        <SoftSkillComponent />
        <div class="page-title">
            <h1>Recent experience</h1>
        </div>

        <div ref="masonry" class="timeline">
            <div class="item-sizer" />
            <div v-for="experience in experiences" :key="experience.date" class="item">
                <ExperienceWindowHideable @trigger-layout="handleRelayout" :company="experience.company"
                    :role="(experience.role as string)" :date="experience.date" :description="experience.desc"
                    :skills="experience.skills" />
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.experience-view {
    display: flex;
    flex-direction: column;
    color: black;


    .timeline {
        height: max-content;
        width: 100%;

        .item {
            margin-top: 1rem;

            .experience-window .experience-header {
                background-color: var(--yellow);
            }

            &:hover {
                .experience-window .experience-header {
                    background-color: var(--mid-yellow);
                    cursor: pointer;
                }
            }

            &:nth-child(3) {
                .experience-window .experience-header {
                    background-color: var(--purple);
                }

                &:hover {
                    .experience-window .experience-header {
                        background-color: var(--mid-purple);
                    }
                }
            }

            &:nth-child(4) {
                .experience-window .experience-header {
                    background-color: var(--blue);
                }

                &:hover {
                    .experience-window .experience-header {
                        background-color: var(--mid-blue);
                    }
                }
            }

            &:nth-child(6) {


                .experience-window .experience-header {
                    background-color: var(--purple);
                }

                &:hover {
                    .experience-window .experience-header {
                        background-color: var(--mid-purple);
                    }
                }
            }

            &:hover {
                .experience-window .experience-header {
                    * {
                        color: var(--white);
                    }
                }
            }

        }

        .item,
        .item-sizer {

            width: 49%;
        }


        .item-group {
            display: flex;
            padding-block: 2rem;
            gap: 2rem;
            width: fit-content;
            border-radius: 2px;

            &:last-child {
                border-top: 0;
            }

            &:first-child {
                border-bottom: 0;
            }

            .item {
                border: 1px solid var(--yellow);

                &:nth-child(odd) {
                    background-color: var(--mid-yellow);

                }

                &:nth-child(even) {
                    background-color: var(--mid-blue);
                    border: 1px solid var(--blue);
                }

                padding: 1rem 2rem;
                border-radius: 10px;

                .header-text {
                    color: black;
                    font-weight: bolder;
                    font-size: 15px;
                    text-align: left;
                    vertical-align: top;
                    display: flex;
                    letter-spacing: 0.1rem;
                }

                .ht-1 {
                    margin: 0;
                }


            }
        }
    }
}

@media (max-width:400px) {
    .experience-view {
        align-items: center;

        .timeline {
            align-items: center;

            .item-group {
                flex-direction: column;
                width: 100%;
            }
        }
    }
}

@media (max-width: 780px) {

    .experience-view .timeline {
        grid-template-columns: 1fr;

        .item {
            width: 100%;
        }
    }
}
</style>
