import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography, Container } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import React, {useState} from 'react';
import { array, boolean, mixed, number, object, string } from 'yup';
import { SignupDetail } from './SignupDetail';

const initialValues: SignupDetail = {
firstName: "",
lastName: "",
email: "",
password: "",
  acceptedTermsAndConditions: false
};


export default function SignupForm() {

    const [message, setMessage] = useState<any>(null);
    async function handleLogin(email:string, password:string) {
      const resp = await fetch('http://localhost:3000/api/signup', {
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
    }  


  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Account</Typography>
        <br/>
        <Formik
          validationSchema={
            object({
              firstName: string().required('Your first name is required').min(2).max(100),
              lastName: string().required('Your family name is required').min(2).max(100),
              email: string().required('Your email is required').min(5).max(100),
              acceptedTermsAndConditions: boolean().oneOf([true]),
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
              handleLogin(values.email, values.password)
              res("onSubmitHandler complete");
            }, 2000);
          })
        }}>
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="firstName" as={TextField} label="First Name" variant='outlined' />
                  <ErrorMessage name="firstName" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="lastName" as={TextField} label="Last Name" variant='outlined' />
                  <ErrorMessage name="lastName" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="email" as={TextField} label="Email" variant='outlined' />
                  <ErrorMessage name="email" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="password" type="password" as={TextField} label="Password" variant='outlined' />
                  <ErrorMessage name="password" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <FormGroup>
                  <MyCheckbox
                    name="acceptedTermsAndConditions"
                    label="Accept terms and conditions"
                  />
                  <ErrorMessage name="acceptedTermsAndConditions" />
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
