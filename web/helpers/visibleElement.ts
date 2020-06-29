// export default class VisibleElement {
//   constructor(
//     private el: HTMLElement,
//     private actor: Function
//   ) {
//     this.addListener('scroll');
//   }
//
//   isVisible(): any {
//     let targetPosition = {
//       top: window.pageYOffset + this.el.getBoundingClientRect().top,
//       left: window.pageXOffset + this.el.getBoundingClientRect().left,
//       right: window.pageXOffset + this.el.getBoundingClientRect().right,
//       bottom: window.pageYOffset + this.el.getBoundingClientRect().bottom
//     };
//     // Получаем позиции окна
//     let windowPosition = {
//       top: window.pageYOffset,
//       left: window.pageXOffset,
//       right: window.pageXOffset + document.documentElement.clientWidth,
//       bottom: window.pageYOffset + document.documentElement.clientHeight
//     };
//
//     // Если элемент полностью видно, то запускаем следующий код
//     return (
//       targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
//       targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
//       targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
//       targetPosition.left < windowPosition.right); // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
//
//   }
//
//   addListener(event: string) {
//     document.addEventListener(event, () => {
//       if (this.isVisible()) {
//         this.actor();
//       }
//     })
//   }
// }

const allPositionsElemet = (el: HTMLElement) => {
  // Все позиции элемента
  let targetPosition = {
    top: window.pageYOffset + el.getBoundingClientRect().top,
    left: window.pageXOffset + el.getBoundingClientRect().left,
    right: window.pageXOffset + el.getBoundingClientRect().right,
    bottom: window.pageYOffset + el.getBoundingClientRect().bottom
  };
  // Получаем позиции окна
  let windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  };

  return {
    targetPosition,
    windowPosition
  }
};

export const isVisible = (el: HTMLElement): boolean => {
  let {targetPosition, windowPosition} = allPositionsElemet(el);

  return (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right)   // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
};

export default class VisibleElement {
  constructor(
      private el: HTMLElement,
      private actor: Function
  ) {
    this.addListener('scroll');
  }

  addListener(event: string): void {
    document.addEventListener(event, () => this.actor(isVisible(this.el)));
  }
}

