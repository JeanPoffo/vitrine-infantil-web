import React, { useEffect } from 'react';

import { Typography, Box, Container, Grid } from '@material-ui/core';

import HeaderSection from '../../components/HeaderSection';
import SearchSection from '../../components/SearchSection';
import SarchCategorySection from '../../components/SarchCategorySection';
import PromotionSection from '../../components/PromotionSection';
import FooterSection from '../../components/FooterSection';

import { useFilter } from '../../hooks/filter';

const Home: React.FC = () => {
  const { cleanFilterData } = useFilter();

  useEffect(() => {
    cleanFilterData();
  }, [cleanFilterData]);

  return (
    <Box>
      <HeaderSection />
      <Box component="main" marginBottom={10}>
        <SearchSection />
        <Box component="section" marginTop={5}>
          <Container>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Busque por Categorias
                </Typography>
              </Grid>
              <Grid item>
                <SarchCategorySection />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box component="section" marginTop={5}>
          <Container>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Necessita de Cupons de Desconto?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" align="center" color="textSecondary">
                  Os melhores cupons de desconto e combos de produtos para
                  aproveitar.
                </Typography>
              </Grid>
              <Grid item>
                <PromotionSection />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <FooterSection />
    </Box>
  );
};

export default Home;
