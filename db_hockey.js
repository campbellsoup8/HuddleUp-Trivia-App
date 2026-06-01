// HuddleUp Trivia � Hockey Question Database

const HOCKEY_Q = {
  0: { // STANLEY CUP HISTORY
    100: [
      { clue: "This Canadian team holds the record for most Stanley Cup championships with 24 titles.", answer: "Montreal Canadiens", accept: ["montreal canadiens", "canadiens", "montreal", "habs"], choices: ["Toronto Maple Leafs", "Detroit Red Wings", "Boston Bruins"], diff: 1 },
      { clue: "The Pittsburgh Penguins won back-to-back Stanley Cups in 2016 and 2017, captained by this player.", answer: "Sidney Crosby", accept: ["sidney crosby", "crosby", "sid crosby", "sid the kid"], choices: ["Evgeni Malkin", "Marc-Andre Fleury", "Kris Letang"], diff: 2 },
      { clue: "Alex Ovechkin captained this team to their first Stanley Cup title in 2018.", answer: "Washington Capitals", accept: ["washington capitals", "capitals", "washington", "caps"], choices: ["Columbus Blue Jackets", "Nashville Predators", "Vegas Golden Knights"], diff: 1 },
      { clue: "The Edmonton Oilers won 5 Stanley Cups in 7 years (1984-1990). Wayne Gretzky led how many of those championships?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 3 }
    ],
    200: [
      { clue: "The Toronto Maple Leafs last won the Stanley Cup in what year?", answer: "1967", accept: ["1967"], choices: ["1972", "1955", "1978"], diff: 2 },
      { clue: "The Tampa Bay Lightning won back-to-back Stanley Cups in what two consecutive years?", answer: "2020 and 2021", accept: ["2020 and 2021", "2020 & 2021", "2020-2021"], choices: ["2018 and 2019", "2019 and 2020", "2021 and 2022"], diff: 1 },
      { clue: "The Florida Panthers won the 2024 Stanley Cup in a 7-game series against which team?", answer: "Edmonton Oilers", accept: ["edmonton oilers", "oilers", "edmonton"], choices: ["New York Rangers", "Carolina Hurricanes", "Vancouver Canucks"], diff: 1 },
      { clue: "The New York Islanders won 4 consecutive Stanley Cups from 1980 to 1983. Who was their star right wing during this dynasty?", answer: "Mike Bossy", accept: ["mike bossy", "bossy"], choices: ["Bryan Trottier", "Denis Potvin", "Clark Gillies"], diff: 3 }
    ],
    300: [
      { clue: "The Detroit Red Wings won 4 Stanley Cups in 11 years, earning the nickname 'Hockeytown.' How many Cups did they win?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "6"], diff: 2 },
      { clue: "Colorado Avalanche won the 2022 Stanley Cup, defeating the Tampa Bay Lightning. How many games did the series last?", answer: "6", accept: ["6", "six", "6 games"], choices: ["4", "5", "7"], diff: 2 },
      { clue: "The Detroit Red Wings' four Stanley Cup titles in 11 years came in what years?", answer: "1997, 1998, 2002, 2008", accept: ["1997 1998 2002 2008", "97 98 02 08"], choices: ["1995, 1997, 1999, 2002", "1996, 1998, 2001, 2004", "1997, 1999, 2002, 2006"], diff: 3 },
      { clue: "Wayne Gretzky was traded from the Edmonton Oilers to which team in 1988, ending the dynasty?", answer: "Los Angeles Kings", accept: ["los angeles kings", "kings", "la kings"], choices: ["New York Rangers", "St. Louis Blues", "Detroit Red Wings"], diff: 2 }
    ],
    400: [
      { clue: "Which team won the 2018 Stanley Cup for the first time in franchise history, with Alex Ovechkin as captain?", answer: "Washington Capitals", accept: ["washington capitals", "capitals", "washington", "caps"], choices: ["Vegas Golden Knights", "Nashville Predators", "Pittsburgh Penguins"], diff: 1 },
      { clue: "The Montreal Canadiens have the most Stanley Cup wins with 24. Which team is second all-time in Cup wins?", answer: "Toronto Maple Leafs", accept: ["toronto maple leafs", "maple leafs", "toronto", "leafs"], choices: ["Detroit Red Wings", "Boston Bruins", "Edmonton Oilers"], diff: 2 },
      { clue: "Edmonton Oilers won 5 Stanley Cups from 1984 to 1990. After Gretzky was traded, who led their 1990 championship?", answer: "Mark Messier", accept: ["mark messier", "messier"], choices: ["Glenn Anderson", "Jari Kurri", "Paul Coffey"], diff: 3 },
      { clue: "The Colorado Avalanche won their first Stanley Cup in 1996. Who was their star center and eventual Hall of Famer?", answer: "Joe Sakic", accept: ["joe sakic", "sakic"], choices: ["Peter Forsberg", "Patrick Roy", "Sandis Ozolinsh"], diff: 3 }
    ]
  },
  1: { // SCORING LEGENDS
    100: [
      { clue: "Known as 'The Great One,' this player holds virtually every major NHL offensive record.", answer: "Wayne Gretzky", accept: ["wayne gretzky", "gretzky", "the great one"], choices: ["Mario Lemieux", "Gordie Howe", "Bobby Hull"], diff: 1 },
      { clue: "Wayne Gretzky's career goals total is 894. Remarkably, his assists alone (1,963) exceed any other player's total what?", answer: "Points", accept: ["points", "total points", "career points"], choices: ["Goals", "Assists", "Games played"], diff: 1 },
      { clue: "Mario Lemieux scored 199 points in a single season (1988-89), the second most ever. Who scored more in a single season?", answer: "Wayne Gretzky", accept: ["wayne gretzky", "gretzky", "the great one"], choices: ["Gordie Howe", "Mike Bossy", "Brett Hull"], diff: 2 },
      { clue: "Gordie Howe played professionally into his 50s and scored how many career NHL goals?", answer: "801", accept: ["801", "eight hundred one"], choices: ["741", "894", "731"], diff: 4 }
    ],
    200: [
      { clue: "Wayne Gretzky set the single-season goals record with how many goals in 1981-82?", answer: "92", accept: ["92", "ninety-two", "ninety two"], choices: ["76", "87", "99"], diff: 2 },
      { clue: "Mike Bossy was the first player to score 50 goals in 50 games. What season did he accomplish this?", answer: "1980-81", accept: ["1980-81", "1980-1981", "1981"], choices: ["1977-78", "1983-84", "1978-79"], diff: 3 },
      { clue: "Jaromir Jagr played professional hockey until age 45 and finished his NHL career with 766 goals. Which team did he famously play for first?", answer: "Pittsburgh Penguins", accept: ["pittsburgh penguins", "penguins", "pittsburgh"], choices: ["New York Rangers", "Washington Capitals", "New Jersey Devils"], diff: 2 },
      { clue: "Wayne Gretzky's single-season points record of 215 was set in what season?", answer: "1985-86", accept: ["1985-86", "1985-1986", "1986"], choices: ["1981-82", "1983-84", "1987-88"], diff: 4 }
    ],
    300: [
      { clue: "Who holds the record for third-most career NHL goals with 741?", answer: "Brett Hull", accept: ["brett hull", "hull", "brett"], choices: ["Jaromir Jagr", "Marcel Dionne", "Phil Esposito"], diff: 3 },
      { clue: "Mario Lemieux is widely considered the only real rival to Gretzky as the best player ever. How many Stanley Cups did Lemieux win?", answer: "2", accept: ["2", "two"], choices: ["1", "3", "4"], diff: 2 },
      { clue: "Mike Bossy scored 50 or more goals in how many consecutive NHL seasons?", answer: "9", accept: ["9", "nine"], choices: ["7", "8", "10"], diff: 3 },
      { clue: "Wayne Gretzky's career points total is 2,857. Mario Lemieux is second all-time with how many career points?", answer: "1,723", accept: ["1723", "1,723"], choices: ["1,492", "1,850", "2,012"], diff: 4 }
    ],
    400: [
      { clue: "Gordie Howe's nickname was 'Mr. Hockey.' In how many professional decades did he play?", answer: "5", accept: ["5", "five"], choices: ["3", "4", "6"], diff: 3 },
      { clue: "Wayne Gretzky scored 92 goals in 1981-82. How many more goals did he score than the previous single-season record?", answer: "16", accept: ["16", "sixteen"], choices: ["10", "20", "25"], diff: 3 },
      { clue: "Brett Hull's father Bobby Hull also had a legendary NHL career. What was Bobby Hull's famous nickname?", answer: "The Golden Jet", accept: ["the golden jet", "golden jet"], choices: ["The Rocket", "The Boomer", "The Golden Goal"], diff: 2 },
      { clue: "Mario Lemieux overcame a serious illness and returned to play at an elite level. What illness did he battle?", answer: "Hodgkin's lymphoma", accept: ["hodgkin's lymphoma", "hodgkins lymphoma", "lymphoma", "cancer"], choices: ["Leukemia", "Prostate cancer", "Heart disease"], diff: 2 }
    ]
  },
  2: { // NHL RECORDS
    100: [
      { clue: "Martin Brodeur of the New Jersey Devils holds the NHL record for most career wins by a goaltender with how many?", answer: "691", accept: ["691", "six hundred ninety one"], choices: ["543", "612", "724"], diff: 3 },
      { clue: "Wayne Gretzky won how many Hart Trophies (MVP awards), the most in NHL history?", answer: "9", accept: ["9", "nine"], choices: ["6", "7", "11"], diff: 2 },
      { clue: "Tiger Williams holds the all-time record for career penalty minutes. How many penalty minutes did he accumulate?", answer: "3,966", accept: ["3966", "3,966"], choices: ["2,819", "4,421", "3,212"], diff: 3 },
      { clue: "Glenn Hall set the record for most consecutive goaltender starts (502 games) playing without what piece of equipment?", answer: "A mask", accept: ["a mask", "mask", "goalie mask", "face mask"], choices: ["Blocker", "Leg pads", "Chest protector"], diff: 2 }
    ],
    200: [
      { clue: "Martin Brodeur also holds the record for most career shutouts with how many?", answer: "125", accept: ["125", "one hundred twenty five"], choices: ["98", "112", "141"], diff: 3 },
      { clue: "Wayne Gretzky holds the record for most career playoff points. How many playoff points did he accumulate?", answer: "382", accept: ["382", "three hundred eighty two"], choices: ["294", "341", "421"], diff: 4 },
      { clue: "Wayne Gretzky holds the record for most assists in a single season with 163. What season was this?", answer: "1985-86", accept: ["1985-86", "1985-1986", "1986"], choices: ["1981-82", "1983-84", "1987-88"], diff: 4 },
      { clue: "The NHL record for most goals in a season (92) was set by Wayne Gretzky. Who held the record before Gretzky?", answer: "Phil Esposito", accept: ["phil esposito", "esposito"], choices: ["Bobby Hull", "Gordie Howe", "Marcel Dionne"], diff: 3 }
    ],
    300: [
      { clue: "Wayne Gretzky's career point total of 2,857 is an NHL record. Approximately how many points ahead of second place (Lemieux) is this?", answer: "Over 1,100 points", accept: ["over 1100", "1134", "1,134", "more than 1000"], choices: ["About 500 points", "About 750 points", "About 2,000 points"], diff: 2 },
      { clue: "Who scored the most goals in the 2023-24 NHL season with 144 points, the most since Mario Lemieux?", answer: "Nikita Kucherov", accept: ["nikita kucherov", "kucherov", "nikita"], choices: ["Nathan MacKinnon", "Connor McDavid", "David Pastrnak"], diff: 2 },
      { clue: "Which goaltender set the record for most career shutouts (125) and most career wins (691)?", answer: "Martin Brodeur", accept: ["martin brodeur", "brodeur"], choices: ["Patrick Roy", "Terry Sawchuk", "Ken Dryden"], diff: 2 },
      { clue: "The record for most Hart Trophies (9) is held by Wayne Gretzky. Who is second all-time in Hart Trophy wins with 3?", answer: "Gordie Howe", accept: ["gordie howe", "howe", "mr hockey"], choices: ["Mario Lemieux", "Bobby Orr", "Sidney Crosby"], diff: 3 }
    ],
    400: [
      { clue: "Wayne Gretzky's jersey number (#99) was retired league-wide by the NHL. What year was this announced?", answer: "1999", accept: ["1999"], choices: ["1997", "2000", "2002"], diff: 2 },
      { clue: "Auston Matthews became the first player since Mario Lemieux (1995-96) to score 60 goals in a season. How many goals did Matthews score in 2021-22?", answer: "60", accept: ["60", "sixty"], choices: ["55", "58", "63"], diff: 2 },
      { clue: "Bobby Orr won the Norris Trophy (best defenseman) 8 consecutive times. Which NHL team did he play for?", answer: "Boston Bruins", accept: ["boston bruins", "bruins", "boston"], choices: ["Montreal Canadiens", "Chicago Blackhawks", "New York Rangers"], diff: 2 },
      { clue: "Glenn Hall's record of 502 consecutive goaltender starts was remarkable. Approximately how many seasons did this span?", answer: "7 seasons", accept: ["7 seasons", "7", "seven", "seven seasons"], choices: ["5 seasons", "10 seasons", "12 seasons"], diff: 3 }
    ]
  },
  3: { // HOCKEY LINGO
    100: [
      { clue: "In hockey, what is a 'hat trick'?", answer: "Three goals in one game by one player", accept: ["hat trick", "three goals", "3 goals in one game"], choices: ["A behind-the-back pass", "A penalty shot", "A shutout"], diff: 1 },
      { clue: "What is the 'Zamboni'?", answer: "The machine that resurfaces the ice between periods", accept: ["zamboni", "ice resurfacing machine", "machine that cleans the ice"], choices: ["A defensive formation", "A type of goalie pad", "An overtime format"], diff: 1 },
      { clue: "In hockey lingo, what does 'five-hole' refer to?", answer: "The gap between a goalie's legs", accept: ["five-hole", "five hole", "between the goalie's legs", "goalie's legs"], choices: ["The top left corner of the net", "A wrap-around shot", "The area above the goalie's glove"], diff: 2 },
      { clue: "What is a 'Gordie Howe hat trick'?", answer: "One goal, one assist, and one fight in the same game", accept: ["one goal one assist one fight", "goal assist fight", "gordie howe hat trick"], choices: ["Three goals in overtime", "A hat trick plus two assists", "Two goals and an assist"], diff: 3 }
    ],
    200: [
      { clue: "What is the 'sin bin' in hockey?", answer: "The penalty box", accept: ["penalty box", "sin bin", "the box"], choices: ["The goal crease", "The bench area", "The locker room"], diff: 1 },
      { clue: "What is a 'power play' in hockey?", answer: "When one team has a man advantage due to an opponent's penalty", accept: ["power play", "man advantage", "when team has extra skater"], choices: ["A penalty shot attempt", "A delayed penalty", "An overtime period"], diff: 1 },
      { clue: "What is 'icing' in hockey?", answer: "When a player shoots the puck from behind center ice and it crosses the opponent's goal line untouched", accept: ["icing", "shooting puck from behind center ice to goal line untouched"], choices: ["When a player trips an opponent from behind", "When the puck goes over the boards", "When the goalie holds the puck too long"], diff: 2 },
      { clue: "What does 'top shelf' mean when used in hockey?", answer: "Shooting the puck into the upper portion of the net", accept: ["top shelf", "upper portion of the net", "high shot into net"], choices: ["A cross-ice pass", "A shot off the post", "A one-timer"], diff: 2 }
    ],
    300: [
      { clue: "In hockey lingo, what is the 'biscuit'?", answer: "The puck", accept: ["puck", "the puck", "biscuit"], choices: ["The hockey stick", "The goal post", "The net"], diff: 1 },
      { clue: "What does 'offsides' mean in hockey?", answer: "When an attacking player crosses the blue line before the puck", accept: ["offsides", "attacking player crosses blue line before puck"], choices: ["When a player trips someone from behind", "When more than 6 skaters are on ice", "When a goalie leaves the crease"], diff: 1 },
      { clue: "A 'deke' in hockey is a move to fake out a goalie or defender. What is 'deke' short for?", answer: "Decoy", accept: ["decoy"], choices: ["Deflection", "Deceptive kick", "Dead-end kick"], diff: 3 },
      { clue: "What is a 'penalty kill' in hockey?", answer: "When the defending team is short-handed while the opponent is on a power play", accept: ["penalty kill", "when team is shorthanded", "killing a penalty"], choices: ["A final-second goal to win the game", "Pulling the goalie for an extra attacker", "A goaltender interference call"], diff: 2 }
    ],
    400: [
      { clue: "In hockey, what does 'going bar down' mean?", answer: "When the puck hits the crossbar and goes down into the net for a goal", accept: ["hits the crossbar and goes in", "bar down", "off the crossbar into the net"], choices: ["A slap shot on the power play", "A penalty shot attempt", "A wrap-around goal"], diff: 2 },
      { clue: "In hockey lingo, what is a 'beauty'?", answer: "A compliment for a great play or a skilled player", accept: ["beauty", "a great play", "a skilled player", "compliment"], choices: ["A clean hit", "A shutout", "A hat trick"], diff: 2 },
      { clue: "What does 'cycling the puck' mean in hockey?", answer: "Keeping possession by moving the puck in a circular pattern in the offensive zone", accept: ["cycling", "keeping possession in offensive zone", "moving puck in circles"], choices: ["Icing the puck intentionally", "Passing the puck around the perimeter", "A defensive clearing strategy"], diff: 2 },
      { clue: "What is a 'Michigan goal' (also called a 'lacrosse goal') in hockey?", answer: "A goal where a player lifts the puck on their stick and tucks it into the net from behind the goal", accept: ["michigan goal", "lacrosse goal", "tucking puck in from behind goal", "puck on stick behind net"], choices: ["A goal scored from center ice", "A goal off a penalty shot", "A goal in triple overtime"], diff: 3 }
    ]
  },
  4: { // HALL OF FAMERS
    100: [
      { clue: "Wayne Gretzky's jersey #99 is the only one retired league-wide in the NHL. What is his nickname?", answer: "The Great One", accept: ["the great one", "great one"], choices: ["The Golden Jet", "Mr. Hockey", "The Dream"], diff: 1 },
      { clue: "Bobby Orr revolutionized the defenseman position and won 8 consecutive Norris Trophies. For which team did he play?", answer: "Boston Bruins", accept: ["boston bruins", "bruins", "boston"], choices: ["Montreal Canadiens", "Toronto Maple Leafs", "Detroit Red Wings"], diff: 2 },
      { clue: "Patrick Roy, known as 'Saint Patrick,' won 4 Stanley Cups and 3 Conn Smythe Trophies. He is famous for transforming what position?", answer: "Goaltending", accept: ["goaltending", "goalie", "goaltender"], choices: ["Defense", "Left wing", "Center"], diff: 2 },
      { clue: "Nicklas Lidstrom won 7 Norris Trophies (best defenseman award) and 4 Stanley Cups. For which team did he play?", answer: "Detroit Red Wings", accept: ["detroit red wings", "red wings", "detroit"], choices: ["Boston Bruins", "New York Rangers", "Philadelphia Flyers"], diff: 2 }
    ],
    200: [
      { clue: "Gordie Howe's nickname is 'Mr. Hockey.' How many Hart Trophies (MVP) did he win during his career?", answer: "6", accept: ["6", "six"], choices: ["4", "5", "7"], diff: 3 },
      { clue: "Steve Yzerman led the Detroit Red Wings to 3 Stanley Cups (1997, 1998, 2002) and later became the GM of which NHL team?", answer: "Tampa Bay Lightning", accept: ["tampa bay lightning", "lightning", "tampa bay", "tampa"], choices: ["Detroit Red Wings", "Ottawa Senators", "Florida Panthers"], diff: 2 },
      { clue: "Bobby Hull was the first player to score 50 goals in a single NHL season. He later jumped to a rival league in 1972. What was that league?", answer: "WHA", accept: ["wha", "world hockey association"], choices: ["AHL", "IHL", "WJHL"], diff: 3 },
      { clue: "Patrick Roy won the Stanley Cup with two different franchises. The Montreal Canadiens was one — name the other.", answer: "Colorado Avalanche", accept: ["colorado avalanche", "avalanche", "colorado"], choices: ["Toronto Maple Leafs", "Boston Bruins", "Detroit Red Wings"], diff: 2 }
    ],
    300: [
      { clue: "Mario Lemieux won 2 Stanley Cups and 3 Hart Trophies. He overcame which serious illness during his playing career?", answer: "Hodgkin's lymphoma", accept: ["hodgkin's lymphoma", "hodgkins lymphoma", "lymphoma", "cancer"], choices: ["Leukemia", "Diabetes", "Heart disease"], diff: 2 },
      { clue: "Gordie Howe was known for his toughness and played in 5 decades. What was unique about his final professional season?", answer: "He was 52 years old", accept: ["he was 52", "played at 52", "played into his 50s", "played in his 50s"], choices: ["He played with his son", "He was the oldest player ever at 65", "He came back after a 10-year retirement"], diff: 2 },
      { clue: "Bobby Orr won 2 Stanley Cups with the Boston Bruins. How many consecutive Norris Trophies (best defenseman) did he win?", answer: "8", accept: ["8", "eight"], choices: ["5", "6", "10"], diff: 3 },
      { clue: "Wayne Gretzky won 4 Stanley Cups, all with which team?", answer: "Edmonton Oilers", accept: ["edmonton oilers", "oilers", "edmonton"], choices: ["Los Angeles Kings", "New York Rangers", "Calgary Flames"], diff: 2 }
    ],
    400: [
      { clue: "Which Hall of Famer has won the most Hart Trophies (MVP) in NHL history, with 9?", answer: "Wayne Gretzky", accept: ["wayne gretzky", "gretzky", "the great one"], choices: ["Gordie Howe", "Mario Lemieux", "Bobby Orr"], diff: 1 },
      { clue: "Nicklas Lidstrom is considered one of the greatest defensemen ever. How many Norris Trophies did he win?", answer: "7", accept: ["7", "seven"], choices: ["4", "5", "9"], diff: 3 },
      { clue: "Steve Yzerman captained the Detroit Red Wings for how many years before winning his first Stanley Cup?", answer: "14", accept: ["14", "fourteen"], choices: ["10", "12", "16"], diff: 3 },
      { clue: "Bobby Hull's son Brett Hull also became a star in the NHL and scored 741 career goals. For which team is Brett most famous?", answer: "St. Louis Blues", accept: ["st. louis blues", "st louis blues", "blues", "st. louis"], choices: ["Detroit Red Wings", "Dallas Stars", "Chicago Blackhawks"], diff: 2 }
    ]
  },
  5: { // MODERN ERA
    100: [
      { clue: "Alex Ovechkin surpassed Wayne Gretzky's all-time goals record in 2024. What goal number broke the record?", answer: "895", accept: ["895", "goal 895", "eight hundred ninety five"], choices: ["881", "900", "910"], diff: 2 },
      { clue: "Sidney Crosby has won 3 Stanley Cups, all with which team?", answer: "Pittsburgh Penguins", accept: ["pittsburgh penguins", "penguins", "pittsburgh"], choices: ["Washington Capitals", "Boston Bruins", "Tampa Bay Lightning"], diff: 1 },
      { clue: "Connor McDavid is known as the fastest skater in the NHL. He plays for which team?", answer: "Edmonton Oilers", accept: ["edmonton oilers", "oilers", "edmonton"], choices: ["Colorado Avalanche", "Toronto Maple Leafs", "Vegas Golden Knights"], diff: 2 },
      { clue: "Auston Matthews scored 60 goals in 2021-22, the first player to do so since Mario Lemieux in 1995-96. Matthews plays for which team?", answer: "Toronto Maple Leafs", accept: ["toronto maple leafs", "maple leafs", "toronto", "leafs"], choices: ["Montreal Canadiens", "Ottawa Senators", "Buffalo Sabres"], diff: 2 }
    ],
    200: [
      { clue: "Nathan MacKinnon won the Hart Trophy in 2024 and led which team to the 2022 Stanley Cup?", answer: "Colorado Avalanche", accept: ["colorado avalanche", "avalanche", "colorado"], choices: ["Minnesota Wild", "Nashville Predators", "Arizona Coyotes"], diff: 1 },
      { clue: "Nikita Kucherov won 2 Stanley Cups with which team?", answer: "Tampa Bay Lightning", accept: ["tampa bay lightning", "lightning", "tampa bay", "tampa"], choices: ["Florida Panthers", "Boston Bruins", "New York Islanders"], diff: 2 },
      { clue: "Leon Draisaitl won the Hart Trophy in 2020 and is the star linemate of Connor McDavid on which team?", answer: "Edmonton Oilers", accept: ["edmonton oilers", "oilers", "edmonton"], choices: ["Calgary Flames", "Winnipeg Jets", "Vancouver Canucks"], diff: 2 },
      { clue: "Connor McDavid won the Hart Trophy in 2017 and 2023. How many Art Ross Trophies (scoring titles) had he won through 2024?", answer: "3", accept: ["3", "three"], choices: ["2", "4", "5"], diff: 3 }
    ],
    300: [
      { clue: "Alex Ovechkin has won how many Maurice Richard Trophies (top goal scorer award), the most ever?", answer: "8", accept: ["8", "eight"], choices: ["5", "6", "9"], diff: 3 },
      { clue: "David Pastrnak of the Boston Bruins scored 61 goals in 2022-23. Which country is Pastrnak from?", answer: "Czech Republic", accept: ["czech republic", "czechia", "czech"], choices: ["Sweden", "Finland", "Russia"], diff: 2 },
      { clue: "Nikita Kucherov scored 144 points in 2023-24. This was the most single-season points since which legendary player?", answer: "Mario Lemieux", accept: ["mario lemieux", "lemieux"], choices: ["Wayne Gretzky", "Steve Yzerman", "Jaromir Jagr"], diff: 2 },
      { clue: "Sidney Crosby won 2 Conn Smythe Trophies as playoff MVP. What year was his first Stanley Cup win?", answer: "2009", accept: ["2009"], choices: ["2007", "2011", "2013"], diff: 2 }
    ],
    400: [
      { clue: "Connor McDavid led the Edmonton Oilers to the 2024 Stanley Cup Finals. Who did they face?", answer: "Florida Panthers", accept: ["florida panthers", "panthers", "florida"], choices: ["New York Rangers", "Dallas Stars", "Vancouver Canucks"], diff: 1 },
      { clue: "Alex Ovechkin surpassed Wayne Gretzky's all-time goals record in 2024. In what city did he score goal #895?", answer: "Stockholm, Sweden", accept: ["stockholm", "sweden", "stockholm sweden"], choices: ["Washington D.C.", "Montreal", "Helsinki"], diff: 3 },
      { clue: "Nathan MacKinnon won the Hart Trophy in 2024. He plays on a line with Mikko Rantanen and which other Avalanche forward?", answer: "Gabriel Landeskog", accept: ["gabriel landeskog", "landeskog"], choices: ["J.T. Compher", "Valeri Nichushkin", "Andrew Cogliano"], diff: 3 },
      { clue: "Sidney Crosby has won 3 Hart Trophies (NHL MVP). Name the 3 years he won the award.", answer: "2007, 2014, 2022", accept: ["2007 2014 2022", "2007, 2014, 2022"], choices: ["2007, 2009, 2016", "2009, 2016, 2021", "2007, 2013, 2019"], diff: 3 }
    ]
  }
};

const HOCKEY_FINALS = [
  { category: "STANLEY CUP HISTORY", clue: "The Edmonton Oilers won 5 Stanley Cups from 1984 to 1990. Wayne Gretzky was traded away in 1988, yet they won one more Cup in 1990. Who captained that final championship?", answer: "Mark Messier", accept: ["mark messier", "messier"] },
  { category: "SCORING LEGENDS", clue: "Wayne Gretzky's career points total of 2,857 is so far ahead of second place that even removing all his goals, his assists alone would make him the all-time points leader. How many career assists did Gretzky record?", answer: "1,963", accept: ["1963", "1,963"] },
  { category: "HALL OF FAMERS", clue: "Bobby Orr revolutionized the defenseman position by doing something no defenseman had done before — he won this individual award, typically given to forwards, in both 1970 and 1971.", answer: "Art Ross Trophy", accept: ["art ross trophy", "art ross", "scoring title", "points title"] },
  { category: "MODERN ERA", clue: "Alex Ovechkin broke Wayne Gretzky's all-time goals record of 894 in 2024. In what year did Gretzky originally set that record as a final career milestone?", answer: "1999", accept: ["1999"] }
];

const HOCKEY_EXTRA = {
  // CATEGORY 0: STANLEY CUP HISTORY
  0: {
    100: [
      {
        clue: "The first NHL games were played on December 19 of this year.",
        answer: "1917",
        accept: ["1917"],
        choices: ["1910", "1920", "1925"],
        diff: 1
      },
      {
        clue: "These six teams made up the NHL from 1942-43 through 1966-67: Bruins, Blackhawks, Red Wings, Rangers, Maple Leafs, and this Canadian franchise.",
        answer: "Montreal Canadiens",
        accept: ["montreal canadiens", "canadiens", "montreal"],
        choices: ["Ottawa Senators", "Quebec Nordiques", "Winnipeg Jets"],
        diff: 1
      },
      {
        clue: "Mark Messier scored a third-period hat trick in Game 6 of the 1994 Eastern Conference Final after guaranteeing victory against this opponent.",
        answer: "New Jersey Devils",
        accept: ["new jersey devils", "the devils", "new jersey"],
        choices: ["Philadelphia Flyers", "Boston Bruins", "Washington Capitals"],
        diff: 1
      },
      {
        clue: "The 2004-05 NHL season was cancelled due to a labor dispute, making it the first North American major sports league to cancel an entire season this way.",
        answer: "Gary Bettman",
        accept: ["gary bettman", "bettman"],
        choices: ["Bob Goodenow", "Bill Daly", "John Ziegler"],
        diff: 1
      },
      {
        clue: "Jonathan Toews won the Conn Smythe Trophy as playoff MVP when the Chicago Blackhawks won their first Stanley Cup since 1961 in this year.",
        answer: "2010",
        accept: ["2010"],
        choices: ["2008", "2013", "2015"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Ken Dryden won this many Stanley Cup championships during his career with the Montreal Canadiens, including four consecutive from 1976-1979.",
        answer: "six",
        accept: ["six", "6"],
        choices: ["Four", "Five", "Seven"],
        diff: 2
      },
      {
        clue: "The 2008 NHL Winter Classic — the league's inaugural outdoor game in the United States — was held at Ralph Wilson Stadium in Buffalo and won in a shootout by this team.",
        answer: "Pittsburgh Penguins",
        accept: ["pittsburgh penguins", "penguins", "pittsburgh"],
        choices: ["Buffalo Sabres", "New York Rangers", "Philadelphia Flyers"],
        diff: 2
      },
      {
        clue: "Jonathan Toews and Patrick Kane combined to lead the Blackhawks to Stanley Cup titles in 2010, 2013, and this year.",
        answer: "2015",
        accept: ["2015"],
        choices: ["2016", "2014", "2017"],
        diff: 2
      },
      {
        clue: "In the legendary 1994 Eastern Conference Final, Messier's Game 6 hat trick led to a Rangers Game 7 win on Stephane Matteau's goal in this overtime period.",
        answer: "double overtime",
        accept: ["double overtime", "second overtime", "2ot"],
        choices: ["Single overtime", "Triple overtime", "Third overtime"],
        diff: 2
      },
      {
        clue: "Bryan Trottier won the Conn Smythe Trophy as playoff MVP when the Islanders won their first of four consecutive Stanley Cups in this year.",
        answer: "1980",
        accept: ["1980"],
        choices: ["1979", "1981", "1982"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "The longest game in NHL history lasted 116 minutes and 30 seconds of overtime in 1936, decided by a goal from this Detroit Red Wings rookie.",
        answer: "Mud Bruneteau",
        accept: ["mud bruneteau", "bruneteau"],
        choices: ["Syd Howe", "Larry Aurie", "Ebbie Goodfellow"],
        diff: 3
      },
      {
        clue: "The 2004-05 lockout was the second time the Stanley Cup was not awarded; the first was in 1919 when this pandemic cancelled the Finals.",
        answer: "Spanish flu",
        accept: ["spanish flu", "influenza", "flu pandemic"],
        choices: ["Smallpox", "Typhoid fever", "Cholera"],
        diff: 3
      },
      {
        clue: "Cale Makar became just the third defenseman in NHL history to win both the Conn Smythe and Norris trophies in the same season, joining Nicklas Lidstrom and this legend.",
        answer: "Bobby Orr",
        accept: ["bobby orr", "orr"],
        choices: ["Denis Potvin", "Doug Harvey", "Ray Bourque"],
        diff: 3
      },
      {
        clue: "In the Detroit vs. Montreal Maroons marathon game of 1936, Red Wings goalie Normie Smith reportedly made this many saves — an astonishing single-game record.",
        answer: "92",
        accept: ["92", "ninety-two"],
        choices: ["76", "84", "101"],
        diff: 3
      },
      {
        clue: "The 1994 Rangers ended a Stanley Cup drought of how many years, defeating the Vancouver Canucks in seven games?",
        answer: "54",
        accept: ["54", "fifty-four"],
        choices: ["42", "47", "60"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "The first Stanley Cup awarded after NHL formation was won in 1918 by this Toronto franchise, then called the Toronto Arenas.",
        answer: "Toronto Arenas",
        accept: ["toronto arenas", "arenas"],
        choices: ["Toronto Blueshirts", "Toronto Shamrocks", "Toronto St. Patricks"],
        diff: 4
      },
      {
        clue: "The original four teams at the NHL founding meeting in 1917 were the Canadiens, Wanderers, Senators, and this team that chose not to operate that first season.",
        answer: "Quebec Bulldogs",
        accept: ["quebec bulldogs", "bulldogs", "quebec"],
        choices: ["Hamilton Tigers", "Victoria Aristocrats", "Toronto Blueshirts"],
        diff: 4
      },
      {
        clue: "The longest overtime goal scorer Mud Bruneteau was a 21-year-old rookie who had scored only this many goals in 24 regular-season games before his historic marker.",
        answer: "two",
        accept: ["two", "2"],
        choices: ["Zero", "Five", "Eight"],
        diff: 4
      },
      {
        clue: "Ken Dryden uniquely won the Calder Trophy as rookie of the year after winning the Stanley Cup and Conn Smythe Trophy in his first season — in this year.",
        answer: "1971",
        accept: ["1971"],
        choices: ["1969", "1972", "1973"],
        diff: 4
      },
      {
        clue: "The NHL cancelled the 2004-05 season on February 16, 2005; the league's final salary cap proposal before cancellation was this amount.",
        answer: "$42.5 million",
        accept: ["42.5 million", "$42.5 million", "42.5"],
        choices: ["$38 million", "$45 million", "$49 million"],
        diff: 4
      }
    ]
  },

  // CATEGORY 1: SCORING LEGENDS
  1: {
    100: [
      {
        clue: "Maurice 'Rocket' Richard became the first player in NHL history to score 50 goals in 50 games during this 1944-45 season.",
        answer: "1944-45",
        accept: ["1944-45", "1944", "1945"],
        choices: ["1942-43", "1947-48", "1950-51"],
        diff: 1
      },
      {
        clue: "Teemu Selanne set the NHL rookie record with this many goals in the 1992-93 season with the Winnipeg Jets.",
        answer: "76",
        accept: ["76", "seventy-six"],
        choices: ["67", "58", "84"],
        diff: 1
      },
      {
        clue: "Phil Esposito scored 76 goals in the 1970-71 season playing for this NHL team.",
        answer: "Boston Bruins",
        accept: ["boston bruins", "bruins", "boston"],
        choices: ["Chicago Blackhawks", "New York Rangers", "Montreal Canadiens"],
        diff: 1
      },
      {
        clue: "Peter Forsberg won the Hart Trophy as league MVP in this year, also winning the Art Ross with 106 points.",
        answer: "2003",
        accept: ["2003"],
        choices: ["1999", "2001", "2004"],
        diff: 1
      },
      {
        clue: "Jarome Iginla's career goal total across all NHL teams was this number, making him one of the top goal-scorers in league history.",
        answer: "625",
        accept: ["625", "six hundred twenty-five"],
        choices: ["599", "612", "641"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Phil Esposito also set the single-season record with this many shots on goal in 1970-71, a record that still stands.",
        answer: "550",
        accept: ["550", "five hundred fifty"],
        choices: ["488", "412", "601"],
        diff: 2
      },
      {
        clue: "Teemu Selanne won this rookie award to go along with his record-shattering 1992-93 season.",
        answer: "Calder Trophy",
        accept: ["calder trophy", "calder", "calder memorial trophy"],
        choices: ["Hart Trophy", "Art Ross Trophy", "Lady Byng Trophy"],
        diff: 2
      },
      {
        clue: "Peter Forsberg's career points total was 885 in just this many NHL regular-season games — an average of 1.25 points per game.",
        answer: "708",
        accept: ["708", "seven hundred eight"],
        choices: ["622", "756", "834"],
        diff: 2
      },
      {
        clue: "Bryan Trottier's career points total across 18 seasons was 1,425, including four Cup wins with the Islanders and two more with this team.",
        answer: "Pittsburgh Penguins",
        accept: ["pittsburgh penguins", "penguins", "pittsburgh"],
        choices: ["New York Rangers", "Boston Bruins", "Detroit Red Wings"],
        diff: 2
      },
      {
        clue: "Jarome Iginla scored 525 goals as the all-time leader for this franchise, where he spent most of his career.",
        answer: "Calgary Flames",
        accept: ["calgary flames", "flames", "calgary"],
        choices: ["Colorado Avalanche", "Pittsburgh Penguins", "Boston Bruins"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Phil Esposito's 76-goal record stood for 11 years until Wayne Gretzky broke it in the 1981-82 season, scoring his 77th goal against the Buffalo Sabres on this date.",
        answer: "February 24, 1982",
        accept: ["february 24 1982", "february 24", "feb 24 1982"],
        choices: ["March 2, 1982", "January 15, 1982", "February 11, 1982"],
        diff: 3
      },
      {
        clue: "Teemu Selanne's 76 rookie goals in 1992-93 shattered the previous record of 53 set by this player.",
        answer: "Mike Bossy",
        accept: ["mike bossy", "bossy"],
        choices: ["Peter Stastny", "Dale Hawerchuk", "Bryan Trottier"],
        diff: 3
      },
      {
        clue: "Evgeni Malkin won the Hart Trophy and Art Ross Trophy in 2012 with this many points, becoming the fourth Penguin ever to win the Hart.",
        answer: "109",
        accept: ["109", "one hundred nine"],
        choices: ["98", "115", "103"],
        diff: 3
      },
      {
        clue: "Martin St. Louis won the 2004 Hart Trophy and Art Ross (94 points) despite never being selected in the NHL Draft due to his perceived lack of this attribute.",
        answer: "size",
        accept: ["size", "height", "too small"],
        choices: ["Speed", "Skating ability", "Toughness"],
        diff: 3
      },
      {
        clue: "Phil Esposito's 76 goals in 1970-71 came alongside 76 assists, giving him this many total points — a single-season record at the time.",
        answer: "152",
        accept: ["152", "one hundred fifty-two"],
        choices: ["144", "131", "168"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Maurice Richard scored his record 50th goal in 50 games on the final night of the 1944-45 season with less than this many minutes remaining.",
        answer: "three minutes",
        accept: ["three minutes", "3 minutes", "two minutes", "2 minutes"],
        choices: ["Ten minutes", "Eight minutes", "Five minutes"],
        diff: 4
      },
      {
        clue: "Martin St. Louis became only the eighth player in NHL history to win the Art Ross, Hart Trophy, and Stanley Cup in the same season — the first to do so since Gretzky in what year?",
        answer: "1987",
        accept: ["1987", "1986-87"],
        choices: ["1985", "1984", "1988"],
        diff: 4
      },
      {
        clue: "Teemu Selanne's 76 rookie goals broke the record held by two players — Mike Bossy at 53, and one set earlier by this Nordiques center with 109 points in his rookie year.",
        answer: "Peter Stastny",
        accept: ["peter stastny", "stastny"],
        choices: ["Anton Stastny", "Dale Hawerchuk", "Guy Lafleur"],
        diff: 4
      },
      {
        clue: "Evgeni Malkin surpassed 1,400 career points with the Penguins, trailing only Sidney Crosby and this Penguins legend all-time on the franchise list.",
        answer: "Mario Lemieux",
        accept: ["mario lemieux", "lemieux"],
        choices: ["Ron Francis", "Jaromir Jagr", "Paul Coffey"],
        diff: 4
      },
      {
        clue: "The 'Punch Line' of the 1940s Canadiens, featuring Richard alongside Elmer Lach and this player, was one of the most dominant lines in NHL history.",
        answer: "Toe Blake",
        accept: ["toe blake", "blake", "hector blake"],
        choices: ["Bert Olmstead", "Dickie Moore", "Jean Beliveau"],
        diff: 4
      }
    ]
  },

  // CATEGORY 2: NHL RECORDS
  2: {
    100: [
      {
        clue: "Bill Mosienko of the Chicago Blackhawks set the record for the fastest hat trick in NHL history, scoring three goals in just this many seconds in 1952.",
        answer: "21",
        accept: ["21", "twenty-one"],
        choices: ["44", "32", "15"],
        diff: 1
      },
      {
        clue: "Paul Coffey set the record for most goals by a defenseman in one season with 48 in 1985-86, surpassing the previous record of 46 set by this player.",
        answer: "Bobby Orr",
        accept: ["bobby orr", "orr"],
        choices: ["Denis Potvin", "Brad Park", "Larry Robinson"],
        diff: 1
      },
      {
        clue: "Dominik Hasek won six Vezina Trophies for best goaltender, more than any other player in NHL history to win it that many times consecutively in a span of how many years (1994-2001)?",
        answer: "eight",
        accept: ["eight", "8"],
        choices: ["Five", "Six", "Ten"],
        diff: 1
      },
      {
        clue: "The inaugural NHL Winter Classic on January 1, 2008 attracted this many fans to Ralph Wilson Stadium — an NHL attendance record at the time.",
        answer: "71,217",
        accept: ["71217", "71,217", "over 71000"],
        choices: ["55,000", "64,000", "80,000"],
        diff: 1
      },
      {
        clue: "The 2004-05 lockout made the NHL the first major North American pro sport to cancel an entire season due to a labor dispute; the Stanley Cup was not awarded for the first time since this year.",
        answer: "1919",
        accept: ["1919"],
        choices: ["1904", "1925", "1934"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Bill Mosienko scored all three goals of his record hat trick against a goalie who was called up from a minor league team because the regular Rangers goalie was unavailable. This goalie's name was Lorne Anderson, and Mosienko nearly scored a fourth goal how many seconds after the third?",
        answer: "45",
        accept: ["45", "forty-five"],
        choices: ["30", "60", "90"],
        diff: 2
      },
      {
        clue: "Paul Coffey's 48-goal season in 1985-86 helped him win his second Norris Trophy. He accomplished 40 or more goals in a season on this many separate occasions.",
        answer: "two",
        accept: ["two", "2"],
        choices: ["Once", "Three times", "Four times"],
        diff: 2
      },
      {
        clue: "Dominik Hasek's career save percentage of .922 is the best among retired goaltenders. During his peak years, he achieved a save percentage of .930 or better in this many consecutive seasons.",
        answer: "five",
        accept: ["five", "5"],
        choices: ["Three", "Four", "Six"],
        diff: 2
      },
      {
        clue: "The NHL expanded from the Original Six to 12 teams in this year, adding franchises like the Kings, Blues, Flyers, Penguins, and others.",
        answer: "1967",
        accept: ["1967"],
        choices: ["1965", "1970", "1972"],
        diff: 2
      },
      {
        clue: "Cale Makar's 2021-22 season with the Avalanche included 28 goals and 86 points in 77 games. His Conn Smythe performance featured 8 goals and this many total points.",
        answer: "29",
        accept: ["29", "twenty-nine"],
        choices: ["22", "25", "34"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Bill Mosienko's historic hat trick on March 23, 1952 occurred against which NHL team's backup goalie Lorne Anderson?",
        answer: "New York Rangers",
        accept: ["new york rangers", "rangers", "new york"],
        choices: ["Boston Bruins", "Detroit Red Wings", "Toronto Maple Leafs"],
        diff: 3
      },
      {
        clue: "The longest game in NHL history went to six overtime periods on March 24, 1936. Detroit won 1-0 over this opponent.",
        answer: "Montreal Maroons",
        accept: ["montreal maroons", "maroons"],
        choices: ["Montreal Canadiens", "Ottawa Senators", "Boston Bruins"],
        diff: 3
      },
      {
        clue: "Adam Fox won the 2021 Norris Trophy before his third NHL season — a feat that only one other player had accomplished, making him and Bobby Orr the only two to achieve this.",
        answer: "Bobby Orr",
        accept: ["bobby orr", "orr"],
        choices: ["Denis Potvin", "Nicklas Lidstrom", "Ray Bourque"],
        diff: 3
      },
      {
        clue: "Dominik Hasek's best single-season performance came in 1998-99 when he posted a GAA of 1.87 and a save percentage of .937. He won his fifth Vezina and also led the Czech Republic to Olympic gold in what city?",
        answer: "Nagano",
        accept: ["nagano", "nagano japan"],
        choices: ["Lillehammer", "Salt Lake City", "Turin"],
        diff: 3
      },
      {
        clue: "Erik Karlsson won his first Norris Trophy in 2012 at age 22, becoming only the second Swede to win the award after this Hall of Famer.",
        answer: "Nicklas Lidstrom",
        accept: ["nicklas lidstrom", "lidstrom"],
        choices: ["Peter Forsberg", "Mats Sundin", "Daniel Alfredsson"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Paul Coffey's record 48 goals by a defenseman in 1985-86 came playing alongside this legendary teammate in Edmonton.",
        answer: "Wayne Gretzky",
        accept: ["wayne gretzky", "gretzky"],
        choices: ["Mark Messier", "Jari Kurri", "Glenn Anderson"],
        diff: 4
      },
      {
        clue: "The longest playoff game in NHL history saw the Red Wings' Normie Smith lose this much body weight over the course of the 176-minute contest.",
        answer: "12 pounds",
        accept: ["12 pounds", "twelve pounds"],
        choices: ["8 pounds", "15 pounds", "20 pounds"],
        diff: 4
      },
      {
        clue: "The NHL expanded to 32 teams in 2021 with the addition of this franchise, completing a league-wide growth from 6 teams in 1942 to the modern era.",
        answer: "Seattle Kraken",
        accept: ["seattle kraken", "kraken", "seattle"],
        choices: ["Las Vegas Golden Knights", "Arizona Coyotes", "Columbus Blue Jackets"],
        diff: 4
      },
      {
        clue: "Adam Fox was the first defenseman to win the Norris Trophy since Brian Leetch in 1997. Fittingly, Leetch presented the award to Fox. Both players share which franchise?",
        answer: "New York Rangers",
        accept: ["new york rangers", "rangers", "new york"],
        choices: ["Boston Bruins", "Toronto Maple Leafs", "Chicago Blackhawks"],
        diff: 4
      },
      {
        clue: "Ken Dryden finished his career with a record of 258 wins and 46 shutouts in 397 games, with this remarkable goals-against average.",
        answer: "2.24",
        accept: ["2.24", "two point two four"],
        choices: ["1.98", "2.56", "2.88"],
        diff: 4
      }
    ]
  },

  // CATEGORY 3: HOCKEY LINGO
  3: {
    100: [
      {
        clue: "A game-winning goal scored when a team's goalie has been pulled for an extra attacker is called this.",
        answer: "empty net goal",
        accept: ["empty net goal", "empty netter", "empty net"],
        choices: ["Breakaway goal", "Penalty shot goal", "Short-handed goal"],
        diff: 1
      },
      {
        clue: "When a player or team scores while shorthanded — while their opponent has a man advantage — it is called this.",
        answer: "shorthanded goal",
        accept: ["shorthanded goal", "short-handed goal", "shorty"],
        choices: ["Power play goal", "Empty net goal", "Penalty shot"],
        diff: 1
      },
      {
        clue: "The faceoff circle directly in front of the net where most dangerous scoring opportunities occur is called this.",
        answer: "slot",
        accept: ["the slot", "slot"],
        choices: ["Crease", "Neutral zone", "Blue line"],
        diff: 1
      },
      {
        clue: "When a player deflects a shot into the net with the blade of their stick held parallel to the ice, it is called a this.",
        answer: "tip-in",
        accept: ["tip-in", "deflection", "tip"],
        choices: ["Slapshot", "Wraparound", "Backhand"],
        diff: 1
      },
      {
        clue: "A player who specializes in fighting and protecting teammates is traditionally called this.",
        answer: "enforcer",
        accept: ["enforcer", "tough guy", "goon"],
        choices: ["Sniper", "Grinder", "Danglar"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "When a team pulls their goalie for an extra attacker and the opposing team scores, the goal tallied against the empty net is sometimes called 'icing on the cake.' But the strategy of leaving the net empty is formally called this.",
        answer: "pulling the goalie",
        accept: ["pulling the goalie", "pull the goalie", "empty net strategy"],
        choices: ["Power play", "Delayed penalty", "Icing"],
        diff: 2
      },
      {
        clue: "When a referee signals a delayed penalty, the non-offending team can pull their goalie for an extra attacker without risk of a goal counting — this is called a 'delayed penalty' or this term.",
        answer: "delayed penalty",
        accept: ["delayed penalty", "delayed call"],
        choices: ["Power play", "Penalty shot", "Roughing"],
        diff: 2
      },
      {
        clue: "The act of intentionally shooting the puck into the corner or along the boards to run down the clock at the end of a game is called this.",
        answer: "dump and chase",
        accept: ["dump and chase", "dumping the puck", "dump in"],
        choices: ["Icing", "Cycling", "Pinching"],
        diff: 2
      },
      {
        clue: "A defenseman who pinches by moving deep into the offensive zone to keep pressure on the opponent near the boards is executing this strategy.",
        answer: "pinching",
        accept: ["pinching", "the pinch", "a pinch"],
        choices: ["Rushing", "Backchecking", "Forechecking"],
        diff: 2
      },
      {
        clue: "When a player scores with a shot that bounces off the post and into the net, fans often describe this as 'ringing it off the iron' — but the post itself in slang is called this.",
        answer: "post",
        accept: ["post", "iron", "pipe", "the pipe"],
        choices: ["Crossbar", "Net frame", "Crease"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "A team that outshoot their opponent heavily but loses the game has been 'Brodeur'd' by this slang term describing when a team dominates possession but loses anyway.",
        answer: "robbery",
        accept: ["robbery", "robbed", "goalie robbery"],
        choices: ["Blowout", "Shutout", "Upset"],
        diff: 3
      },
      {
        clue: "A defensive zone strategy where the team forms a protective structure in front of their goaltender — named after the shape it resembles — is called this.",
        answer: "box",
        accept: ["box", "box formation", "the box"],
        choices: ["Diamond", "Triangle", "Wedge"],
        diff: 3
      },
      {
        clue: "A 'neutral zone trap' is a defensive system pioneered most famously by this coach with the New Jersey Devils in the 1990s.",
        answer: "Jacques Lemaire",
        accept: ["jacques lemaire", "lemaire"],
        choices: ["Pat Burns", "Mike Keenan", "Roger Neilson"],
        diff: 3
      },
      {
        clue: "When a player receives a penalty for interfering with a player who does not have the puck, the infraction is called this.",
        answer: "interference",
        accept: ["interference"],
        choices: ["Charging", "Hooking", "Holding"],
        diff: 3
      },
      {
        clue: "A player who is known for scoring in clutch moments or big games is said to have this quality — named after a famous hockey term for performing under pressure.",
        answer: "playoff performer",
        accept: ["playoff performer", "clutch player", "money player", "big game player"],
        choices: ["Power forward", "Pest", "Fourth liner"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "The term 'Brodeur Rule' was implemented as a result of this goalie's puck-handling ability — it restricts goalies from handling the puck behind this line.",
        answer: "trapezoid",
        accept: ["trapezoid", "trapezoid line", "the trapezoid"],
        choices: ["Goal line", "Blue line", "Red line"],
        diff: 4
      },
      {
        clue: "A 'puck on a string' refers to a player with such elite stick-handling that the puck seems magnetically attached. This player was most famously described this way for his supernatural control.",
        answer: "Pavel Datsyuk",
        accept: ["pavel datsyuk", "datsyuk"],
        choices: ["Sidney Crosby", "Peter Forsberg", "Mats Sundin"],
        diff: 4
      },
      {
        clue: "In hockey analysis, 'PDO' is a metric that adds a team's shooting percentage to their save percentage — it tends to revert to 100 (or 1.000), and is named after this blogger's online handle.",
        answer: "PDO",
        accept: ["pdo", "brunvand", "a blogger"],
        choices: ["Corsi", "Fenwick", "WAR"],
        diff: 4
      },
      {
        clue: "The 'Corsi' statistic measures shot attempts for vs. against at even strength. It is named after this former Sabres goalie coach who tracked the data for training purposes.",
        answer: "Jim Corsi",
        accept: ["jim corsi", "corsi"],
        choices: ["Roger Crozier", "Bob Froese", "Mitch Korn"],
        diff: 4
      },
      {
        clue: "When a player enters the offensive zone before the puck does on a line change and is not called for offside because the play is deemed a 'tag up,' this rule exception is called this.",
        answer: "tag up offside",
        accept: ["tag up offside", "tag up", "delayed offside"],
        choices: ["Hybrid icing", "Delayed offside", "Interference"],
        diff: 4
      }
    ]
  },

  // CATEGORY 4: HALL OF FAMERS
  4: {
    100: [
      {
        clue: "This undrafted player from Burlington, Vermont won the 2004 Hart Trophy, Art Ross Trophy, and Stanley Cup with the Tampa Bay Lightning despite being considered too small by scouts.",
        answer: "Martin St. Louis",
        accept: ["martin st. louis", "martin st louis", "st. louis"],
        choices: ["Brian Gionta", "Todd Marchant", "Darcy Tucker"],
        diff: 1
      },
      {
        clue: "Ken Dryden, the Hall of Fame goaltender, had a remarkable off-ice life including serving as a member of Canada's Parliament and authoring a classic hockey book called this.",
        answer: "The Game",
        accept: ["the game"],
        choices: ["Net Worth", "Between the Pipes", "Cold Steel"],
        diff: 1
      },
      {
        clue: "Mark Messier won this many Stanley Cup championships in his career — six in total, with the Oilers and Rangers.",
        answer: "six",
        accept: ["six", "6"],
        choices: ["Four", "Five", "Seven"],
        diff: 1
      },
      {
        clue: "Bryan Trottier set franchise records with the Islanders posting 1,353 points in 1,123 games during his 15 seasons on Long Island.",
        answer: "Bryan Trottier",
        accept: ["bryan trottier", "trottier"],
        choices: ["Mike Bossy", "Denis Potvin", "Clark Gillies"],
        diff: 1
      },
      {
        clue: "Dominik Hasek was nicknamed 'The Dominator' and played the bulk of his career in Buffalo with this franchise.",
        answer: "Buffalo Sabres",
        accept: ["buffalo sabres", "sabres", "buffalo"],
        choices: ["Detroit Red Wings", "Ottawa Senators", "Chicago Blackhawks"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Erik Karlsson won his first Norris Trophy in 2012 at age 22, then won it again in 2015 with Ottawa — and a third time in 2023 with this team.",
        answer: "San Jose Sharks",
        accept: ["san jose sharks", "sharks", "san jose"],
        choices: ["Ottawa Senators", "Pittsburgh Penguins", "Tampa Bay Lightning"],
        diff: 2
      },
      {
        clue: "Jarome Iginla was known for his leadership and won the Rocket Richard Trophy as top goal scorer twice: in 2002 and this year.",
        answer: "2004",
        accept: ["2004"],
        choices: ["2001", "2006", "2009"],
        diff: 2
      },
      {
        clue: "Mark Messier won five Stanley Cups with the Edmonton Oilers and one with the New York Rangers in 1994, ending a drought of how many years for the Rangers?",
        answer: "54",
        accept: ["54", "fifty-four"],
        choices: ["42", "38", "61"],
        diff: 2
      },
      {
        clue: "Martin St. Louis stood only this tall — 5 feet 9 inches — which caused all 30 teams to pass on him in the NHL draft.",
        answer: "5 feet 9 inches",
        accept: ["5 foot 9", "5'9", "5 feet 9 inches", "five nine"],
        choices: ["5 feet 7 inches", "5 feet 11 inches", "6 feet even"],
        diff: 2
      },
      {
        clue: "Brendan Shanahan scored 656 career goals, a number that ranks among the top in NHL history. He played for this team when he won his three Stanley Cups.",
        answer: "Detroit Red Wings",
        accept: ["detroit red wings", "red wings", "detroit"],
        choices: ["St. Louis Blues", "New Jersey Devils", "Hartford Whalers"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Ken Dryden uniquely won the Calder Memorial Trophy as the top rookie after he had already won the Stanley Cup and Conn Smythe in his first season — this occurred because he played only 6 regular-season games the year before.",
        answer: "six",
        accept: ["six", "6"],
        choices: ["Two", "Ten", "Fifteen"],
        diff: 3
      },
      {
        clue: "Peter Forsberg's career was dramatically shortened by a foot injury. He played only 708 games but his 885 career points translate to an average of 1.25 points per game — second only to this player in NHL history.",
        answer: "Wayne Gretzky",
        accept: ["wayne gretzky", "gretzky"],
        choices: ["Mario Lemieux", "Gordie Howe", "Phil Esposito"],
        diff: 3
      },
      {
        clue: "Jarome Iginla led Team Canada to Olympic gold in 2002 at Salt Lake City with a key assist on the gold medal goal scored by this teammate.",
        answer: "Joe Sakic",
        accept: ["joe sakic", "sakic"],
        choices: ["Mario Lemieux", "Steve Yzerman", "Eric Lindros"],
        diff: 3
      },
      {
        clue: "Dominik Hasek won the Olympic gold medal with the Czech Republic in 1998, a tournament where professional NHL players participated for the first time. The Games were held in this Japanese city.",
        answer: "Nagano",
        accept: ["nagano", "nagano japan"],
        choices: ["Sapporo", "Tokyo", "Osaka"],
        diff: 3
      },
      {
        clue: "Paul Coffey set the defenseman single-season points record with 138 points in 1985-86, surpassing this prior record holder.",
        answer: "Bobby Orr",
        accept: ["bobby orr", "orr"],
        choices: ["Denis Potvin", "Brad Park", "Larry Robinson"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Bryan Trottier won his first Hart Trophy as league MVP in this year, also the Islanders' first year as an elite team.",
        answer: "1979",
        accept: ["1979"],
        choices: ["1977", "1980", "1982"],
        diff: 4
      },
      {
        clue: "Brendan Shanahan's 656 career goals place him in the top tier of NHL scorers. He was inducted into the Hockey Hall of Fame in this year.",
        answer: "2013",
        accept: ["2013"],
        choices: ["2011", "2015", "2010"],
        diff: 4
      },
      {
        clue: "Martin St. Louis briefly played for the Calgary Flames before signing with Tampa Bay as a free agent. He was cut by the Flames after just this many seasons.",
        answer: "one",
        accept: ["one", "1", "one season"],
        choices: ["Two", "Three", "Four"],
        diff: 4
      },
      {
        clue: "Erik Karlsson was traded from Ottawa to San Jose in 2018 in a blockbuster deal that included multiple picks and players. The Senators received this goaltender as part of the return.",
        answer: "Craig Anderson",
        accept: ["craig anderson", "anderson"],
        choices: ["Marc-Andre Fleury", "Antti Niemi", "Martin Jones"],
        diff: 4
      },
      {
        clue: "Peter Forsberg won two Stanley Cups with Colorado in 1996 and 2001. In 1996, he also won the Hart Trophy. His Avalanche defeated this team in the 1996 Cup Final.",
        answer: "Florida Panthers",
        accept: ["florida panthers", "panthers", "florida"],
        choices: ["Detroit Red Wings", "New Jersey Devils", "Philadelphia Flyers"],
        diff: 4
      }
    ]
  },

  // CATEGORY 5: MODERN ERA
  5: {
    100: [
      {
        clue: "The 1980 Winter Olympics 'Miracle on Ice' saw Team USA upset the heavily favored Soviet Union with this final score.",
        answer: "4-3",
        accept: ["4-3", "four to three"],
        choices: ["3-2", "5-4", "6-3"],
        diff: 1
      },
      {
        clue: "Wayne Gretzky was traded to the Los Angeles Kings in August 1988 from this Canadian franchise.",
        answer: "Edmonton Oilers",
        accept: ["edmonton oilers", "oilers", "edmonton"],
        choices: ["Calgary Flames", "Winnipeg Jets", "Vancouver Canucks"],
        diff: 1
      },
      {
        clue: "Jonathan Toews won the Conn Smythe Trophy as playoff MVP in 2010 and also captured gold at the Olympics for this country.",
        answer: "Canada",
        accept: ["canada"],
        choices: ["United States", "Sweden", "Czech Republic"],
        diff: 1
      },
      {
        clue: "Nicklas Backstrom has spent his entire career with this franchise as one of the premier playmakers in the modern era.",
        answer: "Washington Capitals",
        accept: ["washington capitals", "capitals", "washington"],
        choices: ["New York Rangers", "Pittsburgh Penguins", "Ottawa Senators"],
        diff: 1
      },
      {
        clue: "John Tavares was the first overall pick in the 2009 NHL Draft and spent the first nine years of his career with this team before signing with Toronto.",
        answer: "New York Islanders",
        accept: ["new york islanders", "islanders", "new york"],
        choices: ["New Jersey Devils", "Ottawa Senators", "Buffalo Sabres"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Mike Eruzione scored the game-winning goal in the Miracle on Ice game, beating Soviet goaltender Vladimir Myshkin with a wrist shot from approximately this distance.",
        answer: "25 feet",
        accept: ["25 feet", "twenty-five feet"],
        choices: ["10 feet", "40 feet", "15 feet"],
        diff: 2
      },
      {
        clue: "Wayne Gretzky was traded to the Kings along with Marty McSorley and Mike Krushelnyski in exchange for players, draft picks, and a reported cash payment of this amount.",
        answer: "$15 million",
        accept: ["15 million", "$15 million"],
        choices: ["$5 million", "$10 million", "$20 million"],
        diff: 2
      },
      {
        clue: "Marc-Andre Fleury won three Stanley Cups with the Pittsburgh Penguins before being selected by Las Vegas in the 2017 expansion draft, helping lead the Golden Knights to the Cup Final in their inaugural season in this year.",
        answer: "2018",
        accept: ["2018"],
        choices: ["2017", "2019", "2020"],
        diff: 2
      },
      {
        clue: "John Tavares left the Islanders in 2018 to sign as a free agent with this team, causing significant controversy among Islanders fans.",
        answer: "Toronto Maple Leafs",
        accept: ["toronto maple leafs", "maple leafs", "toronto"],
        choices: ["Boston Bruins", "Montreal Canadiens", "Ottawa Senators"],
        diff: 2
      },
      {
        clue: "Cale Makar of the Avalanche won the Norris Trophy AND the Conn Smythe in the same 2021-22 season. He was only the third defenseman ever to accomplish this, after Bobby Orr and Nicklas Lidstrom, who did it in this year.",
        answer: "2002",
        accept: ["2002"],
        choices: ["1998", "2000", "2004"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "The Soviet hockey team that the US upset in the Miracle on Ice had won four consecutive Olympic gold medals going back to this year.",
        answer: "1964",
        accept: ["1964"],
        choices: ["1956", "1968", "1972"],
        diff: 3
      },
      {
        clue: "Patrick Kane was alongside Jonathan Toews as the Blackhawks won three Cups. Kane won the Conn Smythe as playoff MVP in 2013, setting a record for playoff points by an American-born player in this milestone year.",
        answer: "2013",
        accept: ["2013"],
        choices: ["2010", "2015", "2016"],
        diff: 3
      },
      {
        clue: "Nicklas Backstrom has accumulated over 1,000 career assists with the Capitals, establishing himself as one of the elite playmakers of his era. He was selected in the first round, this pick overall, in 2006.",
        answer: "fourth",
        accept: ["fourth", "4th", "4"],
        choices: ["First", "Second", "Sixth"],
        diff: 3
      },
      {
        clue: "Marc-Andre Fleury won his fourth Stanley Cup in 2021 with this franchise after being traded there at the 2021 trade deadline.",
        answer: "Chicago Blackhawks",
        accept: ["chicago blackhawks", "blackhawks", "chicago"],
        choices: ["Vegas Golden Knights", "Pittsburgh Penguins", "Minnesota Wild"],
        diff: 3
      },
      {
        clue: "Wayne Gretzky's trade to LA is credited with expanding hockey across the southern United States. By 2010, USA Hockey registered membership had grown to nearly 475,000 — up from approximately this number in 1990.",
        answer: "195,000",
        accept: ["195000", "195,000", "about 195000"],
        choices: ["300,000", "400,000", "100,000"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "The Soviet team in the 1980 Olympics had only lost once in the previous four Olympic cycles, going 27-1-1 and outscoring opponents 175-44. Their one loss came to this country.",
        answer: "United States",
        accept: ["united states", "usa", "america"],
        choices: ["Canada", "Sweden", "Czechoslovakia"],
        diff: 4
      },
      {
        clue: "Adam Fox and Artemi Panarin both played key roles in this Rangers coach's system when New York made deep playoff runs in the early 2020s.",
        answer: "Gerard Gallant",
        accept: ["gerard gallant", "gallant"],
        choices: ["David Quinn", "Alain Vigneault", "Peter Laviolette"],
        diff: 4
      },
      {
        clue: "John Tavares was the first player to captain the Islanders since this player who wore the 'C' before Tavares was named captain.",
        answer: "Doug Weight",
        accept: ["doug weight", "weight"],
        choices: ["Bill Guerin", "Chris Hamner", "Michael Peca"],
        diff: 4
      },
      {
        clue: "Patrick Kane scored the Stanley Cup-winning goal in Game 6 of the 2010 Final against this team, in a goal that was initially not recognized and required a video review before celebrations began.",
        answer: "Philadelphia Flyers",
        accept: ["philadelphia flyers", "flyers", "philadelphia"],
        choices: ["San Jose Sharks", "Boston Bruins", "Detroit Red Wings"],
        diff: 4
      },
      {
        clue: "The first outdoor NHL regular season game in history was played in 2003 at Commonwealth Stadium in Edmonton — this event is officially called what?",
        answer: "Heritage Classic",
        accept: ["heritage classic", "the heritage classic"],
        choices: ["Winter Classic", "Stadium Series", "Outdoor Classic"],
        diff: 4
      }
    ]
  }
};

const HOCKEY_EXTRA_FINALS = [
  {
    category: "STANLEY CUP HISTORY",
    clue: "The Detroit Red Wings won the longest game in NHL history on March 24, 1936 — a 1-0 victory over the Montreal Maroons settled after 116 minutes and 30 seconds of overtime. Name the rookie who scored the winner.",
    answer: "Mud Bruneteau",
    accept: ["mud bruneteau", "bruneteau"]
  },
  {
    category: "SCORING LEGENDS",
    clue: "This Finnish forward shattered the NHL rookie scoring record in 1992-93 with 76 goals and 132 points for the Winnipeg Jets, winning the Calder Trophy. He went on to a Hall of Fame career.",
    answer: "Teemu Selanne",
    accept: ["teemu selanne", "selanne"]
  },
  {
    category: "NHL RECORDS",
    clue: "On March 23, 1952, this Chicago Blackhawk winger scored three goals in 21 seconds against the New York Rangers — the fastest hat trick in NHL history, a record that still stands today.",
    answer: "Bill Mosienko",
    accept: ["bill mosienko", "mosienko"]
  },
  {
    category: "HALL OF FAMERS",
    clue: "Never drafted into the NHL, this 5-foot-9 winger from Burlington, Vermont went on to win the Hart Trophy, Art Ross Trophy, and Stanley Cup all in the same season — 2003-04 with Tampa Bay.",
    answer: "Martin St. Louis",
    accept: ["martin st. louis", "martin st louis", "st. louis"]
  },
  {
    category: "MODERN ERA",
    clue: "On February 22, 1980, Team USA shocked the hockey world by beating the four-time defending Olympic champion Soviet Union 4-3 at Lake Placid. This defining moment in sports history is known by what name?",
    answer: "Miracle on Ice",
    accept: ["miracle on ice", "the miracle on ice"]
  }
];

// Extra Golf Trivia Questions — 120 NEW questions + 5 Final Jeopardy
