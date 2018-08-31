import $ from "jquery";

export function saveUser(user, callback) {
    $.post('/users', {
      first: user.firstname,
      last: user.lastname
    }, callback);
  }