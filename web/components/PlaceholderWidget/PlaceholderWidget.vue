<template>
  <div v-if="widget">
    <div
      v-if="showPlaceholder"
      :class="['widget', { widget_with_image: !!widget.params.image }]"
    >
      <div class="widget__title" v-if="!!title">
        <span v-text="title" />
      </div>

      <div class="widget__placeholder" @click="renderWidget">
        <Picture
          v-if="widget.params.image"
          :image="widget.params.image"
          :alt="widget.params.name"
          :block="'placeholderWidget'"
          class="widget__image"
        />

        <img
          v-else
          :src="'/images/skeleton_picture.png'"
          :alt="widget.params.name"
          style="width: 100%;"
        />

        <div class="widget__event">
          <span class="widget__play" title="play" />

          <span v-text="'нажми и смотри'" />
        </div>
      </div>
    </div>
    <template v-if="!showPlaceholder">
      <ArticleWidget :widget="widget" />
    </template>
  </div>
</template>

<script src="./PlaceholderWidget.ts" lang="ts"></script>
<style src="./PlaceholderWidget.scss" lang="scss" scoped></style>
