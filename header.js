/*
    Items de la navbar.
    Aquí es guarda tota la info de cada parell de linies de la navbar en format JSON.
    Per cada item a la navbar es hi ha un element amb la següent estructura:

        {
            line1: {
                text: "",
                url: ""
            },
            line2: {
                text: "",
                url: "",
                newTab: True,
            },
        },

    On line1 i line2 fan referencia a la linia de dalt i de baix de cada item de la navbar.
    Cada linia te o pot tindre els següents atributs

    - text:      Text que es mostra a la web.

    - url:       Atribut optatiu que determina l'href de la linia (si no volem que la linia sigui un enllaç millor no possar-lo)
                 En el cas que volguem un enllaç per enviar un correu s'ha de possar seguint el seguent format: "mailto:example@mail.com"

    - newTab:    Atribut optatiu per si es vol que l'enllaç sobri en una nova pestanya. Si no es posa el seu valor es false
                 true  ->  S'obre en una nova pestanya
                 false ->  No s'obre en una nova pestanya (valor per defecte)
 */

let header = [
    {
        line1: {
            text: "ANA LLIMONA",
            url: "https://www.anallimona.com/",
        },
        line2: {
            text: "",
        },
    },
    {
        line1: {
            text: "ART DIRECTOR AND",
        },
        line2: {
            text: "GRAPHIC DESGINER",
        },
    },
    {
        line1: {
            text: "CURRENTLY WORKING IN",
        },
        line2: {
            text: "MIRINDA COMPANY STUDIO",
        },
    },
    {
        line1: {
            text: "INSTAGRAM @ANALLIMONA",
            url: "https://www.instagram.com/anallimona",
            newTab: true,
        },
        line2: {
            text: "ANALLIMONA@HOTMAIL.COM",
            url: "mailto:anallimona@hotmail.com"
        },
    },
]