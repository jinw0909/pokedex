const MainModel = function() {

    const model = require('./Model.js');

    const get_list_ = function(data, callback) {
        // Model을 통해 sql구문을 전달하고 DB에 명령을 내린다
        model.run('SELECT * FROM `pokemon` pk \
        JOIN `pokemon_type` t \
        ON pk.pokemon_type = t.type_idx \
        JOIN `pokemon_location` l \
        ON pk.pokemon_location = l.location_idx;', data, callback);
    };

    const get_department_value_ = function(data, callback) {
        model.run('SELECT * FROM `pokemon_type`', data, callback);
    };
    const get_position_value_ = function(data, callback) {
        model.run('SELECT * FROM `pokemon_location`', data, callback);
    };
    const create_new_user_ = function(data, callback) {
        console.log(data);
        model.run('INSERT `pokemon` (pokemon_name, pokemon_type, pokemon_location, pokemon_memo) VALUES (:pokemon_name, :pokemon_type, :pokemon_location, :pokemon_memo)', data, callback);
    };


    return {
        getList: function(data, callback) {
            get_list_(data, callback);
        },
        getDepartmentValue: function(data, callback) {
            get_department_value_(data, callback);
        },
        getPositionValue: function(data, callback) {
            get_position_value_(data, callback);
        },
        createNewUser: function(data, callback) {
            create_new_user_(data, callback);
        },
    }
};

module.exports = MainModel();