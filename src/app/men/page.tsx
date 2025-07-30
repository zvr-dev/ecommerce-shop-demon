import { NavigationCarousel } from "@/app/_components/carousels/navigation-carousel";
import { ProductCarousel } from "@/app/_components/carousels/product-carousel";
import { HeroSecondary } from "@/app/_components/heros/hero-secondary";
import {
  dummyNavCardArray,
  dummyProductDataMen,
  dummyProductDataWomen,
} from "@/app/dummydata";
import { notFound } from "next/navigation";
import style from "./page.module.css";

export default function Page() {
  const productData = dummyProductDataMen;
  const navLinkData = dummyNavCardArray;
  return (
    <main>
      <HeroSecondary
        title="New drops for your next workout"
        content="Strong enough for gym. Comfy enough for campus. Stylish enough for everyday"
        imgUrl={`/img/product/men-6.jpg`}
        buttons={[
          { content: "shop now", url: "/" },
          { content: "shop now", url: "/" },
        ]}
      />

      <h3 className={style.heading}>Mens</h3>

      <ProductCarousel title="new in" sectionUrl={`/men`} data={productData} />

      <NavigationCarousel
        title="hot right now"
        cardArray={navLinkData.filter((item) => item.category === "men")}
      />

      <ProductCarousel
        title="Accessories"
        sectionUrl={`/men`}
        data={productData}
      />

      <NavigationCarousel
        title="How do you train?"
        cardArray={navLinkData
          .filter((card) => card.category === "men")
          .map(({ description, ...rest }) => ({ ...rest }))}
      />
    </main>
  );
}
