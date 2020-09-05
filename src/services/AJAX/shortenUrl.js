import { apiServiceHandler } from "./apiCallHandler";
import { SHORTEN_URL } from "../../constants/configurations";

export const shortenUrlApi = (params) => {
  let { body } = params;
  let endpoint = SHORTEN_URL;
  let methordType = "post";
  return apiServiceHandler({
    endpoint,
    methordType,
    body,
  });
};
