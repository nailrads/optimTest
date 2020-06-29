import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IArticle from "~/interfaces/IArticle";
import Picture from '~/components/Picture/Picture';
import InfinityScroll from "~/helpers/infinityScroll";
import visibleElement, {isVisible} from "~/helpers/visibleElement";

@Component({
    components: {
        Picture
    }
})
export default class ArticleReadMore extends Vue {
    @Prop(Object) private article!: IArticle;

    private widgetName: string = 'ReadMore';
    private show: boolean = false;

    private get widgetShow() {
        return this.show
    }

    private handlerVisible(visible: boolean) {
        if (visible) {
            setTimeout(() => {
                this.show = visible
            }, 500)
        }
    }

    private mounted() {
        const banner = (this.$refs[`widget_${this.widgetName}`] as HTMLDivElement);

        new visibleElement(banner, this.handlerVisible);
        this.show = isVisible(banner);

    }
}
