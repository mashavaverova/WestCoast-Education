var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state } from '../utilities/config.js';
export function fetchData(endpoint, criteria) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = state.api.baseUrl;
        let url = '';
        if (criteria) {
            url = `${baseUrl}/${endpoint}?&query=${criteria}`;
        }
        else {
            url = `${baseUrl}/${endpoint}`;
        }
        try {
            const response = yield fetch(url);
            if (response.ok) {
                const data = yield response.json();
                return data;
            }
            else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        }
        catch (error) {
            throw new Error(`${error}`);
        }
    });
}
