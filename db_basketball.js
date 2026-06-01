// HuddleUp Trivia � Basketball Question Database

const BASKETBALL_Q = {
  0: { // NBA CHAMPIONSHIPS
    100: [
      { clue: "This team won the most NBA titles in history, claiming their 18th championship in 2024.", answer: "Boston Celtics", accept: ["boston celtics", "celtics", "boston"], choices: ["Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"], diff: 1 },
      { clue: "Michael Jordan led this team to back-to-back three-peats in 1991-1993 and 1996-1998.", answer: "Chicago Bulls", accept: ["chicago bulls", "bulls", "chicago"], choices: ["Detroit Pistons", "Boston Celtics", "Los Angeles Lakers"], diff: 1 },
      { clue: "LeBron James won NBA titles with three different franchises. Name one of them.", answer: "Miami Heat", accept: ["miami heat", "heat", "cleveland cavaliers", "cavaliers", "cleveland", "los angeles lakers", "lakers", "la lakers"], choices: ["Boston Celtics", "Chicago Bulls", "Golden State Warriors"], diff: 1 },
      { clue: "Bill Russell won this many NBA titles with the Boston Celtics, including 8 consecutive.", answer: "11", accept: ["11", "eleven"], choices: ["9", "10", "12"], diff: 3 }
    ],
    200: [
      { clue: "The Los Angeles Lakers have won how many NBA championships, second only to the Celtics?", answer: "17", accept: ["17", "seventeen"], choices: ["15", "16", "18"], diff: 2 },
      { clue: "Golden State Warriors won 4 titles in 8 years. Which year was NOT one of them?", answer: "2016", accept: ["2016"], choices: ["2015", "2017", "2018"], diff: 2 },
      { clue: "The Cleveland Cavaliers' 2016 championship was the city's first major sports title in how many years?", answer: "52", accept: ["52", "fifty-two", "fifty two"], choices: ["48", "56", "60"], diff: 3 },
      { clue: "The San Antonio Spurs won 5 titles, all with Tim Duncan. Which year was their FIRST championship?", answer: "1999", accept: ["1999"], choices: ["1997", "2001", "2003"], diff: 3 }
    ],
    300: [
      { clue: "LeBron James made an iconic block on this Golden State Warriors player in Game 7 of the 2016 Finals.", answer: "Andre Iguodala", accept: ["andre iguodala", "iguodala"], choices: ["Klay Thompson", "Draymond Green", "Stephen Curry"], diff: 2 },
      { clue: "The Miami Heat's 'Big Three' of LeBron, Wade, and Bosh won back-to-back titles in what years?", answer: "2012 and 2013", accept: ["2012 and 2013", "2012 & 2013", "2012", "2013"], choices: ["2011 and 2012", "2013 and 2014", "2010 and 2011"], diff: 2 },
      { clue: "The Cleveland Cavaliers came back from a 3-1 deficit to beat which team in the 2016 NBA Finals?", answer: "Golden State Warriors", accept: ["golden state warriors", "warriors", "golden state"], choices: ["San Antonio Spurs", "Oklahoma City Thunder", "Houston Rockets"], diff: 1 },
      { clue: "Which player won NBA Finals MVP in 2024 when the Boston Celtics beat the Dallas Mavericks?", answer: "Jayson Tatum", accept: ["jayson tatum", "tatum"], choices: ["Jaylen Brown", "Kristaps Porzingis", "Al Horford"], diff: 1 }
    ],
    400: [
      { clue: "How many total NBA titles did the Chicago Bulls win with Michael Jordan?", answer: "6", accept: ["6", "six"], choices: ["4", "5", "7"], diff: 1 },
      { clue: "The 2016 NBA Finals was notable because Cleveland overcame a 3-1 series deficit. How many teams have ever done this in Finals history before 2016?", answer: "0", accept: ["0", "zero", "none", "no team"], choices: ["1", "2", "3"], diff: 3 },
      { clue: "Tim Duncan won all 5 of his NBA titles with the San Antonio Spurs. What was the year of his final championship?", answer: "2014", accept: ["2014"], choices: ["2012", "2013", "2015"], diff: 3 },
      { clue: "Bill Russell served as player-coach for the Boston Celtics, making him the first Black head coach in major American pro sports. In what year did he become player-coach?", answer: "1966", accept: ["1966"], choices: ["1964", "1968", "1970"], diff: 4 }
    ]
  },
  1: { // SCORING LEGENDS
    100: [
      { clue: "This player scored 100 points in a single NBA game on March 2, 1962.", answer: "Wilt Chamberlain", accept: ["wilt chamberlain", "chamberlain", "wilt"], choices: ["Michael Jordan", "Kobe Bryant", "Elgin Baylor"], diff: 1 },
      { clue: "LeBron James surpassed this player's all-time scoring record of 38,387 points in February 2023.", answer: "Kareem Abdul-Jabbar", accept: ["kareem abdul-jabbar", "kareem", "kareem abdul jabbar", "kareem abdül jabbar"], choices: ["Wilt Chamberlain", "Karl Malone", "Michael Jordan"], diff: 1 },
      { clue: "Kobe Bryant scored 81 points in a game in 2006, the second most ever. Who were the opponents?", answer: "Toronto Raptors", accept: ["toronto raptors", "raptors", "toronto"], choices: ["New York Knicks", "Denver Nuggets", "Sacramento Kings"], diff: 2 },
      { clue: "Michael Jordan won this many consecutive scoring titles during his career, the most ever.", answer: "10", accept: ["10", "ten"], choices: ["7", "8", "12"], diff: 3 }
    ],
    200: [
      { clue: "What signature shot did Kareem Abdul-Jabbar use to become the NBA's all-time leading scorer (before LeBron)?", answer: "Skyhook", accept: ["skyhook", "sky hook", "hook shot"], choices: ["Fadeaway", "Finger roll", "Jump shot"], diff: 1 },
      { clue: "Wilt Chamberlain averaged this many points per game in the 1961-62 season — the most ever by any player.", answer: "50.4", accept: ["50.4", "50", "50 points"], choices: ["44.8", "47.2", "53.1"], diff: 3 },
      { clue: "Stephen Curry holds the all-time record for career 3-pointers made. Approximately how many had he made through the 2024 season?", answer: "3747", accept: ["3747", "3,747", "over 3700", "3700"], choices: ["2,973", "3,219", "4,102"], diff: 3 },
      { clue: "On what date did LeBron James officially surpass Kareem Abdul-Jabbar's all-time scoring record?", answer: "February 7, 2023", accept: ["february 7 2023", "february 7, 2023", "feb 7 2023", "feb 7, 2023"], choices: ["January 22, 2023", "March 2, 2023", "December 30, 2022"], diff: 3 }
    ],
    300: [
      { clue: "Michael Jordan's career scoring average of 30.1 PPG is the highest ever for players with 400 or more games. Which team drafted him?", answer: "Chicago Bulls", accept: ["chicago bulls", "bulls", "chicago"], choices: ["Detroit Pistons", "Boston Celtics", "New York Knicks"], diff: 1 },
      { clue: "James Harden won 3 scoring titles while playing for this NBA team.", answer: "Houston Rockets", accept: ["houston rockets", "rockets", "houston"], choices: ["Oklahoma City Thunder", "Brooklyn Nets", "Philadelphia 76ers"], diff: 2 },
      { clue: "Wilt Chamberlain's 100-point game was played in this Pennsylvania city, not in a normal NBA arena.", answer: "Hershey", accept: ["hershey", "hershey pa", "hershey pennsylvania"], choices: ["Pittsburgh", "Allentown", "Philadelphia"], diff: 3 },
      { clue: "Stephen Curry set the single-season 3-pointer record of 402 threes in this season.", answer: "2015-16", accept: ["2015-16", "2015-2016", "2016"], choices: ["2012-13", "2018-19", "2020-21"], diff: 3 }
    ],
    400: [
      { clue: "Who scored the second most points ever in a single NBA game with 81 points?", answer: "Kobe Bryant", accept: ["kobe bryant", "kobe", "bryant"], choices: ["Michael Jordan", "LeBron James", "Elgin Baylor"], diff: 1 },
      { clue: "Kareem Abdul-Jabbar held the NBA's all-time scoring record for how many years before LeBron broke it?", answer: "39", accept: ["39", "thirty-nine", "thirty nine"], choices: ["25", "32", "44"], diff: 3 },
      { clue: "Which player won the most NBA scoring titles ever, with 10?", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj"], choices: ["Wilt Chamberlain", "Kevin Durant", "LeBron James"], diff: 2 },
      { clue: "Wilt Chamberlain's single-season record of 50.4 PPG was set during the 1961-62 season. What team was he playing for?", answer: "Philadelphia Warriors", accept: ["philadelphia warriors", "warriors", "sf warriors", "san francisco warriors"], choices: ["Los Angeles Lakers", "New York Knicks", "Boston Celtics"], diff: 4 }
    ]
  },
  2: { // NBA RECORDS
    100: [
      { clue: "This Utah Jazz player holds the NBA records for most career assists (15,806) and most career steals (3,265).", answer: "John Stockton", accept: ["john stockton", "stockton"], choices: ["Magic Johnson", "Jason Kidd", "Steve Nash"], diff: 1 },
      { clue: "Russell Westbrook holds the record for most career triple-doubles with 198, surpassing this Hall of Famer.", answer: "Oscar Robertson", accept: ["oscar robertson", "robertson", "the big o"], choices: ["Magic Johnson", "Jason Kidd", "LeBron James"], diff: 2 },
      { clue: "Wilt Chamberlain holds the record for most career rebounds with how many?", answer: "23,924", accept: ["23924", "23,924", "nearly 24000"], choices: ["19,221", "21,620", "25,192"], diff: 3 },
      { clue: "Klay Thompson set the record for most 3-pointers in a single game with 14. Who were the opponents on October 29, 2018?", answer: "Chicago Bulls", accept: ["chicago bulls", "bulls", "chicago"], choices: ["Sacramento Kings", "New York Knicks", "Utah Jazz"], diff: 2 }
    ],
    200: [
      { clue: "The longest winning streak in NBA history is 33 games, set in 1971-72 by which team?", answer: "Los Angeles Lakers", accept: ["los angeles lakers", "lakers", "la lakers"], choices: ["Chicago Bulls", "Boston Celtics", "Golden State Warriors"], diff: 2 },
      { clue: "Hakeem Olajuwon holds the all-time record for career blocked shots with how many?", answer: "3,830", accept: ["3830", "3,830"], choices: ["2,954", "4,112", "3,217"], diff: 2 },
      { clue: "John Stockton set the single-season assists record with 1,164 in what season?", answer: "1990-91", accept: ["1990-91", "1990-1991", "1991"], choices: ["1987-88", "1993-94", "1995-96"], diff: 4 },
      { clue: "Oscar Robertson is famous for averaging a triple-double for an entire season in 1961-62. What team was he on?", answer: "Cincinnati Royals", accept: ["cincinnati royals", "royals", "cincinnati"], choices: ["Milwaukee Bucks", "Baltimore Bullets", "St. Louis Hawks"], diff: 4 }
    ],
    300: [
      { clue: "Stephen Curry set the all-time single-season record for 3-pointers made. How many did he hit in 2015-16?", answer: "402", accept: ["402", "four hundred and two"], choices: ["367", "387", "421"], diff: 2 },
      { clue: "LeBron James surpassed Kareem Abdul-Jabbar in 2023 to become the NBA's all-time leading scorer. Which franchise did LeBron play for when he broke the record?", answer: "Los Angeles Lakers", accept: ["los angeles lakers", "lakers", "la lakers"], choices: ["Miami Heat", "Cleveland Cavaliers", "Boston Celtics"], diff: 1 },
      { clue: "Klay Thompson scored 37 points in a single quarter in the same game he hit 14 three-pointers. Which quarter?", answer: "Third quarter", accept: ["third quarter", "third", "3rd quarter", "3rd"], choices: ["First quarter", "Second quarter", "Fourth quarter"], diff: 3 },
      { clue: "The career steals record holder John Stockton accumulated 3,265 steals. Who is second all-time in career steals?", answer: "Jason Kidd", accept: ["jason kidd", "kidd"], choices: ["Michael Jordan", "Gary Payton", "Scottie Pippen"], diff: 3 }
    ],
    400: [
      { clue: "Wilt Chamberlain scored 100 points in a single game. What team was he playing against?", answer: "New York Knicks", accept: ["new york knicks", "knicks", "new york"], choices: ["Boston Celtics", "Chicago Bulls", "Los Angeles Lakers"], diff: 1 },
      { clue: "Russell Westbrook surpassed Oscar Robertson's career triple-double record. What number triple-double broke the record?", answer: "182", accept: ["182", "one hundred eighty two"], choices: ["178", "185", "190"], diff: 3 },
      { clue: "The record for most career rebounds (23,924) is held by Wilt Chamberlain. Who is second on the all-time list?", answer: "Bill Russell", accept: ["bill russell", "russell"], choices: ["Kareem Abdul-Jabbar", "Tim Duncan", "Shaquille O'Neal"], diff: 3 },
      { clue: "Glenn Hall set the record of 502 consecutive goaltender starts without a mask — wait, wrong sport! Which player set the NBA record for most career wins as a coach?", answer: "Don Nelson", accept: ["don nelson", "nelson"], choices: ["Phil Jackson", "Gregg Popovich", "Pat Riley"], diff: 2 }
    ]
  },
  3: { // BASKETBALL LINGO
    100: [
      { clue: "What term describes when a player records double digits in points, rebounds, AND assists in one game?", answer: "Triple-double", accept: ["triple-double", "triple double"], choices: ["Double-double", "Hat trick", "Grand slam"], diff: 1 },
      { clue: "What term describes the lane/key area near the basket that is painted a different color?", answer: "The paint", accept: ["the paint", "paint", "lane", "the lane", "key", "the key"], choices: ["The box", "The zone", "The pit"], diff: 1 },
      { clue: "What is an 'alley-oop'?", answer: "A lob pass caught near the basket and dunked or laid in", accept: ["alley-oop", "alley oop", "lob dunk", "a player catches a lob and dunks"], choices: ["A half-court shot", "A behind-the-back pass", "A no-look dunk"], diff: 2 },
      { clue: "What NBA strategy, named after a dominant player, involves intentionally fouling a poor free throw shooter?", answer: "Hack-a-Shaq", accept: ["hack-a-shaq", "hack a shaq", "hack-a-shack"], choices: ["Foul-a-center", "Intentional foul strategy", "Free throw trap"], diff: 2 }
    ],
    200: [
      { clue: "What term describes when a player scores AND is fouled, earning a bonus free throw attempt?", answer: "And-1", accept: ["and-1", "and 1", "and one"], choices: ["Bonus shot", "Free plus", "Plus one"], diff: 1 },
      { clue: "What term describes a zone in which defenders guard areas on the court rather than specific opposing players?", answer: "Zone defense", accept: ["zone defense", "zone", "zone d"], choices: ["Man-to-man defense", "Press defense", "Trapping defense"], diff: 1 },
      { clue: "What is a 'pick and roll'?", answer: "The ball handler uses a teammate's screen then the screener rolls to the basket", accept: ["pick and roll", "pick-and-roll", "screen and roll", "setting a pick then rolling"], choices: ["A shooting fake followed by a drive", "Two players switching defensive assignments", "A player dribbles then passes to a cutter"], diff: 2 },
      { clue: "What is 'garbage time' in basketball?", answer: "Late in a lopsided game when the outcome is already decided", accept: ["garbage time", "when outcome is decided", "end of blowout game"], choices: ["Overtime period", "The final minute of a close game", "A timeout late in the fourth quarter"], diff: 2 }
    ],
    300: [
      { clue: "What term describes when a team pushes the ball up the court quickly before the defense can set up?", answer: "Fastbreak", accept: ["fastbreak", "fast break", "fast-break"], choices: ["Full-court press", "Pick and roll", "Half-court offense"], diff: 1 },
      { clue: "What is a 'double-double' in basketball?", answer: "Double digits in two statistical categories", accept: ["double-double", "double double", "double digits in two stats"], choices: ["Two consecutive double-digit scoring games", "Scoring at least 20 points twice in a row", "Two players each scoring over 20 points"], diff: 1 },
      { clue: "What is a 'technical foul' called for?", answer: "Unsportsmanlike conduct", accept: ["unsportsmanlike conduct", "technical foul", "tech", "bad behavior", "arguing with officials"], choices: ["Charging into a defender", "Shooting from half-court", "Going over the back on a rebound"], diff: 2 },
      { clue: "A 'poster dunk' gets its name from what quality?", answer: "A dunk so spectacular it's worthy of being on a poster", accept: ["spectacular dunk", "poster worthy", "worthy of a poster", "photo-worthy dunk"], choices: ["A dunk performed with a poster in hand", "A dunk that results in a technical foul", "A backward dunk"], diff: 2 }
    ],
    400: [
      { clue: "What basketball term refers to the late stages of a one-sided game where coaches often rest their starters?", answer: "Garbage time", accept: ["garbage time", "garbage"], choices: ["Dead ball time", "Crunch time", "Blow-out time"], diff: 1 },
      { clue: "In basketball lingo, what is a 'dime'?", answer: "An assist", accept: ["an assist", "assist", "dime"], choices: ["A three-pointer", "A free throw", "A half-court shot"], diff: 2 },
      { clue: "When a player 'posterizes' someone, what have they done?", answer: "Dunked over a defender", accept: ["dunked over someone", "dunked over a defender", "posterized", "dunk over defender"], choices: ["Shot a three-pointer in someone's face", "Set a brutal screen", "Blocked a shot into the stands"], diff: 2 },
      { clue: "In basketball, what does 'going coast to coast' mean?", answer: "Dribbling the full length of the court to score", accept: ["dribbling full court to score", "coast to coast", "full court dribble and score"], choices: ["Making a three-pointer from both ends of the court in one game", "Playing in two cities in one day", "A full-court press"], diff: 2 }
    ]
  },
  4: { // HALL OF FAMERS
    100: [
      { clue: "Known as 'The GOAT,' this player won 6 NBA titles and 6 Finals MVPs with the Chicago Bulls.", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj", "air jordan"], choices: ["Kobe Bryant", "LeBron James", "Magic Johnson"], diff: 1 },
      { clue: "This Hall of Famer known as 'The Dream' won 2 titles with the Houston Rockets and holds the all-time blocks record.", answer: "Hakeem Olajuwon", accept: ["hakeem olajuwon", "olajuwon", "hakeem", "the dream"], choices: ["Patrick Ewing", "David Robinson", "Alonzo Mourning"], diff: 2 },
      { clue: "This Hall of Famer won 3 consecutive MVPs (1984-86) and 3 NBA titles with the Boston Celtics.", answer: "Larry Bird", accept: ["larry bird", "bird", "larry"], choices: ["Magic Johnson", "Julius Erving", "Charles Barkley"], diff: 2 },
      { clue: "Kareem Abdul-Jabbar won how many NBA MVP awards, the most ever?", answer: "6", accept: ["6", "six"], choices: ["4", "5", "7"], diff: 3 }
    ],
    200: [
      { clue: "Magic Johnson won 5 NBA titles with the Los Angeles Lakers and was famous for playing which position?", answer: "Point guard", accept: ["point guard", "pg"], choices: ["Shooting guard", "Small forward", "Center"], diff: 1 },
      { clue: "Shaquille O'Neal won 4 NBA titles total — 3 with which team?", answer: "Los Angeles Lakers", accept: ["los angeles lakers", "lakers", "la lakers"], choices: ["Orlando Magic", "Miami Heat", "Boston Celtics"], diff: 1 },
      { clue: "Bill Russell was the first Black head coach in major American professional sports. For which team did he serve as player-coach?", answer: "Boston Celtics", accept: ["boston celtics", "celtics", "boston"], choices: ["Los Angeles Lakers", "New York Knicks", "Philadelphia 76ers"], diff: 2 },
      { clue: "Wilt Chamberlain averaged 48.5 minutes per game in one season, which is possible in basketball because of what?", answer: "Overtime games", accept: ["overtime", "overtime games", "extra periods"], choices: ["Rule changes allowed extra minutes", "Coaches could extend game time", "The season was shorter"], diff: 3 }
    ],
    300: [
      { clue: "Which Hall of Famer won 6 NBA titles with the Chicago Bulls and also won 2 Olympic gold medals?", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj"], choices: ["Scottie Pippen", "Dennis Rodman", "Horace Grant"], diff: 1 },
      { clue: "Larry Bird won 3 consecutive MVP awards. In what years were those three MVPs awarded?", answer: "1984, 1985, 1986", accept: ["1984 1985 1986", "1984-1986", "84 85 86"], choices: ["1981, 1982, 1983", "1982, 1983, 1984", "1985, 1986, 1987"], diff: 3 },
      { clue: "Magic Johnson is known for a remarkable ability to play all 5 positions. What was his listed position?", answer: "Point guard", accept: ["point guard", "pg"], choices: ["Shooting guard", "Power forward", "Small forward"], diff: 1 },
      { clue: "Hakeem Olajuwon's Houston Rockets won back-to-back titles in 1994 and 1995. The 1994 win was notable because it was the year what famous player was temporarily retired?", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj"], choices: ["Magic Johnson", "Larry Bird", "Shaquille O'Neal"], diff: 2 }
    ],
    400: [
      { clue: "Oscar Robertson was the first player to average a triple-double for an entire season. In what year did he accomplish this?", answer: "1961-62", accept: ["1961-62", "1961-1962", "1962"], choices: ["1959-60", "1963-64", "1965-66"], diff: 3 },
      { clue: "Kareem Abdul-Jabbar won 6 NBA titles — 1 with Milwaukee Bucks and 5 with which team?", answer: "Los Angeles Lakers", accept: ["los angeles lakers", "lakers", "la lakers"], choices: ["Boston Celtics", "New York Knicks", "Chicago Bulls"], diff: 2 },
      { clue: "Scottie Pippen is considered one of the greatest players ever, but he is known as a player who never won a title without which superstar teammate?", answer: "Michael Jordan", accept: ["michael jordan", "jordan", "mj"], choices: ["Shaquille O'Neal", "Magic Johnson", "Charles Barkley"], diff: 2 },
      { clue: "Wilt Chamberlain won only 2 NBA titles despite his dominance. Which teams did he win them with?", answer: "Philadelphia 76ers and Los Angeles Lakers", accept: ["76ers and lakers", "sixers and lakers", "philadelphia 76ers and los angeles lakers", "philadelphia and los angeles"], choices: ["Warriors and Knicks", "Celtics and Sixers", "Warriors and Lakers"], diff: 3 }
    ]
  },
  5: { // MODERN ERA
    100: [
      { clue: "Known as the 'Greek Freak,' this two-time MVP led the Milwaukee Bucks to their first title in 50 years in 2021.", answer: "Giannis Antetokounmpo", accept: ["giannis antetokounmpo", "giannis", "the greek freak", "greek freak"], choices: ["Nikola Jokic", "Joel Embiid", "Luka Doncic"], diff: 1 },
      { clue: "Stephen Curry won 4 NBA titles and 2 unanimous MVP awards. Which team does he play for?", answer: "Golden State Warriors", accept: ["golden state warriors", "warriors", "golden state"], choices: ["Cleveland Cavaliers", "Oklahoma City Thunder", "Houston Rockets"], diff: 1 },
      { clue: "Nikola Jokic won 3 MVP awards (2021, 2022, 2024) and led which team to their first-ever NBA championship in 2023?", answer: "Denver Nuggets", accept: ["denver nuggets", "nuggets", "denver"], choices: ["Utah Jazz", "Phoenix Suns", "Minnesota Timberwolves"], diff: 1 },
      { clue: "Luka Doncic became the youngest player in NBA history to reach 10,000 career points. Which country is he from?", answer: "Slovenia", accept: ["slovenia", "slovenian"], choices: ["Serbia", "Croatia", "Czech Republic"], diff: 2 }
    ],
    200: [
      { clue: "Kevin Durant won 2 NBA titles and 2 Finals MVPs with which team?", answer: "Golden State Warriors", accept: ["golden state warriors", "warriors", "golden state"], choices: ["Oklahoma City Thunder", "Brooklyn Nets", "Phoenix Suns"], diff: 1 },
      { clue: "Jimmy Butler led which team to the 2020 and 2023 NBA Finals as an 8th seed?", answer: "Miami Heat", accept: ["miami heat", "heat", "miami"], choices: ["Brooklyn Nets", "Atlanta Hawks", "Chicago Bulls"], diff: 2 },
      { clue: "Giannis Antetokounmpo won consecutive MVP awards in what years?", answer: "2019 and 2020", accept: ["2019 and 2020", "2019 & 2020", "2019-2020"], choices: ["2018 and 2019", "2020 and 2021", "2021 and 2022"], diff: 2 },
      { clue: "Nikola Jokic won the 2023 NBA Finals MVP. The Nuggets defeated which team in the Finals?", answer: "Miami Heat", accept: ["miami heat", "heat", "miami"], choices: ["Boston Celtics", "Golden State Warriors", "Phoenix Suns"], diff: 2 }
    ],
    300: [
      { clue: "Stephen Curry's revolutionary impact on basketball is primarily associated with which skill?", answer: "Three-point shooting", accept: ["three-point shooting", "3-point shooting", "shooting threes", "long-range shooting"], choices: ["Dribbling", "Defense", "Passing"], diff: 1 },
      { clue: "Kevin Durant won how many regular-season scoring titles during his career?", answer: "4", accept: ["4", "four"], choices: ["2", "3", "5"], diff: 2 },
      { clue: "Jayson Tatum of the Boston Celtics won the 2024 NBA Finals MVP. Against which team did Boston win the championship?", answer: "Dallas Mavericks", accept: ["dallas mavericks", "mavericks", "dallas"], choices: ["Indiana Pacers", "New York Knicks", "Minnesota Timberwolves"], diff: 1 },
      { clue: "Nikola Jokic is known as an unusual MVP because he plays which position, not historically associated with MVP-level scoring?", answer: "Center", accept: ["center", "big man", "c"], choices: ["Point guard", "Small forward", "Power forward"], diff: 2 }
    ],
    400: [
      { clue: "Stephen Curry won unanimous MVP in 2015-16. What record did his team (Golden State Warriors) set that season?", answer: "73 wins in a season", accept: ["73 wins", "73-9", "most wins in a season", "73 regular season wins"], choices: ["Most points scored in a season", "Longest winning streak", "Best defensive rating"], diff: 1 },
      { clue: "Luka Doncic led the Dallas Mavericks to the 2024 NBA Finals. Who did they lose to?", answer: "Boston Celtics", accept: ["boston celtics", "celtics", "boston"], choices: ["Golden State Warriors", "Miami Heat", "Cleveland Cavaliers"], diff: 1 },
      { clue: "Giannis Antetokounmpo scored 50 points in the clinching game of the 2021 NBA Finals against which team?", answer: "Phoenix Suns", accept: ["phoenix suns", "suns", "phoenix"], choices: ["Brooklyn Nets", "Milwaukee Bucks", "Atlanta Hawks"], diff: 2 },
      { clue: "Kevin Durant won his only regular-season MVP award in what year?", answer: "2014", accept: ["2014"], choices: ["2012", "2016", "2018"], diff: 3 }
    ]
  }
};

const BASKETBALL_FINALS = [
  { category: "NBA CHAMPIONSHIPS", clue: "LeBron James won NBA titles with 3 different teams. Name all three franchises.", answer: "Miami Heat, Cleveland Cavaliers, Los Angeles Lakers", accept: ["miami heat cleveland cavaliers los angeles lakers", "heat cavaliers lakers", "miami cleveland lakers"] },
  { category: "SCORING LEGENDS", clue: "Wilt Chamberlain's 100-point game in 1962 was played in Hershey, PA. What team was Chamberlain playing for at the time?", answer: "Philadelphia Warriors", accept: ["philadelphia warriors", "warriors", "sf warriors"] },
  { category: "NBA RECORDS", clue: "John Stockton holds NBA records for both most career assists AND most career steals. How many career assists did he record?", answer: "15,806", accept: ["15806", "15,806"] },
  { category: "MODERN ERA", clue: "Nikola Jokic has won 3 MVP awards. Name the three years he won the award.", answer: "2021, 2022, and 2024", accept: ["2021 2022 2024", "2021, 2022, 2024"] }
];


const BASKETBALL_EXTRA = {
  // Category 0: NBA CHAMPIONSHIPS
  0: {
    100: [
      {
        clue: "The 1992 U.S. Olympic 'Dream Team' won gold at the Barcelona Olympics, featuring this many NBA legends on its roster.",
        answer: "12",
        accept: ["twelve", "12"],
        choices: ["10", "11", "13"],
        diff: 1
      },
      {
        clue: "Isiah Thomas led these Detroit teams to back-to-back NBA titles in 1989 and 1990, known for their bruising style of play.",
        answer: "Bad Boys Pistons",
        accept: ["bad boys pistons", "detroit pistons", "pistons"],
        choices: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics"],
        diff: 1
      },
      {
        clue: "Dirk Nowitzki's Dallas Mavericks won their first and only NBA title in 2011, defeating this superstar-laden opponent.",
        answer: "Miami Heat",
        accept: ["miami heat", "heat"],
        choices: ["Oklahoma City Thunder", "San Antonio Spurs", "Los Angeles Lakers"],
        diff: 1
      },
      {
        clue: "Dwyane Wade averaged 34.7 points per game in the 2006 NBA Finals to earn MVP and bring this franchise its first title.",
        answer: "Miami Heat",
        accept: ["miami heat", "heat"],
        choices: ["Cleveland Cavaliers", "Dallas Mavericks", "Orlando Magic"],
        diff: 1
      },
      {
        clue: "The 2004 NBA Finals saw the Detroit Pistons upset the heavily favored Los Angeles Lakers in this many games.",
        answer: "5",
        accept: ["five", "5"],
        choices: ["4", "6", "7"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Christian Laettner was the only college player on the 1992 Dream Team. He played for this university.",
        answer: "Duke",
        accept: ["duke", "duke university"],
        choices: ["North Carolina", "Kentucky", "Indiana"],
        diff: 2
      },
      {
        clue: "Kawhi Leonard became the first player in NBA history to win Finals MVP with teams from both conferences, winning with the Spurs in 2014 and this Canadian team in 2019.",
        answer: "Toronto Raptors",
        accept: ["toronto raptors", "raptors", "toronto"],
        choices: ["Boston Celtics", "Philadelphia 76ers", "Milwaukee Bucks"],
        diff: 2
      },
      {
        clue: "The 2004 Detroit Pistons Finals MVP was this point guard, who averaged 21 points per game in the series.",
        answer: "Chauncey Billups",
        accept: ["chauncey billups", "billups"],
        choices: ["Ben Wallace", "Richard Hamilton", "Tayshaun Prince"],
        diff: 2
      },
      {
        clue: "Kobe Bryant won five NBA championships with the Los Angeles Lakers, with his first three coming in consecutive years starting in this year.",
        answer: "2000",
        accept: ["2000"],
        choices: ["1999", "2001", "2002"],
        diff: 2
      },
      {
        clue: "The Dallas Mavericks overcame a 2-1 series deficit in the 2011 Finals to defeat the Miami Heat. Dirk Nowitzki averaged this many points per game.",
        answer: "26",
        accept: ["26", "twenty-six"],
        choices: ["22", "28", "30"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "In the 1992 Dream Team, this player was controversially left off the roster largely due to the animosity between him and Michael Jordan, despite being a two-time champion.",
        answer: "Isiah Thomas",
        accept: ["isiah thomas", "isaiah thomas"],
        choices: ["Clyde Drexler", "Joe Dumars", "Dennis Rodman"],
        diff: 3
      },
      {
        clue: "The Bad Boys Pistons swept the Los Angeles Lakers in the 1989 Finals. Isiah Thomas won the Finals MVP award in this year of the back-to-back.",
        answer: "1990",
        accept: ["1990"],
        choices: ["1989", "1991", "1988"],
        diff: 3
      },
      {
        clue: "Kyrie Irving's clutch 3-pointer over Stephen Curry in Game 7 of the 2016 NBA Finals came with this many seconds remaining.",
        answer: "53",
        accept: ["53", "fifty-three"],
        choices: ["47", "68", "38"],
        diff: 3
      },
      {
        clue: "Four ABA franchises joined the NBA in the 1976 merger. Which of these was NOT one of the four teams?",
        answer: "Kentucky Colonels",
        accept: ["kentucky colonels", "colonels"],
        choices: ["Indiana Pacers", "Denver Nuggets", "San Antonio Spurs"],
        diff: 3
      },
      {
        clue: "Kawhi Leonard's 2014 Finals MVP performance came against the Miami Heat. He averaged this shooting percentage over the series, one of the highest ever for a Finals MVP.",
        answer: "61.2%",
        accept: ["61.2%", "61.2", "61 percent", "sixty-one percent"],
        choices: ["52.4%", "67.8%", "55.5%"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Before signing with the Golden State Warriors in July 2016, Kevin Durant met with six teams. Which franchise was NOT among his finalists?",
        answer: "Chicago Bulls",
        accept: ["chicago bulls", "bulls"],
        choices: ["San Antonio Spurs", "Oklahoma City Thunder", "Boston Celtics"],
        diff: 4
      },
      {
        clue: "The 1976 ABA-NBA merger charged each incoming team a fee of this amount per franchise.",
        answer: "$3.2 million",
        accept: ["3.2 million", "$3.2 million", "3.2"],
        choices: ["$1.5 million", "$5 million", "$2.8 million"],
        diff: 4
      },
      {
        clue: "In the 2016 NBA Finals, Kyrie Irving averaged this many points per game over the 7-game series against the Warriors.",
        answer: "27.1",
        accept: ["27.1", "27"],
        choices: ["24.3", "29.8", "25.6"],
        diff: 4
      },
      {
        clue: "Dirk Nowitzki famously described the origin of his one-legged fadeaway this way: he 'kinda just made it up on the fly' during a game against what opponent in what round of the 2011 playoffs?",
        answer: "Oklahoma City Thunder",
        accept: ["oklahoma city thunder", "okc thunder", "thunder"],
        choices: ["Los Angeles Lakers", "San Antonio Spurs", "Portland Trail Blazers"],
        diff: 4
      },
      {
        clue: "Chauncey Billups earned the nickname 'Mr. Big Shot' in the 2004 Finals. Before Detroit, he had been traded or cut by this many NBA teams.",
        answer: "5",
        accept: ["five", "5"],
        choices: ["3", "4", "6"],
        diff: 4
      }
    ]
  },

  // Category 1: SCORING LEGENDS
  1: {
    100: [
      {
        clue: "Allen Iverson, nicknamed 'The Answer,' won four NBA scoring titles during his career, all while standing only this tall.",
        answer: "6 feet",
        accept: ["6 feet", "6'0\"", "6 foot", "six feet"],
        choices: ["6'2\"", "5'11\"", "6'1\""],
        diff: 1
      },
      {
        clue: "Pete Maravich's legendary college career at LSU gave him this incredible scoring average — the highest in NCAA Division I history.",
        answer: "44.2 PPG",
        accept: ["44.2", "44.2 ppg", "44.2 points per game"],
        choices: ["38.5 PPG", "40.1 PPG", "47.3 PPG"],
        diff: 1
      },
      {
        clue: "Dwyane Wade won the 2006 Finals MVP and led the Heat to victory with this remarkable playoff scoring average.",
        answer: "34.7 PPG",
        accept: ["34.7", "34.7 ppg", "34.7 points"],
        choices: ["28.4 PPG", "31.2 PPG", "38.0 PPG"],
        diff: 1
      },
      {
        clue: "Michael Jordan's playoff record 63 points in a single game came in 1986 against which team?",
        answer: "Boston Celtics",
        accept: ["boston celtics", "celtics"],
        choices: ["New York Knicks", "Detroit Pistons", "Milwaukee Bucks"],
        diff: 1
      },
      {
        clue: "Shai Gilgeous-Alexander won the 2024-25 NBA MVP award while leading the league in scoring with this average.",
        answer: "32.7 PPG",
        accept: ["32.7", "32.7 ppg", "32.7 points per game"],
        choices: ["29.3 PPG", "30.9 PPG", "34.1 PPG"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Allen Iverson's famous crossover famously left even this player stumbling during a regular season game.",
        answer: "Michael Jordan",
        accept: ["michael jordan", "jordan", "mj"],
        choices: ["Kobe Bryant", "Gary Payton", "John Stockton"],
        diff: 2
      },
      {
        clue: "Pete Maravich played his college career from 1967-70 during an era with no 3-point line. His LSU coach estimated if threes counted, his PPG would have been approximately this.",
        answer: "57",
        accept: ["57", "57 ppg", "fifty-seven"],
        choices: ["52", "60", "48"],
        diff: 2
      },
      {
        clue: "Before Stephen Curry broke the record, this player held the NBA's all-time career 3-pointer record with 2,973 made threes.",
        answer: "Ray Allen",
        accept: ["ray allen", "allen"],
        choices: ["Reggie Miller", "Jason Terry", "Vince Carter"],
        diff: 2
      },
      {
        clue: "Allen Iverson won his first NBA scoring title in 1998-99 and his final one in this season.",
        answer: "2004-05",
        accept: ["2004-05", "2005", "04-05"],
        choices: ["2002-03", "2006-07", "2003-04"],
        diff: 2
      },
      {
        clue: "Moses Malone was the only player to win back-to-back MVP awards with two different teams, doing it in 1982 and 1983. He won with the Houston Rockets and then this team.",
        answer: "Philadelphia 76ers",
        accept: ["philadelphia 76ers", "76ers", "sixers", "philadelphia"],
        choices: ["Washington Bullets", "San Antonio Spurs", "Atlanta Hawks"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Isaiah Thomas (modern era) averaged 28.9 PPG for the Boston Celtics in 2016-17 while dealing with a hip injury. He finished this place in MVP voting.",
        answer: "5th",
        accept: ["5th", "fifth", "5"],
        choices: ["3rd", "7th", "4th"],
        diff: 3
      },
      {
        clue: "Victor Wembanyama's 2023-24 rookie season averaged 3.6 blocks per game alongside 21.4 PPG. He was this tall, making him one of the tallest players in league history.",
        answer: "7'4\"",
        accept: ["7'4\"", "7 foot 4", "7-4", "seven foot four"],
        choices: ["7'2\"", "7'3\"", "7'5\""],
        diff: 3
      },
      {
        clue: "Allen Iverson won the 2000-01 NBA MVP award. He famously carried the 76ers to the Finals that year against the Lakers, recording this career-high scoring average.",
        answer: "31.4 PPG",
        accept: ["31.4", "31.4 ppg"],
        choices: ["28.8 PPG", "33.0 PPG", "29.6 PPG"],
        diff: 3
      },
      {
        clue: "Moses Malone predicted the 1983 Sixers would sweep every playoff round, uttering the famous phrase 'Fo, Fo, Fo.' They went close — losing only one game — to finish with this playoff record.",
        answer: "12-1",
        accept: ["12-1", "twelve and one"],
        choices: ["11-2", "12-0", "13-1"],
        diff: 3
      },
      {
        clue: "Shai Gilgeous-Alexander in 2024-25 became just the fourth player in NBA history to win the regular-season MVP, Finals MVP, and scoring title in the same season. Who was NOT among the other three?",
        answer: "LeBron James",
        accept: ["lebron james", "lebron", "king james"],
        choices: ["Kareem Abdul-Jabbar", "Michael Jordan", "Shaquille O'Neal"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "In Pete Maravich's three LSU seasons, he scored a total of this many points — still the all-time NCAA Division I record.",
        answer: "3,667",
        accept: ["3667", "3,667"],
        choices: ["3,249", "4,012", "3,412"],
        diff: 4
      },
      {
        clue: "Dwyane Wade's 2006 Finals heroics included scoring 42 points in Game 3 after the Heat trailed 0-2. He shot 38.6% in the first two losses, then hit this percentage over the final four games.",
        answer: "Over 50%",
        accept: ["over 50", "above 50%", "50 percent or more", "over 50%"],
        choices: ["Under 40%", "Exactly 45%", "38-40%"],
        diff: 4
      },
      {
        clue: "Allen Iverson's nickname 'The Answer' came before he was even drafted. This friend gave him the nickname, and Iverson liked it so much he got it tattooed on his arm.",
        answer: "Jamil Blackmon",
        accept: ["jamil blackmon", "blackmon"],
        choices: ["Larry Brown", "John Thompson", "Eric Snow"],
        diff: 4
      },
      {
        clue: "Isaiah Thomas (modern) scored 53 points in a game on the day his sister died in 2017, in round one of the playoffs versus this team.",
        answer: "Chicago Bulls",
        accept: ["chicago bulls", "bulls"],
        choices: ["Cleveland Cavaliers", "Washington Wizards", "Miami Heat"],
        diff: 4
      },
      {
        clue: "Victor Wembanyama played for this French team before being selected first overall by the San Antonio Spurs in the 2023 NBA Draft.",
        answer: "Metropolitans 92",
        accept: ["metropolitans 92", "mets 92", "boulogne-levallois metropolitans", "metropolitans"],
        choices: ["ASVEL Villeurbanne", "Paris Basketball", "Limoges CSP"],
        diff: 4
      }
    ]
  },

  // Category 2: NBA RECORDS
  2: {
    100: [
      {
        clue: "Elmore Smith set the NBA single-game blocks record with 17 in 1973. He played for this team at the time.",
        answer: "Los Angeles Lakers",
        accept: ["los angeles lakers", "lakers", "la lakers"],
        choices: ["Milwaukee Bucks", "Houston Rockets", "Atlanta Hawks"],
        diff: 1
      },
      {
        clue: "Wilt Chamberlain set the NBA single-game rebound record with 55 boards on November 24, 1960, against this opponent.",
        answer: "Boston Celtics",
        accept: ["boston celtics", "celtics"],
        choices: ["New York Knicks", "Philadelphia Warriors", "St. Louis Hawks"],
        diff: 1
      },
      {
        clue: "The NBA introduced the 3-point line in this season, with Chris Ford of the Celtics making the very first three.",
        answer: "1979-80",
        accept: ["1979-80", "1979", "1980"],
        choices: ["1977-78", "1981-82", "1983-84"],
        diff: 1
      },
      {
        clue: "Danny Biasone invented the 24-second shot clock, which the NBA officially adopted in this year.",
        answer: "1954",
        accept: ["1954"],
        choices: ["1950", "1958", "1956"],
        diff: 1
      },
      {
        clue: "The longest game in NBA history occurred on January 6, 1951, lasting this many overtime periods between Indianapolis and Rochester.",
        answer: "6",
        accept: ["six", "6", "six overtimes"],
        choices: ["4", "5", "7"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Elmore Smith's record 17-block game came on October 28, 1973, against this opponent.",
        answer: "Portland Trail Blazers",
        accept: ["portland trail blazers", "trail blazers", "blazers", "portland"],
        choices: ["Seattle SuperSonics", "Phoenix Suns", "Golden State Warriors"],
        diff: 2
      },
      {
        clue: "Before the shot clock was introduced in 1954, the lowest-scoring NBA game on record was a 19-18 game in 1950. The Fort Wayne Pistons defeated this team.",
        answer: "Minneapolis Lakers",
        accept: ["minneapolis lakers", "lakers", "minneapolis"],
        choices: ["Boston Celtics", "New York Knicks", "Philadelphia Warriors"],
        diff: 2
      },
      {
        clue: "Danny Biasone calculated the 24-second shot clock by dividing 2,880 seconds (48 minutes) by this number — the total shots both teams took per game on average.",
        answer: "120",
        accept: ["120", "one hundred twenty"],
        choices: ["100", "96", "144"],
        diff: 2
      },
      {
        clue: "Damian Lillard hit a series-ending 37-foot buzzer beater in the 2019 playoffs against the Oklahoma City Thunder, finishing with this many total points.",
        answer: "50",
        accept: ["50", "fifty"],
        choices: ["43", "46", "55"],
        diff: 2
      },
      {
        clue: "Vince Carter played the most seasons in NBA history at the time of his retirement, spanning this many seasons across four decades.",
        answer: "22",
        accept: ["22", "twenty-two"],
        choices: ["20", "21", "19"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "The first 3-point field goal in NBA history was made by Chris Ford on October 12, 1979. Ford played for this team.",
        answer: "Boston Celtics",
        accept: ["boston celtics", "celtics"],
        choices: ["San Diego Clippers", "Golden State Warriors", "Milwaukee Bucks"],
        diff: 3
      },
      {
        clue: "Elmore Smith's record 17-block game also included this many rebounds, making it a remarkable all-around defensive performance.",
        answer: "16",
        accept: ["16", "sixteen"],
        choices: ["12", "18", "14"],
        diff: 3
      },
      {
        clue: "In the inaugural 1979-80 NBA season with the 3-point line, this player led the league with 90 three-pointers made.",
        answer: "Brian Taylor",
        accept: ["brian taylor", "taylor"],
        choices: ["Larry Bird", "Chris Ford", "Rick Barry"],
        diff: 3
      },
      {
        clue: "The Milwaukee Bucks defeated the Seattle SuperSonics 155-154 in a historic five-overtime game in this year.",
        answer: "1989",
        accept: ["1989", "november 1989"],
        choices: ["1987", "1991", "1993"],
        diff: 3
      },
      {
        clue: "Wilt Chamberlain's 55-rebound game in 1960 came in a loss. Philadelphia actually lost to the Celtics by this score.",
        answer: "132-129",
        accept: ["132-129", "132 to 129"],
        choices: ["119-110", "128-121", "141-135"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Danny Biasone, who invented the shot clock, owned this NBA franchise that would later move to another city.",
        answer: "Syracuse Nationals",
        accept: ["syracuse nationals", "nationals", "syracuse"],
        choices: ["Fort Wayne Pistons", "Rochester Royals", "Indianapolis Olympians"],
        diff: 4
      },
      {
        clue: "In the 1979-80 season when the 3-point line was introduced, the average team barely used it. Most teams averaged fewer than this many threes attempted per game.",
        answer: "3",
        accept: ["3", "three", "fewer than 3"],
        choices: ["6", "8", "5"],
        diff: 4
      },
      {
        clue: "Vince Carter is the only NBA player to have played in four different decades. He scored over this many total career points.",
        answer: "25,000",
        accept: ["25000", "25,000", "over 25000"],
        choices: ["20,000", "22,000", "28,000"],
        diff: 4
      },
      {
        clue: "The NBA co-credited Leo Ferris alongside Danny Biasone for the shot clock formula. Ferris was the general manager of this franchise.",
        answer: "Syracuse Nationals",
        accept: ["syracuse nationals", "nationals", "syracuse"],
        choices: ["Fort Wayne Pistons", "Rochester Royals", "Boston Celtics"],
        diff: 4
      },
      {
        clue: "Damian Lillard's 37-footer to eliminate OKC in 2019 made him 9-for-15 from how far away in that series?",
        answer: "30 feet",
        accept: ["30 feet", "30-plus feet", "30+"],
        choices: ["25 feet", "27 feet", "35 feet"],
        diff: 4
      }
    ]
  },

  // Category 3: BASKETBALL LINGO
  3: {
    100: [
      {
        clue: "This term describes the style of play popularized by the 1989-90 Detroit Pistons — physical, bruising, and intimidating defense.",
        answer: "Bad Boys basketball",
        accept: ["bad boys basketball", "bad boys", "physical defense", "detroit style"],
        choices: ["Run and gun", "Showtime", "Triangle offense"],
        diff: 1
      },
      {
        clue: "When a player makes a deep shot from well beyond the 3-point line — like Damian Lillard does routinely — it's sometimes called a 'logo three' because it's near this on the court.",
        answer: "Center court logo",
        accept: ["center court logo", "half court logo", "logo", "center logo"],
        choices: ["The key", "The elbow", "The block"],
        diff: 1
      },
      {
        clue: "When a team wins a road game in the NBA Playoffs, it's called 'stealing' this.",
        answer: "Home court advantage",
        accept: ["home court advantage", "homecourt", "home court"],
        choices: ["A possession", "The series", "Momentum"],
        diff: 1
      },
      {
        clue: "The term for when a player raises both fists in celebration after sinking a big shot — popularized by Reggie Miller — is often called this kind of gesture.",
        answer: "Choke sign",
        accept: ["choke sign", "choking gesture", "throat slash"],
        choices: ["Shimmy", "Winding up", "The finger roll"],
        diff: 1
      },
      {
        clue: "In basketball, the '4-quarter lineup' strategy of switching to a smaller, faster defensive unit in the final period is called going to this.",
        answer: "Small ball",
        accept: ["small ball", "small lineup", "small ball lineup"],
        choices: ["Press defense", "Run-and-gun", "Box-and-one"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "The '3-and-D' player designation refers to a player who specializes in shooting 3-pointers and doing this on the other end.",
        answer: "Defense",
        accept: ["defense", "defending", "defending opponents"],
        choices: ["Drives to the basket", "Dictating tempo", "Dishing assists"],
        diff: 2
      },
      {
        clue: "This term — also the nickname of the ABA's signature ball — refers to when a player scores a basket by bouncing the ball off the backboard intentionally.",
        answer: "Bank shot",
        accept: ["bank shot", "banking it", "off the glass"],
        choices: ["Finger roll", "Floater", "Scoop shot"],
        diff: 2
      },
      {
        clue: "When a team is trailing by 3 or more points late in a game and intentionally fouling to stop the clock, this is commonly known as 'playing' this.",
        answer: "Foul to give",
        accept: ["foul to give", "fouling strategy", "intentional foul strategy"],
        choices: ["Box and one", "Full court press", "Zone defense"],
        diff: 2
      },
      {
        clue: "The phrase 'going to the rack' in basketball slang refers to attacking the basket for what type of shot?",
        answer: "Layup or dunk",
        accept: ["layup", "dunk", "layup or dunk", "driving to the basket"],
        choices: ["Mid-range jumper", "Free throw", "3-pointer"],
        diff: 2
      },
      {
        clue: "A 'Hail Mary' shot in basketball — typically a full-court heave at the buzzer — is also known by this food-themed nickname.",
        answer: "Prayer",
        accept: ["prayer", "a prayer", "full court prayer"],
        choices: ["Cheese ball", "Buzzer special", "The rainbow"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "The 'Mikan Drill' is a fundamental basketball exercise named after this Lakers legend, one of the first dominant big men in NBA history.",
        answer: "George Mikan",
        accept: ["george mikan", "mikan"],
        choices: ["Bob Pettit", "Dolph Schayes", "Easy Ed Macauley"],
        diff: 3
      },
      {
        clue: "In basketball analytics, 'PER' (Player Efficiency Rating) was invented by this ESPN writer and author.",
        answer: "John Hollinger",
        accept: ["john hollinger", "hollinger"],
        choices: ["Nate Silver", "Bill Simmons", "Kirk Goldsberry"],
        diff: 3
      },
      {
        clue: "The 'pace' metric in basketball analytics measures this on a per-game basis.",
        answer: "Possessions per 48 minutes",
        accept: ["possessions", "possessions per game", "possessions per 48 minutes", "number of possessions"],
        choices: ["Points scored per quarter", "Turnovers per game", "Assists per game"],
        diff: 3
      },
      {
        clue: "'Going under the screen' is a defensive technique used specifically to take away this type of shot.",
        answer: "3-pointer",
        accept: ["three pointer", "3 pointer", "the three", "long range shot"],
        choices: ["Floater", "Post move", "Alley-oop"],
        diff: 3
      },
      {
        clue: "A 'heat check' occurs when a player who is on a scoring roll takes a difficult, often ill-advised shot to test whether this continues.",
        answer: "Their hot streak",
        accept: ["hot streak", "the hot hand", "their momentum", "being hot"],
        choices: ["Their stamina", "Their defender's intensity", "The shot clock"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "The 'Elbow' in basketball refers to a specific spot on the court. Where is this location?",
        answer: "Junction of the free throw line and the lane",
        accept: ["junction of free throw line and lane", "corner of the key", "free throw line elbow", "where lane meets free throw line"],
        choices: ["The baseline corner", "The top of the 3-point arc", "The low post block"],
        diff: 4
      },
      {
        clue: "A 'dead cat bounce' in basketball analysis refers to a team that wins a game or two after a long losing streak, only to continue losing. This phrase is borrowed from what field?",
        answer: "Finance / stock market",
        accept: ["finance", "stock market", "wall street", "investing"],
        choices: ["Baseball sabermetrics", "Football analytics", "Physics"],
        diff: 4
      },
      {
        clue: "When a player is 'held to 50% from the line' in a Hack-a-Shaq situation, the efficiency threshold — points per possession — that the opposing team is trying to achieve is approximately this.",
        answer: "1.0",
        accept: ["1.0", "one", "1 point per possession"],
        choices: ["0.75", "1.25", "0.85"],
        diff: 4
      },
      {
        clue: "The basketball term 'closeout' refers specifically to when a defender must sprint toward a shooter to contest this type of shot.",
        answer: "Open 3-pointer",
        accept: ["open three", "3-pointer", "open shot", "perimeter shot"],
        choices: ["Post-up move", "Driving layup", "Backdoor cut"],
        diff: 4
      },
      {
        clue: "In the triangle offense — popularized by Phil Jackson and Tex Winter — the formation involves how many players arranged in a triangle on one side?",
        answer: "3",
        accept: ["three", "3"],
        choices: ["4", "2", "5"],
        diff: 4
      }
    ]
  },

  // Category 4: HALL OF FAMERS
  4: {
    100: [
      {
        clue: "Magic Johnson announced his HIV diagnosis and retirement from the NBA on this date in 1991.",
        answer: "November 7, 1991",
        accept: ["november 7 1991", "november 7th 1991", "november 1991"],
        choices: ["October 12, 1991", "December 3, 1991", "January 8, 1992"],
        diff: 1
      },
      {
        clue: "Charles Barkley won his only NBA MVP award in 1993 with the Phoenix Suns but famously never won this.",
        answer: "NBA championship",
        accept: ["nba championship", "an nba title", "a championship", "championship ring"],
        choices: ["Defensive Player of the Year", "Finals MVP", "All-Star MVP"],
        diff: 1
      },
      {
        clue: "Michael Jordan left the NBA in October 1993 to pursue a career in this sport, playing for the Birmingham Barons.",
        answer: "Baseball",
        accept: ["baseball", "minor league baseball"],
        choices: ["Golf", "Football", "Tennis"],
        diff: 1
      },
      {
        clue: "Giannis Antetokounmpo was born in Athens, Greece, to parents from this African nation.",
        answer: "Nigeria",
        accept: ["nigeria", "nigerian"],
        choices: ["Ghana", "Senegal", "Cameroon"],
        diff: 1
      },
      {
        clue: "Vince Carter was nicknamed 'Vinsanity' and 'Half Man Half Amazing' for his incredible dunking ability. He played an NBA-record 22 seasons, making him the only player in NBA history to do this.",
        answer: "Play in 4 decades",
        accept: ["play in four decades", "play in 4 decades", "four different decades"],
        choices: ["Win All-Star MVP in 3 decades", "Score 1000 points for 5 teams", "Play for 10 different franchises"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Paul Pierce earned his nickname 'The Truth' when Shaquille O'Neal said this after a game where Pierce went off on him.",
        answer: "He's the truth",
        accept: ["he's the truth", "paul pierce is the truth", "the truth"],
        choices: ["He's unguardable", "He's unstoppable", "He's the real deal"],
        diff: 2
      },
      {
        clue: "Michael Jordan's comeback from baseball was announced in a two-word press release in March 1995. What did it say?",
        answer: "I'm back",
        accept: ["i'm back", "im back"],
        choices: ["I'm ready", "I'm home", "I've returned"],
        diff: 2
      },
      {
        clue: "Nikola Jokic's true passion is not basketball but this activity, which he grew up doing in his hometown of Sombor, Serbia.",
        answer: "Horse racing",
        accept: ["horse racing", "horses", "harness racing"],
        choices: ["Soccer", "Farming", "Tennis"],
        diff: 2
      },
      {
        clue: "Patrick Ewing spent the majority of his career with the New York Knicks but retired without winning this.",
        answer: "An NBA championship",
        accept: ["an nba championship", "a title", "championship ring", "nba ring"],
        choices: ["An All-Star selection", "A scoring title", "Defensive Player of the Year"],
        diff: 2
      },
      {
        clue: "Reggie Miller's famous '8 points in 9 seconds' comeback against the Knicks happened during Game 1 of the 1995 Eastern Conference Semifinals at this arena.",
        answer: "Madison Square Garden",
        accept: ["madison square garden", "msg", "garden"],
        choices: ["Market Square Arena", "Conseco Fieldhouse", "Continental Airlines Arena"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Before being selected to the 1992 Dream Team, Charles Barkley had just been traded from this team to the Phoenix Suns.",
        answer: "Philadelphia 76ers",
        accept: ["philadelphia 76ers", "76ers", "sixers", "philadelphia"],
        choices: ["Houston Rockets", "New Jersey Nets", "Portland Trail Blazers"],
        diff: 3
      },
      {
        clue: "Giannis Antetokounmpo was selected 15th overall in the 2013 NBA Draft. He did not receive Greek citizenship until weeks before the draft due to Greece's citizenship laws based on this principle.",
        answer: "Jus sanguinis",
        accept: ["jus sanguinis", "bloodline citizenship", "ancestry-based citizenship", "jus sanguinis law"],
        choices: ["Jus soli", "Dual citizenship treaty", "Residency minimum requirement"],
        diff: 3
      },
      {
        clue: "Magic Johnson played in the 1992 NBA All-Star Game after announcing his retirement with HIV. He won the All-Star MVP with this stat line.",
        answer: "25 points, 9 assists",
        accept: ["25 points 9 assists", "25 and 9", "25 pts 9 ast"],
        choices: ["18 points, 12 assists", "30 points, 5 assists", "22 points, 11 assists"],
        diff: 3
      },
      {
        clue: "Patrick Ewing was selected first overall in the 1985 NBA Draft. This draft's lottery was surrounded by controversy, with some claiming the envelope for the Knicks was somehow cold or bent.",
        answer: "1985 NBA Draft lottery",
        accept: ["1985 nba draft lottery", "1985 draft lottery", "1985 lottery"],
        choices: ["1984 NBA Draft", "1986 NBA Draft lottery", "1987 NBA Draft"],
        diff: 3
      },
      {
        clue: "Reggie Miller and Spike Lee's rivalry began because Lee sat courtside and constantly taunted Miller. In that famous 1995 game, Miller scored 25 of his team's 39 fourth-quarter points with Lee jawing. What was the final Indiana margin of victory?",
        answer: "2 points",
        accept: ["2 points", "107-105", "two points"],
        choices: ["4 points", "1 point", "6 points"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Nikola Jokic famously told harness racing driver Tim Tetrick that if horse racing paid as well as basketball, he would do what?",
        answer: "Trade jobs with him",
        accept: ["trade jobs", "switch careers", "trade jobs with him in a heartbeat"],
        choices: ["Play for free", "Move back to Serbia", "Retire at 30"],
        diff: 4
      },
      {
        clue: "Giannis Antetokounmpo's father Charles and mother Veronica came from two different Nigerian ethnic groups. His father was Yoruba and his mother belongs to this group.",
        answer: "Igbo",
        accept: ["igbo", "ibo"],
        choices: ["Hausa", "Fulani", "Yoruba"],
        diff: 4
      },
      {
        clue: "Michael Jordan's baseball career with the Birmingham Barons in 1994 resulted in this batting average over 127 games.",
        answer: ".202",
        accept: [".202", "0.202", "202"],
        choices: [".256", ".178", ".231"],
        diff: 4
      },
      {
        clue: "Moses Malone won three MVP awards in his career. His first MVP came in 1979 with this team before his consecutive wins with Houston in 1982 and Philadelphia in 1983.",
        answer: "Houston Rockets",
        accept: ["houston rockets", "rockets"],
        choices: ["Buffalo Braves", "Atlanta Hawks", "Washington Bullets"],
        diff: 4
      },
      {
        clue: "Paul Pierce played his entire prime with the Boston Celtics and won his only title in 2008. He was drafted this high in the 1998 NBA Draft.",
        answer: "10th overall",
        accept: ["10th", "10", "tenth overall"],
        choices: ["7th overall", "13th overall", "5th overall"],
        diff: 4
      }
    ]
  },

  // Category 5: MODERN ERA
  5: {
    100: [
      {
        clue: "LeBron James announced on July 8, 2010, that he would take his talents to South Beach in a prime time ESPN special known as this.",
        answer: "The Decision",
        accept: ["the decision"],
        choices: ["The Announcement", "The Move", "The Reveal"],
        diff: 1
      },
      {
        clue: "Victor Wembanyama was selected by the San Antonio Spurs as the first overall pick in the 2023 NBA Draft. He was born in this country.",
        answer: "France",
        accept: ["france"],
        choices: ["Belgium", "Spain", "Germany"],
        diff: 1
      },
      {
        clue: "Caitlin Clark joined this WNBA team as the first overall pick of the 2024 WNBA Draft, instantly breaking attendance and viewership records.",
        answer: "Indiana Fever",
        accept: ["indiana fever", "fever"],
        choices: ["Las Vegas Aces", "New York Liberty", "Chicago Sky"],
        diff: 1
      },
      {
        clue: "Kevin Durant shocked the basketball world in July 2016 when he left the Oklahoma City Thunder to sign with this team.",
        answer: "Golden State Warriors",
        accept: ["golden state warriors", "warriors", "golden state"],
        choices: ["San Antonio Spurs", "Cleveland Cavaliers", "Boston Celtics"],
        diff: 1
      },
      {
        clue: "Anthony Edwards is the star player of this NBA franchise, drafted first overall in 2020.",
        answer: "Minnesota Timberwolves",
        accept: ["minnesota timberwolves", "timberwolves", "minnesota"],
        choices: ["Oklahoma City Thunder", "Sacramento Kings", "New Orleans Pelicans"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Caitlin Clark broke the WNBA single-season assist record in 2024, finishing with this many total assists.",
        answer: "317",
        accept: ["317", "three hundred seventeen"],
        choices: ["285", "298", "334"],
        diff: 2
      },
      {
        clue: "Victor Wembanyama's 2023-24 rookie season was historically unique — he averaged 21.4 PPG and 3.6 BPG. He also grabbed this many rebounds per game.",
        answer: "10.6",
        accept: ["10.6", "10.6 rebounds", "10.6 rpg"],
        choices: ["8.4", "9.1", "11.8"],
        diff: 2
      },
      {
        clue: "Ja Morant was selected by the Memphis Grizzlies as the 2nd overall pick in 2019 from this small college.",
        answer: "Murray State",
        accept: ["murray state", "murray state university"],
        choices: ["Gonzaga", "Butler", "Middle Tennessee"],
        diff: 2
      },
      {
        clue: "The Golden State Warriors won four titles in eight years (2015, 2017, 2018, 2022). Kevin Durant won back-to-back titles with them in these two consecutive years.",
        answer: "2017 and 2018",
        accept: ["2017 and 2018", "2017-2018", "2017, 2018"],
        choices: ["2015 and 2017", "2018 and 2022", "2015 and 2018"],
        diff: 2
      },
      {
        clue: "Isaiah Thomas of the 2016-17 Celtics was listed at only this height, making his 28.9 PPG average even more remarkable.",
        answer: "5'9\"",
        accept: ["5'9\"", "5 foot 9", "five nine", "5-9"],
        choices: ["6'0\"", "5'11\"", "6'1\""],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Caitlin Clark set a WNBA single-game assists record in 2024 with 19 helpers against this team.",
        answer: "Dallas Wings",
        accept: ["dallas wings", "wings"],
        choices: ["Seattle Storm", "Connecticut Sun", "Phoenix Mercury"],
        diff: 3
      },
      {
        clue: "Shai Gilgeous-Alexander won the 2024-25 MVP award. Before OKC drafted him 11th overall in 2018, he played college ball at this school.",
        answer: "Kentucky",
        accept: ["kentucky", "university of kentucky", "uk"],
        choices: ["Kansas", "UCLA", "Villanova"],
        diff: 3
      },
      {
        clue: "The Indianapolis Olympians and Rochester Royals played the longest game in NBA history — 6 overtimes — on January 6, 1951. The final score was this.",
        answer: "75-73",
        accept: ["75-73", "75 to 73"],
        choices: ["88-84", "69-65", "80-78"],
        diff: 3
      },
      {
        clue: "Anthony Edwards was selected first overall in the 2020 NBA Draft out of this university.",
        answer: "Georgia",
        accept: ["georgia", "university of georgia", "uga"],
        choices: ["Kentucky", "Duke", "Kansas"],
        diff: 3
      },
      {
        clue: "LeBron's 'The Decision' special on ESPN was watched by nearly this many viewers, making it the most-watched studio show in ESPN history.",
        answer: "10 million",
        accept: ["10 million", "nearly 10 million", "about 10 million"],
        choices: ["5 million", "15 million", "7 million"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Caitlin Clark's arrival with the Fever broke the previous WNBA home attendance record. The Fever averaged this many fans per home game in 2024.",
        answer: "17,035",
        accept: ["17035", "17,035", "over 17000", "about 17000"],
        choices: ["12,400", "14,800", "19,500"],
        diff: 4
      },
      {
        clue: "Kevin Durant signed with the Warriors on July 4, 2016, for a two-year deal worth this amount.",
        answer: "$54.3 million",
        accept: ["54.3 million", "$54.3 million", "54 million"],
        choices: ["$48 million", "$60 million", "$66 million"],
        diff: 4
      },
      {
        clue: "Victor Wembanyama's wingspan is listed at 8 feet, making him potentially the longest wingspan in NBA history. His standing reach is approximately this.",
        answer: "10'2\"",
        accept: ["10'2\"", "10 feet 2 inches", "10-2", "over 10 feet"],
        choices: ["9'8\"", "9'10\"", "10'5\""],
        diff: 4
      },
      {
        clue: "Giannis Antetokounmpo did not receive Greek citizenship until May 9, 2013 — just weeks before the NBA Draft. Before that year, which of these was true of his status?",
        answer: "He was effectively stateless",
        accept: ["stateless", "effectively stateless", "had no citizenship", "no papers"],
        choices: ["He had dual Greek-Nigerian citizenship", "He was a Nigerian citizen", "He had a Greek resident visa only"],
        diff: 4
      },
      {
        clue: "The 1951 six-overtime game saw both teams score only this many combined points in the second overtime period.",
        answer: "0",
        accept: ["zero", "0", "none"],
        choices: ["2", "4", "6"],
        diff: 4
      }
    ]
  }
};

const BASKETBALL_EXTRA_FINALS = [
  {
    category: "NBA CHAMPIONSHIPS",
    clue: "The 1992 Dream Team's only non-NBA player was Christian Laettner, included as a nod to the tradition of college-only Olympic teams. Of the other 11, all eventually earned this honor.",
    answer: "Hall of Fame induction",
    accept: ["hall of fame", "inducted into the hall of fame", "naismith hall of fame"]
  },
  {
    category: "SCORING LEGENDS",
    clue: "Moses Malone predicted the 1983 Sixers would win in sweeps of all three rounds — 'Fo, Fo, Fo.' They nearly did, finishing 12-1. Malone averaged 26 PPG and this many rebounds per game in the Finals.",
    answer: "18",
    accept: ["18", "eighteen", "18 rebounds"]
  },
  {
    category: "NBA RECORDS",
    clue: "The Indianapolis Olympians played the longest game in NBA history on January 6, 1951, defeating the Rochester Royals 75-73 in six overtimes. Both teams failed to score in the second overtime — an almost unimaginable feat given that the game was played before the invention of this.",
    answer: "The shot clock",
    accept: ["shot clock", "the shot clock", "24-second shot clock"]
  },
  {
    category: "HALL OF FAMERS",
    clue: "Reggie Miller's 'Choke' gesture at Spike Lee after scoring 8 points in 9 seconds in Game 1 of the 1995 ECF became iconic. Miller's Pacers were down by this many points before the comeback began.",
    answer: "6",
    accept: ["six", "6", "six points"]
  },
  {
    category: "MODERN ERA",
    clue: "Victor Wembanyama became only the second player in NBA history to average at least 20 points, 10 rebounds, and 3 blocks per game in a single season as a rookie. He won the 2023-24 Rookie of the Year unanimously. The first player to average those stats in a season was this Hall of Famer.",
    answer: "Kareem Abdul-Jabbar",
    accept: ["kareem abdul-jabbar", "kareem", "lew alcindor"]
  }
];

// Extra NHL Hockey Trivia Questions
// 120 questions across 6 categories, 4 tiers, 5 questions each
// All facts verified via web search

