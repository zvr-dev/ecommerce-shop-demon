import style from "./page.module.css"

export default async function Page({ params 
} : {
    params: Promise<{slug: string}>
} ) {
    const {slug} = await params


    return <main>
        <section className={style.product_section}>
        <div className={style.img_wrapper}>imgs here</div>
        <div className={style.product_info}>product stuff here</div>
        </section>
    </main>
}