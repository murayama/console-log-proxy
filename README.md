# Console Log Proxy

[![npm version](https://badge.fury.io/js/console-log-proxy.svg)](https://badge.fury.io/js/console-log-proxy)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

- require node v10.x
- It is assumed that there is no devtools, such as a TV browser, and development is difficult.
- Only console output and DOM debugging is not supported
- Using the nodejs standard inspector


# Usage

## install

```
$ yarn global add console-log-proxy
```

## proxy server

```
$ console-log-proxy
```
default port is 8888

if you specify a port

```
$ PORT=1234 console-log-proxy
```

## proxy client

There is a websocket client and an http client
Adding this script tag to your app

websocket client

```html
<script src="http://localhost:8888/websocket-client.js"></script>
```

http client

```html
<script src="http://localhost:8888/http-client.js"></script>
```

if youe specify proxy server host and port

```html
<script src="http://xxx.xxx.xxx.xxx:1234/websocket-client.js?host=xxx.xxx.xxx.xxx&port=1234"></script>
```
### Supported console method

- debug
- error
- info
- log
- warn
- dir
- table

## inspector client

inspector client is [here](https://nodejs.org/en/docs/guides/debugging-getting-started/#inspector-clients)

It is convenient to use [NIM](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj") when using Chrome
