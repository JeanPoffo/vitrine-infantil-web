import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',

      '@media (max-width: 600px)': {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    image: {
      maxWidth: '100%',
      maxHeight: '650px',

      '@media (max-width: 600px)': {
        maxWidth: '90%',
        maxHeight: '90%',
      },
    },
  }),
);

export default useStyles;
