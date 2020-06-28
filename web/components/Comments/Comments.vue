<template>
    <section class="comments">

        <div class="comments__info">

            <h3 class="comments__info__title">
                Комментарии
                <svg-icon name="shape"/>
            </h3>

            <span>
                Текст комментария
            </span>

            <form class="comments__info__form" @submit.prevent="nextStep()">
                <textarea class="comments__info__form__textarea"></textarea>
                <button class="send-button" type="submit">
                    ОТПРАВИТЬ
                </button>
            </form>
        </div>

        <div class="comment" v-for="(comment, index) in comments" :key="index" :type="comment.parentCommentId ? 'reply' : ''">

            <div class="comment__header">

                <img :src="comment.user.img" alt="avatar">

                <div class="comment__user">
                    <span>{{comment.user.name}}</span>
                    <span>{{comment.date}}</span>
                </div>


            </div>

            <div class="comment__body">

                <template v-if="comment.parentCommentId && commentParent(comment.parentCommentId).isParent">
                    <div class="comment__body__answer">
                        <span>{{commentParent(comment.parentCommentId).user}}</span>
                        <p>{{commentParent(comment.parentCommentId).text}}</p>
                    </div>
                </template>

                <p v-html="comment.text"/>
            </div>

            <div class="comment__footer">

                <div class="comment__admin">
                    <span>пожаловаться</span>
                    <div class="comment__admin__event" @click="showModal = !showModal">...</div>

                    <template v-if="showModal">
                        <div class="comment__admin__modal">
                            <span @click="removeComment()">Удалить</span>
                            <span @click="banComment()">Бан</span>
                        </div>
                    </template>
                </div>

                <div class="comment__actions">
                    <!--                    <button class="reply" >-->
                    <button :class="reply ? 'reply' : 'reply'" @click="setReply(comment.id)">
                        <svg-icon name="icon-reply"/>
                    </button>

                    <button :class="comment.id === likeForComment ? 'like_active' : 'like'" @click="setLike(comment.id)">
                        <svg-icon name="like-comment"/>
                        <template v-if="comment.id === likeForComment">
                            <span>326</span>
                        </template>
                    </button>
                </div>
            </div>

            <template v-if="comment.id === replyForComment">
                <div class="comment__reply">

                    <form class="comments__info__form" @submit.prevent="nextStep()">
                        <textarea class="comments__info__form__textarea"></textarea>
                        <button class="send-button" type="submit">
                            ОТПРАВИТЬ
                        </button>
                    </form>
                </div>
            </template>
        </div>

    </section>
</template>

<script src="./Comments.ts" lang="ts"></script>
<style src="./Comments.scss" lang="scss" scoped></style>


