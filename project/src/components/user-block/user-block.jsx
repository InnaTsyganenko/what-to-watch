import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {logout} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';

function UserBlock() {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();
  const handleAvatarClick = () => history.push(AppRoute.MY_LIST);

  const isCheckedAuth = () =>
    authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar"
          onClick={handleAvatarClick}
        >
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <Link className="user-block__link"
          onClick={(evt) => {
            if (isCheckedAuth()) {
              evt.preventDefault();
              dispatch(logout());
            }
          }}
          to={AppRoute.LOGIN}
        >
          {(isCheckedAuth())
            ? 'Sign Out'
            : 'Sign In'}
        </Link>
      </li>
    </ul>
  );
}


export default UserBlock;
