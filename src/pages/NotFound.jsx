import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  });
  return <div>Ooops, Not Founded Page :(</div>;
};

export default NotFound;
