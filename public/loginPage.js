"use strict";

const testUser = [
  { login: "oleg@demo.ru", password: "demo" },
  { login: "ivan@demo.ru", password: "demo" },
  { login: "petr@demo.ru", password: "demo" },
  { login: "galina@demo.ru", password: "demo" },
  { login: "vladimir@demo.ru", password: "demo" },
];

const userForm = new UserForm();

userForm.loginFormCallback = () => {
  ApiConnector.login(userForm.getData(userForm.loginForm), (response) => {
    if (response.success) {
      location.reload();
      return;
    }
    userForm.setLoginErrorMessage(response.data);
  });
};

userForm.registerFormCallback = () => {
  ApiConnector.login(userForm.getData(userForm.loginForm), (response) => {
    if (response.success) {
      location.reload();
      return;
    }
    userForm.setLoginErrorMessage(response.data);
  });
};
