import { user } from '../../models'
import classes from './userCard.styles.module.scss'
// npm i react-icons
// https://react-icons.github.io/react-icons/
import { FiTrash2 } from 'react-icons/fi'
import femaleAvatar from '../../assets/images/female-avatar.png'
import maleAvatar from '../../assets/images/male-avatar.png'

interface Props {
  user: user
  idCurUser?: number
  fillInputsHandler: (user: user) => void
  deleteUserHandler: (id: number) => void
}

export default function UserCard({
  user,
  idCurUser,
  fillInputsHandler,
  deleteUserHandler,
}: Props) {
  return (
    <div className={classes.cardRoot}>
      <div
        className={classes.iconTrash}
        onClick={() => deleteUserHandler(user.id!)}
      >
        <FiTrash2 />
      </div>
      <div
        className={[
          classes.card,
          idCurUser === user.id && classes.userSelected,
        ].join(' ')}
        onClick={() => {
          fillInputsHandler(user)
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      >
        <div className={classes.imgAndName}>
          <img
            className={classes.avatar}
            src={user.sex === 'F' ? femaleAvatar : maleAvatar}
            alt="user-avatar"
          />
          <div style={{ overflow: 'hidden' }}>
            <p className={classes.fontName}>
              {user.firstname} {user.surname}
            </p>
          </div>
        </div>

        <p className={classes.fontBirth}>
          {user.birthday.substring(4, 6)}/{user.birthday.substring(6, 8)}/
          {user.birthday.substring(0, 4)}
        </p>
        <p className={classes.fontEmail}>{user.email}</p>
      </div>
    </div>
  )
}
