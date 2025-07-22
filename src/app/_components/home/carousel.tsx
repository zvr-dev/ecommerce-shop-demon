import styles from "./carousel.module.css"
import { CarouselCard, socialsData } from "./carouselCard"

export const Carousel = () => {

    const dummyData : socialsData[] = [
        {
        username: '@bob',
        imgSrc: '/img/home/hero2.jpg',
        productUrl: '/product'
        } ,
        {
        username: '@bob',
        imgSrc: '/img/home/hero2.jpg',
        productUrl: '/product'
        } ,
        {
        username: '@bob',
        imgSrc: '/img/home/hero2.jpg',
        productUrl: '/product'
        } ,
    ]

    return <section className={styles.carousel}>
        <h2 className={styles.carousel_heading}>Get the look</h2>
        <ul role="list" className={styles.card_container}>
           {dummyData.map((socialsData, i) => <CarouselCard key={i} username={socialsData.username} imgSrc={socialsData.imgSrc} productUrl={socialsData.productUrl} />)}
        </ul>
    </section>
}