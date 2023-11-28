<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

type MenuItem = { path: string; name: string }
const router = useRouter()

const headerMenuRoutes = router.getRoutes().filter((route) => route.meta.inHeaderMenu === true)
const menuItems: MenuItem[] = headerMenuRoutes.map(({ path, name }) => {
  return { path, name: name as string }
})
const isSelected = (itemName: string) => router.currentRoute.value.name === itemName

const amLooking = ref(true)

const showNotification = ref(true)
const closeNotification = () => {
  showNotification.value = false
}
</script>
<template>
  <header class="default-header">
    <div
      v-if="showNotification"
      class="notification"
      :class="amLooking ? 'is-looking' : 'not-looking'"
    >
      <div class="contact notification-inner">
        <div class="color-block"></div>

        <div class="notification-text">
          <div class="notification-text-inner">
            <h4>
              {{
                amLooking
                  ? 'Currently Seeking New Opportunities'
                  : 'Not Currently Seeking New Opportunities'
              }}
            </h4>
            <p>
              {{
                amLooking
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
              <a href="tel:+61431863592" aria-label="Call phone number"
                ><font-awesome-icon icon="fa-solid fa-phone" size="md" />+61431863592</a
              >
            </div>
            <div class="email">
              <a href="mailto:miekeuyt@gmail.com" aria-label="Send email"
                ><font-awesome-icon icon="fa-solid fa-envelope" size="lg" />miekeuyt@gmail.com</a
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
  --header-bg-base-color: var(--darkest-gray);
  --header-item-bg-color: var(--gray);
  --header-text-color: white;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding-inline: 1rem;
  padding: 0;
  background-color: var(--header-bg-base-color);
  color: var(--header-text-color);
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
          color: var(--yellow);
        }

        .last-name {
          color: var(--blue);
        }
      }

      .full-name {
        display: flex;
        font-size: small;
        letter-spacing: 0.2rem;
        gap: 0.5rem;

        .first-name {
          color: var(--mid-yellow);
        }

        color: var(--lightest-gray);
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
      --header-item-bg-color: var(--dark-gray);
      --header-text-color: var(--yellow);
      font-weight: bold;
    }

    &:hover {
      --header-item-bg-color: var(--gray);
      --header-text-color: var(--white);
      cursor: pointer;
    }

    --header-item-bg-color: var(--darker-gray);

    --header-text-color: var(--yellow);
    background-color: var(--header-item-bg-color);

    width: 100%;
    display: flex;
    border-radius: 2px;
    justify-content: center;

    color: var(--header-text-color);
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
    color: var(--lighter-gray);

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
          color: var(--white);
          cursor: pointer;
        }
      }
    }

    .internet-links {
      display: flex;
      gap: 1.2rem;

      :hover {
        color: var(--white);
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

.notification {
  --looking-color: var(--green);
  --not-looking-color: var(--mid-yellow);

  // width: 100%;
  // padding: 3rem;

  display: flex;
  height: max-content;
  // justify-items: center;
  // background-color: var(--mid-blue);
  // font-size: 11px;

  font-weight: normal;
  // max-width: 4rem;
  &.not-looking {
    // color: var(--darkest-gray);
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

    // padding-inline: 0.5rem;
    .notification-text {
      margin: 0;
      padding: 0;
      font-size: 14px;
      // padding: 0.5rem;
      border: 1px solid var(--looking-color);
      padding-left: 0.5rem;
      padding-block: 0.2rem;
      // flex-wrap: wrap;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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
          // align-items: center;
          // background-color: var(--dark-gray);
          &:hover {
            // background-color: var(--gray);
            color: var(--white);
            border: 1px solid var(--light-gray);
            cursor: pointer;
          }
        }
      }
    }
    width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: row;
    // flex-direction: column;
    // justify-items: center;
    // gap: 1rem;
  }
}
</style>
