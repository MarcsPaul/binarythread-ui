import { apiServiceHandler } from "./apiCallHandler";
import { DELETE_URL } from "../../constants/configurations";

export const deleteUrlApi = (params) => {
    let { id } = params;
    let endpoint = `${DELETE_URL}${id}`;
    let methordType = "delete";
    return apiServiceHandler({
        endpoint,
        methordType,
        body: null,
    });
};