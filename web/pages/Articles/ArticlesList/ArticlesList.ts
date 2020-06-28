import {Component, Vue, Action, Getter} from 'nuxt-property-decorator';
import IPost from "~/interfaces/posts/IPost";
import IContext from "~/interfaces/IContext";
import InfinityScroll from "~/helpers/infinityScroll";

import ArticleSmall from '~/components/Articles/ArticleSmall/ArticleSmall';

@Component({
  layout: 'cosmo',
  components: {
    ArticleSmall
  }
})
export default class ArticlesList extends Vue {
  @Action private fetchPosts!: (payload: { page: number }) => IPost[];
  @Getter private getPosts!: IPost[];

  private loading: boolean = false;
  private nextPage: number = 1;
  private articles: IPost[] = [];

  public async asyncData({store}: IContext): Promise<{ articles: [] }> {
    const articles = await store.dispatch('fetchPosts', {page: 1});
    console.log('temp', articles);
    return {articles}
  }

  private async loadMore(): Promise<void> {
    this.loading = true;

    const articles = await this.fetchPosts({page: this.nextPage});

    this.articles.push(...articles);

    ++this.nextPage;
    this.loading = false;
  }

  private created() {
    console.log('Art list', this.articles)
    // this.loadMore();
  }

  private mounted() {
    console.log('Art list 2', this.articles)
    new InfinityScroll(document.getElementById('wrapper') as HTMLDivElement, this.loadMore);
  }
}
