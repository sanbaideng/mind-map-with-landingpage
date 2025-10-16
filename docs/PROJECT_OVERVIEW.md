# 项目概览 Project Overview

## 📋 模板说明

这是一个从 random-team-generator 功能网站中提取出的可复用 Next.js 模板。已移除所有具体业务功能（团队生成器、转盘、随机选择器等），保留了核心框架和配置能力。

This is a reusable Next.js template extracted from a random-team-generator website. All specific business features (team generator, spin wheel, random picker) have been removed, keeping only the core framework and configuration capabilities.

## 🎯 设计目标 Design Goals

- ✅ 快速启动新项目
- ✅ 内置多语言支持
- ✅ 易于部署到 Cloudflare Pages
- ✅ 灵活的菜单配置系统
- ✅ 现代化的 UI/UX
- ✅ 完善的文档

## 📚 文档结构 Documentation Structure

| 文件 File | 说明 Description |
|----------|-----------------|
| `README.md` | 主文档，包含安装、配置、部署完整说明 |
| `QUICKSTART.md` | 5分钟快速开始指南 |
| `MENU_CONFIG.md` | 详细的菜单配置教程（中英双语） |
| `DEPLOYMENT.md` | Cloudflare Pages 部署指南 |
| `CONTRIBUTING.md` | 贡献指南 |
| `LICENSE.md` | 许可证信息 |

## 🗂️ 项目结构 Project Structure

### 核心配置文件 Core Config Files

```
src/
├── config.ts           # 网站配置、菜单配置、语言配置
├── i18n.ts            # i18n 核心配置
├── navigation.ts      # next-intl 导航配置
└── middleware.ts      # i18n 中间件
```

### 组件目录 Components

```
src/components/
├── Header.tsx         # 顶部导航（服务端）
├── HeaderClient.tsx   # 顶部导航（客户端）- 包含菜单逻辑
├── Footer.tsx         # 页脚
├── Hero.tsx          # 首页 Hero 区域
├── Button.tsx        # 按钮组件
├── Container.tsx     # 容器组件
├── Logo.tsx          # Logo 组件
└── ...               # 其他 UI 组件
```

### 翻译文件 Translation Files

```
src/messages/
├── en.json           # 英语
├── zh.json           # 中文简体
├── zh-TW.json        # 中文繁体
├── es.json           # 西班牙语
├── fr.json           # 法语
├── de.json           # 德语
├── it.json           # 意大利语
├── pt.json           # 葡萄牙语
├── ko.json           # 韩语
└── ja.json           # 日语
```

## 🔑 核心特性 Key Features

### 1. 菜单系统 Menu System

**配置位置**: `src/config.ts`

```typescript
export const menuItems: MenuItem[] = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
];
```

- 支持无限菜单项
- 自动响应式（桌面/移动端）
- 完全国际化
- 可完全隐藏（空数组）

### 2. 多语言系统 i18n System

**支持语言**: 10 种

- 自动语言检测
- URL 路径本地化
- 语言切换器组件
- 完整的翻译文件结构

### 3. Cloudflare Pages 优化

- Edge Runtime 配置
- 优化的构建配置
- 自动部署支持
- 性能优化

## 🎨 已包含的 UI 组件

- ✅ Header with Language Switcher
- ✅ Responsive Navigation (Desktop + Mobile)
- ✅ Hero Section
- ✅ Footer
- ✅ Button Component
- ✅ Container/Layout Components
- ✅ Logo Component

## 🚫 已移除的内容 Removed Content

- ❌ 团队生成器功能和组件
- ❌ 转盘功能和组件
- ❌ 随机选择器功能和组件
- ❌ 相关功能页面
- ❌ 特定功能的依赖包 (@dnd-kit, spin-wheel)
- ❌ SEO 优化文档（特定于功能）
- ❌ 关键词研究文档

## 🔧 配置要点 Configuration Points

### 必须修改 Must Change

1. **网站信息** (`src/config.ts`)
   - `siteConfig.name`
   - `siteConfig.description`
   - `siteConfig.url`

2. **翻译内容** (`src/messages/*.json`)
   - `common.title`
   - `common.description`
   - `homepage.*`

3. **元数据** (`src/app/[locale]/page.tsx`)
   - `generateMetadata` 函数

### 可选修改 Optional Changes

1. **菜单项** (`src/config.ts` - `menuItems`)
2. **支持的语言** (`src/config.ts` - `locales`)
3. **Logo** (`src/components/Logo.tsx`)
4. **样式主题** (`tailwind.config.ts`)

## 📦 依赖包 Dependencies

### 核心依赖 Core

- Next.js 14
- React 18
- TypeScript 5
- next-intl (国际化)

### UI/样式 UI/Styling

- TailwindCSS
- Headless UI
- Heroicons

### 已移除 Removed

- ~~@dnd-kit/*~~ (拖放功能)
- ~~spin-wheel~~ (转盘功能)

## 🚀 使用场景 Use Cases

此模板适用于：

This template is suitable for:

- ✅ 需要多语言支持的营销网站
- ✅ SaaS 产品落地页
- ✅ 博客网站
- ✅ 企业官网
- ✅ 任何需要 i18n 的 Next.js 项目

## 📈 后续扩展建议 Extension Suggestions

1. **添加内容管理**
   - 考虑集成 Contentful / Sanity
   - 或使用 MDX 进行内容管理

2. **添加分析**
   - Google Analytics (已有组件)
   - Plausible / Umami

3. **SEO 优化**
   - 添加 sitemap
   - 添加 robots.txt
   - 优化 meta tags

4. **增强功能**
   - 搜索功能
   - 评论系统
   - 联系表单
   - Newsletter 订阅

## 🔒 安全考虑 Security Considerations

- ✅ 没有后端 API（静态站点）
- ✅ 环境变量通过 Cloudflare 配置
- ✅ 依赖定期更新
- ⚠️ 添加表单时考虑 CSRF 保护
- ⚠️ 使用环境变量存储敏感信息

## 🐛 已知限制 Known Limitations

1. **静态导出限制**
   - 某些 Next.js 功能在 Edge Runtime 下不可用
   - API Routes 需要使用 Edge Functions

2. **图片优化**
   - 静态图片优化在 Cloudflare Pages 下有限制
   - 考虑使用 Cloudflare Images

3. **数据库**
   - 模板不包含数据库集成
   - 需要时可使用 Cloudflare D1 或外部服务

## 💡 最佳实践 Best Practices

1. **保持简洁** - 只添加需要的功能
2. **文档优先** - 更改配置时更新文档
3. **类型安全** - 充分利用 TypeScript
4. **性能优先** - 监控和优化 Core Web Vitals
5. **可访问性** - 遵循 WCAG 指南

## 📞 获取帮助 Getting Help

1. 查看文档（README、QUICKSTART、MENU_CONFIG）
2. 搜索现有 Issues
3. 创建新 Issue
4. 查看 Next.js 和 next-intl 官方文档

## 🎉 开始使用 Get Started

```bash
# 1. 安装依赖
npm install

# 2. 运行开发服务器
npm run dev

# 3. 开始自定义
# 编辑 src/config.ts 和 src/messages/*.json

# 4. 构建生产版本
npm run build

# 5. 部署到 Cloudflare Pages
# 查看 DEPLOYMENT.md
```

---

**版本 Version**: 1.0.0  
**最后更新 Last Updated**: 2025-01-16  
**维护者 Maintainer**: Your Name

祝你使用愉快！Happy coding! 🚀
