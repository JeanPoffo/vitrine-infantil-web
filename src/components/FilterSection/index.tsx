import React, { useEffect, useCallback, useState, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from '@material-ui/core';

import { useFilter } from '../../hooks/filter';

import Category from '../../types/Category';
import Store from '../../types/Store';

import api from '../../services/api';

const FilterSection: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number[]>([1, 300]);
  const [categoriesFilter, setCategoriesFilter] = useState<Category[]>([]);
  const [storesFilter, setStoresFilter] = useState<Store[]>([]);

  const {
    addCategory,
    removeCategory,
    addStore,
    removeStore,
    setGender,
    setMinimumMaximumPrice,
    setOrdenation,
    getFilterData,
  } = useFilter();

  const {
    minimumPrice,
    maximumPrice,
    categories,
    stores,
    gender,
    ordenation,
  } = getFilterData();

  useEffect(() => {
    api.get<Category[]>('categories-public').then((response) => {
      setCategoriesFilter(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<Store[]>('stores-public').then((response) => {
      setStoresFilter(response.data);
    });
  }, []);

  const onChangePriceRangeFilter = useCallback(
    (event: unknown, value: number | number[]) => {
      setPriceRange(value as number[]);
    },
    [setPriceRange],
  );

  const onChangeComittedPriceRangeFilter = useCallback(
    (event: unknown, value: number | number[]) => {
      const valuePriceRange = value as number[];
      setMinimumMaximumPrice(valuePriceRange[0], valuePriceRange[1]);
    },
    [setMinimumMaximumPrice],
  );

  const onChangeCategoryFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>, category: Category) => {
      if (event.currentTarget.checked) {
        addCategory(category);
      } else {
        removeCategory(category);
      }
    },
    [addCategory, removeCategory],
  );

  const onChangeStoreFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>, store: Store) => {
      if (event.currentTarget.checked) {
        addStore(store);
      } else {
        removeStore(store);
      }
    },
    [addStore, removeStore],
  );

  const onChangeGenderFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setGender(event.currentTarget.value);
    },
    [setGender],
  );

  const onChangeOrdenation = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setOrdenation(event.currentTarget.value);
    },
    [setOrdenation],
  );

  return (
    <Box component="aside" width="100%">
      <Box>
        <Typography variant="h5">Filtros</Typography>

        <Box>
          <Typography variant="subtitle2">Valor</Typography>
          <Slider
            min={1}
            max={300}
            defaultValue={[minimumPrice, maximumPrice]}
            value={priceRange}
            onChange={onChangePriceRangeFilter}
            onChangeCommitted={onChangeComittedPriceRangeFilter}
            valueLabelDisplay="auto"
            getAriaValueText={(price) => `Preço ${price}`}
          />
        </Box>
        <Box>
          <Typography variant="subtitle2">Categoria</Typography>
          <FormGroup>
            {categoriesFilter &&
              categoriesFilter.map((category: Category) => (
                <FormControlLabel
                  key={category.id}
                  control={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <Checkbox
                      checked={
                        categories.some(
                          (currentCategory: Category) =>
                            currentCategory.id === category.id,
                        ) ?? false
                      }
                      onChange={
                        (event) => onChangeCategoryFilter(event, category)
                        // eslint-disable-next-line react/jsx-curly-newline
                      }
                    />
                  }
                  label={category.name}
                />
              ))}
          </FormGroup>
        </Box>
        <Box>
          <Typography variant="subtitle2">Loja</Typography>
          <FormGroup>
            {storesFilter &&
              storesFilter.map((store: Store) => (
                <FormControlLabel
                  key={store.id}
                  control={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <Checkbox
                      checked={
                        stores.some(
                          (currentStore: Store) => currentStore.id === store.id,
                        ) ?? false
                      }
                      onChange={
                        (event) => onChangeStoreFilter(event, store)
                        // eslint-disable-next-line react/jsx-curly-newline
                      }
                    />
                  }
                  label={store.name}
                />
              ))}
          </FormGroup>
        </Box>
        <Box>
          <Typography variant="subtitle2">Sexo</Typography>
          <RadioGroup name="gender" onChange={onChangeGenderFilter}>
            <FormControlLabel
              checked={gender === ''}
              value=""
              control={<Radio />}
              label="Todos"
            />
            <FormControlLabel
              checked={gender === 'Feminino'}
              value="Feminino"
              control={<Radio />}
              label="Feminino"
            />
            <FormControlLabel
              checked={gender === 'Masculino'}
              value="Masculino"
              control={<Radio />}
              label="Masculino"
            />
            <FormControlLabel
              checked={gender === 'Unisex'}
              value="Unisex"
              control={<Radio />}
              label="Unisex"
            />
          </RadioGroup>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5">Ordenação</Typography>
        <RadioGroup name="ordenation" onChange={onChangeOrdenation}>
          <FormControlLabel
            checked={ordenation === 'price'}
            value="price"
            control={<Radio />}
            label="Preço"
          />
          <FormControlLabel
            checked={ordenation === 'name'}
            value="name"
            control={<Radio />}
            label="Nome"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default FilterSection;
