import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Promoted from '../../features/Promoted/Promoted';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../layout/Brands/Brands';
import { SaleBoxes } from '../../features/SaleBoxes/SaleBoxes';
import Gallery from '../../layout/Gallery/Gallery';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <SaleBoxes />
    <NewFurniture />
    <Brands />
    <Gallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
