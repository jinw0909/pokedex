const DetailModel = function() {

    const model = require('./Model.js');

    const get_detail_list_ = function(data, callback) {
        // Model을 통해 sql구문을 전달하고 DB에 명령을 내린다
        model.run('SELECT * FROM pokemon pk \
        JOIN pokemon_type t \
        ON pk.pokemon_type = t.type_idx \
        JOIN pokemon_location l \
        ON pk.pokemon_location = l.location_idx \
        WHERE pk.pokemon_idx = :index', data, callback);
    };
    const delete_detail_list_ = function(data, callback) {
        model.run('DELETE FROM pokemon \
        WHERE pokemon_idx = :index', data, callback);
    }
    const update_detail_list_ = function(data, callback){
        model.run('UPDATE pokemon \
        SET pokemon_name = :pokemon_name, pokemon_type = :pokemon_type, pokemon_location = :pokemon_location, pokemon_memo = :pokemon_memo \
        WHERE pokemon_idx = :index' , data, callback);
    }

    return {
        getDetailList: function(data, callback) {
            get_detail_list_(data, callback);
        },
        deleteDetailList: function(data, callback) {
            delete_detail_list_(data, callback);
        },
        updateDetailList: function(data, callback){
            update_detail_list_(data, callback);
        }
    }
};

module.exports = DetailModel();