<template>
    <div></div>
<!--    <div class="a_-d-wrapper" :banner-name="bannerName">-->
<!--        <div-->
<!--            :class="['a_-d', {'&#45;&#45;border':withBorder}, {'a_-d&#45;&#45;sticky': bannerName === 'sticky', 'a_-d&#45;&#45;background': bannerName === 'background'}, {'a_-d&#45;&#45;indent': isDetailTop}]"-->
<!--            :ref="`adBanner_${bannerName}`"-->
<!--            :id="bannerName === 'background' ? 'AdUnitBgPlace':''"-->
<!--        >-->

<!--            <template v-if="isShow">-->
<!--                <button-->
<!--                    v-if="bannerName === 'sticky' && visible"-->
<!--                    :class="[-->
<!--                        'a_-d__close',-->
<!--                        'icon-close',-->
<!--                        'btn-sticky-close',-->
<!--                        {-->
<!--                            'btn-sticky-close&#45;&#45;mobile': device === 'mobile'-->
<!--                        },-->
<!--                    ]"-->
<!--                    @click.prevent="hideSticky"-->
<!--                />-->
<!--                <DFP-->
<!--                    v-if="device && banner"-->
<!--                    :ad-unit="banner.id"-->
<!--                    :size="sizes(banner.sizes)"-->
<!--                    :id="bannerHash"-->
<!--                    :key="hash"-->
<!--                    :collapseEmptyDiv="true"-->
<!--                    :targetings="targetings"-->
<!--                />-->

<!--                <template v-if="!isDetailTop">-->
<!--                    <span v-if="withBorder" class="a_-d__info">РЕКЛАМА – ПРОДОЛЖЕНИЕ НИЖЕ</span>-->
<!--                </template>-->
<!--            </template>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script src="./Ad.ts" lang="ts"></script>
<style src="./Ad.scss" lang="scss" scoped></style>
