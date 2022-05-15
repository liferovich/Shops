import { NavLink } from "react-router-dom";

const Register = () => {
    return(<>
     <div className='breadcrumb-area section-space--half'>
        <div className='container wide'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='breadcrumb-wrapper breadcrumb-bg'>
                <div className='breadcrumb-content'>
                  <h2 className='breadcrumb-content__title'>Вход/Регистрация</h2>
                  <ul className='breadcrumb-content__page-map'>
                    <li>
                    <NavLink to="/">Главная</NavLink>
                    </li>
                    <li className='active'>Вход/Регистрация</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-wrapper">
                        <div className="page-content-wrapper">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6">
                                    <form action="login-register.html#">

                                        <div className="login-form">
                                            <h4 className="login-title">Авторизация</h4>

                                            <div className="row">
                                                <div className="col-md-12 col-12">
                                                    <label>Email*</label>
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="col-12">
                                                    <label>Пароль</label>
                                                    <input type="password" placeholder="Password" />
                                                </div>
                                                <div className="col-sm-6">

                                                    <div className="check-box d-inline-block ml-0 ml-md-2">
                                                        <input type="checkbox" id="remember_me" />
                                                        <label htmlFor="remember_me">Запомнить</label>
                                                    </div>

                                                </div>

                                                <div className="col-sm-6 text-left text-sm-right">
                                                    <a href="login-register.html#" className="forget-pass-link">Забыли пароль?</a>
                                                </div>

                                                <div className="col-md-12">
                                                    <button className="register-button">Вход</button>
                                                </div>

                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                                    <form action="login-register.html#">

                                        <div className="login-form">
                                            <h4 className="login-title">Регистрация</h4>

                                            <div className="row">
                                                <div className="col-md-6 col-12 mb-20">
                                                    <label>Имя</label>
                                                    <input type="text" placeholder="Имя" />
                                                </div>
                                                <div className="col-md-6 col-12 mb-20">
                                                    <label>Фамилия</label>
                                                    <input type="text" placeholder="Фамилия" />
                                                </div>
                                                <div className="col-md-12 mb-20">
                                                    <label>Email*</label>
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="col-md-6 mb-20">
                                                    <label>Пароль</label>
                                                    <input type="password" placeholder="Пароль" />
                                                </div>
                                                <div className="col-md-6 mb-20">
                                                    <label>Повторите пароль</label>
                                                    <input type="password" placeholder="Повторите пароль" />
                                                </div>
                                                <div className="col-12">
                                                    <button className="register-button mt-0">Регистрация</button>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Register;