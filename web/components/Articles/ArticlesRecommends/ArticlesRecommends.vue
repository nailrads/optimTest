<template>
    <div class="articles-recommends" v-if="articles">

        <ul class="articles-recommends__list">
            <template v-for="(article, index) in articles">
                <nuxt-link
                        :prefetch="false"
                        :to="{name: 'article-detail', params:{
                          category: article.section.code,
                          id: article.id,
                          code: article.code
                        }}"
                        :key="index"
                        tag="li"
                >
                    <img
                            v-lazy="article.preview_image.url"
                            src="/icons/heart.svg"
                            :alt="article.name"
                    />
                    <span :text-content.prop="article.name | cropText(55)"/>
                </nuxt-link>
            </template>
        </ul>

    </div>

</template>

<script src="./ArticlesRecommends.ts" lang="ts"></script>
<style src="./ArticlesRecommends.scss" lang="scss" scoped></style>
