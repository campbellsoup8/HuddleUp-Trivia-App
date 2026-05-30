const BASKETBALL_Q = {
  0: { // NBA CHAMPIONSHIPS
    100: [
      { clue: "This team won the most NBA titles in history, claiming their 18th championship in 2024.", answer: "Boston Celtics", accept: ["boston celtics", "celtics", "boston"], choices: ["Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"], diff: 1 },
      { clue: "Michael Jordan led this team to back-to-back three-peats in 1991-1993 and 1996-1998.", answer: "Chicago Bulls", accept: ["chicago bulls", "bulls", "chicago"], choices: ["Detroit Pistons", "Boston Celtics", "Los Angeles Lakers"], diff: 2 },
      { clue: "LeBron James won NBA titles with three different franchises. Name one of them.", answer: "Miami Heat", accept: ["miami heat", "heat", "cleveland cavaliers", "cavaliers", "cleveland", "los angeles lakers", "lakers", "la lakers"], choices: ["Boston Celtics", "Chicago Bulls", "Golden State Warriors"], diff: 3 },
      { clue: "Bill Russell won this many NBA titles with the Boston Celtics, including 8 consecutive.", answer: "11", accept: ["11", "eleven"], choices: ["9", "10", "12"], diff: 4 }
    ],
    200: [
      { clue: "The Los Angeles Lakers have won how many NBA championships, second only to the Celtics?", answer: "17", accept: ["17", "seventeen"], choices: ["15", "16", "18"], diff: 1 },
      { clue: "Golden State Warriors won 4 titles in 8 years. Which year was NOT one of them?", answer: "2016", accept: ["2016"], choices: ["2015", "2017", "2018"], diff: 2 },
      { clue: "The Cleveland Cavaliers' 2016 championship was the city's first major sports title in how many years?", answer: "52", accept: ["52", "fifty-two", "fifty two"], choices: ["48", "56", "60"], diff: 3 },
      { clue: "The San Antonio Spurs won 5 titles, all with Tim Duncan. Which year was their FIRST championship?", answer: "1999", accept: ["1999"], choices: ["1997", "2001", "2003"], diff: 4 }
    ],
    300: [
      { clue: "LeBron James made an iconic block on this Golden State Warriors player in Game 7 of the 2016 Finals.", answer: "Andre Iguodala", accept: ["andre iguodala", "iguodala"], choices: ["Klay Thompson", "Draymond Green", "Stephen Curry"], diff: 1 },
      { clue: "The Miami Heat's 'Big Three' of LeBron, Wade, and Bosh won back-to-back titles in what years?", answer: "2012 and 2013", accept: ["2012 and 2013", "2012 & 2013", "2012", "2013"], choices: ["2011 and 2012", "2013 and 2014", "2010 and 2011"], diff: 2 },
      { clue: "The Cleveland Cavaliers came back from a 3-1 deficit to beat which team in the 2016 NBA Finals?", answer: "Golden State Warriors", accept: ["golden state warriors", "warriors", "golden state"], choices: ["San Antonio Spurs", "Oklahoma City Thunder", "Houston Rockets"], diff: 3 },
      { clue: "Which player won NBA Finals MVP in 2024 when the Boston Celtics beat the Dallas Mavericks?", answer: "Jayson Tatum", accept: ["jayson tatum", "tatum"], choices: ["Jaylen Brown", "Kristaps Porzingis", "Al Horford"], diff: 4 }
    ],
    400: [
      { clue: "How many total NBA titles did the Chicago Bulls win with Michael Jordan?", answer: "6", accept: ["6", "six"], choices: ["4", "5", "7"], diff: 1 },
      { clue: "The 2016 NBA Finals was notable because Cleveland overcame a 3-1 series deficit. How many teams have ever done this in Finals history before 2016?", answer: "0", accept: ["0", "zero", "none", "no team"], choices: ["1", "2", "3"], diff: 2 },
      { clue: "Tim Duncan won all 5 of his NBA titles with the San Antonio Spurs. What was the year of his final championship?", answer: "2014", accept: ["2014"], choices: ["2012", "2013", "2015"], diff: 3 },
      { clue: "Bill Russell served as player-coach for the Boston Celtics, making him the first Black head coach in major American pro sports. In what year did he become player-coach?", answer: "1966", accept: ["1966"], choices: ["1964", "1968", "1970"], diff: 4 }
    ]
  },
  1: { // SCORING LEGENDS
    100: [
      { clue: "This player scored 100 points in a single NBA game on March 2, 1962.", answer: "Wilt Chamberlain", accept: ["wilt chamberlain", "chamberlain", "wilt"], choices: ["Michael Jordan", "Kobe Bryant", "Elgin Baylor"], diff: 1 },
      { clue: "LeBron James surpassed this player's all-time scoring record of 38,387 points in February 2023.", answer: "Kareem Abdul-Jabbar", accept: ["kareem abdul-jabbar", "kareem", "kareem abdul jabbar", "kareem abdül jabbar"], choices: ["Wilt Chamberlain", "Karl Malone", "Michael Jordan"], diff: 2 },
      { clue: "Kobe Bryant scored 81 points in a game in 2006, the second most ever. Who were the opponents?", answer: "Toronto Raptors", accept: ["toronto raptors", "raptors", "toronto"], choices: ["New York Knicks", "Denver Nuggets", "Sacramento Kings"], diff: 3 },
      { clue: "Michael Jordan won this many consecutive scoring titles during his career, the most ever.", answer: "10", accept: ["10", "ten"], choices: ["7", "8", "12"], diff: 4 }
    ],
    200: [
      { clue: "What signature shot did Kareem Abdul-Jabbar use to become the NBA's all-time leading scorer (before LeBron)?", answer: "Skyhook", accept: ["skyhook", "sky hook", "hook shot"], choices: ["Fadeaway", "Finger roll", "Jump shot"], diff: 1 },
      { clue: "Wilt Chamberlain averaged this many points per game in the 1961-62 season — the most ever by any player.", answer: "50.4", accept: ["50.4", "50", "50 points"], choices: ["44.8", "47.2", "53.1"], diff: 2 },
      { clue: "Stephen Curry holds the all-time record for career 3-pointers made. Approximately how many had he made through the 2024 season?", answer: "3747", accept: ["3747", "3,747", "over 3700", "3700"], choices: ["2,973", "3,219", "4,102"], diff: 3 },
      { clue: "On what date did LeBron James officially surpass Kareem Abdul-Jabbar's all-time scoring record?", answer: "February 7, 2023", accept: ["february 7 2023", "february 7, 2023", "feb 7 2023", "feb 7, 2023"], choices: ["January 22, 2023", "March 2, 2023", "December 30, 2022"], diff: 4 }
    ],
    300: [
      { clue: "Michael Jordan's career scoring average of 30.1 PPG is the highest ever for players with 400 or more games. Which team drafted him?", answer: "Chicago Bulls", accept: ["chicago bulls", "bulls", "chicago"], choices: ["Detroit Pistons", "Boston Celtics", "New York Knicks"], diff: 1 },
      { clue: "James Harden won 3 scoring titles while playing for this NBA team.", answer: "Houston Rockets", accept: ["houston rockets", "rockets", "houston"], choices: ["Oklahoma City Thunder", "Brooklyn Nets", "Philadelphia 76ers"], diff: 2 },
      { clue: "Wilt Chamberlain's 100-point game was played in this Pennsylvania city, not in a normal NBA arena.", answer: "Hershey", accept: ["hershey", "hershey pa", "hershey pennsylvania"], choices: ["Pittsburgh", "Allentown", "Philadelphia"], diff: 3 },
      { clue: "Stephen Curry set the single-season 3-pointer record of 402 threes in this season.", answer: "2015-16", accept: ["2015-16", "2015-2016", "2016"], choices: ["2012-13", "2018-19", "2020-21"], diff: 4 }
    ],
    400: [
      { clue: "Who scored the second most points ever in a single NBA game with 81 points?", answer: "Kobe Bryant", accept: ["kobe bryant", "kobe", "bryant"], choices: ["Michael Jordan", "LeBron James", "Elgin Baylor"], diff: 1 },
      { clue: "Kareem Abdul-Jabbar held the NBA's all-time scoring record for how many years before LeBron broke it?", answer: "39", accept: ["39", "thirty-nine", "thirty nine"], choices: ["25", "32", "44"], diff: 2 },
      { clue: "Which player won the most NBA scoring titles ever, with 10?", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj"], choices: ["Wilt Chamberlain", "Kevin Durant", "LeBron James"], diff: 3 },
      { clue: "Wilt Chamberlain's single-season record of 50.4 PPG was set during the 1961-62 season. What team was he playing for?", answer: "Philadelphia Warriors", accept: ["philadelphia warriors", "warriors", "sf warriors", "san francisco warriors"], choices: ["Los Angeles Lakers", "New York Knicks", "Boston Celtics"], diff: 4 }
    ]
  },
  2: { // NBA RECORDS
    100: [
      { clue: "This Utah Jazz player holds the NBA records for most career assists (15,806) and most career steals (3,265).", answer: "John Stockton", accept: ["john stockton", "stockton"], choices: ["Magic Johnson", "Jason Kidd", "Steve Nash"], diff: 1 },
      { clue: "Russell Westbrook holds the record for most career triple-doubles with 198, surpassing this Hall of Famer.", answer: "Oscar Robertson", accept: ["oscar robertson", "robertson", "the big o"], choices: ["Magic Johnson", "Jason Kidd", "LeBron James"], diff: 2 },
      { clue: "Wilt Chamberlain holds the record for most career rebounds with how many?", answer: "23,924", accept: ["23924", "23,924", "nearly 24000"], choices: ["19,221", "21,620", "25,192"], diff: 3 },
      { clue: "Klay Thompson set the record for most 3-pointers in a single game with 14. Who were the opponents on October 29, 2018?", answer: "Chicago Bulls", accept: ["chicago bulls", "bulls", "chicago"], choices: ["Sacramento Kings", "New York Knicks", "Utah Jazz"], diff: 4 }
    ],
    200: [
      { clue: "The longest winning streak in NBA history is 33 games, set in 1971-72 by which team?", answer: "Los Angeles Lakers", accept: ["los angeles lakers", "lakers", "la lakers"], choices: ["Chicago Bulls", "Boston Celtics", "Golden State Warriors"], diff: 1 },
      { clue: "Hakeem Olajuwon holds the all-time record for career blocked shots with how many?", answer: "3,830", accept: ["3830", "3,830"], choices: ["2,954", "4,112", "3,217"], diff: 2 },
      { clue: "John Stockton set the single-season assists record with 1,164 in what season?", answer: "1990-91", accept: ["1990-91", "1990-1991", "1991"], choices: ["1987-88", "1993-94", "1995-96"], diff: 3 },
      { clue: "Oscar Robertson is famous for averaging a triple-double for an entire season in 1961-62. What team was he on?", answer: "Cincinnati Royals", accept: ["cincinnati royals", "royals", "cincinnati"], choices: ["Milwaukee Bucks", "Baltimore Bullets", "St. Louis Hawks"], diff: 4 }
    ],
    300: [
      { clue: "Stephen Curry set the all-time single-season record for 3-pointers made. How many did he hit in 2015-16?", answer: "402", accept: ["402", "four hundred and two"], choices: ["367", "387", "421"], diff: 1 },
      { clue: "Martin Brodeur… wait, wrong sport. Which NBA player holds the record for most career points scored?", answer: "LeBron James", accept: ["lebron james", "lebron", "james"], choices: ["Kareem Abdul-Jabbar", "Karl Malone", "Kobe Bryant"], diff: 2 },
      { clue: "Klay Thompson scored 37 points in a single quarter in the same game he hit 14 three-pointers. Which quarter?", answer: "Third quarter", accept: ["third quarter", "third", "3rd quarter", "3rd"], choices: ["First quarter", "Second quarter", "Fourth quarter"], diff: 3 },
      { clue: "The career steals record holder John Stockton accumulated 3,265 steals. Who is second all-time in career steals?", answer: "Jason Kidd", accept: ["jason kidd", "kidd"], choices: ["Michael Jordan", "Gary Payton", "Scottie Pippen"], diff: 4 }
    ],
    400: [
      { clue: "Wilt Chamberlain scored 100 points in a single game. What team was he playing against?", answer: "New York Knicks", accept: ["new york knicks", "knicks", "new york"], choices: ["Boston Celtics", "Chicago Bulls", "Los Angeles Lakers"], diff: 1 },
      { clue: "Russell Westbrook surpassed Oscar Robertson's career triple-double record. What number triple-double broke the record?", answer: "182", accept: ["182", "one hundred eighty two"], choices: ["178", "185", "190"], diff: 2 },
      { clue: "The record for most career rebounds (23,924) is held by Wilt Chamberlain. Who is second on the all-time list?", answer: "Bill Russell", accept: ["bill russell", "russell"], choices: ["Kareem Abdul-Jabbar", "Tim Duncan", "Shaquille O'Neal"], diff: 3 },
      { clue: "Glenn Hall set the record of 502 consecutive goaltender starts without a mask — wait, wrong sport! Which player set the NBA record for most career wins as a coach?", answer: "Don Nelson", accept: ["don nelson", "nelson"], choices: ["Phil Jackson", "Gregg Popovich", "Pat Riley"], diff: 4 }
    ]
  },
  3: { // BASKETBALL LINGO
    100: [
      { clue: "What term describes when a player records double digits in points, rebounds, AND assists in one game?", answer: "Triple-double", accept: ["triple-double", "triple double"], choices: ["Double-double", "Hat trick", "Grand slam"], diff: 1 },
      { clue: "What term describes the lane/key area near the basket that is painted a different color?", answer: "The paint", accept: ["the paint", "paint", "lane", "the lane", "key", "the key"], choices: ["The box", "The zone", "The pit"], diff: 2 },
      { clue: "What is an 'alley-oop'?", answer: "A lob pass caught near the basket and dunked or laid in", accept: ["alley-oop", "alley oop", "lob dunk", "a player catches a lob and dunks"], choices: ["A half-court shot", "A behind-the-back pass", "A no-look dunk"], diff: 3 },
      { clue: "What NBA strategy, named after a dominant player, involves intentionally fouling a poor free throw shooter?", answer: "Hack-a-Shaq", accept: ["hack-a-shaq", "hack a shaq", "hack-a-shack"], choices: ["Foul-a-center", "Intentional foul strategy", "Free throw trap"], diff: 4 }
    ],
    200: [
      { clue: "What term describes when a player scores AND is fouled, earning a bonus free throw attempt?", answer: "And-1", accept: ["and-1", "and 1", "and one"], choices: ["Bonus shot", "Free plus", "Plus one"], diff: 1 },
      { clue: "What term describes a zone in which defenders guard areas on the court rather than specific opposing players?", answer: "Zone defense", accept: ["zone defense", "zone", "zone d"], choices: ["Man-to-man defense", "Press defense", "Trapping defense"], diff: 2 },
      { clue: "What is a 'pick and roll'?", answer: "The ball handler uses a teammate's screen then the screener rolls to the basket", accept: ["pick and roll", "pick-and-roll", "screen and roll", "setting a pick then rolling"], choices: ["A shooting fake followed by a drive", "Two players switching defensive assignments", "A player dribbles then passes to a cutter"], diff: 3 },
      { clue: "What is 'garbage time' in basketball?", answer: "Late in a lopsided game when the outcome is already decided", accept: ["garbage time", "when outcome is decided", "end of blowout game"], choices: ["Overtime period", "The final minute of a close game", "A timeout late in the fourth quarter"], diff: 4 }
    ],
    300: [
      { clue: "What term describes when a team pushes the ball up the court quickly before the defense can set up?", answer: "Fastbreak", accept: ["fastbreak", "fast break", "fast-break"], choices: ["Full-court press", "Pick and roll", "Half-court offense"], diff: 1 },
      { clue: "What is a 'double-double' in basketball?", answer: "Double digits in two statistical categories", accept: ["double-double", "double double", "double digits in two stats"], choices: ["Two consecutive double-digit scoring games", "Scoring at least 20 points twice in a row", "Two players each scoring over 20 points"], diff: 2 },
      { clue: "What is a 'technical foul' called for?", answer: "Unsportsmanlike conduct", accept: ["unsportsmanlike conduct", "technical foul", "tech", "bad behavior", "arguing with officials"], choices: ["Charging into a defender", "Shooting from half-court", "Going over the back on a rebound"], diff: 3 },
      { clue: "A 'poster dunk' gets its name from what quality?", answer: "A dunk so spectacular it's worthy of being on a poster", accept: ["spectacular dunk", "poster worthy", "worthy of a poster", "photo-worthy dunk"], choices: ["A dunk performed with a poster in hand", "A dunk that results in a technical foul", "A backward dunk"], diff: 4 }
    ],
    400: [
      { clue: "What basketball term refers to the late stages of a one-sided game where coaches often rest their starters?", answer: "Garbage time", accept: ["garbage time", "garbage"], choices: ["Dead ball time", "Crunch time", "Blow-out time"], diff: 1 },
      { clue: "In basketball lingo, what is a 'dime'?", answer: "An assist", accept: ["an assist", "assist", "dime"], choices: ["A three-pointer", "A free throw", "A half-court shot"], diff: 2 },
      { clue: "When a player 'posterizes' someone, what have they done?", answer: "Dunked over a defender", accept: ["dunked over someone", "dunked over a defender", "posterized", "dunk over defender"], choices: ["Shot a three-pointer in someone's face", "Set a brutal screen", "Blocked a shot into the stands"], diff: 3 },
      { clue: "In basketball, what does 'going coast to coast' mean?", answer: "Dribbling the full length of the court to score", accept: ["dribbling full court to score", "coast to coast", "full court dribble and score"], choices: ["Making a three-pointer from both ends of the court in one game", "Playing in two cities in one day", "A full-court press"], diff: 4 }
    ]
  },
  4: { // HALL OF FAMERS
    100: [
      { clue: "Known as 'The GOAT,' this player won 6 NBA titles and 6 Finals MVPs with the Chicago Bulls.", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj", "air jordan"], choices: ["Kobe Bryant", "LeBron James", "Magic Johnson"], diff: 1 },
      { clue: "This Hall of Famer known as 'The Dream' won 2 titles with the Houston Rockets and holds the all-time blocks record.", answer: "Hakeem Olajuwon", accept: ["hakeem olajuwon", "olajuwon", "hakeem", "the dream"], choices: ["Patrick Ewing", "David Robinson", "Alonzo Mourning"], diff: 2 },
      { clue: "This Hall of Famer won 3 consecutive MVPs (1984-86) and 3 NBA titles with the Boston Celtics.", answer: "Larry Bird", accept: ["larry bird", "bird", "larry"], choices: ["Magic Johnson", "Julius Erving", "Charles Barkley"], diff: 3 },
      { clue: "Kareem Abdul-Jabbar won how many NBA MVP awards, the most ever?", answer: "6", accept: ["6", "six"], choices: ["4", "5", "7"], diff: 4 }
    ],
    200: [
      { clue: "Magic Johnson won 5 NBA titles with the Los Angeles Lakers and was famous for playing which position?", answer: "Point guard", accept: ["point guard", "pg"], choices: ["Shooting guard", "Small forward", "Center"], diff: 1 },
      { clue: "Shaquille O'Neal won 4 NBA titles total — 3 with which team?", answer: "Los Angeles Lakers", accept: ["los angeles lakers", "lakers", "la lakers"], choices: ["Orlando Magic", "Miami Heat", "Boston Celtics"], diff: 2 },
      { clue: "Bill Russell was the first Black head coach in major American professional sports. For which team did he serve as player-coach?", answer: "Boston Celtics", accept: ["boston celtics", "celtics", "boston"], choices: ["Los Angeles Lakers", "New York Knicks", "Philadelphia 76ers"], diff: 3 },
      { clue: "Wilt Chamberlain averaged 48.5 minutes per game in one season, which is possible in basketball because of what?", answer: "Overtime games", accept: ["overtime", "overtime games", "extra periods"], choices: ["Rule changes allowed extra minutes", "Coaches could extend game time", "The season was shorter"], diff: 4 }
    ],
    300: [
      { clue: "Which Hall of Famer won 6 NBA titles with the Chicago Bulls and also won 2 Olympic gold medals?", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj"], choices: ["Scottie Pippen", "Dennis Rodman", "Horace Grant"], diff: 1 },
      { clue: "Larry Bird won 3 consecutive MVP awards. In what years were those three MVPs awarded?", answer: "1984, 1985, 1986", accept: ["1984 1985 1986", "1984-1986", "84 85 86"], choices: ["1981, 1982, 1983", "1982, 1983, 1984", "1985, 1986, 1987"], diff: 2 },
      { clue: "Magic Johnson is known for a remarkable ability to play all 5 positions. What was his listed position?", answer: "Point guard", accept: ["point guard", "pg"], choices: ["Shooting guard", "Power forward", "Small forward"], diff: 3 },
      { clue: "Hakeem Olajuwon's Houston Rockets won back-to-back titles in 1994 and 1995. The 1994 win was notable because it was the year what famous player was temporarily retired?", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj"], choices: ["Magic Johnson", "Larry Bird", "Shaquille O'Neal"], diff: 4 }
    ],
    400: [
      { clue: "Oscar Robertson was the first player to average a triple-double for an entire season. In what year did he accomplish this?", answer: "1961-62", accept: ["1961-62", "1961-1962", "1962"], choices: ["1959-60", "1963-64", "1965-66"], diff: 1 },
      { clue: "Kareem Abdul-Jabbar won 6 NBA titles — 1 with Milwaukee Bucks and 5 with which team?", answer: "Los Angeles Lakers", accept: ["los angeles lakers", "lakers", "la lakers"], choices: ["Boston Celtics", "New York Knicks", "Chicago Bulls"], diff: 2 },
      { clue: "Scottie Pippen is considered one of the greatest players ever, but he is known as a player who never won a title without which superstar teammate?", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj"], choices: ["Shaquille O'Neal", "Magic Johnson", "Charles Barkley"], diff: 3 },
      { clue: "Wilt Chamberlain won only 2 NBA titles despite his dominance. Which teams did he win them with?", answer: "Philadelphia 76ers and Los Angeles Lakers", accept: ["76ers and lakers", "sixers and lakers", "philadelphia 76ers and los angeles lakers", "philadelphia and los angeles"], choices: ["Warriors and Knicks", "Celtics and Sixers", "Warriors and Lakers"], diff: 4 }
    ]
  },
  5: { // MODERN ERA
    100: [
      { clue: "Known as the 'Greek Freak,' this two-time MVP led the Milwaukee Bucks to their first title in 50 years in 2021.", answer: "Giannis Antetokounmpo", accept: ["giannis antetokounmpo", "giannis", "the greek freak", "greek freak"], choices: ["Nikola Jokic", "Joel Embiid", "Luka Doncic"], diff: 1 },
      { clue: "Stephen Curry won 4 NBA titles and 2 unanimous MVP awards. Which team does he play for?", answer: "Golden State Warriors", accept: ["golden state warriors", "warriors", "golden state"], choices: ["Cleveland Cavaliers", "Oklahoma City Thunder", "Houston Rockets"], diff: 2 },
      { clue: "Nikola Jokic won 3 MVP awards (2021, 2022, 2024) and led which team to their first-ever NBA championship in 2023?", answer: "Denver Nuggets", accept: ["denver nuggets", "nuggets", "denver"], choices: ["Utah Jazz", "Phoenix Suns", "Minnesota Timberwolves"], diff: 3 },
      { clue: "Luka Doncic became the youngest player in NBA history to reach 10,000 career points. Which country is he from?", answer: "Slovenia", accept: ["slovenia", "slovenian"], choices: ["Serbia", "Croatia", "Czech Republic"], diff: 4 }
    ],
    200: [
      { clue: "Kevin Durant won 2 NBA titles and 2 Finals MVPs with which team?", answer: "Golden State Warriors", accept: ["golden state warriors", "warriors", "golden state"], choices: ["Oklahoma City Thunder", "Brooklyn Nets", "Phoenix Suns"], diff: 1 },
      { clue: "Jimmy Butler led which team to the 2020 and 2023 NBA Finals as an 8th seed?", answer: "Miami Heat", accept: ["miami heat", "heat", "miami"], choices: ["Brooklyn Nets", "Atlanta Hawks", "Chicago Bulls"], diff: 2 },
      { clue: "Giannis Antetokounmpo won consecutive MVP awards in what years?", answer: "2019 and 2020", accept: ["2019 and 2020", "2019 & 2020", "2019-2020"], choices: ["2018 and 2019", "2020 and 2021", "2021 and 2022"], diff: 3 },
      { clue: "Nikola Jokic won the 2023 NBA Finals MVP. The Nuggets defeated which team in the Finals?", answer: "Miami Heat", accept: ["miami heat", "heat", "miami"], choices: ["Boston Celtics", "Golden State Warriors", "Phoenix Suns"], diff: 4 }
    ],
    300: [
      { clue: "Stephen Curry's revolutionary impact on basketball is primarily associated with which skill?", answer: "Three-point shooting", accept: ["three-point shooting", "3-point shooting", "shooting threes", "long-range shooting"], choices: ["Dribbling", "Defense", "Passing"], diff: 1 },
      { clue: "Kevin Durant won how many regular-season scoring titles during his career?", answer: "4", accept: ["4", "four"], choices: ["2", "3", "5"], diff: 2 },
      { clue: "Jayson Tatum of the Boston Celtics won the 2024 NBA Finals MVP. Against which team did Boston win the championship?", answer: "Dallas Mavericks", accept: ["dallas mavericks", "mavericks", "dallas"], choices: ["Indiana Pacers", "New York Knicks", "Minnesota Timberwolves"], diff: 3 },
      { clue: "Nikola Jokic is known as an unusual MVP because he plays which position, not historically associated with MVP-level scoring?", answer: "Center", accept: ["center", "big man", "c"], choices: ["Point guard", "Small forward", "Power forward"], diff: 4 }
    ],
    400: [
      { clue: "Stephen Curry won unanimous MVP in 2015-16. What record did his team (Golden State Warriors) set that season?", answer: "73 wins in a season", accept: ["73 wins", "73-9", "most wins in a season", "73 regular season wins"], choices: ["Most points scored in a season", "Longest winning streak", "Best defensive rating"], diff: 1 },
      { clue: "Luka Doncic led the Dallas Mavericks to the 2024 NBA Finals. Who did they lose to?", answer: "Boston Celtics", accept: ["boston celtics", "celtics", "boston"], choices: ["Golden State Warriors", "Miami Heat", "Cleveland Cavaliers"], diff: 2 },
      { clue: "Giannis Antetokounmpo scored 50 points in the clinching game of the 2021 NBA Finals against which team?", answer: "Phoenix Suns", accept: ["phoenix suns", "suns", "phoenix"], choices: ["Brooklyn Nets", "Milwaukee Bucks", "Atlanta Hawks"], diff: 3 },
      { clue: "Kevin Durant won his only regular-season MVP award in what year?", answer: "2014", accept: ["2014"], choices: ["2012", "2016", "2018"], diff: 4 }
    ]
  }
};

const BASKETBALL_FINALS = [
  { category: "NBA CHAMPIONSHIPS", clue: "LeBron James won NBA titles with 3 different teams. Name all three franchises.", answer: "Miami Heat, Cleveland Cavaliers, Los Angeles Lakers", accept: ["miami heat cleveland cavaliers los angeles lakers", "heat cavaliers lakers", "miami cleveland lakers"] },
  { category: "SCORING LEGENDS", clue: "Wilt Chamberlain's 100-point game in 1962 was played in Hershey, PA. What team was Chamberlain playing for at the time?", answer: "Philadelphia Warriors", accept: ["philadelphia warriors", "warriors", "sf warriors"] },
  { category: "NBA RECORDS", clue: "John Stockton holds NBA records for both most career assists AND most career steals. How many career assists did he record?", answer: "15,806", accept: ["15806", "15,806"] },
  { category: "MODERN ERA", clue: "Nikola Jokic has won 3 MVP awards. Name the three years he won the award.", answer: "2021, 2022, and 2024", accept: ["2021 2022 2024", "2021, 2022, 2024"] }
];

const HOCKEY_Q = {
  0: { // STANLEY CUP HISTORY
    100: [
      { clue: "This Canadian team holds the record for most Stanley Cup championships with 24 titles.", answer: "Montreal Canadiens", accept: ["montreal canadiens", "canadiens", "montreal", "habs"], choices: ["Toronto Maple Leafs", "Detroit Red Wings", "Boston Bruins"], diff: 1 },
      { clue: "The Pittsburgh Penguins won back-to-back Stanley Cups in 2016 and 2017, captained by this player.", answer: "Sidney Crosby", accept: ["sidney crosby", "crosby", "sid crosby", "sid the kid"], choices: ["Evgeni Malkin", "Marc-Andre Fleury", "Kris Letang"], diff: 2 },
      { clue: "Alex Ovechkin captained this team to their first Stanley Cup title in 2018.", answer: "Washington Capitals", accept: ["washington capitals", "capitals", "washington", "caps"], choices: ["Columbus Blue Jackets", "Nashville Predators", "Vegas Golden Knights"], diff: 3 },
      { clue: "The Edmonton Oilers won 5 Stanley Cups in 7 years (1984-1990). Wayne Gretzky led how many of those championships?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 4 }
    ],
    200: [
      { clue: "The Toronto Maple Leafs last won the Stanley Cup in what year?", answer: "1967", accept: ["1967"], choices: ["1972", "1955", "1978"], diff: 1 },
      { clue: "The Tampa Bay Lightning won back-to-back Stanley Cups in what two consecutive years?", answer: "2020 and 2021", accept: ["2020 and 2021", "2020 & 2021", "2020-2021"], choices: ["2018 and 2019", "2019 and 2020", "2021 and 2022"], diff: 2 },
      { clue: "The Florida Panthers won the 2024 Stanley Cup in a 7-game series against which team?", answer: "Edmonton Oilers", accept: ["edmonton oilers", "oilers", "edmonton"], choices: ["New York Rangers", "Carolina Hurricanes", "Vancouver Canucks"], diff: 3 },
      { clue: "The New York Islanders won 4 consecutive Stanley Cups from 1980 to 1983. Who was their star right wing during this dynasty?", answer: "Mike Bossy", accept: ["mike bossy", "bossy"], choices: ["Bryan Trottier", "Denis Potvin", "Clark Gillies"], diff: 4 }
    ],
    300: [
      { clue: "The Detroit Red Wings won 4 Stanley Cups in 11 years, earning the nickname 'Hockeytown.' How many Cups did they win?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "6"], diff: 1 },
      { clue: "Colorado Avalanche won the 2022 Stanley Cup, defeating the Tampa Bay Lightning. How many games did the series last?", answer: "6", accept: ["6", "six", "6 games"], choices: ["4", "5", "7"], diff: 2 },
      { clue: "The Detroit Red Wings' four Stanley Cup titles in 11 years came in what years?", answer: "1997, 1998, 2002, 2008", accept: ["1997 1998 2002 2008", "97 98 02 08"], choices: ["1995, 1997, 1999, 2002", "1996, 1998, 2001, 2004", "1997, 1999, 2002, 2006"], diff: 3 },
      { clue: "Wayne Gretzky was traded from the Edmonton Oilers to which team in 1988, ending the dynasty?", answer: "Los Angeles Kings", accept: ["los angeles kings", "kings", "la kings"], choices: ["New York Rangers", "St. Louis Blues", "Detroit Red Wings"], diff: 4 }
    ],
    400: [
      { clue: "Which team won the 2018 Stanley Cup for the first time in franchise history, with Alex Ovechkin as captain?", answer: "Washington Capitals", accept: ["washington capitals", "capitals", "washington", "caps"], choices: ["Vegas Golden Knights", "Nashville Predators", "Pittsburgh Penguins"], diff: 1 },
      { clue: "The Montreal Canadiens have the most Stanley Cup wins with 24. Which team is second all-time in Cup wins?", answer: "Toronto Maple Leafs", accept: ["toronto maple leafs", "maple leafs", "toronto", "leafs"], choices: ["Detroit Red Wings", "Boston Bruins", "Edmonton Oilers"], diff: 2 },
      { clue: "Edmonton Oilers won 5 Stanley Cups from 1984 to 1990. After Gretzky was traded, who led their 1990 championship?", answer: "Mark Messier", accept: ["mark messier", "messier"], choices: ["Glenn Anderson", "Jari Kurri", "Paul Coffey"], diff: 3 },
      { clue: "The Colorado Avalanche won their first Stanley Cup in 1996. Who was their star center and eventual Hall of Famer?", answer: "Joe Sakic", accept: ["joe sakic", "sakic"], choices: ["Peter Forsberg", "Patrick Roy", "Sandis Ozolinsh"], diff: 4 }
    ]
  },
  1: { // SCORING LEGENDS
    100: [
      { clue: "Known as 'The Great One,' this player holds virtually every major NHL offensive record.", answer: "Wayne Gretzky", accept: ["wayne gretzky", "gretzky", "the great one"], choices: ["Mario Lemieux", "Gordie Howe", "Bobby Hull"], diff: 1 },
      { clue: "Wayne Gretzky's career goals total is 894. Remarkably, his assists alone (1,963) exceed any other player's total what?", answer: "Points", accept: ["points", "total points", "career points"], choices: ["Goals", "Assists", "Games played"], diff: 2 },
      { clue: "Mario Lemieux scored 199 points in a single season (1988-89), the second most ever. Who scored more in a single season?", answer: "Wayne Gretzky", accept: ["wayne gretzky", "gretzky", "the great one"], choices: ["Gordie Howe", "Mike Bossy", "Brett Hull"], diff: 3 },
      { clue: "Gordie Howe played professionally into his 50s and scored how many career NHL goals?", answer: "801", accept: ["801", "eight hundred one"], choices: ["741", "894", "731"], diff: 4 }
    ],
    200: [
      { clue: "Wayne Gretzky set the single-season goals record with how many goals in 1981-82?", answer: "92", accept: ["92", "ninety-two", "ninety two"], choices: ["76", "87", "99"], diff: 1 },
      { clue: "Mike Bossy was the first player to score 50 goals in 50 games. What season did he accomplish this?", answer: "1980-81", accept: ["1980-81", "1980-1981", "1981"], choices: ["1977-78", "1983-84", "1978-79"], diff: 2 },
      { clue: "Jaromir Jagr played professional hockey until age 45 and finished his NHL career with 766 goals. Which team did he famously play for first?", answer: "Pittsburgh Penguins", accept: ["pittsburgh penguins", "penguins", "pittsburgh"], choices: ["New York Rangers", "Washington Capitals", "New Jersey Devils"], diff: 3 },
      { clue: "Wayne Gretzky's single-season points record of 215 was set in what season?", answer: "1985-86", accept: ["1985-86", "1985-1986", "1986"], choices: ["1981-82", "1983-84", "1987-88"], diff: 4 }
    ],
    300: [
      { clue: "Who holds the record for third-most career NHL goals with 741?", answer: "Brett Hull", accept: ["brett hull", "hull", "brett"], choices: ["Jaromir Jagr", "Marcel Dionne", "Phil Esposito"], diff: 1 },
      { clue: "Mario Lemieux is widely considered the only real rival to Gretzky as the best player ever. How many Stanley Cups did Lemieux win?", answer: "2", accept: ["2", "two"], choices: ["1", "3", "4"], diff: 2 },
      { clue: "Mike Bossy scored 50 or more goals in how many consecutive NHL seasons?", answer: "9", accept: ["9", "nine"], choices: ["7", "8", "10"], diff: 3 },
      { clue: "Wayne Gretzky's career points total is 2,857. Mario Lemieux is second all-time with how many career points?", answer: "1,723", accept: ["1723", "1,723"], choices: ["1,492", "1,850", "2,012"], diff: 4 }
    ],
    400: [
      { clue: "Gordie Howe's nickname was 'Mr. Hockey.' In how many professional decades did he play?", answer: "5", accept: ["5", "five"], choices: ["3", "4", "6"], diff: 1 },
      { clue: "Wayne Gretzky scored 92 goals in 1981-82. How many more goals did he score than the previous single-season record?", answer: "16", accept: ["16", "sixteen"], choices: ["10", "20", "25"], diff: 2 },
      { clue: "Brett Hull's father Bobby Hull also had a legendary NHL career. What was Bobby Hull's famous nickname?", answer: "The Golden Jet", accept: ["the golden jet", "golden jet"], choices: ["The Rocket", "The Boomer", "The Golden Goal"], diff: 3 },
      { clue: "Mario Lemieux overcame a serious illness and returned to play at an elite level. What illness did he battle?", answer: "Hodgkin's lymphoma", accept: ["hodgkin's lymphoma", "hodgkins lymphoma", "lymphoma", "cancer"], choices: ["Leukemia", "Prostate cancer", "Heart disease"], diff: 4 }
    ]
  },
  2: { // NHL RECORDS
    100: [
      { clue: "Martin Brodeur of the New Jersey Devils holds the NHL record for most career wins by a goaltender with how many?", answer: "691", accept: ["691", "six hundred ninety one"], choices: ["543", "612", "724"], diff: 1 },
      { clue: "Wayne Gretzky won how many Hart Trophies (MVP awards), the most in NHL history?", answer: "9", accept: ["9", "nine"], choices: ["6", "7", "11"], diff: 2 },
      { clue: "Tiger Williams holds the all-time record for career penalty minutes. How many penalty minutes did he accumulate?", answer: "3,966", accept: ["3966", "3,966"], choices: ["2,819", "4,421", "3,212"], diff: 3 },
      { clue: "Glenn Hall set the record for most consecutive goaltender starts (502 games) playing without what piece of equipment?", answer: "A mask", accept: ["a mask", "mask", "goalie mask", "face mask"], choices: ["Blocker", "Leg pads", "Chest protector"], diff: 4 }
    ],
    200: [
      { clue: "Martin Brodeur also holds the record for most career shutouts with how many?", answer: "125", accept: ["125", "one hundred twenty five"], choices: ["98", "112", "141"], diff: 1 },
      { clue: "Wayne Gretzky holds the record for most career playoff points. How many playoff points did he accumulate?", answer: "382", accept: ["382", "three hundred eighty two"], choices: ["294", "341", "421"], diff: 2 },
      { clue: "Wayne Gretzky holds the record for most assists in a single season with 163. What season was this?", answer: "1985-86", accept: ["1985-86", "1985-1986", "1986"], choices: ["1981-82", "1983-84", "1987-88"], diff: 3 },
      { clue: "The NHL record for most goals in a season (92) was set by Wayne Gretzky. Who held the record before Gretzky?", answer: "Phil Esposito", accept: ["phil esposito", "esposito"], choices: ["Bobby Hull", "Gordie Howe", "Marcel Dionne"], diff: 4 }
    ],
    300: [
      { clue: "Wayne Gretzky's career point total of 2,857 is an NHL record. Approximately how many points ahead of second place (Lemieux) is this?", answer: "Over 1,100 points", accept: ["over 1100", "1134", "1,134", "more than 1000"], choices: ["About 500 points", "About 750 points", "About 2,000 points"], diff: 1 },
      { clue: "Who scored the most goals in the 2023-24 NHL season with 144 points, the most since Mario Lemieux?", answer: "Nikita Kucherov", accept: ["nikita kucherov", "kucherov", "nikita"], choices: ["Nathan MacKinnon", "Connor McDavid", "David Pastrnak"], diff: 2 },
      { clue: "Which goaltender set the record for most career shutouts (125) and most career wins (691)?", answer: "Martin Brodeur", accept: ["martin brodeur", "brodeur"], choices: ["Patrick Roy", "Terry Sawchuk", "Ken Dryden"], diff: 3 },
      { clue: "The record for most Hart Trophies (9) is held by Wayne Gretzky. Who is second all-time in Hart Trophy wins with 3?", answer: "Gordie Howe", accept: ["gordie howe", "howe", "mr hockey"], choices: ["Mario Lemieux", "Bobby Orr", "Sidney Crosby"], diff: 4 }
    ],
    400: [
      { clue: "Wayne Gretzky's jersey number (#99) was retired league-wide by the NHL. What year was this announced?", answer: "1999", accept: ["1999"], choices: ["1997", "2000", "2002"], diff: 1 },
      { clue: "Auston Matthews became the first player since Mario Lemieux (1995-96) to score 60 goals in a season. How many goals did Matthews score in 2021-22?", answer: "60", accept: ["60", "sixty"], choices: ["55", "58", "63"], diff: 2 },
      { clue: "Bobby Orr won the Norris Trophy (best defenseman) 8 consecutive times. Which NHL team did he play for?", answer: "Boston Bruins", accept: ["boston bruins", "bruins", "boston"], choices: ["Montreal Canadiens", "Chicago Blackhawks", "New York Rangers"], diff: 3 },
      { clue: "Glenn Hall's record of 502 consecutive goaltender starts was remarkable. Approximately how many seasons did this span?", answer: "7 seasons", accept: ["7 seasons", "7", "seven", "seven seasons"], choices: ["5 seasons", "10 seasons", "12 seasons"], diff: 4 }
    ]
  },
  3: { // HOCKEY LINGO
    100: [
      { clue: "In hockey, what is a 'hat trick'?", answer: "Three goals in one game by one player", accept: ["hat trick", "three goals", "3 goals in one game"], choices: ["A behind-the-back pass", "A penalty shot", "A shutout"], diff: 1 },
      { clue: "What is the 'Zamboni'?", answer: "The machine that resurfaces the ice between periods", accept: ["zamboni", "ice resurfacing machine", "machine that cleans the ice"], choices: ["A defensive formation", "A type of goalie pad", "An overtime format"], diff: 2 },
      { clue: "In hockey lingo, what does 'five-hole' refer to?", answer: "The gap between a goalie's legs", accept: ["five-hole", "five hole", "between the goalie's legs", "goalie's legs"], choices: ["The top left corner of the net", "A wrap-around shot", "The area above the goalie's glove"], diff: 3 },
      { clue: "What is a 'Gordie Howe hat trick'?", answer: "One goal, one assist, and one fight in the same game", accept: ["one goal one assist one fight", "goal assist fight", "gordie howe hat trick"], choices: ["Three goals in overtime", "A hat trick plus two assists", "Two goals and an assist"], diff: 4 }
    ],
    200: [
      { clue: "What is the 'sin bin' in hockey?", answer: "The penalty box", accept: ["penalty box", "sin bin", "the box"], choices: ["The goal crease", "The bench area", "The locker room"], diff: 1 },
      { clue: "What is a 'power play' in hockey?", answer: "When one team has a man advantage due to an opponent's penalty", accept: ["power play", "man advantage", "when team has extra skater"], choices: ["A penalty shot attempt", "A delayed penalty", "An overtime period"], diff: 2 },
      { clue: "What is 'icing' in hockey?", answer: "When a player shoots the puck from behind center ice and it crosses the opponent's goal line untouched", accept: ["icing", "shooting puck from behind center ice to goal line untouched"], choices: ["When a player trips an opponent from behind", "When the puck goes over the boards", "When the goalie holds the puck too long"], diff: 3 },
      { clue: "What does 'top shelf' mean when used in hockey?", answer: "Shooting the puck into the upper portion of the net", accept: ["top shelf", "upper portion of the net", "high shot into net"], choices: ["A cross-ice pass", "A shot off the post", "A one-timer"], diff: 4 }
    ],
    300: [
      { clue: "In hockey lingo, what is the 'biscuit'?", answer: "The puck", accept: ["puck", "the puck", "biscuit"], choices: ["The hockey stick", "The goal post", "The net"], diff: 1 },
      { clue: "What does 'offsides' mean in hockey?", answer: "When an attacking player crosses the blue line before the puck", accept: ["offsides", "attacking player crosses blue line before puck"], choices: ["When a player trips someone from behind", "When more than 6 skaters are on ice", "When a goalie leaves the crease"], diff: 2 },
      { clue: "A 'deke' in hockey is a move to fake out a goalie or defender. What is 'deke' short for?", answer: "Decoy", accept: ["decoy"], choices: ["Deflection", "Deceptive kick", "Dead-end kick"], diff: 3 },
      { clue: "What is a 'penalty kill' in hockey?", answer: "When the defending team is short-handed while the opponent is on a power play", accept: ["penalty kill", "when team is shorthanded", "killing a penalty"], choices: ["A final-second goal to win the game", "Pulling the goalie for an extra attacker", "A goaltender interference call"], diff: 4 }
    ],
    400: [
      { clue: "In hockey, what does 'going bar down' mean?", answer: "When the puck hits the crossbar and goes down into the net for a goal", accept: ["hits the crossbar and goes in", "bar down", "off the crossbar into the net"], choices: ["A slap shot on the power play", "A penalty shot attempt", "A wrap-around goal"], diff: 1 },
      { clue: "In hockey lingo, what is a 'beauty'?", answer: "A compliment for a great play or a skilled player", accept: ["beauty", "a great play", "a skilled player", "compliment"], choices: ["A clean hit", "A shutout", "A hat trick"], diff: 2 },
      { clue: "What does 'cycling the puck' mean in hockey?", answer: "Keeping possession by moving the puck in a circular pattern in the offensive zone", accept: ["cycling", "keeping possession in offensive zone", "moving puck in circles"], choices: ["Icing the puck intentionally", "Passing the puck around the perimeter", "A defensive clearing strategy"], diff: 3 },
      { clue: "What is a 'Michigan goal' (also called a 'lacrosse goal') in hockey?", answer: "A goal where a player lifts the puck on their stick and tucks it into the net from behind the goal", accept: ["michigan goal", "lacrosse goal", "tucking puck in from behind goal", "puck on stick behind net"], choices: ["A goal scored from center ice", "A goal off a penalty shot", "A goal in triple overtime"], diff: 4 }
    ]
  },
  4: { // HALL OF FAMERS
    100: [
      { clue: "Wayne Gretzky's jersey #99 is the only one retired league-wide in the NHL. What is his nickname?", answer: "The Great One", accept: ["the great one", "great one"], choices: ["The Golden Jet", "Mr. Hockey", "The Dream"], diff: 1 },
      { clue: "Bobby Orr revolutionized the defenseman position and won 8 consecutive Norris Trophies. For which team did he play?", answer: "Boston Bruins", accept: ["boston bruins", "bruins", "boston"], choices: ["Montreal Canadiens", "Toronto Maple Leafs", "Detroit Red Wings"], diff: 2 },
      { clue: "Patrick Roy, known as 'Saint Patrick,' won 4 Stanley Cups and 3 Conn Smythe Trophies. He is famous for transforming what position?", answer: "Goaltending", accept: ["goaltending", "goalie", "goaltender"], choices: ["Defense", "Left wing", "Center"], diff: 3 },
      { clue: "Nicklas Lidstrom won 7 Norris Trophies (best defenseman award) and 4 Stanley Cups. For which team did he play?", answer: "Detroit Red Wings", accept: ["detroit red wings", "red wings", "detroit"], choices: ["Boston Bruins", "New York Rangers", "Philadelphia Flyers"], diff: 4 }
    ],
    200: [
      { clue: "Gordie Howe's nickname is 'Mr. Hockey.' How many Hart Trophies (MVP) did he win during his career?", answer: "6", accept: ["6", "six"], choices: ["4", "5", "7"], diff: 1 },
      { clue: "Steve Yzerman led the Detroit Red Wings to 3 Stanley Cups (1997, 1998, 2002) and later became the GM of which NHL team?", answer: "Tampa Bay Lightning", accept: ["tampa bay lightning", "lightning", "tampa bay", "tampa"], choices: ["Detroit Red Wings", "Ottawa Senators", "Florida Panthers"], diff: 2 },
      { clue: "Bobby Hull was the first player to score 50 goals in a single NHL season. He later jumped to a rival league in 1972. What was that league?", answer: "WHA", accept: ["wha", "world hockey association"], choices: ["AHL", "IHL", "WJHL"], diff: 3 },
      { clue: "Patrick Roy won the Stanley Cup with two different franchises. The Montreal Canadiens was one — name the other.", answer: "Colorado Avalanche", accept: ["colorado avalanche", "avalanche", "colorado"], choices: ["Toronto Maple Leafs", "Boston Bruins", "Detroit Red Wings"], diff: 4 }
    ],
    300: [
      { clue: "Mario Lemieux won 2 Stanley Cups and 3 Hart Trophies. He overcame which serious illness during his playing career?", answer: "Hodgkin's lymphoma", accept: ["hodgkin's lymphoma", "hodgkins lymphoma", "lymphoma", "cancer"], choices: ["Leukemia", "Diabetes", "Heart disease"], diff: 1 },
      { clue: "Gordie Howe was known for his toughness and played in 5 decades. What was unique about his final professional season?", answer: "He was 52 years old", accept: ["he was 52", "played at 52", "played into his 50s", "played in his 50s"], choices: ["He played with his son", "He was the oldest player ever at 65", "He came back after a 10-year retirement"], diff: 2 },
      { clue: "Bobby Orr won 2 Stanley Cups with the Boston Bruins. How many consecutive Norris Trophies (best defenseman) did he win?", answer: "8", accept: ["8", "eight"], choices: ["5", "6", "10"], diff: 3 },
      { clue: "Wayne Gretzky won 4 Stanley Cups, all with which team?", answer: "Edmonton Oilers", accept: ["edmonton oilers", "oilers", "edmonton"], choices: ["Los Angeles Kings", "New York Rangers", "Calgary Flames"], diff: 4 }
    ],
    400: [
      { clue: "Which Hall of Famer has won the most Hart Trophies (MVP) in NHL history, with 9?", answer: "Wayne Gretzky", accept: ["wayne gretzky", "gretzky", "the great one"], choices: ["Gordie Howe", "Mario Lemieux", "Bobby Orr"], diff: 1 },
      { clue: "Nicklas Lidstrom is considered one of the greatest defensemen ever. How many Norris Trophies did he win?", answer: "7", accept: ["7", "seven"], choices: ["4", "5", "9"], diff: 2 },
      { clue: "Steve Yzerman captained the Detroit Red Wings for how many years before winning his first Stanley Cup?", answer: "14", accept: ["14", "fourteen"], choices: ["10", "12", "16"], diff: 3 },
      { clue: "Bobby Hull's son Brett Hull also became a star in the NHL and scored 741 career goals. For which team is Brett most famous?", answer: "St. Louis Blues", accept: ["st. louis blues", "st louis blues", "blues", "st. louis"], choices: ["Detroit Red Wings", "Dallas Stars", "Chicago Blackhawks"], diff: 4 }
    ]
  },
  5: { // MODERN ERA
    100: [
      { clue: "Alex Ovechkin surpassed Wayne Gretzky's all-time goals record in 2024. What goal number broke the record?", answer: "895", accept: ["895", "goal 895", "eight hundred ninety five"], choices: ["881", "900", "910"], diff: 1 },
      { clue: "Sidney Crosby has won 3 Stanley Cups, all with which team?", answer: "Pittsburgh Penguins", accept: ["pittsburgh penguins", "penguins", "pittsburgh"], choices: ["Washington Capitals", "Boston Bruins", "Tampa Bay Lightning"], diff: 2 },
      { clue: "Connor McDavid is known as the fastest skater in the NHL. He plays for which team?", answer: "Edmonton Oilers", accept: ["edmonton oilers", "oilers", "edmonton"], choices: ["Colorado Avalanche", "Toronto Maple Leafs", "Vegas Golden Knights"], diff: 3 },
      { clue: "Auston Matthews scored 60 goals in 2021-22, the first player to do so since Mario Lemieux in 1995-96. Matthews plays for which team?", answer: "Toronto Maple Leafs", accept: ["toronto maple leafs", "maple leafs", "toronto", "leafs"], choices: ["Montreal Canadiens", "Ottawa Senators", "Buffalo Sabres"], diff: 4 }
    ],
    200: [
      { clue: "Nathan MacKinnon won the Hart Trophy in 2024 and led which team to the 2022 Stanley Cup?", answer: "Colorado Avalanche", accept: ["colorado avalanche", "avalanche", "colorado"], choices: ["Minnesota Wild", "Nashville Predators", "Arizona Coyotes"], diff: 1 },
      { clue: "Nikita Kucherov won 2 Stanley Cups with which team?", answer: "Tampa Bay Lightning", accept: ["tampa bay lightning", "lightning", "tampa bay", "tampa"], choices: ["Florida Panthers", "Boston Bruins", "New York Islanders"], diff: 2 },
      { clue: "Leon Draisaitl won the Hart Trophy in 2020 and is the star linemate of Connor McDavid on which team?", answer: "Edmonton Oilers", accept: ["edmonton oilers", "oilers", "edmonton"], choices: ["Calgary Flames", "Winnipeg Jets", "Vancouver Canucks"], diff: 3 },
      { clue: "Connor McDavid won the Hart Trophy in 2017 and 2023. How many Art Ross Trophies (scoring titles) had he won through 2024?", answer: "3", accept: ["3", "three"], choices: ["2", "4", "5"], diff: 4 }
    ],
    300: [
      { clue: "Alex Ovechkin has won how many Maurice Richard Trophies (top goal scorer award), the most ever?", answer: "8", accept: ["8", "eight"], choices: ["5", "6", "9"], diff: 1 },
      { clue: "David Pastrnak of the Boston Bruins scored 61 goals in 2022-23. Which country is Pastrnak from?", answer: "Czech Republic", accept: ["czech republic", "czechia", "czech"], choices: ["Sweden", "Finland", "Russia"], diff: 2 },
      { clue: "Nikita Kucherov scored 144 points in 2023-24. This was the most single-season points since which legendary player?", answer: "Mario Lemieux", accept: ["mario lemieux", "lemieux"], choices: ["Wayne Gretzky", "Steve Yzerman", "Jaromir Jagr"], diff: 3 },
      { clue: "Sidney Crosby won 2 Conn Smythe Trophies as playoff MVP. What year was his first Stanley Cup win?", answer: "2009", accept: ["2009"], choices: ["2007", "2011", "2013"], diff: 4 }
    ],
    400: [
      { clue: "Connor McDavid led the Edmonton Oilers to the 2024 Stanley Cup Finals. Who did they face?", answer: "Florida Panthers", accept: ["florida panthers", "panthers", "florida"], choices: ["New York Rangers", "Dallas Stars", "Vancouver Canucks"], diff: 1 },
      { clue: "Alex Ovechkin surpassed Wayne Gretzky's all-time goals record in 2024. In what city did he score goal #895?", answer: "Stockholm, Sweden", accept: ["stockholm", "sweden", "stockholm sweden"], choices: ["Washington D.C.", "Montreal", "Helsinki"], diff: 2 },
      { clue: "Nathan MacKinnon won the Hart Trophy in 2024. He plays on a line with Mikko Rantanen and which other Avalanche forward?", answer: "Gabriel Landeskog", accept: ["gabriel landeskog", "landeskog"], choices: ["J.T. Compher", "Valeri Nichushkin", "Andrew Cogliano"], diff: 3 },
      { clue: "Sidney Crosby has won 3 Hart Trophies (NHL MVP). Name the 3 years he won the award.", answer: "2007, 2014, 2022", accept: ["2007 2014 2022", "2007, 2014, 2022"], choices: ["2007, 2009, 2016", "2009, 2016, 2021", "2007, 2013, 2019"], diff: 4 }
    ]
  }
};

const HOCKEY_FINALS = [
  { category: "STANLEY CUP HISTORY", clue: "The Edmonton Oilers won 5 Stanley Cups from 1984 to 1990. Wayne Gretzky was traded away in 1988, yet they won one more Cup in 1990. Who captained that final championship?", answer: "Mark Messier", accept: ["mark messier", "messier"] },
  { category: "SCORING LEGENDS", clue: "Wayne Gretzky's career points total of 2,857 is so far ahead of second place that even removing all his goals, his assists alone would make him the all-time points leader. How many career assists did Gretzky record?", answer: "1,963", accept: ["1963", "1,963"] },
  { category: "HALL OF FAMERS", clue: "Bobby Orr revolutionized the defenseman position by doing something no defenseman had done before — he won this individual award, typically given to forwards, in both 1970 and 1971.", answer: "Art Ross Trophy", accept: ["art ross trophy", "art ross", "scoring title", "points title"] },
  { category: "MODERN ERA", clue: "Alex Ovechkin broke Wayne Gretzky's all-time goals record of 894 in 2024. In what year did Gretzky originally set that record as a final career milestone?", answer: "1999", accept: ["1999"] }
];
