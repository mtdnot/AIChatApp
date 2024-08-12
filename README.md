<img src="https://nishicomp.com/wp-content/uploads/2024/03/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2024-08-12-080120-1024x576.png" alt="pc画面で見た画像" title="aichat">

# WEBアプリの主な使用技術
<img src="https://img.shields.io/badge/-React-555.svg?logo=react&amp;style=flat" height="30">
<img src="https://img.shields.io/badge/Javascript-276DC3.svg?logo=javascript&amp;style=flat" height="30">
<img src="https://img.shields.io/badge/-CSS3-1572B6.svg?logo=css3&amp;style=flat" height="30">
<img src="https://img.shields.io/badge/-HTML5-333.svg?logo=html5&amp;style=flat" height="30">

# 公開サイト
https://chat.nishicomp.com

## カスタマイズ
分かりづらいですが、拡大率を下げるとキャラクターの右上に歯車アイコンが出てきます。それをクリックすることで任意のキャラに変更可能です。

## キャラクター設定

AIチャットアプリの見た目での機能でWeb上でLive2dを動かせるようにしています。

必要なものとしてCubismSdkForWeb-4-r.7があります。

これをsrcフォルダに入れてもらうことで利用可能になります。

### 手順まとめ

nmp run build ->CubismSdkForWeb-4-r.7をsrcフォルダにダウンロード

## ChatGPTに必要なAPIKEY

このWebアプリはChatGPTのAPIによってチャットできています。

必要であれば、各々OpenAIからAPIKEY(取得は無料だが、利用は有料)を取得してください。

#AIChatApp/src/App.js

const openai = new OpenAI({ 
        apiKey: 'APIKEY' ,
        dangerouslyAllowBrowser: true 
    })

このAPIKEYにいれれば使用できるようになります。

### 実際の解答例
<img src="https://nishicomp.com/wp-content/uploads/2024/03/Screenshot-2024-03-13-09.43.09.jpg">

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
