
const copy = () => {
    const copyText = document.getElementById("decrypt-text-area");
    copyText.select();
    document.execCommand("Copy");
}

function copyPaste(){
    document.getElementById("encrypt-text-area").value = document.getElementById("decrypt-text-area").value;
}

const encrypt = () => {
    const encriptar = document.getElementById('encrypt-text-area').value;
    const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("decrypt-text-area").value = encriptado
}

function decrypt(){
    const desencriptar= document.getElementById ("encrypt-text-area").value;
    const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("decrypt-text-area").value = desencriptado
}

const copyButton = document.getElementById("copy-button");
const copyPasteButton = document.getElementById("copy-paste-button");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");

decryptButton.onclick = decrypt;
encryptButton.onclick = encrypt;
copyButton.onclick = copy;
copyPasteButton.onclick = copyPaste;

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/