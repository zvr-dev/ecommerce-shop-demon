import Link from "next/link";
import { CustomButton } from "../buttons/custom-button";
import style from "./hero.module.css";

type HeroProps = {
  title: string;
  content: string;
  collectionUrl?: string;
  collectionBtn?: string;
  imgSrc: string;
};

export type HeroAlignment = "center" | "left";

export const Hero = ({
  title,
  content,
  collectionUrl,
  collectionBtn,
  imgSrc,
}: HeroProps) => {
  return (
    <section className={style.hero_block}>
      <img src={imgSrc} alt={title} className={style.hero_img} />
      <div className={style.hero_content}>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className={style.hero_block_button_group}>
          {collectionUrl && collectionBtn ? (
            <Link href={collectionUrl}>
              {" "}
              <CustomButton variant="light">{collectionBtn}</CustomButton>
            </Link>
          ) : (
            <>
              <Link href="/womens">
                <CustomButton variant="light">Shop Women's</CustomButton>
              </Link>
              <Link href="/mens">
                <CustomButton variant="light">Shop Men's</CustomButton>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
