import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    logoContainer: {
      display: 'flex',
      justifyContent: 'center',

      '@media (max-width: 600px)': {
        justifyContent: 'flex-end',
      },
    },
  }),
);

export default useStyles;
