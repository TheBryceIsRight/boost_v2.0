import { HomePage } from '../containers/Homepage';
import React from 'react'
import Head from 'next/head'

const Index: React.FC = () => {

    return (
      <React.Fragment>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <HomePage/>
      </React.Fragment>
    )
  }


export default Index;