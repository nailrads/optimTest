<template>
    <div class="author-quote">
        <p v-html="`«${quote}»`"/>

        <div>
            <img
                v-lazy="author.image"
                src="/icons/heart.svg"
                :alt="author.name"
            />
            <span
                v-text="author.name"
            />
            <span
                v-text="author.role"
            />
        </div>
    </div>
</template>

<script src="./AuthorQuote.ts" lang="ts"></script>
<style src="./AuthorQuote.scss" lang="scss" scoped></style>
