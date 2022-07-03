import Footer from './footer'
import Header from './header'

import classes from './layout.module.css'

type Props = {
    children: React.ReactNode
}

const Layout = ({children} : Props) => {
    return (
        <>
            <Header />
            <main className={classes.main}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout