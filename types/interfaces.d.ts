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
    userPassword: string,
};
export interface Admin {
    adminId: number,
    adminFoto: string,
    adminLogin: string,
    adminName: string,
    adminLastName: string,
    adminphone: string,
    adminEmailAddress: string,
    adminPassword: string
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
    facebook: string;
    instagram: string;
    twitter: string;
    whatsapp: string;
};
export interface Ayuda {
    contectId: number;
    contectCodigo: string;
    contectTitle: string;
    contectTexto: string;
    contectTopic: string;
};
export interface Topico {
    topicId: number;
    topicCodigo: string;
    topicTitle: string;
    topicIcono: string;
    topicTopic: string;
}