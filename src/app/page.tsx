import styles from './page.module.css'
import { CustomButton } from './_components/buttons/customButton';
import Link from 'next/link';
import { ProductCarousel } from './_components/carousels/ProductCarousel';
import { NavigationCarousel } from './_components/carousels/NavigationCarousel';

import { dummyCategoryCards, dummyNavCardArray } from '@/app/dummydata';

export default function Home() {

  return (
    <div id='hero' className={styles.content}>
      {/* HERO SECTION */}
      <section  className={styles.hero_block}>
        <img src="/img/home/hero.avif" alt="VARSITY. BEST IN CLASS." className={styles.hero_img}/>
        <div className={styles.hero_content}>
          <h1>Varsity. Best In Class.</h1>
          <p>Strong enough for gym. Comfy enough for chilling. Versatile enough for everyday.</p>
          <div className={styles.hero_block_button_group}>
            <a href="/womens"><CustomButton variant="light">Shop Women's</CustomButton></a>
            <a href="/mens"><CustomButton variant="light">Shop Men's</CustomButton></a>
            </div>
        </div>
      </section>

      {/* Social Proof for new campaign */}
      <ProductCarousel title="Get The Look" sectionUrl='/'/>

      {/* New Campaign Items */}
      <ProductCarousel title="Varsity. Best In Class"  sectionUrl='/'/>


      {/* Popular Items */}
      <section>
        <NavigationCarousel title="popular right now" cardArray={dummyNavCardArray}/>
      </section>
      <div className={styles.video_wrapper}>
        <video autoPlay={true} muted playsInline width={"100%"} loop>
          <source type='video/mp4' src="/vid/July_Seasonal_Together_Look_1_Web_Banner_8x3.mp4"/>
        </video>
      </div>

      {/* New Items */}
      <section>
        <ProductCarousel title="New in"  sectionUrl='/'/>

      </section>

      {/* Categories */}
      <section>
        <NavigationCarousel title='how do you train?' 
          cardArray={dummyNavCardArray.map(({description, ...rest}) => ({...rest}))}/>
      </section>

      {/* WOMEN MEN ACCESSPROES */}
      <section>
        <NavigationCarousel cardArray={dummyCategoryCards}
        />
      </section>

      {/* QUICK LINKS */}
      <section>

      </section>

      <Link href="/#">Back to top</Link>
    </div>
  );
}
