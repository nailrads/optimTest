<template>
    <div id="wrapper">

        <Header v-if="showHeader"/>
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
        private get showHeader() {
            return this.$route.name === 'home'
        }
    }

</script>

<style lang="scss">
    .container {
        max-width: 100%;
        min-width: 320px;
    }


    $defaultIndent: 30px;
    $widthPage: 1160px;
    $widthMainMd: 570px;
    $widthMainLg: 790px;
    $widthSide: 300px;

    $borderDefault: 1px solid $cottonCandy;



    .wrap {
        max-width: $widthPage;
        min-width: 290px;
        margin-left: auto;
        margin-right: auto;
        flex: 1 1 auto;
        width: 100%;
        //background: $white;
        padding-left: 10px;
        padding-right: 10px;

        @include xsm {
            width: calc(100% - 10px);
        }

        @include sm {
            width: calc(100% - 78px);
        }

        @include md {
            width: calc(100% - 84px);
        }

        @include lg {
            width: 100%;
        }

        // &--ad-bg {
        //   //position: relative;
        //   background: $white;
        //   z-index: 99;
        //   padding: 10px;
        //   overflow: hidden;

        //   @include xsm {
        //     padding: 20px;
        //   }
        // }
    }

    .sticky {
        position: sticky;
        top: $defaultIndent + 57px;
    }


    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        @extend %tenor_sans;
        color: $muted-black;
    }

    h6 {
        @include fontParams(18px, 26px);
        display: inline;
        box-shadow: inset 0 -12px 0 #FFECE6;

        @include xs {
            @include fontParams(22px, 31px);
        }
    }

    ::selection {
        background-color: $red;
        color: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        -webkit-overflow-scrolling: touch;
        box-sizing: border-box;

        &,
        &:after,
        &:before {
            box-sizing: border-box;
        }
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

    button {
        border: 0;
        appearance: none;
        user-select: none;
        background: none;
        appearance: none;
        &:not(:disabled) {
            cursor: pointer;
        }
        &:disabled {
            pointer-events: none;
        }
    }

    .cols {
        display: grid;

        &.--middle {
            grid-template-columns: 100%;

            @include md {
                grid-template-columns: $widthMainMd $widthSide;
                grid-column-gap: 30px;
            }
            @include lg {
                grid-template-columns: ($widthMainLg - 50) $widthSide;
                grid-column-gap: 80px;
            }
        }

        &.--full {
            grid-template-columns: minmax(100%, 1fr);
        }

        &.--default {
            grid-template-columns: 100%;

            @include md {
                grid-template-columns: minmax($widthMainMd, auto) $widthSide;
                grid-column-gap: 30px;
            }
            @include lg {
                grid-template-columns: $widthMainLg $widthSide;
                grid-column-gap: 70px;
            }
        }

        .col__cnt {
            width: 100%;
            overflow: hidden;
        }

        .col__side {
            display: none;
            overflow: hidden;
            @include md {
                display: block;
                position: sticky;
                top: 67px;
                padding-bottom: $defaultIndent;
            }
        }
    }


</style>
