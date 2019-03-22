const styles = {
  '@global': {
    body: {
      backgroundColor: 'lightgray',
      fontFamily: 'Roboto, sans-serif',
    },
  },
  main: {
    margin: {
      top: '2em',
      left: 'auto',
      right: 'auto',
    },
    paddingTop: '2em',
    paddingBottom: '2em',
    maxWidth: 800,
    minHeight: 400,
    backgroundColor: '#f5f5f5',
    border: 'black solid 1px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapper: {
    minWidth: 500,
  },
  title: {
    marginBottom: 0,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 0,
    textAlign: 'center',
    marginBottom: '2em',
  },
};

export default styles;
