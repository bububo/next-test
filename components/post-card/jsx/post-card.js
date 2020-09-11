import Link from 'next/link';
import styles from '../scss/post-card.module.scss';

export const PostCard = ({ title, body }) => {
    return (
        <>
            <h1 className={styles.title}>{title}</h1>

            <p>{body}</p>
            <button type="button" onClick={() => console.log(title)}>button</button><br />

            <Link href="/">
                <a>Go back to home</a>
            </Link>
        </>
    );
};
