export function isMathExpression(string) {
    const regex = /\d*[/+\-\*%]?(\(?)\d*([/+\-\*%]\d*)(\)?)/gi;
    return regex.test(string);
}
