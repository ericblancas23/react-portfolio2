import React from 'react'
import PropTypes from 'prop-types'

import me from '../images/me.jpeg'
import newpicofme from '../images/newpicofme.png'
import picofme3 from '../images/picofme3.jpg'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img
              style={{
                'border-radius': '50%',
              }}
              src={newpicofme}
              alt="pic of me"
            />
          </span>
          <p>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. All of my work is produced locally
            from Los Angeles, CA. What would you do if you had a software expert
            available at your fingertips?
          </p>

          <strong>
            <a href="https://drive.google.com/file/d/1FAA6kY2HXF5muEeQJWmX7w17rNwwZHwf/view?usp=sharing">
              VIEW MY RESUME HERE
            </a>
          </strong>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <div className="container">
            <div className="row">
              <div class="col-sm-6 col-lg-3">
                <img
                  class="card-img-top"
                  alt="Card header image"
                  src={require('../images/candycrush.png')}
                  style={{ height: 250, width: 250, marginTop: '1.5cm' }}
                />
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 class="card-title">Phaser.io - Candy Crush</h5>
                    <p class="card-text">
                      A game utilizing phaser.io and made with Angular along
                      with typescript
                    </p>
                    <a href="https://github.com/ericblancas23/phaser-candycrush">
                      Github Repo
                    </a>
                    <br />
                    <a href="https://candy-game.herokuapp.com/">
                      play the game here
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-3">
                <img
                  class="card-img-top"
                  alt="Card header image"
                  src={require('../images/lambdashowcase.png')}
                  style={{ height: 250, width: 250, marginTop: '1.5cm' }}
                />
                <div className="card mt-3 mb-3">
                  <div className="card-body">
                    <h5 class="card-title">Lambda Showcase</h5>
                    <p class="card-text">
                      Lambda Showcase is a full-stack web application that was
                      built in React, MongoDB, and Express.
                    </p>
                    <a href="https://github.com/LSPortfolio">Github Repo</a>
                    <br />
                    <a href="https://lambdashowcase.herokuapp.com/">
                      Vist Project
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-3">
                <img
                  class="card-img-top"
                  alt="Card header image"
                  src={require('../images/cliphy.png')}
                  style={{ height: 250, width: 250, marginTop: '1.5cm' }}
                />
                <div className="card mt-3">
                  <div className="card-body">
                    <h5 class="card-title">Cliphy</h5>
                    <p class="card-text">
                      Cliphy demonstrates usage of Cloudinary api to solely use
                      multi-part http.
                    </p>
                    <a href="https://github.com/ericblancas23/movingImages-cliphy">
                      Github Repo
                    </a>
                    <br />
                    <a href="https://movingimages.herokuapp.com/">
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <img
              class="card-img-top"
              alt="Card header image"
              src={require('../images/airbnb.png')}
              style={{ height: 250, width: 250, marginTop: '1.5cm' }}
            />
            <div className="card mt-3">
              <div className="card-body">
                <h5 class="card-title">Airbnb Copy</h5>
                <p class="card-text">
                  Airbnb Copy to demonstrate use of Search Filter component,
                  Masonry Layout, and api-calls
                </p>
                <a href="https://github.com/ericblancas23/airbnb-clone">
                  Github Repo
                </a>
                <br />
                <a href="https://airbnbproject.herokuapp.com/">Visit Project</a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <img
              class="card-img-top"
              alt="Card header image"
              src={require('../images/weather.png')}
              style={{ height: 250, width: 250, marginTop: '1.5cm' }}
            />
            <div className="card mt-3">
              <div className="card-body">
                <h5 class="card-title">Weather</h5>
                <p class="card-text">
                  First Project done in React framework. Applied a Weather Api
                  to filter certain Cities and their current weather conditions
                </p>
                <a href="https://github.com/ericblancas23/weather-application">
                  Github Repo
                </a>
                <br />
                <a href="https://merry-weather.herokuapp.com/">Visit Project</a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <img
              class="card-img-top"
              alt="Card header image"
              src={require('../images/ecommerce.png')}
              style={{ height: 250, width: 250, marginTop: '1.5cm' }}
            />
            <div className="card mt-3">
              <div className="card-body">
                <h5 class="card-title">Ecommerce</h5>
                <p class="card-text">
                  Ecommerce Web Application that shows demonstration of
                  fullstack code using Angular
                </p>
                <a href="https://github.com/ericblancas23/ecommerce-app">
                  Github Repo
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <img
              class="card-img-top"
              alt="Card header image"
              src={require('../images/carpool2.png')}
              style={{ height: 250, width: 250, marginTop: '1.5cm' }}
            />
            <div className="card mt-3">
              <div className="card-body">
                <h5 class="card-title">Carpool</h5>
                <p class="card-text">
                  Capstone Project that delivers a Carpooling and Social Media
                  Experience. App, has taught me both Development skills and
                  Product Management
                </p>
                <a href="https://github.com/ericblancas23/taxi-app">
                  Github Repo
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <img
              class="card-img-top"
              alt="Card header image"
              src={require('../images/uber33.jpg')}
              style={{ height: 250, width: 250, marginTop: '1.5cm' }}
            />
            <div className="card mt-3">
              <div className="card-body">
                <h5 class="card-title">UberUI</h5>
                <p class="card-text">
                  A working and functional UI clone of UberUI{' '}
                </p>
                <a href="https://github.com/ericblancas23/carpooling-UI">
                  Github Repo
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <img
              class="card-img-top"
              alt="Card header image"
              src={require('../images/fakecard.jpg')}
              style={{ height: 250, width: 250, marginTop: '1.5cm' }}
            />
            <div className="card mt-3">
              <div className="card-body">
                <h5 class="card-title">Credit Card Validator</h5>
                <p class="card-text">
                  Credit Card Validation that was built in C# and .net framework
                </p>
                <a href="https://github.com/ericblancas23/Credit-Validate">
                  Github Repo
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <img
              class="card-img-top"
              alt="Card header image"
              src={require('../images/spaceX.png')}
              style={{ height: 250, width: 250, marginTop: '1.5cm' }}
            />
            <div className="card mt-3">
              <div className="card-body">
                <h5 class="card-title">SpaceX Launch Details</h5>
                <p class="card-text">
                  A react project that connects to spaceX api, grabbing latest
                  details on new launches, rockets, etc.
                </p>
                <a href="https://github.com/ericblancas23/spaceX-fiddle">
                  Github Repo
                </a>
                <br />
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <img
              class="card-img-top"
              alt="Card header image"
              src={require('../images/Ray-Tracer.png')}
              style={{ height: 250, width: 250, marginTop: '1.5cm' }}
            />
            <div className="card mt-3">
              <div className="card-body">
                <h5 class="card-title">Ray Tracer</h5>
                <p class="card-text">
                  Utilizing C++, I have made a sample Ray tracer to render out
                  pixels in simulated light
                </p>
                <a href="https://github.com/ericblancas23/Ray_tracer">
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={picofme3} style={{ 'border-radius': '50%' }} alt="" />
          </span>
          <p>
            Born and raised in San Diego, CA. Growing up I always had an
            admiration for computers and technology, Xanga and MySpace had
            become my stepping stone towards web development. I would spend
            countless hours trying to make my profile page look colorful just to
            impress my friends and eventually from such a young age, it became
            one of my most treasured skills. Html/CSS was my first exposure to
            DOM manipulation of rendering colors, and creation of user
            interfaces; thus began my journey of becoming a web developer.
            M.E.R.N Stack is my specialty, which is the acronym for MongoDB,
            Express, React, and Node. Majority of my projects are built with
            React (with ES6 syntax) and Node.JS platform, I also specialize in
            python; writing APIs with Flask.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input
                  href="mailto:ericblancas23@gmail.com"
                  type="submit"
                  value="Send Message"
                  className="special"
                />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/eric-blancas23/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ericblancas23"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
