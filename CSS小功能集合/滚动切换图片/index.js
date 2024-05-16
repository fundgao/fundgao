/*
 * @Author: gmx
 * @Date: 2023-05-18 14:36:02
 * @LastEditors: gmx
 * @LastEditTime: 2023-05-24 22:50:06
 * @Description: 
 * @Version: 1.0
 */
var imgs = [
  './assets/rotate1.jpg',
  './assets/rotate2.jpg',
  './assets/rotate3.jpg',
  './assets/rotate4.jpg',
  './assets/rotate5.jpg',
];
const container = document.querySelector('.container');
var curIndex = 0;
let loading = false
const createItem = (index) => {
  const imgUrl = imgs[index]
  var dom = document.createElement('div')
  dom.classList.add('item');
  dom.innerHTML = `<img src="${imgUrl}" />`;
  container.appendChild(dom);
  return dom
}
const resetElement = () => {
  container.innerHTML = '';
  var perv = curIndex === 0 ? imgs.length -1 : curIndex - 1;
  var next = curIndex === imgs.length - 1 ? 0 : curIndex + 1;
  createItem(perv).classList.add('prev');
  createItem(curIndex).classList.add('cur');
  createItem(next).classList.add('next');
}

container.addEventListener('wheel', (e) => {
  if(!e.deltaY) {
    return
  }
  if(loading) {
    return
  }
  loading = true
  if(e.deltaY > 0) {
    // 向下滚
    curIndex = curIndex + 1 > imgs.length - 1 ? 0 : curIndex + 1;
    container.classList.add('scroll-down')
  } else {
    // 向上滚
    curIndex = curIndex - 1 < 0 ? imgs.length - 1 : curIndex - 1;
    container.classList.add('scroll-up')
  }
})
container.addEventListener('transitionend', function (e) {
  loading = false
  container.classList.remove('scroll-down')
  container.classList.remove('scroll-up')
  resetElement()
})
resetElement()