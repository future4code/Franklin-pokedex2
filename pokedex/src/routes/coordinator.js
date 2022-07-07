import { BASE_URL } from "../constants/urls"

export const goToDetailsPage = (navigate, id) => {
    navigate(`${BASE_URL}/detalhes/${id}`)
}

export const goToLastPage = (navigate) => {
    navigate(-1)
}
export const goToPokedex = (navigate) => {
    navigate(`${BASE_URL}/pokedex`)
}