import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IAuthor from "~/interfaces/IAuthor";
import Picture from '~/components/Picture/Picture';

@Component({
    components: {
        Picture
    }
})
export default class AuthorInArticle extends Vue {
    @Prop(Object) private author!: IAuthor;
}
