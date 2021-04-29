
import Head from 'next/head';
import React from 'react';
import {
  Typography,
} from '@material-ui/core';
import { Media, MediaContextProvider } from "../utils/media";
import withLocale from '../hocs/withLocale';
import Grid from '@material-ui/core/Grid';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ComboBox from '../components/ComboBox';
import SearchList from "../components/SearchList";
import Box from "@material-ui/core/Box";
import Pie from "../components/PieChart";
import CollapsibleTable from "../components/CollapsibleTable";
import { ThemeProvider } from '@material-ui/core/styles';
import themeContext from '../components/Theme';
import Bar from "../components/Bar";


function DIY() {

  const boxHeight = 30;

    return <React.Fragment>
      <Head>
        <title>
        Cases
        </title>
      </Head>
      <MediaContextProvider>
      <ThemeProvider theme={themeContext}>

        
        {/*Mobile */}
        <Media at='sm'>
        <Grid container spacing={3} direction="column" justify="center" alignItems="flex-start">
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Case summary</Typography>
          </Grid>
          <Grid item>
              <Pie/>
          </Grid>
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Costs over time</Typography>
          </Grid>
          <Grid item>
              <Bar/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
        <Grid item>
            <Typography variant="h3">Search cases</Typography>
          </Grid>
          <Grid item>
          <ComboBox/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h4">Recent searches</Typography>
          </Grid>
          <Grid item>
          <SearchList/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Cases</Typography>
          </Grid>
          <Grid item>
          <CollapsibleTable/>
          </Grid>
          
        </Grid>
        </Media>

        {/*Mobile */}
        <Media at='mo'>
        <Grid container spacing={3} direction="column" justify="center">
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Case summary</Typography>
          </Grid>
          <Grid item>
              <Pie/>
          </Grid>
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Costs over time</Typography>
          </Grid>
          <Grid item>
              <Bar/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
        <Grid item>
            <Typography variant="h3">Search cases</Typography>
          </Grid>
          <Grid item>
          <ComboBox/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h4">Recent searches</Typography>
          </Grid>
          <Grid item>
          <SearchList/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Cases</Typography>
          </Grid>
          <Grid item>
          <CollapsibleTable/>
          </Grid>
          
        </Grid>
        </Media>

        {/*Tablet */}
        <Media at='md'>
        <Grid container spacing={3} direction="column" justify="center">
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Case summary</Typography>
          </Grid>
          <Grid item>
              <Pie/>
          </Grid>
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Costs over time</Typography>
          </Grid>
          <Grid item>
              <Bar/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
        <Grid item>
            <Typography variant="h3">Search cases</Typography>
          </Grid>
          <Grid item>
          <ComboBox/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h4">Recent searches</Typography>
          </Grid>
          <Grid item>
          <SearchList/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Cases</Typography>
          </Grid>
          <Grid item>
          <CollapsibleTable/>
          </Grid>
          
        </Grid>
        </Media>

        {/*Desktop */}
        <Media at='lg'>
        <Grid container spacing={3} direction="column">
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Case summary</Typography>
          </Grid>
          <Grid item>
              <Pie/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Costs over time</Typography>
          </Grid>
          <Grid item>
              <Bar/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
        <Grid item>
            <Typography variant="h3">Search Cases</Typography>
          </Grid>
          <Grid item>
          <ComboBox/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h4">Recent searches</Typography>
          </Grid>
          <Grid item>
          <SearchList/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Cases</Typography>
          </Grid>
          <Grid item>
          <CollapsibleTable/>
          </Grid>
          
        </Grid>
        </Media>
        
        {/*4K & Greater*/}
        <Media greaterThanOrEqual='el'>
        <Grid container spacing={3} direction="column">
        <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Case summary</Typography>
          </Grid>
          <Grid item>
              <Pie/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Costs over time</Typography>
          </Grid>
          <Grid item>
              <Bar/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
        <Grid item>
            <Typography variant="h3">Search cases</Typography>
          </Grid>
          <Grid item>
          <ComboBox/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h4">Recent searches</Typography>
          </Grid>
          <Grid item>
          <SearchList/>
          </Grid>
          <Grid item>
            <Box style={{height:boxHeight}}></Box>
          </Grid>
          <Grid item>
            <Typography variant="h3">Cases</Typography>
          </Grid>
          <Grid item>
          <CollapsibleTable/>
          </Grid>
          
        </Grid>
        </Media>
        </ThemeProvider>
        </MediaContextProvider>
    </React.Fragment> 
}

export default DIY