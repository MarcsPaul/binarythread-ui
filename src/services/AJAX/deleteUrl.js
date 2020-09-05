import { apiServiceHandler } from "./apiCallHandler";
import { SHORTEN_URL } from "../../constants/configurations";

export const deleteUrlApi = (params) => {
  let { id } = params;
  let endpoint = `${SHORTEN_URL}/${id}`;
  let methordType = "delete";
  return apiServiceHandler({
    endpoint,
    methordType,
    body: null,
  });
};
