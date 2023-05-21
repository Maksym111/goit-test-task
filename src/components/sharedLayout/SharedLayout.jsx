import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, NavItem, Navigation } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <NavItem to={"/"}>Home</NavItem>
        <NavItem to={"/tweets"}>Tweets</NavItem>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
