// Archery (Compound Mixed Team event added)
db.sports_new.insertMany([
  {
    "name": "Archery",
    "Medals": "6",
    "doc_pdf": "",
    "image": "sport_images/Archery.jpeg",
    "description": "Paris 1900 saw first appearance of Archery. Since then, Archery has been contested at 16 Olympics. In 1972 mordern Archery competition was adopted at Olympics. Indian Olympic Archery team made it's debut in 1988, at the Seoul Olympics.India is yet to win a medal in any event of archery competition. In LA 2028, for the first time Compond Archery Mixed team event will be contested at Olympics.",
    "events": {
      "men": [
        { "name": "Individual Competition" },
        { "name": "Team Competition" }
      ],
      "women": [
        { "name": "Individual Competition" },
        { "name": "Team Competition" }
      ],
      "mixed": [
        { "name": "Mixed Team" },
        { "name": "Compound Mixed Team" }
      ]
    },
    "edition": "2028"
  }
]);

//Athletics (20 KM RW Replaced by Half-Marathon RW, 50 KM RW Replaced by Mixed 4 * 100 Relay)
db.sports_new.insertMany([
  {
    "name": "Athletics",
    "Medals": "48",
    "doc_pdf": "Qualifications/Athletics/Athletics.pdf",
    "description": "Athletics has been contested at every Olympics since the birth of the modern Olympic movement at the 1896 Summer Olympics.Out of 48 Olympic events of Tokyo Indian athletes have competed in 41 events over 24 Olympic games from 1900 to 2016.Pole Vault is the only Men's event in which no Indian athlete has ever qualified, whereas Women's 1500m, 5000m, 100mH, Hammer Throw and Pole Vault events has eluded Indian women athletes.Mixed Team Relay will be competed first time in Tokyo 2020.Anju Bobby George made history when she won the bronze medal in long jump at the 2003 World Championships in Athletics in Paris. With this achievement, she became the first Indian athlete ever to win a medal in a World Championships in Athletics jumping 6.70 m.In Athens 2004 she finished 5th jumping 6.83 m, her personal best and the NR that stands even today.Later all three Russians who claimed a medal in the event - Tatyana Lebedeva, Irina Meleshina and Tatyana Kotova failed drugs tests.They did not test positive at the Games in 2004, however, and the samples from the event have since been destroyed, while the 10-year statute of limitations has also passed.",
    "image": "sport_images/Athletics.jpeg",
    "events": {
      "men": [
        { "name": "100m", "totalentries": "56", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "10.20", "WR": "9.58", "NR_holder": "Gurindervir Singh", "WR_holder": "Usain Bolt (JAM)" },
        { "name": "200m", "totalentries": "56", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "20.32", "WR": "19.19", "NR_holder": "Animesh Kujur", "WR_holder": "Usain Bolt (JAM)" },
        { "name": "400m", "totalentries": "48", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "45.21", "WR": "43.03", "NR_holder": "Muhammed Anas Yahiya", "WR_holder": "Wayde van Niekerk (RSA)" },
        { "name": "800m", "totalentries": "48", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "1:45.61", "WR": "1:40.91", "NR_holder": "Mohammed Afsal", "WR_holder": "David Rudisha (KEN)" },
        { "name": "1500m", "totalentries": "45", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "3:35.24", "WR": "3:26.00", "NR_holder": "Jinson Johnson", "WR_holder": "Hicham El Guerrouj (MAR)" },
        { "name": "5000m", "totalentries": "42", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "12:59.77", "WR": "12:35.36", "NR_holder": "Gulveer Singh", "WR_holder": "Joshua Cheptegei (UGA)" },
        { "name": "10000m", "totalentries": "27", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "27:00.22", "WR": "26:11.00", "NR_holder": "Gulveer Singh", "WR_holder": "Joshua Cheptegei (UGA)" },
        { "name": "110m H", "totalentries": "40", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "13.41", "WR": "12.80", "NR_holder": "Tejas Shirse", "WR_holder": "Aries Merritt (USA)" },
        { "name": "400m H", "totalentries": "40", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "48.80", "WR": "45.94", "NR_holder": "Ayyasamy Dharun", "WR_holder": "Karsten Warholm (NOR)" },
        { "name": "3000m SC", "totalentries": "45", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "8:09.91", "WR": "7:52.11", "NR_holder": "Avinash Sable", "WR_holder": "Lamecha GIRMA (ETH)" },
        { "name": "Marathon", "totalentries": "80", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "2:12:00", "WR": "2:01:09", "NR_holder": "Shivnath Singh", "WR_holder": "Kelvin Kiptum (KEN)" },
        { "name": "High Jump", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "2.29m", "WR": "2.45", "NR_holder": "Tejaswin Shankar", "WR_holder": "Javier Sotomayor (CUB)" },
        { "name": "Pole Vault", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "5.35m", "WR": "6.27", "NR_holder": "Dev Meena", "WR_holder": "Armand Duplantis (SWE)" },
        { "name": "Long Jump", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "8.42m", "WR": "8.95", "NR_holder": "Jeswin Aldrin", "WR_holder": "Mike Powell (USA)" },
        { "name": "Triple Jump", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "17.37m", "WR": "18.29", "NR_holder": "Praveen Chithravel", "WR_holder": "Jonathan Edwards (GBR)" },
        { "name": "Shot Put", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "21.49m", "WR": "23.56", "NR_holder": "Tajinderpal Singh Toor", "WR_holder": "Ryan Crouser (USA)" },
        { "name": "Discus Throw", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "66.28m", "WR": "74.35", "NR_holder": "Vikas Gowda", "WR_holder": "Mykolas Alekna (LTU)" },
        { "name": "Hammer Throw", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "72.86m", "WR": "86.74", "NR_holder": "Kamalpreet Singh", "WR_holder": "Yuriy Sedykh (URS)" },
        { "name": "Javelin Throw", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "90.23m", "WR": "98.48", "NR_holder": "Neeraj Chopra", "WR_holder": "Jan Železný (CZE)" },
        { "name": "Decathlon", "totalentries": "24", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "7666p", "WR": "9126p", "NR_holder": "Tejaswin Shankar", "WR_holder": "Kevin Mayer (FRA)" },
        { "name": "4 * 100m Relay", "totalentries": "16", "qualificationstandard": null, "maxentriesperNOC": "1", "NR": "38.77", "WR": "36.84", "NR_holder": "India", "WR_holder": "Jamaica" },
        { "name": "4 * 400m Relay", "totalentries": "16", "qualificationstandard": null, "maxentriesperNOC": "1", "NR": "3:00.25", "WR": "2:54.29", "NR_holder": "India", "WR_holder": "USA" },
        { "name": "Half-Marathon Race Walk" }
      ],
      "women": [
        { "name": "100m", "totalentries": "56", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "11.17", "WR": "10.49", "NR_holder": "Dutee Chand", "WR_holder": "Florence Griffith-Joyner (USA)" },
        { "name": "200m", "totalentries": "56", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "22.82", "WR": "21.34", "NR_holder": "Saraswati Saha", "WR_holder": "Florence Griffith-Joyner (USA)" },
        { "name": "400m", "totalentries": "48", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "50.79", "WR": "47.60", "NR_holder": "Hima Das", "WR_holder": "Marita Koch (GDR)" },
        { "name": "800m", "totalentries": "48", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "1:59.17", "WR": "1:53.28", "NR_holder": "Tintu Luka", "WR_holder": "Jarmila Kratochvílová (TCH)" },
        { "name": "1500m", "totalentries": "45", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "4:04.78", "WR": "3:49.04", "NR_holder": "KM Deeksha", "WR_holder": "Faith Kipyegon (KEN)" },
        { "name": "5000m", "totalentries": "42", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "15:10.35", "WR": "14:00.21", "NR_holder": "Parul Chaudhary", "WR_holder": "Gudaf TSEGAY (ETH)" },
        { "name": "10000m", "totalentries": "27", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "31:50.47", "WR": "28:54.14", "NR_holder": "Preeja Sreedharan", "WR_holder": "Beatrice Chebet (KEN)" },
        { "name": "100m H", "totalentries": "40", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "12.78", "WR": "12.12", "NR_holder": "Jyothi Yarraji", "WR_holder": "Tobi Amusan (NGR)" },
        { "name": "400m H", "totalentries": "40", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "55.42", "WR": "50.37", "NR_holder": "PT Usha / Vithya Ramraj", "WR_holder": "Sydney McLaughlin-Levrone (USA)" },
        { "name": "3000m SC", "totalentries": "45", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "9:12.46", "WR": "8:44.32", "NR_holder": "Parul Chaudhary", "WR_holder": "Beatrice Chepkoech (KEN)" },
        { "name": "Marathon", "totalentries": "80", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "2:34:43", "WR": "2:15:50 *", "NR_holder": "O. P. Jaisha", "WR_holder": "Tigst Assefa (ETH)" },
        { "name": "High Jump", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "1.92m", "WR": "2.10", "NR_holder": "Sahana Kumari", "WR_holder": "Yeroslava Mahuchikh (UKR)" },
        { "name": "Pole Vault", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "4.21m", "WR": "5.06", "NR_holder": "Rosy Meena Paulraj", "WR_holder": "Yelena Isinbayeva (RUS)" },
        { "name": "Long Jump", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "6.83m", "WR": "7.52", "NR_holder": "Anju Bobby George", "WR_holder": "Galina Chistyakova (URS)" },
        { "name": "Triple Jump", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "14.11m", "WR": "15.74", "NR_holder": "Mayookha Johny", "WR_holder": "Yulimar Rojas (VEN)" },
        { "name": "Shot Put", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "18.41m", "WR": "22.63", "NR_holder": "Abha Khatua", "WR_holder": "Natalya Lisovskaya (URS)" },
        { "name": "Discus Throw", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "66.59m", "WR": "76.80", "NR_holder": "Kamalpreet Kaur", "WR_holder": "Gabriele Reinsch (GDR)" },
        { "name": "Hammer Throw", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "65.25m", "WR": "82.98", "NR_holder": "Sarita Singh", "WR_holder": "Anita Włodarczyk (POL)" },
        { "name": "Javelin Throw", "totalentries": "32", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "63.82m", "WR": "72.28", "NR_holder": "Annu Rani", "WR_holder": "Barbora Špotáková (CZE)" },
        { "name": "Heptathlon", "totalentries": "24", "qualificationstandard": "", "maxentriesperNOC": "3", "NR": "6211p", "WR": "7291", "NR_holder": "JJ Shobha", "WR_holder": "Jackie Joyner-Kersee (USA)" },
        { "name": "4 * 100m Relay", "totalentries": "16", "qualificationstandard": "", "maxentriesperNOC": "1", "NR": "43.37", "WR": "40.82", "NR_holder": "India", "WR_holder": "USA" },
        { "name": "4 * 400m Relay", "totalentries": "16", "qualificationstandard": "", "maxentriesperNOC": "1", "NR": "3:26.89", "WR": "3:15.17", "NR_holder": "India", "WR_holder": "Soviet Union" },
        { "name": "Half-Marathon Race Walk", "totalentries": "", "qualificationstandard": "", "maxentriesperNOC": "", "NR": "", "WR": "", "NR_holder": "", "WR_holder": "" }
      ],
      "mixed": [
        { "name": "4 * 400 Mixed Relay", "totalentries": "16", "qualificationstandard": "", "maxentriesperNOC": "1", "NR": "3:12.87", "WR": "3:08.80", "NR_holder": "India", "WR_holder": "USA" },
        { "name": "4 * 100m Mixed Relay", "totalentries": "", "qualificationstandard": "", "maxentriesperNOC": "", "NR": "", "WR": "", "NR_holder": "", "WR_holder": ""  }
      ]
    },
    "edition": "2028"
  }
]);

