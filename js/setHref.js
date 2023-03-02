// (function () {
//     linksToPages = {
//         'Benefícios': 'index.html#main-benefits-section',
//         'Dados': 'index.html#our-data-section',
//         'Home': 'index.html#home-container',
//         'Parceiros': 'index.html#partners-container',
//         'Como funciona': 'index.html#how-it-works-container',
//         'Contrate': 'index.html#product-form-container'
//     }
//     var elements = document.querySelectorAll('footer .desktop a');
//     for (let e = 0; e < elements.length; e++) {
//         const element = elements[e];
//         let navItem = element.innerHTML;
//         console.log(navItem);
//         switch (element.innerHTML) {
//             case 'Benefícios':
//                 element.setAttribute('href', 'index.html#main-benefits-section');
//                 break;
//             case 'Dados':
//                 element.setAttribute('href', 'index.html#our-data-section');
//                 break;
//             case 'Home':
//                 element.setAttribute('href', 'index.html#home-container');
//                 break;
//             case 'Parceiros':
//                 element.setAttribute('href', 'index.html#partners-container');
//                 break;
//             case 'Como funciona':
//                 element.setAttribute('href', 'index.html#how-it-works-container');
//                 break;
//             case 'Contrate':
//                 element.setAttribute('href', 'index.html#product-form-container');
//                 break;
//             default:
//                 if(!element == undefined) element.setAttribute('href', '#');
//                 break;
//         }
//     }
    
//     document.getElementsByClassName('footer-truck-logo').href = 'index.html#';

//     document.querySelectorAll('footer .desktop a').forEach(function (element) {
//         element.href = linksToPages[element.innerText];
        
//     });
//     document.querySelectorAll('nav a').forEach(function (element) {
//         element.href = linksToPages[element.innerText];
//     });
// })()

const alertPoliticaDePrivacidade = () => {
    confirm('A política de privacidade é um documento que descreve como uma empresa coleta, usa, armazena e protege as informações pessoais dos usuários que interagem com seu site, aplicativo ou serviço. Ele geralmente inclui informações como quais dados são coletados, como são usados, com quem são compartilhados, por quanto tempo são armazenados e como os usuários podem controlar suas informações pessoais. A política de privacidade é importante para garantir que os usuários estejam cientes das práticas de privacidade de uma empresa e possam tomar decisões informadas sobre o uso de seus dados pessoais.');
}