import { useState, useEffect } from "react";

import IconText from "components/IconText";
import CardTitle from "components/CardTitle";
import Divider from "components/Divider";
import Card from "components/Card";
import CardMedia from "components/CardMedia";

const Collection = ({ data }) => {
  const [image, setImage] = useState();
  const [to, setTo] = useState();

  const { _id, title, language, format, ilustrated } = data;

  useEffect(() => {
    setImage(`/images/collections/${_id}.png`);
    setTo(`/collections/${_id}`);
  }, [data]);

  return (
    <Card>
      <CardMedia source={image} styles="h-72 rounded-t-xl" />
      <div className="flex flex-col mb-2 mx-4 mt-6">
        <CardTitle text={title} to={to} />
        <IconText
          icon="language"
          text={language === "Spanish" ? "Español" : "Inglés"}
        />
        <IconText
          icon="format"
          text={format === "Hardback" ? "Tapa Dura" : "Tapa Blanda"}
        />

        {ilustrated && (
          <div className="text-lg text-gray-500 bg-blue-100 py-2 flex justify-center rounded-md">
            <IconText
              icon="paint"
              text="Contiene Ilustraciones"
              styles={{ mb: "mb-0" }}
            />
          </div>
        )}
      </div>

      <Divider />

      <div className="flex font-bold justify-center mr-6 py-2 text-blue-900">
        <IconText
          icon="books"
          text="65 libros"
          styles={{ textSize: "text-xl", mb: "mb-1" }}
        />
      </div>
    </Card>
  );
};

export default Collection;
