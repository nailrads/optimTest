import {Component, Vue, Getter, Mutation} from 'nuxt-property-decorator';
import IMenuLink from '~/interfaces/IMenuLink';
import {linksNavbarMenu, getMenuLinks} from '~/helpers/menuLinks';
import FixedElement from '~/helpers/fixedElement';

@Component
export default class Navbar extends Vue {
    @Getter private showSidebar!: boolean;
    @Mutation private setShowSidebar!: (value: boolean) => void;

    private adButton = {
        img: '/images/kristen_bell.jpg',
        text: 'брось вызов!'
    };

    private get navbarMenu(): IMenuLink[] {
        return getMenuLinks(linksNavbarMenu);
    }

    private fixedNavbar(offsetTop: number, classList: DOMTokenList): void {
        FixedElement(offsetTop, classList, 'sticky');
    }

    mounted() {
        const {offsetTop, classList} = (this.$refs.navbar as HTMLDivElement);
        window.onscroll = () => this.fixedNavbar(offsetTop, classList);
    }
}
