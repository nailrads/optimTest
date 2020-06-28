import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class ButtonDiscussion extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private to!: string;
}
