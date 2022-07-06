
import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import Header from './header'

import classes from './layout.module.css'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({
    children,
  }) => {
    return (
        <>
            <Header />
            <main className={classes.main}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout