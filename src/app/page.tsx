
import Image from 'next/image';
import styles from './page.module.css'
import { Carousel } from './_components/home/carousel';
import { CustomButton } from './_components/buttons/customButton';
import Link from 'next/link';
import { ProductScroller } from './_components/scrollers/ProductScroller';

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
      <ProductScroller title="Get The Look" sectionUrl='/'/>

      {/* New Campaign Items */}
      <ProductScroller title="Varsity. Best In Class"  sectionUrl='/'/>


      {/* Popular Items */}
      <section>
        <h2>POPULAR RIGHT NOW</h2>
        <div className="btn-group">
          <CustomButton variant='dark'> WOMEN </CustomButton>
          <CustomButton variant='light'> MEN </CustomButton>
        </div>
        {/* a Grid */}
      </section>

      {/* New Items */}
      <section>
        <ProductScroller title="New in"  sectionUrl='/'/>

      </section>

      {/* Categories */}
      <section>
        <h2>How do you train?</h2>
        {/* another grid */}
      </section>

      {/* WOMEN MEN ACCESSPROES */}
      <section>
        
      </section>

      {/* QUICK LINKS */}
      <section>

      </section>

      <Link href="/#">Back to top</Link>
    </div>
  );
}
