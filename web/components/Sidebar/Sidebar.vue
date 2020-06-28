<template>
  <transition name="sidebar-fade">
    <template v-if="showSidebar">
      <div class="sidebar">

        <button class="icon-close" @click.prevent="setShowSidebar(!showSidebar)"/>

        <SidebarMenu
          :transformText="`uppercase`"
          :menuLinks="menuMain"
        />

        <SidebarMenu
          :transformText="`uppercase`"
          :menuLinks="menuAdditionalPages"
        />

        <SidebarMenu
          :title="`подпишись на журналы`"
          :transformText="`uppercase`"
          :menuLinks="menuMagazine"
        />

        <SocialNetworks :title="`cosmo в соц сетях`"/>

        <SidebarMenu
          :menuLinks="termsAndPrivacy"
        />

      </div>
    </template>
  </transition>
</template>

<script src="./Sidebar.ts" lang="ts"></script>
<style src="./Sidebar.scss" lang="scss"></style>
