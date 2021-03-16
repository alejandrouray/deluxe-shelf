import { useContext, useEffect } from "react";
import { GlobalContext } from "store/";

const useModal = () => {
  const [{ modal }, dispatch] = useContext(GlobalContext);

  if (!modal === undefined) {
    throw new Error("useModal should be inside of GlobalContext provider");
  }

  return [modal, dispatch];
};

export default useModal;
