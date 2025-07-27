import Link from 'next/link';
import { CustomButton } from './_components/buttons/customButton';
import { ProductCarousel } from './_components/carousels/ProductCarousel';
import { NavigationCarousel } from './_components/carousels/NavigationCarousel';
import { VideoHero } from './_components/videoPlayers/VideoHero';

import style from './page.module.css'
import { dummyCategoryCards, dummyNavCardArray } from '@/app/dummydata';

export default function Home() {

  return (
    <div id='hero' className={style.content}>
      {/* HERO SECTION */}
      <section  className={style.hero_block}>
        <img src="/img/home/hero.avif" alt="new drops for your next workout" className={style.hero_img}/>
        <div className={style.hero_content}>
          <h1>new drops for your next workout</h1>
          <p>Strong enough for gym. Comfy enough for chilling. Versatile enough for everyday.</p>
          <div className={style.hero_block_button_group}>
            <a href="/womens"><CustomButton variant="light">Shop Women's</CustomButton></a>
            <a href="/mens"><CustomButton variant="light">Shop Men's</CustomButton></a>
            </div>
        </div>
      </section>

      {/* Social Proof for new campaign */}
      {/* <ProductCarousel title="Get The Look" sectionUrl='/'/> */}

      {/* New Campaign Items */}
      <ProductCarousel title="new drops for your next workout"  sectionUrl='/'/>


      {/* Popular Items */}
      <section>
        <NavigationCarousel title="popular right now" cardArray={dummyNavCardArray}/>
      </section>
      
      {/* Video */}
      <VideoHero 
        src="/vid/July_Seasonal_Together_Look_1_Web_Banner_8x3.mp4" 
        title="Strong Season"
        content="Bold shades and sick patterns for you to lift heavy, run fast and push hard in."
        ctaButtons={true}
        />

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
