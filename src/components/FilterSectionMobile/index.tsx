import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from '@material-ui/core';

import { ExpandMore, FilterList } from '@material-ui/icons';

import FilterSection from '../FilterSection';

const FilterSectionMobile: React.FC = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="filter-content"
        id="filter-header"
      >
        <FilterList key="mobile" />
        <Box marginLeft={1}>
          <Typography>
            <strong>Filtros</strong>
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <FilterSection />
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterSectionMobile;
