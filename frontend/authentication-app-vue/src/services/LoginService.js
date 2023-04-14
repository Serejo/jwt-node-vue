import swal from "sweetalert";

import Api from "./api";

export default {
  async loginUser(credentials) {
    try {
      const response = await Api().post("/login", credentials);
      const { token } = response.data;
      localStorage.setItem("token", token);
      if (token) {
        swal({
          title: "Success!",
          text: "You have successfully logged in!",
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
      this.$route.push("/");
    }
  },
};
