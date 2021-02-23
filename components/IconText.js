const IconText = ({ icon, text, ancle, styles }) => {
  const { mb, textSize } = styles;

  const setText = () =>
    ancle ? (
      <a
        className="cursor-pointer text-base text-gray-500 truncate"
        href={text}
      >
        {text}
      </a>
    ) : (
      <span className={`${textSize ? textSize : "text-lg"} text-gray-500`}>
        {text}
      </span>
    );

  return (
    <div className={`${mb ? mb : "mb-4"} flex items-center space-x-2`}>
      <img className="h-7 w-7" src={`icons/${icon}.svg`} />
      {setText()}
    </div>
  );
};

IconText.defaultProps = {
  styles: {},
};

export default IconText;
