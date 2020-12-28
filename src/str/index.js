export const findQuotedString = (str) => {
    const regExp = /"(\\.|[^"\\])*"/g;
    return str.match(regExp);
};
