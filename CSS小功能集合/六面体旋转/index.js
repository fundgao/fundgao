/*
 * @Author: gmx
 * @Date: 2023-05-18 14:36:02
 * @LastEditors: gmx
 * @LastEditTime: 2023-05-18 15:52:35
 * @Description: 
 * @Version: 1.0
 */
// 平滑滚动
var scrollBtn = document.querySelector('.top-button');
scrollBtn.addEventListener('click', () => scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
}));

// 滚动小球
var ballContainer = document.querySelector('.moving-ball')
var ball = document.querySelector('.ball')
ball.style.setProperty('--w', ballContainer.clientWidth + 'px');