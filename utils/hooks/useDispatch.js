import { useContext, useEffect } from "react";
import { GlobalContext } from "store/";

const useDispatch = (type, payload) => {
  const [_, dispatch] = useContext(GlobalContext);

  useEffect(() => dispatch({ type, payload }), [payload]);
};

export default useDispatch;
