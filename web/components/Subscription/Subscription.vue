<template>
    <div class="subscription">

        <div class="subscription__cnt">
            <img
                v-lazy="`/images/subscription-img.png`"
                src="/icons/heart.svg"
                alt=""
            />

            <div class="subscription__text">
                <h6>{{title}}</h6>
                <span>{{description}}</span>

                <SubscriptionForm
                    v-if="!send"
                    :form="form"
                    :category="category"
                    @subscribe="sendSubscribe"
                />
            </div>
        </div>

        <SubscriptionForm
            v-if="!send"
            :form="form"
            :category="category"
            mobile
            @subscribe="sendSubscribe"
        />

    </div>
</template>

<script src="./Subscription.ts" lang="ts"></script>
<style src="./Subscription.scss" lang="scss" scoped></style>
