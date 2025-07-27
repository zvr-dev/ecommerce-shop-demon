import { collectionsLinks } from '@/app/dummydata'
import style from './SeoBlock.module.css'
import Link from 'next/link'



export const SeoBlock = () => {

    return <div className={style.seo_wrapper}> 
            {/* Quick Links To Product Sections */}
            <section className={style.quick_links_wrapper}>
                {collectionsLinks.map(collection => <CollectionsLinks 
                    key={collection.title}
                    title={collection.title}
                    links={collection.links}
                    />)}
            </section>
            {/* SEO section */}
            <section className={style.seo_text}>
                <h2>Workout Clothes & Gym Clothes</h2>
                <p>Gym Clothes designed to help you become your personal best. Because when it comes to performing at your max, there should be no obstacles - least of all your workout clothes. Functional and comfortable, we create workout clothing you'll sweat in. Since 2012, we've designed and created the workout clothes we want to wear, because training and its people are what we know best.</p>

                <h3>Gym clothes built in the weight room</h3>
                <p>Our legacy was built in the weight room. Gymshark was founded with a love for training and that passion continues into all our gym clothes today. You'll find the latest innovation in gym clothing and accessories to help you perform at your best and recover in style. Our Men's Gym Clothes feature sweat wicking gym shirts and tank tops, gym shorts, sweatpants and more. Whilst our Women's Gym Clothes designed for a range of movements and feature sophisticated seamless technology, clever contouring and durable, quick-dry sweat wicking fabrics on leggings, sports bras and more. An obsession with lifting is what started this brand, and we haven't forgotten our roots. Our Women's and Men's Bodybuilding clothes feature classic styles, with modern cuts and innovative fabrics to help you raise the bar.</p>


                <h3>Activewear & Athleisure</h3>
                <p>We create the tools that help everyone become their personal best - no matter the sport. Our range of Activewear is designed to give you the support you need to perform at your best, whether that's on the track, on the gym floor or in the studio. Whilst our men's and women's athleisure elevates your workouts with the most comfortable gym hoodies, the most supportive gym leggings and the most innovatively designed workout shirts that are made to move when it matters most.</p>

                <h3>More than your best gym clothing</h3>
                <p>The Gymshark community is devoted to unlocking potential through conditioning and the things we do today to prepare for tomorrow. It's every setback, step-up and milestone along the way. Game-changing workout clothing, running clothes and loungewear essentials. It's not just in the designs, it's in the people who wear them.

                Looking for more inspiration? Discover our latest tips, stories, and training insights on Gymshark Central - your next step towards becoming your personal best.
                </p>
            </section>
    </div>

}

type CollectionsLinksProps = {
    title: string,
    links: {collectionName: string, url: string}[]
}

const CollectionsLinks = ({title, links} : CollectionsLinksProps) => {

    return <div>
        <h3>{title}</h3>
        <ul role='list'>
            {links.map(link => <li key={link.collectionName}>
                <Link href={link.url}>{link.collectionName}</Link>
            </li>)}
        </ul>
    </div>
}