// Badminton (No Change)
db.sports_new.insertMany([
  {
    "name": "Badminton",
    "Medals": "5",
    "doc_pdf": "Qualifications/Badminton/Badminton.pdf",
    "image": "sport_images/Badminton.jpeg",
    "description": "Badminton had its debut at the 1992 Olympics and it has been part of all of the last 7 Olympics. Badminton is the 3rd most successful individual Olympic sport for India after Shooting and Wrestling owing to its 2(Silver,Bronze) medals won in Women's singles event. Badminton is also only second to Judo and TableTennis in terms of men and women representation at olympics for India, having 11 men and 10 women out of 21 athletes that has competed in last 7 Olympics.",
    "events": {
      "men": [
        { "name": "Singles" },
        { "name": "Doubles" }
      ],
      "women": [
        { "name": "Singles" },
        { "name": "Doubles" }
      ],
      "mixed": [
        { "name": "Mixed Doubles" }
      ]
    },
    "edition": "2028"
  }
]);

// Boxing (1 Medal event for Women added)
db.sports_new.insertMany([
  {
    "name": "Boxing",
    "Medals": "14",
    "doc_pdf": "Qualifications/Boxing/Boxing.pdf",
    "image": "sport_images/Boxing.jpeg",
    "description": "Boxing has been contested at every Summer Olympic Games since its introduction to the program at the 1904 Summer Olympics, except for the 1912 Summer Olympics in Stockholm, because Swedish law banned the sport at the time. India first competed in Boxing at 1948 London Olympics in 7 weight categories but had to wait for 60 years for her first Olympic medal. Vijender Singh won Bronze in Middleweight(75kg) weight category at Beijing 2008. Beijing 2008 were also the final olympics with boxing as a male only event. Since the 2012 London Olympics, women's boxing is part of the program.In London 2012, Mary Kom became the first Indian woman to win a medal in boxing with her bronze medal finish in Women's flyweight.",
    "events": {
      "men": [
        { "name": "Feather(55kg)" },
        { "name": "Light(56kg to 60kg)" },
        { "name": "Welter(61kg to 65kg)" },
        { "name": "Middle(66kg to 70kg)" },
        { "name": "Light Heavy(71kg to 80kg)" },
        { "name": "Heavy(81kg to 90kg)" },
        { "name": "Super Heavy(+90kg)" }
      ],
      "women": [
        { "name": "Fly(48kg to 51kg)" },
        { "name": "Feather(52kg to 54kg)" },
        { "name": "Light(55kg to 57kg)" },
        { "name": "Welter(58kg to 60kg)" },
        { "name": "Middle(61kg to 65kg)" },
        { "name": "Light Heavy(66kg to 70kg)" },
        { "name": "Heavy(71kg to 75kg)" },
      ]
    },
    "edition": "2028"
  }
]);

