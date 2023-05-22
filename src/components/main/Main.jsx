import { Suspense, lazy } from "react";
const Tweets = lazy(() => import("../../pages/Tweets"));

import {
  Container,
  InfoBlock,
  MainButton,
  MainSection,
  SubTitle,
  Title,
} from "./Main.styled";

const Main = () => {
  return (
    <MainSection>
      <Container>
        <InfoBlock>
          <Title>Find your own tweet person</Title>
          <SubTitle>
            Is a free social networking site where users broadcast short posts
            known as tweets. These tweets can contain text, videos, photos or
            links.
          </SubTitle>
          <Suspense fallback={<div>Loading...</div>}>
            <MainButton to="/tweets" element={<Tweets />}>
              Find Your Person
            </MainButton>
          </Suspense>
        </InfoBlock>
      </Container>
    </MainSection>
  );
};
export default Main;
