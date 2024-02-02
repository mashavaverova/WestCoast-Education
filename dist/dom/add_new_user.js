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
const form = document.querySelector('#userForm');
const submitBtn = document.querySelector('#addUser');
const createUser = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const user = new FormData(form);
    const userDataJson = convertFormDataToJson(user);
    try {
        const url = 'http://localhost:3000/users';
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDataJson)
        });
        if (response.ok) {
            location.href = './courses.html';
        }
        else {
            throw new Error(`Failed to create user: ${response.status} ${response.statusText}`);
        }
    }
    catch (error) {
        console.error('Error creating user:', error);
    }
});
form.addEventListener('submit', createUser);
submitBtn.addEventListener('click', createUser);
