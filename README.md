# 个人网站  
### 首页文字  
首先生成一串字符串，然后声明一个变量，通过定时器，每一次都运行一次函数，每次函数都通过charAt（变量）进行汉字输出   
### 首页背景  
因为不知道什么地方会用到轮播图，所以封装的一个jq轮播图，方便传参数运行进行调用，jq轮播图首先设置默认属性，然后通过将输入的数据代替默认的数据，然后运行主要函数，函数中设置方法属性，主要包括两个，第一个是将每个图片进行相应定位，设置两个变量，分别代表左右，左边的利用i进行动态改变 ，如下
```
 self.$img.eq(lNum).css({
                transform: 'translateX(' + (-150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(30deg)'
            })
```
因为五张图片，所以右边的有一个问题，就是可能会超过五，所以需要进行判断，左边右边和中间进行排布，并且将标志位设置；另一个是运动函数，当点击时将点击的index传到当前显示，利用自己的moving函数进行切换，利用定时器进行定时切换，鼠标移入时消除定时器  
### 全局雪花  
先声明每个变量都进行赋值，分别是雪花字体大小随机，间隔等，然后在body中添加，并且用定时器随机生成，然后结束时再进行移除
```
var sizefont = minSize+Math.random()*maxSize; //产生大小不等的雪花
var startLeft = Math.random()*dw; //雪花生成是随机的left值
```

### 全局布局
在项目和demo部分采用弹性盒模型，父级允许发分配，右侧导航栏，分别画圆，并且都定位到中心，出来时进行旋转，以便于里面的每个菜单像是一个个弹出来的

### canvas时钟  
```
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
```
生成画笔，并且生成ctx的各个属性，获取当前时间，需要注意的是：转换成圆弧进行生成时，圆弧角度是由当前时间转化为360然后转为弧度，又因为arc中起始角和结束角需要进行按时钟描绘
```

属性	描述
fillStyle	设置或返回用于填充绘画的颜色、渐变或模式
strokeStyle	设置或返回用于笔触的颜色、渐变或模式
shadowColor	设置或返回用于阴影的颜色
shadowBlur	设置或返回用于阴影的模糊级别
shadowOffsetX	设置或返回阴影距形状的水平距离
shadowOffsetY	设置或返回阴影距形状的垂直距离
方法	描述
createLinearGradient()	创建线性渐变（用在画布内容上）
createPattern()	在指定的方向上重复指定的元素
createRadialGradient()	创建放射状/环形的渐变（用在画布内容上）
addColorStop()	规定渐变对象中的颜色和停止位置
```


### 掌握技能  

之前在网上看到，有3D感觉的效果图，感觉有意思，所以在网上搜索，获取当前标签，然后通过循环，将循环后的每个赋值相应的弧度，然后将render函数进行编写，通过循环，将每一个元素进行规则放置，将角度加入一个变量，以至于角度可以发生改变，每次循环都将变量进行增加，然后设置x，通过弧度将每个x都设置不一样的值，以便产生页面弧度，而且y用来产生不同的高度，还有不同的字体，之后用一个参数利用x算出距左距离，将每个变量赋值给相应位置，完成一次布局，然后通过定时器完成都此布局，以显示动画效果  

### 导航滑动  

通过window.onscroll进行监听，获取当前页面距离dom最顶端的距离，然后进行判断，位于各个位置的节点进行动画，监听事件，通过点击传参数进行函数运行，然后每时每刻进行判断，如果在当前页面之上，则每隔1s跳转10px向上，向下同样，值得注意的是，因为跳转页面需要传参，所以利用
定时器传字符串，如果直接传参数会undefined，我找了半天没找出来，所以选用了字符串，如果有知道的，麻烦告知，因为我没找到，先在这里谢谢了  
```
function gotopage(h){
    timer = setInterval('goTo("'+h+'")',1);
}
```

### project-snake



