import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import {
  getComparedProducts,
  toggleCompare,
  toggleFavorite,
} from '../../../redux/productsRedux';
import { useDispatch, useSelector } from 'react-redux';

const ProductBox = ({ id, name, price, promo, stars, oldPrice, favorite, compare }) => {
  const dispatch = useDispatch();
  const products = useSelector(getComparedProducts);

  const handleToggleFavoriteProduct = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  const handleToggleCompareProduct = e => {
    e.preventDefault();
    if (products.length < 4 || compare === true) {
      dispatch(toggleCompare(id));
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/${id}.jpg`}
        />
        {oldPrice && oldPrice > price && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> Add to cart
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[...Array(5).keys()].map(i => (
            <a key={i} href='#'>
              <FontAwesomeIcon icon={i <= stars ? faStar : farStar}>
                {i} stars
              </FontAwesomeIcon>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            className={favorite && styles.favorite}
            onClick={handleToggleFavoriteProduct}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            className={compare && styles.compare}
            onClick={handleToggleCompareProduct}
            variant='outline'
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Favorite</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice && <p>${oldPrice}</p>}
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
};

export default ProductBox;
