<template>
    <div class="article-detail container">

        <h1>{{robot}}</h1>

        <DFP
            v-if="!robot"
            :ad-unit="'cosmonew/mob-billboard-topline'"
            :size="[[320, 50]]"
        />

        <div class="content">

            <div class="content__main">
                <div class="article-detail__info">
                    <div class="article-date">
                        {{article.date_code}}
                    </div>

                </div>

                <h1 class="article-detail__title">
                    {{article.name}}
                </h1>

                <h3 class="article-detail__subtitle">
                    {{article.preview_text}}
                </h3>

                <img
                    v-lazy="article.image.default['650'].init"
                    src="/icons/heart.svg"
                    :alt="article.name"
                />

                <div class="article-detail__cnt">

                    <div class="article-detail__desc">

                        <template v-for="(text, index) in article.detail_text">

                            <h1 v-if="text.tag === 'h1'" v-html="text.text" :key="index"></h1>

                            <p v-if="text.tag === 'p'" v-html="text.text" :key="index"></p>

                        </template>
                    </div>
                </div>
            </div>

            <div class="content__side">
                <img v-lazy="'/images/adDemo.jpeg'" id="targetTest" src="/icons/heart.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script src="./ArticleDetail.ts" lang="ts"></script>
<style src="./ArticleDetail.scss" lang="scss"></style>
