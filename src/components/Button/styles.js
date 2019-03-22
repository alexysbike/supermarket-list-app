const variants = {
  default: {
    color: 'black',
    backgroundColor: 'white',
    border: 'solid 1px lightgray',
  },
  primary: {
    color: 'white',
    backgroundColor: 'dodgerblue',
    border: 0,
  },
  disabled: {
    color: 'white',
    backgroundColor: 'darkgray',
    border: 0,
  },
};

const variantsHover = {
  default: {
    backgroundColor: '#f3f3f3',
    boxShadow: '0px 0px 2px lightgrey',
  },
  primary: {
    backgroundColor: 'blue',
    boxShadow: '0px 0px 2px lightgrey',
  },
};

const variantGetter = options => (variant, key) => (!options[variant]
  ? options.default[key]
  : options[variant][key]);

const variantHoverGetter = variantGetter(variantsHover);

const styles = {
  button: ({ variant = 'default', block = false, disabled = false }) => ({
    padding: '1em',
    marginTop: '1em',
    borderRadius: 4,
    minWidth: '9em',
    fontSize: '1em',
    ...(block && { width: '100%' }),
    ...(!variants[variant] ? variants.default : variants[variant]),
    ...(disabled && variants.disabled),
  }),
  buttonHover: {
    '&:hover:enabled': {
      backgroundColor: ({ variant = 'default' }) => variantHoverGetter(variant, 'backgroundColor'),
      boxShadow: ({ variant = 'default' }) => variantHoverGetter(variant, 'boxShadow'),
    },
  },
};

export default styles;
