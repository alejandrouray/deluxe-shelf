import { useState, useEffect } from "react";

import IconText from "components/IconText";
import CardTitle from "components/CardTitle";
import ImageText from "components/ImageText";
import Divider from "components/Divider";
import Card from "components/Card";

const Work = ({ data }) => {
  const [to, setTo] = useState();
  const { _id, title, authors, language, year } = data;

  useEffect(() => {
    setTo(`works/${_id}`);
  }, [data]);

  return (
    <Card>
      <div className="flex flex-col mb-2 mx-4 mt-6">
        <CardTitle text={title} to={to} />
        <div className="mt-6">
          <IconText icon="language" text={language} />
          <IconText icon="year" text={year} />
        </div>
        <ImageText image={`authors/${authors[0]._id}`} text={authors[0].name} />
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

export default Work;
