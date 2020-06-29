<template>
    <div :ref="`widget_${widgetName}`">

        <template v-if="widgetShow">
            <nuxt-link
                class="read-more"
                :prefetch="false"
                :to="{
                    name: 'detail',
                    params:{
                      section: article.section.code,
                      subsection: article.section.subsection.code,
                      code: article.code
                    },
                    query: {
                        from: 'article_cosmo_recommend'
                    }
                }"
            >

                <Picture :image="article.image" :alt="article.name" :title="article.name" :block="'readMore'" class="picture"/>

                <div class="read-more__text">
                    <h3 :text-content.prop="article.name"/>
                    <span>Читать всю статью</span>
                </div>

            </nuxt-link>
        </template>

        <template v-else>
            <div class="read-more" style="padding-bottom: 0;">
                <div class="picture post-skeleton__thumbnail"></div>
                <div class="read-more__text">
                    <div class="post-skeleton__text-shell">
                        <div class="post-skeleton__title"></div>
                        <div class="post-skeleton__desc"></div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script src="./ArticleReadMore.ts" lang="ts"></script>
<style src="./ArticleReadMore.scss" lang="scss" scoped></style>
