import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TopBar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <a href='#'>
                  {t('label.USD')}{' '}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  {t('label.english')}{' '}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  {t('label.help')}{' '}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <Link to='/login'>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
                  {t('label.login')}
                </Link>
              </li>
              <li>
                <Link to='/signup'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />{' '}
                  {t('label.register')}
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
