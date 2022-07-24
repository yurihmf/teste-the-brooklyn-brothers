import axios from "axios";

export const jsonInstance = axios.create({
    baseURL: 'https://api.jsonbin.io/v3',
    headers: {
        'X-Master-Key': `${process.env.NEXT_PUBLIC_MASTER_KEY}`,
        'X-Access-Key': `${process.env.NEXT_PUBLIC_ACCESS_KEY}`
    }
})