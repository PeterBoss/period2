require('./connection.js');

const User = require('./models/user');

User.find({}, function (err, users) {
    if (err) throw err;

    console.log(users);
});

User.find({ username: 'testguy' }, function (err, user) {
    if (err) throw err;

    console.log(user);
});

User.findById('5a26be291fd41f0f5cfd0d5c', function (err, user) {
    if (err) throw err;

    console.log(user);
});