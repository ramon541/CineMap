import { initialWindowMetrics } from 'react-native-safe-area-context';

// = ============================================================
export const wait = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));

// = ============================================================
export const getBottomBar = () => {
    return initialWindowMetrics?.insets.bottom ?? 0;
};

// = ============================================================
export const toISODate = (brDate: string) => {
    const [day, month, year] = brDate.split('/');
    if (!day || !month || !year) return '';
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

// = ============================================================
export const numberMask = (text: string) => text.replace(/\D/g, '');

// = ============================================================
export const dateMask = (text: string) => {
    const cleaned = numberMask(text);

    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 4)
        return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(
        4,
        8
    )}`;
};
