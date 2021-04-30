
import Head from 'next/head';
import React, {useRef, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import {
  Button,
  Card,
  Grid, 
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import {
  TextField,
} from 'formik-material-ui';

import Box from '@material-ui/core/Box';




  interface Values {
    email: string;
  }


  const ranges = [
    {
      value: 'none',
      label: 'None',
    },
    {
      value: '0-20',
      label: '0 to 20',
    },
    {
      value: '21-50',
      label: '21 to 50',
    },
    {
      value: '51-100',
      label: '51 to 100',
    },
  ];


function Login() {

  const [message, setMessage] = useState<any>(null);
  async function handleLogin(emailValue:string, passwordValue:string) {
    const resp = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue
      })
    });
    const json = await resp.json();
    setMessage(json);
  }

  const NewForm = () => (
    <Formik
      initialValues={{
        email: '',
        password: '',
        select: 'none',
        tags: [],
        rememberMe: true,
        date: new Date(),
        time: new Date(),
        dateTime: new Date(),
      }}
      validate={values => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
        handleLogin(values.email, values.password);
      }}
      render={({submitForm, isSubmitting}) => (
          <Form>
            <Box margin={1}>
              <Field
                component={TextField}
                name="name"
                type="text"
                label="Name"
                variant='outlined'
                // ref={nameRef}
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
                variant='outlined'
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
                variant='outlined'

              />
            </Box>
            
            <br/>
            <Box margin={1}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Sign Up
              </Button>
            </Box>
          </Form>
      )}
    />
  );

    
    return <div><div><React.Fragment>
      <Head>
        <title>
        Form Testing
        </title>
      </Head>

    <Grid container spacing={2} direction='column' justify='center' alignItems='center'>
        <Grid item>
        <Card>
            <NewForm/>
        </Card>
        </Grid>
        <Grid item>
            <Typography variant='h4'>Backend Output</Typography>
        </Grid>
        <Grid item>
        
        </Grid>
    </Grid>

      
      
    </React.Fragment> 
    </div>
    </div>

  }


export default Login