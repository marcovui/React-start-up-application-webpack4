export function myFunction(condition, callback) {
    if (condition) {
        callback();
    }
}

export const Database = {
    save: function (user, callback) {
        console.log(user);
    }
}

export function setupNewUser(info, callback) {
    var user = {
        name: info.name,
        nameLowercase: info.name.toLowerCase()
    };

    try {
        Database.save(user, callback);
    }
    catch (err) {
        callback(err);
    }
}