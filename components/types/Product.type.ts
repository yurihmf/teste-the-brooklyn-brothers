export interface IProduct{
    category:{
        _id: string;
        name: string;
    }
    id: string;
    images: [
        {
            alt: string;
            asset: {
                url: string;
            }
        }
    ]
    name: string;
    shortDescription: string;

}