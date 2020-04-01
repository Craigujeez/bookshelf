/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx} from '@emotion/core';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import '@reach/dialog/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import VisuallyHidden from '@reach/visually-hidden';
import {Button, Input, CircleButton, Dialog, FormGroup} from './components/lib';
import {Logo} from './components/logo';

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }} 
      onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </div>
      <div>
        <Button type="submit">{buttonText}</Button>
      </div>
    </form>
  )
}

function Modal({button, label, children}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {React.cloneElement(button, {onClick: () => setIsOpen(true)})}
      <Dialog aria-label={label} isOpen={isOpen}>
        <div css={{display: 'flex', justifyContent: 'flex-end'}}>
          <CircleButton onClick={() => setIsOpen(false)}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </div>
        {children}
      </Dialog>
    </>
  )
}

function App() {
  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }


  return (
    <div 
        css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
        }} 
    >
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div 
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}>
        <Modal label="Login form" button={<Button>Login</Button>}>
          <h3 css={{textAlign: 'center', fontSize: '2em'}}>Login</h3>
          <LoginForm onSubmit={login} buttonText="Login" />
        </Modal>
        <Modal
          label="Registration form"
          button={<Button variant="secondary">Register</Button>}
        >
          <h3 css={{textAlign: 'center', fontSize: '2em'}}>Register</h3>
          <LoginForm onSubmit={register} buttonText="Register" />
        </Modal>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))