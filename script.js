let title = document.getElementById("title");
let sub = document.getElementById("sub");
let meaning = document.getElementById("meaning");
let more = document.getElementById("more");

let data = fetch("https://api.dictionaryapi.dev/api/v2/entries/en/keyboard");
data
  .then((data) => data.json())
  .then((imgData) => {
    //console.log(imgData.title);
    title.innerText = imgData[0].word;
    sub.innerHTML = `
    ${imgData[0].phonetic} <button type="button" id="btnVoice"><i class="fa fa-microphone fa-2xl" aria-hidden="true"></i></button>
    `;
    let btnVoice = document.getElementById("btnVoice");
    const audio = new Audio(imgData[0].phonetics[0].audio);
    btnVoice.addEventListener("click", () => {
      audio.play();
    });
    console.log();
    meaning.innerHTML = imgData[0].meanings[0].definitions[0].definition;
    more.setAttribute("href", imgData[0].sourceUrls);
  })
  .catch((error)=>console.log(error))

function getData() {
  let word = document.getElementById("word").value;
  console.log(word);
  let data = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  data
    .then((data) => data.json())
    .then((imgData) => {
      //console.log(imgData.title);
      title.innerText = imgData[0].word;
      sub.innerHTML = `
    ${imgData[0].phonetic} <button type="button" id="btnVoice"><i class="fa fa-microphone fa-2xl" aria-hidden="true"></i></button>
    `;
      let btnVoice = document.getElementById("btnVoice");
      const audio = new Audio(imgData[0].phonetics[0].audio);
      btnVoice.addEventListener("click", () => {
        audio.play();
      });
      console.log();
      meaning.innerHTML = imgData[0].meanings[0].definitions[0].definition;
      more.setAttribute("href", imgData[0].sourceUrls);
    });
}
