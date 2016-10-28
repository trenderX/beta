var API_URL = 'http://localhost:3000/api';
// var API_URL = 'https://fathomless-reef-57802.herokuapp.com/v1';
exports.SIGNIN_URL = `${API_URL}/auth/signin`;
exports.SIGNUP_URL = `${API_URL}/auth/signup`;
exports.TODOS_URL = (user_id) => `${API_URL}/users/${user_id}/todos`;
exports.TODO_URL = (user_id, todo_id) => `${API_URL}/users/${user_id}/todos/${todo_id}`;