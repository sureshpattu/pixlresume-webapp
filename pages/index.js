import '../scss/index.scss';
import './css/home.scss';
import Header from '../components/header';
import React from 'react';

/**
 * Test sample code
 */
class Home extends React.Component {
  /**
   * returns JSX
   * @return {html}
   */
  render() {
    return (
      <section>
        <Header/>
        <section className="home_pg">
          <div className="main_wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-lg-offset-3">
                  <div className="coming_soon_content_sec text-center">
                    <div className="logo_sec">
                    </div>
                    <h1>
                      Another Awesome Product from
                      <a href="http://www.pixljobs.com" title="Pixljobs Website" target="_blank"> Pixljobs</a>
                      <br/>
                      <br/>
                      Coming Soon!!
                    </h1>
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

export default Home;
