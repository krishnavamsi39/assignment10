import { observable, action, computed } from "mobx";
import * as Cookies from "js-cookie";
class AuthenticationStore {
  @observable status = true;
  @observable isLoggedIn = false;
  loginDetails(details) {
    const options = {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("https://user-shopping-cart.getsandbox.com/login/v1/", options)
      .then(res => {
        if (res.ok) {
          this.isLoggedIn = true;
          alert("Login successful");
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText
          });
        }
      })
      .then(res => {
        console.log(res);
        Cookies.set(res.accessToken);
      })
      .catch(err => {
        this.isLoggedIn = false;
        console.log("Error, with message:", err.statusText);
        alert("Login failed");
      });
  }
  sendDetails(details) {
    const options = {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("https://user-shopping-cart.getsandbox.com/sign_up/v1/", options)
      .then(res => {
        if (res.ok) {
          alert("registration successful");
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText
          });
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Error, with message:", err.statusText);
        alert("Registration failed");
      });
  }
}
export default AuthenticationStore;
