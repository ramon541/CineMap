interface IInputErrorProps extends Omit<ITextProps, 'text'>, IInputBaseProps {
    error?: ITextProps['text'];
}
