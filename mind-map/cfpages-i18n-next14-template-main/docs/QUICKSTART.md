# 快速开始指南 Quick Start Guide

## 🚀 5分钟快速部署

### 步骤 1: 克隆或下载模板

```bash
git clone <your-repo-url>
cd random-team-generator-template
```

### 步骤 2: 安装依赖

```bash
pnpm install
# 或
npm install
# 或
yarn install
```

### 步骤 3: 运行开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看效果！

### 步骤 4: 开始自定义

#### 4.1 修改网站标题和描述

编辑 `src/messages/en.json` 和 `src/messages/zh.json`:

```json
{
  "common": {
    "title": "你的网站名称",
    "description": "你的网站描述"
  },
  "homepage": {
    "heroTitle": "你的标题",
    "heroSubtitle": "你的副标题"
  }
}
```

#### 4.2 配置菜单（可选）

编辑 `src/config.ts`:

```typescript
export const menuItems: MenuItem[] = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  // 添加更多菜单项...
];
```

然后在翻译文件中添加对应的文本：

```json
{
  "navigation": {
    "home": "首页",
    "about": "关于"
  }
}
```

#### 4.3 修改站点配置

编辑 `src/config.ts`:

```typescript
export const siteConfig = {
  name: '你的网站名称',
  description: '你的网站描述',
  url: 'https://your-domain.com',
};
```

### 步骤 5: 部署到 Cloudflare Pages

#### 方法 A: 通过 Git 自动部署（推荐）

1. 将代码推送到 GitHub/GitLab
2. 登录 Cloudflare Dashboard
3. 创建新的 Pages 项目
4. 连接你的 Git 仓库
5. 配置构建设置：
   - Build command: `npm run build`
   - Build output: `.next`
6. 保存并部署

#### 方法 B: 手动部署

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy .next --project-name=your-project
```

## ✅ 完成！

你的网站已经上线了！

## 📖 下一步

- 阅读 [完整 README](../README.md) 了解更多功能
- 查看 [菜单配置指南](./MENU_CONFIG.md) 学习如何配置导航
- 查看 [部署指南](./DEPLOYMENT.md) 了解部署选项

## ❓ 遇到问题？

常见问题：

1. **依赖安装失败** - 尝试删除 `node_modules` 和锁文件，重新安装
2. **端口被占用** - 使用 `npm run dev -- -p 3001` 指定其他端口
3. **构建失败** - 检查 Node 版本是否为 18+

更多帮助请查看完整文档或创建 Issue。
