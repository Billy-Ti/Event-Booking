import './assets/scss/all.scss';

// 引入 BS JS 檔
import './node_modules/bootstrap/dist/js/bootstrap.bundle';

// 引入 AOS 動畫套件
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// 初始化動畫套件
AOS.init();


// 登入頁表單驗證

// 每個有 .needs-validation 的 <form> 元素，觸發 submit 事件時，
// 將該元素加入 class 'was-validated'
$('.needs-validation').each(function (index) {
    $(this).on('submit', function (e) {
        e.preventDefault();
        $(this).addClass('was-validated');
    });
});

// $(document).ready(function () {
//     alert('hello');
// });

// bsFormValidation();

// function bsFormValidation() {
//     const validation = document.querySelectorAll(".needs-validation");

//     console.log(validation);
//     validation.forEach((form) => {
//         form.addEventListener("submit", (e) => {
//             if (!e.target.checkValidity()) {
//                 e.preventDefault();
//                 e.stopPropagation();
//             }

//             e.target.classList.add("was-validated");
//         });
//     });
// }


