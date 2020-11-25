import React, { useState, useEffect } from 'react';

import { Box, Grid } from '@material-ui/core';

import CardPromotion from './CardPromotion';

import Promotion from '../../types/Promotion';

import api from '../../services/api';

const PromotionSection: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    api.get<Promotion[]>('/promotions-public').then((response) => {
      if (response.data) {
        setPromotions(response.data);
      }
    });
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        {promotions &&
          promotions.map((promotion: Promotion) => (
            <Grid key={promotion.id} item xs={12} md={6}>
              <CardPromotion promotion={promotion} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default PromotionSection;
