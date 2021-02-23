import { useState, useEffect } from "react";

import IconText from "components/IconText";
import CardTitle from "components/CardTitle";
import Divider from "components/Divider";
import CardMedia from "components/CardMedia";

const CardShelf = ({ data, type }) => {
  const [structure, setStructure] = useState({});

  useEffect(() => {
    const { _id, title, country, website } = data;

    setStructure({
      image: `/images/publishers/${_id}.png`,
      title,
      subTitle: country,
      aditional: website,
      to: `publishers/${data._id}`,
    });
  }, [data, type]);

  const { image, title, subTitle, aditional, to } = structure;

  return (
    <div className="bg-white flex flex-col rounded-xl shadow-md">
      <CardMedia source={image} />

      <div className="flex flex-col mb-2 ml-4 mt-6">
        <CardTitle text={title} to={to} />
        <IconText
          icon={`countries/${subTitle}`}
          text={subTitle}
          className="mb-4"
        />
        <IconText icon="browser" text={aditional} ancle />
      </div>

      <Divider />

      <div className="flex font-bold justify-center mr-6 py-2 text-blue-900">
        <IconText
          icon="books"
          text="65 libros"
          styles={{ textSize: "text-xl", mb: "mb-1" }}
        />
      </div>
    </div>
  );
};

export default CardShelf;
