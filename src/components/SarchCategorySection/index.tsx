import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid } from '@material-ui/core';

import CardCategory from './CardCategory';

import shirtIcon from '../../assets/shirt.svg';
import troserIcon from '../../assets/trouser.svg';
import sockIcon from '../../assets/sock.svg';
import pajamaIcon from '../../assets/pajama.svg';
import dressIcon from '../../assets/dress.svg';
import coatIcon from '../../assets/coat.svg';

import Category from '../../types/Category';

import api from '../../services/api';

const SarchCategorySection: React.FC = () => {
  const [categoriesFilter, setCategoriesFilter] = useState<Category[]>([]);

  useEffect(() => {
    api.get<Category[]>('categories-public').then((response) => {
      if (response.data) {
        setCategoriesFilter(response.data);
      }
    });
  }, []);

  const renderCardCategory = useCallback(
    (categoryName: string, icon: string) => {
      const category = categoriesFilter.find(
        (currentCategory) => currentCategory.name === categoryName,
      );

      if (category) {
        return (
          <Grid item xs={4} md={2}>
            <CardCategory category={category} icon={icon} />
          </Grid>
        );
      }

      return <div />;
    },
    [categoriesFilter],
  );

  return (
    <Box>
      <Grid container spacing={1}>
        {renderCardCategory('Blusas', shirtIcon)}
        {renderCardCategory('Calças', troserIcon)}
        {renderCardCategory('Vestidos', dressIcon)}
        {renderCardCategory('Casacos', coatIcon)}
        {renderCardCategory('Pijamas', pajamaIcon)}
        {renderCardCategory('Meias', sockIcon)}
      </Grid>
    </Box>
  );
};

export default SarchCategorySection;
