import { apiServiceHandler } from "./apiCallHandler";
import { SHORTEN_URL } from "../../constants/configurations";

export const shortenUrlApi = (params) => {
    let { expandedUrl } = params;
    let endpoint = SHORTEN_URL;
    let methordType = "post";
    return apiServiceHandler({
        endpoint,
        methordType,
        body: { expandedUrl },
    });
};