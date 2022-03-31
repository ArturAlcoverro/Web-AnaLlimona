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
        name: "PASSWORD ON REQUEST",
        description: "Hello, I would love to meet you and show you my featured projects. Text me over.",
        type: "big-image",
        path: "assets/images/portada.jpg",
        mobilePath: "assets/images/portada_mobile.jpg", 
        hidden: false,
    },
    {
        id: 1,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_007.jpg",
        hidden: false,
    },   
    {
        id: 2,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Salva López. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_00.jpg",
        hidden: false,
    },
    {
        id: 3,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Salva López. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_002.jpg",
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
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_004.jpg",
        hidden: false,
    },
    {
        id: 5.5,
        name: "ART DIRECTION",
        description: "Textura Interiors photographed by Daniel Molina. ©Mirinda Company",
        type: "image",
        path: "assets/images/textura_005.jpg",
        hidden: false,
    },
    {
        id: 6,
        name: "BRAND IDENTITY",
        description: "Matilde Cashmere photographed by Béla Adler. ©Mirinda Company",
        type: "video",
        path: "assets/videos/matildecashemer_desktop.mp4",
        mobilePath: "assets/videos/matildecashemer_mobile.mp4",
        hidden: false,
    }, 
    {
        id: 7,
        name: "BRAND IDENTITY",
        description: "Bijoux photographed by Martina Matencio. ©Mirinda Company",
        type: "video",
        path: "assets/videos/bijoux_desktop.mp4",
        mobilePath: "assets/videos/bijoux_mobile.mp4",
        hidden: false,
    },
    {
        id: 8,
        name: "ART DIRECTION",
        description: "Las Golfas Records photographed by Natàlia Pàmies.",
        type: "image",
        path: "assets/images/chemtrails222.jpg",
        hidden: false,
    },
    {
        id: 9,
        name: "CONCEPT",
        description: "Homeless objects.",
        type: "video",
        path: "assets/videos/homeless_desktop.mp4",
        mobilePath: "assets/videos/homeless_mobile.mp4",
        hidden: false,
    },
    {
        id: 10,
        name: "UX&UI DESIGN",
        description: "Textura Interiors newsletters and social media. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/textura nl materiales.mp4",
        hidden: false,
    },
    {
        id: 11,
        name: "UX&UI DESIGN",
        description: "Textura Interiors newsletters and social media. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/textura nl instantes.mp4",
        hidden: false,
    },
    {
        id: 12,
        name: "UX&UI DESIGN",
        description: "Textura Interiors fragances landing webpage. ©Mirinda Company",
        type: "video",
        path: "assets/videos/landing fragancias.mp4",
        hidden: false,
    },
    {
        id: 13,
        name: "UX&UI DESIGN",
        description: "Textura Interiors bed customizer. Photographed by Salva López. ©Mirinda Company",
        type: "video",
        path: "assets/videos/bestotextura.mp4",
        hidden: false,
    },
    {
        id: 14,
        name: "EDITORIAL DESIGN",
        description: "Flavia's Company novel Magókoro. ©Mirinda Company",
        type: "image",
        path: "assets/images/Magokoro-2.jpg",
        hidden: false,
    },
    {
        id: 15,
        name: "EDITORIAL DESIGN",
        description: "Acontraluz-Kimona dessert menu. ©Mirinda Company",
        type: "image",
        path: "assets/images/Carta Postres_1.jpg",
        hidden: false,
    },
    {
        id: 16,
        name: "BRAND IDENTITY",
        description: "Auka Concept Store capsule hangtags. ©Mirinda Company",
        type: "image",
        path: "assets/images/Bodego_marinuk.jpg",
        hidden: false,
    },
    {
        id: 17,
        name: "BRAND IDENTITY",
        description: "Auka Concept Store totebag. ©Mirinda Company",
        type: "image",
        path: "assets/images/Bolsa_Auka_1.jpg",
        hidden: false,
    },
    {
        id: 18,
        name: "PACKAGING DESIGN",
        description: "Auka Concept Store identity shopping bag. ©Mirinda Company",
        type: "image",
        path: "assets/images/bolsa_auka2_1.jpg",
        hidden: false,
    },
    {
        id: 19,
        name: "BRAND IDENTITY",
        description: "Matilde Cashmere logotype and hang tags. Lettering by José Gil. ©Mirinda Company",
        type: "big-image",
        path: "assets/images/etiqueta02.jpg",
        mobilePath: "assets/images/etiqueta02_mobile.jpg",
        hidden: false,
    },
    {
        id: 20,
        name: "BRAND IDENTITY",
        description: "Agua restaurant illustrations art direccion. Illustration by Marta Zafra. ©Mirinda Company",
        type: "big-image",
        path: "assets/images/agua_girls.jpg",
        mobilePath: "assets/images/agua_girls2.jpg",
        hidden: false,
    },
    {
        id: 21,
        name: "TYPOGRAPHY ANIMATION",
        description: "Pez Bomba brand identity and animation. ©Mirinda Company",
        type: "video",
        path: "assets/videos/pez bomba ig post_desktop.mp4",
        mobilePath: "assets/videos/pez bomba ig post_mobile.mp4",
        hidden: false,
    },
    {
        id: 22,
        name: "TYPOGRAPHY ANIMATION",
        description: "Un colchón para Rael movie sale dossier. ©Mirinda Company",
        type: "video",
        path: "assets/videos/colchonpararael_animacio_desktop.mp4",
        mobilePath: "assets/videos/colchonpararael_animacio_mobile.mp4",
        hidden: false,
    },











    {
        id: 00,
        name: "BRAND IDENTITY",
        description: "Matilde Cashmere logotype application. Lettering by José Gil. ©Mirinda Company",
        type: "image",
        path: "assets/images/f_cinta.jpg",
        hidden: true,
    },
    {
        id: 00,
        name: "GRAPHIC DESIGN",
        description: "PHOTOGRAPHY BY MYSELF.",
        type: "image",
        path: "assets/images/nocheydia2.jpg",
        hidden: true,
    },
    {
        id: 00,
        name: "FLOWERS",
        description: " ART DIRECTION AND GRAPHIC DESIGN.",
        type: "big-image",
        path: "assets/images/flo.png",
        hidden: true,
    },
    {
        id: 00,
        name: "DOPLA",
        description: "REUSABLE TABLESET. PACKAGING AND PRODUCT DESIGN. COLLABORATION WITH MARINA LLIMONA.",
        type: "image",
        path: "assets/images/dopla2.jpg",
        hidden: true,
    },
    {
        id: 00,
        name: "SHOOTING",
        description: "FOR TEXTURA INTERIORS ©MIRINDA COMPANY",
        type: "big-image",
        path: "assets/images/photo.png",
        hidden: true,
    },
    {
        id: 00,
        name: "TEXTURA",
        description: "NEWSLETTERS AND SOCIAL MEDIA, ART DIRECTION AND GRAPHIC DESIGN. PHOTOGRAPHED BY SALVA LÓPEZ. ©MIRINDA COMPANY",
        type: "video",
        path: "assets/videos/textura nl instantes.mp4",
        hidden: true,
    },
    {
        id: 00,
        name: "TEXTURA",
        description: "NEWSLETTERS AND SOCIAL MEDIA, ART DIRECTION AND GRAPHIC DESIGN. PHOTOGRAPHED BY SALVA LÓPEZ. ©MIRINDA COMPANY",
        type: "video",
        path: "assets/videos/textura nl playa.mp4",
        hidden: true,
    },
    {
        id: 00,
        name: "MATILDE",
        description: "CASHMERE BRAND HANG TAGS, CORPORATE HANGTAGS. ©MIRINDA COMPANY",
        type: "big-image",
        path: "assets/images/etiqueta02.jpg",
        hidden: true,
    },
    {
        id: 00,
        name: "MAGÓKORO",
        description: "BOOK (INSIDE), FLAVIA COMPANY’S NOVEL, GRAPHIC DESIGN. ©MIRINDA COMPANY",
        type: "image",
        path: "assets/images/Magokoro-2.jpg",
        hidden: true,
    },


]
