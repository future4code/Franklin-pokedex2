export const goToDetailsPage = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}

export const goToLastPage = (navigate) => {
    navigate(-1)
}
export const goToPokedex = (navigate) => {
    navigate(`/pokedex`)
}