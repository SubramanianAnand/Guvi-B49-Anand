import { useNavigate } from 'react-router-dom';
import { usernameValidator, passwordValidator } from '../Components/RegexValidator';


function Login(props) {
    
    const navigate = useNavigate();

    const [input, setInput] = useState({username:"", password:""})

    const [errorMessage, seterrorMessage] = useState('');

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }
    const  formSubmitter = (e) => {
        e.preventDefault()

        if(!usernameValidator(input.username))
        return seterrorMessage('Please enter valid Username')

        if(!passwordValidator(input.password))
        return seterrorMessage('Please enter valid Password')

        if(input.username !== 'admin@a.com' || input.password !== 'Password@1') 
        return  seterrorMessage('Invalid Username or Password')
        navigate.push('/')
    }

  return (
    <>
     <form className="login" onSubmit={formSubmitter}>
        {errorMessage.length > 0 && 
            <div style={{marginBottom: "10px", color: "red"}}>
                {errorMessage}
            </div>
        }
  <input type="email" placeholder="Username" onChange={handleChange}/>
  <input type="password" placeholder="Password" onChange={handleChange}/>
  <button>Login</button>
</form>

    </>
  )
}

export default Login