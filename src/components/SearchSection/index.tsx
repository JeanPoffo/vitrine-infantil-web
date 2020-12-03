import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Search } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from '@material-ui/core';

import useStyles from './styles';

import { useFilter } from '../../hooks/filter';

const WhiteTypography = withStyles({ root: { color: '#fff' } })(Typography);
// const WhiteTypography = withStyles({ root: { color: '#000000' } })(Typography);

const SearchSection: React.FC = () => {
  const [descriptionFilter, setDescriptionFilter] = useState<string>('');
  const [isErrored, setIsErrored] = useState<boolean>(false);

  const { getFilterDataParam, setDescription } = useFilter();
  const { description } = getFilterDataParam();

  const history = useHistory();

  const { searchArea } = useStyles();

  useEffect(() => {
    setDescriptionFilter(description);
  }, [description, setDescriptionFilter]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (descriptionFilter !== '') {
        setIsErrored(false);

        setDescription(descriptionFilter);

        history.push('/product-search');
      } else {
        setIsErrored(true);
      }
    },
    [descriptionFilter, history, setDescription],
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="350px"
      className={searchArea}
    >
      <Container>
        <section>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <WhiteTypography variant="h4">
                <strong>Busque pelas melhores ofertas</strong>
              </WhiteTypography>
              <br />
            </Grid>
            <Grid item xs={12}>
              <Box
                p={1.5}
                bgcolor="#ffffff"
                borderRadius="8px"
                boxShadow={`0 4px 14px 0 rgba(${
                  isErrored ? '244, 67, 54, 0.5' : '0, 0, 0, 0.11'
                })`}
                display="flex"
                alignItems="center"
                component="form"
                onSubmit={onSubmit}
              >
                <Box flexGrow={1} marginRight={1}>
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                    placeholder="Ex.: Blusas"
                    value={descriptionFilter}
                    onChange={
                      (event) => setDescriptionFilter(event.currentTarget.value)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                  />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={onSubmit}
                >
                  Buscar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </section>
      </Container>
    </Box>
  );
};

export default SearchSection;
