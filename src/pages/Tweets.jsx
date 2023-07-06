import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Cards from "../components/cards/Cards";
import { GoBackLink, Wrapper } from "../components/tweets/Tweets.styled";

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/");
  return (
    <Wrapper>
      <GoBackLink to={backLinkHref.current}>Go back</GoBackLink>
      <Cards />
    </Wrapper>
  );
};
export default Tweets;
