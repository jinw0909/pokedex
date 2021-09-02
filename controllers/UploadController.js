const UploadController = function() {

    const upload_model = require('../models/UploadModel');

    uploadImage = function(req, res) {
        const uploading = function() {
            let data = {};
            // data = req.body;
            data.index = req.params.index;
            data.pokemon_image = `/uploads/${req.file.filename}`;

            console.log('이미지 추가');
            console.log('imageData', data);

            upload_model.updateDetailImage(data, function(err, rows){
                if (err) {
                    console.log(err);
                    throw err;
                } else {
                    res.redirect('/detail/' + data.index); // /detail/3
                }
            });
        }
        uploading();
    }

    return {
        uploadImage : function(req, res) {
            uploadImage(req, res);
        }
    }
}

module.exports = UploadController();