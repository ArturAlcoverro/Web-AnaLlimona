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
        type: "image",
        path: "assets/images/portada10.jpg",
        mobilePath: "assets/images/portada10.jpg", 
        hidden: false,
    },
    {
        id: 1,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/pez.jpg",
        hidden: false,
    },
    {
        id: 2,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Salva López. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_002.jpg",
        hidden: false,
    },
    {
        id: 3,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/manteles.jpg",
        hidden: false,
    }, 
    {
        id: 4,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Salva López. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_003.jpg",
        hidden: false,
    }, 
    {
        id: 5,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Alba Yruela. ©Mirinda Company",
        type: "image",
        path: "assets/images/alba.jpg",
        hidden: false,
    },
    {
        id: 6,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Marina Denisova. ©Mirinda Company",
        type: "image",
        path: "assets/images/marina.jpg",
        hidden: false,
    },
    {
        id: 7,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/spring.jpg",
        hidden: false,
    },
    {
        id: 8,
        name: "BRAND IDENTITY",
        description: "Matilde Cashmere photographed by Béla Adler. ©Mirinda Company",
        type: "video",
        path: "assets/videos/matildecashemer_desktop.mp4",
        mobilePath: "assets/videos/matildecashemer_mobile.mp4",
        hidden: false,
    },
    {
        id: 9,
        name: "BRAND IDENTITY",
        description: "Cuines de Santa Caterina restaurant by Grupo Tragaluz. Illustration by Natália Pàmies. ©Mirinda Company",
        type: "video",
        path: "assets/videos/cuines.mp4",
        hidden: false,
    }, 
    {
        id: 10,
        name: "BRAND IDENTITY",
        description: "Bijoux photographed by Martina Matencio. ©Mirinda Company",
        type: "video",
        path: "assets/videos/bijoux_desktop.mp4",
        mobilePath: "assets/videos/bijoux_mobile.mp4",
        hidden: false,
    },
    {
        id: 11,
        name: "CONCEPT",
        description: "Homeless objects.",
        type: "video",
        path: "assets/videos/homeless_desktop.mp4",
        mobilePath: "assets/videos/homeless_mobile.mp4",
        hidden: false,
    },
    {
        id: 20,
        name: "UX&UI DESIGN",
        description: "Mirinda Company webpage. Programmimg by Llos&Co ©Mirinda Company",
        type: "video",
        path: "assets/videos/videowebmirinda.mp4",
        mobilePath: "assets/videos/videowebmirinda_mobile.mp4", 
        hidden: false,
    },
    {
        id: 21,
        name: "UX&UI DESIGN",
        description: "Textura Interiors fragances landing webpage. ©Mirinda Company",
        type: "video",
        path: "assets/videos/landing fragancias.mp4",
        hidden: false,
    },
    {
        id: 22,
        name: "UX&UI DESIGN",
        description: "Textura Interiors bed customizer. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/customizertextura.mp4",
        mobilePath: "assets/videos/customizertextura_mobile.mp4", 
        hidden: false,
    },
    {
        id: 30,
        name: "EDITORIAL DESIGN",
        description: "Flavia's Company novel Magókoro. ©Mirinda Company",
        type: "image",
        path: "assets/images/Magokoro-2.jpg",
        hidden: false,
    },
    {
        id: 32,
        name: "EDITORIAL DESIGN",
        description: "Acontraluz-Kimona dessert menu. ©Mirinda Company",
        type: "image",
        path: "assets/images/Carta Postres_1.jpg",
        hidden: false,
    },
    {
        id: 32,
        name: "EDITORIAL DESIGN",
        description: "Poster for Ana La Santa restaurant by Grupo Tragaluz. ©Mirinda Company",
        type: "video",
        path: "assets/videos/analasanta.mp4",
        hidden: false,
    },
    {
        id: 40,
        name: "UX&UI DESIGN",
        description: "Textura Interiors newsletters and social media. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/textura nl materiales.mp4",
        hidden: false,
    },
    {
        id: 41,
        name: "UX&UI DESIGN",
        description: "Textura Interiors newsletters and social media. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/textura nl instantes.mp4",
        hidden: false,
    },
    {
        id: 50,
        name: "BRAND IDENTITY",
        description: "Auka Concept Store capsule hangtags. ©Mirinda Company",
        type: "image",
        path: "assets/images/Bodego_marinuk.jpg",
        hidden: false,
    },
    {
        id: 51,
        name: "BRAND IDENTITY",
        description: "Auka Concept Store totebag. ©Mirinda Company",
        type: "image",
        path: "assets/images/Bolsa_Auka_1.jpg",
        hidden: false,
    },
    {
        id: 52,
        name: "PACKAGING DESIGN",
        description: "Auka Concept Store identity shopping bag. ©Mirinda Company",
        type: "image",
        path: "assets/images/bolsa_auka2_1.jpg",
        hidden: false,
    },
    {
        id: 53,
        name: "BRAND IDENTITY",
        description: "Matilde Cashmere logotype and hang tags. Lettering by José Gil. ©Mirinda Company",
        type: "big-image",
        path: "assets/images/etiqueta02.jpg",
        mobilePath: "assets/images/etiqueta02_mobile.jpg",
        hidden: false,
    },
    {
        id: 54,
        name: "BRAND IDENTITY",
        description: "Agua restaurant illustrations art direccion. Illustration by Marta Zafra. ©Mirinda Company",
        type: "big-image",
        path: "assets/images/agua_girls.jpg",
        mobilePath: "assets/images/agua_girls2.jpg",
        hidden: false,
    },
    {
        id: 55,
        name: "BRAND IDENTITY",
        description: "Agua restaurant corporate card. Illustration by Marta Zafra. ©Mirinda Company",
        type: "image",
        path: "assets/images/aguatarjetas.jpg",
        hidden: false,
    },
   











]
