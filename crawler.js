const cheerio = require('cheerio');
const axios = require('axios');

const schedule = require('node-schedule');

/**
 * encode 변경
 */
const headers = {
    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*'
  }

const getHtml = async (value) => {
    try {
        return axios.get(`https://finance.naver.com/item/main.nhn?code=${value}`, '', {headers});
    }catch(e){
        console.log(e);
    }
}


/**
 * 해당 주식에 대한 종목 코드
 */
let arr = ['005930', '336260', '096870'];

let stock = () => {
    for(let i=0; i<arr.length; i++){
        getHtml(arr[i]).then(res => {
            const $ = cheerio.load(res.data);
    
            /**
             * children으로 계속 하위로 내려간다.
             * bodyList : 전 날 최종 금액
             * no_up_today : 금일 가격이 오른 금액
             * no_down_today : 금일 가격이 낮춰진 금액
             */
            const $bodyList = $('.no_info > tbody > tr').first().children('td.first').children('em').children('span.blind');
            const $no_up_today = $('.no_today > .no_up > span.blind');
            const $no_down_today = $('.no_today > .no_down > span.blind');
    
            let today = null;
    
            $no_up_today.each((index, item) => {
                today = $(item).text();
            });
            
    
            $no_down_today.each((index, item) => {
                today = $(item).text();
            });
    
            let yeasrter = null; 
            $bodyList.each((index, item) => {
                let data = $(item).text();
                yeasrter = data;
            });
    
            console.log(today);
            console.log(yeasrter);
            console.log(arr[i]);
        }).catch(e => console.log(e));
    }
}


// 이 친구를 변수로 지정하는 이유는 cancle을 시키기 위함이다.
const job = schedule.scheduleJob(' */3 * * * * * ', () => {
    stock();
})
