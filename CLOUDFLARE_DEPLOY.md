# Cloudflare Pages 部署指南

## ✅ 配置已完成

项目已配置好可以部署到 Cloudflare Pages。

## 快速部署（推荐）

### 方法 1: GitHub 自动部署

1. **连接 GitHub 仓库**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
   - 进入 `Workers & Pages` -> `Create application` -> `Pages` -> `Connect to Git`
   - 授权并选择你的 GitHub 仓库

2. **配置构建设置**
   ```
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build
   Build output directory: out
   Root directory: /
   Node version: 18 或更高
   ```

3. **部署**
   - 点击 `Save and Deploy`
   - 每次推送到主分支会自动触发部署

### 方法 2: 手动部署

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. **构建并部署**
   ```bash
   npm run pages:build
   npx wrangler pages deploy out --project-name=mind-map-landing
   ```

3. **后续更新**
   ```bash
   npm run pages:deploy
   ```

## 项目配置说明

### 已配置的文件

1. **next.config.js**
   - ✅ `output: 'export'` - 静态导出
   - ✅ `images.unoptimized: true` - 禁用图片优化（静态导出需要）

2. **wrangler.toml**
   - 项目名称: `mind-map-landing`
   - 输出目录: `out`

3. **_headers** - HTTP 响应头配置
   - 安全头配置
   - Mind-map iframe 特殊配置

4. **_redirects** - URL 重定向规则
   - 默认重定向到 `/en`

5. **tsconfig.json**
   - ✅ 排除 `mind-map` 目录（避免构建错误）

### 可用的 NPM 脚本

```bash
# 开发
npm run dev                # 启动开发服务器

# 构建
npm run build              # Next.js 静态导出

# Cloudflare Pages 部署
npm run pages:build        # 构建并复制配置文件
npm run pages:deploy       # 构建并部署到 Cloudflare Pages
npm run pages:dev          # 本地测试 Cloudflare Pages 环境
```

## 验证部署

构建成功后，你应该看到：
```
✓ Compiled successfully
✓ Generating static pages (25/25)
Route (app)
├ ● /[locale]              # 主页（10种语言）
├ ● /[locale]/mind-map     # Mind Map 页面
```

## 功能特性

### ✅ 已集成功能

1. **多语言支持** (10种语言)
   - English, 中文, Español, Français, Deutsch
   - Italiano, Português, 한국어, 日本語, 繁體中文

2. **Mind Map 集成**
   - 路由: `/[locale]/mind-map`
   - 静态文件位于 `public/mind-map/`
   - 通过 iframe 嵌入

3. **语言同步**
   - 主应用语言切换自动同步到 Mind Map
   - Mind Map 的语言选择器已隐藏

### ⚠️ 静态导出限制

- ❌ 不支持 Server-Side Rendering (SSR)
- ❌ 不支持 API Routes
- ❌ 不支持动态 Image Optimization
- ✅ 所有页面都是预渲染的静态 HTML

## 自定义域名

在 Cloudflare Pages 项目设置中:

1. 进入 `Custom domains`
2. 添加你的域名
3. Cloudflare 会自动配置 DNS（如果域名在 Cloudflare）

## 环境变量

如果需要环境变量（当前不需要）：

1. 在 Cloudflare Pages 项目设置中
2. 进入 `Settings` -> `Environment variables`
3. 添加变量

## 故障排查

### 构建失败

```bash
# 本地测试构建
npm run build

# 检查输出
ls -la out/
```

### Mind Map 无法加载

检查：
- `public/mind-map/` 目录是否存在
- `out/mind-map/` 在构建后是否包含所有文件
- 浏览器控制台是否有 CORS 或路径错误

### 语言切换不工作

检查：
- 所有语言文件 `src/messages/*.json` 是否包含完整的翻译
- `i18n/request.ts` 配置是否正确

## 性能优化建议

1. **启用 Cloudflare 缓存**
   - 在 Cloudflare Dashboard 设置缓存规则

2. **压缩资源**
   - Cloudflare Pages 自动启用 Brotli 压缩

3. **CDN 分发**
   - Cloudflare 自动在全球 CDN 分发

## 监控和分析

Cloudflare Pages 提供：
- 构建日志
- 访问分析（需要升级到付费版）
- Real User Monitoring (RUM)

## 下一步

部署成功后：

1. ✅ 验证所有语言版本正常工作
2. ✅ 测试 Mind Map 功能
3. ✅ 设置自定义域名（可选）
4. ✅ 配置 CDN 缓存规则（可选）

## 支持

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Next.js 静态导出文档](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

