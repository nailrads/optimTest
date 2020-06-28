import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class ButtonLike extends Vue {
  @Prop(Number) private numberOfLikes!: number;
}
