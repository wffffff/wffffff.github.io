---
slug: welcome
title: Welcome
sidebar_position: 1
tags: [facebook, hello, docusaurus]
---

本网站使用的是[Docusaurus](https://docusaurus.io/)

搜索功能搭建：https://docusaurus.io/docs/search#using-local-search

使用的插件为：https://github.com/easyops-cn/docusaurus-search-local

使用方式：
直接在docusaurus.config.js 中，config的部分添加


```javascript
plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      }),
    ],
]
```

部署到Github上的方法：https://docusaurus.io/docs/deployment#deploying-to-github-pages
