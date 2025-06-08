interface GenreListProps {
    genres: Array<GenreTMDB>;
    selectedGenre: GenreTMDB;
    setSelectedGenre: (genre: GenreTMDB) => void;
}
