import { CourseModel } from "../models/BaseModel.js";
import { fetchData } from "../utilities/http.js";
import { convertFormDataToJson } from "../utilities/config.js";


const form = document.querySelector("#updateCourseForm") as HTMLFormElement;
const deleteButton = document.querySelector("#delete") as HTMLButtonElement;


const initPage = async () => {
    const id = new URLSearchParams(window.location.search).get("id");
    const course = await fetchData<CourseModel>(`courses/${id}`);
    loadDataToForm(course);
}

const loadDataToForm = (course: CourseModel) => {
    const formElements = form.elements as unknown as Record<string, HTMLInputElement>;
    formElements["title"].value = course.title;
    formElements["number"].value = course.number;
    formElements["duration"].value = course.duration;
    formElements["startDate"].value = course.startDate;
    formElements["location"].value = course.location;
    formElements["imageUrl"].value = course.imageUrl;
    formElements["description"].value = course.description;
    formElements["description_long"].value = course.description_long;
};

const updateCourse = async (e: Event) => {
    e.preventDefault();

    const formData = new FormData(form);
    const obj = convertFormDataToJson(formData);

    const url = `http://localhost:3000/courses/${courseId}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        if (response.ok) {
            location.href = './admin.html';
        } else {
            throw new Error(`Failed to update course: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Failed to update course:', error);
    }
};

const deleteCourse = async () => {
    const url = `http://localhost:3000/courses/${courseId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (response.ok) {
            location.href = './admin.html';
        } else {
            throw new Error(`Failed to delete course: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Failed to delete course:', error);
    }
};

const courseId = new URLSearchParams(window.location.search).get("id");
form.addEventListener('submit', updateCourse);
deleteButton.addEventListener('click', deleteCourse);

document.addEventListener('DOMContentLoaded', initPage);


