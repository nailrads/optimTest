import {Component, Vue, Getter, Mutation} from 'nuxt-property-decorator';
import IMenuLink from "~/interfaces/IMenuLink";
import {
  linksSidebarMenuMain,
  linksMenuMagazine,
  linksTermsAndPrivacy,
  linksAdditionalPages,
  getMenuLinks
} from '~/helpers/menuLinks';

import SidebarMenu from '~/components/Sidebar/SidebarMenu/SidebarMenu';
import SocialNetworks from '~/components/SocialNetworks/SocialNetworks';

@Component({
  components: {
    SidebarMenu,
    SocialNetworks
  }
})
export default class Sidebar extends Vue {
  @Getter private showSidebar!: boolean;
  @Mutation private setShowSidebar!: (value: boolean) => void;

  private get menuMain(): IMenuLink[] {
    return getMenuLinks(linksSidebarMenuMain);
  }

  private get menuAdditionalPages(): IMenuLink[] {
    return getMenuLinks(linksAdditionalPages);
  }

  private get menuMagazine(): IMenuLink[] {
    return getMenuLinks(linksMenuMagazine);
  }

  private get termsAndPrivacy(): IMenuLink[] {
    return getMenuLinks(linksTermsAndPrivacy);
  }

}
