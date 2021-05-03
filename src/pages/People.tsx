import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import fetch from 'isomorphic-unfetch';
import LineChart from '../../components/LineChart';
import LineChart2 from '../../components/LineChart2';
import themeContext from '../../components/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react'


export default function People({ list }: any) {

  const renderTable = (list.map((row:any) => (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="right">{row.email}</TableCell>
      <TableCell align="right">{row.firstName}</TableCell>
      <TableCell align="right">{row.lastName}</TableCell>
    </TableRow>
  )));

  return (
    <ThemeProvider theme={themeContext}>
    <Grid container spacing={6} direction='column'>
      <Grid item>
        <Typography variant='h3'>TCR/Discount</Typography>
      </Grid>
      <Grid item>
      <LineChart/>
        </Grid>
        <Grid item>
        <Typography variant='h3'>Total Discount Acceptance</Typography>
      </Grid>
        <Grid item>
      <LineChart2/>
        </Grid>
        <Grid item>
        <Typography variant='h3'>Current Users</Typography>
       </Grid>
        <Grid item>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTable}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
    </Grid>
    </ThemeProvider>
  );
}

People.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/people');
  const json = await response.json();
  return { list: json };
};

//other ways of rendering tables

          {/* {list.map((row:any) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
            </TableRow>
          ))} */}
          {/* {React.Children.map(list, row => (
            <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.firstName}</TableCell>
            <TableCell align="right">{row.lastName}</TableCell>
          </TableRow>
        ))} */}


