# 菜单配置指南 Menu Configuration Guide

本文档详细说明如何在本模板中配置和自定义导航菜单系统。

This document explains how to configure and customize the navigation menu system in this template.

---

## 📖 目录 Table of Contents

- [基本概念](#基本概念-basic-concepts)
- [配置菜单项](#配置菜单项-configuring-menu-items)
- [添加翻译](#添加翻译-adding-translations)
- [高级配置](#高级配置-advanced-configuration)
- [示例](#示例-examples)

---

## 基本概念 Basic Concepts

菜单系统由三个主要部分组成：

The menu system consists of three main parts:

1. **菜单配置** (`src/config.ts`) - 定义菜单项
2. **翻译文件** (`src/messages/*.json`) - 提供多语言文本
3. **Header 组件** (`src/components/HeaderClient.tsx`) - 渲染菜单

---

## 配置菜单项 Configuring Menu Items

### 步骤 1：打开配置文件

打开 `src/config.ts` 文件。

Open the `src/config.ts` file.

### 步骤 2：定义菜单项

找到 `menuItems` 数组并添加你的菜单项：

Find the `menuItems` array and add your menu items:

```typescript
export const menuItems: MenuItem[] = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'services', href: '/services' },
  { label: 'contact', href: '/contact' },
];
```

### 菜单项属性 MenuItem Properties

| 属性 Property | 类型 Type | 必需 Required | 说明 Description |
|--------------|----------|--------------|------------------|
| `label` | string | 是 Yes | 翻译键名，对应翻译文件中的 key<br>Translation key in message files |
| `href` | string | 是 Yes | 链接路径<br>Link path |
| `icon` | string | 否 No | 图标名称（预留功能）<br>Icon name (future feature) |

---

## 添加翻译 Adding Translations

### 步骤 1：确定翻译键

你在 `menuItems` 中使用的 `label` 需要在翻译文件中有对应的键。

The `label` you use in `menuItems` needs a corresponding key in translation files.

例如 Example：`{ label: 'about', href: '/about' }`

### 步骤 2：添加到所有语言文件

在 `src/messages/` 目录下的每个语言文件中添加翻译：

Add translations in each language file under `src/messages/`:

**英语 (en.json):**
```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact"
  }
}
```

**中文简体 (zh.json):**
```json
{
  "navigation": {
    "home": "首页",
    "about": "关于我们",
    "services": "服务",
    "contact": "联系我们"
  }
}
```

**中文繁体 (zh-TW.json):**
```json
{
  "navigation": {
    "home": "首頁",
    "about": "關於我們",
    "services": "服務",
    "contact": "聯繫我們"
  }
}
```

### 支持的语言 Supported Languages

默认支持以下语言（可在 `src/config.ts` 中修改）：

The following languages are supported by default (can be modified in `src/config.ts`):

- `en` - English 英语
- `zh` - 中文简体
- `zh-TW` - 中文繁体
- `es` - Español 西班牙语
- `fr` - Français 法语
- `de` - Deutsch 德语
- `it` - Italiano 意大利语
- `pt` - Português 葡萄牙语
- `ko` - 한국어 韩语
- `ja` - 日本語 日语

---

## 高级配置 Advanced Configuration

### 隐藏菜单

如果不需要菜单，将 `menuItems` 设置为空数组：

To hide the menu, set `menuItems` to an empty array:

```typescript
export const menuItems: MenuItem[] = [];
```

这将完全隐藏移动端和桌面端的导航菜单。

This will completely hide the navigation menu on both mobile and desktop.

### 添加路径配置

如果你的菜单项指向新页面，需要在 `pathnames` 中添加路径：

If your menu item points to a new page, add the path to `pathnames`:

```typescript
export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/services': '/services',
  '/contact': '/contact',
} satisfies Pathnames<typeof locales>;
```

### 条件显示菜单项

如果需要根据条件显示菜单项，可以在 `HeaderClient.tsx` 中修改：

To conditionally show menu items, modify `HeaderClient.tsx`:

```typescript
export function HeaderClient() {
  const t = useTranslations('navigation')
  
  // 过滤菜单项
  const visibleMenuItems = menuItems.filter(item => {
    // 添加你的条件逻辑
    return true; 
  });
  
  return (
    // ... 使用 visibleMenuItems 而不是 menuItems
  )
}
```

---

## 示例 Examples

### 示例 1：简单博客菜单

```typescript
// src/config.ts
export const menuItems: MenuItem[] = [
  { label: 'home', href: '/' },
  { label: 'blog', href: '/blog' },
  { label: 'about', href: '/about' },
];

// src/messages/en.json
{
  "navigation": {
    "home": "Home",
    "blog": "Blog",
    "about": "About"
  }
}

// src/messages/zh.json
{
  "navigation": {
    "home": "首页",
    "blog": "博客",
    "about": "关于"
  }
}
```

### 示例 2：电商网站菜单

```typescript
// src/config.ts
export const menuItems: MenuItem[] = [
  { label: 'products', href: '/products' },
  { label: 'categories', href: '/categories' },
  { label: 'deals', href: '/deals' },
  { label: 'support', href: '/support' },
];

export const pathnames = {
  '/': '/',
  '/products': '/products',
  '/categories': '/categories',
  '/deals': '/deals',
  '/support': '/support',
} satisfies Pathnames<typeof locales>;
```

### 示例 3：公司网站菜单

```typescript
// src/config.ts
export const menuItems: MenuItem[] = [
  { label: 'home', href: '/' },
  { label: 'services', href: '/services' },
  { label: 'portfolio', href: '/portfolio' },
  { label: 'team', href: '/team' },
  { label: 'contact', href: '/contact' },
];
```

### 示例 4：无菜单配置

如果你的网站只有单页，不需要菜单：

If your site is single-page and doesn't need a menu:

```typescript
// src/config.ts
export const menuItems: MenuItem[] = [];
```

---

## 🎨 样式自定义 Styling Customization

菜单样式在 `src/components/HeaderClient.tsx` 中定义，使用 TailwindCSS 类：

Menu styles are defined in `src/components/HeaderClient.tsx` using TailwindCSS classes:

### 桌面端菜单样式 Desktop Menu Styles

```typescript
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm leading-6 text-gray-700 hover:text-gray-900"
      // 自定义这些类 Customize these classes
    >
      {children}
    </Link>
  )
}
```

### 移动端菜单样式 Mobile Menu Styles

```typescript
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block w-full p-2 text-left text-sm text-gray-700 hover:bg-gray-50"
      // 自定义这些类 Customize these classes
    >
      {children}
    </Link>
  )
}
```

---

## 🔍 调试 Debugging

### 检查翻译是否正确加载

在浏览器控制台中检查：

Check in browser console:

```javascript
console.log(useTranslations('navigation'));
```

### 确认菜单项配置

```javascript
import { menuItems } from '@/config';
console.log(menuItems);
```

---

## ⚠️ 常见问题 Common Issues

### 问题 1：菜单项不显示

**原因**：`menuItems` 数组为空或未正确导入

**解决**：检查 `src/config.ts` 中的 `menuItems` 配置

---

### 问题 2：翻译显示为键名

**原因**：翻译文件中缺少对应的键

**解决**：在所有语言的翻译文件中添加缺失的键

---

### 问题 3：点击菜单后 404

**原因**：
1. 页面文件不存在
2. 路径未在 `pathnames` 中配置

**解决**：
1. 创建对应的页面文件
2. 在 `pathnames` 中添加路径配置

---

## 📚 相关资源 Related Resources

- [Next.js 路由文档](https://nextjs.org/docs/app/building-your-application/routing)
- [next-intl 文档](https://next-intl-docs.vercel.app/)
- [TailwindCSS 文档](https://tailwindcss.com/docs)

---

## 💡 最佳实践 Best Practices

1. **保持菜单简洁** - 不要超过 5-7 个主菜单项
   Keep menu concise - No more than 5-7 main items

2. **使用清晰的标签** - 使用简短、描述性的文本
   Use clear labels - Use short, descriptive text

3. **保持一致性** - 确保所有语言的翻译准确一致
   Maintain consistency - Ensure translations are accurate across all languages

4. **测试所有语言** - 在部署前测试所有语言版本
   Test all languages - Test all language versions before deployment

5. **移动优先** - 确保移动端菜单体验良好
   Mobile first - Ensure good mobile menu experience

---

## 🆘 获取帮助 Getting Help

如有问题，请查看：

For questions, please check:

1. 主 README 文档
2. Next.js 官方文档
3. 创建 GitHub Issue

---

**提示 Tip**: 修改配置后记得重启开发服务器！

Remember to restart the development server after modifying configurations!