// Equestrian (No Change)
db.sports_new.insertMany([
  {
    "name": "Equestrian",
    "Medals": "6",
    "doc_pdf": "Qualifications/Equestrian/Equestrian.pdf",
    "image": "sport_images/Equestrian_1.jpeg",
    "description": "Equestrian made it's debut at the 1900 Summer Olympics in Paris, France. It disappeared until 1912, but has appeared at every Summer Olympic Games since. Cool thing about equestrian is women and men compete together on equal terms.In 1980 India sent an eventing team comprising of Muhammad Khan, Darya Singh, Jitendarjit Singh Ahluwalia, Hussain Khan, but all four were eliminated.Imtiaz Anees was last athlete who competed in Mixed Three-Day, Individual Event  for India at Sydney, 2000. For Tokyo 2020, Fouaad Mirza is trying to get qualification as one of the two highest rank athlete from Group-G.",
    "events": {
      "unisex": [
        { "name": "Individual", "category": "Eventing" },
        { "name": "Team", "category": "Eventing" },
        { "name": "Individual", "category": "Dressage" },
        { "name": "Team", "category": "Dressage" },
        { "name": "Individual", "category": "Jumping" },
        { "name": "Team", "category": "Jumping" }
      ]
    },
    "edition": "2028"
  }
]);

