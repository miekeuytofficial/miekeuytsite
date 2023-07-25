<script lang="ts" setup>
import { workExperience } from '@/util/data';




</script>
<template>
    <div class="experience-view dark-bg">
        <div class="page-title">
            <h1>Recent experience</h1>
        </div>
        <div class="timeline">
            <div v-for="(exp, idx) in workExperience" :key="idx" class="item-group">
                <div v-for="work in exp" :key="work.date" class="item">
                    <div v-if="work.role.length > 3" class="header-text">{{ work.role }}</div>
                    <div v-else v-for="(r, i) in work.role" :key="i" class="header-text ht-1">{{ r }}</div>
                    <div class="subheader-text">{{ work.company }}</div>{{ work.date }}
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.experience-view {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: black;


    .timeline {
        height: max-content;
        width: 90%;
        display: flex;
        flex-direction: column;

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
                border: 1px solid var(--pikachu-yellow);

                &:nth-child(odd) {
                    background-color: var(--warm-yellow-75);

                }

                &:nth-child(even) {
                    background-color: var(--light-blue-75);
                    border: 1px solid var(--light-blue);
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

                .subheader-text {
                    color: white
                }
            }
        }
    }
}
</style>
