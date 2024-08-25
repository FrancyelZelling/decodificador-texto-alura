// Pegar o texto do text-area
let textArea = document.getElementById("text-area")
let asideElement = document.getElementById("aside")
let asideTextElement = document.getElementById("asideText")

function onClickEncrypt(){
  const newText = encrypt(textArea.value)
  setAsideContent(newText)
}

function onClickDecrypt(){
  const newText = decrypt(textArea.value)
  setAsideContent(newText)
}

function onClickCopyBtn(){
  const text = document.getElementById("decryptedText")
  navigator.clipboard.writeText(text.textContent);
  alert("O texto foi copiado.")
}

function encrypt(text) {
  const listEncrypt = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  return replaceVowels(text, listEncrypt);
}

function replaceVowels(text, list) {
  let arr = [];
  for (i = 0; i <= text.length; i++) {
    let char = text.charAt(i);
    if (char in list) {
      arr.push(list[char]);
    } else {
      arr.push([char]);
    }
  }
  return arr.join("")
}

function decrypt(textEncrypted) {
  const text = textEncrypted;
  let newText;
  newText = text.replace(/ai/g, "a");
  newText = newText.replace(/enter/g, "e");
  newText = newText.replace(/imes/g, "i");
  newText = newText.replace(/ober/g, "o");
  newText = newText.replace(/ufat/g, "u");
  return newText
}

function setAsideContent(text) {
  asideElement.innerHTML = ""
  asideElement.style.justifyContent = "space-between"

  let newTextElement = document.createElement("p")
  newTextElement.classList.add("aside__text")
  newTextElement.id = "decryptedText"
  const node = document.createTextNode(text)
  newTextElement.appendChild(node)

  let newButtonElement = document.createElement("button")
  newButtonElement.textContent = "Copiar"
  newButtonElement.classList.add("copy__button")
  newButtonElement.setAttribute("onClick", "onClickCopyBtn()")

  asideElement.appendChild(newTextElement)
  asideElement.appendChild(newButtonElement)
}
