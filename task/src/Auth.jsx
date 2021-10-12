import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// input: props
// output: JSX

// algo
// 1. show Login by default
// 2. after login click - hide Login & show Spinner for 2 s
// 3. after 2 seconds - hide Spinner and show Logout
// 4. after logout click - hide Logout and show login

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }

  loginHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  logoutHandler = () => {
    this.setState({ isProcessing: true });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  render() {
    const { isLoggedIn, isProcessing } = this.state;

    if (isProcessing) {
      return <Spinner />;
    }
    
    return isLoggedIn ? (
      <Logout onLogout={this.loginHandler} />
    ) : (
      <Login onLogin={this.logoutHandler} />
    );

    // if (isLoggedIn) {
    //   return <Logout onLogout={this.loginHandler} />;
    // }
    // return <Login onLogin={this.logoutHandler} />;
  }
}

export default Auth;

// REACT APPROACH

// 0 make a layout ++++
// 1. split on component ++++
// 2. static version in react ++++
// 3. declare state and props ++++
// 4. write logic
