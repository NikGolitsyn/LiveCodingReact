import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import User from './User';

const Users = props => {
  const path = props.match.url;

  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${path}/Github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${path}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}`}>
          <span>Select a user please</span>
        </Route>
        <Route path={`${path}/:userId`} component={User} />
      </Switch>
    </div>
  );
};

// const Users = () => (
//   <div className="page__content">
//     <h1>Users</h1>
//     <ul className="navigation">
//       <li className="navigation__item">
//         <Link to="/users/github">Github</Link>
//       </li>
//       <li className="navigation__item">
//         <Link to="/users/facebook">Facebook</Link>
//       </li>
//     </ul>
//     <Switch>
//       <Route exact path="/users">
//         <span>Select a user please</span>
//       </Route>
//       <Route path="/users/:userId" component={User} />
//     </Switch>
//   </div>
// );

export default Users;
