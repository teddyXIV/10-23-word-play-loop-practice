function handleForm(event) {
    event.preventDefault();

    let userSentence = document.querySelector("input#sentence").value;
    userSentenceSplit = userSentence.split(" ");
    console.log(userSentenceSplit)
    let newArray = []

    const previousResults = document.querySelectorAll("p")
    previousResults.forEach(element => element.remove());

    userSentenceSplit.forEach(function (element) {
        if (element.length >= 3) {
            newArray.push(element)
        }
    })


    const reversedArray = newArray.reverse();

    const newSentence = reversedArray.join(" ");

    const pElement = document.createElement("p");
    document.body.append(pElement);
    pElement.append(newSentence);
}




window.addEventListener("load", function () {
    document.querySelector("form#sentence-form").addEventListener("submit", handleForm);
});