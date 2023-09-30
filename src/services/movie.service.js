import axiosClient from './axiosClient'

const clienteService = {
    getYearsWithMultipleWinners: () => axiosClient.get(`?projection=years-with-multiple-winners`),
    getStudiosWinners: () => axiosClient.get(`?projection=studios-with-win-count`),
    getProducersIntervalWin: () => axiosClient.get(`?projection=max-min-win-interval-for-producers`),
}

export default clienteService;