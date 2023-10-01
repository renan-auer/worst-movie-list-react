import axiosClient from './axiosClient'

const clienteService = {
    getYearsWithMultipleWinners: () => axiosClient.get(`?projection=years-with-multiple-winners`),
    getStudiosWinners: () => axiosClient.get(`?projection=studios-with-win-count`),
    getProducersIntervalWin: () => axiosClient.get(`?projection=max-min-win-interval-for-producers`),
    getMoviesByYear: (year) => axiosClient.get(`?winner=true&year=${year}`),
    getMovies: (page, size, winner, year) => {
        let query = `?page=${page}&size=${size}`
        if (year) query += `&year=${year}`
        if (winner === true || winner === false) query += `&winner=${winner}`
        return axiosClient.get(query)
    },
}

export default clienteService;