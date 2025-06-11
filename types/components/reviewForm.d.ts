interface ReviewFormProps<T> {
    movieId: number;
    onSubmitForm: (data: T) => void;
}
