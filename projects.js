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
        id: 1,
        name: "STUDIO BOOKS",
        description: "ART DIRECTION AND PHOTOGRAPHY",
        type: "image",
        path: "assets/images/min/DSCF5112 2.jpg",
        hidden: false,
    },
    {
        id: 2,
        name: "MATILDE CASHMERE",
        description: "IDENTITY, CORPORATE HANGTAGS. DESIGNED IN MIRINDA COMPANY STUDIO",
        type: "big-image",
        path: "assets/images/min/etiqueta2.jpg",
    },
    {
        id: 3,
        name: "MAGÓKORO",
        description: "BOOK (INSIDE), FLAVIA COMPANY’S NOVEL, GRAPHIC DESIGN. DESIGNED IN MIRINDA COMPANY STUDIO",
        type: "image",
        path: "assets/images/min/Magokoro-2.jpg",
    },
    {
        id: 4,
        name: "MAGÓKORO",
        description: "BOOK (INSIDE), FLAVIA COMPANY’S NOVEL, GRAPHIC DESIGN. DESIGNED IN MIRINDA COMPANY STUDIO",
        type: "image",
        path: "assets/images/min/9788416673759.jpg",
    },
    {
        id: 5,
        name: "AUKA CONCEPT",
        description: "IDENTITY, CAPSULE HANGTAGS. DESIGNED IN MIRINDA COMPANY STUDIO",
        type: "image",
        path: "../assets/images/min/Bodego_1.jpg",
        mobilePath: "assets/images/min/fotos web para colgar4.jpg"
    },
    {
        id: 6,
        name: "AUKA CONCEPT",
        description: "IDENTITY, CAPSULE HANGTAGS. DESIGNED IN MIRINDA COMPANY STUDIO",
        type: "image",
        path: "assets/images/min/bolsa_auka2_1.jpg",
    },
    {
        id: 7,
        name: "UN COLCHÓN PARA RAEL",
        description: "MOVIE SALE DOSIER, GRAPHIC DESIGN. DESIGNED IN MIRINDA COMPANY STUDIO",
        type: "video",
        path: "assets/videos/colchonpararael_animacio.mp4",
    },
]
