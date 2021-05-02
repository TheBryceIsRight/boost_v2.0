import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography, Container } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import React, {useState} from 'react';
import { array, boolean, mixed, number, object, string } from 'yup';
import { LoginDetail } from './LoginDetail';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

const initialValues: LoginDetail = {
email: "",
password: "",
};

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));



export default function FormDemo() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState<any>(null);
    async function handleLogin(email:string, password:string) {
      const resp = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const json = await resp.json();
      setMessage(json);
      console.log(json.message);
      if (json.message === 'Welcome back!') {
        setOpen(true);
      }
    }  
    
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

    setOpen(false);
    };

  return (
    <React.Fragment>
    <Card>
      <CardContent>
        <Typography variant="h4">New Account</Typography>
        <br/>
        <Formik
          validationSchema={
            object({
              email: string().required('Your email is required').min(5).max(100),
            })
          }
        initialValues={initialValues} onSubmit={(values, formikHelpers) => {
          return new Promise(res => {
            setTimeout(() => {
              console.log(values);
              console.log(formikHelpers);
              console.log('---------');
              console.log("Email test")
              console.log(values.email)
              handleLogin( values.email, values.password)
              res("onSubmitHandler complete");
            }, 2000);
          })
        }}>
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form>

              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="email" as={TextField} label="Email" variant='outlined' />
                  <ErrorMessage name="email" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="password" type='password' as={TextField} label="Password" variant='outlined' />
                  <ErrorMessage name="password" />
                </FormGroup>
              </Box>

              <Button variant='contained' color='primary' type="submit" disabled={isSubmitting || isValidating}>Submit</Button>

            <pre>{JSON.stringify(errors, null, 4)}</pre>
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success">
      Successfully logged in
    </Alert>
  </Snackbar>
  </React.Fragment>
  );
}

export interface MyCheckboxProps extends CheckboxProps {
  name: string;
  value?: string | number;
  label?: string;
}

export function MyCheckbox(props: MyCheckboxProps) {
  const [field] = useField({
    name: props.name,
    type: 'checkbox',
    value: props.value
  });
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={props.label}
    />
  );
}
