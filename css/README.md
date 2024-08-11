# CSS 秘籍

### [CSS 沉淀集合](https://juejin.cn/collection/6845244267858755592)

```
// Object.groupBy & Map.groupBy;
var obj = [{n: 'HXW', a: 23}, {n: 'HXM', a: 25}, {n: 'HXG', a: 23}];
Object.groupBy(obj, (o) => o.a)

// 如果条件为真，则将 value 变量的值赋给 newObject.key 属性
const newObject = {...(condition && {key: value})};
const isOnline = navigator.onLine ? '在线' : '离线';

// 字符串补全
'abc'.padStart(10, '.'); // 前
'abc'.padEnd(10, '.'); // 后

let array = new Array(10).fill('*');
```

```
https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-type
scroll-snap-type
css 滚动吸附

content-visibility是CSS新增的属性，用来提高页面渲染性能，可以控制一个元素是否渲染其内容，并且允许浏览器跳过这些元素的布局与渲染。

韩文换行加 word-break: auto-phrase;

color()是 CSS 中颜色函数，提供了一种统一的方式来指定任何 RGB 颜色空间中的颜色值。
background-color: color(prophoto-rgb 0 1 0);
```

```
// 自定义依赖版本
"antd": "4.16.13",
"antd-v5": "npm:antd@5",
var ob2 = structuredClone(ob1); // 深拷贝

https://juejin.cn/post/7379157261425606697?searchId=202406261652154D0758A04578BEE2815D
```

```
必读Webpack
https://github.com/noBaldAaa/hand-webpack/tree/main
常用插件
https://juejin.cn/post/7346119032524357642
```
