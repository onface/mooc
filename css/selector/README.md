# 选择符与结构

上一节:[使用CSS](../use-css/README.md)

## 教材

**学习CSS权威指南第二章，并注意以下事项。**

1. 对ID选择器做一个了解，但是日常工作中不要使用ID选择器写CSS。原因会在后面解释。
2. 注意是**学习**而不是阅读。不要只是看一遍就结束，而是将每个知识都写出代码并在浏览器使用[检查元素](http://www.cnblogs.com/zhangchenliang/p/4143225.html)检查样式的应用情况。


**学习完第二章后再来看后面的内容**

## 测试

1. class选择器 [./test/class.html](./test/class.html)
2. 权重 [./test/priority.html](./test/priority.html)
3. 继承 [./test/inherit.html](./test/inherit.html)
4. 显示方式 [./test/display.html](./text/display.html)
5. 伪类伪元素 [./test/pseudo.html](./test/pseudo.html)


## 如何记忆哪些属性是继承的

CSS 中的 `color` `font-size` 等属性默认都是继承自父元素。那么为什么他们会继承呢。

因为 `color` `font-size` 等属性如果不继承，书写CSS会非常麻烦。比如不继承需要这样写：

````html
<div class="demo">
    demo
    <div class="demo-title">
        demo-title
    </div>
</div>
````
````css
.demo {
    color:red;
}
.demo-title {
    color:red;
}
````

非常的麻烦，所以创造CSS的人将某些适合继承的属性默认值设置为继承。

常见的可继承的CSS属性有

```
color font text-align  text-indent
```

> 对于某些CSS知识，可以站在多个角度去思考。能帮助记忆和找到适合的使用场景。

## 小结

CSS 选择器是CSS的基础，建议花一些将[MDN:CSS选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#选择器)简单的记忆一遍。

对所有的选择器有个大概印象后，工作中遇到了问题可以在脑海快速索引，避免临时抱佛脚在文档中慢慢查找。

display 的内容很实用，但是只是很浅的介绍。后续章节会专门提到。
