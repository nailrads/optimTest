<template>
  <div class="iframe-video">
    <div class="iframe-video__layer" ref="layer" />
    <div v-html="code" />
  </div>
</template>

<script src="./IframeWidget.ts" lang="ts" />
<style src="./IframeWidget.scss" lang="scss" scoped />
