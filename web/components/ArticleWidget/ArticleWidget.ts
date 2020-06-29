import { Component, Vue, Prop } from "nuxt-property-decorator";

const InstagramWidget = () => import('./InstagramWidget/InstagramWidget');

const IframeWidget = () => import('./IframeWidget/IframeWidget');

const TikTokWidget = () => import('./TikTokWidget/TikTokWidget');

@Component({
  components: {
    InstagramWidget,
    IframeWidget,
    TikTokWidget
  },
})
export default class ArticleWidget extends Vue {
  @Prop(Object) private widget!: any;

  protected get widgetType(): string {
    return this.widget.params.type || "";
  }

  protected get isIframeVideo(): boolean {
    return (
      typeof this.widget.params.code === "string" &&
      this.widget.params.code.indexOf("<iframe") > -1
    );
  }
}
