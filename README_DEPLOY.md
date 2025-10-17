# 部署到 Cloudflare Pages

这个项目已配置好可以快速部署到 Cloudflare Pages。

## 🚀 快速开始

### 选项 1: GitHub 自动部署（推荐）

1. 将代码推送到 GitHub
2. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Workers & Pages -> Create -> Pages -> Connect to Git
4. 选择你的仓库，使用以下配置：
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 18+
5. 点击 "Save and Deploy"

### 选项 2: 命令行部署

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
npm run pages:deploy
```

## 📚 详细文档

查看 [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md) 了解完整的部署指南。

## ✨ 功能

- ✅ 10种语言支持
- ✅ Mind Map 集成（路由: `/[locale]/mind-map`）
- ✅ 语言自动同步
- ✅ 静态导出，性能优化

## 📦 本地测试

```bash
# 开发
npm run dev

# 构建
npm run build

# 测试构建输出
npm run pages:dev
```
