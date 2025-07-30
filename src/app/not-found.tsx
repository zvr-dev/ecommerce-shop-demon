import { CustomButton } from "./_components/buttons/custom-button";
import style from "./not-found.module.css";
export default function NotFound() {
  return (
    <main className={style.wrapper}>
      <div className={style.content}>
        <div>
          <h1>404</h1>
          <h2>Not Found</h2>
        </div>
        <p>Not sure whats happened there. Maybe go grab a new fit instead?</p>
        <div className={style.buttons}>
          <CustomButton href="/women" variant="light">
            Shop Women's
          </CustomButton>
          <CustomButton href="/men" variant="light">
            Shop Men's
          </CustomButton>
        </div>
      </div>
    </main>
  );
}
