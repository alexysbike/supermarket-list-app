const styles = {
  wrapper: {
    position: 'fixed',
    zIndex: 10,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(236, 248, 251, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '3em',
    borderRadius: 4,
    boxShadow: '0px 0px 15px lightgrey',
    minWidth: 400,
  },
  title: {
    textAlign: 'center',
  },
  actionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2em',
  },
  textInput: {
    boxSizing: 'border-box',
    width: '100%',
    height: '2.5em',
    display: 'block',
    lineHeight: 2.5,
    fontSize: '1em',
    padding: '.2em 1em',
    borderRadius: '5px',
    border: 'solid 1px lightgray',
  },
};

export default styles;
