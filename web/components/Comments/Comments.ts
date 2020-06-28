import {Component, Vue} from 'nuxt-property-decorator';

@Component
export default class Subscription extends Vue {
    private replyForComment: number | null = null;
    private likeForComment: number | null = null;
    private liked: boolean = false;
    private reply: boolean = false;

    private step = 1;

    private showModal: boolean = false;
    private comments: any = [
        {
            id: 1,
            user: {
                name: 'Adriana Chechik',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqiVkxFlswHmiHbdhtO_McIESO619GMBFhNq6H1GumkqlJQHk&s'
            },
            text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32 </br> Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.',
            date: '19 СЕНТЯБРЯ, 21:03',
            parentCommentId: null
        },
        {
            id: 2,
            user: {
                name: 'Thor',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmYFow6W2gU4L-FZXvuTaoHJa1ck34_kFqgk-gss09i36Fe42CQ&s'
            },
            text: 'Питание это одно из самых главных условий, но и про вспомогательные средства не стоит забывать. Очень хорошо помогает чай с клевером , прогулки на свежем воздухе, если вес большой или есть проблемы с суставами. Если их нет, то легкий бег. В свое время я бегала в парке и пила ци-клим, в весе набора не было, да и симптомы климакса стали менее выражены.',
            date: '19 СЕНТЯБРЯ, 21:03',
            parentCommentId: 1
        },
        {
            id: 3,
            user: {
                name: 'Capitan America',
                img: 'data:image/jpeg;base64,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'
            },
            text: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.',
            date: '19 СЕНТЯБРЯ, 21:03',
            parentCommentId: 2
        },
        {
            id: 4,
            user: {
                name: 'EVA MANDES',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTesxa57F7IbtV_bhEr_cDmv4zPN-Vo225o7H5tQa87UnETB_3Q&s'
            },
            text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
            date: '19 СЕНТЯБРЯ, 21:03',
            parentCommentId: 2
        },
        {
            id: 5,
            user: {
                name: 'EVA MANDES',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTesxa57F7IbtV_bhEr_cDmv4zPN-Vo225o7H5tQa87UnETB_3Q&s'
            },
            text: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
            date: '19 СЕНТЯБРЯ, 21:03',
            parentCommentId: null
        }
    ];

    private nextStep() {
        this.step++
    }

    private setLike(commentId: number): void {
        this.likeForComment = commentId;
        this.liked = !this.liked;
    }

    private setReply(commentId: number): void {
        this.replyForComment = commentId;
        this.reply = !this.reply;
    }
    private commentParent(commentId: string):any {
        const parent = this.comments.filter((comment:any) => comment.id === commentId)[0];

        if (parent) {
            const {user, text, parentCommentId} = parent ? parent : null;

            return {user: user.name, text, isParent: !!parentCommentId}
        }
    }
}