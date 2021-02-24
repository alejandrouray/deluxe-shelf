import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import routes from "utils/routes.es";

const SubHeader = () => {
  const [active, setActive] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const currentPath = routes.find((x) => x.to === router.pathname);
    setActive(currentPath.titleES);
  });

  return (
    <div className="bg-white-100 flex items-center py-7">
      <p className="ml-8 font-bold text-3xl">{active}</p>
    </div>
  );
};

export default SubHeader;
