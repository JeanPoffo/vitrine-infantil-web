import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    cardContainer: {
      width: '300px',
      height: '450px',

      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
      transition: 'box-shadow 0.2s',

      '&:hover': {
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },

      '@media (max-width: 600px)': {
        width: '100%',
      },
    },
    cardMedia: {
      height: '250px',
      backgroundSize: 'contain',
    },

    cardContent: {
      height: '145px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
  }),
);

export default useStyles;
