import { LoadBtn } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = ({ onBtnClick }) => {
  const handleLoadMore = () => {
    onBtnClick();
  };

  return (
    <LoadBtn type="button" onClick={handleLoadMore}>
      LoadMore
    </LoadBtn>
  );
};
