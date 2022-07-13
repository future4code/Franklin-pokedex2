import { ButtonPage } from "./styles";

const Pagination = ({ goToPrevPage, goToNextPage }) => {
  return (
    <div>
      {goToPrevPage && <ButtonPage onClick={goToPrevPage}>Previous</ButtonPage>}
      {goToNextPage && <ButtonPage onClick={goToNextPage}>Next</ButtonPage>}
    </div>
  );
};

export default Pagination;
