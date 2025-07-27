import { NavigationCardProps } from "./_components/cards/NavigationCard";
import { ProductCardProps } from "./_components/cards/ProductCard";

export const dummyProductData: ProductCardProps[] = [
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

export const dummyNavCardArray: NavigationCardProps[] = [
    {
        title: "Reps in Red",
        description: "Red fits to hit the gym in. It's a strong choice.",
        buttonLabel: "shop red",
        imgUrl: "/img/gym/women-1.jpg",
        url: "/women/gym-sets/red",
        category: "women"
      },
      {
        title: "Running",
        description: "Running stuff so good it'll (almost) make you want to do cardio.",
        buttonLabel: "shop now",
        imgUrl: "/img/gym/women-2.jpg",
        url: "/women/running",
        category: "women"
      },
      {
        title: "T-Shirts & Tops",
        description: "Get ready for the ultimate style and performance combo with our women's gym t-shirts.",
        buttonLabel: "shop now",
        imgUrl: "/img/gym/women-3.jpg",
        url: "/women/t-shirts",
        category: "women"
      },
      {
        title: "New Season = New Shorts",
        description: "Let's be honest, it's always shorts season round here.",
        buttonLabel: "shop now",
        imgUrl: "/img/gym/women-1.jpg",
        url: "/women/new-season",
        category: "women"
      },
      {
        title: "Sam Sulek's Lifting Staples",
        description: "Check out the new Gymshark athlete's top picks.",
        buttonLabel: "shop now",
        imgUrl: "/img/gym/men-1.avif",
        url: "/men/athlete-top-picks",
        category: "men"
      },
      {
        title: "Sorry You Missed It",
        description: "The last Onyx drop was a hidden gem for our top Gymshark Loyalty members. Don't miss the next one!",
        buttonLabel: "find out more",
        imgUrl: "/img/gym/men-2.jpg",
        url: "/pages/onyx",
        category: "men"
      },
      {
        title: "Onyx Fomo?",
        description: "Here are some other second skin compression fit tops that'll also make your arms look massive.",
        buttonLabel: "shop now",
        imgUrl: "/img/gym/men-3.jpg",
        url: "/collections/compression-fit-shirts/mens",
        category: "men"
      },
      {
        title: "Hoodies & Sweatshirts",
        description: "Made for more than the gym floor, our men’s gym hoodies & sweatshirts provide the perfect extra layer whether you're lifting weights or enjoying a rest day on the sofa.",
        buttonLabel: "shop now",
        imgUrl: "/img/gym/men-1.avif",
        url: "/products/hoodies",
        category: "men"
      },
      {
        title: "Sorry You Missed It",
        description: "The last Onyx drop was a hidden gem for our top Gymshark Loyalty members. Don't miss the next one!",
        buttonLabel: "find out more",
        imgUrl: "/img/gym/men-2.jpg",
        url: "/pages/onyx",
        category: "men"
      },
      {
        title: "Onyx Fomo?",
        description: "Here are some other second skin compression fit tops that'll also make your arms look massive.",
        buttonLabel: "shop now",
        imgUrl: "/img/gym/men-3.jpg",
        url: "/collections/compression-fit-shirts/mens",
        category: "men"
      },


    ]

export const dummyCategoryCards:NavigationCardProps[] = [
  {
    buttonLabel: "Women",
    url: "/women",
    imgUrl: "/img/gym/women-2.jpg"
  },
  {
    buttonLabel: "Men",
    url: "/men",
    imgUrl: "/img/gym/men-2.jpg"
  },
  {
    buttonLabel: "accessories",
    url: "/accessories",
    imgUrl: "/img/gym/accessories-1.jpg"
  },

]