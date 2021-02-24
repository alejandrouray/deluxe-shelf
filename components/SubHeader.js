import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import routes from "utils/routes.es";

const SubHeader = () => {
  const [active, setActive] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const currentPath = routes.find((x) => x.to === router.pathname);
    setActive(currentPath.name);
  });

  return (
    <div className="bg-indigo-900 flex items-start pb-72 pt-8">
      <p className="ml-10 font-bold text-white text-4xl">{active}</p>
    </div>
  );
};

export default SubHeader;
