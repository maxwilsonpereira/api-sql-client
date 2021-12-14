// MORE HERE:
// https://loading.io/css/
// https://projects.lukehaas.me/css-loaders/

import classes from './styles.module.scss'

export function CircularLoading() {
  return (
    <div className={classes.ldsRing}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export function ThreeDotsLoading({ color = 'blueColor' }) {
  return (
    <div className={[classes.ldsEllipsis, classes[color]].join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export function ThreeDotsGrowLoading() {
  return <div className={classes.loader} />
}

export function ClockLoading() {
  return (
    <div className={classes.ldsSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export function ClockBallsLoading() {
  return (
    <div className={classes.ldsDefault}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
