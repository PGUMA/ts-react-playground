# 環境構築手順

1. Create React App

```bash
npx create-react-app <project-name> --template typescript
```

2. ESlint 初期設定

```bash
npm init @eslint/config
```

**eslint 初期導入パッケージについて**

- @typescript-eslint/eslint-plugin … ESLint に TypeScript のルールを追加
- @typescript-eslint/parser … ESLint で TypeScript の解析をする用
- eslint … ESLint 本体
- eslint-config-airbnb … ESLint に Airbnb スタイルを追加
- eslint-plugin-import … ESLint に ES Modules のルールを追加
- eslint-plugin-jsx-a11y … ESLint に JSX のルールを追加
- eslint-plugin-react … ESLint に React のルールを追加
- eslint-plugin-react-hooks … ESLint に React Hooks のルールを追加

3. ESlint 追加パッケージ

```bash
npm i --save-dev eslint-config-airbnb-typescript
npm i --save-dev eslint-plugin-unused-imports
```

4. prettier 初期設定

```bash
npm i --save-dev prettier eslint-config-prettier
```

- 設定ファイルの追加

```bash
touch .prettierrc.js
```

5. ESlint の非対称ファイルの追加

```bash
touch .eslintignore
echo "/.eslintrc.js" >> .eslintignore
```

6. lint&フォーマット（lint fix + prettier）の実行 script の追加

package.json

```json
"lint": "eslint --ext 'src/**/*.{js,jsx,ts,tsx}'",
"format": "eslint --cache --fix 'src/**/*.{js,jsx,ts,tsx}' && prettier --write 'src/**/*.{js,jsx,ts,tsx}'"
```

# 参考

[URL](https://yumegori.com/vscode_react_typescript_eslint_prettier)
