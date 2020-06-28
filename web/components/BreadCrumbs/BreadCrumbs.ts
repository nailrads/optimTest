import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class BreadCrumbs extends Vue {
  @Prop(Object) private crumbs!: any;
}
