<script setup lang="ts">
import { useRouter } from 'vue-router'
window.onload = function () {
    if (window.innerWidth < 700) {
        alert('Recommended for desktop viewing. Display issues may occur on smaller screens.');
    }
};
type MenuItem = { path: string; name: string }
const router = useRouter()

const headerMenuRoutes = router.getRoutes().filter((route) => route.meta.inHeaderMenu === true)
const menuItems: MenuItem[] = headerMenuRoutes.map(({ path, name }) => {
    return { path, name: name as string }
})
const isSelected = (itemName: string) => router.currentRoute.value.name === itemName
</script>
<template>
    <header class="default-header">
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
                        <div class="phone">
                            <a href="tel:+61431863592"><font-awesome-icon icon="fa-solid fa-phone"
                                    size="md" />+61431863592</a>
                        </div>
                        <div class="email">
                            <a href="mailto:miekeuyt@gmail.com"><font-awesome-icon icon="fa-solid fa-envelope"
                                    size="lg" />miekeuyt@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div class="contact">
                    <div class="internet-links">
                        <a href="https://www.linkedin.com/in/moniqueus/"><font-awesome-icon icon="fa-brands fa-linkedin"
                                size="2xl" /></a>
                        <a href="https://github.com/miekeuytofficial/miekeuytsite"><font-awesome-icon
                                icon="fa-brands fa-github" size="2xl" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-items">
            <div v-for="item in menuItems" :key="item.name" @click="router.push({ name: item.name })" class="header-item"
                :class="{ 'header-item--selected': isSelected(item.name as string) }">
                {{ item.name }}
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.default-header {


    --header-bg-base-color: var(--dark-blue-gray);
    --header-bg-color: var(--gray);
    --header-item-bg-color: var(--blue-gray);
    --header-text-color: black;

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
            padding-block: 1rem;

            .miekeuyt {
                display: flex;

                .first-name {
                    color: var(--pikachu-yellow);
                }

                .last-name {
                    color: var(--light-blue);
                }
            }

            .full-name {
                display: flex;
                font-size: small;
                letter-spacing: 0.2rem;
                gap: 0.5rem;

                .first-name {
                    color: var(--pikachu-yellow-75);
                }

                color: var(--light-gray);
            }
        }
    }

    .header-items {
        box-shadow: -2px 2px 3px -1px var(--dark-gray);
        display: flex;
        width: 100%;
    }

    .header-item {
        &--selected {
            --header-item-bg-color: var(--gray);
            --header-text-color: var(--pikachu-yellow);
            font-weight: bold;
        }

        &:hover {
            --header-item-bg-color: var(--light-gray-50);
            --header-text-color: var(--white);
            cursor: pointer;
        }

        --header-item-bg-color: var(--dark-gray);

        --header-text-color: var(--warm-yellow);
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
        padding-block: 1.6rem;
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
        color: var(--light-gray-50);

        .contact-details {
            display: flex;
            gap: 2rem;

            .phone,
            .email {
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

@media (max-width:800px) {
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

@media (max-width:400px) {
    .default-header {
        .header-shared {
            flex-direction: column;
            padding-bottom: 1rem;
        }

        .header-items {
            flex-direction: column
        }
    }


}
</style>
