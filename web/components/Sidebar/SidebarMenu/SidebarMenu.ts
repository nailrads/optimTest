import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IMenuLink from '~/interfaces/IMenuLink';

@Component
export default class SidebarMenu extends Vue {
  @Prop(Array) private menuLinks!: IMenuLink[];
  @Prop(String) private transformText?: string;
  @Prop(String) private title?: string;
}
