import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
export const toastNotification = params => {
  let { type, msg } = params;
  return toast[type](msg, {
    position: toast.POSITION.TOP_CENTER
  });
};
