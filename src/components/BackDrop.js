import React from 'react';
import ReactDOM from 'react-dom';
import styles from './BackDrop.module.css';



const BackDrop = () => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<div className={styles.backdrop}></div>, document.getElementById("override"))}
        </React.Fragment>
    );
};

export default BackDrop;