import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IPost from "~/interfaces/posts/IPost";

@Component
export default class ArticleSmall extends Vue {
  @Prop(Object) private article!: IPost;
}
