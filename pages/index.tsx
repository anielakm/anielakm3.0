import type { NextPage } from 'next'
import Head from 'next/head'
import GlobalStyle from 'assets/globalStyles'
import { Navbar } from 'components/organisms/Navbar/Navbar'
import { ThemeProvider } from 'styled-components'
import LightTheme from 'assets/theme'
import MenuProvider from 'context/menuContext'
import LanguageProvider from 'context/languageContext'
import { Hero } from 'components/organisms/Hero/Hero'
import { Technologies } from 'components/molecules/Technologies/Technologies'
import { Skills } from 'components/organisms/Skills/Skills'
import { Portfolio } from 'components/organisms/Portfolio/Portfolio'
import { Contact } from 'components/molecules/Contact/Contact'
import { Footer } from 'components/molecules/Footer/Footer'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react'
const AOS = require('aos');

const Home: NextPage = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <ThemeProvider theme={LightTheme}>
      <LanguageProvider>
        <Head>
          <title>Aniela Katana - Matłok | Front-end Developer</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <GlobalStyle />

        <MenuProvider>
          <Navbar />
        </MenuProvider>
        <Hero />
        <Technologies />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default Home
