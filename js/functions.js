// data to populate the menu
const menuData = [
    {
        src: './assets/home_FILL0_wght300_GRAD0_opsz24.svg',
        label: 'Overview'
    },
    {
        src: "./assets/group_FILL0_wght300_GRAD0_opsz24.svg",
        label: "Patients"
    },
    {
        src: "./assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
        label: 'Schedule'
    },
    {
        src: "./assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg",
        label: 'Message'
    },
    {
        src: "./assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg",
        label: "Transactions"
    }

];

const populateMenu = (data) => {
    const menu = document.getElementById('menu-container');
    data.forEach((button, index) => {
        addElement({
            type: 'div',
            class: "button-container",
            id: `button-container-${index}`,
            parent: menu
        })
        let parent = document.getElementById(`button-container-${index}`);
        addElement({
            type: 'a',
            href: `#button-${index}`,
            id: `href-${index}`,
            parent: parent 
        })
        parent = document.getElementById(`href-${index}`);
        addElement({
            type: 'button',
            class: "menu-button",
            id: `button-${index}`,
            parent: parent
        })
        parent = document.getElementById(`button-${index}`);
        addElement({
            type: 'img',
            class: "menu-button-icon",
            src: button.src,
            parent: parent
        })
        addElement({
            type: 'div',
            class: "menu-function",
            id: `menu-function-${index}`,
            innerHTML: button.label,
            parent: parent
        })
    });

}

const addElement = (elementSpecs) => {
    let element =  document.createElement(elementSpecs.type);
    if ("class" in elementSpecs) { 
        element.className = elementSpecs.class;
    }
    if ("id" in elementSpecs) {
        element.id = elementSpecs.id;
    }
    if ("innerHTML" in elementSpecs) {
        element.innerHTML = elementSpecs.innerHTML;
    }
    if ("href" in elementSpecs) {
        element.href = elementSpecs.href;
    }
    if ("src" in elementSpecs) {
        element.src = elementSpecs.src;
    }
    elementSpecs.parent.appendChild(element);
} 