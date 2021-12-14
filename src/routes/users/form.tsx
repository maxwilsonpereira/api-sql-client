import { maskDate } from '../../utils/masks'
import classes from './styles.module.scss'

interface Props {
  firstname: string
  surname: string
  birthday: string
  email: string
  password: string
  sex: string
  setFirstname: (name: string) => void
  setSurname: (surname: string) => void
  setBirthday: (birthday: string) => void
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  setSex: (sex: string) => void
}

export default function Form({
  firstname,
  surname,
  birthday,
  email,
  password,
  sex,
  setFirstname,
  setSurname,
  setBirthday,
  setEmail,
  setPassword,
  setSex,
}: Props) {
  return (
    <form>
      <div className={classes.inputsContainerGrid}>
        <input
          name="firstname"
          className={classes.inputStyle}
          required
          placeholder="first name"
          type="text"
          value={firstname}
          onChange={(e) =>
            setFirstname(e.target.value.trimStart().replace(/\s\s+/g, ' '))
          }
        />
        <input
          name="surname"
          className={classes.inputStyle}
          placeholder="surname"
          type="text"
          value={surname}
          onChange={(e) =>
            setSurname(e.target.value.trimStart().replace(/\s\s+/g, ' '))
          }
        />
      </div>
      <div className={classes.inputsContainerGrid}>
        <input
          name="birthday"
          className={classes.inputStyle}
          placeholder="birthday (yyyymmdd)"
          type="text"
          value={maskDate(birthday)}
          onChange={(e) =>
            setBirthday(e.target.value.trim().replace(/[^0-9]/g, ''))
          }
        />

        <input
          name="email"
          className={classes.inputStyle}
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
      </div>
      <div className={classes.inputsContainerGrid}>
        <input
          id="password"
          name="password"
          className={classes.inputStyle}
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password" // this will disable autocomplete,
          // because the state is not updated if auto input is auto
          // completed until user clicks anywhere on the page
        />
        <div className={classes.inputsContainerGrid}>
          <div>
            <button
              className={
                sex === 'M' ? classes.btnFullBlue : classes.btnFullBlueNotChosen
              }
              onClick={(e) => {
                e.preventDefault()
                setSex('M')
              }}
            >
              Male
            </button>
          </div>
          <div>
            <button
              className={
                sex === 'F' ? classes.btnFullBlue : classes.btnFullBlueNotChosen
              }
              onClick={(e) => {
                e.preventDefault()
                setSex('F')
              }}
            >
              Female
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
