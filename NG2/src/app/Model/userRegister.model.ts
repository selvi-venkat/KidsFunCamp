export interface userRegModel{
    userName?: string | null,
    email?: string | null,
    password?: string | null,
    confirmPassword?: string | null,
    address?: {
        street?: string| null,
        city?: string | null,
        state?: string | null,
        zipcode?: string | null
    }[],
    gender?: string | null,
    interest?: string[] | null,
    contactNumber?: string[] | null,
    interestValues?: string[] | null,
}
