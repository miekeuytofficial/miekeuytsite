<script lang="ts" setup>
import DefaultHeader from '@/components/DefaultHeader.vue'
import { watch, computed } from 'vue'
import { useLoadingStore } from '../stores/loading'
import DefaultFooter from '@/components/DefaultFooter.vue'
const loadingStore = useLoadingStore()
const loading = computed(() => loadingStore.loading)
const headerLoading = computed(() => loadingStore.loadingHeader)
watch(loading, () => {})
watch(headerLoading, () => {})
</script>
<template>
  <div class="default-layout">
    <Transition name="slide-fade">
      <div class="loading-wrapper loading-wrapper--header" v-if="headerLoading">
        <div class="loading-inner">
          <div class="loading-icon">
            <font-awesome-icon icon="fa-icon fa-spinner" size="xl" />
          </div>
          <div class="loading-text">Loading...</div>
        </div>
      </div>
    </Transition>
    <DefaultHeader />
    <main>
      <Transition name="slide-fade">
        <div class="loading-wrapper" v-if="loading">
          <div class="loading-inner">
            <div class="loading-icon">
              <font-awesome-icon icon="fa-icon fa-spinner" size="xl" />
            </div>
            <div class="loading-text">Loading...</div>
          </div>
        </div>
      </Transition>
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>

<style lang="scss">
.default-layout {
  transition: all 0.5s ease;
}

.loading-wrapper {
  @keyframes rotate {
    0% {
      transform-origin: 50%;
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes slidedown {
    0% {
      transform: translateY(-20px);
      // opacity: 0;
      // display: none;
    }

    100% {
      transform: translateY(1px);
      opacity: 1;
      // display: block;
    }
  }

  @keyframes slideup {
    0% {
      // transform: translateY(1px);
      opacity: 1;
      // display: block;
    }

    100% {
      transform: translateY(-30px);
      // opacity: 0;
      // display: none;
    }
  }

  &--header {
    position: fixed;
  }

  background-color: var(--darker-gray-75);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;

  /*
  Enter and leave animations can use different
  durations and timing functions.
*/
  &.slide-fade-enter-active {
    // transition: all 0.3s ease-out;
    animation: slidedown 0.5s ease-out;
  }

  &.slide-fade-leave-active {
    animation: slideup 0.5s ease-in;
    // transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &.slide-fade-enter-from,
  &.slide-fade-leave-to {
    opacity: 0;
  }

  // &.slide-in {
  //     animation: slidedown 0.5s ease;
  // }

  // &.slide-out {
  //     animation: slideup 0.5s ease;
  // }

  // animation: slidedown 0.5s both;

  .loading-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .loading-text {
    position: relative;
    top: 0;
  }

  .loading-icon {
    animation: rotate 1.5s linear infinite;
  }
}
</style>
