import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IArticleRecommend from '~/interfaces/posts/IArticleRecommend';

@Component
export default class ArticlesRecommends extends Vue {
    @Prop(Array) private articles!: IArticleRecommend[] | any;
}
