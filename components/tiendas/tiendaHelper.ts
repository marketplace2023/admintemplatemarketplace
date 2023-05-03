export type TiendaFormValues = {
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
export const tiendaDefaultValues: TiendaFormValues = {
    storeId: 0,
    storeFoto: '',
    storeRif: '',
    storeName: '',
    storeDireccion: '',
    phone: '',
    emailAddress: '',
    descripcionCorta: '',
    facebbok: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
}