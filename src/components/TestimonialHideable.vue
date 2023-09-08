<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{

  quoterInfo: { name: string; company: string; role: string; linkedInUrl?: string, profileImgUrl?: string }
  quote: string | string[]
}>()
const emit = defineEmits(['hiddenChange']);

const hideOverflow = ref(true);
const handleOverflowHide = () => {
  hideOverflow.value = !hideOverflow.value;
  emit('hiddenChange', hideOverflow.value);
}

const longTestimonialLimit = window.innerWidth > 400 ? 360 : 50;
const isLongTestimonial = () => {
  if (typeof props.quote === 'string') {
    return props.quote.length > longTestimonialLimit;
  }
  else {
    let counter = 0;
    props.quote.forEach(q => {
      counter += q.length;
    });
    return counter > longTestimonialLimit;
  }
}
const showImage = ref(!!props.quoterInfo.profileImgUrl);
</script>

<template>
  <div class="testimonial" :class="{ 'hidden': hideOverflow && isLongTestimonial(), 'long': isLongTestimonial() }">
    <div class="icon">
      <img v-if="showImage" :src="quoterInfo.profileImgUrl" aria-label="testimonial-quoter-icon"
        @error="() => { showImage = false; }" />
      <font-awesome-icon v-else icon="fa-solid fa-circle-user" :style="{
        'fontSize': '60px', 'color': 'var(--light-gray)', 'background': 'white', 'border-radius': '100%'
      }" />
    </div>
    <div class="quote-wrapper" @click="handleOverflowHide">

      <div class="quote">
        <div v-if="isLongTestimonial() && hideOverflow" class="continue-cover"
          :aria-label="`${quote[0]} Expand to read more.`">
          <div class="cover" :aria-label="`${quote[0]} (Expand to read more)`"><font-awesome-icon size="xl"
              :icon="`fa-solid fa-chevron-down`" aria-label="Expand testimonial" />
          </div>
        </div>
        <div v-if="(typeof quote === 'string')">{{ quote }}</div>
        <p v-else v-for="(q, qIdx) in  quote " :style="{ marginTop: (qIdx === 0 ? 0 : 1) }">{{ q }}<br /></p>
      </div>
      <div class="quoter-info">
        <a :href="quoterInfo.linkedInUrl">
          <div class="quoter-name-role">
            <div class="quoter-name">{{ `${quoterInfo.name} ` }}</div>

            <div class="company-info">{{ `${quoterInfo.role}, ${quoterInfo.company} ` }}
            </div>
          </div>
          <font-awesome-icon icon="fa-brands fa-linkedin" size="2xl" aria-label="linkedIn" />
        </a>
      </div>


    </div>

  </div>
</template>
<style lang="scss">
.testimonial {
  --icon-color: var(--light-gray);
  --quoter-name-color: var(--yellow);
  --quoter-company-color: var(--lightest-gray);
  --quoter-font-weight: 'normal';

  display: flex;
  min-width: min-content;
  margin-bottom: 1rem;
  break-inside: avoid;
  border-radius: 20px;
  padding: 1rem;
  background-color: var(--darker-gray);
  box-shadow: -2px 2px 3px -1px var(--darker-gray);
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
      z-index: 3;
    }

    .quote-wrapper {
      max-height: 250px;

    }

    .continue-cover {
      background: linear-gradient(360deg, var(--darker-gray), var(--darker-gray-75), transparent, transparent, transparent);
      position: absolute;
      left: 50%;
      bottom: 20%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: end;
      width: 100%;
      height: 100%;
      cursor: pointer;

      &:hover {
        color: var(--white);
        cursor: pointer;
      }

      .cover {
        padding-bottom: 1rem;
      }
    }
  }
}

@media (max-width:700px) {

  .testimonials-view .grid .grid-sizer,
  .testimonials-view .grid .testimonial {
    min-width: 100%;

  }

}

@media (max-width:500px) {
  .testimonials-view .grid .testimonial {
    display: flex;
    flex-direction: column;

    &.long {
      .quote {

        .continue-cover {
          .cover {
            padding-bottom: 10%
          }

          width: calc(100% - (var(--box-padding) * 2) + var(--box-gap));
        }
      }
    }
  }
}
</style>
