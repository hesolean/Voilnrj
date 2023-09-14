import brise from '../assets/brise.jpg'
import coups from '../assets/forts coups de vent.jpg'
import ouragan from '../assets/ouragan.jfif'
import tempete from '../assets/tempête.jpg'
import fort from '../assets/vent fort.jpg'
import frais from '../assets/vent frais.jpg'

export const windList = [
    {
        name: "brise",
        description: '',
        category: "léger",
        id: "1b",
        price: 1530,
        cover: brise,
        amount: 0
    },
    {
        name: "frais",
        description: '',
        category: "léger",
        id: "1f",
        price: 2410,
        cover: frais,
        amount: 0
    },
    {
        name: "fort",
        description: '',
        category: "ça se corse",
        id: "2f",
        price: 4230,
        cover: fort,
        amount: 0
    },
    {
        name: "coups",
        description: '',
        category: "ça se corse",
        id: "2c",
        price: 7360,
        cover: coups,
        amount: 0
    },
    {
        name: "tempete",
        description: '',
        category: "ça craint",
        id: "3t",
        price: 9500,
        cover: tempete,
        amount: 0
    },
    {
        name: "ouragan",
        description: '',
        category: "ça craint",
        id: "3o",
        price: 11235,
        cover: ouragan,
        amount: 0
    }
]