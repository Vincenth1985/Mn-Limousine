var language = {
    eng: {
        reservez: "Order Now"
    },
    fr: {
        reservez: "Reservez maintenant"
    }
};

//define language via window hash
if (window.location.hash) {

    if (window.location.hash === "#eng") {
        res.textContent = language.eng.reservez;
    }

    if (window.location.hash === "#fr") {
        res.textContent = language.fr.reservez;
    }
}

function reload(hash) {
    location.assign(location.replace(hash))
    location.reload()
}