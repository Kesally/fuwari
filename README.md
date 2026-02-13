# Fuwari For Kesally's Blog

基于 [Astro](https://astro.build) 开发的静态博客模板。
<br>上游仓库为 [saicaca/fuwari](https://github.com/saicaca/fuwari)。
> [!CAUTION]
> 该仓库由 Kesally 个性化，并包含了最新的文章，如果你想以此为模板进行二改，需要一定的动手能力。

[**🖥️在线预览（Cloudflare Workers）**](https://blog.kesally.ren)

![Preview Image](https://raw.githubusercontent.com/Kesally/fuwari/refs/heads/main/src/assets/images/home.png)
**无文章版本在[Raw分支](https://github.com/Kesally/fuwari/tree/raw)，但可能会缺失一些功能**

## ✨ 功能特性

- [x] 基于 Astro 和 Tailwind CSS 开发
- [x] 流畅的动画和页面过渡
- [x] 亮色 / 暗色模式
- [x] 自定义主题色和横幅图片
- [x] 响应式设计
- [x] 评论
- [x] 搜索
- [x] 文内目录

### 与上游仓库不同的是
 - 添加评论功能
 - 背景图换为Bing背景
 - 在文章右侧添加文章目录选择功能
 - 添加查看提交信息与统计功能(基于Umami)
 - 增加404页面
 - 增加友链
  
## 👀 依赖要求

- Node.js <= 22
- pnpm <= 9

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```
## 📝 使用指南

### 创建新文章

使用内置脚本快速创建新文章：

```bash
pnpm new-post <post-name>
```
### 配置博客

编辑 `src/config.ts` 文件来自定义博客配置


### 文章格式

文章使用 Markdown 格式，支持 frontmatter：

```markdown
---
title: 文章标题
published: 2024-01-01
description: 文章描述
image: ./cover.jpg
tags: [标签1, 标签2]
category: 分类
draft: false
---

# 文章内容

这里是文章正文...
```

## 📦 部署

构建后的静态文件位于 `dist/` 目录，可部署到任何静态托管平台。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！