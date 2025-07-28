import { NavigationCardProps } from "./_components/cards/NavigationCard";
import { ProductCardProps } from "./_components/cards/ProductCard";

export const dummyProductDataMen: ProductCardProps[] = [
  {
    id: 1,
    name: "Varsity Mesh Shorts",
    fit: "regular fit",
    color: "black",
    tag: "new",
    price: 55,
    imgUrl: "/img/product/men-4.jpg",
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
    imgUrl: "/img/product/men-1.jpg",
    productUrl: "/product/"
  },
  {
    id: 3,
    name: "Varsity 7\" Shorts",
    rating: 5,
    fit: "slim fit",
    color: "black",
    price: 55,
    imgUrl: "/img/product/men-6.jpg",
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
    imgUrl: "/img/product/men-3.jpg",
    productUrl: "/product/"
  },
  {
    id: 5,
    name: "Tech T-Shirt",
    fit: "regular fit",
    color: "black",
    tag: "new",
    price: 28,
    imgUrl: "/img/product/men-7.jpg",
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
    imgUrl: "/img/product/men-2.jpg",
    productUrl: "/product/"
  },
  {
    id: 7,
    name: "Performance Tank",
    fit: "slim fit",
    color: "white",
    price: 25,
    imgUrl: "/img/product/men-5.jpg",
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
    imgUrl: "/img/product/men-1.jpg",
    productUrl: "/product/"
  },
  {
    id: 9,
    name: "Essential Sweatpants",
    fit: "regular fit",
    color: "black",
    tag: "new",
    price: 38,
    imgUrl: "/img/product/men-7.jpg",
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
    imgUrl: "/img/product/men-2.jpg",
    productUrl: "/product/"
  }
];

export const dummyProductDataWomen: ProductCardProps[] = [
  {
    id: 101,
    name: "Seamless Leggings",
    fit: "slim fit",
    color: "black",
    tag: "new",
    price: 48,
    imgUrl: "/img/product/women-3.jpg",
    productUrl: "/product/"
  },
  {
    id: 102,
    name: "Cropped Tank Top",
    rating: 4.3,
    fit: "regular fit",
    color: "white",
    tag: "hot",
    price: 27,
    imgUrl: "/img/product/women-1.jpg",
    productUrl: "/product/"
  },
  {
    id: 103,
    name: "High-Waisted Shorts",
    rating: 4.9,
    fit: "slim fit",
    color: "grey",
    price: 35,
    imgUrl: "/img/product/women-5.jpg",
    productUrl: "/product/"
  },
  {
    id: 104,
    name: "Oversized Hoodie",
    rating: 4.6,
    fit: "oversized fit",
    color: "pink",
    tag: "new",
    price: 52,
    imgUrl: "/img/product/women-2.jpg",
    productUrl: "/product/"
  },
  {
    id: 105,
    name: "Training Sports Bra",
    fit: "tight fit",
    color: "black",
    tag: "new",
    price: 30,
    imgUrl: "/img/product/women-6.jpg",
    productUrl: "/product/"
  },
  {
    id: 106,
    name: "Lightweight Joggers",
    rating: 4.5,
    fit: "regular fit",
    color: "charcoal",
    tag: "hot",
    price: 45,
    imgUrl: "/img/product/women-4.jpg",
    productUrl: "/product/"
  },
  {
    id: 107,
    name: "Essential Crop Top",
    fit: "slim fit",
    color: "white",
    price: 24,
    imgUrl: "/img/product/women-2.jpg",
    productUrl: "/product/"
  },
  {
    id: 108,
    name: "Flared Leggings",
    rating: 4.4,
    fit: "regular fit",
    color: "blue",
    tag: "hot",
    price: 40,
    imgUrl: "/img/product/women-1.jpg",
    productUrl: "/product/"
  },
  {
    id: 109,
    name: "Lounge Shorts",
    fit: "regular fit",
    color: "beige",
    tag: "new",
    price: 29,
    imgUrl: "/img/product/women-5.jpg",
    productUrl: "/product/"
  },
  {
    id: 110,
    name: "Active Training Tee",
    rating: 4.7,
    fit: "athletic fit",
    color: "navy",
    tag: "hot",
    price: 36,
    imgUrl: "/img/product/women-3.jpg",
    productUrl: "/product/"
  }
];

