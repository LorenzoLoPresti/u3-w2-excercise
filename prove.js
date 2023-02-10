const array = [1, 2, 3, [3, 4]];
const [pippo, , pluto, [, minnie]] = array;

console.log(pippo, pluto, minnie);

const newArray = ["taijiquan", "tanglang", "xinqi", "pakua", "nanchuan"];

const [stile1, stile2, stile3, stile4, stile5 = "shaolin"] = newArray;

console.log(stile1, stile2, stile3, stile4, stile5);

const stili = {
  interno: "taichi",
  esterno: "tanglang",
  kungFu: {
    neigong: "taichiYang",
  },
};

const {
  esterno: nuovoStile,
  interno,
  postMao: moderno = "changquan",
  kungFu: { neigong },
} = stili;
console.log(nuovoStile, interno, moderno, neigong);

let a = 1;
let b = 2;

// appoggio = a;
// a = b;
// b = appoggio;

[a, b] = [b, a];

console.log(a, b);

const nuovoOggetto = {
  nome: "paperoga",
  cognome: "shrek",
};

const secondo = { ...nuovoOggetto, nome: "cio" };

console.log(secondo);
