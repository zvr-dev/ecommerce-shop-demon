"use client"
import { useState } from "react"
import { CustomButton } from "../buttons/customButton"
import { NavigationCard, NavigationCardProps } from "../cards/NavigationCard"
import "./NavigationCardGrid.css"
import { GenderTypes } from "@/app/types/types"

type NavigationCardGridProps = {
    title?: string,
    cardArray: NavigationCardProps[]
}

// {
//     Women : [
//         item,item,item
//     ],
//     Men: 
//     [
//         item,item,item
//     ]
// }
export const NavigationCardGrid = ({title, cardArray}: NavigationCardGridProps) => {
    const hasCategory = cardArray.some(card => card.category === "women" || card.category === "men")
    const [currentSelection, setCurrentSelection] = useState<GenderTypes | "uncategorized">(hasCategory ? "women": "uncategorized");

    if (!cardArray) return null;

    const womenCards: NavigationCardProps[] = []
    const menCards: NavigationCardProps[]= []
    const uncategorizedCards: NavigationCardProps[] = []

    cardArray?.forEach(card => {
        if (card.category?.toLowerCase() === "men") menCards.push(card)
        else if (card.category?.toLowerCase() === "women") womenCards.push(card)
        else uncategorizedCards.push(card)
    })


    return <section className="card-section">
        {title !== "" ?
        <h2 className="navigation-grid-title">{title}</h2> :
        ""
        }
        <div className="navigation-btn-group">
            {womenCards.length > 0 ? 
          <CustomButton variant={currentSelection === "women" ? "dark" : "light"} onClick={() => setCurrentSelection("women")}> WOMEN </CustomButton>
        : ""}
        {menCards.length > 0 ? 
          <CustomButton variant={currentSelection === "men" ? "dark" : "light"} onClick={() => setCurrentSelection("men")}> MEN </CustomButton>
        : ""}
        </div>
        <ul role="list" className="navigation-grid">
            {currentSelection === "women" ? womenCards.map((card, i)=> <NavigationCard 
                key = {i}
                title = {card.title}
                description= {card.description}
                buttonLabel={card.buttonLabel}
                imgUrl= {card.imgUrl}
                url= {card.url}
                />)
            : currentSelection === "men" ?
                menCards.map((card, i)=> <NavigationCard 
                key = {i}
                title = {card.title}
                description= {card.description}
                buttonLabel={card.buttonLabel}
                imgUrl= {card.imgUrl}
                url= {card.url}
                />)
                :
                uncategorizedCards.map((card, i)=> <NavigationCard 
                key = {i}
                title = {card.title}
                description= {card.description}
                buttonLabel={card.buttonLabel}
                imgUrl= {card.imgUrl}
                url= {card.url}
                />)
        }
        </ul>
    </section>
}