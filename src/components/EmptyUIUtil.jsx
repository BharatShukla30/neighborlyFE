/* eslint-disable react/prop-types */
const EmptyUIUtil = (props) => {
  const { imageSource, contentHeading, content, buttonText, buttonHandler } =
    props;

  return (
    <div className="flex flex-col h-[30vh] mt-20 justify-center text-center align-center">
      <img
        className="w-40 h-40 mx-auto"
        src={imageSource}
        alt={"Display Background Photo"}
      />
      <div className="p-2">
        <h1 className="text-3xl font-bold text-center">{contentHeading}</h1>
        <h2 className="text-xl text-cblue text-center mt-1">{content}</h2>
      </div>
      <div className="pt-3 pb-3 w-full h-[22rem] flex flex-wrap justify-center gap-4">
        <button
          className="rounded-full bg-[#ffffff75] border-2 border-appTheme hover:border-cblue  p-2"
          onClick={buttonHandler}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default EmptyUIUtil;
