"use strict";

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
  ApiConnector.register(userForm.getData(userForm.registerForm), (response) => {
    if (response.success) {
      location.reload();
      return;
    }
    userForm.setRegisterErrorMessage(response.data);
  });
};
