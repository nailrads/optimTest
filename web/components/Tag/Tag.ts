import {Component, Vue, Prop} from 'nuxt-property-decorator';

const Images = () => import('~/components/Images/Images');
const ArticleReadMore = () => import('~/components/Articles/ArticleReadMore/ArticleReadMore');
const AuthorQuote = () => import('~/components/AuthorQuote/AuthorQuote');
const AuthorInArticle = () => import('~/components/AuthorInArticle/AuthorInArticle');
const ArticleNote = () => import('~/components/ArticleNote/ArticleNote');
const PlaceholderWidget = () => import('~/components/PlaceholderWidget/PlaceholderWidget');

@Component({
    components: {
        ArticleReadMore,
        AuthorQuote,
        AuthorInArticle,
        ArticleNote,
        PlaceholderWidget,
        Images
    }
})
export default class Tag extends Vue {
    @Prop(Object) private tag!: any;
    @Prop(Number) private articleId!: number;

    protected get widgetName(): string {
        return this.tag.widget.name;
    }

    private get detectWidgetByPlaceholder(): boolean {
        const widgetsForPlaceholder = [
            'coub',
            'instagram',
            'video',
            'tiktok'
        ];
        return widgetsForPlaceholder.includes(this.widgetName)
    }
}
