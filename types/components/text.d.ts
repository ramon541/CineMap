interface ITextProps<T = unknown, K = unknown> {
    text: string;
    color?: string;
    fontSize?: number;
    fontFamily?: K;
    style?: T;
}
