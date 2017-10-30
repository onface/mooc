# 使用CSS

1、下载 [Atom](https://atom.io/)

2、顶部菜单栏选择 **文件(File)**

3、创建**新文件(New File)**

4、复制以下内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>css</title>
<!-- <style>...</style> 中可以书写CSS -->
<style>
/* 符号 . 代表 class 对应 17行和18行的 class="..." */
.demo {
    color:purple;
}
</style>
<!-- 创建 css 后缀文件，通过 <link /> 标签引入css -->
<link rel="stylesheet" href="./example.css" />
</head>
<body>
    <div class="demo">onFace</div>
    <div class="example">mooc</div>
</body>
</html>
```

将文件保存为 `demo.html`

> `href="./example.css"` 指的是 `./`（当前目录），如果是 `href="../some.css"` `../` 指的是上一级目录

接着创建 `example.css` 文件，保存在 `demo.html` 同级目录

```css
.example {
    color: green;
}
```

**下一节：[选择符与结构](../selector/README.md)**
