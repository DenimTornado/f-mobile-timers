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
    let sum = need;
    if (ranks) {
        sum = sum - ranks;
    }
    const currentAverage = Math.ceil(sum / 11);
    const targetSum = currentAverage * 11 + 0.01;
    const diff = Math.ceil(targetSum - sum);

    return Math.round(diff);
}
