import { useContext, useEffect } from "react";
import { Context } from "store/";

const useDispatch = (type, payload) => {
  const [_, dispatch] = useContext(Context);

  useEffect(() => dispatch({ type, payload }), [payload]);
};

export default useDispatch;