// Fencing (No Change)
db.sports_new.insertMany([
  {
    "name": "Fencing",
    "Medals": "12",
    "doc_pdf": "Qualifications/Fencing/Fencing.pdf",
    "image": "sport_images/Fencing.jpeg",
    "description": "Fencing has been contested at every Summer Olympic Games since the birth of the modern Olympic movement at the 1896 Summer Olympics in Athens. NO Indian athlete has qualified for fencing events ever. This time around though BHAVANI DEVI has a solid chance of qualification and may be cometh the Tokyo 2020, we'll have India's first fencing athlete at Olympics.",
    "events": {
      "men": [
        { "name": "Individual Foil" },
        { "name": "Individual Epee" },
        { "name": "Individual Sabre" },
        { "name": "Team Sabre" },
        { "name": "Team Foil" },
        { "name": "Team Epee" }
      ],
      "women": [
        { "name": "Individual Foil" },
        { "name": "Individual Epee" },
        { "name": "Individual Sabre" },
        { "name": "Team Sabre" },
        { "name": "Team Foil" },
        { "name": "Team Epee" }
      ]
    },
    "edition": "2028"
  }
]);

// Golf (Mixed Team event added)
db.sports_new.insertMany([
  {
    "name": "Golf",
    "Medals": "3",
    "doc_pdf": "Qualifications/Golf/Golf.pdf",
    "image": "sport_images/Golf.jpeg",
    "description": "Golf was restored for the 2016 Summer Olympics After featuring in the initial Olympics of 1900 and 1904.India entered Anirban Lahiri, Shiv Chawrasia, and Aditi Ashok into the Rio Olympic.Where, After the inspired performance of the first two rounds, Aditi Ashok finished on rank 41.",
    "events": {
      "men": [
        { "name": "Men’s Individual Stroke Play" }
      ],
      "women": [
        { "name": "Women’s Individual Stroke Play" }
      ]
    },
    "edition": "2028"
  }
]);

