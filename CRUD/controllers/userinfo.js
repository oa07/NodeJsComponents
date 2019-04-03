const Userinfo = require('../models/userinfo');

exports.userinfo_create = function (req, res) {
    console.log(req)
    let userinfo = new Userinfo(
        {
            name: req.body.name,
            id: req.body.id,
            age: req.body.age
        }
    );

    userinfo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.userinfo_details = function (req, res) {
    Userinfo.findById(req.params.id, function (err, userinfo) {
        if (err) return next(err);
        res.send(userinfo);
    })
};

exports.userinfo_update = function (req, res) {
    Userinfo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, userinfo) {
        if (err) return next(err);
        res.send('userinfo updated.');
    });
};

exports.userinfo_delete = function (req, res) {
    Userinfo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};