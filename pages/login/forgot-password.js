import '../../scss/index.scss';
import './css/login.scss';
import Link from 'next/link';
import Header from '../../components/header';

function ForgotPassword() {
  return (
      <section className="login_pg signup_pg">
        <Header/>
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
                              <div className="title">Forgot</div>
                              <div className="sub_title">Password?</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted">
                        Enter your email address and your password will be reset and emailed to you.
                      </p>
                      <form id="forgotPasswordForm">
                        <div className="form-group pixl_form_group">
                          <label className="control-label">Email</label>
                          <div className="box_sec">
                            <input type="email" className="form-control required js_email"
                                   placeholder="Your email address" autoComplete="off"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-7">
                              <button type="submit" className="btn btn_big btn_blue">SUBMIT</button>
                            </div>
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

export default ForgotPassword;
