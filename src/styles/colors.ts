import {
  ColorValue,
  Platform,
  PlatformColor,
  DynamicColorIOS,
} from 'react-native';

const medium = '#9B9B9B';
const L10: ColorValue = (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#D7D3C6', dark: '#656C6F' }) : PlatformColor('@color/L10')) as any as string;
const L20: ColorValue = (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#F5F0E1', dark: '#475259' }) : PlatformColor('@color/L20')) as any as string;
const L30: ColorValue = (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#FFFBF2', dark: '#24303C' }) : PlatformColor('@color/L30')) as any as string;
const D10: ColorValue = (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#656C6F', dark: '#D7D3C6' }) : PlatformColor('@color/D10')) as any as string;
const D20: ColorValue = (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#475259', dark: '#F5F0E1' }) : PlatformColor('@color/D20')) as any as string;
const D30: ColorValue = (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#24303C', dark: '#FFFBF2' }) : PlatformColor('@color/D30')) as any as string;

export default {
  L10,
  L20,
  L30,
  D10,
  D20,
  D30,
  M: medium,
  modalBackground: (Platform.OS === 'ios' ? PlatformColor('systemFillColor') : PlatformColor('@color/colorLightBackground')) as any as string,
  darkText: D30 as any as string,
  lightText: D10 as any as string,
  faction: {
    guardian: {
      darkBackground: '#2b80c5',
    },
    seeker: {
      darkBackground: '#db7c07',
    },
    rogue: {
      darkBackground: '#107116',
    },
    mystic: {
      darkBackground: '#4331b9',
    },
    survivor: {
      darkBackground: '#cc3038',
    },
    neutral: {
      darkBackground: '#444444',
    },
    dual: {
      darkBackground: '#c0c000',
    },
    dead: {
      darkBackground: '#5a3510',
    },
    mythos: {
      darkBackground: (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#000000', dark: '#444444' }) : PlatformColor('@color/factionMythosDarkBackgroundColor')) as any as string,
    },
  },
  skill: {
    willpower: {
      default: '#165385',
      light: '#506A85',
      dark: '#2C7FC0',
    },
    intellect: {
      default: '#7A2D6C',
      light: '#7B5373',
      dark: '#7C3C85',
    },
    combat: {
      default: '#8D181E',
      light: '#8D5648',
      dark: '#AE4236',
    },
    agility: {
      default: '#0D6813',
      light: '#417F6C',
      dark: '#14854D',
    },
    wild: {
      default: '#635120',
      light: '#8A7D5A',
    },
  },
  costTintIcon: (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#f5f5f5', dark: '#202020' }) : PlatformColor('@color/costTintIcon')) as any as string,
  scenarioGreen: (Platform.OS === 'ios' ? DynamicColorIOS({ light: '#2E5344', dark: '#1fab73' }) : PlatformColor('@color/campaignScenarioGreen')) as any as string,
  veryLightBlue: '#cce4ff',
  lightBlue: '#007AFF',
  darkBlue: 'rgb(0, 78, 100)',
  white: 'rgb(247, 247, 255)',
  red: '#D84144',
  lightGray: 'rgb(230, 230, 230)',
  gray: 'rgb(201, 201, 201)',
  darkGray: 'rgb(120, 120, 120)',
  lightGreen: 'rgb(114, 221, 82)',
  yellow: 'rgb(255, 204, 0)',
  taboo: (Platform.OS === 'ios' ? DynamicColorIOS({ light: 'purple', dark: PlatformColor('systemPurple') }) : 'purple') as any as string,
  green: '#498D35',
  button: Platform.OS === 'ios' ? '#bbb' : '#000',
  navButton: (Platform.OS === 'ios' ? PlatformColor('linkColor') : '#007AFF') as any as string,
  black: '#000',
  switchTrackColor: Platform.OS === 'ios' ? { false: '#bbb', true: '#222' } : undefined,
  settingsBackground: Platform.OS === 'ios' ? '#e3e6ed' : '#f7f7ff',
  monza: '#C70039',

  toggleButton: (Platform.OS === 'ios' ?
    DynamicColorIOS({
      light: '#f6f6f6',
      dark: '#363636',
    }) : PlatformColor('@color/toggleButtonColor')) as any as string,

  selectedToggleButton: (Platform.OS === 'ios' ?
    DynamicColorIOS({
      light: '#dddddd',
      dark: '#111',
    }) : PlatformColor('@color/selectedToggleButtonColor')) as any as string,
};
