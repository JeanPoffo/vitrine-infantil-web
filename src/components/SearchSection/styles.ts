import { makeStyles, createStyles } from '@material-ui/core/styles';

import backgroundImage from '../../assets/background-search.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    searchArea: {
      background: `url(${backgroundImage}) no-repeat`,
      backgroundSize: 'cover',
    },
  }),
);

export default useStyles;
