import { PropsWithChildren } from 'react';
import { PaperProvider } from 'react-native-paper';

export default function Providers({ children }: PropsWithChildren) {
    return <PaperProvider>{children}</PaperProvider>;
}
