import {CourseModel, UserModel} from "./BaseModel.js";

export interface ListModel {
    page: number;
    totalPages: number;
    totalResults: number;
    data:[
        CourseModel | UserModel
    ];
}