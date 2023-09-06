import brise from '../assets/brise.jpg'
import coups from '../assets/forts coups de vent.jpg'
import ouragan from '../assets/ouragan.jfif'
import tempete from '../assets/tempête.jpg'
import fort from '../assets/vent fort.jpg'
import frais from '../assets/vent frais.jpg'

export const windList = [
    {
        name: "brise",
        category: "léger",
        id: "1b",
        price: 1530,
        cover: brise
    },
    {
        name: "frais",
        category: "léger",
        id: "1f",
        price: 2410,
        cover: frais
    },
    {
        name: "fort",
        category: "ça se corse",
        id: "2f",
        price: 4230,
        cover: fort
    },
    {
        name: "coups",
        category: "ça se corse",
        id: "2c",
        price: 7360,
        cover: coups
    },
    {
        name: "tempete",
        category: "ça craint",
        id: "3t",
        price: 9500,
        cover: tempete
    },
    {
        name: "ouragan",
        category: "ça craint",
        id: "3o",
        price: 11235,
        cover: ouragan
    }
]