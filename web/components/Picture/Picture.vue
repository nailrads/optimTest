<template>
    <img
        v-if="picture && image"
        v-lazy="picture.init"
        src="/icons/heart.svg"
        :alt="alt"
    />
</template>

<script src="./Picture.ts" lang="ts"></script>
<style src="./Picture.scss" lang="scss" scoped></style>
