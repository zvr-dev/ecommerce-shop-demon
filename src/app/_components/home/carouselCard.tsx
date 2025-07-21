import Link from 'next/link';
import styles from './carouselCard.module.css'
import { CustomButton } from '../buttons/customButton';

export type socialsData = {
    username: string;
    imgSrc: string;
    productUrl: string;
}

export const CarouselCard = ({username, imgSrc, productUrl} : socialsData) => {

    return <li role="list">
    <article className={styles.card}>
        <img src={imgSrc} alt={productUrl} loading="lazy"/>
        <div className={styles.tag}>
            <span>{username}</span>
        </div>
        <Link href={productUrl}><CustomButton variant='light'>Get the look</CustomButton></Link>
    </article>
    </li>
}