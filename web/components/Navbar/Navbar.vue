<template>
    <div class="navbar" ref="navbar">
        <div class="wrap">

            <div class="cols --middle">
                <div class="content">

                    <div class="navbar__cnt">

                        <div class="navbar__cnt__side">


                            <button class="burger" title="Меню" @click.prevent="setShowSidebar(!showSidebar)">
                                <svg-icon name="burger"/>
                            </button>

                            <nuxt-link :to="{name: 'home'}" class="logo" title="Главная">
                                <svg-icon name="logo-cosmo"/>
                            </nuxt-link>

                            <ul class="navbar__menu">
                                <nuxt-link
                                    v-for="link in navbarMenu"
                                    v-text="link.name"
                                    :key="link.path"
                                    :to="{name: link.path}"
                                    tag="li"
                                    class="navbar__menu__item"
                                />
                            </ul>

                        </div>

                        <div class="navbar__cnt__side">

                            <button class="navbar__ad-button" title="Реклама">
                                <img v-lazy="adButton.img" src="/icons/heart.svg" alt="Брось Вызов"/>
                                <span v-text="adButton.text"/>
                            </button>

                            <button class="navbar__wish-list" title="Желания">
                                <svg-icon name="heart-wish"/>
                            </button>

                            <button class="navbar__search" title="Поиск">
                                <svg-icon name="loupe"/>
                            </button>

                            <button class="navbar__login" title="Вход">
                                <svg-icon name="default-user"/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./Navbar.ts" lang="ts"></script>
<style src="./Navbar.scss" lang="scss" scoped></style>
