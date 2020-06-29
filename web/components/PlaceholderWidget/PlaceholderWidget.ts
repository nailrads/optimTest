import { Component, Vue, Prop } from "nuxt-property-decorator";

const Picture = () => import('~/components/Picture/Picture');
const ArticleWidget = () => import('~/components/ArticleWidget/ArticleWidget');

@Component({
  components: {
    ArticleWidget,
    Picture,
  }
})
export default class PlaceholderWidget extends Vue {
  @Prop(Object) private widget!: any;

  private showPlaceholder: boolean = true;

  protected get widgetType(): string {
    return this.widget.params.type || "";
  }

  protected get title(): string {
    const title = this.widgetType;

    if (!this.widgetType || this.widgetType === 'default') {
      return this.widget.name;
    }

    return this.widgetType;
  }


  private renderWidget() {
    this.showPlaceholder = !this.showPlaceholder;
  }
}
