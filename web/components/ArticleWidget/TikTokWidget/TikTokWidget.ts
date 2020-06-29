import { Component, Vue, Prop } from "nuxt-property-decorator";
// import { initTiktok } from "~/lib/embed";

@Component
export default class TikTokWidget extends Vue {
  @Prop(String) link!: string;

  private mounted() {
    // initTiktok({
    //   url: this.link,
    //   containerEl: this.$el,
    // });
  }
}
