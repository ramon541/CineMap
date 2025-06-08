interface MovieCardProps
    extends RatingProps,
        Pick<MovieTMDB, 'id' | 'title' | 'poster_path' | 'genre_ids'> {}
