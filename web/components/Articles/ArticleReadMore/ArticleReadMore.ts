import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IPost from "~/interfaces/posts/IPost";

@Component
export default class ArticleReadMore extends Vue {
    @Prop(Object) private article!: IPost;
}
