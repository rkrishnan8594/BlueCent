import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import * as actions from '../../actions/auth';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    if (['/faq', '/dashboard', '/faq/'].indexOf(this.props.location.pathname) >= 0) {
      this.state = { color: 'dark' };
    } else {
      this.state = { color: 'light' };
    }
  }

  componentWillReceiveProps() {
    let url = window.location.href;
    let currentRoute = url.substr(url.lastIndexOf('/') + 1);
    if (['faq', 'dashboard'].indexOf(currentRoute) < 0) {
      this.setState({ color: 'light' });
    } else {
      this.setState({ color: 'dark' });
    }
  }

  handleClick() {
    this.props.signOut();
  }

  render() {
    return (
      <header className={this.state.color}>
        <div className="header-content">
          <svg className="logo-svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path className="path" d="M12 9c5.345 0 10-2.015 10-4.5s-4.655-4.5-10-4.5c-5.344 0-10 2.015-10 4.5s4.656 4.5 10 4.5zm.187-4.019c-.598-.18-2.428-.332-2.428-1.35 0-.568.668-1.074 1.917-1.187v-.444h.642v.422c.468.011.989.062 1.569.18l-.234.685c-.441-.101-.933-.199-1.416-.199l-.145.002c-.962.04-1.041.574-.373.799 1.092.337 2.532.585 2.532 1.479 0 .714-.867 1.097-1.934 1.192v.44h-.642v-.416c-.659-.006-1.353-.113-1.925-.304l.295-.686c.488.125 1.102.253 1.655.253.145 0 .284-.009.417-.028.737-.106.884-.602.07-.838zm-.187 16.019c3.783 0 7.708-.969 10-2.803v1.303c0 2.485-4.655 4.5-10 4.5-5.344 0-10-2.015-10-4.5v-1.304c2.292 1.835 6.217 2.804 10 2.804zm0-10c3.783 0 7.708-.969 10-2.803v1.303c0 2.485-4.655 4.5-10 4.5-5.344 0-10-2.015-10-4.5v-1.303c2.292 1.834 6.217 2.803 10 2.803zm0 5c3.783 0 7.708-.969 10-2.803v1.303c0 2.485-4.655 4.5-10 4.5-5.344 0-10-2.015-10-4.5v-1.304c2.292 1.835 6.217 2.804 10 2.804z"/></svg>
          <h1 className="logo">
            <Link to={this.props.authenticated ? '/dashboard' : '/'}>bluecent</Link>
          </h1>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <a href="https://github.com/rkrishnan8594/bluecent">Open Source</a>
            </li>
            {this.props.authenticated ?
              <li className="nav-item login" onClick={this.handleClick}>
                <Link to="#" className="signout-link">Sign Out</Link>
              </li>
            :
              <li className="login">
                <Link to="/login" className="login-link">Login</Link>
              </li>
            }
          </ul>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(withRouter(Header));
