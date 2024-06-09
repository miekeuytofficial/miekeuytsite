<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'

const props = defineProps<{ looking: boolean | undefined }>()
const amLooking = computed(() => props.looking)
const showNotification = ref(amLooking.value != undefined)

const closeNotification = () => {
  showNotification.value = false
}
</script>

<template>
  <Transition appear name="slide-fade">
    <div
      v-if="showNotification"
      class="notification"
      :class="props.looking ? 'is-looking' : 'not-looking'"
    >
      <div class="notification-inner">
        <div class="color-block"></div>

        <div class="notification-text">
          <div class="notification-text-inner">
            <h4>
              {{
                props.looking
                  ? 'Currently Seeking New Opportunities'
                  : 'Not Currently Seeking New Opportunities'
              }}
            </h4>
            <p>
              {{
                props.looking
                  ? "I'm currently seeking new opportunities. Feel free to give me a call or reach out via LinkedIn or email."
                  : `I\'m not actively looking for new opportunities right now. Feel free to
        reach out via LinkedIn or email.`
              }}
            </p>
          </div>
          <div class="close-button-wrapper" @click="closeNotification()">
            <div class="close-button">x</div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.notification {
  --looking-color: var(--green);
  --not-looking-color: var(--mid-yellow);

  display: flex;
  height: max-content;
  font-weight: normal;

  &.not-looking {
    .color-block {
      background-color: var(--not-looking-color);
    }
    .notification-inner .notification-text {
      border: 1px solid var(--not-looking-color);
    }
  }

  .color-block {
    width: 5%;
    max-width: 3rem;
    min-width: 1rem;
    background-color: var(--looking-color);
    height: 100%;
  }
  .notification-inner {
    gap: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--lighter-gray);

    .notification-text {
      margin: 0;
      padding: 0;
      font-size: 14px;
      border: 1px solid var(--looking-color);
      padding-left: 0.5rem;
      padding-block: 0.2rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 0.5rem;

      h4,
      p {
        margin: 0;
      }
      .notification-text-inner {
        display: flex;
        flex-direction: column;
      }
      .close-button-wrapper {
        .close-button {
          margin: 0.2rem;
          margin-right: 0.5rem;
          padding-inline: 0.5rem;

          border: 1px solid var(--gray);
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          &:hover {
            color: var(--white);
            border: 1px solid var(--light-gray);
            cursor: pointer;
          }
        }
      }
    }
    width: 100%;
    display: flex;
    flex-direction: row;
  }
}
@keyframes slidedown {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    transform: translateY(1px);
    opacity: 1;
  }
}

@keyframes slideup {
  0% {
    opacity: 1;
  }

  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
}
.slide-fade-enter-active {
  animation: slidedown 0.5s ease-out;
}

.slide-fade-leave-active {
  animation: slideup 0.5s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

@media (max-width: 500px) {
  h4 {
    font-size: 12px;
    letter-spacing: 0.2rem;
  }
}
</style>
