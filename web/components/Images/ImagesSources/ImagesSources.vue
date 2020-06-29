<template>
    <div class="images-sources">
        <template v-for="(source, index) in sources">
            <div
                v-if="source"
                :key="getHashKey(index,source)"
                v-html="getSource(source, index)"
            />
        </template>
    </div>
</template>

<script src="./ImagesSources.ts" lang="ts"></script>
<style src="./ImagesSources.scss" lang="scss" scoped></style>
