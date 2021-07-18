import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../store/api-actions';

function UserBlock(props) {
  const {authorizationStatus, logoutGame} = props;
  const history = useHistory();
  const handleAvatarClick = () => history.push(AppRoute.MY_LIST);

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
            if (authorizationStatus === AuthorizationStatus.AUTH) {
              evt.preventDefault();
              logoutGame();
            }
          }}
          to={AppRoute.LOGIN}
        >
          {authorizationStatus === AuthorizationStatus.AUTH
            ? 'Sign Out'
            : 'Sign In'}
        </Link>
      </li>
    </ul>
  );
}

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  logoutGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  logoutGame() {
    dispatch(logout());
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
