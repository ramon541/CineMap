interface IUser {
    id: number;
    name: string;
    password: string;
    email: string;
    active: boolean;
    nickname: string;
    birthDate: Date;
    createdAt: Date;
    updatedAt: Date;
    userType: 'A' | 'C';
}

interface IToken {
    token: string;
}
