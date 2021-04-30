import { useRef, useState } from 'react';
import {TextField, Button} from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);
  async function handleLogin() {
    const resp = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passRef.current?.value
      })
    });
    const json = await resp.json();
    setMessage(json);
  }

  return (
    <div>
      <Grid container spacing={2} direction='column' justify='center' alignItems='center'>
        <Grid item>
        <TextField id="email" label="Email" variant="outlined" />
        </Grid>
        <Grid item>
        <TextField id="password" label="Password" variant="outlined"/>
        </Grid>
        <Grid item>
        <Button
                variant="contained"
                color="primary"
                size='large'
                onClick={handleLogin}
              >Sign Up</Button>
        </Grid>
    </Grid>
    <br/>
    <br/>
      {JSON.stringify(message)}
      <br/><br/>
      <input type="text" placeholder="email" ref={emailRef} />
      <br/>
      <input type="password" placeholder="password" ref={passRef} />
      <br/>
      <br/>
      <button onClick={handleLogin}>Login</button>

    </div>
  );
}
