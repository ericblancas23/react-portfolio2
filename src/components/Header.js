import React from 'react'
import PropTypes from 'prop-types'
import me from '../images/me.jpeg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-terminal" />
    </div>
    <article>
      <div className="content">
        <div className="inner">
          <img src={me} style={{ 'border-radius': '50%' }} />
          <h1>Eric Blancas</h1>
          <p>My Personal Portfolio</p>
          <p>Not Your Average Software Engineer</p>
          <p>
            <strong>
              <a href="https://drive.google.com/file/d/1RaRA20tU7lv-sYvD44dJ4l7JWIi4pD8r/view?usp=sharing">
                VIEW MY RESUME HERE
              </a>
            </strong>
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('work')
              }}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </article>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
