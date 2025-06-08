import { initialWindowMetrics } from 'react-native-safe-area-context';

// = ============================================================
export const wait = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));

// = ============================================================
export const getBottomBar = () => {
    return initialWindowMetrics?.insets.bottom ?? 0;
};

//= =================================================================================
export const getTopBar = () => {
    return initialWindowMetrics?.insets.top ?? 0;
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

// = ============================================================
export const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'bom dia!';
    if (hour >= 12 && hour < 18) return 'boa tarde!';
    return 'boa noite!';
};

// = ============================================================
export const formatDateToReadableString = (data: string): string => {
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    const [ano, mes, dia] = data.split('-');
    const nomeMes = meses[parseInt(mes) - 1];

    return `${dia} de ${nomeMes} de ${ano}`;
};

//= =================================================================================
export function truncateString(str: string, maxLength: number = 10): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
}
