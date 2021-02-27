import { useEffect, useState, useContext } from "react";
import { Context } from "store/";

const SubHeader = () => {
  const [active, setActive] = useState("/");
  const [state] = useContext(Context);

  useEffect(() => {
    setActive(state.page);
  });

  return (
    <div className="bg-blue-700 flex items-start pb-72 pt-8">
      <p className="ml-20 font-bold text-white text-4xl">{active}</p>
    </div>
  );
};

export default SubHeader;
