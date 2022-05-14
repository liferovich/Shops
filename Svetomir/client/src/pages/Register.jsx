import { useState } from 'react'

const Register = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    phone: '',
    comment: '',
    index: '',
    city: '',
    street: '',
    build: '',
    flat: ''
  })

  const changeHandler = e => {
    const name = e.target.name
    setData({ ...data, [`${name}`]: e.target.value })
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
            <div className='section-title max-width-01'>
              <div className='section-title__02'>Регистрация</div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <form id='registerform' className='form-default'>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='firstname'
                      name='firstname'
                      className='form-control'
                      placeholder='Имя*'
                      value={data.firastname}
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='lastname'
                      name='lastname'
                      className='form-control'
                      placeholder='Фамилия*'
                      value={data.lastname}
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='middlename'
                      name='middlename'
                      className='form-control'
                      placeholder='Отчество*'
                      value={data.middlename}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='date'
                      id='date'
                      name='date'
                      className='form-control'
                      placeholder='Дата рождения'
                      value={data.date}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Email*'
                      value={data.email}
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      className='form-control'
                      placeholder='Пароль*'
                      value={data.password}
                      required
                      onChange={changeHandler}
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