// Gymnastics (Mixed Team event added)
db.sports_new.insertMany([
  {
    "name": "Gymnastics",
    "Medals": "19",
    "doc_pdf": "Qualifications/Gymnastics/Gymnastics.pdf",
    "image": "sport_images/Gymnastics.jpeg",
    "description": "Indian Gymnastics team first competed at Helsinki 1952 in 7 events and at Tokyo 1964 in 8 events. But it's moment come when Dipa Karmakar become the first Indian woman gymnast to qualify for Olympics at Rio 2016. Dipa finished inspiring 4th, missing out on a medal for 0.150 difference.",
    "events": {
      "men": [
        { "name": "Team", "category": "Artistic" },
        { "name": "Individual All-Around", "category": "Artistic" },
        { "name": "Floor Exercise", "category": "Artistic" },
        { "name": "Pommel Horse", "category": "Artistic" },
        { "name": "Rings", "category": "Artistic" },
        { "name": "Vault", "category": "Artistic" },
        { "name": "Parallel Bars", "category": "Artistic" },
        { "name": "Horizontal Bar", "category": "Artistic" },
        { "name": "Individual", "category": "Trampoline" }
      ],
      "women": [
        { "name": "Team", "category": "Artistic" },
        { "name": "Individual All-Around", "category": "Artistic" },
        { "name": "Floor Exercise", "category": "Artistic" },
        { "name": "Uneven Bars", "category": "Artistic" },
        { "name": "Beam", "category": "Artistic" },
        { "name": "Vault", "category": "Artistic" },
        { "name": "Individual All-Around", "category": "Rhythmic" },
        { "name": "Group All-Around", "category": "Rhythmic" },
        { "name": "Individual", "category": "Trampoline" }
      ],
      "mixed": [
        { "name": "Mixed Team", "category": "Artistic" }
      ]
    },
    "edition": "2028"
  }
]);

// Hockey (No Change)
db.sports_new.insertMany([
  {
    "name": "Hockey",
    "Medals": "2",
    "doc_pdf": "Qualifications/Hockey/Hockey.pdf",
    "image": "sport_images/Hockey.jpeg",
    "description": "We dominated the fuc**ng world from 1920 to 1980. If you haven't seen it already, I highly recommend watching amazing, Digvijay Singh Deo taking you through the journey of India's golden era of hockey.",
    "events": {
      "men": [
        { "name": "12-team tournament" }
      ],
      "women": [
        { "name": "12-team tournament" }
      ]
    },
    "edition": "2028"
  }
]);

// Judo (No Change)
db.sports_new.insertMany([
  {
    "name": "Judo",
    "Medals": "15",
    "doc_pdf": "Qualifications/Judo/Judo.pdf",
    "image": "sport_images/Judo.jpeg",
    "description": "Judo was first included in the Summer Olympic Games at the 1964 Games in Tokyo, Japan. After not being included in 1968, judo has been an Olympic sport in each Olympiad since then. Only male judoka participated until the 1988 Summer Olympics, when women participated as a demonstration sport. Women judoka were first awarded medals at the 1992 Summer Olympics. India debut at 1992 olympics participating in 5 events, 4 men and 1 woman. Thangjam Tababi Devi became India's first judo medallist at the Olympic level, claiming a silver at the Youth Games after losing to Venezuela's Maria Giminez in the finals of the women's 44kg category here.",
    "events": {
      "men": [
        { "name": "-60kg" },
        { "name": "-66kg" },
        { "name": "-73kg" },
        { "name": "-81kg" },
        { "name": "-90kg" },
        { "name": "-100kg" },
        { "name": "+100kg" }
      ],
      "women": [
        { "name": "-48kg" },
        { "name": "-52kg" },
        { "name": "-57kg" },
        { "name": "-63kg" },
        { "name": "-70kg" },
        { "name": "-78kg" },
        { "name": "+78kg" }
      ],
      "mixed": [
        { "name": "Mixed Team", "women": "-57kg,-70kg,+70kg", "men": "-73kg,-90kg,+90kg" }
      ]
    },
    "edition": "2028"
  }
]);

