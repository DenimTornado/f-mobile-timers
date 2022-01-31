export function addLeadingZero(number: number | undefined, add?: number) {
    if (typeof number === 'undefined' || number === 0 && !add) {
        return '00';
    }
    const withAdditional = add ? number + add : number;
    return withAdditional < 10 ? '0' + withAdditional : withAdditional;
}
