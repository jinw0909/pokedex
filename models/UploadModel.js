const UploadModel = function() {

    const model = require('./Model.js');

    const update_detail_image_ = function(data, callback){
        model.run('UPDATE pokemon \
        SET pokemon_image = :pokemon_image \
        WHERE pokemon_idx = :index' , data, callback);

        
    }

    return {
        updateDetailImage: function(data, callback){
            update_detail_image_(data, callback);
        }
    }
};

module.exports = UploadModel();