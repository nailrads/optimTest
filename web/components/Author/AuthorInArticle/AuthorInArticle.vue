<template>
    <div class="author-in-article">
        <nuxt-link
            :to="{name: 'home'}"
            tag="div"
            class="author-in-article__cnt"
        >
            <img
                v-lazy="author.image"
                src="/icons/heart.svg"
                :alt="author.name"
            />

            <div class="author-info">
                <span
                    v-text="author.name"
                    field="name"
                />

                <span
                    v-text="author.role"
                    field="role"
                />
            </div>

        </nuxt-link>
    </div>
</template>

<script src="./AuthorInArticle.ts" lang="ts"></script>
<style src="./AuthorInArticle.scss" lang="scss" scoped></style>
