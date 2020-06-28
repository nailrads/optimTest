<template>
    <div class="author-article">
        <nuxt-link
                :to="{name: 'home'}"
                tag="div"
                class="author-article__cnt"
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

<script src="./AuthorArticle.ts" lang="ts"></script>
<style src="./AuthorArticle.scss" lang="scss" scoped></style>
