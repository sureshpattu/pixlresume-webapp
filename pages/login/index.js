import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../../components/header';
import Input from '../../components/form/input';
import PropTypes from 'prop-types';
import LoginActions from '../../redux/actions/loginActions';
import {connect} from 'react-redux';
import config from '../../config/config';
import '../../scss/index.scss';
import './css/login.scss';

/**
 * Login - helps user to login into app resume portal
 */
class Login extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * handleInputChange
   * @param {event} event
   */
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  /**
   * login form submit
   * @param {event} event
   * @return {boolean}
   */
  handleSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    const {submitLogin} = this.props;
    if (!email || !password) {
      alert('please enter your details');
      return false;
    }

    submitLogin({
      email: this.state.email,
      password: this.state.password,
    });
  }

  /**
   * returns JSX
   * @return {html}
   */
  render() {
    const {login} = this.props;
    let isError = false;
    let errorHtml;
    if (login) {
      if (login.user && login.user.data && login.user.data.token) {
        isError = false;
        window.location.href = config.loginRedirectUrl;
      }
      if (login.user && login.user.error) {
        isError = true;
      }
    }
    if (isError) {
      errorHtml = (
        <div className={`col-md-12`}>
          <br/>
          <div className="alert alert-danger">
            {login.user.message}
          </div>
        </div>
      );
    }
    return (
      <section className="login_pg signup_pg">
        <Head>
          <title>PixlResume - Login</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Header isLoggedIn={true}/>
        <section className="common_main_sec">
          <div className="cont_sec">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="login_form_sec">
                    <div className="login-sec-wrap">
                      <div className="row">
                        <div className="col-xs-4 col-sm-6 col-md-6">
                          <div className="form-group pixl_form_group">
                            <div className="signup_title_wrap">
                              <div className="title">Login</div>
                              <div className="sub_title">Welcome Back!</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form className="" id="jsApplicantLoginForm" onSubmit={this.handleSubmit}>
                        <Input
                          type="text"
                          title="Email"
                          extraClass="form-control"
                          themeClass="pixl_form_group"
                          placeholder="Your email address"
                          value={this.state.email}
                          name="email"
                          onChange={this.handleInputChange}
                        />
                        <Input
                          type="text"
                          title="Password"
                          extraClass="form-control"
                          themeClass="pixl_form_group"
                          placeholder="Enter your password"
                          value={this.state.password}
                          name="password"
                          onChange={this.handleInputChange}
                        />
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <button type="submit" className="btn btn_big btn_blue">LOGIN</button>
                            </div>
                            <div className="col-md-6 hide">
                              <Link href="/login/forgot-password">
                                <a className="cta_link">forgot password</a>
                              </Link>
                            </div>
                            {errorHtml}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func,
  login: PropTypes.object,
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (payload) => dispatch(LoginActions.submitLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

