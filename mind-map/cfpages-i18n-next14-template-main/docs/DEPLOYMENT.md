# Cloudflare Pages 部署指南

## 部署到 Cloudflare Pages

### 自动部署（推荐）

1. 将代码推送到 GitHub/GitLab
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 选择 **Workers & Pages** > **Pages**
4. 点击 **Create a project** > **Connect to Git**
5. 选择你的仓库
6. 配置构建设置：
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
7. 添加环境变量（可选）：
   - `NODE_VERSION`: `18` 或 `20`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: 你的 Google Analytics ID
8. 点击 **Save and Deploy**

### 手动部署

```bash
# 1. 安装 Wrangler CLI
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 构建项目
npm run build

# 4. 部署
wrangler pages deploy .next --project-name=your-project-name
```

### 环境变量配置

在 Cloudflare Pages 设置中添加：

- `NODE_VERSION`: `18`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: （可选）你的 GA ID

### 自定义域名

1. 在 Cloudflare Pages 项目设置中
2. 点击 **Custom domains**
3. 添加你的域名
4. 按照提示配置 DNS

## 注意事项

- 确保使用 Edge Runtime（已在模板中配置）
- 首次部署可能需要 5-10 分钟
- 后续推送会自动触发重新部署

## 性能优化建议

- 启用 Cloudflare CDN
- 使用 Image Optimization
- 配置 Cache Rules
- 启用 HTTP/3

## 故障排查

### 构建失败

1. 检查 Node 版本是否为 18+
2. 确保所有依赖都已正确安装
3. 查看构建日志中的具体错误

### 页面无法访问

1. 检查构建输出目录是否正确（`.next`）
2. 确认域名 DNS 配置正确
3. 检查 Cloudflare Pages 部署状态

### 样式丢失

1. 确保 TailwindCSS 已正确编译
2. 检查 `next.config.js` 配置
3. 清除 Cloudflare 缓存

## 更多资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
