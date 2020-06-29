import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class IframeWidget extends Vue {
  @Prop(String) code!: string;

  protected mounted() {
    const layer = this.$refs.layer as HTMLDivElement;
    const iframe = this.$el.querySelector("iframe") as HTMLIFrameElement;
    const ratio: number =
      parseFloat(iframe.getAttribute("data-ratio") as string);
    if (ratio > 0) {
      layer.style.paddingTop = `${parseFloat((100 /ratio).toFixed(4))}%`;
    }
  }
}
