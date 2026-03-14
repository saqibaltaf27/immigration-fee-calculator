// Calculates total estimated immigration case cost

export function calculateTotal(base, addons) {

    let total = base.uscisFee + base.attorneyFee;

    if(addons.premium) total += 2500;
    if(addons.dependent) total += 500;
    if(addons.consular) total += 800;

    return total;
}