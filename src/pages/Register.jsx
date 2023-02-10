import React, { useContext, useState } from 'react'
// import UsersContext from '../context/Users/UsersContext';
import UserContext from '../contexts/Users/UserContext';

function Register(props) {
  const {showAlert} = props
  //------Context Specific Stuff, to grab all the constraints ------X
  const {postRegister,jsonRes} = useContext(UserContext);
  // console.log('the value of the contest is ',a.name);
  // const context = useContext(UsersContext)
  // console.log(context.a)
  //---------Start to create the state variables for particular module 'Register'------X
  const [register, setRegister] = useState({ username: '', email: '', password: '', cpassword: '', profession: '' });


  //--------Start to handle all the events or functions creationgs-------------X
  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Register the users, help of the context api of postRegister 
    try {
     await postRegister(register);
      console.log(jsonRes)
      showAlert(jsonRes.success,jsonRes.msg);
      setRegister({ username: '', email: '', password: '', cpassword: '', profession: '' });
    }
    catch (error) {
      console.log(error)

      setRegister({ username: register.username, email: register.email, password: '', cpassword: '', profession: '' });
    }
  }

  
  return (
    <>
      <div className="container my-3">
        <h2>Register to checking and getting more advantages <span className="text-danger">features</span> accessing</h2>

        <form method='POST' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Enter Your Username:</label>
            <input type="text" className="form-control" id="username" name="username" value={register.username} onChange={(e) => handleChange(e)} required minLength={5} placeholder="johndow23" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter Your Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={register.email} onChange={(e) => handleChange(e)} required minLength={7} placeholder="johndow23@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Enter Your Password:</label>
            <input type="password" className="form-control" id="password" name="password" value={register.password} onChange={(e) => handleChange(e)} required minLength={8} placeholder="johndow@23" />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Re-Enter Your Password:</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" value={register.cpassword} onChange={(e) => handleChange(e)} required minLength={8} placeholder="johndow@23" />
          </div>
          <div className="mb-3">
            <label htmlFor="profession" className="form-label">Enter Your Profession:</label>
            <input type="text" className="form-control" id="profession" name="profession" value={register.profession} onChange={(e) => handleChange(e)} minLength={5} placeholder="Student" />
          </div>

          <button type="submit" className="btn btn-danger">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register
