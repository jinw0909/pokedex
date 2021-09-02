const DetailController = function() {
    const detail_model = require('../models/DetailModel');
    const main_model = require('../models/MainModel');

    const detailViewRender = function(req, res) {
        console.log(req.params.index);
        const getData = function() {
            return new Promise(function(resolve) {
                
                // DB에서 데이터 조회하기
                console.log('detail/:index', req.params.index)
                detail_model.getDetailList({index: parseInt(req.params.index)}, function(err, rows) {
                    if(err) {
                        console.log(err);
                        throw err;
                    } else {
                        console.log('detail : ', rows);
                        resolve(rows[0]);
                    }
                });
                
            });
        };
        const renderView = function(elem) {
            return new Promise(function() {
                console.log(elem)
                res.render('detail', {data : elem});
            });
        };
        getData().then(function(elem) {
            return renderView(elem);
        });
        
        
    }
    const deleteUser = function(req, res){
        // 삭제 기능
        // model에 삭제 기능 SQL구문을 가진 함수를 호출
        const deleting = function(){
            detail_model.deleteDetailList({index: parseInt(req.params.index)}, function(err, rows){
                if (err) {
                    console.log(err);
                    // 실패 시 클라이언트에 응답 (res)
                    // res.json(처리 결과 정보를 담고 있는 객체)
                    res.json({result: false, msg: 'INTERNAL SERVER_ERROR'});
                } else {
                    console.log(rows);
                    // 성공 시 클라이언트에 응답 (res)
                    res.json({result: true});
                }
            });
        };
    
        deleting();
    
    };

    const detailEditFormRender = function(req, res){

        console.log('aaaaaaaaaaaaaaa');
    
        // 부서리스트
        // 직급리스트
        // 상세데이터 (index에 해당하는 데이터)
        // edit.ejs 페이지로 이동
        let data = {};
        const getDepartmentList = function(){
            return new Promise(function(resolve){
                main_model.getDepartmentValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.department = rows;
                        resolve();
                    }
                });
            });
        };
        const getPositionList = function(){
            return new Promise(function(resolve){
                main_model.getPositionValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.position = rows;
                        resolve();
                    }
                });
            });
        };
        const getDetailData = function(){
            return new Promise(function(resolve){
                console.log('확인', req.params);
                detail_model.getDetailList({index: parseInt(req.params.index)}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.data = rows[0];
                        resolve();
                    }
                });
            });
        };
        const view = function(){
            // edit.ejs 화면으로 이동
            res.render('edit', data);
        };
        getDepartmentList().then(function(){
            return getPositionList();
        }).then(function(){
            return getDetailData();
        }).then(function(){
            return view();
        });
    };

    const updateUser = function(req, res){
        const updating = function(){

            let data = {};
            data = req.body;
            data.index = req.params.index;

            console.log("업데이트");

            detail_model.updateDetailList(data, function(err, rows){
                if (err) {
                    console.log(err);
                    throw err;
                } else {
                    res.redirect('/detail/' + data.index); // /detail/3
                }
            });
            // detail_model.deleteDetailList({index: parseInt(req.params.index)}, function(err, rows){
            //     if (err) {
            //         console.log(err);
            //         res.json({result: false, msg: 'INTERNAL SERVER_ERROR'});
            //     } else {
            //         console.log(rows);
            //         res.json({result: true});
            //     }
            // });
        }
        updating();
        
    };
    return {
        detailView: function(req, res) {
            detailViewRender(req, res);
        },
        detailDeleteUser: function(req, res) {
            deleteUser(req, res);
        },
        detailEditFormView: function(req, res){
            detailEditFormRender(req, res);
        },
        detailUpdateUser: function(req, res){
            updateUser(req, res);
        }
    }
}

module.exports = DetailController();