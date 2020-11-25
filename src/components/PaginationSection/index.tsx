import React, { HTMLProps, useCallback } from 'react';
import { Box } from '@material-ui/core';
import { PaletteProps, SpacingProps } from '@material-ui/system';
import { Pagination } from '@material-ui/lab';

import { useFilter } from '../../hooks/filter';

interface PaginationSectioProps extends HTMLProps<PaletteProps & SpacingProps> {
  pages: number;
}

const PaginationSection: React.FC<PaginationSectioProps> = ({ pages }) => {
  const { setPage } = useFilter();

  const onClickPage = useCallback(
    (page: number) => {
      setPage(page);
      window.scrollTo(0, 410);
    },
    [setPage],
  );

  return (
    <Box>
      <Pagination
        count={pages}
        onChange={(event, page) => onClickPage(page)}
        color="primary"
      />
    </Box>
  );
};

export default PaginationSection;
