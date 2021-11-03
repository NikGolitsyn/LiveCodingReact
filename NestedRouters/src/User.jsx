import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(user => {
        setUserData({
          avatarUrl: user.avatar_url,
          userName: user.name,
          userLocation: user.location,
        });
      });;
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { avatarUrl, userName, userLocation } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userName}</span>
        <span className="user__location">{userLocation}</span>
      </div>
    </div>
  );
};

// class User extends React.Component {
//   state = {
//     avatarUrl: null,
//     userName: null,
//     userLocation: null,
//   };

//   componentDidMount() {
//     this.updateUserData(this.props.match.params.userId);
//   }

//   updateUserData = id => {
//     fetch(`https://api.github.com/users/${id}`)
//       .then(res => res.json())
//       .then(userData => {
//         this.setState({
//           avatarUrl: userData.avatar_url,
//           userName: userData.name,
//           userLocation: userData.location,
//         });
//       });
//   };

//   componentDidUpdate(prevProps) {
//     const currentUserId = this.props.match.params.userId;

//     if (prevProps.match.params.userId !== currentUserId) {
//       this.updateUserData(currentUserId);
//     }
//   }

//   render() {
//     const { avatarUrl, userName, userLocation } = this.state;

//     if (!avatarUrl || !userName || !userLocation) {
//       return null;
//     }

//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{userName}</span>
//           <span className="user__location">{userLocation}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;

// class User extends React.Component {
//   state = {
//     userData: null,
//   };

//   fetchUser = id => {
//     getUser(id).then(body => {
//       this.setState({
//         userData: body,
//       });
//     });
//   };

//   componentDidMount() {
//     const { userId } = this.props.match.params;
//     this.fetchUser(userId);
//   }

//   componentDidUpdate(prevProps) {
//     const prevProp = prevProps.match.params.userId;
//     const currentProp = this.props.match.params.userId;

//     if (prevProp !== currentProp) {
//       this.fetchUser(currentProp);
//     }
//   }

//   render() {
//     if (!this.state.userData) {
//       return null;
//     }

//     const { avatar_url, location, name } = this.state.userData;

//     return (
//       <div className="user">
//         <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//         <div className="user__info">
//           <span className="user__name">{name}</span>
//           <span className="user__location">{location}</span>
//         </div>
//       </div>
//     );
//   }
// }

// export default User;

User.propTypes = {
  match: PropTypes.object.isRequired,
};
