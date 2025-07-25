import { GenderTypes } from "@/app/types/types"
import "./NavigationCard.css"
import Link from "next/link"
import { CustomButton } from "../buttons/customButton"
export type NavigationCardProps = {
    title?: string,
    description?: string,
    buttonLabel: string,
    imgUrl: string,
    url: string,
    category?: GenderTypes
}

export const NavigationCard = ({title, description, buttonLabel, imgUrl, url} : NavigationCardProps) => {

    return <li role="list">
            <article className="nav-card-wrapper">
                <div>

                <Link href={url}>
                    <div className="nav-card-img-wrapper">
                        <img className="nav-card-img" src={imgUrl} alt={title} loading="lazy"/>
                    </div>
                </Link>
            {title? 
                <h3 className="nav-card-title">{title}</h3>:""}
            {description?
                <p className="nav-card-description">{description}</p>:""}
            </div>
            <div className="nav-card-btn-wrapper">
                <Link href={url}>
                    <CustomButton variant="dark">{buttonLabel}</CustomButton>
                </Link>
            </div>
    </article>
    </li>
}