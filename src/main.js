function createElementWithClass(tagName, classes) {
    const el = document.createElement(tagName);

    el.setAttribute("class", classes);

    return el;
}

function createItem(color, desc) {
    const elmItem = createElementWithClass("div", "palette-item");
    const elmColor = createElementWithClass("div", "palette-color");
    const elmDesc = createElementWithClass("div", "palette-desc");
    const elmInput = createElementWithClass("input", "palette-input");

    elmColor.style.backgroundColor = color;
    elmInput.value = color;
    elmDesc.textContent = desc;

    elmItem.appendChild(elmColor);
    elmItem.appendChild(elmInput);
    elmColor.appendChild(elmDesc);

    elmInput.onfocus = () => elmInput.select();

    return elmItem;
}

const paletteContainer = document.querySelector(".palette");

fetch("data/code.json").then(response => {
    return response.json();
}).then(colorList => {
    for (const {desc, color} of colorList) {
        console.log(desc, color);
        paletteContainer.appendChild(createItem(color, desc));
    }
});