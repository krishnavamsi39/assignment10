import { observable, action, computed } from "mobx";
import * as Cookies from "js-cookie";
class AuthenticationStore {
  @observable authState = "";
  isLoggedIn = false;
  @observable isLoading = false;
  loginDetails(details, DisplayHomePage) {
    this.isLoading = true;
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
        this.isLoggedIn = true;
        Cookies.set("login", res.accessToken);
        this.isLoading = false;
        this.authState = "success";
        DisplayHomePage();
      })
      .catch(err => {
        this.isLoggedIn = false;
        this.isLoading = false;
        this.authState = err.statusText;
        console.log("Error, with message:", err.statusText);
      });
  }
  sendDetails(details) {
    this.isLoading = true;

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
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText
          });
        }
      })
      .then(res => {
        this.isLoading = false;
        this.authState = "success";

        console.log(this.isLoading);
        console.log(res);
      })
      .catch(err => {
        this.isLoading = false;
        this.authState = err.statusText;

        console.log("Error, with message:", err.statusText);
      });
  }
}
export default AuthenticationStore;
