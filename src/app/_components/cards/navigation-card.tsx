import { GenderTypes } from "@/types/types";
import style from "./navigation-card.module.css";
import Link from "next/link";
import { CustomButton } from "../buttons/custom-button";
export type NavigationCardProps = {
  title?: string;
  description?: string;
  buttonLabel: string;
  imgUrl: string;
  url: string;
  category?: GenderTypes;
};

export const NavigationCard = ({
  title,
  description,
  buttonLabel,
  imgUrl,
  url,
}: NavigationCardProps) => {
  return (
    <li>
      <article className={style.card_wrapper}>
        <div>
          <Link href={url}>
            <div className={style.card_img_wrapper}>
              <img
                className={style.card_img}
                src={imgUrl}
                alt={title}
                loading="lazy"
              />
            </div>
          </Link>
          {title ? <h3 className={style.card_title}>{title}</h3> : ""}
          {description ? (
            <p className={style.card_description}>{description}</p>
          ) : (
            ""
          )}
        </div>
        <div className={style.card_btn_wrapper}>
          <CustomButton href={url} variant="dark">
            {buttonLabel}
          </CustomButton>
        </div>
      </article>
    </li>
  );
};
