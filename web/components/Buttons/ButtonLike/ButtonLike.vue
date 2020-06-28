<template>
  <button class="button-like">
    <svg-icon name="heart-like"/>
    <span v-text="`Нравится`" />
    <span class="likes" v-text="numberOfLikes"/>
  </button>
</template>

<script src="./ButtonLike.ts" lang="ts"></script>
<style src="./ButtonLike.scss" lang="scss" scoped></style>
