import React, { HTMLProps } from 'react';
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
// import { withStyles } from '@material-ui/core/styles';

import { PaletteProps, SpacingProps } from '@material-ui/system';

import useStyles from './styles';

import Promotion from '../../../types/Promotion';

interface CardPromotionProps extends HTMLProps<PaletteProps & SpacingProps> {
  promotion: Promotion;
}

// const PurpleTypography = withStyles({ root: { color: '#B67EC8' } })(Typography);

const CardPromotion: React.FC<CardPromotionProps> = ({ promotion }) => {
  const { cardContainer, cardContent } = useStyles();

  return (
    <Box height="100%">
      <Card className={cardContainer}>
        <CardActionArea
          className={cardContent}
          href={promotion.link}
          rel="noopener"
          target="_blank"
        >
          <Typography variant="h6" color="textPrimary">
            <strong>{promotion.name}</strong>
          </Typography>
          <Typography color="textSecondary">
            <strong>{promotion.store.name}</strong>
          </Typography>
          <Typography color="textSecondary">{promotion.description}</Typography>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CardPromotion;
