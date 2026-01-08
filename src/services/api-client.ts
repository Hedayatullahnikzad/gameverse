import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key : 'b17f5f6264cb4a4b9146077ba206619f'
    }
})