# React × FastAPI × MySQL × Bootstrap ユーザー管理システム

このプロジェクトは、React、FastAPI、MySQL、Bootstrapを使用したコンテナ化されたユーザー管理システムです。これらの技術スタックのテンプレートアプリケーションとして作成されており、フルスタック開発の学習や新規プロジェクトの基盤として活用できます。

## 🚀 技術スタック

### フロントエンド
- **React 19.1.0** - ユーザーインターフェース
- **TypeScript 4.9.5** - 型安全性
- **Bootstrap 5.3.0** - UIフレームワーク
- **React Bootstrap 2.10.10** - Bootstrapコンポーネント
- **Axios 1.6.0** - HTTP通信
- **Bootstrap Icons** - アイコン

### バックエンド
- **FastAPI** - RESTful API
- **SQLAlchemy** - ORM
- **PyMySQL** - MySQL接続
- **Uvicorn** - ASGIサーバー

### データベース
- **MySQL 8.0** - リレーショナルデータベース

### インフラ
- **Docker** - コンテナ化
- **Docker Compose** - マルチコンテナ管理

## 📁 プロジェクト構造

```
react-fastapi-mysql/
├── frontend/                 # Reactフロントエンド
│   ├── src/
│   │   ├── components/      # Reactコンポーネント
│   │   │   ├── UserList.tsx
│   │   │   ├── UserModal.tsx
│   │   │   └── ReactLogo.tsx
│   │   ├── services/        # APIサービス
│   │   │   └── userService.ts
│   │   ├── hooks/          # カスタムフック
│   │   │   └── useUsers.ts
│   │   ├── utils/          # ユーティリティ
│   │   │   ├── api.ts
│   │   │   └── validation.ts
│   │   ├── constants/      # 定数
│   │   │   ├── colors.ts
│   │   │   └── messages.ts
│   │   ├── types/          # TypeScript型定義
│   │   │   ├── User.ts
│   │   │   └── global.d.ts
│   │   ├── assets/         # 静的ファイル
│   │   │   ├── App.css
│   │   │   ├── index.css
│   │   │   └── logo.svg
│   │   ├── App.tsx         # メインコンポーネント
│   │   └── index.tsx       # エントリーポイント
│   ├── public/             # 静的ファイル
│   ├── package.json
│   └── Dockerfile
├── backend/                 # FastAPIバックエンド
│   ├── app/
│   │   ├── main.py         # FastAPIアプリケーション
│   │   ├── models.py       # SQLAlchemyモデル
│   │   ├── schemas.py      # Pydanticスキーマ
│   │   ├── crud.py         # CRUD操作
│   │   └── database.py     # データベース設定
│   ├── requirements.txt
│   └── Dockerfile
├── mysql/                   # MySQL設定
│   ├── initdb.d/           # 初期化SQL
│   ├── conf.d/             # MySQL設定
│   └── log/                # ログファイル
├── docker-compose.yml      # Docker Compose設定
└── README.md
```

## 🔧 機能仕様

### フロントエンド機能
- **ユーザー一覧表示** - テーブル形式でのユーザー表示
- **ユーザー作成** - モーダルダイアログでの新規ユーザー作成
- **ユーザー編集** - モーダルダイアログでのユーザー情報編集
- **ユーザー削除** - 確認ダイアログ付きのユーザー削除
- **バリデーション** - フォーム入力値の検証
- **エラーハンドリング** - API通信エラーの表示
- **レスポンシブデザイン** - Bootstrapによるモバイル対応

### バックエンドAPI
- **GET /users** - 全ユーザー取得
- **GET /users/{user_id}** - 特定ユーザー取得
- **POST /users** - ユーザー作成
- **PUT /users/{user_id}** - ユーザー更新
- **DELETE /users/{user_id}** - ユーザー削除

### データベース
- **users** テーブル
  - `id` (INT, PRIMARY KEY, AUTO_INCREMENT)
  - `name` (VARCHAR(255), NOT NULL)
  - `age` (INT, NOT NULL)

## 🛠️ セットアップ手順

### 前提条件
- Docker
- Docker Compose
- Git

### 1. リポジトリのクローン
```bash
git clone <repository-url>
cd react-fastapi-mysql
```

### 2. フロントエンドの依存関係インストール
```bash
cd frontend
npm install
cd ..
```

### 3. コンテナの起動
```bash
docker-compose up --build
```

### 4. アクセス方法

#### フロントエンド
- **URL**: http://localhost:3000
- **説明**: Reactアプリケーション（ユーザー管理画面）

#### バックエンドAPI
- **URL**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **説明**: FastAPIアプリケーション（RESTful API）

#### データベース
- **Host**: localhost
- **Port**: 3306
- **Database**: db
- **Username**: user
- **Password**: password

### 5. 初期データの確認
MySQLコンテナに接続してデータを確認：
```bash
docker exec -it mysql mysql -u user -ppassword db
```

```sql
SELECT * FROM users;
```

## 🔄 開発用コマンド

### フロントエンド開発
```bash
cd frontend
npm start          # 開発サーバー起動
npm run build     # プロダクションビルド
npm test          # テスト実行
```

### バックエンド開発
```bash
cd backend
uvicorn app.main:app --reload  # 開発サーバー起動
```

### Docker操作
```bash
# コンテナ起動
docker-compose up

# バックグラウンド起動
docker-compose up -d

# コンテナ停止
docker-compose down

# ログ確認
docker-compose logs -f

# 特定サービスのログ
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f mysql
```

## 📊 アーキテクチャ

### フロントエンドアーキテクチャ
```
App.tsx (メインコンポーネント)
├── UserList.tsx (ユーザー一覧)
├── UserModal.tsx (ユーザー作成・編集)
├── ReactLogo.tsx (ロゴ表示)
├── useUsers.ts (カスタムフック)
├── userService.ts (API通信)
└── utils/ (ユーティリティ)
```

### バックエンドアーキテクチャ
```
main.py (FastAPIアプリケーション)
├── models.py (SQLAlchemyモデル)
├── schemas.py (Pydanticスキーマ)
├── crud.py (データベース操作)
└── database.py (接続設定)
```

## 🎨 UI/UX特徴

- **Bootstrap 5**によるモダンなデザイン
- **レスポンシブ対応**でモバイル・デスクトップ両対応
- **モーダルダイアログ**による直感的な操作
- **Bootstrap Icons**による視覚的な分かりやすさ
- **エラー表示**によるユーザーフレンドリーなフィードバック
- **ローディング状態**の表示

## 🔒 セキュリティ

- **CORS設定**によるクロスオリジン通信
- **入力値バリデーション**によるXSS対策
- **SQLAlchemy**によるSQLインジェクション対策
- **環境変数**による機密情報管理

## 🚀 デプロイ

### 本番環境での注意点
1. **環境変数**の適切な設定
2. **データベースパスワード**の強固な設定
3. **CORS設定**の本番環境への対応
4. **HTTPS**の設定
5. **ログ設定**の最適化

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📞 サポート

問題や質問がある場合は、GitHubのIssuesページでお知らせください。
