# Next.js i18n Template# Next.js i18n Template# Salient



一个功能完整、可快速部署到 Cloudflare Pages 的 Next.js 模板，内置国际化（i18n）支持和 TailwindCSS。



A fully-featured, production-ready Next.js template with built-in i18n support and TailwindCSS, optimized for Cloudflare Pages deployment.一个功能完整、可快速部署到 Cloudflare Pages 的 Next.js 模板，内置国际化（i18n）支持和 TailwindCSS。Salient is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).



## ✨ 特性 Features



- 🌍 **多语言支持** - 内置 10 种语言（英语、中文简体、中文繁体、西班牙语、法语、德语、意大利语、葡萄牙语、韩语、日语）## ✨ 特性## Getting started

- 🎨 **TailwindCSS** - 现代化的 UI 设计系统

- 🚀 **Edge Runtime** - 针对 Cloudflare Pages 优化

- 📱 **响应式设计** - 完美适配所有设备

- 🔧 **可配置菜单** - 简单的菜单配置系统- 🌍 **多语言支持** - 内置 10 种语言（英语、中文简体、中文繁体、西班牙语、法语、德语、意大利语、葡萄牙语、韩语、日语）To get started with this template, first install the npm dependencies:

- 🎯 **TypeScript** - 完整的类型支持

- ⚡ **Next.js 14** - 最新的 Next.js 特性- 🎨 **TailwindCSS** - 现代化的 UI 设计系统



## 📦 快速开始 Quick Start- 🚀 **Edge Runtime** - 针对 Cloudflare Pages 优化```bash



### 1. 安装依赖- 📱 **响应式设计** - 完美适配所有设备npm install



```bash- 🔧 **可配置菜单** - 简单的菜单配置系统```

npm install

# 或- 🎯 **TypeScript** - 完整的类型支持

pnpm install

# 或- ⚡ **Next.js 14** - 最新的 Next.js 特性Next, run the development server:

yarn install

```



### 2. 运行开发服务器## 📦 快速开始```bash



```bashnpm run dev

npm run dev

```### 1. 安装依赖```



打开 [http://localhost:3000](http://localhost:3000) 查看结果。



### 3. 构建生产版本```bashFinally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.



```bashnpm install

npm run build

npm start# 或## Customizing

```

pnpm install

## 🌐 部署到 Cloudflare Pages

# 或You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

### 方法 1：通过 Dashboard（推荐）

yarn install

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)

2. 进入 **Pages** 页面```## License

3. 点击 **创建项目** > **连接到 Git**

4. 选择你的 Git 仓库

5. 配置构建设置：

   - **构建命令**: `npm run build`### 2. 运行开发服务器This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

   - **构建输出目录**: `.next`

   - **Node 版本**: `18` 或更高

6. 点击 **保存并部署**

```bash## Learn more

### 方法 2：通过 Wrangler CLI

npm run dev

```bash

# 安装 Wrangler```To learn more about the technologies used in this site template, see the following resources:

npm install -g wrangler



# 登录

