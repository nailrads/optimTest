import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class SubscriptionForm extends Vue {
    @Prop(String) private category!: string;
    @Prop(Object) private form!: { email: string, agreement: boolean };
    @Prop(Boolean) private mobile?: boolean;

    private sendSubscription(): void {
        if (this.validation()) {
            this.$emit('subscribe');
        }
    }

    private validStatus = true;

    private errorsTemp = {
        email: '',
        agreement: ''
    };

    private validEmail(): boolean {
        const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(this.form.email);
    }

    private validation() {
        this.errorsTemp.email = !this.validEmail() ? 'error' : '';
        this.errorsTemp.agreement = !this.form.agreement ? 'error' : '';
        this.validStatus = this.validEmail() && this.form.agreement;
        return this.validStatus;
    }
}
