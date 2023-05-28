const buttonForm = document.getElementById("result");

//ИМЯ
const nameForm = document.getElementById("name");
const nameResult = document.getElementById("name_result");

buttonForm.addEventListener('click', function () {
const spacePosition = nameForm.value.indexOf(" ");
if (spacePosition != -1) {
nameResult.value = nameForm.value[0].toUpperCase() + nameForm.value.slice(1,spacePosition+1) + nameForm.value[spacePosition+1].toUpperCase() + nameForm.value.slice(spacePosition+2);
}else{
    nameResult.value = nameForm.value[0].toUpperCase() + nameForm.value.slice(1);
}});



//ФОТО
const fotoForm = document.getElementById("foto");
const fotoResult = document.getElementById("img_foto");

buttonForm.addEventListener('click', function () {
    fotoResult.src = fotoForm.value;
});



//КОММЕНТАРИЙ
const commentForm = document.getElementById("comment");
const commentResult = document.getElementById("comment_result");

buttonForm.addEventListener('click', function () {
    let resultText = ""
    resultText = commentForm.value.replace(/viagra/gi, "***");
    resultText = resultText.replace(/виагра/gi, "***");
    resultText = resultText.replace(/xxx/gi, "***");
    commentResult.innerHTML = resultText;
});










