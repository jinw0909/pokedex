const MainController = function () {

    //호출에 먖는 기능을 관리하는 함수
    // 모뎀을 연결하는 파트
    const main_model = require('../models/MainModel');

    const mainViewRender = function(req, res) {
        // 모델 연결
        // console.log("모델에서 받은 리스트 데이터", test_model.testReturnArray());
        // const data = test_model.testReturnArray();
        // res.render('home', {list : data});
        
        let data = {};
        // 포켓몬스터 타입 리스트 불러오기
        const getDepartmentList = function() {
            return new Promise(function(resolve){
                main_model.getDepartmentValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.department = rows;
                        console.log(rows);
                        resolve();
                    }
                });
            });
        }

        // 발견 지역 리스트 불러오기
        const getPositionList = function() {
            return new Promise(function(resolve){
                main_model.getPositionValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.position = rows;
                        console.log(rows);
                        resolve();
                    }
                });
            });
        }


        // 모델을 통해 데이터베이스에 저장된 리스트를 가져온다
        const getList = function() {
            return new Promise(function(resolve){
                //MainModel의 getList를 호출
                main_model.getList({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        console.log(rows);
                        data.list = rows;
                        resolve();
                    }
                });
            });
        };
        // 화면페이지로 데이터베이스에서 꺼내온 데이터를 보낸다
        const view = function() {
            res.render('home', data);
        }; 
        
        getDepartmentList()
        .then(function(){
            return getPositionList();
        }).then(function(){
            return getList();
        }).then(function(){
            return view();
        });

    };

    // 자바스크립트 promise
    // 함수 실행 흐름
    // 비동기
    // 특정 함수의 실행이 끝난 '후'에 지정한 다음 함수를 실행
    const createNewUser = function(req, res) {
        console.log("client로부터 넘겨받은 데이터", req.body)
        main_model.createNewUser(req.body, function(err, rows){
            if (err) {
                console.log(err);
                throw err;
            } else {
                res.redirect('/main');
            }
        });
    }

    return {
        mainView: function (req, res) {
            mainViewRender(req, res);
        },
        createNewUser: function(req, res) {
            createNewUser(req, res);
        }
    };
};

module.exports = MainController();