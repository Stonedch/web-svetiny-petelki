import React, { useState, useEffect} from 'react';
import styles from './Questions.module.scss';
import { Item } from './Item';
import { API_URL } from 'http';

const Questions = () => {
    const [ questions, setQuestions] = useState(null);

    useEffect(() => {
        fetch(API_URL + 'questions/')
            .then(response => response.json())
            .then(response => setQuestions(response.results));
    }, []);

    return questions ? (
        <section className={styles.questions}>
            {questions.map((question) => (
                <Item title={question.title}>{question.body}</Item>
            ))}
        </section>
    ) : (
        null
    );
};

export { Questions };
