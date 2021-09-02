const SelectionModel = function() {

    const model = require('./Model.js');

    const delete_selection_data_ = function(data, callback) {
        let table = 'pokemon_' + data.page_type;
        let col = data.page_type + '_idx';
        let val = ":" + col;

        console.log(data);
        // console.log(table);
        // console.log(col);

        model.run('DELETE FROM ' + table + ' WHERE ' + col + '=' + val, data, callback);
    }
    const create_new_selection_data_ = function(data, callback) {

        // insert into hr_position (poisition_name) VALUES ("새로 입력한 부서명");
        // insert into hr_department (department_name) VALUES ("회계");
        let table = 'pokemon_' + data.page_type;
        let col = data.page_type + '_name';
        let val = ':' + col;
        model.run('INSERT INTO ' + table + '(' + col + ') VALUES (' + val + ')', data, callback);
    }

    return {
        deleteSelectionData: function(data, callback) {
            delete_selection_data_(data, callback);
        },
        createNewSelectionData: function(data, callback) {
            create_new_selection_data_(data, callback);
        }
    }
}

module.exports = SelectionModel();