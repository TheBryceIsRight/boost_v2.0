import React from 'react';
import Link from 'next/link';
import {TextField, Button, Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';

export function HomePage() {
  return (
    <React.Fragment>
    <Grid container spacing={4} direction='column' justify='center' alignItems='center'>
      <Grid item>
      <Typography variant='h3'>API Testing</Typography>
      </Grid>
      <Grid item>
      <Link href="/people" passHref>
      <Button
              variant="contained"
              color="primary"
              size='large'
            >People</Button>
          </Link>
      </Grid>
      <Grid item>
      <Link href="/vehicles" passHref>
      <Button
              variant="contained"
              color="secondary"
              size='large'
            >Vehicles</Button>
          </Link>
      </Grid>
      </Grid>
      </React.Fragment>


  );
}
