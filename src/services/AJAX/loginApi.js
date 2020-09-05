import { apiServiceHandler } from "./apiCallHandler";
import { LOGIN_API_URL } from "../../constants/configurations";

export const loginApi = (params) => {
  let { body } = params;
  let endpoint = LOGIN_API_URL;
  let methordType = "post";
  return apiServiceHandler({
    endpoint,
    methordType,
    body,
  });
};
