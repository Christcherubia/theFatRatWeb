const fadeInRandom = () => {
    const titleContent = ['This is,', 'a big', 'fat rat !!!', 'Biger', 'η КРЫСА,']
    const randomWords = Math.floor(Math.random() * titleContent.length);
    return titleContent[randomWords]   
}
const titleContent = document.querySelector(".titleContent");
setInterval(() => {
    titleContent.innerText = fadeInRandom();

}, 1480);

const animeRandome = () => {
    const textAnime = ['ΑΡΟΥΡΑΙΟΣ αρουραιος, крыса, c,', 'עכברוש, rotta ROTTA,', 'fat rat !!!', 'RATS rats,', 'עכברוש, rotta ROTTA, RATS rats,',
    'ROTTA, RATS rats, αρουραιος, крыса ...'];
    const randomSentences = Math.floor(Math.random() * textAnime.length);
    return textAnime[randomSentences]   
}

const textAnime = document.querySelector(".textAnime");
setInterval(() => {
    textAnime.innerText = animeRandome();

}, 2100);