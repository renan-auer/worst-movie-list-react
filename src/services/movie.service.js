import axiosClient from './axiosClient'

const clienteService = {
    getYearsWithMultipleWinners: () => axiosClient.get(`?projection=years-with-multiple-winners`),
}

export default clienteService;