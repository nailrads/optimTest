import {Component, Vue, Prop} from 'nuxt-property-decorator';
import Picture from '~/components/Picture/Picture';

@Component({
    components: {
        Picture
    }
})
export default class AuthorQuote extends Vue {
    @Prop(Object) private quote!: { text: string, name: string, description?: string, image?: any };
}
