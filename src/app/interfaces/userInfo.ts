export enum accessLevels {
    ADMIN,
    USER
}

export interface UserInfo {
    name: string;
    userId: number;
    access: accessLevels;
}