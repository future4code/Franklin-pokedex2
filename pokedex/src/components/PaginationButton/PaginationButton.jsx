import { ButtonPage, ButtonsContainer } from "./styles";

const Pagination = ({ goToPrevPage, goToNextPage }) => {
  return (
    <ButtonsContainer>
      {goToPrevPage && <ButtonPage onClick={goToPrevPage}>Previous</ButtonPage>}
      {goToNextPage && <ButtonPage onClick={goToNextPage}>Next</ButtonPage>}
    </ButtonsContainer>
  );
};

export default Pagination;
