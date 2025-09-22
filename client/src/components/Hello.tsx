import { useEffect, useState } from "react";

export const Hello = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return <h1>{msg || "Loading..."}</h1>;
};
