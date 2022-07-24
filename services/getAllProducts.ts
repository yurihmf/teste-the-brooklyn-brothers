import { AxiosResponse } from 'axios';
import { Product } from '../components/types/Product.type';
import { jsonInstance } from '../utils/instance';

interface GetAllProductsResponse{
    record:{
        data:{
            nodes: Product[]
        }
    }
    metadata: {
        id: string;
        private: boolean;
        createdAt: string;
        name: string;
    }
}

export const getAllProducts = async () => {
    try{ 
        const response: AxiosResponse<GetAllProductsResponse> = await jsonInstance.get(`/b/${process.env.NEXT_PUBLIC_BIN_ID}`)

        return response
    } catch (error){
        console.error(error)
    }
}
