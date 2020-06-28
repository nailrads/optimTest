<template>
  <div class="article-small">
    <div class="article-small__cnt">
      <nuxt-link
        :prefetch="false"
        :to="{name: 'article-detail', params:{
          category: article.section.code,
          id: article.id,
          code: article.code
        }}"
        tag="div"
        class="article-small__cnt__image"
      >

        <img
          v-lazy="article.preview_image.url"
          src="/icons/heart.svg"
          :alt="article.name"
        />

        <small>
          {{article.date}}
        </small>
      </nuxt-link>


      <nuxt-link
        :prefetch="false"
        v-text="article.section.name"
        :to="{name: 'home'}"
        class="article-small__cnt__category"
        tag="div"
      />

      <nuxt-link
        :prefetch="false"
        v-text="article.name"
        :to="{name: 'home'}"
        class="article-small__cnt__text"
        tag="h3"
      />


    </div>
  </div>
</template>

<script src="./ArticleSmall.ts" lang="ts"></script>
<style src="./ArticleSmall.scss" lang="scss" scoped></style>
