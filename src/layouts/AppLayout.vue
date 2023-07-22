<script lang="ts" setup>

import { useRoute } from 'vue-router';
import { watch } from 'vue';
import DefaultLayout from './DefaultLayout.vue';

const route = useRoute();

const layouts = {
    "DefaultLayout": DefaultLayout
};
let routeLayout = layouts.DefaultLayout;

watch(route, async (r) => {
    try {
        routeLayout = layouts[r.meta.layout as keyof typeof layouts] ?? DefaultLayout;
    } catch (e) {
        console.log(e);
        routeLayout = DefaultLayout;
    }
}, { immediate: true });

</script>
<template>
    <component :is="routeLayout">
        <slot />
    </component>
</template>
