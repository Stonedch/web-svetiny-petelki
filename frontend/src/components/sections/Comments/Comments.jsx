import React from 'react';
import styles from './Comments.module.scss';
import { Comment } from './Comment';

const Comments = () => {
    return (
        <section className={styles.comments}>
            <div className={styles.content}>
                <Comment
                    mounth='янв'
                    day='17'
                    title='Lorem Ipsum'
                    username='Алексей Алексеевич'
                >
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века.
                </Comment>
                <Comment
                    mounth='янв'
                    day='17'
                    title='Lorem Ipsum'
                    username='Иван Иванович'
                >
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений
                    пять веков, но и перешагнул в электронный дизайн. Его
                    популяризации в новое время послужили публикация листов
                    Letraset с образцами Lorem Ipsum в 60-х годах и, в более
                    недавнее время, программы электронной вёрстки типа Aldus
                    PageMaker, в шаблонах которых используется Lorem Ipsum.
                </Comment>
                <Comment
                    mounth='янв'
                    day='17'
                    title='Lorem Ipsum'
                    username='Максим Максимович'
                >
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений
                    пять веков, но и перешагнул в электронный дизайн.
                </Comment>
            </div>
        </section>
    );
};

export { Comments };
