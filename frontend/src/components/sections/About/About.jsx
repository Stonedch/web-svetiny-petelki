import React from 'react';
import styles from './About.module.scss';
import image from 'assets/images/header-image.png';
import { Who } from './Who';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={image} />
                </div>
                <div className={styles.body}>
                    <p>
                        Lorem Ipsum - это текст-"рыба", часто используемый в
                        печати и вэб-дизайне. Lorem Ipsum является стандартной
                        "рыбой" для текстов на латинице с начала XVI века. В то
                        время некий безымянный печатник создал большую коллекцию
                        размеров и форм шрифтов, используя Lorem Ipsum для
                        распечатки образцов. Lorem Ipsum не только успешно
                        пережил без заметных изменений пять веков, но и
                        перешагнул в электронный дизайн. Его популяризации в
                        новое время послужили публикация листов Letraset с
                        образцами Lorem Ipsum в 60-х годах и, в более недавнее
                        время, программы электронной вёрстки типа Aldus
                        PageMaker, в шаблонах которых используется Lorem Ipsum.
                    </p>
                </div>
                <Who />
            </div>
        </section>
    );
};

export { About };
