import { ofetch } from 'ofetch';

export const $fetch = ofetch.create({
  baseURL: 'https://api.civo.com/v2',
  headers: { Authorization: `Bearer ${import.meta.env.CIVO_API_KEY}` },
});

const adjectives = [
  'aged',
  'ancient',
  'autumn',
  'billowing',
  'bitter',
  'black',
  'blue',
  'bold',
  'broad',
  'broken',
  'calm',
  'cold',
  'cool',
  'crimson',
  'curly',
  'damp',
  'dark',
  'dawn',
  'delicate',
  'divine',
  'dry',
  'empty',
  'falling',
  'fancy',
  'flat',
  'floral',
  'fragrant',
  'frosty',
  'gentle',
  'green',
  'hidden',
  'holy',
  'icy',
  'jolly',
  'late',
  'lingering',
  'little',
  'lively',
  'long',
  'lucky',
  'misty',
  'morning',
  'muddy',
  'mute',
  'nameless',
  'noisy',
  'odd',
  'old',
  'orange',
  'patient',
  'plain',
  'polished',
  'proud',
  'purple',
  'quiet',
  'rapid',
  'raspy',
  'red',
  'restless',
  'rough',
  'round',
  'royal',
  'shiny',
  'shrill',
  'shy',
  'silent',
  'small',
  'snowy',
  'soft',
  'solitary',
  'sparkling',
  'spring',
  'square',
  'steep',
  'still',
  'summer',
  'super',
  'sweet',
  'throbbing',
  'tight',
  'tiny',
  'twilight',
  'wandering',
  'weathered',
  'white',
  'wild',
  'winter',
  'wispy',
  'withered',
  'yellow',
  'young',
];

const nouns = [
  'waterfall',
  'river',
  'breeze',
  'moon',
  'rain',
  'wind',
  'sea',
  'morning',
  'snow',
  'lake',
  'sunset',
  'pine',
  'shadow',
  'leaf',
  'dawn',
  'glitter',
  'forest',
  'hill',
  'cloud',
  'meadow',
  'sun',
  'glade',
  'bird',
  'brook',
  'butterfly',
  'bush',
  'dew',
  'dust',
  'field',
  'fire',
  'flower',
  'firefly',
  'feather',
  'grass',
  'haze',
  'mountain',
  'night',
  'pond',
  'darkness',
  'snowflake',
  'silence',
  'sound',
  'sky',
  'shape',
  'surf',
  'thunder',
  'violet',
  'water',
  'wildflower',
  'wave',
  'water',
  'resonance',
  'sun',
  'wood',
  'dream',
  'cherry',
  'tree',
  'fog',
  'frost',
  'voice',
  'frog',
  'smoke',
  'star',
  'ibex',
  'roe',
  'deer',
  'cave',
  'stream',
  'creek',
  'ditch',
  'puddle',
  'oak',
  'fox',
  'wolf',
  'owl',
  'eagle',
  'hawk',
  'badger',
  'nightingale',
  'ocean',
  'island',
  'marsh',
  'swamp',
  'blaze',
  'glow',
  'hail',
  'echo',
  'flame',
  'twilight',
  'whale',
  'raven',
  'blossom',
  'mist',
  'ray',
  'beam',
  'stone',
  'rock',
  'cliff',
  'reef',
  'crag',
  'peak',
  'summit',
  'wetland',
  'glacier',
  'thunderstorm',
  'ice',
  'firn',
  'spark',
  'boulder',
  'rabbit',
  'abyss',
  'avalanche',
  'moor',
  'reed',
  'harbor',
  'chamber',
  'savannah',
  'garden',
  'brook',
  'earth',
  'oasis',
  'bastion',
  'ridge',
  'bayou',
  'citadel',
  'shore',
  'cavern',
  'gorge',
  'spring',
  'arrow',
  'heap',
];

export function randomName() {
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]}-${
    nouns[Math.floor(Math.random() * nouns.length)]
  }`;
}
