import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IMenuLink from "~/interfaces/IMenuLink";
import {linksArticleShare, getMenuLinks} from '~/helpers/menuLinks';

@Component
export default class ArticleShare extends Vue {
  @Prop(String) private type!: string;
  @Prop(String) private title?: string;

  private get links(): IMenuLink[] {
    return getMenuLinks(linksArticleShare);
  }
}
