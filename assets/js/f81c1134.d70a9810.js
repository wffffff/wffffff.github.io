"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/welcome/index.md","source":"@site/blog/welcome/index.md","title":"Welcome","description":"\u672c\u7f51\u7ad9\u4f7f\u7528\u7684\u662fDocusaurus","date":"2024-07-02T06:43:44.000Z","tags":[{"inline":true,"label":"facebook","permalink":"/blog/tags/facebook"},{"inline":true,"label":"hello","permalink":"/blog/tags/hello"},{"inline":true,"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.46,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"welcome","title":"Welcome","sidebar_position":1,"tags":["facebook","hello","docusaurus"]},"unlisted":false,"nextItem":{"title":"Windows wls2","permalink":"/blog/1"}},"content":"\u672c\u7f51\u7ad9\u4f7f\u7528\u7684\u662f[Docusaurus](https://docusaurus.io/)\\n\\n\u641c\u7d22\u529f\u80fd\u642d\u5efa\uff1ahttps://docusaurus.io/docs/search#using-local-search\\n\\n\u4f7f\u7528\u7684\u63d2\u4ef6\u4e3a\uff1ahttps://github.com/easyops-cn/docusaurus-search-local\\n\\n\u4f7f\u7528\u65b9\u5f0f\uff1a\\n\u76f4\u63a5\u5728docusaurus.config.js \u4e2d\uff0cconfig\u7684\u90e8\u5206\u6dfb\u52a0\\n\\n\\n```javascript\\nplugins: [\\n    [\\n      require.resolve(\\"@easyops-cn/docusaurus-search-local\\"),\\n      ({\\n        // ... Your options.\\n        // `hashed` is recommended as long-term-cache of index file is possible.\\n        hashed: true,\\n        // For Docs using Chinese, The `language` is recommended to set to:\\n        // ```\\n        language: [\\"en\\", \\"zh\\"],\\n        // ```\\n      }),\\n    ],\\n]\\n```\\n\\n\u90e8\u7f72\u5230Github\u4e0a\u7684\u65b9\u6cd5\uff1ahttps://docusaurus.io/docs/deployment#deploying-to-github-pages"},{"id":"1","metadata":{"permalink":"/blog/1","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024/2024-07-01-1.md","source":"@site/blog/2024/2024-07-01-1.md","title":"Windows wls2","description":"Enable the systemd/systemctl command, only works for wsl2","date":"2024-07-01T00:00:00.000Z","tags":[{"inline":true,"label":"windows","permalink":"/blog/tags/windows"},{"inline":true,"label":"wsl2","permalink":"/blog/tags/wsl-2"}],"readingTime":0.125,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"1","title":"Windows wls2","tags":["windows","wsl2"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Intellij \u5168\u5bb6\u6876\u7834\u89e3","permalink":"/blog/2"}},"content":"Enable the systemd/systemctl command, only works for wsl2\\n\\n```shell\\nsudo vi /etc/wsl.conf\\n\\n#add the following\\n[boot]\\nsystemd=true\\n\\n#save and restart the server\\nwsl --shutdown\\n```"},{"id":"2","metadata":{"permalink":"/blog/2","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024/2024-07-01-2.md","source":"@site/blog/2024/2024-07-01-2.md","title":"Intellij \u5168\u5bb6\u6876\u7834\u89e3","description":"ja-netfilter-all\uff08\u63a8\u8350\uff09 https://3.jetbra.in","date":"2024-07-01T00:00:00.000Z","tags":[{"inline":true,"label":"intellij","permalink":"/blog/tags/intellij"},{"inline":true,"label":"crack","permalink":"/blog/tags/crack"}],"readingTime":0.02,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"2","title":"Intellij \u5168\u5bb6\u6876\u7834\u89e3","tags":["intellij","crack"]},"unlisted":false,"prevItem":{"title":"Windows wls2","permalink":"/blog/1"}},"content":"ja-netfilter-all\uff08\u63a8\u8350\uff09 https://3.jetbra.in"}]}}')}}]);