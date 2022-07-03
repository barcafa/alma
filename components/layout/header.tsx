import Link from 'next/link'

import classes from './header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <Link href='/'>
                Alma
            </Link>
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