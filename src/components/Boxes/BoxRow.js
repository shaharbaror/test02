import React, { useRef, useEffect, useState } from 'react';
import Box from './Box';

import styles from './BoxRow.module.css';

const BoxRow = (props) => {
    const ChosenWord = props.chosenWord;
    const [words, setWords] = useState('');
    const ref = useRef(null);

    const [hasSubmit, setHasSubmit] = useState(false)
    const [isFocus, setIsFocus] = useState();


    useEffect(() => {
        if (document.activeElement !== ref.current && props.onFocus) {
            ref.current.focus();
            setIsFocus(true)
        }
    }, [isFocus, props.onFocus, props.isReset]);


    const handleKeyDown = event => {

        const keys = event.key;

        if ((keys >= 'a' && keys <= 'z') && words.trim().length < 5) {

            setWords(prevWord => {

                return prevWord + '' + keys.toString();

            });

            //console.log(words);
        } else if (keys === 'Backspace' && !hasSubmit) {

            setWords(chars => {

                return chars.substring(0, chars.length - 1);

            });

        } else if (keys === 'Enter' && words.length === 5) {

            if (words === ChosenWord.toString()) {
                console.log("You Win");


                props.won();

            } else {
                console.log("nope");
                props.loss();

            }
            setHasSubmit(true);
            props.onSubmit();
        }

    }

    function onFocusus() {
        setIsFocus(true);
    }
    function onBlurus() {
        setIsFocus(false);
    }

    useEffect(() => {
        setHasSubmit(false);
        setWords('');
    }, [props.isReset]);


    return (
        <div className={styles['box_body']} ref={ref} onFocus={props.onFocus ? onFocusus : null} onBlur={props.onFocus ? onBlurus : null} tabIndex={-1} onKeyDown={props.onFocus ? handleKeyDown : null}>

            <Box index={0} fullWord={ChosenWord} isCheck={hasSubmit} >{words[0]}</Box>
            <Box index={1} fullWord={ChosenWord} isCheck={hasSubmit} >{words[1]}</Box>
            <Box index={2} fullWord={ChosenWord} isCheck={hasSubmit} >{words[2]}</Box>
            <Box index={3} fullWord={ChosenWord} isCheck={hasSubmit} >{words[3]}</Box>
            <Box index={4} fullWord={ChosenWord} isCheck={hasSubmit} >{words[4]}</Box>

        </div>
    );
}

export default BoxRow;