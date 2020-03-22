const styles = props => {
  const { darkBlue, purple, lightBlue } = props.colors;
  const { heading, subHeading, text } = props.fonts;
  const { sm, md, lg, xl } = props.breakPoints;
  return {
    header: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textContainer: {
      margin: ' 0 auto',
      width: '90%',
      paddingTop: '40px'
    },
    h1: {
      fontFamily: heading,
      fontSize: '1.5rem',
      color: darkBlue,
      paddingBottom: '15px'
    },
    h2: {
      fontFamily: subHeading,
      fontSize: '1rem',
      color: darkBlue,
      paddingBottom: '10px'
    },
    p: {
      fontFamily: text,
      fontSize: '0.75rem',
      lineHeight: '1.5',
      color: darkBlue,
      paddingBottom: '10px',
      '&:last-of-type': {
        paddingBottom: 0
      }
    },
    imgContainer: {
      margin: ' 0 auto',
      position: 'relative',
      width: '80%',
      paddingBottom: '80%'
    },
    img: {
      maxWidth: '101%',
      display: 'block',
      position: 'absolute'
    },
    profile: {
      top: '-7%',
      left: '-7%'
    },
    email: {
      color: purple,
      '&:hover': {
        color: lightBlue
      }
    },
    socialsContainer: {
      paddingTop: '30px',
      display: 'flex'
    },
    socialIcon: {
      paddingRight: '30px',
      '&:last-of-type': {
        paddingRight: 0
      }
    },
    link: {
      color: lightBlue,
      '&:hover': {
        color: purple
      }
    },
    [`@media (min-width: ${sm}px)`]: {
      textContainer: {
        width: '75%'
      },
      imgContainer: {
        width: '65%',
        paddingBottom: '65%'
      }
    },
    [`@media (min-width: ${md}px)`]: {
      textContainer: {
        width: '60%'
      },
      imgContainer: {
        width: '50%',
        paddingBottom: '50%'
      }
    },
    [`@media (min-width: ${lg}px)`]: {
      header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textContainer: {
        width: '40%',
        paddingTop: 0
      },
      imgContainer: {
        width: '40%',
        paddingBottom: '40%'
      }
    },
    [`@media (min-width: ${xl}px)`]: {
      header: {
        maxWidth: '1400px'
      },
      h1: {
        fontSize: '2rem'
      },
      h2: {
        fontSize: '1.25rem'
      },
      p: {
        fontSize: '.8rem'
      }
    }
  };
};

export default styles;
