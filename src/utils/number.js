const formatNumber = (n) => {
    const formattedNumber =
        n && n !== 'unknown' && typeof n === 'string' ? new Intl.NumberFormat('it-IT', { maximumSignificantDigits: 3 }).format(n) : n;
    return formattedNumber || '-';
};

export { formatNumber };
