import Link from "next/link";
import { ProductCard, ProductCardProps, Tag } from "../cards/ProductCard";
import style from "./ProductCarousel.module.css"

type ProductCarouselProps = {
    title: string;
    sectionUrl: string;
    data: ProductCardProps[];
}

export const ProductCarousel = ({title, data, sectionUrl}: ProductCarouselProps) => {

    function normalizeTag(input:string | undefined): Tag {
        return input ? input.toLowerCase() as Tag : undefined; 
    }

    return <section className={style.section_wrapper}>
        <div className={style.section_title_group}>
            <h2 className={style.section_title}>{title}</h2>
            <Link href={sectionUrl}>View All</Link>
        </div>
        <ul role="list" className={style.carousel_wrapper}>
            {data?.map((item) => <ProductCard key={item.id} 
                id={item.id} 
                name={item.name} 
                rating={item.rating}
                fit={item.fit}
                color={item.color}
                tag={normalizeTag(item.tag)}
                price={item.price}
                imgUrl={item.imgUrl}
                productUrl={item.productUrl} />)}
        </ul>
    </section>
}