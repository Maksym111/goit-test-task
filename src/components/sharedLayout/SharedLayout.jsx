import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, NavItem, Navigation } from "./SharedLayout.styled";

const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <Navigation>
        <NavItem to={"/"}>Home</NavItem>
        <NavItem to={"/tweets"} state={{ from: location }}>
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
