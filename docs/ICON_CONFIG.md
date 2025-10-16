# 图标配置说明

## 问题解决

之前出现 `GET /icon.svg 500` 错误的原因：

1. **问题原因**：
   - `src/app/icon.svg` 文件在 Next.js 14 的 App Router 中，与 `[locale]` 动态路由冲突
   - Next.js 尝试将 SVG 作为图标元数据处理时失败

2. **解决方案**：
   - 删除了 `src/app/icon.svg`
   - 删除了 `public/icon.svg`
   - 创建了 `src/app/icon.tsx` 用于动态生成图标（推荐）
   - 保留 `src/app/favicon.ico` 作为 fallback

## 当前图标配置

### 1. favicon.ico
位置：`src/app/favicon.ico`

这是标准的 favicon 文件，会被自动使用。

### 2. 动态图标（推荐）
位置：`src/app/icon.tsx`

使用 Next.js 的 `ImageResponse` API 动态生成 PNG 图标。

优点：
- ✅ 更灵活，可以根据需要动态生成
- ✅ 支持多种尺寸
- ✅ 与 App Router 完美集成

### 3. 静态 SVG 图标（可选）

如果你想使用 SVG 图标，有两种方式：

#### 方式 A：放在 public 目录（简单）

```
public/
  └── logo.svg    # 不要命名为 icon.svg
```

然后在 layout 中引用：

```tsx
export const metadata: Metadata = {
  icons: {
    icon: '/logo.svg',
  },
}
```

#### 方式 B：使用 icon.tsx 返回 SVG

```tsx
// src/app/icon.tsx
export default function Icon() {
  return new Response(
    `<svg>...</svg>`,
    {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    }
  )
}
```

## 自定义图标

### 修改当前的动态图标

编辑 `src/app/icon.tsx`：

```tsx
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(to bottom right, #6366F1, #8B5CF6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%',
        }}
      >
        T  {/* 修改这里的文字或添加其他元素 */}
      </div>
    ),
    {
      ...size,
    }
  )
}
```

### 使用自定义 favicon.ico

1. 生成你的 favicon.ico 文件（推荐使用 https://favicon.io/）
2. 替换 `src/app/favicon.ico`

## Apple Touch Icon 和其他图标

如果需要添加其他平台的图标：

```tsx
// src/app/[locale]/layout.tsx
export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/icon-16x16.png',
      },
    ],
  },
}
```

## 推荐的图标尺寸

- **favicon.ico**: 16x16, 32x32, 48x48
- **apple-touch-icon**: 180x180
- **android-chrome**: 192x192, 512x512

## 相关资源

- [Next.js Metadata Files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Next.js ImageResponse](https://nextjs.org/docs/app/api-reference/functions/image-response)
- [Favicon Generator](https://favicon.io/)
- [Real Favicon Generator](https://realfavicongenerator.net/)
