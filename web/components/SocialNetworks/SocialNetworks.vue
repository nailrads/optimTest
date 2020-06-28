<template>
  <div class="social-networks">

    <template v-if="title">
      <small class="text-muted" v-text="title"/>
    </template>

    <ul class="social-networks__list">
      <li
        v-for="socialNetwork in socialNetworks"
        :key="socialNetwork.slug"
        :social-network="socialNetwork.slug"
      >
        <svg-icon :name="socialNetwork.slug"/>
      </li>
    </ul>
  </div>
</template>

<script src="./SocialNetworks.ts" lang="ts"></script>
<style src="./SocialNetworks.scss" lang="scss" scoped></style>
