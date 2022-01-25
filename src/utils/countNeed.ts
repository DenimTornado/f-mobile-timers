// const decimalAdjust = (type: string, value: any, exp: any) => {
//     if (typeof exp === 'undefined' || +exp === 0) {
//         return Math[type](value);
//     }
//     value = +value;
//     exp = +exp;
//     if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
//         return NaN;
//     }
//     value = value.toString().split('e');
//     value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
//     value = value.toString().split('e');
//     return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
// }
//
// export function round10(value:any, exp:any) {
//     return decimalAdjust('round', value, exp);
// }
//
// export function ceil10(value:any, exp:any) {
//     return decimalAdjust('ceil', value, exp);
// }

export function countNeed(need: number, ranks?: number) {
    let count = need;
    if (ranks) {
        count = count - ranks;
    }
    const roundedUp = Math.ceil(count / 11);
    const avg = count / 11;

    const needMore = (roundedUp - avg + 0.1 ) * 11;
    return Math.round(needMore);
}
