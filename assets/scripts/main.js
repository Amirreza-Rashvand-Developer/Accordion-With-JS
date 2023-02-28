let getAccordionItem = document.querySelectorAll(".accordion__item")

getAccordionItem.forEach((item) => {
    let getAccordionHeader = item.querySelector(".accordion__header")

    getAccordionHeader.addEventListener("click", function () {
        let getAccordionContent = item.children[1]
        let addClass = getAccordionContent.classList.toggle("open")
        let getIconFromItem = item.children[0].children[0]

        if (addClass) {
            getAccordionContent.style.display = "block"
            getIconFromItem.classList.replace("bx-plus", "bx-minus")
        } else {
            getAccordionContent.style.display = "none"
            getIconFromItem.classList.replace("bx-minus", "bx-plus")
        }
    })
})