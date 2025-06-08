interface SliderItemProps<T> extends SliderItem {
    index: number;
    scrollX: T;
}

interface SliderItem
    extends Pick<
        MovieTMDB,
        'id' | 'backdrop_path' | 'title' | 'release_date'
    > {}
