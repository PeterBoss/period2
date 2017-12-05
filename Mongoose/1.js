require('./connection.js');

const User = require('./models/user');

let chris = new User({
    name: 'Chris',
    username: 'testguy',
    password: 'pw'
});


chris.dudify(function (err, name) {
    if (err) throw err;

    console.log('Your new name is ' + name);
});

chris.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully!');
});
