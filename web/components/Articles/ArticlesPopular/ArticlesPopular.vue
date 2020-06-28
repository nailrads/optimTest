<template>
  <ol class="articles-popular">
    <nuxt-link
            v-for="article in articles"
            :key="article.id"
            :prefetch="false"
            :to="{name: 'article-detail', params:{
                          category: article.section.code,
                          id: article.id,
                          code: article.code
                        }}"
            tag="li"
            class="articles-popular__item"
    >
      <img
        v-lazy="article.preview_image.url"
        src="/icons/heart.svg"
        :alt="article.name"
      />

<!--      <span v-text="article.name"/>-->
      <span v-text="`Американский офицер Коди Грей из Калкаски (штат Мичиган) поделился.`"/>

    </nuxt-link>
  </ol>
</template>

<script src="./ArticlesPopular.ts" lang="ts"></script>
<style src="./ArticlesPopular.scss" lang="scss" scoped></style>
