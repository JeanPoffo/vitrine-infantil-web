import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Typography,
  Hidden,
} from '@material-ui/core';

import HeaderSection from '../../components/HeaderSection';
import SearchSection from '../../components/SearchSection';
import FilterSection from '../../components/FilterSection';
import FilterSectionMobile from '../../components/FilterSectionMobile';
import FooterSection from '../../components/FooterSection';
import ProductCard from '../../components/CardProduct';
import PaginationSection from '../../components/PaginationSection';

import { useFilter } from '../../hooks/filter';
import { clean } from '../../utils/object';

import Product from '../../types/Product';

import api from '../../services/api';

const ProductSearch: React.FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [pages, setPages] = useState<number>(1);

  const { getFilterDataParam } = useFilter();

  useEffect(() => {
    const params = clean(getFilterDataParam());

    api
      .get<Product[]>('/products-public', {
        params,
      })
      .then((response) => {
        if (response.data) {
          setProducts(response.data);

          const { 'x-total-count': productsNumber } = response.headers;

          setPages(Math.ceil(productsNumber / 12));

          setIsSearching(false);
        }
      });
  }, [getFilterDataParam]);

  const getResultProducts = useCallback(() => {
    if (isSearching) {
      return (
        <Box mt={5}>
          <CircularProgress />
        </Box>
      );
    }

    if (products.length > 0) {
      return products.map((product: Product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ));
    }

    return (
      <Box mt={5}>
        <Typography variant="h4" color="primary">
          Sem Resultados
        </Typography>
      </Box>
    );
  }, [isSearching, products]);

  const getResultPagination = useCallback(() => {
    if (!isSearching && products.length > 0) {
      return <PaginationSection pages={pages} />;
    }

    return <div />;
  }, [isSearching, pages, products]);

  return (
    <Box>
      <HeaderSection />
      <Box component="main">
        <SearchSection />
        <Box pt={5} pb={10}>
          <Container>
            <Box component="section" width="100%">
              <Grid
                container
                justify="flex-start"
                alignItems="flex-start"
                spacing={3}
              >
                <Grid item xs={12} sm="auto">
                  <Hidden smUp>
                    <FilterSectionMobile />
                  </Hidden>
                  <Hidden smDown>
                    <FilterSection />
                  </Hidden>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Box
                    component="main"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    flexGrow={1}
                  >
                    <Grid
                      container
                      justify="center"
                      alignContent="center"
                      spacing={7}
                    >
                      {getResultProducts()}
                    </Grid>
                    <Box pt={5}>{getResultPagination()}</Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
      <FooterSection />
    </Box>
  );
};

export default ProductSearch;
