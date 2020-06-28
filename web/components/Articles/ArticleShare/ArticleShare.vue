<template>
    <div class="social-networks">

        <ul class="social-networks__list">
            <li
                    v-for="link in links"
                    :key="link.slug"
                    :social-network="link.slug"
            >
                <div class="social-network__cnt">
                    <svg-icon :name="link.slug"/>
                    <span v-text="link.name"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script src="./ArticleShare.ts" lang="ts"></script>
<style src="./ArticleShare.scss" lang="scss" scoped></style>
