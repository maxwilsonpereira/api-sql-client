import { useState, useEffect } from 'react'
import { user } from '../../models'
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  deletAllUsers,
} from '../../services/users'
import classes from './styles.module.scss'
import classesUserCard from './userCard.styles.module.scss'
import {
  ThreeDotsLoading,
  ClockBallsLoading,
} from '../../components/UI/loadingIndicators'
import UserCard from './userCard'
import Form from './form'

export default function Home() {
  const [id, setId] = useState<number>()
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [usersList, setUsersList] = useState<user[]>([])
  const [sex, setSex] = useState('')
  const [currentUser, setCurrentUser] = useState<user>()
  const [allFieldsFilled, setAllFieldsFilled] = useState<boolean>()
  const [atLeastOneFiledIsFilled, setatLeastOneFiledIsFilled] =
    useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const [loadingUsers, setLoadingUsers] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setLoadingUsers(true)
    getUsers()
      .then((res) => {
        setUsersList(
          res.data.sort((a: user, b: user) => (a.id! < b.id! ? 1 : -1))
        )
        setLoadingUsers(false)
      })
      .catch(() => {
        setMessage('Oops! We had a problem! Please try again later.')
        setLoadingUsers(false)
      })
  }, [])

  useEffect(() => {
    setId(undefined)
    setFirstname('')
    setSurname('')
    setBirthday('')
    setEmail('')
    setSex('')
    setPassword('')
  }, [usersList])

  useEffect(() => {
    setMessage('')
    if (
      firstname.length === 0 ||
      surname.length === 0 ||
      birthday.length === 0 ||
      email.length === 0 ||
      sex.length === 0 ||
      password.length === 0
    )
      setAllFieldsFilled(false)
    else setAllFieldsFilled(true)

    const lengthTogether =
      firstname + surname + birthday + email + sex + password
    if (lengthTogether.length > 0) setatLeastOneFiledIsFilled(true)
    else setatLeastOneFiledIsFilled(false)
  }, [firstname, surname, birthday, email, sex, password])

  const fillInputsHandler = (cur: user) => {
    setCurrentUser(cur)
    setId(cur.id)
    setFirstname(cur.firstname)
    setSurname(cur.surname)
    setBirthday(cur.birthday.substring(0, 10))
    setEmail(cur.email)
    setSex(cur.sex)
    setPassword(cur.password)
  }

  const checkInputsHandler = async (params: user) => {
    if (currentUser) {
      const userAux: user = { ...currentUser }
      const paramsAux: user = { ...params }
      delete userAux.id
      delete paramsAux.id
      // for this comparison to work, the keys of both objects
      // must be in the same order, for this reason I have removed
      // the ids
      if (JSON.stringify(userAux) === JSON.stringify(paramsAux)) {
        setMessage('No changes were made!')
        return false
      } else {
        return true
      }
    } else return true
  }

  const createUserHandler = async () => {
    setLoading(true)
    setMessage('')
    if (atLeastOneFiledIsFilled && !allFieldsFilled && usersList.length === 0) {
      if (sex.length !== 0) setMessage('All fields are required!')
      else setMessage('All fields are required, including sex!')
      setLoading(false)
      return
    }
    const noUsers: boolean = usersList.length === 0 && !atLeastOneFiledIsFilled
    const params = {
      firstname: noUsers ? 'Max Wilson' : firstname,
      surname: noUsers ? 'Pereira' : surname,
      birthday: noUsers ? '🤐🤐0310' : birthday,
      email: noUsers ? 'maxwilsonpereira@gmail.com' : email,
      sex: noUsers ? 'M' : sex,
      password: noUsers ? 'password' : password,
    }
    const check = await checkInputsHandler(params)
    if (check) {
      createUser(params).then((res) => {
        if (res.data.error) {
          setMessage(res.data.message)
          setLoading(false)
        } else {
          const curUser: user = params
          curUser.id = res.data.id
          setUsersList(
            [...usersList, curUser].sort((a: user, b: user) =>
              a.id! < b.id! ? 1 : -1
            )
          )
          setLoading(false)
        }
      })
    } else {
      setLoading(false)
    }
  }

  const updateUserHandler = async () => {
    setLoading(true)
    const params = {
      id: id,
      firstname: firstname,
      surname: surname,
      birthday: birthday.substring(0, 10),
      email: email,
      sex: sex,
      password: password,
    }
    const check = await checkInputsHandler(params)
    if (check) {
      updateUser(params).then((res) => {
        if (res.data.error) {
          setMessage(res.data.message)
          setLoading(false)
        } else {
          setUsersList(
            usersList.map((cur: user) => {
              return cur.id === params.id ? params : cur
            })
          )
          setTimeout(() => {
            setMessage('User updated!')
            setLoading(false)
          }, 100)
        }
      })
    } else {
      setLoading(false)
    }
  }

  const deleteUserHandler = (id: number) => {
    deleteUser(id).then(() => {
      clearCurrentUserHandler()
      setUsersList(
        usersList.filter((cur: user) => {
          return cur.id !== id
        })
      )
      setMessage('')
    })
  }

  const clearCurrentUserHandler = () => {
    setCurrentUser({
      firstname: '',
      surname: '',
      birthday: '',
      email: '',
      sex: '',
      password: '',
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.inputAndBtnsContainer}>
        <p className={classes.title}>
          {!loadingUsers && (
            <>
              Add{' '}
              {usersList.length === 0 && !atLeastOneFiledIsFilled && 'Max or'} a
              new user
              {usersList.length > 0 &&
                ' or click on an existing one to edit it'}
              :
            </>
          )}
        </p>

        <Form
          firstname={firstname}
          surname={surname}
          birthday={birthday}
          email={email}
          password={password}
          sex={sex}
          setFirstname={setFirstname}
          setSurname={setSurname}
          setBirthday={setBirthday}
          setEmail={setEmail}
          setPassword={setPassword}
          setSex={setSex}
        />

        <div className={classes.inputsBtnsContainerGrid}>
          <div>
            <button
              className={[
                classes.btnBorder,
                classes.btnGreenBorder,
                !atLeastOneFiledIsFilled &&
                  usersList.length !== 0 &&
                  classes.btnDisabled,
              ].join(' ')}
              onClick={
                allFieldsFilled || usersList.length === 0
                  ? createUserHandler
                  : sex.length !== 0
                  ? () => setMessage('All fields are required !')
                  : () => setMessage('All fields are required, including sex!')
              }
            >
              {loadingUsers ? (
                <div className={classes.loadingInsideBtn}>
                  <ThreeDotsLoading color="greenColor" />
                </div>
              ) : (
                <>
                  Add{' '}
                  {usersList.length === 0 && !atLeastOneFiledIsFilled
                    ? 'Max'
                    : 'user'}
                </>
              )}
            </button>
          </div>
          <div>
            <button
              className={[
                classes.btnBorder,
                classes.btnBlueBorder,
                !id && classes.btnDisabled,
              ].join(' ')}
              onClick={
                allFieldsFilled
                  ? updateUserHandler
                  : sex.length !== 0
                  ? () => setMessage('All fields are required!')
                  : () => setMessage('All fields are required, including sex!')
              }
            >
              Update
            </button>
          </div>
          <div>
            <button
              className={[
                classes.btnBorder,
                classes.btnRedBorder,
                !usersList.length && classes.btnDisabled,
              ].join(' ')}
              onClick={() =>
                deletAllUsers(setUsersList, clearCurrentUserHandler, setMessage)
              }
            >
              Delete All
            </button>
          </div>
        </div>
        <div
          style={{
            color: 'darkred',
            height: 15,
          }}
        >
          {loading ? (
            <ThreeDotsLoading />
          ) : (
            <p className={classes.messageToUser}>{message}</p>
          )}
        </div>
      </div>

      <hr className={classes.horizontalLine} />

      <div className={classesUserCard.userCardsContainer}>
        {loadingUsers && <ClockBallsLoading />}
        {usersList.map((cur: user, index: number) => (
          <UserCard
            key={cur.id || index}
            user={cur}
            idCurUser={id}
            fillInputsHandler={fillInputsHandler}
            deleteUserHandler={deleteUserHandler}
          />
        ))}
      </div>
    </div>
  )
}
