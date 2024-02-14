var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function login(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const usernameInput = document.querySelector('#userName');
        const passwordInput = document.querySelector('#password');
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }
        console.log(username, password);
        try {
            console.log('Fetching data...');
            fetch('http://localhost:3000/users')
                .then((response) => response.json())
                .then((users) => {
                console.log('Users from db.json:', users);
                const user = users.find((user) => user.userName === username && user.password === password);
                if (user) {
                    alert('Login successful!');
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    setTimeout(() => {
                        localStorage.removeItem('currentUser');
                        alert('User session expired. Please login again.');
                    }, 10 * 60 * 1000);
                    window.location.href = 'courses.html';
                }
                else {
                    alert('Invalid username or password.');
                }
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
document.addEventListener('DOMContentLoaded', login);
(_a = document.querySelector('#userLogin')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', login);
export {};