// Rowing ( Mixed Event Added)
db.sports_new.insertMany([
  {
    "name": "Rowing",
    "Medals": "15",
    "doc_pdf": "Qualifications/Rowing/Rowing.pdf",
    "image": "sport_images/Rowing.jpeg",
    "description": "Rowing at the Summer Olympics has been part of the competition since its debut in the 1900 Summer Olympics. India made it's debut in 2000 Sydney games with Kasam Khan, and Inderpal Singh competing in Men's Coxless Pairs. India has competed in each Olympics since then. No women athlete has ever qualified in any events at Olympics for India over last five Olympics.",
    "events": {
      "men": [
        { "name": "Single Sculls(1x)" },
        { "name": "Pair(2-)" },
        { "name": "Double Sculls(2x)" },
        { "name": "Four(4-)" },
        { "name": "Quadruple(4x)" },
        { "name": "Eight(8+)" },
        { "name": "Beach Sprints Solo", "category": "Rowing Coastal" }
      ],
      "women": [
        { "name": "Single Sculls(1x)" },
        { "name": "Pair(2-)" },
        { "name": "Double Sculls(2x)" },
        { "name": "Four(4-)" },
        { "name": "Quadruple(4x)" },
        { "name": "Eight(8+)" },
        { "name": "Beach Sprints Solo", "category": "Rowing Coastal" }
      ],
      "mixed": [
        { "name": "Beach Sprints Mixed Double Sculls", "category": "Rowing Coastal" }
      ]
    },
    "edition": "2028"
  }
]);

// Sailing (No changes)
db.sports_new.insertMany([
  {
    "name": "Sailing",
    "Medals": "10",
    "doc_pdf": "Qualifications/Sailing/Sailing.pdf",
    "image": "sport_images/Sailing.jpeg",
    "description": "Sailing made its debut in 1900 and, with the exception of 1904, it has appeared at every Olympic Games since then.In 1972 Soli Contractor and A.A. Basith had represented India in Flying Dutchman Class, event which is no longer a Olympic event. Since then, India have been represented by various athletes at 1984, 1988, 1992, 2004 and 2008 olympics but not more than one event at single olympics.",
    "events": {
      "men": [
        { "name": "Windsurfing" },
        { "name": "Dinghy" },
        { "name": "Skiff" },
        { "name": "Kite" }
      ],
      "women": [
        { "name": "Windsurfing" },
        { "name": "Dinghy" },
        { "name": "Skiff" },
        { "name": "Kite" }
      ],
      "mixed": [
        { "name": "Mixed Multihull" },
        { "name": "Mixed Dinghy"}
      ]
    },
    "edition": "2028"
  }
]);

// Shooting (No Change)
db.sports_new.insertMany([
  {
    "name": "Shooting",
    "Medals": "15",
    "doc_pdf": "Qualifications/Shooting/Shooting.pdf",
    "image": "sport_images/Shooting.jpeg",
    "description": "When they talk about greatest moment in Indian sports history, from the book A SHOT AT HISTORY: I picked up my rifle for one last time, looked at the sight, was aiming slightly to the left, corrected myself and pulled the trigger. Just touched it really. It was over so fast. A few seconds. And it was close to perfect as you can get.  10.8  I shouted when I saw the score on my monitor before me. I pumped my fist at the score, not victory, because it hadn't come yet. Hakkinen shot seconds later and had a 9.7 and India's first and only Individual GOLD till date.",
    "events": {
      "men": [
        { "name": "10m Air Rifle" },
        { "name": "50m Rifle 3 Positions" },
        { "name": "10m Air Pistol" },
        { "name": "25m Pistol" },
        { "name": "Trap" },
        { "name": "Skeet" }
      ],
      "women": [
        { "name": "10m Air Rifle" },
        { "name": "50m Rifle 3 Positions" },
        { "name": "10m Air Pistol" },
        { "name": "25m Pistol" },
        { "name": "Trap" },
        { "name": "Skeet" }
      ],
      "mixed": [
        { "name": "10m Air Rifle Mixed Team" },
        { "name": "10m Air Pistol Mixed Team" },
        { "name": "Trap Mixed Team" }
      ]
    },
    "edition": "2028"
  }
]);

// Table Tennis (Men Women team event is replaced by Mixed  Team and Doubles Events are added.)
db.sports_new.insertMany([
  {
    "name": "TableTennis",
    "Medals": "6",
    "doc_pdf": "Qualifications/TableTennis/TableTennis.pdf",
    "image": "sport_images/TableTennis.jpeg",
    "description": "Table tennis competition has been in the Summer Olympic Games since 1988, with singles and doubles events for men and women. Athletes from China have dominated the sport, winning a total of 53 medals in 32 events, including 28 out of a possible 32 gold medals, and only failing to at least medal in one event, the inaugural Men's Singles event at the 1988 Summer Olympics. Starting from 1988, India has competed in 8 Olympics with total 16 participants, 8 men and 8 women. Indian Table Tennis had a inarguably best year in it's history in 2018 — two historic medals at the Asian Games following Manika Batra’s unprecedented showing at the Commonwealth Games.Where she defeated World No. 4 Feng Tianwei to win India her first women's gold in CWG.",
    "events": {
      "men": [
        { "name": "Singles" },
        { "name": "Doubles" }
      ],
      "women": [
        { "name": "Singles" },
        { "name": "Doubles" }
      ],
      "mixed": [
        { "name": "Mixed Doubles" },
        { "name": "Mixed Team" }
      ]
    },
    "edition": "2028"
  }
]);

