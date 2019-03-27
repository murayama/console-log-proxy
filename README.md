# ChromeRemoteDebugProxy

require node v10.x

TVのブラウザなど、devtoolsがなく開発が困難な場合を想定している
consoleの出力のみとしDOMのデバッグは対応しない

Chromeで[NIM](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj")をいれておくとサーバーを立ち上げたときに自動でコンソールが立ち上がるようにできるので便利

NIMを使わない場合は、

1. Chromeで`chrome://inspect`と入力
2. `Open Dedicated DevTools for Node`をクリック
3. 立ち上がった画面の`Add Connection`を押して`localhost:9229`を登録
4. Remote Target#localhostのところに`inspect`が表示されるのでクリックするとinspectorが立ち上がる

GoogleChromeが推奨だがVisualStudioCodeなどのChromeDevToolsProtocolをサポートしているものであれば使えるはず

# Usage

## install

```
yarn install chrome-remote-debug-proxy
```

## server

```
yarn crdp
```
default port 8888

## client

クライアントはwebsocketとhttpが用意されている
対象のサイトでクライアントJSを読み込む

```html
<script src="http://localhost:8888/websocket-client.js"></script>
```

or

```
```html
<script src="http://localhost:8888/http-client.js"></script>
```

接続先のサーバーはデフォルトでlocalhost:8888になっているので指定する場合は、queryでhostとportを指定する

```html
<script src="http://localhost:1234/websocket-client.js?host=192.168.134.80&port=1234"></script>
```
