import Link from 'next/link'

import classes from './header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>Alma</Link>
            </div>     
            <nav>
                <ul>
                    <li>
                        <Link href='/purchase'>Purchase</Link>
                    </li>
                    <li>
                        <Link href='/orders'>Orders</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header