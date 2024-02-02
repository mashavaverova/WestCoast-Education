import { convertFormDataToJson } from "../utilities/config.js";
import { fetchData } from "../utilities/http.js";


const form = document.querySelector<HTMLFormElement>('#userForm')!;
const submitBtn = document.querySelector<HTMLButtonElement>('#addUser')!;

const createUser = async (e: Event) => {
    e.preventDefault(); 
    const user = new FormData(form);
    const userDataJson = convertFormDataToJson(user);

    try {
        const url = 'http://localhost:3000/users';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDataJson)
        });

        if (response.ok) {
            location.href = './courses.html';
        } else {
            throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error creating user:', error);
    }
};

form.addEventListener('submit', createUser);
submitBtn.addEventListener('click', createUser);