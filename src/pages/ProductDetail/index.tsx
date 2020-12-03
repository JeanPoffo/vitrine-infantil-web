import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBasketSharp } from '@material-ui/icons';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Typography,
  Container,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Link,
} from '@material-ui/core';

import HeaderSection from '../../components/HeaderSection';
import FooterSection from '../../components/FooterSection';

import useStyles from './styles';

import Product from '../../types/Product';

import api from '../../services/api';

interface RouteParams {
  id: string;
}

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product>();

  const { id } = useParams<RouteParams>();

  const { imageContainer, image } = useStyles();

  useEffect(() => {
    api.get<Product>(`products-public/${id}`).then((response) => {
      if (response.data) {
        setProduct(response.data);
      }
    });
  }, [id]);

  return (
    <Box>
      <HeaderSection />
      <Box
        component="main"
        pb={10}
        mt={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box className={imageContainer}>
                <img
                  src={product?.image}
                  alt={product?.name}
                  className={image}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography variant="h4">
                  <strong>{product?.name}</strong>
                </Typography>
                <br />
                <Typography variant="h4" color="primary">
                  <strong>{`R$ ${product?.price.toFixed(2)}`}</strong>
                </Typography>
                <br />
                <Typography variant="body2">{product?.description}</Typography>
                <br />
                <TableContainer>
                  <Table aria-label="tabela dados produto">
                    <TableBody>
                      <StyledTableRow>
                        <TableCell>
                          <strong>Cor</strong>
                        </TableCell>
                        <TableCell>{product?.color}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>
                          <strong>Gênero</strong>
                        </TableCell>
                        <TableCell>{product?.gender}</TableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <TableCell>
                          <strong>Tamanho</strong>
                        </TableCell>
                        <TableCell>{product?.size}</TableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <br />
                <Box
                  flexGrow="1"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-end"
                >
                  <Link
                    href={product?.link}
                    rel="noopener"
                    target="_blank"
                    color="inherit"
                    underline="none"
                  >
                    <Button
                      size="large"
                      variant="contained"
                      color="secondary"
                      startIcon={<ShoppingBasketSharp />}
                    >
                      Ir à Loja
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <FooterSection />
    </Box>
  );
};

export default ProductDetail;
