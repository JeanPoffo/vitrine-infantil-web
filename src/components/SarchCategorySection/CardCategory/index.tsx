import React, { useCallback, HTMLProps } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';

import { PaletteProps, SpacingProps } from '@material-ui/system';

import useStyles from './styles';

import { useFilter } from '../../../hooks/filter';

import Category from '../../../types/Category';

interface CardCategoryProps extends HTMLProps<PaletteProps & SpacingProps> {
  category: Category;
  icon: string;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  category,
  icon: image,
}) => {
  const history = useHistory();

  const { addCategory } = useFilter();

  const { cardContainer } = useStyles();

  const onClickCard = useCallback(() => {
    addCategory(category);
    history.push('/product-search');
  }, [addCategory, category, history]);

  return (
    <Box width="115px">
      <Card className={cardContainer}>
        <CardActionArea onClick={onClickCard}>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <img src={image} alt={`Categoria ${category.name}`} />
            <Typography>{category.name}</Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CardCategory;
