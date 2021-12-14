import { Link } from 'react-router-dom'
import classes from './styles.module.scss'

export default function Home() {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>CRUD SQL</h1>
          <p className={classes.subtitle}>Node.js + React with TypeScript</p>
        </div>
        <div className={classes.descriptionRoot}>
          <div className={classes.descriptionContainer}>
            <p
              className={[classes.description, classes.descriptionTitle].join(
                ' '
              )}
            >
              Welcome to the CRUD SQL TUTORIAL
            </p>
            <p
              className={classes.description}
              style={{ fontWeight: 'bold', marginBottom: 30 }}
            >
              Node.js + React with TypeScript
            </p>
            <p className={classes.description}>
              In addition to implementing the SQL API to serve the frontend,
              both in typeScript, I had in mind to demonstrate how to organize
              the structure and folders of a project, including the concept of
              separation of services that I learned with Angular and found it an
              amazing ideia to bring to my React projects.
            </p>
            <p className={classes.description} style={{ marginBottom: 40 }}>
              😃 I will be happy to read your feedback and answer your
              questions.
            </p>
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <div
                className={[classes.description, classes.linkBtnBlue].join(' ')}
              >
                ENTER THE APP
              </div>
            </Link>
            <p className={classes.linkBtnBlue}>
              <a
                className={[classes.description, classes.link].join(' ')}
                href="https://github.com/maxwilsonpereira/Tax_App_Frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tutorial on YouTube
              </a>
            </p>
            <p className={classes.linkBtnBlue}>
              <a
                className={[classes.description, classes.link].join(' ')}
                href="https://github.com/maxwilsonpereira/Tax_App_Frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>
            </p>
            <p className={classes.finalSentence}>
              Nosce you ipsum! Carpe diem! Eudaimonia! Memento mori! Love fati!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sejam bem vindos ao tutorial
// CRUD SQL - Node.js + React with TypeScript.
// Além da implementação da API em SQL para servir o frontend, ambos em typeScript, procurei demonstrar como organizar a estrutura e os folders de um projeto, tranzendo, inclusive, o conceito de separação de serviços que eu aprendi com o Angular e achei maravilhoso.

// Video tuturial no YouTube:
// Repositório no GitHub:

// Vou ficar feliz em ler a opinião de vocês e responder as suas perguntas.

// Nosce te ipsum! Carpe diem! Eudaimonia! Memento mori! Amor fati!
