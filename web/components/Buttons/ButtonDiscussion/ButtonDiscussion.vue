<template>
  <div class="button-discussion">
    <template v-if="title">
      <small class="text-muted" v-text="title"/>
    </template>

    <button class="button-discussion__btn">
      <nuxt-link
        v-text="`обсудить`"
        :to="{name: 'home'}"
        tag="span"
      />
    </button>
  </div>
</template>

<script src="./ButtonDiscussion.ts" lang="ts"></script>
<style src="./ButtonDiscussion.scss" lang="scss" scoped></style>
