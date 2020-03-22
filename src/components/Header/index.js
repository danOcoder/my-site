import React from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import styles from './styles';

import profilePic from '../../images/profilePicKracked.jpg';
import background from '../../images/backgroundOffset.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faTwitter, faLinkedinIn, faGithub);

const Header = () => {
  const useStyles = createUseStyles(theme => styles(theme));
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.imgContainer}>
          <img className={classes.img} src={background} alt='design element' />
          <img
            className={`${classes.img} ${classes.profile}`}
            src={profilePic}
            alt="head shot of Dan O'Connor"
          />
        </div>

        <div className={classes.textContainer}>
          <h1 className={classes.h1}>Dan O'Connor</h1>
          <h2 className={classes.h2}>Front End Developer</h2>
          <p className={classes.p}>
            Dan is a React focussed front end developer living in Kitchener Ontario. An engaging and
            resourceful professional with a devotion to perpetual growth and a passion for
            exploring. Dan is a natural problem solver who loves to create & collaborate as part of
            a team.
          </p>
          <p className={classes.p}>
            When away from work Dan can be found spending time with family and friends, running on
            one of KW’s many great trails, listening to podcasts or his son talking about Pokemon
            Sword. Dan always welcomes professional enquiries at{' '}
            <span>
              <a className={classes.email} href='mailto:info@danocoder.com'>
                info@danocoder.com
              </a>
            </span>
          </p>
          <ul className={classes.socialsContainer}>
            <li className={classes.socialIcon}>
              <a className={classes.link} href='https://twitter.com/danOcoder'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className={classes.socialIcon}>
              <a className={classes.link} href='https://www.linkedin.com/in/danocoder/'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className={classes.socialIcon}>
              <a className={classes.link} href='https://github.com/danOcoder'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
