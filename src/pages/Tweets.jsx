import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Cards from "../components/cards/Cards";
import { GoBackLink } from "../components/tweets/Tweets.styled";

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  return (
    <>
      <GoBackLink to={backLinkHref.current}>Go back</GoBackLink>
      <Cards />
    </>
  );
};
export default Tweets;
