import { useState, useEffect } from "react";

import IconText from "components/IconText";
import CardTitle from "components/CardTitle";
import Divider from "components/Divider";
import Card from "components/Card";

const Publisher = ({ data }) => {
  const [image, setImage] = useState();
  const [to, setTo] = useState();

  const { _id, title, country, website } = data;

  useEffect(() => {
    setImage(`/images/publishers/${_id}.png`);
    setTo(`publishers/${_id}`);
  }, [data]);

  return (
    <Card image={image}>
      <div className="flex flex-col mb-2 mx-4 mt-6">
        <CardTitle text={title} to={to} />
        <IconText
          icon={`countries/${country}`}
          text={country}
          className="mb-4"
        />
        <IconText icon="browser" text={website} ancle />
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

export default Publisher;
