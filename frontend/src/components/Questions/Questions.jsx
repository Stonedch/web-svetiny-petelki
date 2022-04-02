import React, { useState, useEffect } from 'react';
import { QA } from '../Question';
import styles from './Questions.module.scss';
import { API_URL } from '../../http';

const Questions = () => {
    const [ data, setData] = useState(null);

    useEffect(() => {
        fetch(API_URL + 'questions/')
            .then(response => response.json())
            .then(response => setData(response.results));
    }, []);

    return data ? (
        <div className={[styles.components, styles.content, styles.screen].join(' ')}>
            {data.map(question => <QA title={question.title}>{question.body}</QA>)}
        </div>
    ) : null;
}

export { Questions };

