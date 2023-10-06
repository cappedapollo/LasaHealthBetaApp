import {StatusBar} from 'react-native';
import theme from '../constants/Theme';

// import {getOS} from '../shared/PlatformUtils';

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = theme.SIZES.BASE * 3.5 + (StatusHeight || 0);
// const iPhoneX = () => getOS() === 'ios';

const utils = {
  generalSymptomsList: [
    'Painful periods',
    'Fever',
    'Aches',
    'Congestion',
    'Fatigue',
    'Insomnia',
  ],

  healthQualityList: [
    {title: 'Excellent'},
    {title: 'Very Good'},
    {title: 'Good'},
    {title: 'Fair'},
    {title: 'Poor'},
  ],

  numberList: [
    {title: '0'},
    {title: '1'},
    {title: '2'},
    {title: '3'},
    {title: '4'},
    {title: '5'},
    {title: '6'},
    {title: '7'},
    {title: '8'},
    {title: '9'},
    {title: '10'},
    {title: '11'},
    {title: '12'},
    {title: '13'},
    {title: '14'},
    {title: '15'},
    {title: '16'},
    {title: '17'},
    {title: '18'},
    {title: '19'},
    {title: '20'},
    {title: '21'},
    {title: '22'},
    {title: '23'},
    {title: '24'},
    {title: '25'},
    {title: '26'},
    {title: '27'},
    {title: '28'},
    {title: '29'},
    {title: '30'},
    {title: '31'},
    {title: '32'},
    {title: '33'},
    {title: '34'},
    {title: '35'},
    {title: '36'},
    {title: '37'},
    {title: '38'},
    {title: '39'},
    {title: '40'},
    {title: '41'},
    {title: '42'},
    {title: '43'},
    {title: '44'},
    {title: '45'},
    {title: '46'},
    {title: '47'},
    {title: '48'},
    {title: '49'},
    {title: '50'},
    {title: '51'},
    {title: '52'},
    {title: '53'},
    {title: '54'},
    {title: '55'},
    {title: '56'},
    {title: '57'},
    {title: '58'},
    {title: '59'},
    {title: '60'},
  ],

  numberListUpTo30: [
    {title: '0'},
    {title: '1'},
    {title: '2'},
    {title: '3'},
    {title: '4'},
    {title: '5'},
    {title: '6'},
    {title: '7'},
    {title: '8'},
    {title: '9'},
    {title: '10'},
    {title: '11'},
    {title: '12'},
    {title: '13'},
    {title: '14'},
    {title: '15'},
    {title: '16'},
    {title: '17'},
    {title: '18'},
    {title: '19'},
    {title: '20'},
    {title: '21'},
    {title: '22'},
    {title: '23'},
    {title: '24'},
    {title: '25'},
    {title: '26'},
    {title: '27'},
    {title: '28'},
    {title: '29'},
    {title: '30'},
  ],

  allCountriesList: [
    {title: 'United States of America'},
    {title: 'Afghanistan'},
    {title: 'Albania'},
    {title: 'Algeria'},
    {title: 'Andorra'},
    {title: 'Angola'},
    {title: 'Antigua and Barbuda'},
    {title: 'Argentina'},
    {title: 'Armenia'},
    {title: 'Australia'},
    {title: 'Austria'},
    {title: 'Azerbaijan'},
    {title: 'Bahamas'},
    {title: 'Bahrain'},
    {title: 'Bangladesh'},
    {title: 'Barbados'},
    {title: 'Belarus'},
    {title: 'Belgium'},
    {title: 'Belize'},
    {title: 'Benin'},
    {title: 'Bhutan'},
    {title: 'Bolivia'},
    {title: 'Bosnia and Herzegovina'},
    {title: 'Botswana'},
    {title: 'Brazil'},
    {title: 'Brunei'},
    {title: 'Bulgaria'},
    {title: 'Burkina Faso'},
    {title: 'Burundi'},
    {title: "Côte d'Ivoire"},
    {title: 'Cabo Verde'},
    {title: 'Cambodia'},
    {title: 'Cameroon'},
    {title: 'Canada'},
    {title: 'Central African Republic'},
    {title: 'Chad'},
    {title: 'Chile'},
    {title: 'China'},
    {title: 'Colombia'},
    {title: 'Comoros'},
    {title: 'Congo (Congo-Brazzaville)'},
    {title: 'Costa Rica'},
    {title: 'Croatia'},
    {title: 'Cuba'},
    {title: 'Cyprus'},
    {title: 'Czechia (Czech Republic)'},
    {title: 'Democratic Republic of the Congo'},
    {title: 'Denmark'},
    {title: 'Djibouti'},
    {title: 'Dominica'},
    {title: 'Dominican Republic'},
    {title: 'Ecuador'},
    {title: 'Egypt'},
    {title: 'El Salvador'},
    {title: 'Equatorial Guinea'},
    {title: 'Eritrea'},
    {title: 'Estonia'},
    {title: "Eswatini (fmr, 'Swaziland')"},
    {title: 'Ethiopia'},
    {title: 'Fiji'},
    {title: 'Finland'},
    {title: 'France'},
    {title: 'Gabon'},
    {title: 'Gambia'},
    {title: 'Georgia'},
    {title: 'Germany'},
    {title: 'Ghana'},
    {title: 'Greece'},
    {title: 'Grenada'},
    {title: 'Guatemala'},
    {title: 'Guinea'},
    {title: 'Guinea-Bissau'},
    {title: 'Guyana'},
    {title: 'Haiti'},
    {title: 'Holy See'},
    {title: 'Honduras'},
    {title: 'Hungary'},
    {title: 'Iceland'},
    {title: 'India'},
    {title: 'Indonesia'},
    {title: 'Iran'},
    {title: 'Iraq'},
    {title: 'Ireland'},
    {title: 'Israel'},
    {title: 'Italy'},
    {title: 'Jamaica'},
    {title: 'Japan'},
    {title: 'Jordan'},
    {title: 'Kazakhstan'},
    {title: 'Kenya'},
    {title: 'Kiribati'},
    {title: 'Kuwait'},
    {title: 'Kyrgyzstan'},
    {title: 'Laos'},
    {title: 'Latvia'},
    {title: 'Lebanon'},
    {title: 'Lesotho'},
    {title: 'Liberia'},
    {title: 'Libya'},
    {title: 'Liechtenstein'},
    {title: 'Lithuania'},
    {title: 'Luxembourg'},
    {title: 'Madagascar'},
    {title: 'Malawi'},
    {title: 'Malaysia'},
    {title: 'Maldives'},
    {title: 'Mali'},
    {title: 'Malta'},
    {title: 'Marshall Islands'},
    {title: 'Mauritania'},
    {title: 'Mauritius'},
    {title: 'Mexico'},
    {title: 'Micronesia'},
    {title: 'Moldova'},
    {title: 'Monaco'},
    {title: 'Mongolia'},
    {title: 'Montenegro'},
    {title: 'Morocco'},
    {title: 'Mozambique'},
    {title: 'Myanmar (formerly Burma)'},
    {title: 'Namibia'},
    {title: 'Nauru'},
    {title: 'Nepal'},
    {title: 'Netherlands'},
    {title: 'New Zealand'},
    {title: 'Nicaragua'},
    {title: 'Niger'},
    {title: 'Nigeria'},
    {title: 'North Korea'},
    {title: 'North Macedonia'},
    {title: 'Norway'},
    {title: 'Oman'},
    {title: 'Pakistan'},
    {title: 'Palau'},
    {title: 'Palestine State'},
    {title: 'Panama'},
    {title: 'Papua New Guinea'},
    {title: 'Paraguay'},
    {title: 'Peru'},
    {title: 'Philippines'},
    {title: 'Poland'},
    {title: 'Portugal'},
    {title: 'Qatar'},
    {title: 'Romania'},
    {title: 'Russia'},
    {title: 'Rwanda'},
    {title: 'Saint Kitts and Nevis'},
    {title: 'Saint Lucia'},
    {title: 'Saint Vincent and the Grenadines'},
    {title: 'Samoa'},
    {title: 'San Marino'},
    {title: 'Sao Tome and Principe'},
    {title: 'Saudi Arabia'},
    {title: 'Senegal'},
    {title: 'Serbia'},
    {title: 'Seychelles'},
    {title: 'Sierra Leone'},
    {title: 'Singapore'},
    {title: 'Slovakia'},
    {title: 'Slovenia'},
    {title: 'Solomon Islands'},
    {title: 'Somalia'},
    {title: 'South Africa'},
    {title: 'South Korea'},
    {title: 'South Sudan'},
    {title: 'Spain'},
    {title: 'Sri Lanka'},
    {title: 'Sudan'},
    {title: 'Suriname'},
    {title: 'Sweden'},
    {title: 'Switzerland'},
    {title: 'Syria'},
    {title: 'Tajikistan'},
    {title: 'Tanzania'},
    {title: 'Thailand'},
    {title: 'Timor-Leste'},
    {title: 'Togo'},
    {title: 'Tonga'},
    {title: 'Trinidad and Tobago'},
    {title: 'Tunisia'},
    {title: 'Turkey'},
    {title: 'Turkmenistan'},
    {title: 'Tuvalu'},
    {title: 'Uganda'},
    {title: 'Ukraine'},
    {title: 'United Arab Emirates'},
    {title: 'United Kingdom'},
    {title: 'United States of America'},
    {title: 'Uruguay'},
    {title: 'Uzbekistan'},
    {title: 'Vanuatu'},
    {title: 'Venezuela'},
    {title: 'Vietnam'},
    {title: 'Yemen'},
    {title: 'Zambia'},
    {title: 'Zimbabwe'},
  ],

  commonChronicConditionsList: [
    {title: 'Adenomyosis'},
    {title: 'ADHD'},
    {title: 'Allergies'},
    {title: 'Alzheimers Disease'},
    {title: 'Anxiety and stress disorders'},
    {title: 'Arthritis'},
    {title: 'Asthma'},
    {title: 'Autism'},
    {title: 'Autoimmune disorders'},
    {title: 'Brain injuries'},
    {title: 'Bipolar Disorder'},
    {title: 'Cancer'},
    {title: 'Celiac'},
    {title: 'Chronic fatigue syndrome'},
    {title: 'Chronic obstructive pulmonary disease'},
    {title: 'Chronic pain'},
    {title: 'Chronic pelvic pain'},
    {title: 'Cystic Fibrosis'},
    {title: 'Dementia'},
    {title: 'Depression'},
    {title: 'Diabetes'},
    {title: 'Digestive conditions'},
    {title: 'Dizziness'},
    {title: 'Dyslexia'},
    {title: 'Eating disorders'},
    {title: 'Eczema'},
    {title: 'Ehlers-Danlos Syndrome'},
    {title: 'Endocrine disorders'},
    {title: 'Endometriosis'},
    {title: 'Epilepsy'},
    {title: 'Fibroids'},
    {title: 'Fibromyalgia'},
    {title: 'Hashimotos Disease'},
    {title: 'Heart disease'},
    {title: 'High Cholesterol'},
    {title: 'Human Immunodeficiency Virus (HIV/AIDS)'},
    {title: 'Hypertension'},
    {title: 'Indigestion'},
    {title: 'Irritable bowel disease'},
    {title: 'Learning disabilities'},
    {title: 'Lower Back Pain'},
    {title: 'Lupus'},
    {title: 'Maffuccis Disease'},
    {title: 'Mast Cell Activation Syndrome'},
    {title: 'Migraine'},
    {title: 'Mood disorders'},
    {title: 'Multiple sclerosis'},
    {title: 'Obstructive sleep apnoea'},
    {title: 'Osteoporosis'},
    {title: 'Ovarian Cysts'},
    {title: 'Pelvic Adhesions'},
    {title: 'Pelvic Floor Dysfunction'},
    {title: 'Physical disabilities'},
    {title: 'PCOS'},
    {title: 'POTS'},
    {title: 'Scoliosis'},
    {title: 'Sickle cell disease'},
  ],

  checkinPrompts: {
    0: 'Do you consider yourself a healthy person?',
    1: 'What healthy habits are you working on?',
    2: 'Identify a time you felt challenged today.',
    3: 'What negative emotions am I holding onto? How can I let them go?',
    4: 'What do I need to let go of?',
    5: 'Do you think that exercising can make you feel happier?',
    6: 'What experiences have you had that you are grateful for?',
    7: 'Why is good sleep is important for your health?',
    8: 'If you were given $10,000 and only an hour to spend it, how would you do it?',
    9: 'What steps are you taking to improve your sleep?',
    10: 'If you could, would you go back 10 years in your life? Why or why not?',
    11: 'What made today unique?',
    12: 'What country would you like to visit for the first time?',
    13: 'What scares you?',
    14: 'How do you clear and relax your mind before going to bed?',
    15: "What is an effective strategy you've found for dealing with stress?",
    16: 'How can you manage stress in your life?',
    17: 'What is one thing you want to remember from today?',
    18: 'When did you feel most authentically yourself today?',
    19: "What is an effective strategy you've found for dealing with pain?",
    20: 'What is something that made you laugh today?',
    21: 'How can you manage pain in your life?',
    22: 'What is a healthy mind and body?',
    23: 'What steps did you take today towards a goal you’re working on?',
    24: 'What person in your life are you most thankful for?',
    25: 'Do you get adequate exercise or activity in your daily routine?',
    26: 'Who made your day better today? How can you pay that feeling forward?',
    27: 'What’s a simple pleasure in your life that you are thankful for?',
    28: 'Look around your room. What are some things that make you grateful?',
    29: 'What have you done to reduce your pain today?',
    30: 'What was the best thing that happened to you today?',
    31: 'What tradition in your life makes you feel grateful?',
    32: 'Have you tried pain reprocessing therapy? How was your experience?',
    33: 'Have you tried pelvic floor therapy? How was your experience?',
    34: 'What are three things you’re grateful for today?',
    35: 'What musician or song are you grateful for? Why?',
    36: 'What’s something that’s working well in your life right now?',
    37: 'How important is community in your life?',
    38: 'What steps are you taking to improve your social connections?',
    39: 'Have you felt dismissed before?',
    40: 'What haven’t you done because you are afraid?',
    41: 'Do you feel that your doctor understands your personal experiences?',
    42: 'What do you love most about your body?',
    43: 'What is something I can start doing today that my future self will thank me for in one year?',
    44: 'What did you learn today?',
    45: 'How can you help someone else today?',
    46: 'What have you done today to express love to those around you?',
    47: 'How can you make tomorrow (even) better than today?',
    48: 'What have you done today to express love towards yourself?',
    49: 'What is one past failure that I can now identify as a gift?',
    50: 'Do you feel supported by your community?',
    51: 'How can you improve your self-care?',
    52: "What's one thing you can do today to improve your health?",
    53: "What's one thing you can do today to improve your mental health?",
    53: 'When was the last time you had a medical checkup?',
    54: "Do you always take medicine when you're sick, or do you try home remedies?",
  },
};
export default utils;
