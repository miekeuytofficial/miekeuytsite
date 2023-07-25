<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Masonry from 'masonry-layout';
import { skills } from '@/util/data';

const skillMasonryRef = ref();
let skillMsnry: Masonry;
onMounted(() => {
    skillMsnry = new Masonry(skillMasonryRef.value, {
        itemSelector: '.skill',
        columnWidth: '.skill-grid-sizer',
        gutter: '.skill-gutter-sizer',
        percentPosition: true,
        horizontalOrder: true
    });
});


</script>
<template>
    <div class="skills-view dark-bg">
        <div class="page-title">
            <h1>My Skills</h1>
        </div>
        <div ref="skillMasonryRef" class="grid">
            <div class="skill-grid-sizer" />
            <div class="skill-gutter-sizer" />
            <div class="skill" :class="{ 'skill-2': word.length > 10, 'skill-3': word.length >= 20 }" v-for="word in skills"
                :key="word">
                <div class="skill-inner">{{ word }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.skills-view {
    .grid {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .skill-grid-sizer,
        .skill {

            width: 10%;
            height: fit-content;
        }

        .skill {
            font-size: medium;
            padding: 0.5rem;
            border-color: var(--purple);
            border-width: 1px;
            border-style: solid;
            min-width: fit-content;
            margin-top: 1rem;
            color: var(--light-blue);
            border-radius: 20px;
            background-color: var(--purple-75);
            text-transform: capitalize;
            color: black;
            font-weight: 800;

            &:nth-child(2n) {
                font-weight: 800;
                border-color: var(--light-blue);
                color: black;
                background-color: var(--light-blue-75);
            }

            &:nth-child(3n) {
                border-color: var(--pikachu-yellow);
                color: black;
                font-weight: 800;
                background-color: var(--pikachu-yellow-75);

            }


            &:nth-child(4n) {
                border-color: var(--green);
                background-color: var(--green-75);
            }

            .skill-inner {
                display: flex;
                justify-content: center;
                text-align: center;
            }

        }

        .skill-2 {
            width: 20%
        }

        .skill-3 {
            width: 30%
        }

        .skill-gutter-sizer {
            width: 1%;
        }

    }
}
</style>