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

export function floor10(value:any, exp = 0) {
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math.floor(value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(exp % 1 === 0)) {
        return NaN;
    }
    value = value.toString().split('e');
    value = Math.floor(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}
