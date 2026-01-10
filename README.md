# 🌸 AI Powered Portfolio Site

Y.Haruto の **ポートフォリオサイト**（Next.js App Router）です。  
桜の背景演出・アニメーション付きヒーロー・自己紹介/スキル/更新履歴/SNS・「Ask Me With AI」チャットUI（※現状はスタブ）を掲載しています。

🌐 **Visit my portfolio site**: [https://yharuto.dev](https://yharuto.dev)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-App_Hosting-FFCA28?logo=firebase&logoColor=black)

## 📌 目次

- [🌸 AI Powered Portfolio Site](#-ai-powered-portfolio-site)
  - [📌 目次](#-目次)
  - [✨ 主な機能](#-主な機能)
  - [🛠️ 技術スタック](#️-技術スタック)
  - [⚙️ 開発環境のセットアップ](#️-開発環境のセットアップ)
    - [📋 前提](#-前提)
    - [📥 インストール](#-インストール)
  - [💻 開発用コマンド](#-開発用コマンド)
    - [🚀 開発サーバー起動](#-開発サーバー起動)
    - [🏗️ ビルド / 本番起動](#️-ビルド--本番起動)
    - [🔍 Lint](#-lint)
  - [🔥 Firebase App Hosting について](#-firebase-app-hosting-について)
    - [🧪 （任意）App Hosting エミュレータ](#-任意app-hosting-エミュレータ)
  - [📂 ディレクトリ構成](#-ディレクトリ構成)
  - [👤 作者 / リンク](#-作者--リンク)

## ✨ 主な機能

- **🌸 ヒーローセクション**: アニメーション付きのキャッチコピー表示
- **✨ 桜の背景演出**: 花びらが舞う背景エフェクト
- **📋 セクション構成**: About / Skills / ChangeLog / SNS
- **🍔 メニュー**: ハンバーガーメニュー + ソーシャルリンク
- **🤖 Ask Me With AI**: 画面下部のチャットUI
  - 現状はフロント側の UI のみで、送信すると固定メッセージを返します（`src/components/common/askMeWithAI.tsx`）

## 🛠️ 技術スタック

- **Framework**: Next.js（App Router）
- **UI**: React / TypeScript / Tailwind CSS
- **Animation**: Motion（Framer Motion）/ GSAP
- **Markdown**: react-markdown + remark-gfm
- **Hosting**: Firebase App Hosting（設定ファイル同梱）

## ⚙️ 開発環境のセットアップ

### 📋 前提

- Node.js（推奨: 20 以上）
- npm

### 📥 インストール

```bash
npm install
```

## 💻 開発用コマンド

### 🚀 開発サーバー起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認できます。  
トップページは `src/app/page.tsx` を編集すると反映されます。

### 🏗️ ビルド / 本番起動

```bash
npm run build
npm run start
```

### 🔍 Lint

```bash
npm run lint
```

## 🔥 Firebase App Hosting について

このリポジトリには Firebase App Hosting 用の設定が含まれています。

- `firebase.json`: App Hosting の設定（`backendId` など）と Emulator 設定
- `apphosting.yaml`: Cloud Run 側の実行設定（インスタンス数など）
- `apphosting.emulator.yaml`: エミュレータ用の `env`（必要になった場合に追記）

### 🧪 （任意）App Hosting エミュレータ

Firebase CLI（`firebase-tools`）が入っている場合は、次で App Hosting エミュレータを起動できます。

```bash
firebase emulators:start --only apphosting
```

※ 環境/CLI バージョンによりポートや挙動が異なる場合があります。`firebase.json` の設定も合わせて確認してください。

## 📂 ディレクトリ構成

- `src/app/`: Next.js App Router（`layout.tsx`, `page.tsx` など）
- `src/components/common/`: 背景演出/ヘッダー/チャットUIなど
- `src/components/IntroduceMySelf/`: About / Skills / ChangeLog / SNS
- `src/components/ui/`: UI パーツ（ボタン、カード、メニュー等）

## 👤 作者 / リンク

- **YAMAZAKI Haruto**
- 🐙 **GitHub**: `https://github.com/yharuto0917`
- 🤗 **Hugging Face**: `https://huggingface.co/YHaruto`
- 🐦 **Twitter (X)**: `https://x.com/Yharuto09171700`
- 📸 **Instagram**: `https://instagram.com/yamazaki.ha`
- 🧵 **Threads**: `https://threads.com/@yamazaki.ha`
- 📝 **Zenn**: `https://zenn.dev/oimachi`
