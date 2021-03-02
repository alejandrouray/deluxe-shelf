const ImageText = ({ image, text }) => {
  return (
    <div className="mt-6 group cursor-pointer flex hover:bg-blue-900 items-center mb-4 border p-2 rounded-full space-x-4 text-md">
      <img className="rounded-full h-12 w-12" src={`/images/${image}.png`} />
      <span className="font-bold group-hover:text-white">{text}</span>
    </div>
  );
};

export default ImageText;
