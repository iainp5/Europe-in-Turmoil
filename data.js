const spaces = [
 {name: 'Britanny/Normandy', socio_1: 6, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'France', x: 134, y: 600, adjacent: [1, 6, 70 ]},
{name: 'Picardy', socio_1: 4, socio_2: null, stability: 2, battleground: false, lib_infl: 2, auth_infl: 0, country: 'France', x: 368, y: 598, adjacent: [0, 6, 61 ]},
{name: 'Beau-Monde', socio_1: 5, socio_2: null, stability: 3, battleground: true, lib_infl: 1, auth_infl: 0, country: 'France', x: 132, y: 728, adjacent: [5, 6 ]},
{name: 'French Writers', socio_1: 8, socio_2: null, stability: 3, battleground: true, lib_infl: 1, auth_infl: 0, country: 'France', x: 438, y: 693, adjacent: [4, 6 ]},
{name: 'French Catholic Church', socio_1: 3, socio_2: null, stability: 4, battleground: true, lib_infl: 0, auth_infl: 4, country: 'France', x: 572, y: 694, adjacent: [3, 6, 7, 20 ]},
{name: 'Fauvism', socio_1: 8, socio_2: null, stability: 1, battleground: false, lib_infl: 0, auth_infl: 0, country: 'France', x: 176, y: 844, adjacent: [2, 6 ]},
{name: 'Paris', socio_1: 1, socio_2: null, stability: 2, battleground: true, lib_infl: 1, auth_infl: 0, country: 'France', x: 369, y: 805, adjacent: [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11]},
{name: 'French Army', socio_1: 7, socio_2: null, stability: 4, battleground: true, lib_infl: 0, auth_infl: 1, country: 'France', x: 572, y: 806, adjacent: [4, 6, 20 ]},
{name: 'Bordeaux', socio_1: 6, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 0, country: 'France', x: 232, y: 961, adjacent: [6, 63 ]},
{name: 'Dijon', socio_1: 4, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'France', x: 571, y: 914, adjacent: [6, 62 ]},
{name: 'Nice', socio_1: 6, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'France', x: 573, y: 1027, adjacent: [6, 67 ]},
{name: 'Colonials', socio_1: 5, socio_2: 9, stability: 3, battleground: true, lib_infl: 0, auth_infl: 1, country: 'France', x: 369, y: 1110, adjacent: [6, 64, 65, 66 ]},
{name: 'Hanover/Oldenburg', socio_1: 3, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Germany', x: 823, y: 456, adjacent: [13, 16, 17, 60 ]},
{name: 'Kiel', socio_1: 7, socio_2: null, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Germany', x: 968, y: 457, adjacent: [12, 17, 57, 58, 59 ]},
{name: 'Jugendstil', socio_1: 8, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 1, country: 'Germany', x: 1119, y: 455, adjacent: [18 ]},
{name: 'East Prussia', socio_1: 6, socio_2: 7, stability: 4, battleground: true, lib_infl: 0, auth_infl: 1, country: 'Germany', x: 1337, y: 455, adjacent: [18, 40, 44 ]},
{name: 'Imperial Army', socio_1: 7, socio_2: null, stability: 4, battleground: true, lib_infl: 0, auth_infl: 3, country: 'Germany', x: 730, y: 602, adjacent: [12, 17, 20, 61 ]},
{name: 'Wilhelm II', socio_1: 2, socio_2: null, stability: 5, battleground: true, lib_infl: 0, auth_infl: 5, country: 'Germany', x: 881, y: 563, adjacent: [12, 13, 16, 18, 20, 21, 22 ]},
{name: 'Berlin', socio_1: 1, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Germany', x: 1043, y: 563, adjacent: [14, 15, 17 ]},
{name: 'Silesia', socio_1: 4, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Germany', x: 1213, y: 595, adjacent: [22, 25, 44 ]},
{name: 'Alsace-Lorraine', socio_1: 9, socio_2: 4, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Germany', x: 729, y: 741, adjacent: [4, 7, 16, 17, 23 ]},
{name: 'Industrialiists', socio_1: 5, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Germany', x: 881, y: 678, adjacent: [17, 22, 23 ]},
{name: 'Saxony', socio_1: 4, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 1, country: 'Germany', x: 1042, y: 678, adjacent: [17, 19, 21, 23, 24 ]},
{name: 'Bavaria', socio_1: 4, socio_2: null, stability: 3, battleground: false, lib_infl: 2, auth_infl: 0, country: 'Germany', x: 882, y: 788, adjacent: [20, 21, 22, 24, 62 ]},
{name: 'Bohemia', socio_1: 4, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1190, y: 734, adjacent: [22, 23, 25, 28 ]},
{name: 'Moravia', socio_1: 4, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1354, y: 702, adjacent: [19, 24, 26, 28 ]},
{name: 'Galicia/Przemesyl', socio_1: 7, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1551, y: 702, adjacent: [25, 29, 45 ]},
{name: 'Viennese Secession', socio_1: 8, socio_2: null, stability: 1, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1029, y: 831, adjacent: [28 ]},
{name: 'Vienna', socio_1: 1, socio_2: null, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1189, y: 876, adjacent: [24, 25, 27, 29, 30, 32, 33, 35]},
{name: 'Budapest', socio_1: 1, socio_2: null, stability: 2, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1379, y: 821, adjacent: [26, 28, 33, 34 ]},
{name: 'Alto Adige', socio_1: 9, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 888, y: 914, adjacent: [28, 62, 67 ]},
{name: 'Trieste', socio_1: 5, socio_2: null, stability: 3, battleground: false, lib_infl: 1, auth_infl: 0, country: 'Austria-Hungary', x: 987, y: 1025, adjacent: [32, 35, 50, 67 ]},
{name: 'Catholic Church', socio_1: 3, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1161, y: 980, adjacent: [28, 31, 35 ]},
{name: 'Dual Monarchy', socio_1: 2, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 1, country: 'Austria-Hungary', x: 1380, y: 942, adjacent: [28, 29 ]},
{name: 'Transylvania', socio_1: 6, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1564, y: 923, adjacent: [29, 48, 52 ]},
{name: 'Croatia', socio_1: 6, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Austria-Hungary', x: 1332, y: 1056, adjacent: [28, 31, 32, 50, 51 ]},
{name: 'Finland', socio_1: 9, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1473, y: 60, adjacent: [38, 40, 57, 58 ]},
{name: 'Siberia', socio_1: 8, socio_2: null, stability: 5, battleground: false, lib_infl: 2, auth_infl: 0, country: 'Russia', x: 2271, y: 60, adjacent: [42 ]},
{name: 'Saint Petersburg', socio_1: 1, socio_2: null, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1728, y: 164, adjacent: [36, 39, 40, 41 ]},
{name: 'Bourgeoisie', socio_1: 5, socio_2: null, stability: 2, battleground: false, lib_infl: 2, auth_infl: 0, country: 'Russia', x: 1890, y: 164, adjacent: [38 ]},
{name: 'Baltic States', socio_1: 4, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1472, y: 328, adjacent: [15, 36, 38, 44 ]},
{name: 'Nicolas II', socio_1: 2, socio_2: null, stability: 4, battleground: true, lib_infl: 0, auth_infl: 4, country: 'Russia', x: 1729, y: 380, adjacent: [38, 42, 45 ]},
{name: 'Moscow', socio_1: 1, socio_2: null, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1977, y: 327, adjacent: [37, 41, 43 ]},
{name: 'Symbolism', socio_1: 8, socio_2: null, stability: 1, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1977, y: 439, adjacent: [42 ]},
{name: 'Poland', socio_1: 9, socio_2: null, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1472, y: 579, adjacent: [15, 19, 40, 45 ]},
{name: 'Tsarist Army', socio_1: 7, socio_2: null, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1728, y: 579, adjacent: [26, 41, 44, 46, 47, 48, 49 ]},
{name: 'Belarus', socio_1: 6, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1978, y: 579, adjacent: [45, 47 ]},
{name: 'The Ukraine', socio_1: 6, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 2027, y: 736, adjacent: [45, 46, 49 ]},
{name: 'Orthodox Church', socio_1: 3, socio_2: null, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 1836, y: 876, adjacent: [34, 45, 49, 52 ]},
{name: 'Crimea', socio_1: 6, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Russia', x: 2095, y: 952, adjacent: [45, 47, 48, 52, 69, 72 ]},
{name: 'Bosnia', socio_1: 9, socio_2: 8, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Balkans', x: 1166, y: 1117, adjacent: [31, 35, 51, 53 ]},
{name: 'Serbia', socio_1: 9, socio_2: 7, stability: 3, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Balkans', x: 1497, y: 1085, adjacent: [35, 50, 52, 53, 54, 55 ]},
{name: 'Romania', socio_1: 4, socio_2: null, stability: 3, battleground: true, lib_infl: 1, auth_infl: 0, country: 'Balkans', x: 1727, y: 1025, adjacent: [34, 48, 49, 51, 54 ]},
{name: 'Montenegro', socio_1: 9, socio_2: 2, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Balkans', x: 1324, y: 1202, adjacent: [50, 51, 56, 67 ]},
{name: 'Bulgaria', socio_1: 6, socio_2: null, stability: 3, battleground: true, lib_infl: 0, auth_infl: 1, country: 'Balkans', x: 1677, y: 1145, adjacent: [51, 52, 55, 69 ]},
{name: 'Macedonia', socio_1: 9, socio_2: 3, stability: 2, battleground: true, lib_infl: 0, auth_infl: 0, country: 'Balkans', x: 1570, y: 1263, adjacent: [51, 54, 56, 69 ]},
{name: 'Greece', socio_1: 5, socio_2: null, stability: 2, battleground: false, lib_infl: 2, auth_infl: 0, country: 'Balkans', x: 1483, y: 1392, adjacent: [53, 55, 69, 71 ]},
{name: 'Norway', socio_1: 9, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 803, y: 66, adjacent: [13, 36, 58, 59 ]},
{name: 'Sweden', socio_1: 2, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 1159, y: 170, adjacent: [13, 36, 57, 59 ]},
{name: 'Denmark', socio_1: 8, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 984, y: 283, adjacent: [13, 57, 58 ]},
{name: 'Netherlands', socio_1: 1, socio_2: null, stability: 3, battleground: false, lib_infl: 1, auth_infl: 0, country: 'Independent', x: 664, y: 482, adjacent: [12, 61, 70 ]},
{name: 'Belgium', socio_1: 4, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 1, country: 'Independent', x: 574, y: 602, adjacent: [1, 16, 60, 70 ]},
{name: 'Switzerland', socio_1: 5, socio_2: null, stability: 5, battleground: false, lib_infl: 1, auth_infl: 0, country: 'Independent', x: 731, y: 915, adjacent: [9, 23, 30 ]},
{name: 'Spain/Portugal', socio_1: 6, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 131, y: 1115, adjacent: [8, 64 ]},
{name: 'Morocco', socio_1: 9, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 131, y: 1402, adjacent: [11, 63, 65 ]},
{name: 'Algeria', socio_1: 9, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 1, country: 'Independent', x: 369, y: 1402, adjacent: [11, 64, 66 ]},
{name: 'Tunisia', socio_1: 9, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 672, y: 1402, adjacent: [11, 67, 68 ]},
{name: 'Italy', socio_1: 2, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 889, y: 1205, adjacent: [10, 30, 31, 53, 66, 68 ]},
{name: 'Libya', socio_1: 9, socio_2: null, stability: 2, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 1205, y: 1528, adjacent: [66, 66, 71 ]},
{name: 'Constantinople', socio_1: 2, socio_2: null, stability: 3, battleground: false, lib_infl: 0, auth_infl: 0, country: 'Independent', x: 1872, y: 1215, adjacent: [49, 54, 55, 56, 72 ]},
{name: 'Great Britain', socio_1: null, socio_2: null, stability: null, battleground: null, lib_infl: null, auth_infl: null, country: null, x: null, y: null, adjacent: [ ]},
{name: 'Egypt', socio_1: null, socio_2: null, stability: null, battleground: null, lib_infl: null, auth_infl: null, country: null, x: null, y: null, adjacent: [ ]},
{name: 'Ottoman Empire', socio_1: null, socio_2: null, stability: null, battleground: null, lib_infl: null, auth_infl: null, country: null, x: null, y: null, adjacent: [ ]}
]

const strategy_cards = [
 null,
{n: 1, ops: 4, side: 'A', era: 'V', name: 'Admiral von Tirpitz*', persistent: false, prerequisite: false, playable: true},
{n: 2, ops: 1, side: 'L', era: 'V', name: 'State Secularism in France*', persistent: true, prerequisite: false, playable: true},
{n: 3, ops: 2, side: 'L', era: 'V', name: 'Second International*', persistent: false, prerequisite: false, playable: false},
{n: 4, ops: 2, side: 'A', era: 'V', name: 'Franz Ferdinand*', persistent: true, prerequisite: false, playable: false},
{n: 5, ops: 2, side: 'B', era: 'V', name: 'Dreyfus Affair', persistent: true, prerequisite: false, playable: false},
{n: 6, ops: 0, side: 'S', era: 'V', name: 'France Scoring', persistent: false, prerequisite: false, playable: true},
{n: 7, ops: 0, side: 'S', era: 'V', name: 'Austria-Hungary Scoring', persistent: false, prerequisite: false, playable: true},
{n: 8, ops: 0, side: 'S', era: 'V', name: 'Russia Scoring', persistent: false, prerequisite: false, playable: true},
{n: 9, ops: 3, side: 'L', era: 'V', name: 'Russo-Japanese War*', persistent: false, prerequisite: false, playable: true},
{n: 10, ops: 3, side: 'L', era: 'V', name: 'Entente Cordiale*', persistent: true, prerequisite: true, playable: true},
{n: 11, ops: 2, side: 'L', era: 'V', name: 'Foreign Investments', persistent: false, prerequisite: false, playable: true},
{n: 12, ops: 3, side: 'L', era: 'E', name: 'Magyarization*', persistent: false, prerequisite: false, playable: true},
{n: 13, ops: 2, side: 'A', era: 'V', name: 'Traditionalism', persistent: false, prerequisite: false, playable: true},
{n: 14, ops: 3, side: 'L', era: 'V', name: 'Radical Party Founded*', persistent: false, prerequisite: false, playable: true},
{n: 15, ops: 3, side: 'L', era: 'V', name: 'Lord Fisher*', persistent: true, prerequisite: false, playable: true},
{n: 16, ops: 4, side: 'B', era: 'V', name: 'Stymied', persistent: true, prerequisite: false, playable: true},
{n: 17, ops: 2, side: 'B', era: 'V', name: 'Eight Nation Alliance', persistent: false, prerequisite: false, playable: false},
{n: 18, ops: 3, side: 'A', era: 'V', name: 'Bernhard von Bülow*', persistent: false, prerequisite: false, playable: false},
{n: 19, ops: 3, side: 'L', era: 'V', name: 'Union of Liberation*', persistent: true, prerequisite: true, playable: true},
{n: 20, ops: 3, side: 'A', era: 'V', name: 'Bonapartism / Monarchism*', persistent: false, prerequisite: false, playable: false},
{n: 21, ops: 3, side: 'A', era: 'V', name: 'Prussian Spirit*', persistent: false, prerequisite: false, playable: true},
{n: 22, ops: 2, side: 'L', era: 'V', name: 'Socialist Movements', persistent: false, prerequisite: false, playable: true},
{n: 23, ops: 3, side: 'A', era: 'V', name: 'Third Department / Okhrana*', persistent: false, prerequisite: false, playable: true},
{n: 24, ops: 3, side: 'A', era: 'V', name: 'Tsarist Repression*', persistent: false, prerequisite: false, playable: true},
{n: 25, ops: 2, side: 'A', era: 'V', name: 'Legacy of Bismarck', persistent: true, prerequisite: false, playable: true},
{n: 26, ops: 2, side: 'L', era: 'V', name: 'Franco-Russian Alliance*', persistent: true, prerequisite: false, playable: false},
{n: 27, ops: 3, side: 'A', era: 'V', name: 'The Dual Alliance*', persistent: true, prerequisite: false, playable: true},
{n: 28, ops: 1, side: 'A', era: 'V', name: 'Scramble for Africa*', persistent: false, prerequisite: false, playable: true},
{n: 29, ops: 3, side: 'A', era: 'V', name: 'Two-power Standard*', persistent: true, prerequisite: false, playable: true},
{n: 30, ops: 2, side: 'A', era: 'V', name: 'Military Tradition', persistent: false, prerequisite: false, playable: true},
{n: 31, ops: 2, side: 'A', era: 'V', name: 'Status Quo*', persistent: false, prerequisite: false, playable: true},
{n: 32, ops: 4, side: 'L', era: 'E', name: 'Copenhagenization*', persistent: false, prerequisite: false, playable: true},
{n: 33, ops: 2, side: 'L', era: 'V', name: 'Modernism', persistent: false, prerequisite: false, playable: true},
{n: 34, ops: 2, side: 'A', era: 'V', name: 'Government-sponsored Art', persistent: false, prerequisite: false, playable: true},
{n: 35, ops: 3, side: 'A', era: 'V', name: 'Absolutism*', persistent: true, prerequisite: false, playable: true},
{n: 36, ops: 3, side: 'L', era: 'V', name: 'March of History*', persistent: true, prerequisite: false, playable: true},
{n: 37, ops: 2, side: 'A', era: 'V', name: 'Ferdinand Esterhazy', persistent: false, prerequisite: false, playable: false},
{n: 38, ops: 3, side: 'L', era: 'V', name: 'Kulturkampf', persistent: false, prerequisite: false, playable: true},
{n: 39, ops: 3, side: 'L', era: 'E', name: 'Spiritism and Mysticism', persistent: false, prerequisite: false, playable: true},
{n: 40, ops: 2, side: 'B', era: 'V', name: 'Indecisiveness', persistent: false, prerequisite: false, playable: true},
{n: 41, ops: 3, side: 'L', era: 'E', name: 'Dreyfus Rehabilitated*', persistent: true, prerequisite: false, playable: false},
{n: 42, ops: 4, side: 'A', era: 'E', name: 'The Kaiser Intervenes', persistent: false, prerequisite: false, playable: true},
{n: 43, ops: 0, side: 'S', era: 'E', name: 'Balkans Scoring', persistent: false, prerequisite: false, playable: true},
{n: 44, ops: 2, side: 'A', era: 'E', name: 'Second Hague Conference*', persistent: false, prerequisite: false, playable: true},
{n: 45, ops: 3, side: 'A', era: 'E', name: 'Belgian Rule in Congo*', persistent: false, prerequisite: false, playable: true},
{n: 46, ops: 4, side: 'L', era: 'E', name: 'Liberals gain Power in UK*', persistent: false, prerequisite: false, playable: true},
{n: 47, ops: 2, side: 'L', era: 'E', name: 'Young Turk Revolution*', persistent: true, prerequisite: true, playable: true},
{n: 48, ops: 3, side: 'A', era: 'E', name: 'Enver Pasha*', persistent: true, prerequisite: true, playable: true},
{n: 49, ops: 2, side: 'A', era: 'E', name: 'Austria Annexes Bosnia*', persistent: true, prerequisite: false, playable: true},
{n: 50, ops: 2, side: 'A', era: 'E', name: 'Schlieffen Plan Adopted*', persistent: true, prerequisite: false, playable: true},
{n: 51, ops: 2, side: 'L', era: 'E', name: 'Norwegian Independence*', persistent: true, prerequisite: false, playable: true},
{n: 52, ops: 3, side: 'A', era: 'E', name: 'Conrad von Hötzendorf*', persistent: false, prerequisite: false, playable: true},
{n: 53, ops: 0, side: 'S', era: 'E', name: 'Germany Scoring', persistent: false, prerequisite: false, playable: true},
{n: 54, ops: 3, side: 'A', era: 'E', name: 'Traditionalists Gain Power*', persistent: false, prerequisite: false, playable: true},
{n: 55, ops: 4, side: 'L', era: 'E', name: 'Viscount Grey', persistent: false, prerequisite: false, playable: false},
{n: 56, ops: 2, side: 'B', era: 'E', name: 'Control of the Channel*', persistent: false, prerequisite: false, playable: false},
{n: 57, ops: 2, side: 'B', era: 'E', name: 'Naval Bill / Fleet Law*', persistent: false, prerequisite: false, playable: true},
{n: 58, ops: 1, side: 'L', era: 'E', name: 'US Interventionism*', persistent: true, prerequisite: false, playable: false},
{n: 59, ops: 1, side: 'A', era: 'E', name: 'Declaration of Independence*', persistent: false, prerequisite: false, playable: true},
{n: 60, ops: 2, side: 'L', era: 'E', name: 'Legacy of 1848*', persistent: false, prerequisite: false, playable: true},
{n: 61, ops: 3, side: 'A', era: 'G', name: 'Russian Collapse*', persistent: true, prerequisite: false, playable: false},
{n: 62, ops: 3, side: 'L', era: 'E', name: 'Jozef Piłsudski*', persistent: false, prerequisite: false, playable: true},
{n: 63, ops: 4, side: 'L', era: 'E', name: 'October Manifesto*', persistent: true, prerequisite: true, playable: false},
{n: 64, ops: 4, side: 'L', era: 'E', name: 'Diagonal Politics*', persistent: false, prerequisite: false, playable: true},
{n: 65, ops: 2, side: 'A', era: 'E', name: 'Second Duma Disbanded*', persistent: false, prerequisite: false, playable: false},
{n: 66, ops: 2, side: 'L', era: 'E', name: 'Henry Wilson*', persistent: false, prerequisite: false, playable: false},
{n: 67, ops: 2, side: 'L', era: 'E', name: 'Landslide Electoral Victory', persistent: false, prerequisite: false, playable: true},
{n: 68, ops: 4, side: 'A', era: 'E', name: 'Triple Alliance*', persistent: true, prerequisite: false, playable: false},
{n: 69, ops: 2, side: 'A', era: 'E', name: 'Prince Heinrich*', persistent: false, prerequisite: false, playable: false},
{n: 70, ops: 2, side: 'L', era: 'E', name: 'Winston Churchill*', persistent: true, prerequisite: false, playable: false},
{n: 71, ops: 2, side: 'L', era: 'E', name: 'Local Uprising', persistent: false, prerequisite: false, playable: true},
{n: 72, ops: 3, side: 'A', era: 'E', name: 'Military Parade', persistent: false, prerequisite: false, playable: true},
{n: 73, ops: 2, side: 'A', era: 'E', name: 'Central Authority', persistent: false, prerequisite: false, playable: true},
{n: 74, ops: 3, side: 'A', era: 'E', name: 'von Bethmann-Hollweg*', persistent: true, prerequisite: false, playable: true},
{n: 75, ops: 2, side: 'L', era: 'E', name: 'Jean Jaures*', persistent: true, prerequisite: true, playable: false},
{n: 76, ops: 3, side: 'L', era: 'E', name: 'Georges Clemenceau*', persistent: true, prerequisite: false, playable: false},
{n: 77, ops: 2, side: 'A', era: 'E', name: 'Alsace-Lorraine*', persistent: false, prerequisite: false, playable: true},
{n: 78, ops: 5, side: 'L', era: 'V', name: 'Revolution of 1905*', persistent: true, prerequisite: true, playable: true},
{n: 79, ops: 3, side: 'L', era: 'E', name: 'Victor Chernov*', persistent: true, prerequisite: true, playable: false},
{n: 80, ops: 3, side: 'A', era: 'E', name: 'Tangier Crisis*', persistent: false, prerequisite: false, playable: true},
{n: 81, ops: 1, side: 'A', era: 'G', name: 'Raoul Villain*', persistent: false, prerequisite: false, playable: true},
{n: 82, ops: 3, side: 'A', era: 'G', name: 'Agadir Crisis*', persistent: false, prerequisite: false, playable: true},
{n: 83, ops: 1, side: 'A', era: 'G', name: 'Gavrilo Princip*', persistent: false, prerequisite: false, playable: false},
{n: 84, ops: 2, side: 'L', era: 'G', name: 'Balkan Federation*', persistent: true, prerequisite: false, playable: true},
{n: 85, ops: 3, side: 'A', era: 'G', name: 'Patriotism / Nationalism*', persistent: false, prerequisite: false, playable: true},
{n: 86, ops: 3, side: 'L', era: 'G', name: 'Parliament Act of 1911*', persistent: false, prerequisite: false, playable: true},
{n: 87, ops: 2, side: 'A', era: 'G', name: 'War in the Balkans*', persistent: true, prerequisite: false, playable: true},
{n: 88, ops: 1, side: 'A', era: 'G', name: 'US Non-Interventionism*', persistent: true, prerequisite: false, playable: true},
{n: 89, ops: 2, side: 'A', era: 'G', name: 'Stolypin Land Reforms*', persistent: false, prerequisite: false, playable: true},
{n: 90, ops: 2, side: 'L', era: 'G', name: 'Balkan Civil War*', persistent: false, prerequisite: false, playable: true},
{n: 91, ops: 4, side: 'L', era: 'G', name: 'Funeral of Edward VII*', persistent: false, prerequisite: false, playable: true},
{n: 92, ops: 3, side: 'L', era: 'G', name: 'Freedom and Accord Party*', persistent: false, prerequisite: false, playable: false},
{n: 93, ops: 2, side: 'A', era: 'G', name: 'Raid on the Sublime Porte*', persistent: true, prerequisite: false, playable: false},
{n: 94, ops: 2, side: 'L', era: 'G', name: 'Perfidious Italy*', persistent: true, prerequisite: false, playable: true},
{n: 95, ops: 5, side: 'A', era: 'G', name: 'Splendid Isolation*', persistent: true, prerequisite: false, playable: true},
{n: 96, ops: 3, side: 'A', era: 'G', name: 'Yugoslavia*', persistent: true, prerequisite: false, playable: true},
{n: 97, ops: 3, side: 'L', era: 'E', name: 'Exiles Escape/Return*', persistent: false, prerequisite: false, playable: true},
{n: 98, ops: 2, side: 'A', era: 'G', name: 'Reinhold von Sydow*', persistent: true, prerequisite: false, playable: true},
{n: 99, ops: 3, side: 'L', era: 'G', name: 'Franco-British Naval Cooperation*', persistent: false, prerequisite: false, playable: false},
{n: 100, ops: 3, side: 'A', era: 'G', name: 'Arms Traders/Industry', persistent: false, prerequisite: false, playable: false},
{n: 101, ops: 3, side: 'L', era: 'G', name: 'Aristide Briand*', persistent: true, prerequisite: false, playable: true},
{n: 102, ops: 3, side: 'A', era: 'G', name: 'German Army Expansion*', persistent: true, prerequisite: false, playable: true},
{n: 103, ops: 2, side: 'A', era: 'G', name: 'Black Hand*', persistent: true, prerequisite: false, playable: true},
{n: 104, ops: 2, side: 'L', era: 'G', name: 'Attempted Neutrality', persistent: false, prerequisite: false, playable: true},
{n: 105, ops: 3, side: 'L', era: 'E', name: 'Rosa Luxemburg*', persistent: false, prerequisite: false, playable: true},
{n: 106, ops: 2, side: 'A', era: 'G', name: 'Preventative War*', persistent: false, prerequisite: false, playable: true},
{n: 107, ops: 4, side: 'A', era: 'G', name: 'Mitteleuropa*', persistent: false, prerequisite: false, playable: true},
{n: 108, ops: 3, side: 'A', era: 'G', name: 'Weltpolitik*', persistent: false, prerequisite: false, playable: true},
{n: 109, ops: 2, side: 'A', era: 'G', name: 'Leopold von Berchtold*', persistent: true, prerequisite: false, playable: true},
{n: 110, ops: 2, side: 'L', era: 'G', name: 'Istvan Tisza*', persistent: false, prerequisite: false, playable: true}
]

const stability_cards = [
    null,
    {n: 1, name: 'Workers Unite'},
    {n: 2, name: 'Farmer Collectives'},
    {n: 3, name: 'Testimonials'},
    {n: 4, name: 'Popular Uproar'},
    {n: 5, name: 'Intelligentsia'},
    {n: 6, name: 'Left-wing Governments'},
    {n: 7, name: 'Anarchist Attack'},
    {n: 8, name: 'Blockade'},
    {n: 9, name: 'Silent Majority'},
    {n: 10, name: 'Most Favoured Nation'},
    {n: 11, name: 'Support of the Farmers'},
    {n: 12, name: 'Absolutist Rule'},
    {n: 13, name: 'Support of the Generals'},
    {n: 14, name: 'Secret Treaty Clauses'},
    {n: 15, name: 'Most Favoured Nation'},
    {n: 16, name: 'Naval Law Amendment'},
    {n: 17, name: 'Elitist Art'},
    {n: 18, name: 'Government Suppression'},
    {n: 19, name: 'Ecclesial Influence'},
    {n: 20, name: 'Limited Franchise'},
]

const naval_race_names = [
    {name: 'Pre-Dreadnought Era', y: 137},
    {name: 'HMS Dreadnought', y: 243},
    {name: 'Nassau Class', y: 349},
    {name: 'Bellerophon Class', y: 455},
    {name: 'Helgoland Class', y: 561},
    {name: 'Colossus Class', y: 667},
    {name: 'Kaiser Class', y: 773},
    {name: 'Orion Class', y: 878},
    {name: 'Moltke Class', y: 984},
    {name: 'King George V Class', y: 1090},
    {name: 'König Class', y: 1196},
    {name: 'Queen Elizabeth Class', y: 1302},
    {name: 'Bayern Class', y: 1408},
    {name: 'Revenge Class', y: 1514}    
]

if (typeof module !== 'undefined') module.exports = { spaces, strategy_cards, stability_cards, naval_race_names }