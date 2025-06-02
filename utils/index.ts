import { initialWindowMetrics } from 'react-native-safe-area-context';

// = ============================================================
export const wait = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));

// = ============================================================
export const getBottomBar = () => {
    return initialWindowMetrics?.insets.bottom ?? 0;
};
