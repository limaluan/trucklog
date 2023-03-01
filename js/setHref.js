(function () {
    linksToPages = {
        'Benefícios': '#main-benefits-section',
        'Dados': '#our-data-section',
        'Home': '#home-container',
        'Parceiros': '#partners-container',
        'Como Funciona': '#how-it-works-container',
        'Contrate': '#product-form-container'
    }
    document.querySelectorAll('footer .desktop a').forEach(function (element) {
        element.href = linksToPages[element.innerText];
    });
    document.querySelectorAll('nav a').forEach(function (element) {
        element.href = linksToPages[element.innerText];
    });
})()