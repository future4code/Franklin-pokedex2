import useRequestData from "../../hooks/useRequestData";
import PokeCard from "../../components/PokeCard/PokeCard";
import { Container, ContainerGrid, PaginationContainer } from "./styles";
import { BASE_URL } from "../../constants/urls";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/coordinator";
import PokeLogo from "../../components/PokeLogo/PokeLogo";
import { useEffect, useState } from "react";
import Pagination from "../../components/PaginationButton/PaginationButton";

const Home = () => {
  const navigate = useNavigate();
  const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}/pokemon`);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const pokemonsUrl = useRequestData(currentPageUrl, {});

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  useEffect(() => {
    setNextPageUrl(pokemonsUrl.next);
    setPrevPageUrl(pokemonsUrl.previous);
  }, [pokemonsUrl.next, pokemonsUrl.previous]);

  return (
    <Container>
      <Header onClick={() => goToPokedex(navigate)} children={<PokeLogo />} />
      <ContainerGrid>
        {pokemonsUrl.results?.map((pokemonUrl, index) => {
          return <PokeCard key={index} pokemonCard={pokemonUrl} />;
        })}
      </ContainerGrid>

      <PaginationContainer>
        {goToPrevPage && (
          <Pagination goToPrevPage={prevPageUrl ? goToPrevPage : null} />
        )}
        {goToNextPage && (
          <Pagination goToNextPage={nextPageUrl ? goToNextPage : null} />
        )}
      </PaginationContainer>
    </Container>
  );
};

export default Home;
