// 1. Bikin 5 object masing masing minimal ada:
//     - 2 property string
//     - 2 property number
//     - 1 property object lain
//     - 1 property array
// * Object pada nomor 1 boleh dimasukkan ke dalam array

// 2. Bikin 1 object yang berisi sebuah function untuk melakukan perhitungan matematika (tambah, kurang, kali, bagi, pangkat, modulus)

const brimstone = {
  codenames: 'Brimstone',
  realName: 'Liam Byrne',
  role: 'Controller',
  ultPoints: 8,
  ultDurationInSecond: 3,
  abilities: {
    basic: 'Incendiary',
    signature: 'Sky Smoke',
    ultimate: 'Orbital Strike',
  },
  affiliates: [
    'Baltimore Fire Department',
    'Ragged Ravens',
    'Kingdom Corporation',
    'VALORANT Protocol',
  ],
};

const neon = {
  codenames: 'Neon',
  realName: 'Tala Nicole Dimaapi Valdez',
  role: 'Duelist',
  ultPoints: 7,
  ultDurationInSecond: 20,
  abilities: {
    basic: 'Fast Lane',
    signature: 'High Gear',
    ultimate: 'Overdrive',
  },
  affiliates: ['Kingdom Corporation', 'VALORANT Protocol'],
};

const harbor = {
  codenames: 'Harbor',
  realName: 'Varun Batra',
  role: 'Controller',
  ultPoints: 7,
  ultDurationInSecond: 9,
  abilities: {
    basic: 'Cascade',
    signature: 'High Tide',
    ultimate: 'Reckoning',
  },
  affiliates: ['REALM', 'VALORANT Protocol'],
};

const chamber = {
  codenames: 'Chamber',
  realName: 'Vincent Fabron',
  role: 'Sentinel',
  ultPoints: 8,
  ultDurationInSecond: 4,
  abilities: {
    basic: 'Trademark',
    signature: 'Rendezvous',
    ultimate: 'Tour De Force',
  },
  affiliates: ['Culverin', 'Kingdom Corporation', 'VALORANT Protocol'],
};

const killjoy = {
  codenames: 'Killjoy',
  realName: 'Klara Böhringer',
  role: 'Sentinel',
  ultPoints: 8,
  ultDurationInSecond: 8,
  abilities: {
    basic: 'Alarmbot',
    signature: 'Turret',
    ultimate: 'Lockdown',
  },
  affiliates: ['Kingdom Corporation', 'VALORANT Protocol'],
};

const valorantAgents = [brimstone, neon, harbor, chamber, killjoy];

// =======================================================

const arithmeticFunctions = {
  add: (...args) => {
    let result = args[0];
    for (let index = 1; index < args.length; index++) {
      result += args[index];
    }
    return result;
  },
  subtract: (...args) => {
    let result = args[0];
    for (let index = 1; index < args.length; index++) {
      result -= args[index];
    }
    return result;
  },
  multiply: (...args) => {
    let result = args[0];
    for (let index = 1; index < args.length; index++) {
      result *= args[index];
    }
    return result;
  },
  divide: (...args) => {
    let result = args[0];
    for (let index = 1; index < args.length; index++) {
      result /= args[index];
    }
    return result;
  },
  modulus: (...args) => {
    let result = args[0];
    for (let index = 1; index < args.length; index++) {
      result %= args[index];
    }
    return result;
  },
};

console.log(valorantAgents);
console.log(arithmeticFunctions.add(5, 2, 3));
console.log(arithmeticFunctions.subtract(10, 2, 3));
console.log(arithmeticFunctions.multiply(20, 2, 2));
console.log(arithmeticFunctions.divide(20, 2, 2));
console.log(arithmeticFunctions.modulus(50, 40, 3));
