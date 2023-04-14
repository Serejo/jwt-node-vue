import swal from "sweetalert";
import { required } from "vuelidate/lib/validators";
import LoginService from "../../../services/LoginService";

export default {
  name: "LoginComponent",
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitting: false,
    };
  },
  validations: {
    loginForm: {
      email: { required },
      password: { required },
    },
  },
  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitting = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: "Error!",
            text: "Please fill in all fields!",
            icon: "error",
            button: "Ok",
          });
          return;
        }
        await LoginService.loginUser(this.loginForm);
        this.$router.push("/home");
      } catch (error) {
        swal({
          title: "Error!",
          text: "Error logging in user!",
          icon: "error",
          button: "Ok",
        });
      }
    },
  },
};
