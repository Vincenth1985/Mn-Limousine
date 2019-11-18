var language = {
    eng: {
        reservez: "Order Now",

        services: "PRIVATE DRIVER SERVICE",

        servicesExplication: "You are visiting Belgium but you do not want to waste time with taxi services or\n" +
            "            public transport? Mn-Limousine offers a tailor-made service. You will be taken care of by a\n" +
            "            experienced private driver all over Belgium.",


        vehiculeComfortable: "COMFORTABLE AND LUXURY VEHICLE",

        vehiculeComfortableExplication: "An experienced driver with a luxury car or minibus.\n" +
            "            VIP cars with drivers for the frames",


        voyagerSerainement :"TRAVEL SERABLY",

        voyagerSerainementExplication : "No waste of time, no worry for the most efficient route, the greatest comfort.",

        transfert : "AIRPORT TRANSFER",

        transfertexplication:"For those who do not wish to decipher foreign public transport cards or negotiate with\n" +
            "            local taxi companies, Mn-limousine offers a service that will take you directly to your\n" +
            "            airport.",


    },

    fr: {

        reservez: "Reservez maintenant"

    }

};

//define language via window hash
if (window.location.hash) {

    if (window.location.hash === "#eng") {

        res.textContent = language.eng.reservez;

        ser.textContent = language.eng.services;
        serex.textContent = language.eng.servicesExplication;

        veh.textContent = language.eng.vehiculeComfortable;
        vehex.textContent = language.eng.vehiculeComfortableExplication;

        voy.textContent= language.eng.voyagerSerainement;
        voyex.textContent=language.eng.voyagerSerainementExplication;

        tra.textContent=language.eng.transfert;
        traex.textContent=language.eng.transfertexplication;










    }

    if (window.location.hash === "#fr") {
        res.textContent = language.fr.reservez;
    }
}

function reload(hash) {
    location.assign(location.replace(hash));
    location.reload();
}