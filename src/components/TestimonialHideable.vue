<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  imgSrc: string
  quoterInfo: { name: string; company: string; role: string; profileUrl: string }
  quote: string
}>()
const emit = defineEmits(['hiddenChange']);

console.log(props.quote.length);
const hideOverflow = ref(true);
const handleOverflowHide = () => {
  hideOverflow.value = !hideOverflow.value;
  emit('hiddenChange', hideOverflow.value);
}
const isLongTestimonial = () => props.quote.length > 360;
</script>
<template>
  <div class="testimonial" :class="{ 'hidden': hideOverflow && isLongTestimonial(), 'long': isLongTestimonial() }">
    <div class="icon">
      <img :src="imgSrc" />
    </div>
    <div class="quote-wrapper" @click="handleOverflowHide">

      <div class="quote">
        <div v-if="isLongTestimonial() && hideOverflow" class="continue-cover">
          <div class="cover"><font-awesome-icon size="xl" :icon="`fa-solid fa-chevron-down`" /></div>
        </div>{{ quote }}
      </div>
      <div class="quoter-info">
        <a :href="quoterInfo.profileUrl">
          <div class="quoter-name-role">
            <div class="quoter-name">{{ `${quoterInfo.name}` }}</div>

            <div class="company-info">{{ `${quoterInfo.role}, ${quoterInfo.company}` }}
            </div>
          </div>
          <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" />
        </a>
      </div>


    </div>

  </div>
</template>
<style lang="scss">
.testimonial {
  --icon-color: var(--light-gray-50);
  --quoter-name-color: var(--pikachu-yellow);
  --quoter-company-color: var(--light-gray);
  --quoter-font-weight: 'normal';

  display: flex;
  min-width: min-content;
  margin-bottom: 1rem;
  break-inside: avoid;
  border-radius: 20px;
  padding: 1rem;
  background-color: var(--dark-gray);
  box-shadow: -2px 2px 3px -1px var(--dark-gray);
  color: white;
  gap: 1rem;

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    img {
      border: 1px solid transparent;
      width: 60px;
      height: auto;
      border-radius: 100%;
      object-fit: cover;
    }
  }

  .quote {
    margin-right: 1rem;
    word-wrap: break-word;
    white-space: normal;
  }

  .quoter-info {
    display: flex;
    text-transform: uppercase;
    font-weight: var(--quoter-font-weight);
    justify-content: space-between;
    font-size: smaller;
    letter-spacing: 0.2rem;
    margin-top: 1rem;

    &:hover {
      --icon-color: var(--white);
      --quoter-font-weight: 800;
    }

    .quoter-name-role {
      display: grid;
      color: var(--quoter-name-color);
      font-weight: var(--quoter-font-weight);
      grid-template-rows: 1fr 1fr;
      width: max-content;
    }

    a {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      color: var(--icon-color);
      gap: 1rem;
    }

    .company-info {
      display: flex;
      color: var(--quoter-company-color);
    }
  }

  .quote-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &.long {
    .quote-wrapper {

      &:hover {
        cursor: pointer;
      }
    }
  }

  &.hidden {
    --box-padding: 1rem;
    --quoter-icon-size: 60px;
    --box-gap: 1rem;

    padding: var(--box-padding);
    gap: var(--box-gap);

    .icon img {
      width: var(--quoter-icon-size);
      height: var(--quoter-icon-size);
    }

    .quote {
      overflow: hidden;
    }

    .quoter-info a {
      gap: var(--box-gap);
    }

    .quote-wrapper {
      max-height: 250px;

    }

    .continue-cover {
      padding-right: 2rem;
      display: flex;
      flex-direction: column;
      width: calc(100% - (var(--quoter-icon-size) + (var(--box-padding) * 2) + var(--box-gap)));
      height: 75%;
      position: absolute;
      color: var(--light-gray);
      justify-content: flex-end;
      text-align: center;
      background: linear-gradient(360deg, var(--dark-gray), var(--dark-gray-75), transparent, transparent, transparent);

      &:hover {
        color: var(--white);
        cursor: pointer;
      }

      .cover {
        padding-bottom: 1rem;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
