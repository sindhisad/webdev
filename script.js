// Price change based on country selection
document.getElementById('country-select').addEventListener('change', function() {
    const country = this.value;
    let price = '';

    switch(country) {
        case 'IN':
            price = '?7999/month';
            break;
        case 'US':
            price = '$120/month';
            break;
        case 'UK':
            price = '£100/month';
            break;
        default:
            price = 'Contact for pricing';
    }

    document.querySelector('.pricing-details p').textContent = `Web development and AI courses for ${price}, taught by industry experts.`;
});
