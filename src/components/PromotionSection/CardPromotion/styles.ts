import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    cardContainer: {
      background:
        'radial-gradient(circle at top left, rgba(182,126,200,1) 5%, rgba(242,147,200,1) 30%, rgba(146,215,255,0.1) 35%)',
      height: '100%',
      display: 'flex',

      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
      transition: 'box-shadow 0.2s',

      '&:hover': {
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
    },
    cardContent: {
      flexGrow: 1,
      padding: '18px',
    },
  }),
);

export default useStyles;
