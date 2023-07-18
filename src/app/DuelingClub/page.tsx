'use client'
import Navbar from '@/components/Navbar'
import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import SoloorDuo from '../../../public/assets/Duel/SoloorDuo.jpg'
import Ranking from '../../../public/assets/Duel/Ranking.jpg'
import Selection from '../../../public/assets/Duel/Selection.jpg'
import Footer from '@/components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d0604',
      light: '#dddddd',
      dark: '#EDC865',
    },
    secondary: {
      main: '#EDC865',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      color: '#EDC865',
      fontSize: '4rem',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h2: {
      fontSize: '3.25rem',
      color: '#EDC865',
    },
    h3: {
      fontSize: '2.5rem',
      color: '#EDC865',
    },
    h4: {
      fontSize: '1.75rem',
      color: '#EDC865',
    },
    h5: {
      fontSize: '1rem',
      color: '#EDC865',
    },
    h6: {
      color: '#EDC865',
      fontSize: '0.75rem',
      '@media (max-width: 768px)': {
        fontSize: '0.75rem',
      },
    },
    body1: {
      color: '#777777',
      fontSize: '1rem',
    },
  },
});

function page() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const imageSize = isMobile ? '300' : '400'

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Dueling Club
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        What is it?
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        The Dueling Club is HPMA versions of PVP. You can either participate in 1v1 or 2v2.
      </Typography>
      <Grid container spacing={4} sx={{ px: isMobile ? '10vw' : '2vw' }}>
        <Grid xs={12} md={2} />
        <Grid item xs={12} md={4}>
          <Image width={imageSize} height={imageSize} src={SoloorDuo.src} alt='Solo or Duo' style={{ marginInline: 'auto', }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='h3'>Solo or Duo</Typography>
          <Typography variant='h4'>You can either play solo in 1v1 or with a parter in 2v2</Typography>
        </Grid>
        <Grid xs={12} md={2} />
        <Grid xs={12} md={2} />
        <Grid item xs={12} md={4}>
          <Image width={imageSize} height={imageSize} src={Ranking.src} alt='Ranking up' style={{ marginInline: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant='h3'>Ranking Up</Typography>
          <Typography variant='h4'>In both solo and duos by winning, you gain points. After reaching certain point thresholds, you rank up! It goes in this order,<br />
            Novice, Bronze, Silver, Gold, Platinum, Diamond, Grand Master, Magic Awakened</Typography>
        </Grid>
        <Grid xs={12} md={2} />
      </Grid>

      <Typography variant='h1' sx={{ textAlign: 'center', my: '3vh' }}>
        Grand Master Dueling Club
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        What is it?
      </Typography>
      <Typography variant='h4' sx={{ textAlign: 'center', mx: '5vw', mb: '3vh' }}>
        The GM Dueling Club is for those who make it into Grand Masters and reach a certain predetermined rating. For this season in 2023,
        it is 8100. If you reach that point, you will be invited into the GM Dueling Club.
      </Typography>
      <Grid container spacing={4}>
        <Grid xs={12} md={2} />
        <Grid item xs={12} md={4}>
          <Image width={imageSize} height={imageSize} src={Selection.src} alt='Solo or Duo' style={{ marginInline: 'auto' }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ mx: isMobile ? '7vw' : '' }}>
          <Typography variant='h3' sx={{ mb: '2vh' }}>Deck Selection</Typography>
          <Typography variant='h4'>
            In the GM Dueling Club, you are required to make 3 decks. After you match with someone, each player will ban one deck and then
            choose one from the remaining two. Theoretically, as long as you have two decks you are comfortable playing, the third wont matter since you can just choose one of the two.
          </Typography>
        </Grid>
        <Grid xs={12} md={2} />
      </Grid>
      <Footer />
    </ThemeProvider>
  )
}

export default page

