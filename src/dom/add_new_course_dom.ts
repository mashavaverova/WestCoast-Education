import { convertFormDataToJson } from "../utilities/config.js";
import { fetchData } from "../utilities/http.js";


const form = document.querySelector<HTMLFormElement>('#courseForm');
const submitBtn = document.querySelector<HTMLButtonElement>('#addCourse');

const addCourse = async (e: Event) => {
    e.preventDefault();

    const course = new FormData(form!);
    const obj = convertFormDataToJson(course);

    const url = 'http://localhost:3000/courses';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        if (response.ok) {
            location.href = './admin.html';
        } else {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Failed to add course:', error);
    }
};

submitBtn!.addEventListener('click', addCourse);