import axios from "axios";
import { API_BASE_URL } from "../../constants/configurations";
export const apiServiceHandler = (params) => {
    let { endpoint, methordType, body } = params;
    return axios[methordType](`${API_BASE_URL}${endpoint}`, body, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            if (res.status === 200) {
                return { status: true, res: res.data };
            } else return { status: false };
        })
        .catch(() => {
            return { status: false };
        });
};