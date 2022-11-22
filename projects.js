/**
 * Info dels projectes.
 * Aquí es guarda tota la info de cada projecte en format JSON.
 * Els atributs que pot tindre un projecte són:
 *
 * - id.            Atribut amb el qual s'ordenen els projectes.
 *
 * - name.          Títol del projecte.
 *
 * - descriptipon.  Descripció del projecte.
 *
 * - type.          Atribut que defineix el tipus de contingut.
 *                  "image" per projectes amb una imatge estàndard.
 *                  "video" per projectes amb un vídeo.
 *                  "big-image" per projectes amb una imatge que ocupa tota la pantalla.
 *
 * - path.          Direcció/ruta de la imatge/vídeo dins de la carpeta del projecte.
 *
 * - mobilePath.    Atribut optatiu per si es vol una imatge/vídeo diferent en format mòbil.
 *
 * - hidden.        Atribut optatiu per si es vol que un projecte no es mostri a la web.
 *                  true -> el projecte s'oculta.
 *                  false -> el projecte es mostra (valor per defecte).
 */

let projects = [
    {
        id: 0,
        name: "WELCOME",
        description: "Click right to see my featured projects and left to go to forward.",
        type: "big-image",
        path: "assets/images/portadadesk.jpg",
        mobilePath: "assets/images/portadamobile00.jpg", 
        hidden: false,
    },
    {
        id: 10,
        name: "BRAND IDENTITY",
        description: "Tous jewlery rebranding. ©Mirinda Company ©Ruiz Company",
        type: "video",
        path: "assets/videos/TOUS-paraWEB3.webm",
        mobilePath: "assets/videos/TOUS-para-mobile2.webm",
        hidden: false,
    },
    {
        id: 11,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/pez.jpg",
        hidden: false,
    },
    {
        id: 12,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Salva López. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_002.jpg",
        hidden: false,
    },
    {
        id: 13,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/manteles.jpg",
        hidden: false,
    }, 
    {
        id: 14,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Salva López. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_003.jpg",
        hidden: false,
    }, 
    {
        id: 15,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Alba Yruela. ©Mirinda Company",
        type: "image",
        path: "assets/images/alba.jpg",
        hidden: false,
    },
    {
        id: 16,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/spring.jpg",
        hidden: false,
    },
    {
        id: 17,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Marina Denisova. ©Mirinda Company",
        type: "image",
        path: "assets/images/marina.jpg",
        hidden: false,
    },
    {
        id: 18,
        name: "BRAND IDENTITY",
        description: "Matilde Cashmere photographed by Béla Adler. ©Mirinda Company",
        type: "video",
        path: "assets/videos/matildecashemer_desktop.webm",
        mobilePath: "assets/videos/matildecashemer_mobile.webm",
        hidden: false,
    },
    {
        id: 19,
        name: "BRAND IDENTITY",
        description: "Cuines de Santa Caterina restaurant by Grupo Tragaluz. Illustration by Natália Pàmies. ©Mirinda Company",
        type: "video",
        path: "assets/videos/cuines.webm",
        hidden: false,
    }, 
    {
        id: 20,
        name: "BRAND IDENTITY",
        description: "Bijoux photographed by Martina Matencio. ©Mirinda Company",
        type: "video",
        path: "assets/videos/bijoux_desktop.webm",
        mobilePath: "assets/videos/bijoux_mobile.webm",
        hidden: false,
    },
    {
        id: 21,
        name: "CONCEPT",
        description: "Homeless objects.",
        type: "video",
        path: "assets/videos/homeless_desktop.webm",
        mobilePath: "assets/videos/homeless_mobile.webm",
        hidden: false,
    },
    {
        id: 30,
        name: "UX&UI DESIGN",
        description: "Mirinda Company webpage. Programmimg by Llos&Co ©Mirinda Company",
        type: "video",
        path: "assets/videos/videowebmirinda.webm",
        mobilePath: "assets/videos/videowebmirinda_mobile.webm", 
        hidden: false,
    },
    {
        id: 31,
        name: "UX&UI DESIGN",
        description: "Textura Interiors fragances landing webpage. ©Mirinda Company",
        type: "video",
        path: "assets/videos/landing fragancias.webm",
        hidden: false,
    },
    {
        id: 32,
        name: "UX&UI DESIGN",
        description: "Textura Interiors bed customizer. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/mobile_x_custom.webm",
        mobilePath: "assets/videos/mobile_x_custom_mb2.webm", 
        hidden: false,
    },
    {
        id: 40,
        name: "EDITORIAL DESIGN",
        description: "Flavia Company's novel Magókoro. ©Mirinda Company",
        type: "image",
        path: "assets/images/Magokoro-2.jpg",
        hidden: false,
    },
    {
        id: 42,
        name: "EDITORIAL DESIGN",
        description: "Acontraluz-Kimona dessert menu. ©Mirinda Company",
        type: "image",
        path: "assets/images/Carta Postres_1.jpg",
        hidden: false,
    },
    {
        id: 42,
        name: "EDITORIAL DESIGN",
        description: "Poster for Ana La Santa restaurant by Grupo Tragaluz. ©Mirinda Company",
        type: "video",
        path: "assets/videos/analasanta.webm",
        hidden: false,
    },
    {
        id: 50,
        name: "UX&UI DESIGN",
        description: "Textura Interiors newsletters and social media. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/textura nl materiales.webm",
        hidden: false,
    },
    {
        id: 51,
        name: "UX&UI DESIGN",
        description: "Textura Interiors newsletters and social media. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/textura nl instantes.webm",
        hidden: false,
    },
    {
        id: 60,
        name: "BRAND IDENTITY",
        description: "Auka Concept Store capsule hangtags. ©Mirinda Company",
        type: "image",
        path: "assets/images/Bodego_marinuk.jpg",
        hidden: false,
    },
    {
        id: 61,
        name: "BRAND IDENTITY",
        description: "Auka Concept Store totebag. ©Mirinda Company",
        type: "image",
        path: "assets/images/Bolsa_Auka_1.jpg",
        hidden: false,
    },
    {
        id: 62,
        name: "PACKAGING DESIGN",
        description: "Auka Concept Store identity shopping bag. ©Mirinda Company",
        type: "image",
        path: "assets/images/bolsa_auka2_1.jpg",
        hidden: false,
    },
    {
        id: 63,
        name: "BRAND IDENTITY",
        description: "Matilde Cashmere logotype and hang tags. Lettering by José Gil. ©Mirinda Company",
        type: "big-image",
        path: "assets/images/etiqueta02.jpg",
        mobilePath: "assets/images/etiqueta02_mobile.jpg",
        hidden: false,
    },
    {
        id: 64,
        name: "BRAND IDENTITY",
        description: "Agua restaurant illustrations art direccion. Illustration by Marta Zafra. ©Mirinda Company",
        type: "big-image",
        path: "assets/images/agua_girls.jpg",
        mobilePath: "assets/images/agua_girls2.jpg",
        hidden: false,
    },
    {
        id: 65,
        name: "BRAND IDENTITY",
        description: "Agua restaurant corporate card. Illustration by Marta Zafra. ©Mirinda Company",
        type: "image",
        path: "assets/images/aguatarjetas.jpg",
        hidden: false,
    },
   











]
