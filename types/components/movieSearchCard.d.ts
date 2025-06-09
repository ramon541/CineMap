interface MovieSearchCardProps
    extends Pick<
        MovieTMDB,
        | 'id'
        | 'title'
        | 'vote_average'
        | 'poster_path'
        | 'genre_ids'
        | 'overview'
    > {}
