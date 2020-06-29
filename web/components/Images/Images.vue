<template>
    <div class="images" v-if="images">

        <template v-if="singleImage">

            <div class="image-single">

                <template v-if="isProduct">
                    <ArticleProduct :product="getProduct(picture)"/>
                </template>

                <template v-else>

                    <Picture
                        class="images__item"
                        :image="picture"
                        :title="picture.caption"
                        :alt="picture.alt"
                    />

                    <ImagesSources :sources="sources"/>
                </template>
            </div>

        </template>

        <template v-else>

            <div class="images__list" :data-count-image="picture.length">
                <template v-for="(image, index) in picture">
                    <Picture
                        class="images__item"
                        :image="image"
                        :title="image.caption"
                        :alt="image.alt"
                        :key="`${image.alt}${index}`"
                    />
                </template>
            </div>

            <ImagesSources :sources="sourcesList"/>

        </template>
    </div>
</template>

<script src="./Images.ts" lang="ts"></script>
<style src="./Images.scss" lang="scss" scoped></style>
