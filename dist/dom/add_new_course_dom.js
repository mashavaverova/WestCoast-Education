var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { convertFormDataToJson } from "../utilities/config.js";
const form = document.querySelector('#courseForm');
const submitBtn = document.querySelector('#addCourse');
const addCourse = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const course = new FormData(form);
    const obj = convertFormDataToJson(course);
    const url = 'http://localhost:3000/courses';
    try {
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        if (response.ok) {
            location.href = './admin.html';
        }
        else {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        console.error('Failed to add course:', error);
    }
});
submitBtn.addEventListener('click', addCourse);
