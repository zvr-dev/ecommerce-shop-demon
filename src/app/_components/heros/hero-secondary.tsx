import Link from 'next/link'
import { CustomButton } from '../buttons/custom-button'
import style from './hero-secondary.module.css'
import { ButtonLink } from '@/types/types'

type HeroProps = {
    title: string,
    content: string,
    imgUrl:string,
    buttons?: ButtonLink[],
    align?: "left" | "right"
}

export const HeroSecondary = ({title, content, imgUrl, buttons, align}: HeroProps) => {

    return <section className={style.hero_block}>
        <img src={imgUrl} alt={title} className={style.hero_img}/>
        <div className={style.hero_content}>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className={style.hero_block_button_group}>
                {buttons?.map((button,idx) => 
                    <Link key={idx} href={button.url}>
                        <CustomButton variant='light'>{button.content}</CustomButton>
                    </Link>
                    )}
            </div>
        </div>
    </section>
}