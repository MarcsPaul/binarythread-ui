import { apiServiceHandler } from "./apiCallHandler";
import { GET_ALL_URLS } from "../../constants/configurations";

export const getAllUrlsApi = (params) => {
  let { body } = params;
  let endpoint = GET_ALL_URLS;
  let methordType = "get";
  return apiServiceHandler({
    endpoint,
    methordType,
    body,
  });
};
