import axiosClient from './axiosClient'

const clienteService = {
    getYearsWithMultipleWinners: () => axiosClient.get(`?projection=years-with-multiple-winners`),
    getStudiosWinners: () => axiosClient.get(`?projection=studios-with-win-count`),
}

export default clienteService;