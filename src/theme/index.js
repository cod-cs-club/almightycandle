export default {
  // example colors with dark mode
  colors: {
    text: '#343D48', // body color and primary color
    text_secondary: '#02073E', // secondary body color
    heading: '#0F2137', // primary heading color
    heading_secondary: '#02073E', // heading color
    background: '#FFFFFF', // body background color
    background_secondary: '#F9FAFC', // secondary background color
    border_color: '#E5ECF4', // border color
    primary: '#119429', // primary button and link color
    secondary: '#3183FF', // secondary color - can be used for hover states
    muted: '#7B8188', // muted color
    accent: '#609', // a contrast color for emphasizing UI
    yellow: '#F6C416',

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
    },
  },
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',
  ],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'Bree Serif', serif",
    special: "'Roboto Slab', serif",
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 56, 62],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.9,
    heading: 1.6,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, null, '1020px', '1220px', null, '1350px'],
      px: [4, 6],
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    main: {},
  },
  section: {
    feature: {
      py: [8, null, 9, null, null, 10],
    },
    profit: {
      py: [8, null, 9, null, null, 10],
      backgroundColor: 'background_secondary',
      position: 'relative',
    },
    knowledge: {
      pt: [8, null, 9, null, null, 10],
      pb: [0, null, null, 2, 5],
    },
    feedback: {
      py: [8, null, 9, null, null, 10],
    },
    workflow: {
      py: [8, null, 9, null, null, 10],
      backgroundColor: 'background_secondary',
    },
    support: {
      pt: [8, null, 9, null, null, 10],
      pb: [8, null, 9, null, null, 9],
    },
  },
  sectionHeader: {
    width: ['100%', null, null, '650px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: [-2, null, null, null, -3],
    mx: 'auto',
    marginBottom: [7, null, '60px', null, '65px', null, '70px', 8],
    title: {
      fontSize: [6, 7, 8, null, 9],
      color: 'heading',
      lineHeight: [1.4, 1.45],
      textAlign: 'center',
      fontFamily: 'heading',
      fontWeight: 'body',
      letterSpacing: 'heading',
      mb: [3, null, null, null, 4, 5],
    },
    description: {
      fontSize: [1, 2],
      color: 'text',
      textAlign: 'center',
      fontWeight: 'body',
      lineHeight: [1.9, 2, null, 2.2],
      px: [0, null, 6],
    },
  },
  text: {
    heading: {
      fontFamily: 'body',
      lineHeight: [1.5, 'heading'],
      fontWeight: 'heading',
      fontSize: 3,
      color: 'heading',
    },
    heroPrimary: {
      color: 'heading_secondary',
      fontSize: ['34px', 10, 11, 12, 11, 12, 13, 14],
      lineHeight: [1.3, 1.25],
      fontWeight: 'body',
      mb: [4, 5],
      px: [0, 3, 6, 4, 0],
    },
    heroSecondary: {
      color: 'heading_secondary',
      fontSize: [2, '17px', null, 3, null, 4],
      lineHeight: [1.9, null, null, null, 2.1],
      fontWeight: 'body',
      pr: [0, null, null, null, 4, 6],
      mb: [6, null, '35px'],
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137',
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137',
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px',
    },
  },
  links: {
    default: {
      cursor: 'pointer',
      textDecoration: 'none',
    },
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal',
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
    },
    logo: {
      display: 'flex',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none'],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '6px',
      fontSize: [1, 2],
      letterSpacings: '-0.15px',
      padding: ['10px 15px', '13px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0,
      },
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
      },
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      padding: ['15px 20px', null, '17px 20px 16px', null, '20px 30px'],
      bg: 'white',
      fontWeight: 'bold',
      letterSpacing: '1px',
      transition: 'all 0.35s',
      fontSize: [0, '13px', null, null, 1],
      '&:hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
    subscribeButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'primary',
      flexShrink: 0,
      ml: [2, 3],
      padding: ['10px 20px', '12px 30px'],
      fontSize: [1, 2, 3],
      fontWeight: 'bold',
      '&:hover': {
        boxShadow: 'rgba(249, 84, 84, 0.3) 0px 9px 20px -5px',
      },
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      color: 'secondary',
      fontSize: [1, null, null, null, 2],
      backgroundColor: 'transparent',
      fontWeight: 'heading',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: [0, 0],
      svg: {
        fontSize: '15px',
        mt: '1px',
        transition: 'all 0.25s',
      },
      '&:hover': {
        color: 'primary',
        svg: {
          ml: 1,
        },
      },
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      svg: {
        fontSize: [4, 6],
        mr: 2,
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },

  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};
