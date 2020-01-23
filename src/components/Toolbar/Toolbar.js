import React from 'react';

import Logo from './Logo/Logo'
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo/>
        <form className={classes.SearchForm} action="">
            <input className={classes.SearchInput}
                placeholder="What service do you want?"
                type="text" name="" id="" />
            <button className={classes.SearchButton} type="submit">Search</button>
        </form>
    </header>
)
export default toolbar;
