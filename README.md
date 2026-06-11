# Polaris Lab Website

北京大学 Polaris Lab 官方网站 - 极客风AI实验室介绍网站

## 🏠 项目介绍

Polaris Lab 是一家人工智能研究实验室，位于北京大学。我们的研究方向涵盖：

- **AI for Science** - 环境科学、材料科学
- **Social Computing** - 社交网络分析、机器人检测
- **General AI** - 大语言模型、智能体、世界模型
- **Physical AI** - 机器人技术

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **UI组件**: shadcn/ui + Tailwind CSS
- **动画**: Framer Motion
- **国际化**: 中英双语
- **风格**: 极客风深色主题

## 📂 页面结构

- `/` - 首页 (Hero + 方向概览 + 最新论文)
- `/research` - 研究方向概览
- `/research/[slug]` - 各方向详情页
- `/achievements` - 成果展示 (论文/专利/数据集/刷榜/产品)
- `/about` - 关于我们 (团队/招聘/联系方式)

## 🛠️ 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build
```

## 📝 注意事项

- 模拟数据存放在 `src/data/index.ts`
- 中英文文本存放在 `messages/` 目录
- 国际化配置待完善

## 📄 License

MIT License