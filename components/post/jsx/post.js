import Link from 'next/link';
import styles from '../scss/post.module.scss';

export const Post = ({ title, body, id }) => {
    return (
        <article>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.par}>{body}</p>
            <Link href="/post/[id]" as={`/post/${id}`}>
                <a>Read more...</a>
            </Link>
        </article>
    );
};
