import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "store/";

const SubHeader = () => {
  const [active, setActive] = useState("/");
  const [{ page }] = useContext(GlobalContext);

  useEffect(() => setActive(page));

  return (
    <div className="bg-blue-700 flex items-start pb-72 pt-8">
      <p className="ml-20 font-bold text-white text-4xl">{active}</p>
    </div>
  );
};

export default SubHeader;
