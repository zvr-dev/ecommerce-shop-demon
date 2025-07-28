import { NavigationCarousel } from "@/app/_components/carousels/NavigationCarousel";
import { ProductCarousel } from "@/app/_components/carousels/ProductCarousel";
import { HeroSecondary } from "@/app/_components/heros/HeroSecondary";
import { dummyNavCardArray, dummyProductDataMen, dummyProductDataWomen } from "@/app/dummydata";
import { notFound } from "next/navigation";
import style from './page.module.css'

const validSlugs = ['men', 'women'];

export default function Page() {
    
    const productData = dummyProductDataWomen
    const navLinkData = dummyNavCardArray
    return <main>
        <HeroSecondary title="New drops for your next workout"
            content="Strong enough for gym. Comfy enough for campus. Stylish enough for everyday"
            imgUrl={`/img/product/women-6.jpg`} 
            buttons={[
            {"content":"shop now", "url": "/"},{"content":"shop now", "url": "/"}]}/>

        <h3 className={style.heading}>women</h3>

        <ProductCarousel 
        title="new in"
        sectionUrl={`/men`}
        data={productData}
        />

        <NavigationCarousel 
            title="hot right now"
            cardArray={navLinkData.filter((item) => item.category === "women")}
        />

        <ProductCarousel 
        title="Accessories"
        sectionUrl={`/men`}
        data={productData}

        />

        <NavigationCarousel 
            title="How do you train?"
            cardArray={navLinkData.filter(card => card.category === "women").map(({description, ...rest}) => ({...rest}))}
        />

    </main>
}