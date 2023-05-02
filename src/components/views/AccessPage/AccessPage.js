import React, { useState } from 'react';
import styles from './AccessPage.module.scss';
import PropTypes from 'prop-types';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

export const AccessPage = ({ setUser, loginUser }) => {
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState();
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const { accessPage } = useParams();

  const navigate = useNavigate();

  /* eslint-disable */
  const pageData =
    accessPage === 'login'
      ? {
          formTitle: 'Log In',
          formText: `Don't have an account?`,
          buttonText: `Create an account`,
          formLink: `signup`,
        }
      : {
          formTitle: 'Sign Up',
          formText: `Already have an account?`,
          buttonText: `Log In`,
          formLink: `login`,
        };
  /* eslint-enable */

  const handleSubmit = e => {
    e.preventDefault();
    loginUser(userEmail);
    setUser(userEmail);

    if (userEmail && password) {
      sessionStorage.setItem('userData', userEmail);
      sessionStorage.setItem('userEmail', userEmail);
      sessionStorage.setItem('userPassword', password);
    }

    navigate('/');
  };

  if (accessPage !== 'signup' && accessPage !== 'login') {
    return <Navigate to='/' />;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.root}>
        <div className={'row justify-content-center ' + styles.title}>
          <h1>{pageData.formTitle}</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {accessPage === 'signup' && (
            <div className={'row ' + styles.formControl}>
              <label className={'col form-label ' + styles.label}>Username</label>
              <input
                type='text'
                minLength={3}
                className='col-7 col-sm-8 form-control form-control-sm'
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className={'row ' + styles.formControl}>
            <label className={'col form-label ' + styles.label}>Email</label>
            <input
              type='email'
              className='col-7 col-sm-8 form-control form-control-sm'
              onChange={e => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className={'row ' + styles.formControl}>
            <label className={'col form-label ' + styles.label}>Password</label>
            <input
              type='password'
              minLength={5}
              className='col-7 col-sm-8 form-control form-control-sm'
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.button}>
            <button type='submit' className='btn btn-primary'>
              {pageData.formTitle}
            </button>
          </div>
        </form>
        <hr className={styles.separate} />
        <p className={styles.description}>{pageData.formText}</p>
        <Link to={`/${pageData.formLink}`}>{pageData.buttonText}</Link>
      </div>
    </div>
  );
};

AccessPage.propTypes = {
  setUser: PropTypes.func,
  loginUser: PropTypes.func,
};
