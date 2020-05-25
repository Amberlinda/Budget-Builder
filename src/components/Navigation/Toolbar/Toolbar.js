import React from 'react';
import {Link} from 'react-router-dom';
import css from './Toolbar.module.css';

const toolbar = () => {

    return(
        <header className={css.Toolbar}>
            <div className={css.Logo}>logo</div>
            <nav className={css.Navigation}>
                <ul>
                    <li><Link to='/'>Budget builder</Link></li>
                    <li><Link to='/budgets'>Budgets</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default toolbar;