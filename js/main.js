document.querySelector('button').onclick = function () {
    let inputName = document.getElementById('name1').value;
    document.getElementById('name').textContent = inputName;
    let inputSurname = document.getElementById('surname1').value;
    document.getElementById('surname').textContent = inputSurname;
    let inputPhone = document.getElementById('phone1').value;
    document.getElementById('phone').textContent = inputPhone;

}