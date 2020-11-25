import React, { createContext, useState, useCallback, useContext } from 'react';

import Category from '../types/Category';
import Store from '../types/Store';

interface FilterData {
  categories: Category[];
  stores: Store[];
  description: string;
  gender: string;
  minimumPrice: number;
  maximumPrice: number;
  ordenation: string;
  page: number;
}

interface FilterDataParam {
  categories: string;
  stores: string;
  description: string;
  gender: string;
  minimum_price: number;
  maximum_price: number;
  ordenation: string;
  page: number;
}

interface FilterDataContext {
  addCategory(category: Category): void;
  removeCategory(category: Category): void;
  addStore(store: Store): void;
  removeStore(store: Store): void;
  setDescription(description: string): void;
  setGender(gender: string): void;
  setMinimumPrice(minimumPrice: number): void;
  setMaximumPrice(maximumPrice: number): void;
  setMinimumMaximumPrice(minimumPrice: number, maximumPrice: number): void;
  setOrdenation(ordenation: string): void;
  setPage(page: number): void;
  getFilterData(): FilterData;
  cleanFilterData(): void;
  getFilterDataParam(): FilterDataParam;
}

const FilterContext = createContext<FilterDataContext>({} as FilterDataContext);

export const FilterProvider: React.FC = ({ children }) => {
  const getInitialData = useCallback(() => {
    return {
      categories: [],
      stores: [],
      description: '',
      gender: '',
      minimumPrice: 0,
      maximumPrice: 500,
      ordenation: 'price',
      page: 1,
    };
  }, []);

  const [filter, setFilter] = useState<FilterData>(getInitialData());

  const addCategory = useCallback(
    (category: Category): void => {
      setFilter({
        ...filter,
        page: 1,
        categories: [...filter.categories, category],
      });
    },
    [filter],
  );

  const removeCategory = useCallback(
    (category: Category): void => {
      setFilter({
        ...filter,
        page: 1,
        categories: filter.categories.filter(
          (categoryFind: Category) => categoryFind.id !== category.id,
        ),
      });
    },
    [filter],
  );

  const addStore = useCallback(
    (store: Store): void => {
      setFilter({
        ...filter,
        page: 1,
        stores: [...filter.stores, store],
      });
    },
    [filter],
  );

  const removeStore = useCallback(
    (store: Store): void => {
      setFilter({
        ...filter,
        page: 1,
        stores: filter.stores.filter(
          (storeFind: Store) => storeFind.id !== store.id,
        ),
      });
    },
    [filter],
  );

  const setDescription = useCallback(
    (description: string): void => {
      setFilter({ ...filter, page: 1, description });
    },
    [filter],
  );

  const setGender = useCallback(
    (gender: string): void => {
      setFilter({ ...filter, page: 1, gender });
    },
    [filter],
  );

  const setMinimumPrice = useCallback(
    (minimumPrice: number): void => {
      setFilter({ ...filter, page: 1, minimumPrice });
    },
    [filter],
  );

  const setMaximumPrice = useCallback(
    (maximumPrice: number): void => {
      setFilter({ ...filter, page: 1, maximumPrice });
    },
    [filter],
  );

  const setMinimumMaximumPrice = useCallback(
    (minimumPrice: number, maximumPrice: number): void => {
      setFilter({ ...filter, page: 1, minimumPrice, maximumPrice });
    },
    [filter],
  );

  const setOrdenation = useCallback(
    (ordenation: string): void => {
      setFilter({ ...filter, page: 1, ordenation });
    },
    [filter],
  );

  const setPage = useCallback(
    (page: number): void => {
      setFilter({ ...filter, page });
    },
    [filter],
  );

  const getFilterData = useCallback((): FilterData => filter, [filter]);

  const cleanFilterData = useCallback((): void => {
    setFilter(getInitialData());
  }, [getInitialData]);

  const getFilterDataParam = useCallback((): FilterDataParam => {
    return {
      categories: filter.categories
        .map((category: Category) => category.id)
        .join(','),
      stores: filter.stores.map((store: Store) => store.id).join(','),
      description: filter.description,
      gender: filter.gender,
      minimum_price: filter.minimumPrice,
      maximum_price: filter.maximumPrice,
      ordenation: filter.ordenation,
      page: filter.page,
    };
  }, [filter]);

  return (
    <FilterContext.Provider
      value={{
        addCategory,
        removeCategory,
        addStore,
        removeStore,
        setDescription,
        setGender,
        setMinimumPrice,
        setMaximumPrice,
        setMinimumMaximumPrice,
        setOrdenation,
        setPage,
        getFilterData,
        cleanFilterData,
        getFilterDataParam,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterDataContext => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within a FilterContextProvider');
  }

  return context;
};
