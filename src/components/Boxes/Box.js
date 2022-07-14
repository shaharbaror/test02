import React, { useEffect, useState } from 'react';

import classes from './Box.module.css';

const Box = (props) => {

    const [reaction, setReaction] = useState(classes.none);

    useEffect(() => {
        if (props.isCheck === true) {
            if (props.children === props.fullWord[props.index]) {
                setReaction(classes.right);
            } else if (props.fullWord.includes(props.children)) {
                setReaction(classes.close);
            }

        }
    }, [props.isCheck, props.children, props.index, props.fullWord])

    return <div className={`${classes.Box} ${props.isCheck && reaction}`} ><p>{props.children}</p></div>
}

export default Box;