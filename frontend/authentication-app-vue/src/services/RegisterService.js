import swal from "sweetalert";

import Api from "./api";

export default {
  async registerNewUser(credentials) {
    try {
      const response = await Api().post("/register", credentials);
      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        swal({
          title: "Success!",
          text: "You have successfully registered!",
          icon: "success",
          button: "Ok",
        });
      }
    } catch (error) {
      swal({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
        button: "Ok",
      });
    }
  },
};
