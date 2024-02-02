var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchData } from "../utilities/http.js";
import { convertFormDataToJson } from "../utilities/config.js";
const form = document.querySelector("#updateCourseForm");
const deleteButton = document.querySelector("#delete");
const initPage = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = new URLSearchParams(window.location.search).get("id");
    const course = yield fetchData(`courses/${id}`);
    loadDataToForm(course);
});
const loadDataToForm = (course) => {
    const formElements = form.elements;
    formElements["title"].value = course.title;
    formElements["number"].value = course.number;
    formElements["duration"].value = course.duration;
    formElements["startDate"].value = course.startDate;
    formElements["location"].value = course.location;
    formElements["imageUrl"].value = course.imageUrl;
    formElements["description"].value = course.description;
    formElements["description_long"].value = course.description_long;
};
const updateCourse = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const formData = new FormData(form);
    const obj = convertFormDataToJson(formData);
    const url = `http://localhost:3000/courses/${courseId}`;
    try {
        const response = yield fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        if (response.ok) {
            location.href = './admin.html';
        }
        else {
            throw new Error(`Failed to update course: ${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        console.error('Failed to update course:', error);
    }
});
const deleteCourse = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = `http://localhost:3000/courses/${courseId}`;
    try {
        const response = yield fetch(url, {
            method: 'DELETE'
        });
        if (response.ok) {
            location.href = './admin.html';
        }
        else {
            throw new Error(`Failed to delete course: ${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        console.error('Failed to delete course:', error);
    }
});
const courseId = new URLSearchParams(window.location.search).get("id");
form.addEventListener('submit', updateCourse);
deleteButton.addEventListener('click', deleteCourse);
document.addEventListener('DOMContentLoaded', initPage);
