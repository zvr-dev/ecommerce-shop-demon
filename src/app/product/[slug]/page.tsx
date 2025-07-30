import style from "./page.module.css"

export default async function Page({ params 
} : {
    params: Promise<{slug: string}>
} ) {
    const {slug} = await params
    const data = await fetch('https://dummyjson.com/test')
        .then(res => res.json())

        console.log(data)
    return <main>
        <section className={style.product_section}>
        <div className={style.img_wrapper}>
            <img src="/" alt="" />
        </div>
        <div className={style.product_info}> 
            <h1>{slug}</h1>
        </div>
        </section>
    </main>
}