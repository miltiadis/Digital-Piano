module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-sass-guidelines",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-scss", "stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
  },
};
