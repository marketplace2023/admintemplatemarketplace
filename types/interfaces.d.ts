export interface Usuario {
    userId: number,
    userFoto: string,
    userLogin: string,
    userFirstName: string,
    userLastName: string,
    phone: string,
    emailAddress: string,
    addressUser: string,
    roles: string,
};
export interface Tienda {
    storeId: number;
    storeFoto: string;
    storeRif: string;
    storeName: string;
    storeDireccion: string;
    phone: string;
    emailAddress: string;
    descripcionCorta: string;
    facebbok: string;
    instagram: string;
    twitter: string;
    whatsapp: string;
};