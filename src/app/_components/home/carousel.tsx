import styles from "./carousel.module.css"
import { CarouselCard, socialsData } from "./carouselCard"

export const Carousel = () => {

    const dummyData : socialsData = {
        username: '@bob',
        imgSrc: '/img/home/hero2.jpg',
        productUrl: '/product'
    }

    return <section className={styles.carousel}>
        <h2>Get the look</h2>
        <ul role="list" className={styles.card_container}>
           <CarouselCard username={dummyData.username} imgSrc={dummyData.imgSrc} productUrl={dummyData.productUrl}/>
           <CarouselCard username={dummyData.username} imgSrc={dummyData.imgSrc} productUrl={dummyData.productUrl}/>
           <CarouselCard username={dummyData.username} imgSrc={dummyData.imgSrc} productUrl={dummyData.productUrl}/>
           <CarouselCard username={dummyData.username} imgSrc={dummyData.imgSrc} productUrl={dummyData.productUrl}/>
        </ul>
    </section>
}