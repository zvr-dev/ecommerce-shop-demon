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
              <CustomButton href="/women" variant="light">
                Shop Women's
              </CustomButton>
              <CustomButton href="/men" variant="light">
                Shop Men's
              </CustomButton>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
