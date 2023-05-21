import { Link } from "react-router-dom";
import { Title } from "../title/title";
import { SwitchDisable } from "../checkbox/checkbox";

export function Login() {


  return (
    <form className='login' action="" method="post">
      <Title title="Вход в личный кабинет" desc="" />
      <div className='login__text-items'>
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Почта" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Пароль" />
      </div>
      <SwitchDisable id="1" title="Запомнить меня"/>

      <button type="submit" className="login__btn">Войти</button>
      <div className="login__row-links">
        <Link to={`/register`}><p className="login__reg" >Регистрация</p></Link>
        <Link to={`/recover`}><p className="login__reg" >Восстановить пароль</p></Link>
      </div>
    </form>
  );
}



export function Register() {
  return (
    <form className='login' action="" method="post">
      <Title title="Регистрация" desc="" />
      <div className='login__column'>
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Почта" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Пароль" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Повторить пароль" />
      </div>
      <SwitchDisable id="1" title="Я согласен с условиями обработки персональных данных."/>
      <SwitchDisable id="2" title="Я хочу получать оповещения о проведении акций на почту."/>

      <button type="submit" className="login__btn">Зарегистрироваться</button>
      <div className="login__row-links">
        <Link to={`/login`}><p className="login__reg" >Вход в личный кабинет</p></Link>
        <Link to={`/recover`}><p className="login__reg" >Восстановить пароль</p></Link>
      </div>
    </form>
  );
}


export function Recover() {
  return (
    <form className='login' action="" method="post">
      <Title title="Восстановление пароля" desc="" />
      <div className='login__column'>
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Почта" />
        <input type="text" maxLength={20} autoComplete="off" className="login__text_item" placeholder="Проверочный код" />
      </div>
      <button type="submit" className="login__btn">Получить код на почту</button>
      <div className="login__row-links">
        <Link to={`/login`}><p className="login__reg" >Вход в личный кабинет</p></Link>
        <Link to={`/register`}><p className="login__reg" >Регистрация</p></Link>
      </div>
    </form>
  );
}