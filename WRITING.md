# 博客写作说明

在 `D:\life\blog` 运行以下命令创建草稿（请为每篇文章使用不同的文件名）：

```powershell
hugo new content notes/my-note.md
hugo new content essays/my-essay.md
```

文集和随笔均按 `date` 倒序排列。新建模板自动填写常用字段，正文写在第二个 `+++` 后。

| 字段 | 用途 |
| --- | --- |
| title | 文章标题；正文从二级标题 `##` 开始 |
| date | 首次发布日期，决定排序 |
| lastmod | 长文的最近实质更新日期，不影响排序 |
| draft | 草稿为 true，公开前改为 false |
| url | 每篇文章唯一的固定地址，发布后尽量不变 |
| summary | 长文简介，留空时不显示 |
| hideTitle | 仅隐藏随笔列表标题；独立文章页保留标题 |
| hideDate | 隐藏文章详情日期 |
| toc | 是否显示折叠目录；没有章节时不显示 |
| hideBackToTop | 隐藏返回顶部；默认仅在文章超过一屏时显示 |
| hideBreadcrumbs | 隐藏详情页的“返回文集/随笔”入口 |
| tags / showTags | 标签列表 / 是否在详情中显示标签 |

短随笔直接展示全文；长随笔在独立一行插入 `<!--more-->`，列表展示其前方内容并提供“继续阅读”。

段落之间空一行，更多空行不会增加网页段距。支持在段落紧接着的下一行添加：

```markdown
这是一段补充说明。
{.text-small .text-muted}
```

其他可用类：`.text-large`、`.text-center`、`.lines-compact`、`.lines-loose`、`.space-after`。

图片建议采用页面包：将文章放在独立目录的 `index.md` 中，图片与它放在一起，用 `![说明](photo.jpg "图注")` 引用。

自述正文位于 `D:\life\blog\content\about.md`，默认不显示日期、目录、面包屑或返回顶部。
全站字号和间距位于 `D:\life\blog\assets\css\custom.css`；深浅配色位于 `D:\life\blog\assets\css\colors\paper.css`。

本地查看草稿使用 `hugo server -D`。正式构建默认不包含草稿与未来日期的文章。
