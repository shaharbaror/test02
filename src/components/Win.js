import React from "react";
import Card from "./UI/Card";
import ReactDOM from 'react-dom';

import BackDrop from "./BackDrop";

import styles from './Win.module.css';

const Win = (props) => {

    const okClickHandler = () => {
        props.exitWin();
    }

    return <React.Fragment>
        <BackDrop />
        {ReactDOM.createPortal(<Card className={styles.box}>
            <p>You Win</p>
            <button type="button" onClick={okClickHandlerad} >ok</button>
        </Card>, document.getElementById('override'))}
    </React.Fragment>
}

export default Win;