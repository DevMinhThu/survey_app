import {IMAGE} from '../images/Images';
import {
  questions,
  socialMedia,
  personal,
  disease,
  workHome,
  lifeQuality,
} from '../../assets/Data/DataConfig';

const recommended = [
  {
    id: 1,
    nameSurvey: 'Disease Situation',
    ImgBackground: IMAGE.VIRUS,
    rate: '99+',
    bg: '#e0e0eb',
    data: disease,
  },
  {
    id: 2,
    nameSurvey: 'Work from Home',
    ImgBackground: IMAGE.WORK_HOME,
    rate: '100+',
    bg: '#ffe6cc',
    data: workHome,
  },
  {
    id: 3,
    nameSurvey: 'Life Quality',
    ImgBackground: IMAGE.LIFE,
    rate: '66+',
    bg: '#fdddf3',
    data: lifeQuality,
  },
  {
    id: 4,
    nameSurvey: 'Social Media',
    ImgBackground: IMAGE.MEDIA,
    rate: '80+',
    bg: '#85e0e0',
    data: socialMedia,
  },
  {
    id: 5,
    nameSurvey: 'Education',
    ImgBackground: IMAGE.EDUCATION2,
    rate: '55+',
    bg: '#fff0ee',
    data: questions,
  },
];

// data of otherSurvey
const otherSurvey = [
  {
    id: 6,
    ImgBackground: IMAGE.IMG6,
    numberSurvey: 'x1',
    contentSurvey: 'Working group',
    costSurvey: '$5.00',
    data: questions,
  },
  {
    id: 7,
    ImgBackground: IMAGE.IMG7,
    numberSurvey: 'x2',
    contentSurvey: 'Social media',
    costSurvey: '$10.20',
    data: socialMedia,
  },
  {
    id: 8,
    ImgBackground: IMAGE.IMG8,
    numberSurvey: 'x3',
    contentSurvey: 'Personal',
    costSurvey: '$35.00',
    data: personal,
  },
];

// data listNotify
const listNotify = [
  {
    id: 9,
    ImgUser: IMAGE.IMG2,
    nameUser: 'Mr Robot',
    contentInform: 'Lorem ipsum may be used as a placeholder before final.',
    time: 'Hôm qua lúc 17:13',
  },
  {
    id: 10,
    ImgUser: IMAGE.IMG7,
    nameUser: 'Mr Eliot',
    contentInform:
      'Lorem ipsum may be used as a placeholder before final copy is available.',
    time: 'Hôm qua lúc 13:30',
  },
  {
    id: 11,
    ImgUser: IMAGE.IMG6,
    nameUser: 'Joma Tech',
    contentInform: 'Lorem ipsum may be used as a placeholder before final.',
    time: 'Hôm qua lúc 24:00',
  },

  {
    id: 12,
    ImgUser: IMAGE.IMG8,
    nameUser: 'Wiliam Lin',
    contentInform: 'Lorem ipsum may be used as a placeholder before final.',
    time: 'Hôm qua lúc 5:15',
  },
  {
    id: 13,
    ImgUser: IMAGE.IMG7,
    nameUser: 'Robert',
    contentInform: 'Lorem ipsum may be used as a placeholder before final.',
    time: 'Hôm qua lúc 18:15',
  },
  {
    id: 14,
    ImgUser: IMAGE.IMG6,
    nameUser: 'Mrs Elma',
    contentInform: 'Lorem ipsum may be used as a placeholder before final.',
    time: 'Hôm qua lúc 14:05',
  },
];

export {recommended, otherSurvey, listNotify};
