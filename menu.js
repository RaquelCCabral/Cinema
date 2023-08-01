let open;

document.getElementById('btn_open').addEventListener('click', e => {
    open = true;
    menu();
})

document.getElementById('btn_close').addEventListener('click', e => {
    open = false;

    menu();
})

function menu() {
    if (open) {
        document.getElementById('menu').style.marginLeft = 0;
        return;
    }

    document.getElementById('menu').style.marginLeft = '-250px';
}