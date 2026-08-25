# 我的技术笔记

个人技术博客，基于 Jekyll 3.9 + GitHub Pages，带「奶油暖阳」和「海盐天空」双主题切换。

## 本地预览

需要 Ruby + Jekyll：

```bash
gem install bundler jekyll
jekyll serve
```

浏览器访问 <http://127.0.0.1:4000>

## 部署到 GitHub Pages

1. 新建仓库，命名为 `username.github.io`（`username` 替换为你的 GitHub 用户名）。
2. 将本目录所有文件 push 到 `main` 分支根目录。
3. 仓库 **Settings → Pages → Source** 选择 `Deploy from a branch` → 分支 `main` → 目录 `/(root)` → Save。
4. 等待 1–2 分钟，访问 <https://username.github.io> 即可看到首页。

## 自定义

- 作者信息、站点标题：`_config.yml`
- 项目作品：`_data/projects.yml`
- 新建文章：`_posts/YYYY-MM-DD-标题.md`
- 主题颜色变量：`_sass/theme-warm.scss`、`_sass/theme-ocean.scss`
- 每日短句：`assets/js/daily-quote.js` 顶部 `quotes` 数组

## 文件结构

```
_config.yml              站点配置
index.html               首页（组装各 includes）
_layouts/default.html    默认布局
_includes/               可复用片段（header/footer/hero/daily-quote/posts-preview/projects-preview）
_data/projects.yml       项目数据
_posts/                  文章
_sass/                   SCSS 主题与组件
assets/css/style.scss    CSS 入口
assets/js/               主题切换 + 每日短句
```
