import {Component, Vue} from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {

  private showHomeBanner(): void {
    if (this.$route.name === 'home') {
    }
  }

  mounted() {
      (this.$refs.headerTemp as any).classList.add('header__cnt_home');
    // this.showHomeBanner();
  }
}
