# 1. express 활용 크롤링

### 1. express 설치
```npm
npm install --save express

or 

yarn add express
```

```js

let exrpess = require('express');
let router = express.Router();
```


### 2. cheerio 설치
```npm
npm install --save cheerio

or 

yarn add cheerio
```

```js
const cheerio = require('cheerio');
```

### 3. axios 설치
```npm
npm install --save axios

or 

yarn add axios
```
```js
const axios = require('axios');
```

#### 2. request  or express 

1. request를 통해서 크롤링을 할 수 있다.
2. express를 이용해서 크롤링을 할 수 있다.

두개 다 서버처럼 사용할 수 있지만, express는 node의 웹 프레임워크로 웹상으로 url를 이용해서 크롤링을 지속적으로 이용할 수 있다는 장점이있다.
