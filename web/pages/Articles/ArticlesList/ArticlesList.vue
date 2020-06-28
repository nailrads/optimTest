<template>
  <div class="content">
    <div class="container">

      <div class="row">
        <div class="col col-xl-9">

          <ul class="row articles-list">

            <template v-if="articles">
              <ArticleSmall
                v-for="(article, index) in articles"
                :key="index"
                :article="article"
                class="col col-xl-4"
              />
            </template>

            <template v-else>
              <pre>
                {{articles}}
              </pre>
            </template>

          </ul>

        </div>

        <div class="col col-xl-3">
          <img v-lazy="'/images/adDemo.jpeg'" src="/icons/heart.svg" alt="photo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ArticlesList.ts" lang="ts"></script>
<style src="./ArticlesList.scss" lang="scss" scoped></style>
