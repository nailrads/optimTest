<template>
    <div class="author-quote">
        <p v-html="`«${quote.text}»`"/>

        <div class="expert">
            <Picture
                v-if="quote.image"
                :image="quote.image"
                :alt="quote.name"
                :block="'author'"
                class="picture"
            />
            <span
                v-text="quote.name"
            />
            <span
                v-if="quote.description"
                v-html="quote.description"
            />
        </div>
    </div>
</template>

<script src="./AuthorQuote.ts" lang="ts"></script>
<style src="./AuthorQuote.scss" lang="scss" scoped></style>
