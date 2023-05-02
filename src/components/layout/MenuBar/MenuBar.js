import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';

const MenuBar = () => {
  const { t } = useTranslation();

  const categories = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className='container'>
        <nav className='row  flex-column-reverse  flex-xl-row  align-items-center '>
          <div className='col d-flex justify-content-center align-items-center  my-2'>
            <ProductSearch />

            <div className={styles.dropdown + ' d-md-none'}>
              <FontAwesomeIcon className='mx-2' icon={faListUl} />

              <ul className={styles.dropdownContent}>
                <li>
                  <a href='#' className={styles.active}>
                    {t('label.homePage')}
                  </a>
                </li>
                <li>
                  <a href='#'>{t('label.furniture')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.chair')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.table')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.sofa')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.bedroom')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.blog')}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={'col-auto d-none d-md-flex ' + styles.menu}>
            <ul>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) => (isActive ? styles.active : undefined)}
                >
                  {t('label.homePage')}
                </NavLink>
              </li>
              {categories.map(({ id }) => {
                return (
                  <li key={id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? styles.active : undefined
                      }
                      to={`/shop/${id}`}
                    >
                      {t(`label.${id}`)}
                    </NavLink>
                  </li>
                );
              })}
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : undefined)}
                  to='/blog'
                >
                  {t('label.blog')}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
