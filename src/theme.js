import { makeStyles, createMuiTheme } from '@material-ui/core';
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700;800;900&display=swap');

export const defaultColors = {
  primary: '#415167',
  accent: '#C7A17A',
  darkGray: '#151D28',
  lightGray: '#EDF0F5',
};

const { primary, accent, lightGray } = defaultColors;

const theme = createMuiTheme({
  breakpoints: {
    values: {},
  },
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: '#C7A17A',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    // Display large
    h1: {
      fontFamily: 'Montserrat',
      fontSize: '54px',
      fontStyle: 'normal',
      fontWeight: 900,
      lineHeight: '70px',
      letterSpacing: '0px',
    },
    // Display medium
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '30px',
      fontStyle: 'normal',
      fontWeight: 900,
      lineHeight: '34px',
      letterSpacing: '0px',
    },
    // Title
    h4: {
      fontFamily: 'Nunito',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '28px',
      letterSpacing: '0px',
      color: '#232C38',
    },
    // Body
    h5: {
      fontFamily: 'Nunito',
      fontSize: '16px',
      fontStyle: 'normal',
      lineHeight: '22px',
      letterSpacing: '0px',
      color: '#151D28',
    },
    //Sub Title
    subtitle1: {
      fontFamily: 'Nunito',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '24px',
    },
  },
});
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cartIcon: {
    cursor: 'pointer',
    position: 'absolute',
    top: '74px',
    left: '54px',
    '&:hover': {
      transition: '.4s ease',
      transform: 'scale(.9)',
    },
  },
  coffeeBg: {
    zIndex: -1,
    backgroundColor: primary,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '384px',
    height: '100vh',
  },
  coffeeSliderImg: {
    width: '235px',
    height: '256px',
  },
  coffeCard: {
    display: 'flex',
    width: '560px',
    height: '256px',
  },
  coffeeCardContent: {
    display: 'flex',
  },
  featureIconWrapper: {
    width: '1104px',
  },
  headerBg: {
    paddingLeft: '18px',
  },
  giftSetContent: {
    marginLeft: '210px',
    marginTop: '40px',
  },
  giftSetBg: {
    position: 'relative',
    backgroundColor: lightGray,
    // zIndex: -2,
  },
  giftSetBgSecondary: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    width: '326px',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  logo: {
    paddingTop: '74px',
    paddingLeft: '37px',
  },
  headerMenu: {
    backgroundColor: primary,
    position: 'relative',
    width: '153px',
    flexGrow: 1,
  },
  headerMenuList: {
    paddingBottom: '29px',
    paddingLeft: '8px',
    marginTop: '6px',
  },
  headerMenuListEl: {
    listStyle: 'none',
    paddingTop: '26px',
    userSelect: 'none',
    cursor: 'pointer',
    '&:hover': {
      transition: '.4s ease',
      transform: 'scale(.9)',
    },
  },
  headerLeft: {
    flexGrow: 1,
    position: 'relative',
  },
  headerTitle: {
    position: 'absolute',
    bottom: '57px',
    left: '134px',
  },
  headerTitlePadding: {
    padding: '0 14px',
  },
  headerTitleBg: {
    backgroundColor: accent,
    padding: '0 16px',
  },
  sliderEl: {
    position: 'relative',
    width: '500px',
  },
  sliderContentBox: {
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
    height: '460px',
    width: '882px',
  },
  tabImage: {
    position: 'absolute',
    top: 50,
    left: -255,
    width: 460,
    height: 414,
  },
  tabNotActive: {
    height: '154px',
    width: '88px',
    background: '#EDF0F5',
    mixBlendMode: 'normal',
    borderRadius: 0,
    opacity: 0.3,
    '&:hover': {
      backgroundColor: '#DADADA',
    },
  },
  tabActive: {
    height: '154px',
    width: '88px',
    borderRadius: 0,
    backgroundColor: '#FFF',
    '&:hover': {
      color: accent,
      backgroundColor: '#fff',
    },
  },
  tabActionButton: {
    borderRadius: '20px',
    padding: '8px 40px',
  },
  tabs: {
    width: '430px',
    color: '#000',
    borderLeft: '1px solid #000',
  },
}));

export default theme;
