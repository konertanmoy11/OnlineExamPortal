import React, { Component } from "react";
import AuthService from '../utils/AuthService';
export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: ""
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
      localStorage.clear();
  }

  login = (e) => {
      e.preventDefault();
      const credentials = { email: this.state.email, password: this.state.password};
      AuthService.login(credentials).then(res => {
          if(res.status === 200) {
              console.log(res)
              localStorage.setItem("token", res.data.jwt);
              this.props.history.push("/");
          }
      })
  }
  
  onChange = (e) => {
      this.setState({ [e.target.name] : e.target.value });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      className="form-control"
                      placeholder="Email address"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Email addresss</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      name="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={this.login}
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