// Tennis (No change)
db.sports_new.insertMany([
  {
    "name": "Tennis",
    "Medals": "5",
    "doc_pdf": "Qualifications/Tennis/Tennis.pdf",
    "image": "sport_images/Tennis.jpeg",
    "description": "India made her debut in Tennis at 1924 Paris games. Indian Team contested at 4 events including Men's Singles, Women's Singles, Men's Doubles, and Mixed Doubles. After 1924 Tennis was dropped due to disputes between the International Lawn Tennis Federation and the International Olympic Committee over how to define amateur players. It returned as a full medal sport at the 1988 Summer Olympics open for all players regardless of their age and status and has been played at every edition of the Games since then. In the 1996 Atlanta Olympics, Lenader Paes won the bronze medal in men’s singles. He beat Fernando Meligeni in the 3rd place payoff. Paes thus becoming the first Indian to win an individual medal since KD Jadhav won bronze at the 1952 Helsinki Olympics. With the rise of the Paes- Bhupathi duo in men’s doubles, there were expectations of an Olympic medal(well, they were world No. 1). However, they had a disappointing second round exit at the 2000 Sydney Olympics. In the 2004 Athens Olympic Games, Paes Bhupathi failed again at the semifinals stage.",
    "events": {
      "men": [
        { "name": "Singles" },
        { "name": "Doubles" }
      ],
      "women": [
        { "name": "Singles" },
        { "name": "Doubles" }
      ],
      "mixed": [
        { "name": "Mixed Doubles" }
      ]
    },
    "edition": "2028"
  }
]);

// Weightlifting (Events Reduced from 14 to 10, Weight categories TBC)
db.sports_new.insertMany([
  {
    "name": "Weightlifting",
    "Medals": "10",
    "doc_pdf": "Qualifications/Weightlifting/Weightlifting.pdf",
    "image": "sport_images/Weightlifting.jpeg",
    "description": "Weightlifting has been contested at every Summer Olympic Games since the 1920 Summer Olympics, as well as twice before then. It debuted at the 1896 Summer Olympics, in Athens, Greece, and was also an event at the 1904 Games. U Zaw Weik competed for India in weightlifting at the 1936 Olympics, but he was a native of Burma, now called Myanmar. Karnam Malleswari is the only Indian weightlifter to win an olympic medal. Mirabai Chanu become only second women weightlifter after Malleswari to win world championship when she won world title at 2017 Anaheim, United States.",
    "events": {
      "men": [
        { "name": "TBC" },
        { "name": "TBC" },
        { "name": "TBC" },
        { "name": "TBC" },
        { "name": "TBC" }
      ],
      "women": [
        { "name": "TBC" },
        { "name": "TBC" },
        { "name": "TBC" },
        { "name": "TBC" },
        { "name": "TBC" }
      ]
    },
    "edition": "2028"
  }
]);

// Wrestling (No Change)
db.sports_new.insertMany([
  {
    "name": "Wrestling",
    "Medals": "18",
    "doc_pdf": "Qualifications/Wrestling/Wrestling.pdf",
    "image": "sport_images/Wrestling.jpeg",
    "description": "India made her Wrestling debut at Antwerpen 1920 with Kumar Navale and Randhir Shindes. K D Jadhav gave India her first medal at Helsinki 1952, winning Bronze in Men's Bantamweight, Freestyle. Mahabir Singh holds the record for youngest ever wrestler to participate at olympic games, he competed in 1980 Olympics at the age of 15 years, 330 days. Sushil Kumar is the most decorated Indian Wrestler and only athlete from India to win two Olympics medals. The women's wrestling was introduced in 2004, till 2016 only 4 Indian women wrestler has competed in Olympics out of 79 overall. Sakshi Malik at Rio 2016 become the first Indian woman wrestler to win medal at Olympics.",
    "events": {
      "men": [
        { "name": "Up to 57kg", "category": "Freestyle" },
        { "name": "From 57 to 65kg", "category": "Freestyle" },
        { "name": "From 65 to 74kg", "category": "Freestyle" },
        { "name": "From 74 to 86kg", "category": "Freestyle" },
        { "name": "From 86 to 97kg", "category": "Freestyle" },
        { "name": "From 97 to 125kg", "category": "Freestyle" },
        { "name": "Up to 60kg", "category": "Greco-Roman" },
        { "name": "From 60 to 67kg", "category": "Greco-Roman" },
        { "name": "From 67 to 77kg", "category": "Greco-Roman" },
        { "name": "From 77 to 87kg", "category": "Greco-Roman" },
        { "name": "From 87 to 97kg", "category": "Greco-Roman" },
        { "name": "From 97 to 130kg", "category": "Greco-Roman" }
      ],
      "women": [
        { "name": "Up to 50kg", "category": "Freestyle" },
        { "name": "From 50 to 53kg", "category": "Freestyle" },
        { "name": "From 53 to 57kg", "category": "Freestyle" },
        { "name": "From 57 to 62kg", "category": "Freestyle" },
        { "name": "From 62 to 68kg", "category": "Freestyle" },
        { "name": "From 68 to 76kg", "category": "Freestyle" }
      ]
    },
    "edition": "2028"
  }
]);

