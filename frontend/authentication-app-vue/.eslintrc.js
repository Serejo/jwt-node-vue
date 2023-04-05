module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    quotes: ["error", "double"],
    "import/no-unresolved": "off",
    "vue/no-unused-components": "off",
    "implicit-arrow-linebreak": "off",
    "no-unresolved": "off",
    "no-empty-function": "off",
    "no-unused-vars": "off",
    "no-alert": "off",
    "prefer-template": "off",
    "no-unused-expressions": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vuejs-accessibility/form-control-has-label": [
      "off",
      {
        labelComponents: ["CustomLabel"],
        controlComponents: ["CustomInput"],
      },
    ],
  },
};
