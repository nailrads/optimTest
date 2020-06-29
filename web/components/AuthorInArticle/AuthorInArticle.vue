<template>
    <div class="author-in-article">
        <div class="author-in-article__cnt">

            <Picture
                v-if="author.image"
                :image="author.image"
                :alt="author.name"
                :block="'author'"
                class="picture"
            />

            <div class="author-info">
                <span
                    v-html="author.name"
                    field="name"
                />

                <span
                    v-html="author.description"
                    field="description"
                />
            </div>

        </div>
    </div>
</template>

<script src="./AuthorInArticle.ts" lang="ts"></script>
<style src="./AuthorInArticle.scss" lang="scss" scoped></style>
