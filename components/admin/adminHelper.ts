
export type AdminFormValues = {
    adminId: number;
    adminFoto: string;
    adminLogin: string;
    adminName: string;
    adminLastName: string;
    adminphone: string;
    adminEmailAddress: string,
    adminPassword: string

};
export const adminDefaultValues: AdminFormValues = {
    adminId: 0,
    adminFoto: '',
    adminLogin: '',
    adminName: '',
    adminLastName: '',
    adminphone: '',
    adminEmailAddress: '',
    adminPassword: ''

}