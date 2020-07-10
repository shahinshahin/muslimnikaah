import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Comman';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/mainpage.css";
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/home');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
  const handleLogout = () => {    
    props.history.push('/login');
  }

  return (
    <div class="row h-100 justify-content-center align-items-center">
    <form class="col-md-9">
        <div class="AppForm shadow-lg">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <div class="AppFormLeft">
      Login<br /><br />
      <div class="form-group position-relative mb-4">
        Username<br />
        <input type="text" {...username}  autoComplete="new-password" />
        <i class="fa fa-user-o"></i>
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
        <i class="fa fa-user-o"></i>
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" class="btn btn-success btn-block shadow border-0 py-2 text-uppercase " value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
      <p class="text-center mt-5">
     Not registered?
                                    <span>
                                    <input type="button" onClick={handleLogout} value="Register Here" />
                                    Not registered?<a href onClick={handleLogout}>Register Here</a>
                                    </span>

                                </p>
 </div>
    </div>
    </div>
    </div>
    </form>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;