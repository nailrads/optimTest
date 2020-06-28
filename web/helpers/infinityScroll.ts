export default class InfinityScroll {
  constructor(
    private el: HTMLDivElement,
    private actor: Function
  ) {
    this.addListener('scroll');
  }

  shouldLoadMore(): boolean {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    return Math.max(bodyHeight - (scrollPosition + windowSize), 0) === 0;
  }

  addListener(event: string) {

    document.addEventListener(event, () => {
      if (this.shouldLoadMore()) {
        this.actor();
      }
    })
  }
}
