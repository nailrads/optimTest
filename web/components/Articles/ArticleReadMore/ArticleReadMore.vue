<template>
    <div class="read-more">

        <img
            v-lazy="article.preview_image.url"
            src="/icons/heart.svg"
            alt=""
        />

        <div class="read-more__text">
            <h3 :text-content.prop="article.name | cropText(78)"/>
            <nuxt-link
                :prefetch="false"
                :to="{name: 'article-detail', params:{
                  category: article.section.code,
                  id: article.id,
                  code: article.code
                }}"
                v-text="`Читать всю статью`"
            />
        </div>

    </div>
</template>

<script src="./ArticleReadMore.ts" lang="ts"></script>
<style src="./ArticleReadMore.scss" lang="scss" scoped></style>
