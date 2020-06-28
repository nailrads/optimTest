export default (offsetTop: number, classList: DOMTokenList, fixedClassName:string): void  => {
  window.pageYOffset > offsetTop ? classList.add(fixedClassName): classList.remove(fixedClassName);
};
