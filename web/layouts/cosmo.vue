<template>
    <div id="wrapper">

        <Header/>
        <Sidebar/>
        <Navbar/>

        <nuxt/>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'nuxt-property-decorator';
    import Header from '~/components/Header/Header';
    import Navbar from '~/components/Navbar/Navbar';
    import Sidebar from '~/components/Sidebar/Sidebar';

    @Component({
        components: {
            Header,
            Navbar,
            Sidebar
        },
        head() {
            return {
                title: 'Cosmopolitan - все о моде, красоте и отношениях'
            }
        }
    })
    export default class Cosmo extends Vue {
    }

</script>

<style lang="scss">
    $white: #ffffff;
    $cosmo-pink: #ec008c;
    $text-muted: #999999;
    $muted-black: #303030;

    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap&subset=cyrillic');

    * {
        outline: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', sans-serif;
    }

    html {
        background-color: $white;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    img {
        background-color: rgba(grey, 0.2);
    }

    .breadcrumbs {
        list-style: none;
        display: flex;
        align-items: center;
    }

    .content {
        padding: 0 10px;
        margin: 0 auto;
        display: flex;
        width: 100%;

        @include customScreen(650px) {
            padding: 0 25px;
            width: 650px;
        }

        @include sm {
          padding: 0;
        }

        @include md {
            width: 900px;
        }

        @include lg {
            width: 1120px;
        }

        .content__main {
            width: 100%;

            @include sm {
                width: 100%;
            }
            @include md {
                width: 570px;
            }
            @include lg {
                width: 740px;
            }
        }

        .content__side {
            display: none;

            @include md {
                display: block;
                margin-left: auto;
                width: 300px;
            }
        }
    }

    .sticky + .content {
        padding-top: 87px;
    }

    .mt-30 {
        margin-top: 30px;
    }

    .mb-30 {
        margin-bottom: 30px;
    }

    /*.container {*/
    /*  margin: 0 auto;*/
    /*}*/

    .text-muted {
        color: $text-muted;
    }

    button {
        background-color: transparent;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    .icon-close {
        position: absolute;
        width: 24px;
        height: 24px;

        top: 30px;
        right: 30px;

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: 2px;
            width: inherit;
            background-color: $white;
            top: 12px;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: block;
            transition: background-color .15s linear 0s;
        }

        &::before {
            transform: rotateZ(45deg);
        }

        &::after {
            transform: rotateZ(-45deg);
        }

        &:hover {
            cursor: pointer;

            &::before,
            &::after {
                background-color: $cosmo-pink;
            }
        }
    }
</style>
