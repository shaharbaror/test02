import React from "react";
import Card from "./UI/Card";
import ReactDOM from 'react-dom';

import styles from './Win.module.css';

const Win = (props) => {

    return <React.Fragment>
        {ReactDOM.createPortal(<Card className={styles.box} > you loose</Card>, document.getElementById('override'))}
    </React.Fragment>
}

export default Win;