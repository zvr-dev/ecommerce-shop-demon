
import Image from 'next/image';
import styles from './page.module.css'
import { Carousel } from './_components/home/carousel';

export default function Home() {

  return (
    <div className={styles.content}>
      {/* HERO SECTION */}
      <section className={styles.hero_block}>
        <img src="/img/home/hero.avif" alt="VARSITY. BEST IN CLASS." className={styles.hero_img}/>
        <div className={styles.hero_content}>
          <h1>Varsity. Best In Class.</h1>
          <p>Strong enough for gym. Comfy enough for chilling. Versatile enough for everyday.</p>
          <div className={styles.hero_block_button_group}>
            <a href="/womens"><button>Shop Women's</button></a>
            <a href="/mens"><button>Shop Men's</button></a>
            </div>
        </div>
      </section>

      <Carousel />
    </div>
  );
}
