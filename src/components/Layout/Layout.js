import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

// import css from './Layout.module.css';

const layout = props => (

    <React.Fragment>
        <Toolbar/>
        <div style={{marginTop: '70px'}}>{props.children}</div>
    </React.Fragment>
);

export default layout;

