"use client";
import { useState } from "react";
import { CustomButton } from "../buttons/custom-button";
import { NavigationCard, NavigationCardProps } from "../cards/navigation-card";
import style from "./navigation-carousel.module.css";
import { GenderTypes } from "@/types/types";

type NavigationCarouselProps = {
  title?: string;
  cardArray: NavigationCardProps[];
};

export const NavigationCarousel = ({
  title,
  cardArray,
}: NavigationCarouselProps) => {
  if (!cardArray) return null;

  // sort cards
  let sortedCards = sortCards(cardArray);

  const [currentSelection, setCurrentSelection] = useState<GenderTypes>(
    Object.keys(sortedCards)[0] as GenderTypes
  );

  return (
    <section className={style.section_wrapper}>
      <div className={style.section_header}>
        {title !== "" ? <h2 className={style.section_title}>{title}</h2> : ""}
        {!(Object.keys(sortedCards).length > 1) ? (
          ""
        ) : (
          <div className={style.section_btn_group}>
            {sortedCards.women?.length > 0 ? (
              <CustomButton
                variant={currentSelection === "women" ? "dark" : "light"}
                onClick={() => setCurrentSelection("women")}
              >
                {" "}
                WOMEN{" "}
              </CustomButton>
            ) : (
              ""
            )}
            {sortedCards.men?.length > 0 ? (
              <CustomButton
                variant={currentSelection === "men" ? "dark" : "light"}
                onClick={() => setCurrentSelection("men")}
              >
                {" "}
                MEN{" "}
              </CustomButton>
            ) : (
              ""
            )}
          </div>
        )}
      </div>

      <ul role="list" className={style.carousel_wrapper}>
        {currentSelection === "women"
          ? sortedCards.women
              .slice(0, 4)
              .map((card, i) => (
                <NavigationCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  buttonLabel={card.buttonLabel}
                  imgUrl={card.imgUrl}
                  url={card.url}
                />
              ))
          : currentSelection === "men"
          ? sortedCards.men
              .slice(0, 4)
              .map((card, i) => (
                <NavigationCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  buttonLabel={card.buttonLabel}
                  imgUrl={card.imgUrl}
                  url={card.url}
                />
              ))
          : sortedCards.uncategorised
              .slice(0, 4)
              .map((card, i) => (
                <NavigationCard
                  key={i}
                  title={card.title}
                  description={card.description}
                  buttonLabel={card.buttonLabel}
                  imgUrl={card.imgUrl}
                  url={card.url}
                />
              ))}
      </ul>
    </section>
  );
};

const sortCards = (
  cardArray: NavigationCardProps[]
): Record<string, NavigationCardProps[]> => {
  let uncategorised = "uncategorised";
  let sortedCards: Record<string, typeof cardArray> = { uncategorised: [] };
  cardArray.forEach((card) => {
    if (!card.category) {
      sortedCards[uncategorised].push(card);
    } else {
      if (!(card.category in sortedCards)) {
        sortedCards[card.category] = [];
      }
      sortedCards[card.category].push(card);
    }
  });
  if (sortedCards[uncategorised].length === 0) {
    delete sortedCards[uncategorised];
  }
  return sortedCards;
};
