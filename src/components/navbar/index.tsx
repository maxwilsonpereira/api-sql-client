import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import classes from './styles.module.scss'
import maxmixLogo from '../../assets/images/Max Mix Digital.png'

export default function Navibar() {
  function CustomLink({ children, to, ...props }: LinkProps) {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: true })
    return (
      <Link
        className={[classes.link, match! && classes.activeLink].join(' ')}
        to={to}
        {...props}
      >
        {children}
      </Link>
    )
  }

  return (
    <div className={classes.root}>
      <nav className={classes.navDiv}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img className={classes.logo} src={maxmixLogo} alt="maxmix-logo" />
          </Link>
        </div>
        <div style={{ marginLeft: 40 }}>
          <CustomLink to="/users">Users</CustomLink>
          <span style={{ fontWeight: 'bold' }}>/</span>
          <CustomLink to="/about">About</CustomLink>
        </div>
      </nav>
    </div>
  )
}
