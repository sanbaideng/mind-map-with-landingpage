# 根路径 404 问题修复

## 问题
在 Cloudflare Pages 部署后：
- ✅ `https://mind-map.org/en` 可以正常打开
- ❌ `https://mind-map.org` 报 404 错误

## 原因
静态导出模式下，Next.js 不会自动生成根路径 (`/`) 的处理，需要手动配置重定向。

## 解决方案

### 1. 创建根 `index.html` 文件
**文件**: `/public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=/en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mind Map Online - Redirecting...</title>
    <script>
        // JavaScript redirect as fallback
        window.location.href = '/en';
    </script>
</head>
<body>
    <p>Redirecting to <a href="/en">Mind Map Online</a>...</p>
</body>
</html>
```

这个文件提供了三层保障：
1. **Meta refresh** - HTML 标准的自动刷新
2. **JavaScript 重定向** - 作为后备方案
3. **HTML 链接** - 如果前两者都失败，用户可以手动点击

### 2. 更新 `_redirects` 文件
**文件**: `/_redirects`

```
# Redirect root to English by default
/  /en  302

# Redirect /mind-map to /en/mind-map
/mind-map  /en/mind-map  302
```

这个文件被 Cloudflare Pages 识别并执行服务器端重定向。

### 3. 使用正确的构建命令

**重要**: 必须使用 `npm run pages:build` 而不是 `npm run build`

```bash
npm run pages:build
```

这个命令会：
1. 运行 `next build` 生成静态文件
2. 复制 `_headers` 到 `out/` 目录
3. 复制 `_redirects` 到 `out/` 目录

## 部署步骤

### 本地测试
```bash
npm run pages:build
npm run pages:dev
```

然后访问 `http://localhost:8788` 测试根路径重定向。

### 部署到 Cloudflare Pages

#### 方式 1: 使用命令行
```bash
npm run pages:deploy
```

#### 方式 2: GitHub 自动部署
在 Cloudflare Pages 设置中配置：
- **Build command**: `npm run pages:build`
- **Build output directory**: `out`
- **Root directory**: `/`

推送代码到 GitHub 后自动部署。

## 验证

部署完成后，验证以下URL：
- ✅ `https://mind-map.org/` → 应该重定向到 `/en`
- ✅ `https://mind-map.org/en` → 英文首页
- ✅ `https://mind-map.org/zh` → 中文首页
- ✅ `https://mind-map.org/mind-map` → 应该重定向到 `/en/mind-map`
- ✅ `https://mind-map.org/en/mind-map` → 英文思维导图
- ✅ `https://mind-map.org/zh/mind-map` → 中文思维导图

## 工作原理

### Cloudflare Pages 处理顺序
1. **首先检查 `_redirects` 文件** - 如果匹配到规则，执行服务器端重定向（302）
2. **然后检查静态文件** - 如果存在 `index.html`，返回该文件
3. **最后返回 404** - 如果以上都不匹配

### 我们的实现
- **服务器端重定向** (`_redirects`): 快速、SEO友好的 302 重定向
- **客户端重定向** (`index.html`): 作为后备方案，确保即使 `_redirects` 失败也能工作
- **双重保障**: 两种方法互为备份，确保用户始终能访问网站

## 文件清单

### 需要的文件
- ✅ `/public/index.html` - 根路径重定向页面
- ✅ `/_redirects` - Cloudflare Pages 重定向规则
- ✅ `/_headers` - HTTP 头部配置
- ✅ `/package.json` - 包含 `pages:build` 脚本

### 构建输出 (`out/` 目录)
- ✅ `index.html` - 从 `/public` 复制
- ✅ `_redirects` - 从根目录复制
- ✅ `_headers` - 从根目录复制
- ✅ `en.html`, `zh.html`, 等 - 语言页面
- ✅ `en/`, `zh/`, 等目录 - 子页面

## 常见问题

### Q: 为什么本地开发不需要这个？
**A**: Next.js 开发服务器有内置的路由处理，会自动处理根路径。但静态导出后，这个逻辑不存在，需要手动配置。

### Q: 为什么用 302 而不是 301？
**A**: 302 是临时重定向，允许未来根据用户浏览器语言设置动态选择默认语言。如果确定永远重定向到 `/en`，可以改为 301。

### Q: 如何改变默认语言？
**A**: 修改两个地方：
1. `/public/index.html` 中的 `url=/en` 改为 `url=/zh`
2. `/_redirects` 中的 `/  /en  302` 改为 `/  /zh  302`

### Q: `_redirects` 文件在 Vercel 上工作吗？
**A**: 不完全兼容。Vercel 使用 `vercel.json` 配置。如果要支持 Vercel，需要额外配置。

## 注意事项

1. **必须使用 `pages:build` 命令** - 这确保 `_redirects` 和 `_headers` 被复制
2. **index.html 在 public 目录** - Next.js 会自动复制 `public/` 下的文件到输出目录
3. **测试所有路径** - 部署后测试根路径、语言路径和子页面
4. **清除缓存** - 如果更改不生效，清除浏览器缓存或使用无痕模式

## 技术细节

### Cloudflare Pages `_redirects` 语法
```
source   destination   status_code
```

示例：
```
/            /en                302    # 临时重定向
/old-page    /new-page          301    # 永久重定向
/blog/*      /posts/:splat      301    # 通配符重定向
```

### Meta Refresh vs JavaScript vs Server Redirect
| 方法 | 速度 | SEO | 浏览器支持 | 备注 |
|------|------|-----|------------|------|
| Server Redirect (302) | 最快 | 最佳 | 100% | Cloudflare Pages 首选 |
| Meta Refresh | 快 | 良好 | 99%+ | HTML 标准 |
| JavaScript | 中 | 一般 | 95%+ | 需要 JS 开启 |
| HTML Link | 慢 | 最差 | 100% | 需要用户点击 |

我们的实现使用所有方法作为多层保障。

## 更新日志

- **2025-10-17**: 创建根 `index.html` 和更新 `_redirects` 文件
- **2025-10-17**: 添加 `/mind-map` 到 `/en/mind-map` 的重定向
- **2025-10-17**: 验证构建输出包含所有必需文件

## 相关文件

- `/public/index.html` - 根路径重定向
- `/_redirects` - Cloudflare Pages 重定向配置
- `/package.json` - 构建脚本
- `/next.config.js` - Next.js 配置
- `/SEO_LANDING_PAGE_SUMMARY.md` - SEO 优化总结
