<template>
    <article class="article">

        <div class="wrap">

            <div class="cols --middle">

                <div class="col__cnt">

                    <div class="cnt__top">

                        <!--  Begin Breadcrumbs  -->
                        <div>
                            <nuxt-link
                                :to="{name:'home'}"
                                v-text="article.section.name"
                                no-prefetch
                                class="cnt__top__text"
                            />
                            <span
                                v-text="'/'"
                                class="cnt__top__text"
                            />
                            <nuxt-link
                                :to="{name:'home'}"
                                v-text="article.section.subsection.name"
                                no-prefetch
                                class="cnt__top__text"
                            />
                        </div>
                        <!--  /end Breadcrumbs  -->

                        <time
                            v-text="article.date_code"
                            pubdate
                            class="cnt__top__text"
                        />
                    </div>

                    <div class="cnt__info">
                        <p
                            v-html="article.name"
                            class="article__title"
                        />
                        <p
                            v-html="article.preview_text"
                            class="article__description"
                        />
                    </div>

                    <div class="article__author">
                        <Picture
                            :image="article.author.image"
                            :block="'author'"
                            :alt="article.author.name"
                            class="article__author__photo"
                        />
                        <div class="article__author__info">
                            <p v-text="article.author.name"/>
                            <p v-html="article.author.description"/>
                        </div>
                    </div>

                    <div class="cnt__preview">
                        <Picture
                            :image="article.image"
                            :block="'detailMain'"
                            :alt="article.name"
                        />

                        {{article.widgets}}

                        <template v-for="collectCnt in collectsCnt">

                            <template v-for="item in collectCnt">
                                <Tag
                                    v-if="!item.tag.includes('billboard')"
                                    :key="JSON.stringify(item)"
                                    :tag="item"
                                    :articleId="article.id"
                                />

                                <template v-else>
                                    <div>
                                        <br>
                                        <hr>

                                        {{item.tag}}
                                        <hr>
                                        <br>
<!--                                        <Ad-->
<!--                                            v-if="!article.off_ad"-->
<!--                                            :bannerName="item.tag"-->
<!--                                            :key="article.code"-->
<!--                                            :page="1"-->
<!--                                            :articleId="article.id"-->
<!--                                            :articleTags="article.tags"-->
<!--                                            class="mt30"-->
<!--                                        />-->
                                        <br>
                                        <hr>
                                        <br>
                                    </div>
                                </template>
                            </template>
                        </template>


                    </div>

                </div>


                <div class="col__side">

                </div>
            </div>

        </div>
    </article>
</template>

<script src="./ArticleDetail.ts" lang="ts"></script>
<style src="./ArticleDetail.scss" lang="scss" scoped></style>
