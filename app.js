var express = require('express');
var app = express();

// data를 가져오는 libray
const cheerio = require('cheerio');
// puppeteer는 data를 가지고 오고 이벤트 사용가능
/**
 * Chrome 엔진 필수
 * 그래서 패키지 모듈에 chrome.exe와 chroem.dll 파일이 있다.
 * puppeteer는 하나의 browser를 가진다.
 */
const puppeteer = require('puppeteer');

const fs = require('fs');
const port = process.env.PORT || 5000;

/**
 * 참조 : https://medium.com/@pks2974/puppeteer-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-a252bffbb2a8
 */
app.get('/', async (req, res, next) =>{

    let url = 'http://new.mint05.com/ADMINISTRATOR/main/login.html';

    /**
     * puppeteer.launch() : headless -> 브라우저 실행여부(default : true = 실행안합, false = 실행) 
     * defaultViewport : 화면이 노출될 사이즈 (default : 800 * 400)
     * devtools : 개발자 도구 오픈(default : false = 실행안합, true = 실행)
     * 
     * browser는 여러개의 페이지를 가진다.
     */
    const browser = await puppeteer.launch();

    /**
     * browser.newPage()로 페이지 생성
     */
    const page = await browser.newPage();

    /**
     * page.goto 실질 페이지 이동
     */
    await page.goto(url);

    /**
     * 해당 페이지의 데이터를 넣을 수 있다.
     * selector로 사용
     */
    await page.type('input[name=admin_id]', 'yeo1120');
    await page.type('input[name=admin_pw]', '123123');
    
    // 해당 페이지의 탐색이 완료되면 클릭 이벤트를 실행
    // await page.waitForNavigation()
	// 클릭이벤트를 실행
    await page.click('#login-button');
    await page.screenshot({path: 'example.png'});


    /**
     * 무한 반복으로 데이터 추가
     */
    let url2 = 'http://new.mint05.com/ADMINISTRATOR/marketing/marketing.php?pagesize=20&type=&keyword=&s_date1=&e_date1=&s_date2=&e_date2=&order=muu.muu_key&order_val=DESC&page=1';

    await page.goto(url2);

    const content = await page.content();
    const $ = cheerio.load(content);
    const lists = await $('#markting-table > tbody > tr > td > a.markting-link');
    fs.writeFileSync("target.txt", '\ufeff' + lists, {encoding: 'utf8'});
    console.log(lists);
    lists.each(async (index, value) => {
        console.log(value.attribs.href);

        url3 = value.attribs.href;

        await page.goto(url3);

        await page.waitForNavigation( );
        
        content2 = await page.content();
        $ = cheerio.load(content2);

        lists2 = $('body');

        fs.writeFileSync("target.txt", '\ufeff' + lists, {encoding: 'utf8'});
    });
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

exports.module = app;