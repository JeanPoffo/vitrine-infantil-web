import React, { HTMLProps, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  CardActions,
  Button,
  Link,
  Typography,
} from '@material-ui/core';
import { PaletteProps, SpacingProps } from '@material-ui/system';
import { ShoppingBasketSharp } from '@material-ui/icons';

import useStyles from './styles';

import Product from '../../types/Product';

interface CardCategoryProps extends HTMLProps<PaletteProps & SpacingProps> {
  product: Product;
}

const CardProduct: React.FC<CardCategoryProps> = ({ product }) => {
  const { cardContainer, cardMedia, cardContent } = useStyles();

  const history = useHistory();

  const onClickCardProduct = useCallback(() => {
    history.push(`product-detail/${product.id}`);
  }, [history, product]);

  return (
    <Box>
      <Card className={cardContainer}>
        <CardActionArea onClick={onClickCardProduct}>
          <CardMedia
            title={product.name}
            image={product.image}
            className={cardMedia}
          />
          <Divider color="primary" />
          <CardContent className={cardContent}>
            <Typography variant="body1" color="textPrimary">
              <strong>{product.name}</strong>
            </Typography>

            <Box flexGrow={1} width="100%" display="flex" alignItems="flex-end">
              <Box
                flexGrow={1}
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h5" color="primary">
                  <strong>{`R$ ${product.price.toFixed(2)}`}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>{`Loja ${product.store.name}`}</strong>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Link
              href={product.link}
              rel="noopener"
              target="_blank"
              color="inherit"
              underline="none"
            >
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                startIcon={<ShoppingBasketSharp />}
              >
                Ir à Loja
              </Button>
            </Link>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardProduct;
