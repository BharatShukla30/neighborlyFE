const ImageBox = (props) => {
  const { src, label, value, selectHandler } = props;

  return (
    <div
      className="cursor-pointer w-32 flex flex-col justify-center hover:border-2 border-solid border-black text-gray-600 hover:text-black"
      onClick={() => selectHandler(value)}
    >
      <img className="w-full h-24 object-cover" src={src} alt={label} />
      <div className="p-2">
        <h2 className="text-l font-bold mb-2 text-center">{label}</h2>
      </div>
    </div>
  );
};

export default ImageBox;
