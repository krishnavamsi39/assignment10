import { observable, action, computed } from "mobx";
import * as Cookies from "js-cookie";
class AuthenticationStore {
  @observable authState = "";
  isLoggedIn = false;
  @observable isLoading = false;
  fetchAuth(endpoint, details) {
    this.isLoading = true;
    const options = {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json"
      }
    };
    return fetch(endpoint, options);
  }
  loginDetails(details, DisplayHomePage) {
    this.fetchAuth(
      "https://user-shopping-cart.getsandbox.com/login/v1/",
      details
    )
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
      });
  }
  setAuthState() {
    this.authState = "";
  }
  sendDetails(details) {
    this.fetchAuth(
      "https://user-shopping-cart.getsandbox.com/sign_up/v1/",
      details
    )
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
      })
      .catch(err => {
        this.isLoading = false;
        this.authState = err.statusText;
      });
  }
}
export default AuthenticationStore;
