// HuddleUp Trivia � Soccer Question Database

const SOCCER_Q = {
  0: { // FIFA WORLD CUP
    100: [
      { clue: "Which country has won the most FIFA World Cups with 5 titles?", answer: "Brazil", accept: ["brazil", "brasil"], choices: ["Germany", "Italy", "Argentina"], diff: 1 },
      { clue: "England's only World Cup victory came in 1966 on home soil. Who did they beat in the final?", answer: "West Germany", accept: ["west germany", "germany", "west german"], choices: ["Argentina", "Brazil", "France"], diff: 2 },
      { clue: "Pelé is the only player to win three World Cup titles. In which years did Brazil win those cups?", answer: "1958, 1962, and 1970", accept: ["1958 1962 1970", "1958, 1962, 1970", "58 62 70"], choices: ["1950, 1962, 1970", "1954, 1958, 1962", "1958, 1970, 1994"], diff: 3 },
      { clue: "The very first FIFA World Cup was held in 1930. Which country hosted AND won the inaugural tournament?", answer: "Uruguay", accept: ["uruguay"], choices: ["Brazil", "Argentina", "France"], diff: 2 }
    ],
    200: [
      { clue: "Messi finally won his first World Cup in 2022. Which country did Argentina beat in the final?", answer: "France", accept: ["france"], choices: ["Brazil", "Croatia", "Morocco"], diff: 1 },
      { clue: "The 2022 World Cup final ended in a 3-3 draw. How did Argentina win the title?", answer: "On penalties", accept: ["on penalties", "penalty shootout", "penalties", "penalty kicks"], choices: ["Golden goal in extra time", "By aggregate score", "Coin toss"], diff: 1 },
      { clue: "Miroslav Klose holds the record for most World Cup goals ever with how many?", answer: "16", accept: ["16", "sixteen"], choices: ["15", "14", "17"], diff: 3 },
      { clue: "Zinedine Zidane scored two headers in the 1998 World Cup final to lead France to victory. Who did France beat in that final?", answer: "Brazil", accept: ["brazil", "brasil"], choices: ["Germany", "Italy", "Argentina"], diff: 3 }
    ],
    300: [
      { clue: "How many World Cup titles has Germany won?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 2 },
      { clue: "Geoff Hurst scored a hat trick in the 1966 World Cup final. For which country?", answer: "England", accept: ["england"], choices: ["West Germany", "Brazil", "Italy"], diff: 2 },
      { clue: "Kylian Mbappé scored a hat trick in the 2022 World Cup final — in a losing effort. He plays for which country?", answer: "France", accept: ["france"], choices: ["Belgium", "Morocco", "Spain"], diff: 1 },
      { clue: "Pelé was how old when he won his first World Cup in 1958, making him the youngest World Cup winner?", answer: "17", accept: ["17", "seventeen"], choices: ["18", "16", "19"], diff: 3 }
    ],
    400: [
      { clue: "France won the World Cup in 1998. Where was that World Cup held?", answer: "France", accept: ["france"], choices: ["Germany", "Spain", "Italy"], diff: 1 },
      { clue: "The 2026 FIFA World Cup will be co-hosted by three nations. Name any one of them.", answer: "USA, Mexico, or Canada", accept: ["usa", "united states", "us", "mexico", "canada"], choices: ["Brazil, Argentina, Colombia", "England, France, Germany", "Japan, South Korea, Australia"], diff: 1 },
      { clue: "Luka Modric led Croatia to the 2018 World Cup final and won the Ballon d'Or that year. Who did Croatia lose to in the final?", answer: "France", accept: ["france"], choices: ["Brazil", "Germany", "Argentina"], diff: 2 },
      { clue: "The 2026 World Cup will feature how many teams — an expansion from the current 32?", answer: "48", accept: ["48", "forty-eight"], choices: ["40", "36", "64"], diff: 2 }
    ]
  },
  1: { // GOAL SCORING LEGENDS
    100: [
      { clue: "Lionel Messi has won the Ballon d'Or a record number of times. How many has he won as of 2024?", answer: "8", accept: ["8", "eight"], choices: ["7", "6", "9"], diff: 1 },
      { clue: "Cristiano Ronaldo holds the record for most international goals. He plays for which country?", answer: "Portugal", accept: ["portugal", "portuguese"], choices: ["Spain", "Brazil", "France"], diff: 1 },
      { clue: "Pelé's legendary status is tied to Brazil's success. Approximately how many competitive career goals did he officially score?", answer: "767", accept: ["767", "about 767", "around 767"], choices: ["1000", "500", "652"], diff: 3 },
      { clue: "Robert Lewandowski set a Bundesliga record with 41 goals in one season in 2020-21. Which club was he playing for?", answer: "Bayern Munich", accept: ["bayern munich", "bayern", "fc bayern"], choices: ["Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"], diff: 2 }
    ],
    200: [
      { clue: "Erling Haaland scored 36 Premier League goals in his debut season 2022-23 — a single-season record. Which club does he play for?", answer: "Manchester City", accept: ["manchester city", "man city"], choices: ["Arsenal", "Liverpool", "Manchester United"], diff: 1 },
      { clue: "Gerd Müller, 'Der Bomber,' scored 68 international goals for which country?", answer: "Germany", accept: ["germany", "west germany"], choices: ["Austria", "Netherlands", "Italy"], diff: 3 },
      { clue: "Eusébio was the top scorer at the 1966 World Cup with 9 goals. He played for which country?", answer: "Portugal", accept: ["portugal"], choices: ["Spain", "Brazil", "Italy"], diff: 3 },
      { clue: "Ferenc Puskás scored 84 international goals, a record for a European player for many decades. Which country did he originally represent?", answer: "Hungary", accept: ["hungary", "hungarian"], choices: ["Romania", "Czechoslovakia", "Austria"], diff: 4 }
    ],
    300: [
      { clue: "Cristiano Ronaldo has scored over 130 international goals. Which Saudi Arabian club did he join in 2023?", answer: "Al Nassr", accept: ["al nassr", "al-nassr"], choices: ["Al Hilal", "Al Ahli", "Al Ittihad"], diff: 2 },
      { clue: "Ronaldo Nazario ('R9') won two World Cups and is considered one of the greatest strikers ever. Which two years did Brazil win those World Cups?", answer: "1994 and 2002", accept: ["1994 and 2002", "1994 2002", "94 and 02"], choices: ["1994 and 1998", "1998 and 2002", "1990 and 2002"], diff: 3 },
      { clue: "Robert Lewandowski is the all-time leading scorer for which national team?", answer: "Poland", accept: ["poland", "polish"], choices: ["Czech Republic", "Slovakia", "Hungary"], diff: 2 },
      { clue: "Messi won his 8th Ballon d'Or in 2023. In which years did he win his first four Ballon d'Or awards consecutively?", answer: "2009, 2010, 2011, 2012", accept: ["2009 2010 2011 2012", "2009, 2010, 2011, 2012", "09 10 11 12"], choices: ["2008, 2009, 2010, 2011", "2010, 2011, 2012, 2013", "2009, 2011, 2013, 2015"], diff: 3 }
    ],
    400: [
      { clue: "Erling Haaland's father Alfie also played professional football. What position does Erling play?", answer: "Striker", accept: ["striker", "forward", "centre forward", "center forward"], choices: ["Midfielder", "Defender", "Goalkeeper"], diff: 1 },
      { clue: "Miroslav Klose scored 16 World Cup goals for Germany. At which World Cup did he score his record-breaking 16th goal?", answer: "2014", accept: ["2014", "twenty fourteen", "brazil 2014"], choices: ["2006", "2010", "2002"], diff: 2 },
      { clue: "Cristiano Ronaldo scored how many Champions League goals — an all-time record?", answer: "140+", accept: ["140", "over 140", "more than 140", "140 plus"], choices: ["120+", "100+", "160+"], diff: 3 },
      { clue: "Lionel Messi joined Inter Miami in which year, bringing MLS unprecedented global attention?", answer: "2023", accept: ["2023", "twenty twenty-three"], choices: ["2022", "2024", "2021"], diff: 2 }
    ]
  },
  2: { // RECORDS & FIRSTS
    100: [
      { clue: "Which club has won the most UEFA Champions League titles with 15 as of 2024?", answer: "Real Madrid", accept: ["real madrid", "madrid"], choices: ["AC Milan", "Bayern Munich", "Barcelona"], diff: 1 },
      { clue: "Neymar's 2017 transfer from Barcelona to PSG set the world record transfer fee at what price?", answer: "€222 million", accept: ["222 million", "€222 million", "222m", "222"], choices: ["€198 million", "€180 million", "€250 million"], diff: 2 },
      { clue: "The USA won the 2015 Women's World Cup final 5-2 against Japan. Carli Lloyd scored a hat trick in how many minutes?", answer: "16 minutes", accept: ["16 minutes", "16", "first 16 minutes"], choices: ["25 minutes", "30 minutes", "12 minutes"], diff: 3 },
      { clue: "Arsenal went an entire Premier League season unbeaten in 2003-04, earning the nickname 'The Invincibles.' How many games did they play unbeaten?", answer: "38", accept: ["38", "thirty-eight"], choices: ["34", "42", "36"], diff: 2 }
    ],
    200: [
      { clue: "Alan Shearer holds the record for most Premier League goals. How many did he score?", answer: "260", accept: ["260", "two hundred sixty"], choices: ["240", "280", "220"], diff: 2 },
      { clue: "Sadio Mané scored the fastest hat trick in Premier League history in 2015 for Southampton in how many minutes and seconds?", answer: "2 minutes 56 seconds", accept: ["2 minutes 56 seconds", "2:56", "under 3 minutes", "2 mins 56 secs"], choices: ["3 minutes 12 seconds", "4 minutes 22 seconds", "5 minutes"], diff: 3 },
      { clue: "Real Madrid won their 15th Champions League title in which year?", answer: "2024", accept: ["2024", "twenty twenty-four"], choices: ["2022", "2023", "2021"], diff: 2 },
      { clue: "Pelé was 17 years old when he won his first World Cup in 1958. Name the country Brazil beat in that World Cup final.", answer: "Sweden", accept: ["sweden"], choices: ["France", "West Germany", "Argentina"], diff: 3 }
    ],
    300: [
      { clue: "Brazil has won 5 World Cups. What makes Brazil's World Cup record unique among all nations?", answer: "Only nation to qualify for every World Cup", accept: ["qualified for every world cup", "never missed a world cup", "only country in every world cup", "participated in every world cup"], choices: ["Won most consecutive World Cups", "Scored most goals in history", "Never been eliminated in group stage"], diff: 2 },
      { clue: "The very first FIFA World Cup was held in Uruguay in 1930. How many teams participated in that inaugural tournament?", answer: "13", accept: ["13", "thirteen"], choices: ["16", "8", "12"], diff: 3 },
      { clue: "Manchester United holds the record for most English league titles. How many have they won?", answer: "20", accept: ["20", "twenty"], choices: ["18", "19", "21"], diff: 2 },
      { clue: "Inter Milan won the treble (Serie A, Coppa Italia, Champions League) in 2009-10. Which legendary manager led them?", answer: "José Mourinho", accept: ["jose mourinho", "mourinho", "josé mourinho"], choices: ["Carlo Ancelotti", "Pep Guardiola", "Antonio Conte"], diff: 2 }
    ],
    400: [
      { clue: "How many Champions League titles did Real Madrid win between 1956 and 2024 total?", answer: "15", accept: ["15", "fifteen"], choices: ["12", "14", "13"], diff: 1 },
      { clue: "Sir Alex Ferguson managed Manchester United from 1986 to 2013. How many Premier League titles did he win?", answer: "13", accept: ["13", "thirteen"], choices: ["11", "15", "12"], diff: 2 },
      { clue: "Arsenal's 'Invincibles' season in 2003-04 saw them go unbeaten. How many of their 38 games did they win (vs draw)?", answer: "26 wins", accept: ["26", "26 wins", "twenty-six"], choices: ["30 wins", "22 wins", "28 wins"], diff: 3 },
      { clue: "Ajax Amsterdam won 4 consecutive European Cups with Johan Cruyff in the early 1970s. In which years did they win consecutively?", answer: "1971, 1972, 1973", accept: ["1971 1972 1973", "1971, 1972, 1973", "71 72 73"], choices: ["1970, 1971, 1972", "1972, 1973, 1974", "1969, 1970, 1971"], diff: 4 }
    ]
  },
  3: { // SOCCER LINGO
    100: [
      { clue: "Scoring three goals in a single match is called a what?", answer: "Hat trick", accept: ["hat trick", "hat-trick"], choices: ["Triple", "Three-peat", "Treble"], diff: 1 },
      { clue: "When a defender accidentally kicks the ball into their own net, it's called an what?", answer: "Own goal", accept: ["own goal", "og"], choices: ["Penalty", "Foul goal", "Error goal"], diff: 1 },
      { clue: "When you kick the ball through an opponent's legs, it's called a what?", answer: "Nutmeg", accept: ["nutmeg", "meg"], choices: ["Tunnel", "Slot", "Peg"], diff: 2 },
      { clue: "What does 'parking the bus' mean in soccer tactics?", answer: "Putting all players behind the ball to defend", accept: ["putting all players behind the ball", "defensive tactic", "defending with all players", "packing the defense"], choices: ["Playing with 11 attackers", "Time-wasting near the corner flag", "Pressing high up the pitch"], diff: 2 }
    ],
    200: [
      { clue: "When a goalkeeper does not concede a single goal in a match, it is called a what?", answer: "Clean sheet", accept: ["clean sheet", "shutout"], choices: ["Blank slate", "Zero game", "Perfect defense"], diff: 1 },
      { clue: "The VAR system in soccer stands for what?", answer: "Video Assistant Referee", accept: ["video assistant referee", "var", "video assistant review"], choices: ["Virtual Athletic Review", "Video Action Replay", "Verified Automatic Ruling"], diff: 2 },
      { clue: "Scoring two goals in a single match is called a what?", answer: "Brace", accept: ["brace"], choices: ["Double", "Duo", "Twin strike"], diff: 3 },
      { clue: "In a two-legged cup tie, the 'aggregate' score is what?", answer: "Combined total score over both matches", accept: ["combined total score", "total goals over both legs", "sum of both games", "total from both matches"], choices: ["The score in the second leg only", "The score by the home team only", "The score after extra time"], diff: 2 }
    ],
    300: [
      { clue: "When a player is in an offside position, they must be closer to the opponent's goal than both the ball and who else?", answer: "The second-to-last defender", accept: ["second to last defender", "second-to-last defender", "the last outfield defender", "second defender"], choices: ["The goalkeeper", "The last two defenders", "The halfway line"], diff: 2 },
      { clue: "A match between two local rival clubs is called a what?", answer: "Derby", accept: ["derby", "local derby"], choices: ["Showdown", "Grudge match", "Clasico"], diff: 2 },
      { clue: "When a match is tied after 90 minutes in a knockout competition, what happens next?", answer: "Extra time", accept: ["extra time", "overtime"], choices: ["Penalty shootout immediately", "Replay the game", "Away goals rule"], diff: 3 },
      { clue: "An 'overhead kick' or 'bicycle kick' describes what type of acrobatic shot?", answer: "Kicking the ball backwards over your own head while airborne", accept: ["kicking backwards over head", "overhead kick", "bicycle kick", "kicking ball over own head"], choices: ["Spinning shot hit with the heel", "A diving header", "A volley struck with the chest"], diff: 1 }
    ],
    400: [
      { clue: "A 'red card' in soccer results in what?", answer: "The player is ejected from the game", accept: ["ejection", "player is sent off", "dismissed from the game", "removed from the game"], choices: ["A 10-minute suspension", "A penalty kick for the other team", "Loss of a substitute"], diff: 1 },
      { clue: "What is the 'offside trap' in soccer?", answer: "Defenders step up to catch attackers in an offside position", accept: ["defenders step up to catch attackers offside", "defensive tactic to trigger offside", "stepping up to put attackers offside"], choices: ["Trapping the ball before a goal kick", "A corner kick taken quickly", "Playing with a low defensive line"], diff: 2 },
      { clue: "'Tiki-taka' is a style of play known for short passing and ball possession. Which club and manager made it world-famous?", answer: "Barcelona under Pep Guardiola", accept: ["barcelona", "barca", "pep guardiola", "barcelona and pep guardiola"], choices: ["Real Madrid under Zinedine Zidane", "Liverpool under Jurgen Klopp", "Manchester City under Roberto Mancini"], diff: 3 },
      { clue: "What does 'pressing high' mean in modern soccer tactics?", answer: "Defending aggressively close to the opponent's goal to win the ball back quickly", accept: ["pressing close to opponent's goal", "high defensive line", "attacking press", "winning ball high up the pitch"], choices: ["Putting many players in the penalty area", "Playing long balls over the defense", "Sitting deep and counter-attacking"], diff: 3 }
    ]
  },
  4: { // MODERN ERA
    100: [
      { clue: "Manchester City won the Premier League, FA Cup, and Champions League in 2022-23, completing what achievement?", answer: "The Treble", accept: ["the treble", "treble"], choices: ["The Double", "The Grand Slam", "The Quadruple"], diff: 1 },
      { clue: "Kylian Mbappé signed for Real Madrid in 2024, leaving PSG on a free transfer. Which country does he represent?", answer: "France", accept: ["france", "french"], choices: ["Belgium", "Ivory Coast", "Senegal"], diff: 2 },
      { clue: "Lionel Messi joined Inter Miami in MLS in 2023. In which country is Miami located, and therefore which country's league did Messi join?", answer: "USA / MLS", accept: ["usa", "united states", "mls", "major league soccer"], choices: ["Mexico", "Canada", "Brazil"], diff: 1 },
      { clue: "Vinicius Jr. won the Ballon d'Or in 2024 and the Champions League with Real Madrid. What nationality is Vinicius Jr.?", answer: "Brazilian", accept: ["brazilian", "brazil"], choices: ["Spanish", "Portuguese", "Colombian"], diff: 2 }
    ],
    200: [
      { clue: "Pep Guardiola has managed Manchester City since which year?", answer: "2016", accept: ["2016", "twenty sixteen"], choices: ["2014", "2018", "2015"], diff: 1 },
      { clue: "Spain beat England 1-0 in the 2023 Women's World Cup final. Where was the final held?", answer: "Sydney", accept: ["sydney", "australia", "sydney australia"], choices: ["Auckland", "Melbourne", "Brisbane"], diff: 2 },
      { clue: "Cristiano Ronaldo became the first man to score 130+ international goals. He surpassed whose previous record?", answer: "Ali Daei", accept: ["ali daei", "daei"], choices: ["Pelé", "Puskas", "Miroslav Klose"], diff: 3 },
      { clue: "Erling Haaland won the Champions League in 2022-23 with Manchester City. How many Premier League goals did he score in that same debut season?", answer: "36", accept: ["36", "thirty-six"], choices: ["32", "28", "40"], diff: 4 }
    ],
    300: [
      { clue: "Manchester City won four consecutive Premier League titles from which seasons?", answer: "2021-22 through 2024-25", accept: ["2021-22 through 2024-25", "2022 to 2025", "21/22 to 24/25", "four seasons 2022 2023 2024 2025"], choices: ["2019-20 through 2022-23", "2018-19 through 2021-22", "2020-21 through 2023-24"], diff: 1 },
      { clue: "Jude Bellingham plays for Real Madrid and became famous for scoring clutch Champions League goals in the 2023-24 season. What country does he play for?", answer: "England", accept: ["england", "english"], choices: ["Germany", "France", "Spain"], diff: 2 },
      { clue: "Sam Kerr is the all-time top scorer for which national women's team?", answer: "Australia", accept: ["australia", "australian", "matildas"], choices: ["England", "New Zealand", "Canada"], diff: 3 },
      { clue: "Ada Hegerberg was the first-ever winner of the Women's Ballon d'Or in 2018. She plays club football for which French club?", answer: "Lyon", accept: ["lyon", "olympique lyonnais", "ol"], choices: ["Paris Saint-Germain", "Marseille", "Monaco"], diff: 4 }
    ],
    400: [
      { clue: "Kylian Mbappé scored a hat trick in the 2022 World Cup final but France still lost. How many goals did Argentina score in that final including extra time?", answer: "3", accept: ["3", "three"], choices: ["4", "2", "5"], diff: 1 },
      { clue: "Cristiano Ronaldo joined Al Nassr in Saudi Arabia in January of which year?", answer: "2023", accept: ["2023", "january 2023"], choices: ["2022", "2024", "2021"], diff: 2 },
      { clue: "Messi won the 2022 World Cup — described as the last piece of his legacy puzzle. How old was he when he won it?", answer: "35", accept: ["35", "thirty-five"], choices: ["33", "36", "34"], diff: 3 },
      { clue: "Liverpool won their first English league title in 30 years in which season under manager Jurgen Klopp?", answer: "2019-20", accept: ["2019-20", "2020", "2019/20"], choices: ["2018-19", "2020-21", "2017-18"], diff: 4 }
    ]
  },
  5: { // CLUB FOOTBALL
    100: [
      { clue: "Which English club holds the record for most Premier League titles with 20?", answer: "Manchester United", accept: ["manchester united", "man united", "man utd", "utd"], choices: ["Liverpool", "Arsenal", "Manchester City"], diff: 1 },
      { clue: "FC Barcelona's iconic blue and red colors give the club what nickname?", answer: "Blaugrana", accept: ["blaugrana", "barca", "the blaugrana"], choices: ["Los Blancos", "Die Roten", "The Blues"], diff: 2 },
      { clue: "Sir Alex Ferguson managed Manchester United from 1986 to 2013. How many of United's 20 league titles did he win?", answer: "13", accept: ["13", "thirteen"], choices: ["11", "15", "10"], diff: 3 },
      { clue: "Bayern Munich won the 2020 Champions League in a COVID bubble final held in which city?", answer: "Lisbon", accept: ["lisbon", "lisbon portugal", "portugal"], choices: ["Budapest", "Frankfurt", "Munich"], diff: 4 }
    ],
    200: [
      { clue: "Real Madrid is based in which city?", answer: "Madrid", accept: ["madrid", "spain"], choices: ["Barcelona", "Seville", "Valencia"], diff: 1 },
      { clue: "Liverpool's famous European winning motto is 'You'll Never Walk Alone.' They won their 6th Champions League title in which year?", answer: "2019", accept: ["2019", "twenty nineteen"], choices: ["2018", "2020", "2017"], diff: 2 },
      { clue: "Arsenal's unbeaten 2003-04 Premier League season earned them the 'Invincibles' nickname. Who was their manager?", answer: "Arsène Wenger", accept: ["arsene wenger", "wenger", "arsène wenger"], choices: ["George Graham", "Bruce Rioch", "Unai Emery"], diff: 3 },
      { clue: "Ajax Amsterdam won three consecutive European Cups in the early 1970s with Johan Cruyff. In which Dutch city are they based?", answer: "Amsterdam", accept: ["amsterdam", "amsterdam netherlands"], choices: ["Rotterdam", "The Hague", "Utrecht"], diff: 4 }
    ],
    300: [
      { clue: "Liverpool won the Premier League title in 2019-20 — their first English league title in how many years?", answer: "30 years", accept: ["30 years", "thirty years", "30"], choices: ["25 years", "20 years", "35 years"], diff: 1 },
      { clue: "Pep Guardiola's Barcelona teams were famous for their 'tiki-taka' style. Which competition did they dominate in the 2008-09 treble-winning season?", answer: "Champions League, La Liga, Copa del Rey", accept: ["champions league la liga copa del rey", "champions league", "la liga and copa del rey and champions league", "treble"], choices: ["Premier League, FA Cup, League Cup", "Serie A, Coppa Italia, Champions League", "Bundesliga, DFB-Pokal, Champions League"], diff: 2 },
      { clue: "Inter Milan's treble-winning 2009-10 side was managed by José Mourinho. What was the Champions League final opponent they defeated?", answer: "Bayern Munich", accept: ["bayern munich", "bayern"], choices: ["Real Madrid", "Barcelona", "Borussia Dortmund"], diff: 3 },
      { clue: "Manchester United's first Champions League/European Cup win under Sir Alex Ferguson was in which year?", answer: "1999", accept: ["1999", "ninety-nine"], choices: ["1996", "2003", "2001"], diff: 4 }
    ],
    400: [
      { clue: "Which city is FC Barcelona based in?", answer: "Barcelona", accept: ["barcelona", "spain"], choices: ["Madrid", "Seville", "Valencia"], diff: 1 },
      { clue: "Real Madrid's home stadium is called what?", answer: "Santiago Bernabéu", accept: ["santiago bernabeu", "bernabeu", "the bernabeu"], choices: ["Camp Nou", "Wanda Metropolitano", "Estadio Riazor"], diff: 2 },
      { clue: "Liverpool has won how many total European Cup / Champions League titles as of 2024?", answer: "6", accept: ["6", "six"], choices: ["5", "7", "4"], diff: 3 },
      { clue: "The 'Invincibles' Arsenal squad of 2003-04 finished with a record of 26 wins and 12 draws. How many games did they LOSE?", answer: "0", accept: ["0", "zero", "none"], choices: ["1", "2", "3"], diff: 4 }
    ]
  }
};

const SOCCER_FINALS = [
  { category: "FIFA WORLD CUP", clue: "The 2022 World Cup final between Argentina and France ended 3-3 after extra time. Who scored a hat trick for France in a losing effort?", answer: "Kylian Mbappé", accept: ["kylian mbappe", "mbappe", "mbappé"] },
  { category: "GOAL SCORING LEGENDS", clue: "Lionel Messi has won the Ballon d'Or 8 times. In which year did he win his very first Ballon d'Or?", answer: "2009", accept: ["2009", "twenty oh nine"] },
  { category: "CLUB FOOTBALL", clue: "Arsenal's unbeaten 2003-04 season saw them go 38 games without a loss, earning the nickname 'The Invincibles.' Who was their captain that season?", answer: "Patrick Vieira", accept: ["patrick vieira", "vieira"] },
  { category: "MODERN ERA", clue: "Manchester City completed the treble in 2022-23 under Pep Guardiola. Which Norwegian striker scored 36 Premier League goals that season?", answer: "Erling Haaland", accept: ["erling haaland", "haaland"] }
];

const SOCCER_EXTRA = {

  // ─────────────────────────────────────────────
  // 0: FIFA WORLD CUP
  // ─────────────────────────────────────────────
  0: {
    100: [
      { clue: "This Brazilian legend is the only player in history to win three FIFA World Cups, in 1958, 1962, and 1970.", answer: "Pelé", accept: ["pele", "pelé", "edson arantes"], choices: ["Diego Maradona", "Lionel Messi", "Cristiano Ronaldo"], diff: 1 },
      {
        clue: "Diego Maradona's infamous 1986 World Cup goal vs England, where he punched the ball into the net, is known by this heavenly nickname.",
        answer: "Hand of God",
        accept: ["hand of god", "the hand of god"],
        choices: ["Touch of Destiny", "Fist of Fury", "Divine Strike"],
        diff: 1
      },
      {
        clue: "In which city was the iconic 1986 World Cup quarterfinal between Argentina and England played?",
        answer: "Mexico City",
        accept: ["mexico city"],
        choices: ["Buenos Aires", "Guadalajara", "Monterrey"],
        diff: 1
      },
      {
        clue: "Andrés Iniesta scored the winning goal in the 2010 World Cup final against this country.",
        answer: "Netherlands",
        accept: ["netherlands", "the netherlands", "holland"],
        choices: ["Germany", "Brazil", "Portugal"],
        diff: 1
      },
      {
        clue: "Morocco made history at the 2022 World Cup by becoming the first African nation to reach this stage of the tournament.",
        answer: "Semifinals",
        accept: ["semifinals", "semi-finals", "semi finals"],
        choices: ["Quarterfinals", "Round of 16", "Final"],
        diff: 1
      },
      {
        clue: "Kylian Mbappé scored a hat trick in the 2022 World Cup final, becoming only the second man to do so after England's Geoff Hurst. How many goals did France score in that final?",
        answer: "3",
        accept: ["3", "three"],
        choices: ["2", "4", "1"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Four minutes after the Hand of God goal, Maradona scored what FIFA fans later voted the 'Goal of the Century.' How many England players did he dribble past before scoring?",
        answer: "5",
        accept: ["5", "five"],
        choices: ["4", "6", "3"],
        diff: 2
      },
      {
        clue: "Senegal caused one of the World Cup's biggest upsets in 2002 by beating this defending champion in the tournament opener.",
        answer: "France",
        accept: ["france"],
        choices: ["Brazil", "Italy", "Argentina"],
        diff: 2
      },
      {
        clue: "The Copa América was founded in 1916, making it the oldest international football tournament. Which country won the inaugural edition?",
        answer: "Uruguay",
        accept: ["uruguay"],
        choices: ["Argentina", "Brazil", "Chile"],
        diff: 2
      },
      {
        clue: "At the 2022 World Cup, Mbappé's hat trick in the final still wasn't enough; France lost in penalties. Which player's miss in the 2006 World Cup final cost France the trophy?",
        answer: "David Trezeguet",
        accept: ["trezeguet", "david trezeguet"],
        choices: ["Thierry Henry", "Zinedine Zidane", "Patrick Vieira"],
        diff: 2
      },
      {
        clue: "Italy held the record for the longest unbeaten run in international football with 37 games, a streak that ended in a 2021 UEFA Nations League semi-final loss to which country?",
        answer: "Spain",
        accept: ["spain"],
        choices: ["France", "Belgium", "Germany"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "The 1986 World Cup 'Goal of the Century' saw Maradona dribble past Peter Beardsley, Peter Reid, Terry Butcher, Terry Fenwick, and then goalkeeper Peter Shilton. In what minute did he score it?",
        answer: "55th",
        accept: ["55", "55th", "55th minute"],
        choices: ["51st", "62nd", "48th"],
        diff: 3
      },
      {
        clue: "Iniesta's 2010 World Cup final winner came in the 116th minute from a pass by which Barcelona teammate?",
        answer: "Cesc Fàbregas",
        accept: ["cesc fabregas", "fabregas", "cesc fàbregas"],
        choices: ["Xavi", "David Villa", "Sergio Busquets"],
        diff: 3
      },
      {
        clue: "Zinedine Zidane headbutted Marco Materazzi in the 110th minute of the 2006 World Cup final. Which team did Zidane play for in that final?",
        answer: "France",
        accept: ["france"],
        choices: ["Italy", "Portugal", "Spain"],
        diff: 3
      },
      {
        clue: "At the 2022 World Cup, Morocco beat Spain and Portugal en route to the semifinals. Which player headed in their winning quarterfinal goal vs Portugal?",
        answer: "Youssef En-Nesyri",
        accept: ["en-nesyri", "youssef en-nesyri", "en nesyri"],
        choices: ["Hakim Ziyech", "Achraf Hakimi", "Sofiane Boufal"],
        diff: 3
      },
      {
        clue: "South Korea famously knocked out defending champion Germany in the 2018 World Cup group stage. Which player scored the clinching second goal in injury time?",
        answer: "Son Heung-min",
        accept: ["son heung-min", "son heung min", "son"],
        choices: ["Kim Young-Gwon", "Hwang Hee-Chan", "Lee Seung-Woo"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "In the 1986 World Cup quarterfinal, Argentina beat England 2–1. The referee who allowed the Hand of God goal to stand was Ali Bin Nasser from which country?",
        answer: "Tunisia",
        accept: ["tunisia"],
        choices: ["Morocco", "Algeria", "Egypt"],
        diff: 4
      },
      {
        clue: "Cameroon's famous 1990 World Cup upset of Argentina ended 1–0. The goalscorer Francois Omam-Biyik was later joined by this compatriot who became Africa's first World Cup quarter-final top scorer.",
        answer: "Roger Milla",
        accept: ["roger milla", "milla"],
        choices: ["Thomas Nkono", "Patrick Mboma", "Samuel Eto'o"],
        diff: 4
      },
      {
        clue: "The 2015 FIFA corruption scandal led to the resignation of FIFA president Sepp Blatter. Which American CONCACAF official became a key FBI informant, secretly recording fellow officials?",
        answer: "Chuck Blazer",
        accept: ["chuck blazer", "blazer"],
        choices: ["Jack Warner", "Jeffrey Webb", "Julio Grondona"],
        diff: 4
      },
      {
        clue: "Italy's record 37-game unbeaten run began after they failed to qualify for which World Cup?",
        answer: "2018",
        accept: ["2018", "2018 world cup"],
        choices: ["2014", "2022", "2010"],
        diff: 4
      },
      {
        clue: "In the inaugural 1916 Copa América, which organization was founded on July 9 during the tournament?",
        answer: "CONMEBOL",
        accept: ["conmebol"],
        choices: ["FIFA", "CONCACAF", "CAF"],
        diff: 4
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 1: GOAL SCORING LEGENDS
  // ─────────────────────────────────────────────
  1: {
    100: [
      {
        clue: "Thierry Henry is Arsenal's all-time top scorer with 228 goals. He broke the previous record held by which Arsenal legend?",
        answer: "Ian Wright",
        accept: ["ian wright", "wright"],
        choices: ["Dennis Bergkamp", "Cliff Bastin", "Ted Drake"],
        diff: 1
      },
      {
        clue: "Harry Kane surpassed Wayne Rooney to become England's all-time leading scorer. What was Rooney's record total that Kane broke?",
        answer: "53",
        accept: ["53", "fifty-three"],
        choices: ["51", "55", "49"],
        diff: 1
      },
      {
        clue: "Mohamed Salah set the Premier League record for goals in a 38-game season in 2017–18. How many goals did he score?",
        answer: "32",
        accept: ["32", "thirty-two"],
        choices: ["28", "34", "30"],
        diff: 1
      },
      {
        clue: "Kylian Mbappé became only the second player to score a hat trick in a World Cup final. How many goals did he score in the 2022 final?",
        answer: "3",
        accept: ["3", "three"],
        choices: ["2", "4", "1"],
        diff: 1
      },
      {
        clue: "Megan Rapinoe won both the Golden Boot and Golden Ball at the 2019 Women's World Cup. How many goals did she score in the tournament?",
        answer: "6",
        accept: ["6", "six"],
        choices: ["5", "7", "4"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Thierry Henry scored 175 Premier League goals for Arsenal in 258 appearances. How many total goals did he score for the club in all competitions?",
        answer: "228",
        accept: ["228"],
        choices: ["215", "236", "199"],
        diff: 2
      },
      {
        clue: "Harry Kane broke Rooney's England record in a 2023 Euro qualifier against which country?",
        answer: "Italy",
        accept: ["italy"],
        choices: ["Germany", "France", "Spain"],
        diff: 2
      },
      {
        clue: "Ronaldinho won the Ballon d'Or only once during his peak years at Barcelona. In which year did he win it?",
        answer: "2005",
        accept: ["2005"],
        choices: ["2004", "2006", "2003"],
        diff: 2
      },
      {
        clue: "Cristiano Ronaldo holds the record for most UEFA Champions League goals ever. How many has he scored in the competition?",
        answer: "140",
        accept: ["140"],
        choices: ["128", "135", "147"],
        diff: 2
      },
      {
        clue: "Mohamed Salah's 32-goal Premier League record in 2017–18 broke the previous record for the 38-game era, which had been held jointly by Luis Suárez, Cristiano Ronaldo, and which other player?",
        answer: "Alan Shearer",
        accept: ["alan shearer", "shearer"],
        choices: ["Thierry Henry", "Andrew Cole", "Didier Drogba"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Son Heung-min became the first Asian player to win the Premier League Golden Boot in 2021–22. He shared it with Mohamed Salah; both scored how many goals?",
        answer: "23",
        accept: ["23", "twenty-three"],
        choices: ["21", "25", "19"],
        diff: 3
      },
      {
        clue: "Robert Lewandowski set a record in 2026 by scoring against 41 different opponents in the Champions League, breaking a record previously held by which player?",
        answer: "Lionel Messi",
        accept: ["messi", "lionel messi"],
        choices: ["Cristiano Ronaldo", "Karim Benzema", "Raúl"],
        diff: 3
      },
      {
        clue: "Ronaldinho edged out Frank Lampard and Steven Gerrard to win the 2005 Ballon d'Or. He joined Barcelona from which club in 2003?",
        answer: "Paris Saint-Germain",
        accept: ["paris saint-germain", "psg", "paris saint germain"],
        choices: ["Atletico Madrid", "Juventus", "Inter Milan"],
        diff: 3
      },
      {
        clue: "Thierry Henry broke Ian Wright's Arsenal goalscoring record in which European competition tie against Sparta Prague in October 2005?",
        answer: "UEFA Champions League",
        accept: ["champions league", "uefa champions league"],
        choices: ["UEFA Cup", "Europa League", "UEFA Super Cup"],
        diff: 3
      },
      {
        clue: "Mbappé's hat trick in the 2022 World Cup final included two penalties. His third goal came in which minute of extra time?",
        answer: "118th",
        accept: ["118", "118th", "118th minute"],
        choices: ["115th", "120th", "112th"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Harry Kane scored 54 goals in only 81 England appearances to break Rooney's record. What fraction of Kane's England goals at the time of the record were penalties?",
        answer: "18",
        accept: ["18", "eighteen"],
        choices: ["12", "14", "21"],
        diff: 4
      },
      {
        clue: "Robert Lewandowski scored 15 goals in the 2019–20 Champions League season, finishing as top scorer. He also scored four goals in 16 second-half minutes in one group match against which opponent?",
        answer: "Red Star Belgrade",
        accept: ["red star belgrade", "red star", "crvena zvezda"],
        choices: ["Salzburg", "Lokomotiv Moscow", "Olympiacos"],
        diff: 4
      },
      {
        clue: "Megan Rapinoe won the 2019 Women's World Cup Golden Boot over Alex Morgan despite tying on goals, due to which tiebreaker criteria?",
        answer: "Fewer minutes played",
        accept: ["fewer minutes", "fewer minutes played", "minutes played"],
        choices: ["More assists", "Older age", "Higher-scoring goals"],
        diff: 4
      },
      {
        clue: "Ronaldinho's peak at Barcelona saw him win La Liga and the Champions League. In which year did Barcelona claim the UCL under Frank Rijkaard, with Ronaldinho instrumental?",
        answer: "2006",
        accept: ["2006"],
        choices: ["2005", "2007", "2009"],
        diff: 4
      },
      {
        clue: "Cristiano Ronaldo set the record for most goals in a single Champions League season with 17 goals. In which season did he achieve this?",
        answer: "2013-14",
        accept: ["2013-14", "2013/14", "2013–14"],
        choices: ["2015-16", "2011-12", "2016-17"],
        diff: 4
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 2: RECORDS & FIRSTS
  // ─────────────────────────────────────────────
  2: {
    100: [
      {
        clue: "Spain won a record fourth UEFA European Championship title in 2024, beating England in the final. Germany had previously shared the record with how many titles?",
        answer: "3",
        accept: ["3", "three"],
        choices: ["2", "4", "5"],
        diff: 1
      },
      {
        clue: "Egypt holds the record for the most Africa Cup of Nations titles. How many times have they won the tournament?",
        answer: "7",
        accept: ["7", "seven"],
        choices: ["5", "6", "8"],
        diff: 1
      },
      {
        clue: "The USA Women's National Team has won the most Women's World Cup titles with 4. Which year was their most recent victory?",
        answer: "2019",
        accept: ["2019"],
        choices: ["2015", "2023", "2011"],
        diff: 1
      },
      {
        clue: "The Copa América was first held in 1916, making it the world's oldest international football tournament. It was originally called the South American Football Championship before being renamed in which decade?",
        answer: "1970s",
        accept: ["1970s", "1975"],
        choices: ["1960s", "1980s", "1950s"],
        diff: 1
      },
      {
        clue: "Kevin De Bruyne set or equalled the record for most assists in a single Premier League season. How many did he record in 2019–20?",
        answer: "20",
        accept: ["20", "twenty"],
        choices: ["16", "18", "22"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Italy's record 37-match unbeaten international run began in October 2018 after which dramatic failure?",
        answer: "Failing to qualify for the 2018 World Cup",
        accept: ["failing to qualify for the world cup", "missing the 2018 world cup", "not qualifying for 2018 world cup"],
        choices: ["Losing the Euro 2016 final", "Relegation in Nations League", "First round exit at Euro 2016"],
        diff: 2
      },
      {
        clue: "Spain's record fourth European Championship title came in 2024 at a final hosted in Berlin. They beat England with what score?",
        answer: "2-1",
        accept: ["2-1", "2 to 1"],
        choices: ["1-0", "3-1", "2-0"],
        diff: 2
      },
      {
        clue: "Kevin De Bruyne's 20-assist Premier League record is shared with which two other players?",
        answer: "Thierry Henry and Bruno Fernandes",
        accept: ["thierry henry and bruno fernandes", "henry and fernandes", "bruno fernandes and thierry henry"],
        choices: ["Cesc Fabregas and Ryan Giggs", "Dennis Bergkamp and Frank Lampard", "Eric Cantona and Paul Scholes"],
        diff: 2
      },
      {
        clue: "The USA's first Women's World Cup win in 1991 saw Michelle Akers score two goals in the final against which country?",
        answer: "Norway",
        accept: ["norway"],
        choices: ["Sweden", "Germany", "China"],
        diff: 2
      },
      {
        clue: "Toni Kroos retired in 2024 with a record number of Champions League titles. How many did he win in total?",
        answer: "6",
        accept: ["6", "six"],
        choices: ["5", "7", "4"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Sergio Ramos holds the joint record for most red cards in Champions League history alongside Edgar Davids and Zlatan Ibrahimovic. How many red cards did each receive?",
        answer: "4",
        accept: ["4", "four"],
        choices: ["3", "5", "6"],
        diff: 3
      },
      {
        clue: "UEFA introduced Financial Fair Play regulations which were first implemented in which season?",
        answer: "2011-12",
        accept: ["2011-12", "2011/12", "2011–12"],
        choices: ["2009-10", "2013-14", "2015-16"],
        diff: 3
      },
      {
        clue: "The 2024–25 Champions League expanded to how many clubs in its new league phase format, up from the previous 32?",
        answer: "36",
        accept: ["36", "thirty-six"],
        choices: ["32", "40", "48"],
        diff: 3
      },
      {
        clue: "Egypt's record 7 Africa Cup of Nations titles include three consecutive wins from 2006 to 2010. Which year did they win their first ever title?",
        answer: "1957",
        accept: ["1957"],
        choices: ["1962", "1970", "1952"],
        diff: 3
      },
      {
        clue: "In the new 2024–25 Champions League format, the top 8 teams in the league phase receive a bye to the round of 16. How many matches does each team play in the league phase?",
        answer: "8",
        accept: ["8", "eight"],
        choices: ["6", "10", "4"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Toni Kroos won 5 Champions League titles with Real Madrid and 1 with Bayern Munich, equalling a record set by which Spanish Real Madrid legend?",
        answer: "Paco Gento",
        accept: ["paco gento", "francisco gento", "gento"],
        choices: ["Alfredo Di Stefano", "Raúl", "Fernando Hierro"],
        diff: 4
      },
      {
        clue: "The 2015 FIFA corruption scandal resulted in 41 arrests. Seven officials were arrested at a hotel in Zürich just before the 65th FIFA Congress. What was the hotel's name?",
        answer: "Baur au Lac",
        accept: ["baur au lac"],
        choices: ["Hotel Schweizerhof", "Dolder Grand", "Marriott Zurich"],
        diff: 4
      },
      {
        clue: "Brazil's 1994 World Cup-winning squad achieved a 35-game unbeaten run from 1993 to 1996, a record later equalled by which nation's golden generation?",
        answer: "Spain",
        accept: ["spain"],
        choices: ["France", "Germany", "Argentina"],
        diff: 4
      },
      {
        clue: "The USA won the 2015 Women's World Cup beating Japan 5-2. Carli Lloyd scored a hat trick; her third goal came from the halfway line in the opening how many minutes?",
        answer: "16",
        accept: ["16", "sixteen"],
        choices: ["12", "20", "10"],
        diff: 4
      },
      {
        clue: "UEFA's new Champions League league phase from 2024-25 increased pre-knockout matches from 96 to how many?",
        answer: "144",
        accept: ["144"],
        choices: ["128", "160", "112"],
        diff: 4
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 3: SOCCER LINGO
  // ─────────────────────────────────────────────
  3: {
    100: [
      {
        clue: "In football, this term describes when a team intentionally passes back to their goalkeeper, who must use their feet rather than their hands to deal with it.",
        answer: "Back-pass",
        accept: ["back-pass", "back pass", "backpass"],
        choices: ["Square ball", "Clearance", "Drop ball"],
        diff: 1
      },
      {
        clue: "This term refers to the curved technique a player uses to strike the ball, making it bend through the air — often associated with David Beckham's deliveries.",
        answer: "Curl",
        accept: ["curl", "curling", "bend"],
        choices: ["Chip", "Lob", "Dink"],
        diff: 1
      },
      {
        clue: "When a goalkeeper dives to their left or right to stop a shot during a penalty shootout, this describes one successful stop from any of those kicks.",
        answer: "Save",
        accept: ["save", "penalty save"],
        choices: ["Block", "Clearance", "Punch"],
        diff: 1
      },
      {
        clue: "This term describes an uncontested set-piece where the ball is kicked from a stationary position after a foul outside the penalty area.",
        answer: "Free kick",
        accept: ["free kick", "freekick"],
        choices: ["Corner kick", "Goal kick", "Throw-in"],
        diff: 1
      },
      {
        clue: "A football player who can play in multiple positions across the pitch is often described by this adjective.",
        answer: "Versatile",
        accept: ["versatile"],
        choices: ["Technical", "Tactile", "Dominant"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "In football tactics, this term refers to a team's defensive shape when they do not have possession of the ball.",
        answer: "Defensive block",
        accept: ["defensive block", "defensive shape", "defensive structure"],
        choices: ["High press", "Counter-attack", "Zonal marking"],
        diff: 2
      },
      {
        clue: "This tactical term describes a pressing style where a team aggressively chases the ball immediately after losing possession, popularised by managers like Jürgen Klopp.",
        answer: "Gegenpressing",
        accept: ["gegenpressing", "gegенpressing", "counter-pressing"],
        choices: ["Tiki-taka", "Catenaccio", "Total football"],
        diff: 2
      },
      {
        clue: "In football, a 'false nine' is a striker who drops into midfield to receive the ball. Which Barcelona superstar was famous for playing this role under Pep Guardiola?",
        answer: "Lionel Messi",
        accept: ["messi", "lionel messi"],
        choices: ["Samuel Eto'o", "Thierry Henry", "Zlatan Ibrahimovic"],
        diff: 2
      },
      {
        clue: "This term describes the system where a team defends very deep in their own half, overloading defenders near the goal, sometimes nicknamed 'parking the bus' when taken to extremes.",
        answer: "Low block",
        accept: ["low block"],
        choices: ["High line", "Sweeper system", "Man marking"],
        diff: 2
      },
      {
        clue: "In football, 'Total Football' was a revolutionary tactical concept pioneered in the 1970s by which country?",
        answer: "Netherlands",
        accept: ["netherlands", "the netherlands", "holland"],
        choices: ["Brazil", "West Germany", "Italy"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "In football transfers, this term refers to the sum a club pays another club at regular intervals over the duration of a contract, rather than all at once.",
        answer: "Installments",
        accept: ["installments", "instalments", "payment installments"],
        choices: ["Buyout clause", "Solidarity payment", "Sell-on fee"],
        diff: 3
      },
      {
        clue: "This rule, introduced by UEFA, requires clubs competing in European competition to not spend more than they earn, aiming to prevent excessive financial losses.",
        answer: "Financial Fair Play",
        accept: ["financial fair play", "ffp"],
        choices: ["Salary cap", "Bosman ruling", "Transfer window regulations"],
        diff: 3
      },
      {
        clue: "In football, a 'regista' is an Italian tactical term for a player who controls the game from a deep-lying position. Which German midfielder was considered a modern master of this role?",
        answer: "Toni Kroos",
        accept: ["toni kroos", "kroos"],
        choices: ["Michael Ballack", "Bastian Schweinsteiger", "Sami Khedira"],
        diff: 3
      },
      {
        clue: "This term refers to the percentage of a future transfer fee that the selling club is entitled to receive when a player they sold is sold again.",
        answer: "Sell-on clause",
        accept: ["sell-on clause", "sell on clause", "sell-on fee"],
        choices: ["Buyout clause", "Option fee", "Release clause"],
        diff: 3
      },
      {
        clue: "In football, this term describes a ball played into space behind the defensive line for a teammate to run onto, often used to beat an offside trap.",
        answer: "Through ball",
        accept: ["through ball", "through pass"],
        choices: ["Square pass", "Lofted ball", "Dummy run"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "This Italian tactical defensive system, which translates to 'door bolt' in English, emphasises a very organised, disciplined defensive structure.",
        answer: "Catenaccio",
        accept: ["catenaccio"],
        choices: ["Libero", "Zona mista", "Calcio"],
        diff: 4
      },
      {
        clue: "In the 2024–25 Champions League format, teams placed 9th–24th in the league phase enter what round before the Round of 16?",
        answer: "Knockout phase play-offs",
        accept: ["knockout phase play-offs", "knockout play-offs", "playoff round"],
        choices: ["Round of 32", "Wild card round", "Qualification round"],
        diff: 4
      },
      {
        clue: "The tactical concept of 'pressing triggers' refers to specific game situations that prompt a team to press. Which manager is most credited with industrialising this concept at Borussia Dortmund?",
        answer: "Jürgen Klopp",
        accept: ["jurgen klopp", "jürgen klopp", "klopp"],
        choices: ["Pep Guardiola", "Marcelo Bielsa", "Ralf Rangnick"],
        diff: 4
      },
      {
        clue: "In financial terms, this FIFA policy ensures a portion of a large transfer fee is distributed to clubs involved in a player's development before age 23.",
        answer: "Solidarity mechanism",
        accept: ["solidarity mechanism", "solidarity payment"],
        choices: ["Training compensation", "Agent fee cap", "Club development grant"],
        diff: 4
      },
      {
        clue: "In football, a 'Panenka' penalty is a soft, chipped kick down the middle named after Czech player Antonín Panenka who first used it in a major final. Against which country did he score it?",
        answer: "West Germany",
        accept: ["west germany", "germany"],
        choices: ["Soviet Union", "Netherlands", "Yugoslavia"],
        diff: 4
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 4: MODERN ERA
  // ─────────────────────────────────────────────
  4: {
    100: [
      {
        clue: "Steven Gerrard's slip against Chelsea in April 2014 allowed Demba Ba to score and ultimately cost Liverpool the Premier League title. Which team won the league that year instead?",
        answer: "Manchester City",
        accept: ["manchester city", "man city"],
        choices: ["Chelsea", "Arsenal", "Tottenham"],
        diff: 1
      },
      {
        clue: "David Beckham joined Real Madrid from Manchester United in 2003 for a transfer fee of approximately how much?",
        answer: "£25 million",
        accept: ["£25 million", "25 million", "25m"],
        choices: ["£35 million", "£18 million", "£40 million"],
        diff: 1
      },
      {
        clue: "Megan Rapinoe scored a goal in the 2019 Women's World Cup final as USA beat the Netherlands. What was the final score?",
        answer: "2-0",
        accept: ["2-0", "2 to 0"],
        choices: ["3-0", "1-0", "2-1"],
        diff: 1
      },
      {
        clue: "Zinedine Zidane was sent off after headbutting Marco Materazzi in the 2006 World Cup final. In which minute did the incident occur?",
        answer: "110th",
        accept: ["110", "110th", "110th minute"],
        choices: ["102nd", "118th", "90th"],
        diff: 1
      },
      {
        clue: "Spain won their record 4th European Championship in 2024. Where was the final held?",
        answer: "Berlin",
        accept: ["berlin"],
        choices: ["Munich", "Frankfurt", "Hamburg"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "In the 2013–14 season, Liverpool led the Premier League by five points with three games to go before their title collapse. How many games did they fail to win that allowed Man City to overtake them?",
        answer: "2",
        accept: ["2", "two"],
        choices: ["1", "3", "4"],
        diff: 2
      },
      {
        clue: "Andrés Iniesta won the 2010 World Cup final for Spain. He scored in extra time after a pass from Cesc Fàbregas. In what minute?",
        answer: "116th",
        accept: ["116", "116th", "116th minute"],
        choices: ["108th", "120th", "112th"],
        diff: 2
      },
      {
        clue: "After Crystal Palace came back from 3-0 down to draw 3-3 with Liverpool in May 2014, Liverpool's title hopes were crushed. Which team eventually pipped them to the title?",
        answer: "Manchester City",
        accept: ["manchester city", "man city"],
        choices: ["Chelsea", "Arsenal", "Everton"],
        diff: 2
      },
      {
        clue: "Zidane's headbutt in the 2006 final was provoked by Materazzi making a comment about Zidane's sister. France ultimately lost on penalties; which French player missed the decisive kick?",
        answer: "David Trezeguet",
        accept: ["trezeguet", "david trezeguet"],
        choices: ["Thierry Henry", "Patrick Vieira", "Sylvain Wiltord"],
        diff: 2
      },
      {
        clue: "Morocco's historic 2022 World Cup run ended in a 2-0 semi-final defeat to which team?",
        answer: "France",
        accept: ["france"],
        choices: ["Argentina", "Croatia", "Portugal"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "The 2015 FIFA corruption scandal saw 7 officials arrested in Zürich. The arrests were coordinated by the FBI and which other US agency?",
        answer: "IRS Criminal Investigation",
        accept: ["irs", "irs criminal investigation", "internal revenue service"],
        choices: ["DEA", "Secret Service", "Homeland Security"],
        diff: 3
      },
      {
        clue: "David Beckham left Real Madrid after four seasons to join which Major League Soccer club in 2007?",
        answer: "LA Galaxy",
        accept: ["la galaxy", "los angeles galaxy"],
        choices: ["New York Red Bulls", "DC United", "Chicago Fire"],
        diff: 3
      },
      {
        clue: "Spain's 2024 Euros triumph made them the first team to win how many European Championships?",
        answer: "4",
        accept: ["4", "four"],
        choices: ["3", "5", "6"],
        diff: 3
      },
      {
        clue: "After the 2015 FIFA corruption scandal, Sepp Blatter and Michel Platini were both banned for 8 years from football. The banned was subsequently reduced; what triggered the scandal's arrests?",
        answer: "FBI investigation into bribery and racketeering",
        accept: ["fbi investigation", "bribery investigation", "fbi"],
        choices: ["Swiss police raid", "INTERPOL operation", "UEFA ethics inquiry"],
        diff: 3
      },
      {
        clue: "Steven Gerrard's slip in 2014 allowed Demba Ba to score. Ba was playing for which London club at the time?",
        answer: "Chelsea",
        accept: ["chelsea"],
        choices: ["Arsenal", "Tottenham", "West Ham"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Zidane provoked Materazzi's comment by offering to give Materazzi his shirt after a tug. Materazzi replied he'd rather have Zidane's sister. Materazzi won a libel case against British media in which year?",
        answer: "2009",
        accept: ["2009"],
        choices: ["2007", "2010", "2008"],
        diff: 4
      },
      {
        clue: "The 2015 FIFA corruption indictment charged 7 executives with receiving how much in bribes over two decades?",
        answer: "$150 million",
        accept: ["$150 million", "150 million dollars", "150 million"],
        choices: ["$80 million", "$200 million", "$300 million"],
        diff: 4
      },
      {
        clue: "UEFA FFP regulations were agreed in September 2009. The rules were formally introduced into UEFA competition regulations during which congress meeting year?",
        answer: "2010",
        accept: ["2010"],
        choices: ["2008", "2011", "2012"],
        diff: 4
      },
      {
        clue: "Spain's 2024 Euro triumph was achieved under which Spanish manager who led them to the title in Germany?",
        answer: "Luis de la Fuente",
        accept: ["luis de la fuente", "de la fuente"],
        choices: ["Luis Enrique", "Julen Lopetegui", "Vicente del Bosque"],
        diff: 4
      },
      {
        clue: "Sepp Blatter resigned as FIFA president in June 2015 just days after winning re-election for a 5th term. He had served as president since which year?",
        answer: "1998",
        accept: ["1998"],
        choices: ["1994", "2002", "1996"],
        diff: 4
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 5: CLUB FOOTBALL
  // ─────────────────────────────────────────────
  5: {
    100: [
      {
        clue: "Lionel Messi won 4 Champions League titles with Barcelona. In which year did Barcelona win the treble under Pep Guardiola for the first time?",
        answer: "2009",
        accept: ["2009"],
        choices: ["2011", "2006", "2015"],
        diff: 1
      },
      {
        clue: "David Beckham was sold by Manchester United to Real Madrid. He was part of Real Madrid's 'Galácticos' era, alongside Ronaldo (Brazillian), Zidane, and which Portuguese star who joined later?",
        answer: "Luís Figo",
        accept: ["luis figo", "figo", "luís figo"],
        choices: ["Rui Costa", "João Pinto", "Nuno Gomes"],
        diff: 1
      },
      {
        clue: "Ronaldinho's best season at Barcelona came in 2004–05 when he won the Ballon d'Or. He had also helped Barcelona win the UEFA Champions League in which year?",
        answer: "2006",
        accept: ["2006"],
        choices: ["2005", "2007", "2004"],
        diff: 1
      },
      {
        clue: "Steven Gerrard spent his entire club career at which English club before moving to the MLS?",
        answer: "Liverpool",
        accept: ["liverpool"],
        choices: ["Everton", "Manchester United", "Arsenal"],
        diff: 1
      },
      {
        clue: "Xavi Hernandez spent the majority of his club career at Barcelona before moving to which Middle Eastern club in 2015?",
        answer: "Al Sadd",
        accept: ["al sadd", "al-sadd"],
        choices: ["Al Hilal", "Al Nassr", "Al Ittihad"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Messi's four Champions League titles with Barcelona came in 2006, 2009, 2011, and 2015. In which final did he score a memorable header against Manchester United?",
        answer: "2009",
        accept: ["2009"],
        choices: ["2011", "2015", "2006"],
        diff: 2
      },
      {
        clue: "Toni Kroos won 5 Champions League titles with Real Madrid and 1 with Bayern Munich. When he retired in 2024, he matched Paco Gento's record of 6 European Cup titles. Which other Real Madrid players joined him in this record?",
        answer: "Dani Carvajal and Luka Modric",
        accept: ["carvajal and modric", "dani carvajal and luka modric", "modric and carvajal"],
        choices: ["Sergio Ramos and Benzema", "Marcelo and Bale", "Vinicius Jr and Camavinga"],
        diff: 2
      },
      {
        clue: "Thierry Henry scored 175 Premier League goals for Arsenal. He also briefly returned to Arsenal on loan in 2012 from which American club?",
        answer: "New York Red Bulls",
        accept: ["new york red bulls", "red bulls"],
        choices: ["LA Galaxy", "DC United", "New England Revolution"],
        diff: 2
      },
      {
        clue: "Ronaldinho joined AC Milan from Barcelona in 2008. At AC Milan he played alongside which legendary Brazilian striker?",
        answer: "Kaká",
        accept: ["kaka", "kaká", "ricardo kaka"],
        choices: ["Ronaldo", "Adriano", "Robinho"],
        diff: 2
      },
      {
        clue: "In the 2013–14 Premier League season where Liverpool narrowly missed the title, their manager Brendan Rodgers fielded a lethal striking partnership of Luis Suárez and which player?",
        answer: "Daniel Sturridge",
        accept: ["daniel sturridge", "sturridge"],
        choices: ["Raheem Sterling", "Philippe Coutinho", "Jordan Henderson"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Barcelona's 2009 Champions League final saw them beat Manchester United 2–1 in Rome. Messi's header assist came from a cross by which teammate?",
        answer: "Xavi",
        accept: ["xavi", "xavi hernandez"],
        choices: ["Iniesta", "Dani Alves", "Thierry Henry"],
        diff: 3
      },
      {
        clue: "Xavi Hernandez returned to Barcelona as manager in 2021. He had been managing which club before taking the Barcelona job?",
        answer: "Al Sadd",
        accept: ["al sadd", "al-sadd"],
        choices: ["Al Hilal", "Qatar national team", "Villarreal"],
        diff: 3
      },
      {
        clue: "Toni Kroos joined Real Madrid from Bayern Munich in 2014. In which year did he first announce his retirement, only to reverse his decision and continue?",
        answer: "2021",
        accept: ["2021"],
        choices: ["2019", "2022", "2023"],
        diff: 3
      },
      {
        clue: "Messi scored his famous 2009 UCL final header, but he had not played in the 2006 UCL final win over Arsenal due to injury. What type of injury kept him out?",
        answer: "Muscle tear",
        accept: ["muscle tear", "hamstring injury", "muscular injury"],
        choices: ["Broken leg", "Knee ligament damage", "Ankle fracture"],
        diff: 3
      },
      {
        clue: "Steven Gerrard managed Rangers FC in Scotland before taking his first role as manager of an English Premier League club. Which club did he manage in the PL?",
        answer: "Aston Villa",
        accept: ["aston villa", "villa"],
        choices: ["Wolverhampton", "Crystal Palace", "Everton"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Barcelona won the 2015 Champions League under Luis Enrique with the famous 'MSN' attack. The 3-1 final victory was against which Italian club?",
        answer: "Juventus",
        accept: ["juventus"],
        choices: ["AC Milan", "Inter Milan", "Roma"],
        diff: 4
      },
      {
        clue: "Toni Kroos's record-equalling sixth European Cup title came in which city's final in 2024?",
        answer: "London",
        accept: ["london", "wembley"],
        choices: ["Paris", "Istanbul", "Lisbon"],
        diff: 4
      },
      {
        clue: "In what city was the 2011 Champions League final played, where Barcelona beat Manchester United 3-1 for Messi's third UCL title?",
        answer: "London",
        accept: ["london", "wembley"],
        choices: ["Madrid", "Rome", "Paris"],
        diff: 4
      },
      {
        clue: "Xavi set a Champions League record for most appearances by a Barcelona player. He made how many appearances in the competition during his career?",
        answer: "151",
        accept: ["151"],
        choices: ["143", "157", "138"],
        diff: 4
      },
      {
        clue: "David Beckham's £25 million transfer from Man United to Real Madrid in 2003 was structured with how much paid upfront and the rest over 4 years?",
        answer: "€7.5 million",
        accept: ["7.5 million", "€7.5 million", "7.5m"],
        choices: ["€10 million", "€5 million", "€15 million"],
        diff: 4
      }
    ]
  }
};

const SOCCER_EXTRA_FINALS = [
  {
    category: "FIFA WORLD CUP",
    clue: "Maradona scored two goals against England in the 1986 World Cup quarterfinal — one illegal, one sublime. The 'Goal of the Century' was officially voted so by FIFA fans ahead of which tournament?",
    answer: "2002 FIFA World Cup",
    accept: ["2002 world cup", "2002 fifa world cup", "2002"]
  },
  {
    category: "GOAL SCORING LEGENDS",
    clue: "Harry Kane broke Rooney's England record by scoring his 54th international goal from the penalty spot against Italy in March 2023. He achieved this milestone in only 81 caps compared to Rooney's 120. Name the competition in which this record was set.",
    answer: "UEFA Euro 2024 qualifier",
    accept: ["euro qualifier", "european championship qualifier", "euro 2024 qualifier", "qualifier"]
  },
  {
    category: "RECORDS & FIRSTS",
    clue: "Egypt's record 7 Africa Cup of Nations titles includes a remarkable three consecutive wins from 2006 to 2010. Name the Egyptian star who was crucial in those victories and won African Player of the Year three times in that period.",
    answer: "Mohamed Aboutrika",
    accept: ["aboutrika", "mohamed aboutrika"]
  },
  {
    category: "MODERN ERA",
    clue: "The 2015 FIFA corruption scandal was a watershed moment. Chuck Blazer, the former CONCACAF general secretary turned FBI informant, had secretly worn a recording device where to gather evidence?",
    answer: "FIFA Congress",
    accept: ["fifa congress", "2011 fifa congress", "congress"]
  },
  {
    category: "CLUB FOOTBALL",
    clue: "Messi's 2009 Champions League final header against Manchester United in Rome came from which tall forward's knockdown assist, making the goal a rare headed goal for the usually ground-based Messi?",
    answer: "Samuel Eto'o",
    accept: ["samuel eto'o", "eto'o", "etoo"]
  }
];


// ─────────────────────────────────────────────
// Added 20260627 (Saturday → Soccer nightly expansion)
// 18 regular + 2 Final Round questions, fact-checked via web search.
// ─────────────────────────────────────────────
const SOCCER_EXTRA_20260627 = {

  "FIFA WORLD CUP": {
    questions: [
      { clue: "Argentina beat Colombia 1-0 to win the 2024 Copa América, a record-extending title. How many Copa América titles do they now hold?", answer: "16", accept: ["16", "sixteen"], choices: ["15", "14", "13"], diff: 1 },
      { clue: "Lautaro Martínez scored the winning goal in the 2024 Copa América final. Which Italian club does he play his club football for?", answer: "Inter Milan", accept: ["inter milan", "inter", "internazionale"], choices: ["AC Milan", "Napoli", "Juventus"], diff: 2 },
      { clue: "The 2026 FIFA World Cup final will be played at which stadium in East Rutherford, New Jersey?", answer: "MetLife Stadium", accept: ["metlife stadium", "metlife", "met life stadium"], choices: ["SoFi Stadium", "AT&T Stadium", "Mercedes-Benz Stadium"], diff: 3 },
      { clue: "The 2024 Copa América final, marred by long entry delays, was held at which Miami-area stadium?", answer: "Hard Rock Stadium", accept: ["hard rock stadium", "hard rock"], choices: ["MetLife Stadium", "Mercedes-Benz Stadium", "Rose Bowl"], diff: 3 },
      { clue: "The 2026 World Cup spans 16 host cities across three nations. How many of those host cities are in the United States?", answer: "11", accept: ["11", "eleven"], choices: ["9", "13", "16"], diff: 4 }
    ]
  },

  "GOAL SCORING LEGENDS": {
    questions: [
      { clue: "Which Manchester City midfielder won the 2024 Ballon d'Or, becoming the first City player ever to claim the award?", answer: "Rodri", accept: ["rodri", "rodrigo", "rodri hernandez"], choices: ["Vinícius Júnior", "Jude Bellingham", "Erling Haaland"], diff: 1 },
      { clue: "Harry Kane left Tottenham in 2023 to join which German club, where he immediately shattered Bundesliga scoring records?", answer: "Bayern Munich", accept: ["bayern munich", "bayern", "fc bayern"], choices: ["Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"], diff: 2 },
      { clue: "Erling Haaland became the fastest player to reach 100 Premier League goals, beating Alan Shearer's old mark of 124. In how many games did Haaland do it?", answer: "111", accept: ["111", "one hundred eleven"], choices: ["124", "94", "131"], diff: 3 },
      { clue: "Name the Spanish defensive midfielder who won the 2024 Ballon d'Or after anchoring Manchester City's midfield and being named Player of the Tournament at Euro 2024, which Spain won.", answer: "Rodri", accept: ["rodri", "rodrigo", "rodri hernandez"], diff: 3 }
    ]
  },

  "RECORDS & FIRSTS": {
    questions: [
      { clue: "Bayer Leverkusen went the entire 2023-24 league season unbeaten to win their first-ever Bundesliga title. Which manager led them?", answer: "Xabi Alonso", accept: ["xabi alonso", "alonso"], choices: ["Thomas Tuchel", "Julian Nagelsmann", "Hansi Flick"], diff: 2 },
      { clue: "Aitana Bonmatí won the 2024 Women's Ballon d'Or. Which club does the Spanish midfielder play for?", answer: "Barcelona", accept: ["barcelona", "barca", "fc barcelona"], choices: ["Real Madrid", "Atlético Madrid", "Olympique Lyonnais"], diff: 2 }
    ]
  },

  "SOCCER LINGO": {
    questions: [
      { clue: "When the ball fully crosses the sideline (touchline) and goes out of play, the game restarts with what?", answer: "Throw-in", accept: ["throw-in", "throw in", "throwin"], choices: ["Corner kick", "Goal kick", "Free kick"], diff: 1 },
      { clue: "Supporters often unveil a huge coordinated visual display across a section of the stands. By what Italian-derived name is this known?", answer: "Tifo", accept: ["tifo"], choices: ["A type of swerving free kick", "A defensive offside trap", "A second yellow-card offense"], diff: 2 }
    ]
  },

  "MODERN ERA": {
    questions: [
      { clue: "Arsenal won the 2025-26 Premier League title. Who was their manager?", answer: "Mikel Arteta", accept: ["mikel arteta", "arteta"], choices: ["Pep Guardiola", "Unai Emery", "Mauricio Pochettino"], diff: 1 },
      { clue: "Arsenal's 2025-26 league title ended a top-flight title drought stretching back to which famous unbeaten campaign?", answer: "2003-04 (the Invincibles)", accept: ["2003-04", "2003/04", "the invincibles", "2004", "invincibles season"], choices: ["1997-98", "2001-02", "1990-91"], diff: 2 }
    ]
  },

  "CLUB FOOTBALL": {
    questions: [
      { clue: "Paris Saint-Germain won their first-ever Champions League in 2025, beating Inter Milan by what record final scoreline?", answer: "5-0", accept: ["5-0", "5 to 0", "five nil"], choices: ["3-0", "2-1", "4-1"], diff: 1 },
      { clue: "PSG's 2025 Champions League triumph came under which manager, who had previously won the trophy with Barcelona in 2015?", answer: "Luis Enrique", accept: ["luis enrique", "enrique"], choices: ["Mauricio Pochettino", "Christophe Galtier", "Thomas Tuchel"], diff: 2 },
      { clue: "After years of being mocked as 'Neverkusen' for near-misses, Bayer Leverkusen's 2023-24 unbeaten title flipped the joke into which new nickname?", answer: "Neverlusen", accept: ["neverlusen"], choices: ["Die Unbesiegbaren", "Werkself Wonders", "Black Forest Bolt"], diff: 3 },
      { clue: "PSG's 5-0 win in the 2025 Champions League final featured two goals from a teenage French forward. How old was Désiré Doué at the time?", answer: "19", accept: ["19", "nineteen"], choices: ["18", "20", "21"], diff: 4 },
      { clue: "Name the Georgian winger, signed from Napoli earlier that season, who scored in PSG's record 5-0 win over Inter Milan in the 2025 Champions League final.", answer: "Khvicha Kvaratskhelia", accept: ["khvicha kvaratskhelia", "kvaratskhelia", "kvara", "khvicha"], diff: 3 }
    ]
  }

};

if (typeof mergeExtra === 'function') mergeExtra(SOCCER_EXTRA_20260627, 'Soccer');


