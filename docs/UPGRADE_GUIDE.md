# 依赖升级指南 Dependencies Upgrade Guide

## 📊 当前状态

- **Next.js**: 14.2.20
- **React**: 18.3.1
- **next-intl**: 3.25.3
- **TypeScript**: 5.7.2

## ✅ 已完成的更新

### 1. Browserslist 数据库
```bash
npx update-browserslist-db@latest
```

这会更新 `caniuse-lite` 数据库，解决浏览器兼容性数据过期的警告。

## 🚀 关于升级到 Next.js 15

### Next.js 15 的主要变化

**新特性：**
- ✅ React 19 支持
- ✅ 改进的缓存策略
- ✅ Turbopack 稳定版（开发模式）
- ✅ 改进的 Server Actions
- ✅ 部分预渲染（PPR）

**破坏性变更：**
- ⚠️ `next/image` 默认行为变化
- ⚠️ `fetch` 缓存默认值变更
- ⚠️ React 19 需要更新相关库

### 是否应该升级？

**建议：暂时保持 Next.js 14** ✋

原因：
1. **next-intl 兼容性**：需要确认是否完全支持 Next.js 15
2. **Headless UI**：可能需要更新到支持 React 19 的版本
3. **生态系统稳定性**：等待社区库完全支持
4. **生产稳定性**：Next.js 14 更稳定可靠

**如果你想尝试 Next.js 15：**
- 建议等待 1-2 个月
- 让社区库完全支持
- 等待 Next.js 15.x.x 修复初期 bug

## 📦 推荐的更新策略

### 阶段 1：安全更新（立即执行）

这些更新不会破坏现有代码：

```json
{
  "dependencies": {
    "@headlessui/react": "^2.2.0",        // 最新
    "@heroicons/react": "^2.2.0",         // 最新
    "@tailwindcss/forms": "^0.5.9",       // 最新
    "autoprefixer": "^10.4.20",           // 最新
    "clsx": "^2.1.1",                     // 最新
    "next": "^14.2.20",                   // 保持 14
    "next-intl": "^3.25.3",               // 最新
    "tailwindcss": "^3.4.16",             // 最新
    "typescript": "^5.7.2"                // 最新
  },
  "devDependencies": {
    "eslint": "^8.57.1",                  // 考虑升级到 9.x
    "prettier": "^3.4.2",                 // 最新
    "sharp": "^0.33.5"                    // 可以更新
  }
}
```

### 阶段 2：小版本更新

#### 更新命令

```bash
# 更新 browserslist 数据库
npx update-browserslist-db@latest

# 检查过期的包
pnpm outdated

# 更新所有补丁版本
pnpm update

# 更新特定包到最新次要版本
pnpm update @headlessui/react @heroicons/react

# 更新 sharp（如果需要）
pnpm update sharp
```

### 阶段 3：未来升级（2-3个月后）

当以下条件满足时考虑升级到 Next.js 15：

1. ✅ `next-intl` 官方支持 Next.js 15
2. ✅ `@headlessui/react` 支持 React 19
3. ✅ Next.js 15 发布稳定版本（15.1.0+）
4. ✅ 社区反馈良好

## 🔧 立即执行的更新

### 1. 更新 package.json

```bash
# 使用 pnpm 更新所有包到最新的兼容版本
pnpm update --latest
```

### 2. 更新特定的开发依赖

```bash
# 更新 sharp 到最新版本（图片优化）
pnpm update sharp@latest

# 更新 TypeScript 类型定义
pnpm update @types/node @types/react @types/react-dom --latest
```

### 3. 清理和重建

```bash
# 清理缓存
rm -rf .next node_modules

# 重新安装
pnpm install

# 重建
pnpm build
```

## ⚡ 性能优化建议

### 1. 使用 Turbopack（实验性）

在 Next.js 14 中可以启用 Turbopack 开发模式：

```json
// package.json
{
  "scripts": {
    "dev": "next dev --turbo",  // 添加 --turbo
    "build": "next build",
    "start": "next start"
  }
}
```

### 2. 优化依赖

移除未使用的包：

```bash
# 检查未使用的依赖
pnpm exec depcheck
```

## 🐛 解决 Deprecation 警告

### punycode 警告

警告信息：
```
DeprecationWarning: The `punycode` module is deprecated
```

**原因**：某些依赖包使用了已弃用的 Node.js 内置 `punycode` 模块。

**解决方案**：
1. **等待依赖更新**（推荐）：这是依赖包的问题，不是你的代码
2. **忽略警告**：不影响功能，等待 Next.js 15 和依赖包更新
3. **临时抑制**（开发时）：
   ```bash
   NODE_NO_WARNINGS=1 pnpm dev
   ```

### browserslist 警告

**已解决** ✅：运行了 `npx update-browserslist-db@latest`

## 📋 更新检查清单

执行以下命令并记录结果：

```bash
# 1. 检查过期的包
pnpm outdated

# 2. 检查安全漏洞
pnpm audit

# 3. 检查 Next.js 最新版本
pnpm info next versions

# 4. 检查 next-intl 兼容性
pnpm info next-intl peerDependencies
```

## 🎯 推荐的更新计划

### 本周（现在）

- [x] 更新 browserslist 数据库
- [ ] 运行 `pnpm update` 更新补丁版本
- [ ] 测试应用功能
- [ ] 提交代码

### 下个月

- [ ] 检查 `next-intl` 是否支持 Next.js 15
- [ ] 查看 Next.js 15 的变更日志
- [ ] 在开发分支测试 Next.js 15

### 2-3个月后

- [ ] 评估 Next.js 15 的稳定性
- [ ] 规划完整的升级计划
- [ ] 执行升级并全面测试

## 🔍 监控资源

关注这些资源了解升级时机：

- [Next.js 发布说明](https://github.com/vercel/next.js/releases)
- [next-intl 更新日志](https://github.com/amannn/next-intl/releases)
- [React 19 发布状态](https://react.dev/blog)

## 💡 最佳实践

1. **始终在新分支测试升级**
2. **升级前备份或提交代码**
3. **阅读升级指南和变更日志**
4. **逐步升级，不要跳版本**
5. **先在开发环境测试，再部署到生产环境**

## 🚨 紧急修复

如果遇到安全漏洞：

```bash
# 查看安全问题
pnpm audit

# 自动修复（谨慎使用）
pnpm audit fix

# 只修复生产依赖
pnpm audit fix --prod
```

## 📞 获取帮助

- [Next.js Discord](https://nextjs.org/discord)
- [next-intl GitHub Issues](https://github.com/amannn/next-intl/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**建议**：保持当前的 Next.js 14 配置，定期运行 `pnpm update` 更新补丁版本，等待 2-3 个月后再考虑升级到 Next.js 15。

**当前状态**：✅ 生产就绪，稳定可靠
