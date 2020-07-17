import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [state, setState] = useState({ data: [], loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    axios
      .get(url)
      .then((response) => setState({ data: response.data, loading: false }))
      .catch((err) => console.log(err));
  }, [url]);
  return state;
}
