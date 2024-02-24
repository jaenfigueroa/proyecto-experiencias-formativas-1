import logo from '/logo.png'
import style from './logo.module.css'

const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <img src={logo} className={style.logo} />
    </div>
  )
}

export default Logo
