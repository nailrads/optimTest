import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IAuthor from "~/interfaces/IAuthor";

@Component
export default class AuthorInArticle extends Vue {
    @Prop(Object) private author!: IAuthor;

    mounted() {
        console.log('author', this.author)
    }
}
