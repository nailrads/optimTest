<template>
    <form
        :class="`subscription-form${mobile ? '--mobile': ''}`"
        @submit.prevent="sendSubscription()"
    >
        <div class="subscription-form__data">
            <template v-if="errorsTemp.email">
                <span class="error">
                    Неправильный email
                </span>
            </template>
            <input v-model="form.email" placeholder="Введи Email" type="email" :validation="errorsTemp.email"/>
            <button type="submit">отправить</button>
        </div>

        <div class="subscription-form__agreement">
            <input v-model="form.agreement" type="checkbox" :id="`agreement${mobile ? '--m':''}`"/>
            <label :for="`agreement${mobile ? '--m':''}`" :type="form.agreement ? 'active': 'inactive'"
                   :validation="errorsTemp.agreement">
                Я соглашаюсь с
                <nuxt-link :to="{name: 'terms'}" v-text="`правилами сайта`"/>
            </label>
        </div>
    </form>
</template>

<script src="./SubscriptionForm.ts" lang="ts"></script>
<style src="./SubscriptionForm.scss" lang="scss" scoped></style>
