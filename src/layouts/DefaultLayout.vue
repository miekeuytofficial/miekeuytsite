<script lang="ts" setup>
import DefaultHeader from '@/components/DefaultHeader.vue'
</script>
<template>
    <div class="default-layout">
        <DefaultHeader />
        <main>
            <slot />
        </main>
    </div>
</template>