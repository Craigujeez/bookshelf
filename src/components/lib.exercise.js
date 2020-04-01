import styled from '@emotion/styled'
import {Dialog as ReachDialog} from '@reach/dialog'

// 🐨 Feel free to create as many reusable styled components here as you'd like
// 💰 in my finished version I have: Button, Input, CircleButton, Dialog, FormGroup

// 💰 I'm giving a few of these to you:
const buttonVariants = {
  primary: {
    background: "#3f51b5",
    color:'white',
  },
  secondary: {
    background: "#f1f2f7",
    color:'#434449',
  }
}
const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({variants = 'primary' }) => buttonVariants[variants],
)
const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
})

const Input = styled.input({
  borderRadius: '3px',
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
  padding: '8px 12px',
})

const H3 = styled.h3({
  textAlign: 'center', 
  fontSize: '2em',
})

const Form = styled.form({
  display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  '@media (max-width: 991px)': {
    width: '100%',
    margin: '10vh auto',
  },
})

const DialogueDiv = styled.div({
  display: 'flex', 
  justifyContent: 'flex-end',
})

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

export {CircleButton, Button, Input, Dialog, FormGroup, H3 , Form, DialogueDiv}
