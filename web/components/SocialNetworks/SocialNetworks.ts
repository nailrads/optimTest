import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IMenuLink from "~/interfaces/IMenuLink";
import {linksSocialNetworks, getMenuLinks} from '~/helpers/menuLinks';

@Component
export default class SocialNetworks extends Vue {
  @Prop(String) private title?: string;

  private get socialNetworks(): IMenuLink[] {
    return getMenuLinks(linksSocialNetworks);
  }
}
