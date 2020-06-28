import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IPost from "~/interfaces/posts/IPost";

@Component
export default class ArticlesPopular extends Vue {
  @Prop(Array) private articles!: IPost[];
}
