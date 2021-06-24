import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function UserBlock() {
  const history = useHistory();
  const onAvatarClick = () => history.push(AppRoute.MY_LIST);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar"
          onClick={onAvatarClick}
        >
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link" to="/login">Sign out</Link>
      </li>
    </ul>
  );
}

export default UserBlock;
