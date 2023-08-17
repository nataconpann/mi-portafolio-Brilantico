const copyToClipboard = (element) => {
    const $tempInput = $("<input>");

    $("body").append($tempInput);
    $tempInput.val($(element).text()).select();
    document.execCommand("copy");
    $tempInput.remove();

    tooltipFunction();
};

const tooltipFunction = () => {  
    const tooltip = document.getElementById("tooltip");

    tooltip.classList.add('active');
    setTimeout(() => {
       tooltip.classList.remove('active');
    }, 1500);
}

$('.boton4 .email').click(function() {
    copyToClipboard('.boton4 .text');

    // With text marked.
    textField.addClass('boton4_selected');
});

const textField = $('.boton4 .text');
const text = "hello@brilantico.com";

textField.text(text);