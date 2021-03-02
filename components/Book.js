import { useState, useEffect } from "react";

import CardTitle from "components/CardTitle";
import Card from "components/Card";
import CardMedia from "components/CardMedia";
import ImageText from "components/ImageText";

const Book = ({ data }) => {
  const [image, setImage] = useState();
  const [to, setTo] = useState();

  const { _id, title, work } = data;

  useEffect(() => {
    setImage(`/images/books/${_id}.png`);
    setTo(`/books/${_id}`);
  }, [data]);

  return (
    <Card>
      <CardMedia source={image} styles="h-96 px-4 pt-4 rounded-t-xl" />
      <div className="flex flex-col mb-2 mx-4 mt-6">
        <CardTitle text={title} to={to} />
        <ImageText
          image={`authors/${work.authors[0]._id}`}
          text={work.authors[0].name}
        />
      </div>
    </Card>
  );
};

export default Book;