// Swimming (7 Medal events added 50m BS, Breast S, BF and mixed medaly)
db.sports_new.insertMany([
  {
    "name": "Swimming",
    "Medals": "42",
    "doc_pdf": "Qualifications/Swimming/Swimming.pdf",
    "image": "sport_images/Swimming.jpeg",
    "description": "Swimming has been a sport at every modern Summer Olympics. It has been open to women since 1912. India first participated in Swimming at 1932 olympics but this is the first time that an Indian athlete has qualified for the game by achieving qualification standard time. also, Sajan Prakash will become the first athlete for represent India twice at olympics after becoming the first Indian to reach olympics on merit rather than going through Universality Quota.",
    "events": {
      "men": [
        { "name": "50m Freestyle" },
        { "name": "100m Freestyle" },
        { "name": "200m Freestyle" },
        { "name": "400m Freestyle" },
        { "name": "800m Freestyle" },
        { "name": "1500m Freestyle" },
        { "name": "50m Backstroke" },
        { "name": "100m Backstroke" },
        { "name": "200m Backstroke" },
        { "name": "50m Breaststroke" },
        { "name": "100m Breaststroke" },
        { "name": "200m Breaststroke" },
        { "name": "50m Butterfly" },
        { "name": "100m Butterfly" },
        { "name": "200m Butterfly" },
        { "name": "200m Individual Medley" },
        { "name": "400m Individual Medley" },
        { "name": "4 x 100m Freestyle Relay " },
        { "name": "4 x 200m Freestyle Relay " },
        { "name": "4 x 100m Medley Relay " }
      ],
      "women": [
        { "name": "50m Freestyle" },
        { "name": "100m Freestyle" },
        { "name": "200m Freestyle" },
        { "name": "400m Freestyle" },
        { "name": "800m Freestyle" },
        { "name": "1500m Freestyle" },
        { "name": "50m Backstroke" },
        { "name": "100m Backstroke" },
        { "name": "200m Backstroke" },
        { "name": "50m Breaststroke" },
        { "name": "100m Breaststroke" },
        { "name": "200m Breaststroke" },
        { "name": "50m Butterfly" },
        { "name": "100m Butterfly" },
        { "name": "200m Butterfly" },
        { "name": "200m Individual Medley" },
        { "name": "400m Individual Medley" },
        { "name": "4 x 100m Freestyle Relay " },
        { "name": "4 x 200m Freestyle Relay " },
        { "name": "4 x 100m Medley Relay " }
      ],
      "mixed": [
        { "name": "4X100 Freestyle Relay" },
        { "name": "Mixed Medley Relay" }
      ]
    },
    "edition": "2028"
  }
]);

//Squash (New Sport)
db.sports_new.insertMany([
  {
    "name": "Squash",
    "Medals": "2",
    "doc_pdf": "",
    "image": "sport_images/Squash.jpeg",
    "description": "Squash will make its debut at the LA2028 Olympic Games.",
    "events": {
      "men": [
        { "name": "Individual" }
      ],
      "women": [
        { "name": "Individual" }
      ]
    },
    "edition": "2028"
  }
]);

//Cricket (New Sport)
db.sports_new.insertMany([
  {
    "name": "Cricket",
    "Medals": "2",
    "doc_pdf": "",
    "image": "sport_images/Cricket.jpeg",
    "description": "Cricket will make its return to the Olympic Games after 128 Years in the T20 format at LA2028.",
    "events": {
      "men": [
        { "name": "6 Team T20 Tournament" }
      ],
      "women": [
        { "name": "6 Team T20 Tournament" }
      ]
    },
    "edition": "2028"
  }
]);