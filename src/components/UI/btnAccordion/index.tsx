import { useState } from 'react'
import classes from './styles.module.scss'
import linkedinIcon from './logos/linkedin.svg'
import gitHubIcon from './logos/github.svg'
import instagramIcon from './logos/instagram.svg'
import youTubeIcon from './logos/youTube.png'

export default function ButtonMaxDesktop({ title = '' }): JSX.Element {
  const [openBtnThree, setOpenBtnThree] = useState(false)

  return (
    <div className={classes.root}>
      <div
        className={[
          classes.btnFourBasics,
          classes.btnFirst,
          classes.btnFourHoverBlue,
        ].join(' ')}
        onClick={() => setOpenBtnThree((openBtnThree) => !openBtnThree)}
      >
        <p className={classes.title}>{title}</p>
        <span
          className={[
            classes.arrow,
            !openBtnThree && classes.btnFourArrow,
            openBtnThree && classes.btnFourArrowInverted,
          ].join(' ')}
        >
          &#x0003E;
        </span>
      </div>
      <a
        className={[
          classes.btnFourBasics,
          classes.btnFourHoverBlue,
          openBtnThree && classes.btnSecondShow,
        ].join(' ')}
        href="https://www.linkedin.com/in/maxwilsonpereira/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={[classes.iconBasics, classes.iconLinkedin].join(' ')}
          src={linkedinIcon}
          alt="facebook-icon"
        />
        {/* Linkedin */}
      </a>

      <a
        className={[
          classes.btnFourBasics,
          // classes.btnFourGithub,
          classes.btnFourHoverBlue,
          openBtnThree && classes.btnThirdShow,
        ].join(' ')}
        href="https://github.com/maxwilsonpereira"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={[classes.iconBasics, classes.iconGithub].join(' ')}
          src={gitHubIcon}
          alt="github-icon"
        />
        {/* GitHub */}
      </a>

      <div
        className={[
          // classes.btnFourFacebook,
          classes.btnFourthBoxGrid,
          openBtnThree && classes.btnFourthShow,
        ].join(' ')}
      >
        <a
          className={[
            classes.btnFourthBasics,
            classes.btnFourthLeft,
            classes.btnFourHoverBlue,
          ].join(' ')}
          href="https://www.instagram.com/maxwilsonpereira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={classes.iconBasics}
            src={instagramIcon}
            alt="instagram-icon"
          />
          {/* Instagram */}
        </a>

        <a
          className={[
            classes.btnFourthBasics,
            classes.btnFourthRight,
            classes.btnFourHoverBlue,
          ].join(' ')}
          href="https://www.youtube.com/user/maxwilsonpereira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={classes.iconBasics}
            src={youTubeIcon}
            alt="github-icon"
          />
          {/* YouTube */}
        </a>
      </div>
    </div>
  )
}
