import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid, CircularProgress } from '@material-ui/core';

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categoriesFilter, setCategoriesFilter] = useState<Category[]>([]);

  useEffect(() => {
    api.get<Category[]>('categories-public').then((response) => {
      if (response.data) {
        setCategoriesFilter(response.data);

        setIsLoading(false);
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
          <Grid item xs={6} md={2}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <CardCategory category={category} icon={icon} />
            </Box>
          </Grid>
        );
      }

      return <div />;
    },
    [categoriesFilter],
  );

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={5}>
          {renderCardCategory('Blusas', shirtIcon)}
          {renderCardCategory('Calças', troserIcon)}
          {renderCardCategory('Vestidos', dressIcon)}
          {renderCardCategory('Casacos', coatIcon)}
          {renderCardCategory('Pijamas', pajamaIcon)}
          {renderCardCategory('Meias', sockIcon)}
        </Grid>
      )}
    </Box>
  );
};

export default SarchCategorySection;
