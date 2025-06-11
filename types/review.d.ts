interface IReview {
    id: number;
    userId: number;
    movieId: number;
    rating: number;
    comment: string;
}

interface IUserReview extends IReview {
    user: Pick<IUser, 'id' | 'name'>;
}
