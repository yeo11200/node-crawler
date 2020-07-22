# 1. express 활용 크롤링
[NodeMVC 패턴](https://posnopi13.tistory.com/28?category=146024)
[NodeMVC 2 패턴](https://gofnrk.tistory.com/65)
### 1. express 설치
```npm
npm install --save express

or 

yarn add express

// express-generator는 express의 기본 틀을 가춘 프레임워크를 구조를 제공한다.
npm install express-generator -g

express preflem project_name
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

### 4. phantomjs, casperjs 설치
```
npm install --save phantomjs
npm install --save casperjs 
```


### 5. File System 이용
```npm
npm install --save fs
```

```js
const fs = require('fs');


fs.writeFileSync("target.txt", '\ufeff' + text, {encoding: 'utf8'});
```
##### phantomjs : 커맨드라인(소스코드)으로 웹브라우저를 실행 시켜서 특정 값을 뽑아내거나 비교할 때 사용한다. 웹 브라우져는 로그인이나 특정 값들을 넣을 때 마우스로 클릭 하거나 탭으로 이동하고 해당 값들을 키보드나 마우스로 넣어주어야 한다.
##### casperjs : 팬텀 js를 조금 더 세밀하게 컨트롤 할 수 있는 기능들을 묶어놓은 라이브러리이다.
##### cheerio은 데이터를 가지고오는 정도이고, phantomjs는 조금 더 정밀한 크롤링을 가능하게 한다.

#### 2. request  or express 

1. request를 통해서 크롤링을 할 수 있다.
2. express를 이용해서 크롤링을 할 수 있다.

두개 다 서버처럼 사용할 수 있지만, express는 node의 웹 프레임워크로 웹상으로 url를 이용해서 크롤링을 지속적으로 이용할 수 있다는 장점이있다.
