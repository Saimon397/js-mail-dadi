const authorized_list = ['player@gmail.com', 'player1@gmail.com', 'player2@gmail.com', 'player3@gmail.com'];

let output = document.querySelector('.verify');
console.log(output)
let verifyBtn = document.getElementById('btn-verify');

verifyBtn.addEventListener('click', function () {
    let MailUser = document.getElementById('mail-check').value;
    for (i = 0; i < authorized_list.length; i++) {

        console.log(MailUser);
        if (MailUser == authorized_list[i]) {
            output.innerHTML = "Access allowed..";
            break;
        }
        else if (MailUser == '') {
            output.innerHTML = "E-mail address required!";
        }
        else {
            output.innerHTML = "Access denied.";
        }
    }
})