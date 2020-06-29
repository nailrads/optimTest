<template>
  <div>
    <InstagramWidget
      v-if="widget.name === 'instagram'"
      :code="widget.params.html"
    />

    <TikTokWidget
      v-else-if="widget.name === 'tiktok'"
      :link="widget.params.link"
    />

    <IframeWidget
      v-else-if="widget.name === 'coub'"
      :code="widget.params.html"
    />

    <template v-else-if="widget.name === 'video'">
      <IframeWidget
        v-if="widgetType === 'youtube' || isIframeVideo"
        :code="widget.params.code"
      />

      <div v-else v-html="widget.params.code" />
    </template>

    <div v-else v-html="widget.params.html" />
  </div>
</template>

<script lang="ts" src="./ArticleWidget.ts" />
