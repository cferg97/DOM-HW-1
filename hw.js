function changeH1()
{
    document.getElementById("heading").innerHTML = "BUY OUR MOBILE PHONES"
}

function changeBG()
{
    document.body.style.background = "skyblue"
}

function changeFooter()
{
    document.querySelector('footer').innerHTML = "This business is 100% Legit"
}

function addLinkClass()
{
    for (let node of document.querySelectorAll("a"))
    {
        console.log(node)
        node.classList.add("huge-text")
    }
}

function imageVisability()
{
    for (let image of document.querySelectorAll("img"))
    {
        image.classList.toggle("hidden")
    }
}

function setColour()
{
    const color = getRandomColor()

    for (let Price of document.querySelectorAll("tr > td:nth-child(3)"))
    Price.style.color = color
}

function getRandomColor()
{
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return "rgb(" + red + ", " + green +", " + blue +")"

}

console.log(getRandomColor())