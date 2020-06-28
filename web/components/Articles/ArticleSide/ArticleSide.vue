<template>
  <div class="article-side">

    <AuthorInArticle :author="article.author"/>

    <ButtonLike :numberOfLikes="article.likes"/>

    <SocialNetworks
      :type="`article`"
      :title="`Поделись с друзьями`"
    />

    <ButtonDiscussion :title="`Вступай в дискуссию`"/>

    <ArticlesRecommends :articles="articleRecommend"/>

  </div>
</template>

<script src="./ArticleSide.ts" lang="ts"></script>
<style src="./ArticleSide.scss" lang="scss" scoped></style>
