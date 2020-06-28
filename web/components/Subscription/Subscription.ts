import {Component, Vue, Prop, Watch} from 'nuxt-property-decorator';
import SubscriptionForm from "~/components/SubscriptionForm/SubscriptionForm";

@Component({
    components: {
        SubscriptionForm
    }
})
export default class Subscription extends Vue {
    @Prop(String) private category!: string;

    private title = 'Это крутая тема!';
    private description = 'Хочу получать  бьюти-лайфхаки и советы по уходу.';

    private send = '';

    private form = {
        email: '',
        agreement: false
    };

    private sendSubscribe(): void {
        alert()
        this.send = 'success';
        this.title = 'Спасибо';
        this.description = 'Мы отправили на ваш email письмо с подтверждением.'
    }
}
