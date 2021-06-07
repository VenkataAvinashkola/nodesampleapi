export interface CRUD {
    //add curd methods
    parsev1: (resource: any) => Promise<any>,
    parsev2: (resource: any) => Promise<any>,

}