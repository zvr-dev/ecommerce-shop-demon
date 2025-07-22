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
    name: "Varsity Mesh Shorts",
    fit: "regular fit",
    color: "black",
    tag: "new",
    price: 55,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 2,
    name: "Varsity Oversized Shirt",
    rating: 4.2,
    fit: "oversized fit",
    color: "black",
    tag: "hot",
    price: 33,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 3,
    name: "Varsity 7\" Shorts",
    rating: 5,
    fit: "slim fit",
    color: "black",
    price: 55,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 4,
    name: "Oversized Joggers",
    rating: 5,
    fit: "oversized fit",
    color: "black",
    tag: "new",
    price: 35,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 5,
    name: "Tech T-Shirt",
    fit: "regular fit",
    color: "black",
    tag: "new",
    price: 28,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 6,
    name: "Athletic Hoodie",
    rating: 4.7,
    fit: "loose fit",
    color: "charcoal",
    tag: "hot",
    price: 60,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 7,
    name: "Performance Tank",
    fit: "slim fit",
    color: "white",
    price: 25,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 8,
    name: "Lightweight Zip Hoodie",
    rating: 4.5,
    fit: "regular fit",
    color: "grey",
    tag: "hot",
    price: 42,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 9,
    name: "Essential Sweatpants",
    fit: "regular fit",
    color: "black",
    tag: "new",
    price: 38,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  },
  {
    id: 10,
    name: "Mesh Training Shorts",
    rating: 4.8,
    fit: "athletic fit",
    color: "navy",
    tag: "hot",
    price: 32,
    imgUrl: "/img/home/hero2.jpg",
    productUrl: "/product/"
  }
];

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