
export type UsuarioFormValues = {
    userId: number;
    userFoto: string;
    userLogin: string;
    userFirstName: string;
    userLastName: string;
    phone: string;
    emailAddress: string;
    addressUser: string;
    roles: string;
    userPassword: string,
};
export const usuarioDefaultValues: UsuarioFormValues = {
    userId: 0,
    userFoto: '',
    userLogin: '',
    userFirstName: '',
    userLastName: '',
    phone: '',
    emailAddress: '',
    addressUser: '',
    roles: '',
    userPassword: '',
}