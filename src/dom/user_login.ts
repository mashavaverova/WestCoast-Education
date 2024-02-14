import { UserModel } from "../models/BaseModel.js";
import { fetchData } from "../utilities/http.js";


async function login(event: Event) {
    event.preventDefault();

    const usernameInput = document.querySelector('#userName') as HTMLInputElement;
    const passwordInput = document.querySelector('#password') as HTMLInputElement;
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

        const user = users.find(
        (user: UserModel) => user.userName === username && user.password === password );

        if (user) {
            alert('Login successful!');
            localStorage.setItem('currentUser', JSON.stringify(user));
            setTimeout(() => {
                localStorage.removeItem('currentUser');
                alert('User session expired. Please login again.');
            }, 10 * 60 * 1000);
            window.location.href = 'courses.html';

        } else {
            alert('Invalid username or password.');
        }
        });

    } catch (error) {
        console.error('Error:', error);
    }

}

document.addEventListener('DOMContentLoaded', login);
document.querySelector('#userLogin')?.addEventListener('submit', login)