import Link from 'next/link';
import './ProductCard.css'

export type Tag = "new" | "hot" | undefined;

export type ProductCardProps = {
    id: number;
    name: string;
    rating?:number;
    fit?: string;
    tag?: Tag;
    color: string;
    price:number;
    imgUrl: string;
    productUrl: string;
}
export const ProductCard = ({id, name, fit, color, tag, price, imgUrl, productUrl}: ProductCardProps) => {

    return <li role="list">
        <article className="product-card">
            <div className="product-card-img-wrapper">
                <Link href={productUrl}>
                    <img src={imgUrl} alt={name} />
                </Link>
                <button className="product-card-add-to-cart btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.99219 11H11.9922M13.9922 11H11.9922M11.9922 11V9M11.9922 11V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className="product-card-wishlist btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
                {tag? <span className="product-card-tag">{tag}</span> : ""}   
            </div>
            <Link href={productUrl}>
            <div className='product-details-wrapper'>
                <p className="product-name">{name}</p>
                {fit ? <p className="product-fit">{fit}</p> : ""}
                <p className="product-color">{color}</p>
                <span className="product-price">${price}</span>
            </div>
            </Link>
    </article>
    </li>
} 