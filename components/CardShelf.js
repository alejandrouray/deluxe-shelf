import { Card, Icon, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CardShelf = ({ data, type }) => {
  const router = useRouter();
  const [structure, setStructure] = useState({});

  useEffect(() => {
    const { _id, title, country, website, language, format } = data;

    switch (type) {
      case "collection":
        setStructure({
          image: `/images/collections/${_id}.png`,
          header: title,
          meta: language,
          description: format,
          href: "",
        });
        break;

      case "publisher":
        setStructure({
          image: `/images/publishers/${_id}.png`,
          header: title,
          meta: country,
          description: website,
          href: `publishers/${data._id}`,
        });

        break;
    }
  }, [data, type]);

  const { image, header, href, meta, description } = structure;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Card as="div" onClick={handleClick}>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description className="text-justify">
          <a href={description} target="_blank">
            <Icon name="world" />
            {description}
          </a>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="book" />
        65 libros
      </Card.Content>
    </Card>
  );
};

export default CardShelf;
