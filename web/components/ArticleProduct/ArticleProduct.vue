<template>
    <div class="article-product" v-if="product">

        <Picture
            class="images__item"
            :image="product"
            :alt="product.alt || product.source"
            :block="'product'"
        />

        <div class="article-product__footer">
            <span v-html="product.alt || product.caption"/>

            <a :href="product.buy_link" @click="gaSend" target="_blank">
                в магазин
            </a>
        </div>

    </div>
</template>

<script src="./ArticleProduct.ts" lang="ts"></script>
<style src="./ArticleProduct.scss" lang="scss" scoped></style>
