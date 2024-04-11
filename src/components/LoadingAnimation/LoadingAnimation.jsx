import "./loadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};

export const LoadingAnimationTwo = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <span className="loaderTwo"></span>
    </div>
  );
}

export default LoadingAnimation;
