<template>
  <div class="sidebar-menu" line="bottom">

    <template v-if="title">
      <small class="text-muted" v-text="title"/>
    </template>

    <ul class="sidebar-menu__list">
      <nuxt-link
        v-for="link in menuLinks"
        v-text="link.name"
        :key="link.slug"
        :transform-text="transformText"
        :to="{name: link.path}"
        tag="li"
        class="sidebar-menu__list__item"
      />
    </ul>
  </div>
</template>

<script src="./SidebarMenu.ts" lang="ts"></script>
<style src="./SidebarMenu.scss" lang="scss" scoped></style>
