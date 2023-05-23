import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, Logo, NavItem, Navigation } from "./SharedLayout.styled";

const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <Navigation>
        <Logo to="/" end>
          Tweetters
        </Logo>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/tweets" state={{ from: location }}>
          Tweets
        </NavItem>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
