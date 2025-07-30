import { CustomButton } from "./_components/buttons/custom-button";

export default function NotFound() {
  return (
    <div className="">
      <h1>404</h1>
      <h2>Not Found</h2>
      <p>Not sure whats happened there. Maybe go grab a new fit instead?</p>
      <div className="">
        <CustomButton variant="light">Shop Women's</CustomButton>
        <CustomButton variant="light">Shop Men's</CustomButton>
      </div>
    </div>
  );
}
