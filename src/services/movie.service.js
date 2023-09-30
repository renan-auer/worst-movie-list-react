import axiosClient from './axiosClient'

const clienteService = {
    getYearsWithMultipleWinners: () => axiosClient.get(`?projection=years-with-multiple-winners`),
    getStudiosWinners: () => axiosClient.get(`?projection=studios-with-win-count`),
    getProducersIntervalWin: () => axiosClient.get(`?projection=max-min-win-interval-for-producers`),
    getMoviesByYear: (year) => axiosClient.get(`?winner=true&year=${year}`),
}

export default clienteService;