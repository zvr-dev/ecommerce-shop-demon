import Link from "next/link";
import { ProductCard, ProductCardProps, Tag } from "../cards/ProductCard";
import style from "./ProductScroller.module.css"

type ProductScrollerProps = {
    title: string;
    sectionUrl: string;
    data?: ProductCardProps[];
}

export const ProductScroller = ({title, data, sectionUrl}: ProductScrollerProps) => {
    let dummyData = [
        {
            id: 1,
            name: "item1",
            fit: "overside fit",
            color: "black",
            tag: "new",
            price: 55,
            imgUrl: "/img/home/hero2.jpg",
            productUrl: "/product/"
        },
        {
            id: 2,
            name: "item1",
            rating:4,
            fit: "overside fit",
            color: "black",
            tag: "hot",
            price: 33,
            imgUrl: "/img/home/hero2.jpg",
            productUrl: "/product/"
        },
        {
            id: 3,
            name: "item1",
            rating:5,
            fit: "overside fit",
            color: "black",
            price: 55,
            imgUrl: "/img/home/hero2.jpg",
            productUrl: "/product/"
        },
        {
            id: 4,
            name: "item1",
            rating:5,
            fit: "overside fit",
            color: "black",
            tag: "new",
            price: 35,
            imgUrl: "/img/home/hero2.jpg",
            productUrl: "/product/"
        },
        {
            id: 5,
            name: "item1",
            fit: "overside fit",
            color: "black",
            tag: "new",
            price: 28,
            imgUrl: "/img/home/hero2.jpg",
            productUrl: "/product/"
        },
    ]

    function normalizeTag(input:string | undefined): Tag {
        return input ? input.toLowerCase() as Tag : undefined; 
    }

    return <section className={style.section_container}>
        <div className={style.section_title_group}>
            <h2 className={style.section_title}>{title}</h2>
            <Link href={sectionUrl}>View All</Link>
        </div>
        <ul role="list" className={style.scroller_wrapper}>
            {dummyData.map((item) => <ProductCard key={item.id} 
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