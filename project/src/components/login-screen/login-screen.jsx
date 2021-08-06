import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/api-actions';
import Logo from '../logo/logo';
import SignInMessage from '../sign-in-message/sign-in-message';
import Copyright from '../copyright/copyright';
import {logoClassName} from '../../const';
import {getLoginPostErrorMessage} from '../../store/user/selectors';

function LoginScreen() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const loginErrorMessage = useSelector(getLoginPostErrorMessage);

  const onSubmit = (data) => {
    dispatch(login({
      login: data.email,
      password: data.password,
    }));
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo logoClassName={logoClassName.HEADER_LOGO} />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          {(errors.email && <SignInMessage errorMessage={errors.email.message}/>)
            || (loginErrorMessage !== '' && <SignInMessage errorMessage={loginErrorMessage}/>)}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${errors.email ? 'sign-in__field--error' : ''}`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                data-testid="email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address.',
                  },
                })}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            {errors.password && <SignInMessage errorMessage={errors.password.message} />}
            <div className={`sign-in__field ${errors.password ? 'sign-in__field--error' : ''}`}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                data-testid="password"
                {...register('password', {
                  required: true,
                  pattern: {
                    value: /^([A-Z0-9]).{3,17}\S+$/i,
                    message:
                      'Latin, not spaces, 5-20 symbols.',
                  },
                })}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={!errors}>Sign in</button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <Logo logoClassName={logoClassName.FOOTER_LOGO} />
        <Copyright />
      </footer>
    </div>
  );
}

export default LoginScreen;
