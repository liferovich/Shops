import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, register } from '../features/AppSlice'

const Register = () => {
  const [emailLog, setEmailLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [passReg, setPassReg] = useState('')
  const dispatch = useDispatch()

  const onLogin = e => {
    dispatch(login({ email: emailLog, password: passLog }))
    e.preventDefault()
  }

  const onRegister = e => {
    dispatch(register({ email: emailReg, password: passReg }))
    e.preventDefault()
  }

  return (
    <>
      <div className='tt-breadcrumb'>
        <div className='container container-lg-fluid'>
          <ul></ul>
        </div>
      </div>
      <div className='section-indent-extra'>
        <div className='container container-lg-fluid'>
          <div className='section__wrapper02 tt-contact-wrapper pt-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className="section-title"><div className='section-title__02'>Авторизация</div></div>
                <form
                  id='loginform'
                  className='form-default'
                  onSubmit={onLogin}
                >
                  <div className='form-group'>
                    <input
                      type='text'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Email*'
                      value={emailLog}
                      onChange={e => setEmailLog(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      className='form-control'
                      placeholder='Пароль*'
                      required
                      value={passLog}
                      onChange={e => setPassLog(e.target.value)}
                    />
                  </div>
                  <div className='form-group text-center'>
                    <button className='tt-btn btn__color01' type='submit'>
                      <span className='icon-lightning'></span>Войти
                    </button>
                  </div>
                </form>
              </div>
              <div className='col-md-6'>
              <div className="section-title"><div className='section-title__02'>Регистрация</div></div>
                <form
                  id='registerform'
                  className='form-default'
                  onSubmit={onRegister}
                >
                  <div className='form-group'>
                    <input
                      type='text'
                      id='firstname'
                      name='firstname'
                      className='form-control'
                      placeholder='Имя*'
                      value=''
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='lastname'
                      name='lastname'
                      className='form-control'
                      placeholder='Фамилия*'
                      value=''
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='middlename'
                      name='middlename'
                      className='form-control'
                      placeholder='Отчество*'
                      value=''
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='date'
                      id='date'
                      name='date'
                      className='form-control'
                      placeholder='Дата рождения'
                      value=''
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Email*'
                      value={emailReg}
                      onChange={e => setEmailReg(e.target.value)}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      className='form-control'
                      placeholder='Пароль*'
                      required
                      value={passReg}
                      onChange={e => setPassReg(e.target.value)}
                    />
                  </div>
                  <div className='form-group text-center'>
                    <button className='tt-btn btn__color01' type='submit'>
                      <span className='icon-lightning'></span>Зарегистрироваться
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
