exports.list = function (req, res) {
    res.json({
        "list" : "Successfully Inside User List"
    });

/* 
    var upload = multer({
    dest: DIR,
    rename: function (fieldname, filename) {
        return filename + Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
    }
    });
    
    app.get('/api', function (req, res) {
    res.end('file catcher example');
    });
    
    app.post('/api', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
        return res.end(err.toString());
        }
    
        res.end('File is uploaded');
    });
    });
*/
}