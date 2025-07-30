import Link from "next/link";
import { CustomButton } from "./_components/buttons/custom-button";
import { ProductCarousel } from "./_components/carousels/product-carousel";
import { NavigationCarousel } from "./_components/carousels/navigation-carousel";
import { VideoHero } from "./_components/heros/video-hero";

import style from "./page.module.css";
import {
  dummyCategoryCards,
  dummyNavCardArray,
  dummyProductDataMen,
} from "@/app/dummydata";
import { Hero } from "./_components/heros/hero";
import { SeoBlock } from "./_components/_layout/seo-block";

export default function Home() {
  // fetch the campaigns needed for this page

  return (
    <main className={style.content}>
      {/* HERO SECTION */}
      <Hero
        title="new drops for your next workout."
        content="Strong enough for gym. Comfy enough for chilling. Versatile enough for everyday."
        imgSrc={"/img/home/hero.avif"}
      />

      {/* Social Proof for new campaign */}
      {/* <ProductCarousel title="Get The Look" sectionUrl='/'/> */}

      {/* New Campaign Items */}
      <ProductCarousel
        title="new drops for your next workout"
        sectionUrl="/"
        data={dummyProductDataMen}
      />

      {/* Popular Items */}
      <section>
        <NavigationCarousel
          title="popular right now"
          cardArray={dummyNavCardArray}
        />
      </section>

      {/* Video */}
      <VideoHero
        src="/vid/July_Seasonal_Together_Look_1_Web_Banner_8x3.mp4"
        title="Strong Season"
        content="Bold shades and sick patterns for you to lift heavy, run fast and push hard in."
        ctaButtons={true}
      />

      {/* New Items */}
      <ProductCarousel
        title="New in"
        sectionUrl="/"
        data={dummyProductDataMen}
      />

      {/* Categories */}
      <NavigationCarousel
        title="how do you train?"
        cardArray={dummyNavCardArray.map(({ description, ...rest }) => ({
          ...rest,
        }))}
      />

      {/* WOMEN MEN ACCESSORIES */}
      <NavigationCarousel cardArray={dummyCategoryCards} />

      {/* Back to Top button */}
      <div className={style.btt_wrapper}>
        <Link href="/#">
          <button className={style.back_to_top_btn}>Back to top</button>
        </Link>
      </div>

      <SeoBlock />
    </main>
  );
}
