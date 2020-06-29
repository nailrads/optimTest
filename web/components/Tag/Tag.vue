<template>
    <div :id="!!tag.id ? tag.id : ''">
        <h1
            v-if="tag.tag === 'h1'"
            v-html="tag.text"
            :key="tag.text"
        />
        <h2
            v-if="tag.tag === 'h2'"
            v-html="tag.text"
            :key="tag.text"
        />
        <h3
            v-if="tag.tag === 'h3'"
            v-html="tag.text"
            :key="tag.text"
        />
        <h4
            v-if="tag.tag === 'h4'"
            v-html="tag.text"
            :key="tag.text"
        />
        <h5
            v-if="tag.tag === 'h5'"
            v-html="tag.text"
            :key="tag.text"
        />
        <h6
            v-if="tag.tag === 'h6'"
            v-html="tag.text"
            :key="tag.text"
        />

        <ul
            v-if="tag.tag === 'ul'"
            v-html="tag.text"
            :key="tag.text"
        />

        <ol
            v-if="tag.tag === 'ol'"
            v-html="tag.text"
            :key="tag.text"
        />

        <template v-if="tag.widget">
            <Images
                v-if="tag.widget.name === 'images' && tag.widget.params.images"
                :key="tag.widget.params.images[0].url"
                :images="tag.widget.params.images"
            />

            <AuthorQuote
                v-else-if="tag.widget.name === 'quote'"
                :key="tag.widget.params.text"
                :quote="tag.widget.params"
            />
            <AuthorInArticle
                v-else-if="tag.widget.name === 'expert'"
                :key="tag.widget.params.name"
                :author="tag.widget.params"
            />

                <ArticleReadMore
                    v-else-if="tag.widget.name === 'relevant_article' && tag.widget.params"
                    :key="tag.widget.params.code"
                    :article="tag.widget.params"
                />

<!--            <Gallery-->
<!--                v-else-if="tag.widget.name === 'gallery' && tag.widget.params.images[0]"-->
<!--                :key="tag.widget.params.images[0].image[0]"-->
<!--                :params="tag.widget.params"-->
<!--            />-->

            <ArticleNote
                v-else-if="tag.widget.name === 'note'"
                :key="tag.widget.params.text"
                :note="tag.widget.params.text"
            />

<!--            <Poll-->
<!--                v-else-if="tag.widget.name === 'poll'"-->
<!--                :key="tag.widget.params.name"-->
<!--                :poll="tag.widget.params"-->
<!--                :id="articleId"-->
<!--                :articleActiveFromWeek="articleActiveFromWeek"-->
<!--                :articleCreatorId="articleCreatorId"-->
<!--            />-->

            <PlaceholderWidget
                v-else-if="detectWidgetByPlaceholder"
                :key="tag.widget.name"
                :widget="tag.widget"
            />

<!--            &lt;!&ndash;     ToDo отрефакторить WidgetTest       &ndash;&gt;-->
<!--            <WidgetTest-->
<!--                v-else-if="tag.widget.name === 'test'"-->
<!--                :key="tag.widget.params.id"-->
<!--                :widgetParams="{-->
<!--                  id: tag.widget.params.id,-->
<!--                  totalQuestions: tag.widget.params.total_questions,-->
<!--                  image: tag.widget.params.image,-->
<!--                  questions: tag.widget.params.questions,-->
<!--                  name: tag.widget.params.name-->
<!--                }"-->
<!--                class="widget-test"-->
<!--            />-->

<!--            <VerstkaIOWidget-->
<!--                v-else-if="tag.widget.name === 'verstka'"-->
<!--                :widget="tag.widget"-->
<!--                :withBanner="ioWithBanner"-->
<!--            />-->
        </template>

        <p
            v-else-if="tag.tag === 'p'"
            v-html="tag.text"
            :key="tag.text"
        />
        <div
            v-else-if="tag.tag === 'div'"
            v-html="tag.text"
            :key="tag.text"
        />
    </div>
</template>

<script src="./Tag.ts" lang="ts"></script>
<style src="./Tag.scss" lang="scss" scoped></style>
