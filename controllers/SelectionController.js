
const SelectionController = function() {
    const main_model = require('../models/MainModel');
    const selection_model = require('../models/SelectionModel');

    const departmentEditFormRender = function(req, res){
        // 부서관리 버튼을 눌렀을 떄 실행되는 함수  
        // 부서 리스트
        // 부서관리 페이지로 이동
        let data = {};
        const getDepartmentList = function(){

            return new Promise(function(resolve){
                main_model.getDepartmentValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.list = rows;
                        resolve();
                    }
                });
            });
        }
        const view = function(){
            data.page_type = 'type';
            res.render('selection', data);
        };

        getDepartmentList().then(function(){
            return view();
        });
    };

    const positionEditFormRender = function(req, res){
        // 직급관리 버튼을 눌렀을 떄 실행되는 함수
        // 직급 리스트
        // 직급관리 페이지로 이동
        let data = {};

        const getPositionList = function(){
            return new Promise(function(resolve){
                main_model.getPositionValue({}, function(err, rows){
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        data.list = rows;
                        resolve();
                    }
                })
            });
        }
        const view = function(){
            data.page_type = 'location';
            res.render('selection', data);
        };
        
        getPositionList().then(function(){
            return view();
        });
    };

    const deleteSelectionData = function(req, res) {
       let data = {};

       console.log(req.body);

       data.page_type = req.params.page_type;
       // 객체의 key를 동적으로 할당
       data[data.page_type + '_idx'] = parseInt(req.body.selected_data);
        
       selection_model.deleteSelectionData(data, function(err, rows) {
            if (err) {
                console.log(err);
                res.json({result: false, msg: 'INTERNAL SERVER_ERROR'});
            } else {
                console.log(rows);
                res.json({result: true});
            }
       });
    
    };

    const createNewSelectionData = function(req, res) {
        let data = {};

        data.page_type = req.params.page_type;

        data[data.page_type + '_name'] = req.body.input_data;
        selection_model.createNewSelectionData(data, function(err, rows) {
            if (err) {
                console.log(err);
                res.json({result: false, msg: 'INTERNAL SERVER_ERROR'});
            } else {
                console.log(rows);
                res.json({result: true});
            }
        });
    }

    return {
        departmentEditFormView: function(req, res) {
            departmentEditFormRender(req, res);
        },
        positionEditFormView: function(req, res) {
            positionEditFormRender(req, res);
        },
        deleteSelectionData: function(req, res) {
            deleteSelectionData(req, res);
        },
        createNewSelectionData: function(req, res) {
            createNewSelectionData(req, res);
        }

    }
}

module.exports = SelectionController();