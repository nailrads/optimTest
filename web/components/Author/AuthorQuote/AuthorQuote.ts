import {Component, Vue, Prop} from 'nuxt-property-decorator';
import IAuthor from "~/interfaces/IAuthor";

@Component
export default class AuthorQuote extends Vue {
  @Prop(Object) private author!: IAuthor;
  @Prop(String) private quote!: string;
}
