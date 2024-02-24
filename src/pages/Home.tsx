import Logo from '../components/Logo'
import Header from '../components/Header'
import style from './home.module.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.hero}>
        <Logo />
        <div>
          <h2 className={style.title}>
            Cuidando tu salud, transformando tu bienestar.
          </h2>
          <p className={style.subtitle}>
            Donde la atención médica y el confort se encuentran para ti.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