wrangler login打开 [http://localhost:3000](http://localhost:3000) 查看结果。- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation



# 构建项目- [Next.js](https://nextjs.org/docs) - the official Next.js documentation

npm run build

### 3. 构建生产版本- [Headless UI](https://headlessui.dev) - the official Headless UI documentation

# 部署

wrangler pages deploy .next

``````bash

npm run build

详细部署指南请查看 [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)npm start

```

## 📝 配置说明 Configuration

## 🌐 部署到 Cloudflare Pages

### 菜单配置

### 方法 1：通过 Dashboard

在 `src/config.ts` 中配置你的网站菜单：

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)

```typescript2. 进入 **Pages** 页面

export const menuItems: MenuItem[] = [3. 点击 **创建项目** > **连接到 Git**

  { label: 'home', href: '/' },4. 选择你的 Git 仓库

  { label: 'about', href: '/about' },5. 配置构建设置：

  { label: 'contact', href: '/contact' },   - **构建命令**: `npm run build`

];   - **构建输出目录**: `.next`

```   - **Node 版本**: `18` 或更高

6. 点击 **保存并部署**

详细的菜单配置说明请查看 [docs/MENU_CONFIG.md](./docs/MENU_CONFIG.md)

### 方法 2：通过 Wrangler CLI

### 语言配置

```bash

默认支持的语言在 `src/config.ts` 中定义。你可以根据需要添加或删除语言。# 安装 Wrangler

npm install -g wrangler

### 翻译文件

# 登录

翻译文件位于 `src/messages/` 目录，每种语言一个 JSON 文件。wrangler login



## 📁 项目结构 Project Structure# 构建项目

npm run build

```

.# 部署

├── docs/                      # 文档目录wrangler pages deploy .next

│   ├── QUICKSTART.md         # 快速开始指南```

│   ├── MENU_CONFIG.md        # 菜单配置详解

│   ├── DEPLOYMENT.md         # 部署指南## 📝 配置说明

│   ├── UPGRADE_GUIDE.md      # 升级指南

│   └── ...                   # 其他文档### 菜单配置

├── src/

│   ├── app/在 `src/config.ts` 中配置你的网站菜单：

│   │   └── [locale]/         # 本地化路由

│   ├── components/           # React 组件```typescript

│   ├── messages/             # i18n 翻译文件export const menuItems: MenuItem[] = [

│   ├── config.ts            # 网站配置  { label: 'home', href: '/' },

│   └── ...  { label: 'about', href: '/about' },

├── public/                   # 静态资源  { label: 'contact', href: '/contact' },

├── next.config.js           # Next.js 配置];

├── tailwind.config.ts       # TailwindCSS 配置```

└── package.json

```详细的菜单配置说明请查看 [MENU_CONFIG.md](./MENU_CONFIG.md)



## 📖 文档 Documentation### 语言配置



### 新手指南默认支持的语言在 `src/config.ts` 中定义：

- [快速开始](./docs/QUICKSTART.md) - 5分钟快速上手

- [项目概览](./docs/PROJECT_OVERVIEW.md) - 了解项目结构和设计```typescript

export const locales = ['en', 'zh', 'es', 'fr', 'de', 'it', 'pt', 'ko', 'ja', 'zh-TW'] as const;

### 配置指南export const defaultLocale = 'en' as const;

- [菜单配置](./docs/MENU_CONFIG.md) - 详细的菜单配置教程```

- [图标配置](./docs/ICON_CONFIG.md) - 自定义网站图标

你可以根据需要添加或删除语言。

### 部署与维护

- [部署指南](./docs/DEPLOYMENT.md) - Cloudflare Pages 部署### 翻译文件

- [升级指南](./docs/UPGRADE_GUIDE.md) - 依赖升级策略

- [更新报告](./docs/UPDATE_REPORT.md) - 最新更新内容翻译文件位于 `src/messages/` 目录：



### 开发参考- `en.json` - 英语

- [安全更新](./docs/SAFE_UPDATES.md) - 安全的依赖更新列表- `zh.json` - 中文简体

- [Git 配置](./docs/GIT_LINE_ENDINGS.md) - Git 行尾符配置- `zh-TW.json` - 中文繁体

- [贡献指南](./docs/CONTRIBUTING.md) - 如何贡献代码- 等等...



## 🎨 自定义 Customization每个文件的结构：



### 修改网站信息```json

{

编辑 `src/config.ts`：  "navigation": {

    "home": "Home",

```typescript    "about": "About"

export const siteConfig = {  },

  name: '你的网站名称',  "common": {

  description: '你的网站描述',    "title": "Your Site Title",

  url: 'https://your-domain.com',    "description": "Your site description"

};  },

```  "homepage": {

    "heroTitle": "Welcome",

### 修改样式    "heroSubtitle": "Your subtitle"

  }

- `tailwind.config.ts` - Tailwind 配置}

- `src/styles/tailwind.css` - 全局 CSS```



### 添加新页面## 📁 项目结构



参考文档：[添加新页面](./docs/QUICKSTART.md#添加新页面)```

.

## 💡 技术栈 Tech Stack├── src/

│   ├── app/

- **框架**: Next.js 14│   │   └── [locale]/           # 本地化路由

- **语言**: TypeScript│   │       ├── layout.tsx      # 布局组件

- **样式**: TailwindCSS│   │       └── page.tsx        # 首页

- **国际化**: next-intl│   ├── components/             # React 组件

- **UI 组件**: Headless UI│   │   ├── Header.tsx         # 顶部导航

- **图标**: Heroicons│   │   ├── HeaderClient.tsx   # 客户端导航组件

- **部署**: Cloudflare Pages│   │   ├── Footer.tsx         # 页脚

│   │   └── ...

## 🆘 常见问题 FAQ│   ├── messages/              # i18n 翻译文件

│   │   ├── en.json

### 如何添加新语言？│   │   ├── zh.json

│   │   └── ...

查看 [菜单配置文档](./docs/MENU_CONFIG.md#添加新语言)│   ├── config.ts              # 网站配置（菜单、语言等）

│   ├── i18n.ts                # i18n 配置

### 如何更改默认语言？│   └── navigation.ts          # 导航配置

├── public/                    # 静态资源

在 `src/config.ts` 中修改 `defaultLocale`├── next.config.js             # Next.js 配置

├── tailwind.config.ts         # TailwindCSS 配置

### 如何禁用某些语言？└── package.json

```

从 `src/config.ts` 的 `locales` 数组中删除对应的语言代码

## 🎨 自定义样式

### 部署后样式不显示？

本模板使用 TailwindCSS。你可以在以下位置自定义样式：

查看 [部署指南故障排查](./docs/DEPLOYMENT.md#故障排查)

- `tailwind.config.ts` - Tailwind 配置

## 🔄 最新更新 Latest Updates- `src/styles/tailwind.css` - 全局 CSS



- ✅ 更新依赖到最新稳定版本## 📄 添加新页面

- ✅ 修复 icon.svg 500 错误

- ✅ 添加完善的文档系统### 1. 创建页面文件

- ✅ 优化 Git 配置

在 `src/app/[locale]/` 下创建新文件夹和 `page.tsx`：

详细更新内容请查看 [更新报告](./docs/UPDATE_REPORT.md)

```typescript

## 🤝 贡献 Contributing// src/app/[locale]/about/page.tsx

import { unstable_setRequestLocale } from 'next-intl/server'

欢迎提交 Pull Request 或创建 Issue！

export default function AboutPage({

查看 [贡献指南](./docs/CONTRIBUTING.md) 了解更多信息。  params: { locale }

}: {

## 📄 许可证 License  params: { locale: string }

}) {

MIT License  unstable_setRequestLocale(locale);

  

## 📮 联系方式 Contact  return (

    <main>

如有问题，请创建 [GitHub Issue](https://github.com/sanbaideng/cfpages-i18n-next14-template/issues)      <h1>About Page</h1>

    </main>

## 🙏 致谢 Acknowledgments  )

}

- [Next.js](https://nextjs.org/) - React 框架```

- [next-intl](https://next-intl-docs.vercel.app/) - 国际化方案

- [TailwindCSS](https://tailwindcss.com/) - CSS 框架### 2. 添加到路径配置

- [Tailwind UI](https://tailwindui.com/) - UI 组件库

在 `src/config.ts` 中添加路径：

---

```typescript

Made with ❤️ by [sanbaideng](https://github.com/sanbaideng)export const pathnames = {

  '/': '/',
  '/about': '/about',  // 添加新路径
} satisfies Pathnames<typeof locales>;
```

### 3. 添加到菜单（可选）

```typescript
export const menuItems: MenuItem[] = [
  { label: 'about', href: '/about' },
];
```

### 4. 添加翻译

在所有语言的翻译文件中添加：

```json
{
  "navigation": {
    "about": "About"  // 英语
    // "about": "关于"  // 中文
  }
}
```

## 🔧 环境变量

创建 `.env.local` 文件：

```env
# Google Analytics（可选）
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id

# 其他环境变量...
```

## 📊 Google Analytics

在 `src/components/GoogleAnalytics.tsx` 中配置 Google Analytics。

## 🚀 性能优化

- ✅ Edge Runtime 支持
- ✅ 图片优化（Next.js Image）
- ✅ 代码分割
- ✅ 静态生成（SSG）
- ✅ 响应式字体加载

## 📖 更多文档

- [菜单配置指南](./MENU_CONFIG.md)
- [Next.js 文档](https://nextjs.org/docs)
- [next-intl 文档](https://next-intl-docs.vercel.app/)
- [TailwindCSS 文档](https://tailwindcss.com/docs)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)

## 🤝 贡献

欢迎提交 Pull Request 或创建 Issue。

## 📄 许可证

MIT License

## 💡 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: TailwindCSS
- **国际化**: next-intl
- **UI 组件**: Headless UI
- **图标**: Heroicons
- **部署**: Cloudflare Pages

## 🆘 常见问题

### 如何添加新语言？

1. 在 `src/config.ts` 中添加语言代码
2. 在 `src/messages/` 中创建新的 JSON 文件
3. 在 `src/components/HeaderClient.tsx` 中添加语言选项

### 如何更改默认语言？

在 `src/config.ts` 中修改 `defaultLocale`：

```typescript
export const defaultLocale = 'zh' as const; // 改为中文
```

### 如何禁用某些语言？

从 `src/config.ts` 的 `locales` 数组中删除对应的语言代码。

### 部署后样式不显示？

确保 `next.config.js` 中正确配置了静态导出选项。

## 📮 联系方式

如有问题，请创建 Issue 或联系维护者。

---

Made with ❤️ using Next.js and TailwindCSS
