<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, computed, onMounted, nextTick } from 'vue'
import { useHeaderStore } from '../stores/header'
import Notification from './Notification.vue'

type MenuItem = { path: string; name: string }
const router = useRouter()

const headerMenuRoutes = router.getRoutes().filter((route) => route.meta.inHeaderMenu === true)
const menuItems: MenuItem[] = headerMenuRoutes.map(({ path, name }) => {
  return { path, name: name as string }
})
const isSelected = (itemName: string) => router.currentRoute.value.name === itemName

const headerStore = useHeaderStore()
const headerInfo = ref({ phone: '', email: '' })
const amLooking = computed(() => {
  if (headerStore.header) {
    return headerStore.header.looking
  }
})

onMounted(async () => {
  headerInfo.value = await headerStore.getHeaderInfo()
  await nextTick()
})
</script>
<template>
  <header class="default-header">
    <notification v-if="headerStore.header" :looking="amLooking" />
    <div class="header-shared">
      <div class="title">
        <div class="miekeuyt">
          <div class="first-name">Mieke</div>
          <div class="last-name">Uyt</div>
        </div>
        <div class="full-name">
          <div class="first-name">Monique</div>
          <div class="last-name">Uytterhoeven-Spark</div>
        </div>
      </div>

      <div class="contact-group">
        <div class="contact">
          <div class="contact-details">
            <div v-if="amLooking" class="phone">
              <a :href="`tel:${headerInfo.phone}`" aria-label="Call phone number"
                ><font-awesome-icon icon="fa-solid fa-phone" size="md" />{{ headerInfo.phone }}</a
              >
            </div>
            <div class="email">
              <a :href="`mailto:${headerInfo.email}`" aria-label="Send email"
                ><font-awesome-icon icon="fa-solid fa-envelope" size="lg" />{{
                  headerInfo.email
                }}</a
              >
            </div>
          </div>
        </div>
        <div class="contact">
          <div class="internet-links">
            <a href="https://www.linkedin.com/in/moniqueus/" aria-label="Go to LinkedIn profile"
              ><font-awesome-icon icon="fa-brands fa-linkedin" size="2xl"
            /></a>
            <a
              href="https://github.com/miekeuytofficial/miekeuytsite"
              aria-label="Go to source code on Github"
              ><font-awesome-icon icon="fa-brands fa-github" size="2xl"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="header-items">
      <div
        v-for="item in menuItems"
        :key="item.name"
        @click="router.push({ name: item.name })"
        class="header-item"
        :class="{ 'header-item--selected': isSelected(item.name as string) }"
      >
        {{ item.name }}
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.default-header {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-inline: 1rem;
  padding: 0;
  background-color: var(--header-bg);
  color: var(--header-item-text-color);
  width: 100%;

  .header-shared {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-inline: 3rem;
    text-shadow: 1px black;

    .title {
      display: flex;
      flex-direction: column;
      font-size: xx-large;
      text-transform: uppercase;
      font-weight: 800;
      letter-spacing: 0.7rem;
      padding-block: 1.6rem;

      .miekeuyt {
        display: flex;

        .first-name {
          color: var(--header-title-text-primary); //var(--yellow);
        }

        .last-name {
          color: var(--header-title-text-secondary); //var(--blue);
        }
      }

      .full-name {
        display: flex;
        font-size: small;
        letter-spacing: 0.2rem;
        gap: 0.5rem;

        .first-name {
          color: var(--header-subtitle-text-primary); //var(--mid-yellow);
        }

        color: var(--header-subtitle-text-secondary); //var(--lightest-gray);
      }
    }
  }

  .header-items {
    box-shadow: -2px 2px 3px -1px var(--darker-gray);
    display: flex;
    width: 100%;
  }

  .header-item {
    &--selected {
      --header-item-bg: var(--header-item-bg-selected); //var(--dark-gray);
      --header-item-text-color: var(--header-item-text-color-selected); //var(--yellow);
      font-weight: bold;
    }

    &:hover {
      --header-item-bg: var(--header-item-bg-hover);
      --header-item-text-color: var(--header-item-text-color-hover);
      cursor: pointer;
    }

    background-color: var(--header-item-bg);

    width: 100%;
    display: flex;
    border-radius: 2px;
    justify-content: center;

    color: var(--header-item-text-color);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0.5rem;
    padding-block: 1rem;
    align-items: center;
    text-align: center;
  }

  .contact-group {
    display: flex;
    gap: 3rem;
  }

  .contact {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--header-contact-item-text-color);

    .contact-details {
      display: flex;
      gap: 2rem;

      .phone,
      .email,
      .resume {
        a {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        &:hover {
          color: var(--header-contact-item-text-color-hover); //var(--white);
          cursor: pointer;
        }
      }
    }

    .internet-links {
      display: flex;
      gap: 1.2rem;

      :hover {
        color: var(--header-contact-item-text-color-hover);
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 800px) {
  .default-header {
    .header-shared {
      padding-inline: 1rem;
    }

    .header-item,
    .title {
      letter-spacing: 0.2rem;
    }

    .header-item {
      font-size: 12px;
    }

    .contact-group {
      flex-direction: row;
      gap: 1rem;

      .contact-details {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
}

@media (max-width: 500px) {
  .default-header {
    .header-shared {
      flex-direction: column;
      padding-bottom: 1rem;
    }

    .header-items {
      flex-direction: column;
    }

    .contact-group {
      flex-direction: row;
      gap: 1rem;
      justify-content: space-between;
    }
  }
}
</style>
