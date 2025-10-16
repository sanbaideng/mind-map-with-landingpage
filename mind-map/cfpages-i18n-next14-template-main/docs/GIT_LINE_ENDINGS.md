# Git 行尾符配置说明

## 问题说明

在 Windows 上使用 Git 时，你可能会看到这样的警告：

```
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
```

这是因为：
- **Windows** 使用 CRLF（Carriage Return + Line Feed）作为行尾符
- **Linux/Mac** 使用 LF（Line Feed）作为行尾符
- Git 需要在不同系统之间协调这些差异

## 已完成的配置

### 1. Git 配置
```bash
git config core.autocrlf true
```

这告诉 Git：
- 检出文件时：LF → CRLF（适应 Windows）
- 提交文件时：CRLF → LF（保持仓库统一）

### 2. .gitattributes 文件

创建了 `.gitattributes` 文件来明确指定每种文件类型的行尾符：

```
# 代码文件使用 LF
*.js text eol=lf
*.ts text eol=lf
*.json text eol=lf

# Windows 脚本使用 CRLF
*.bat text eol=crlf
*.ps1 text eol=crlf

# 二进制文件不转换
*.png binary
*.jpg binary
```

## 为什么这样配置？

### 优点
✅ **跨平台兼容**：在 Windows、Mac、Linux 上都能正常工作
✅ **仓库统一**：Git 仓库中统一使用 LF
✅ **避免冲突**：减少因行尾符导致的合并冲突
✅ **IDE 兼容**：现代 IDE 都能正确处理 LF

### 最佳实践
1. 仓库中的文件统一使用 LF
2. Windows 用户在本地可以使用 CRLF（通过 `core.autocrlf`）
3. 通过 `.gitattributes` 明确指定规则

## 常见问题

### Q: 警告信息是错误吗？
**A**: 不是错误，只是信息提示。Git 会自动处理转换。

### Q: 需要重新提交吗？
**A**: 不需要。已经提交的文件会在下次 Git 操作时自动规范化。

### Q: 团队成员需要配置吗？
**A**: 
- `.gitattributes` 已提交到仓库，会自动应用
- 建议 Windows 用户运行 `git config core.autocrlf true`
- Mac/Linux 用户运行 `git config core.autocrlf input`

### Q: 如何验证配置是否正确？
**A**: 
```bash
# 查看当前配置
git config core.autocrlf

# 查看文件的行尾符
git ls-files --eol
```

## 团队协作建议

### Windows 用户
```bash
git config --global core.autocrlf true
```

### Mac/Linux 用户
```bash
git config --global core.autocrlf input
```

### 项目根目录
确保有 `.gitattributes` 文件（已添加）

## 验证

```bash
# 查看 Git 配置
git config --list | grep autocrlf

# 查看 .gitattributes
cat .gitattributes

# 检查文件行尾符
git ls-files --eol | head
```

## 总结

✅ **已完成配置**：
- Git `core.autocrlf` 设置为 `true`
- 创建了 `.gitattributes` 文件
- 所有更改已提交

✅ **结果**：
- 不会再看到行尾符警告
- 跨平台协作无忧
- 代码审查更清晰（没有行尾符差异）

🎯 **建议**：
- 所有团队成员配置相同的 `core.autocrlf` 设置
- 保持 `.gitattributes` 文件在仓库中
- 定期运行 `git status` 检查没有意外的文件变化

---

**配置完成时间**: 2025年10月16日  
**适用系统**: Windows, macOS, Linux  
**Git 版本要求**: 1.7.2+
