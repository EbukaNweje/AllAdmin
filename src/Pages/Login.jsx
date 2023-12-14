import {useNavigate} from 'react-router-dom'

const Login = () => {
  const nav = useNavigate()

  const handleLogin = () =>{
    nav("/admin/dashboard")
  }
  return (
    <>
      <div>
        <h1 className='text-3xl'>Hi Login</h1>
      </div>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login