export const dummyNavCardArray: NavigationCardProps[] = [
    {
        title: "Reps in Red",
        description: "Red fits to hit the gym in. It's a strong choice.",
        buttonLabel: "shop red",
        imgUrl: "/img/product/women-1.jpg",
        url: "/women/gym-sets/red",
        category: "women"
      },
      {
        title: "Running",
        description: "Running stuff so good it'll (almost) make you want to do cardio.",
        buttonLabel: "shop now",
        imgUrl: "/img/product/women-2.jpg",
        url: "/women/running",
        category: "women"
      },
      {
        title: "T-Shirts & Tops",
        description: "Get ready for the ultimate style and performance combo with our women's gym t-shirts.",
        buttonLabel: "shop now",
        imgUrl: "/img/product/women-3.jpg",
        url: "/women/t-shirts",
        category: "women"
      },
      {
        title: "New Season = New Shorts",
        description: "Let's be honest, it's always shorts season round here.",
        buttonLabel: "shop now",
        imgUrl: "/img/product/women-4.jpg",
        url: "/women/new-season",
        category: "women"
      },
      {
        title: "Sam Sulek's Lifting Staples",
        description: "Check out the new Gymshark athlete's top picks.",
        buttonLabel: "shop now",
        imgUrl: "/img/product/men-1.jpg",
        url: "/men/athlete-top-picks",
        category: "men"
      },
      {
        title: "Sorry You Missed It",
        description: "The last Onyx drop was a hidden gem for our top Gymshark Loyalty members. Don't miss the next one!",
        buttonLabel: "find out more",
        imgUrl: "/img/product/men-2.jpg",
        url: "/pages/onyx",
        category: "men"
      },
      {
        title: "Onyx Fomo?",
        description: "Here are some other second skin compression fit tops that'll also make your arms look massive.",
        buttonLabel: "shop now",
        imgUrl: "/img/product/men-4.jpg",
        url: "/collections/compression-fit-shirts/mens",
        category: "men"
      },
      {
        title: "Hoodies & Sweatshirts",
        description: "Made for more than the gym floor, our men's gym hoodies & sweatshirts provide the perfect extra layer whether you're lifting weights or enjoying a rest day on the sofa.",
        buttonLabel: "shop now",
        imgUrl: "/img/product/men-3.jpg",
        url: "/products/hoodies",
        category: "men"
      },
      {
        title: "Sorry You Missed It",
        description: "The last Onyx drop was a hidden gem for our top Gymshark Loyalty members. Don't miss the next one!",
        buttonLabel: "find out more",
        imgUrl: "/img/product/men-5.jpg",
        url: "/pages/onyx",
        category: "men"
      },
      {
        title: "Onyx Fomo?",
        description: "Here are some other second skin compression fit tops that'll also make your arms look massive.",
        buttonLabel: "shop now",
        imgUrl: "/img/product/men-6.jpg",
        url: "/collections/compression-fit-shirts/mens",
        category: "men"
      },


    ]

export const dummyCategoryCards:NavigationCardProps[] = [
  {
    buttonLabel: "Women",
    url: "/women",
    imgUrl: "/img/product/women-2.jpg"
  },
  {
    buttonLabel: "Men",
    url: "/men",
    imgUrl: "/img/product/men-6.jpg"
  },
  {
    buttonLabel: "accessories",
    url: "/accessories",
    imgUrl: "/img/product/accessories-1.jpg"
  },

]

export const collectionsLinks = [
  {
    title: "Women's Leggings",
    links: [
      { collectionName: "Gym Leggings", url: "/collections/gym-leggings" },
      { collectionName: "Leggings With Pockets", url: "/collections/leggings-with-pockets" },
      { collectionName: "High Waisted Leggings", url: "/collections/high-waisted-leggings" },
      { collectionName: "Scrunch Bum Leggings", url: "/collections/scrunch-bum-leggings" },
      { collectionName: "Black Leggings", url: "/collections/black-leggings" },
      { collectionName: "Flared Leggings", url: "/collections/flared-leggings" },
      { collectionName: "Seamless Leggings", url: "/collections/seamless-leggings" },
      { collectionName: "Petite Gym Leggings", url: "/collections/petite-gym-leggings" },
    ]
  },
  {
    title: "Women's Gymwear",
    links: [
      { collectionName: "Women's Gym Wear", url: "/collections/womens-gym-wear" },
      { collectionName: "Womens Gym Shorts", url: "/collections/womens-gym-shorts" },
      { collectionName: "Running Shorts", url: "/collections/running-shorts" },
      { collectionName: "Sports Bras", url: "/collections/sports-bras" },
      { collectionName: "High Impact Sports Bras", url: "/collections/high-impact-sports-bras" },
      { collectionName: "Black Sports Bras", url: "/collections/black-sports-bras" },
      { collectionName: "Matching Sets", url: "/collections/matching-sets" },
      { collectionName: "Loungewear", url: "/collections/loungewear" },
    ]
  },
  {
    title: "Men's Gymwear",
    links: [
      { collectionName: "Men's Gymwear", url: "/collections/mens-gymwear" },
      { collectionName: "Mens Gym Shorts", url: "/collections/mens-gym-shorts" },
      { collectionName: "Shorts with Pockets", url: "/collections/shorts-with-pockets" },
      { collectionName: "Men's Running Shorts", url: "/collections/mens-running-shorts" },
      { collectionName: "Gym Shirts", url: "/collections/gym-shirts" },
      { collectionName: "Sleeveless T-Shirts", url: "/collections/sleeveless-t-shirts" },
      { collectionName: "Gym Stringers", url: "/collections/gym-stringers" },
      { collectionName: "Men's Baselayers", url: "/collections/mens-baselayers" },
    ]
  },
  {
    title: "Accessories",
    links: [
      { collectionName: "Women's Underwear", url: "/collections/womens-underwear" },
      { collectionName: "Men's Underwear", url: "/collections/mens-underwear" },
      { collectionName: "Gym Bags", url: "/collections/gym-bags" },
      { collectionName: "Duffel Bags", url: "/collections/duffel-bags" },
      { collectionName: "Gym Socks", url: "/collections/gym-socks" },
      { collectionName: "Crew Socks", url: "/collections/crew-socks" },
      { collectionName: "Caps", url: "/collections/caps" },
      { collectionName: "Beanies", url: "/collections/beanies" },
    ]
  }
];