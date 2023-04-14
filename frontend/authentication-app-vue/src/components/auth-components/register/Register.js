import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";
import RegisterService from "../../../services/RegisterService";

export default {
  name: "RegisterComponent",
  data() {
    return {
      registerForm: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      isSubmitting: false,
    };
  },
  validations: {
    registerForm: {
      name: { required },
      email: { required },
      password: { required },
      password_confirmation: { required },
    },
  },

  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
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
        await RegisterService.registerNewUser(this.registerForm);
        this.$router.push("/");
      } catch (error) {
        swal({
          title: "Error!",
          text: "Error registering user!",
          icon: "error",
          button: "Ok",
        });
      }
    },
  },
};
