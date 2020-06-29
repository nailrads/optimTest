import {Component, Vue, Prop} from 'nuxt-property-decorator';

@Component
export default class ArticleNote extends Vue {
    @Prop(String) private note!: string;
}
