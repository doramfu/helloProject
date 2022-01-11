function makePage(aryData) {
    //[{id:??, first_name:??, last_name:??, email:??}]
    // -> table 형식.
    //table > thead,tbody > tr > th,td

    let tbl = document.createElement("table")
    tbl.setAttribute("border", "1")

    let thd = document.createElement("thead")
    let tr = document.createElement("tr")
    thd.appendChild(tr)

    titles = ['id', 'first_name', 'last_name', 'email', 'gender']
    titles.forEach(function (title) {
        let th = document.createElement("th")
        let text = document.createTextNode(title)
        th.appendChild(text)
        tr.appendChild(th)
    })

    let tbd = document.createElement("tbody")

    aryData.forEach(function (item) {
        let tr = document.createElement("tr")
        for (let field in item) {
            let td = document.createElement("td")
            let text = document.createTextNode()
            td.appendChild(text)
            tr.appendChild(td)
        }
        tbd.appendChild(tr)
    })
    tbl.appendChild(tbd)
}

//--------------------------------------------------------------------------------

const fields = ['id', 'centerName', 'address', 'phoneNumber', 'sido', 'sigungu', 'lat', 'lng', 'map']

function showCenterList(data) {
    // 전체카운트 : data.currentCount: 284
    // 현재페이지 : data.page: 1
    // 전체데이터 : data.data : 284건의 접종센터 정보

    // table 요소가 있으면 삭제.
    if (document.getElementById('tbl')) {
        document.getElementById('tbl').remove();
    }

    let table = document.createElement('table')
    table.setAttribute('border', '1')
    table.setAttribute('id', 'tbl')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')

    // table의 하위요소로 thead, tbody 추가
    table.append(thead, tbody);

    //thead작성
    let tr = document.createElement('tr');
    fields.forEach(function (field) {
        let td = document.createElement('th')
        let text = document.createTextNode(field.toUpperCase())
        td.append(text)
        tr.append(td)
    });
    thead.append(tr);

    //tbody 작성.
    data.forEach(function (item) {
        let tr = document.createElement('tr')
        fields.forEach(function (field) {
            //map => link 생성.
            if (field == 'map') {
                let linkTag = document.createElement('a');
                linkTag.setAttribute('href', `daum.html?lat=${item.lat}&lng=${item.lng}&facility=${item.facility}`);
                linkTag.setAttribute('target', '_blank')
                linkTag.innerText = item.centerName;

                let td = document.createElement('td')
                td.appendChild(linkTag);
                tr.append(td);
            } else {
                let td = document.createElement('td')
                let text = document.createTextNode(item[field])
                td.append(text)
                tr.append(td)
            }


        });
        tbody.append(tr);
    });
    document.getElementById('show').append(table);
}
//시도별로 센터정보 보여주기
function showCenterListBysido(data) {
    // data.totalCount, data.page, data.data
    let centers = data.data;
    // 시도 = > 정보생성
    let filteredCenter = []; // 시도이름,,중복된거는 제거
    centers.forEach(function (item) {
        // filteredCenter 값중에서 item.sido 같은 값이 없으면 추가.
        if (filteredCenter.indexOf(item.sido) == -1) {
            filteredCenter.push(item.sido);
        }

    });
    console.log(filteredCenter);

    //버튼생성
    let show = document.getElementById('show');
    filteredCenter.forEach(function (centerName) {
        let btn = document.createElement('button');
        btn.innerText = centerName;
        btn.addEventListener('click', showSidoList);
        show.appendChild(btn);
    });

    function showSidoList() {
        // ex)서울특별시 => 서울특별시 소속의 센터출력
        console.log(this.innerText);
        let searchCenterName = this.innerText;

        let filterAry = centers.filter(function (item) {
            return item.sido == searchCenterName;
        });
        // filterAry.length => 배열크기..
        // paging페이지 수를 계산.
        let totalCnt = filterAry.length; //43 / 10 => 4.3
        let totalPage = Math.ceil(totalCnt / 10);

        //a태그 생성하는 부분(추가)
        let paging = document.getElementById('page');
        // 새로우 ㄴ시군구으 ㅣ정보를 보여주기 전에 이전 페이지 정보를 초기화
        let children = paging.childNodes;
        let lnth = children.length;
        for (let i = 0; i < lnth; i++) {
            paging.removeChild(children[0]);
        }

        for (let i = 1; i <= totalPage; i++) {
            let aTag = document.createElement('a');
            aTag.innerText = i;
            aTag.setAttribute('href', '#');
            aTag.addEventListener('click', pagingList);
            paging.appendChild(aTag);
        }



        console.log(filterAry);
        //filterAry = [{},{],{},{}];

        pagingList();

        function pagingList() {
            //리스트 a에 있는 class 를 초기화.
            let allA = document.querySelectorAll('#page>a');
            for (let a of allA) {
                a.setAttribute('class', '');
            }
            // <a>,<div> => 1, window nodeType
            if (this.nodeType == 1) {
                this.setAttribute('class', 'active');
            }
            let page = this.innerText;
            if (page == null || page == '') {
                page = '1';
            }
            page = parseInt(page);
            pagingAry = filterAry.filter(function (item, ind) {
                let startCnt = (page - 1) * 10; //0
                let endCnt = (page * 10); //10
                return startCnt <= ind && ind < endCnt; //0~9
            });
            showCenterList(pagingAry);
        }



        // showCenterList(filterAry); //43개 호출. 10개식 구분해서 자르기
    }


    function showSidoList2() {
        // ex)서울특별시 => 서울특별시 소속의 센터출력
        let searchCenterName = document.getElementById('searchCenter').value;

        console.log(searchCenterName);
        let filterAry = centers.filter(function (item) {
            return item.sido == searchCenterName;
        });
        // filterAry.length => 배열크기..
        // paging페이지 수를 계산.
        // 
        let totalCnt = filterAry.length; //43 / 10 => 4.3
        let totalPage = Math.ceil(totalCnt / 10);
        let paging = document.getElementById('page');
        // 새로우 ㄴ시군구으 ㅣ정보를 보여주기 전에 이전 페이지 정보를 초기화
        let children = paging.childNodes;
        let lnth = children.length;
        for (let i = 0; i < lnth; i++) {
            paging.removeChild(children[0]);
        }
        for (let i = 1; i <= totalPage; i++) {
            let aTag = document.createElement('a');
            aTag.innerText = i;
            aTag.setAttribute('href', '#');
            aTag.addEventListener('click', pagingList);
            paging.appendChild(aTag);
        }


        console.log(filterAry);
        //filterAry = [{},{],{},{}];
        pagingList();

        function pagingList() {
            //리스트 a에 있는 class 를 초기화.
            let allA = document.querySelectorAll('#page>a');
            for (let a of allA) {
                a.setAttribute('class', '');
            }
            // <a>,<div> => 1, window nodeType
            if (this.nodeType == 1) {
                this.setAttribute('class', 'active');
            }
            let page = this.innerText;
            if (page == null || page == '') {
                page = '1';
            }
            page = parseInt(page);
            pagingAry = filterAry.filter(function (item, ind) {
                let startCnt = (page - 1) * 5; //0
                let endCnt = (page * 5); //10
                return startCnt <= ind && ind < endCnt; //0~9
            });
            showCenterList(pagingAry);
        }

        // showCenterList(filterAry); //43개 호출. 10개식 구분해서 자르기
    }

    // 서울특별시 클릭.
    let firstBtn = document.querySelector(('#show>button:nth-child(1)'));
    firstBtn.click(); //클릭이벤트 호출.

    //사용자입력값을 읽고 =>
    let searchText = document.getElementById('searchCenter').value;
    // 버튼 => 이벤트등록
    let searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', showSidoList2);


    //end of showCenterListBySido();
}

// Asynchotonous Javascript And Xml (ajax)
let url =
    "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&returnType=JSON&serviceKey=hulZZcrnTbefVe2Fox4DMeP8bXd5fAPheE5zSPOMItxfxucXG1U%2BIaJ%2FeHBDoYyWl1euTKZFPDZEuq2bICHcYw%3D%3D"
let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function () {
    if (xhtp.readyState == 4 && xhtp.status == 200) {
        console.log('readyState: ' + xhtp.readyState);
        console.log('status: ' + xhtp.status);

        let data = JSON.parse(xhtp.responseText); //json을 자바스크립트형식으로 변환
        console.log(data); // {currentCount: 284, data: [{}{}{}], totalCount: 284}

        //makePage(data);
        //showCenterList(data.data); //전체 센터 보여주기 . 

        showCenterListBysido(data); //시도별로 페이지 보여지기.
    }
}
xhtp.open('get', url);
xhtp.send();