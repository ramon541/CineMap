interface SliderItemProps {
    item: Pick<MovieTMDB, 'id' | 'backdrop_path' | 'title' | 'overview'>;
    index: number;
}
