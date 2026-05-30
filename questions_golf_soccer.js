const GOLF_Q = {
  0: { // MAJOR CHAMPIONSHIPS
    100: [
      { clue: "This tournament is held every April at Augusta National Golf Club.", answer: "The Masters", accept: ["the masters", "masters", "masters tournament"], choices: ["The US Open", "The Open Championship", "PGA Championship"], diff: 1 },
      { clue: "How many major championships did Tiger Woods win in his career?", answer: "15", accept: ["15", "fifteen"], choices: ["14", "18", "12"], diff: 2 },
      { clue: "Jack Nicklaus holds the all-time record for most major championships. How many did he win?", answer: "18", accept: ["18", "eighteen"], choices: ["20", "15", "16"], diff: 3 },
      { clue: "Gene Sarazen's double eagle on the par-5 15th hole at Augusta in 1935 is known as the 'shot heard round the world.' What tournament was he playing?", answer: "The Masters", accept: ["the masters", "masters"], choices: ["US Open", "The Open Championship", "PGA Championship"], diff: 4 }
    ],
    200: [
      { clue: "Rory McIlroy needs this major to complete his career Grand Slam.", answer: "The Masters", accept: ["the masters", "masters", "masters tournament"], choices: ["US Open", "PGA Championship", "The Open Championship"], diff: 1 },
      { clue: "Scottie Scheffler won this 2024 major for his second time at Augusta.", answer: "The Masters", accept: ["the masters", "masters"], choices: ["US Open", "The Open Championship", "PGA Championship"], diff: 2 },
      { clue: "Xander Schauffele won both the 2024 PGA Championship and this 2024 major held at Royal Troon.", answer: "The Open Championship", accept: ["the open championship", "the open", "british open", "open championship"], choices: ["US Open", "The Masters", "PGA Championship"], diff: 3 },
      { clue: "Phil Mickelson won the 2021 PGA Championship at age 50, making him the oldest major winner in history. How old was he?", answer: "50", accept: ["50", "fifty"], choices: ["48", "51", "47"], diff: 4 }
    ],
    300: [
      { clue: "Tiger Woods won his first Masters in 1997 at age 21. By how many strokes did he win?", answer: "12", accept: ["12", "twelve"], choices: ["10", "8", "15"], diff: 1 },
      { clue: "Bryson DeChambeau won the 2024 US Open at this historic North Carolina venue.", answer: "Pinehurst", accept: ["pinehurst", "pinehurst no. 2", "pinehurst number 2"], choices: ["Pebble Beach", "Bethpage Black", "Winged Foot"], diff: 2 },
      { clue: "Ben Hogan won three majors in 1953 — the Masters, US Open, and The Open — but could not win the fourth major that year due to a scheduling conflict. Which major did he miss?", answer: "PGA Championship", accept: ["pga championship", "pga"], choices: ["He won all four", "The Masters", "US Open"], diff: 3 },
      { clue: "Bobby Jones completed a 'Grand Slam' in 1930, winning all four of the era's top amateur and professional titles. How many total majors did he win in his career?", answer: "13", accept: ["13", "thirteen"], choices: ["9", "11", "7"], diff: 4 }
    ],
    400: [
      { clue: "How many Masters titles did Tiger Woods win?", answer: "5", accept: ["5", "five"], choices: ["4", "3", "6"], diff: 1 },
      { clue: "Jack Nicklaus won his final Masters title in 1986 at age 46. What was historically significant about this win?", answer: "Oldest major winner (modern era)", accept: ["oldest major winner", "oldest winner", "oldest player to win a major"], choices: ["First back-to-back winner", "Won by record margin", "Lowest final round score"], diff: 2 },
      { clue: "Phil Mickelson won three Masters titles. In which years did he win at Augusta?", answer: "2004, 2006, 2010", accept: ["2004 2006 2010", "2004, 2006, 2010", "04 06 10"], choices: ["2002, 2006, 2010", "2004, 2008, 2012", "2003, 2006, 2009"], diff: 3 },
      { clue: "Tiger's first PGA Championship win came in 1999. How many PGA Championship titles did he win total?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 4 }
    ]
  },
  1: { // GOLF LEGENDS
    100: [
      { clue: "Known as 'The Golden Bear,' this golfer won a record 18 major championships.", answer: "Jack Nicklaus", accept: ["jack nicklaus", "nicklaus", "jack"], choices: ["Arnold Palmer", "Tiger Woods", "Gary Player"], diff: 1 },
      { clue: "Arnold Palmer was known as 'The King' and his loyal fan following was called what?", answer: "Arnie's Army", accept: ["arnie's army", "arnies army", "arnie army"], choices: ["Palmer's Platoon", "The King's Court", "Arnold's Angels"], diff: 2 },
      { clue: "This South African golfer, known for his fitness obsession, was the first international superstar of golf and won 9 majors.", answer: "Gary Player", accept: ["gary player", "player"], choices: ["Ernie Els", "Retief Goosen", "Nick Price"], diff: 3 },
      { clue: "Byron Nelson's 1945 season is legendary. How many consecutive PGA Tour events did he win that year?", answer: "11", accept: ["11", "eleven"], choices: ["9", "13", "8"], diff: 4 }
    ],
    200: [
      { clue: "Sam Snead and Tiger Woods are tied for the record of most PGA Tour wins. How many wins is that record?", answer: "82", accept: ["82", "eighty-two", "eighty two"], choices: ["79", "86", "75"], diff: 1 },
      { clue: "Known as 'The Hawk,' this golfer survived a near-fatal car accident in 1949 and returned to win the US Open in 1950.", answer: "Ben Hogan", accept: ["ben hogan", "hogan"], choices: ["Sam Snead", "Byron Nelson", "Jimmy Demaret"], diff: 2 },
      { clue: "Spanish legend Seve Ballesteros won 5 major championships. He was particularly known for his inspiring performances in what team competition?", answer: "Ryder Cup", accept: ["ryder cup", "the ryder cup"], choices: ["Presidents Cup", "Solheim Cup", "World Cup of Golf"], diff: 3 },
      { clue: "Australian Greg Norman, 'The Shark,' famously blew a 6-shot lead in the final round of which major in 1996?", answer: "The Masters", accept: ["the masters", "masters", "masters tournament"], choices: ["US Open", "The Open Championship", "PGA Championship"], diff: 4 }
    ],
    300: [
      { clue: "Tiger Woods has how many PGA Tour victories, a record he shares with Sam Snead?", answer: "82", accept: ["82", "eighty-two", "eighty two"], choices: ["79", "75", "86"], diff: 1 },
      { clue: "Nick Faldo won 6 majors total, split evenly between The Masters and which other major?", answer: "The Open Championship", accept: ["the open championship", "the open", "british open"], choices: ["US Open", "PGA Championship", "All four majors"], diff: 2 },
      { clue: "Sam Snead was famous for his smooth swing and his long career, but he famously never won which major?", answer: "US Open", accept: ["us open", "u.s. open", "united states open"], choices: ["The Masters", "PGA Championship", "The Open Championship"], diff: 3 },
      { clue: "Arnold Palmer won 7 major championships. Which major did he win the most times (4 times)?", answer: "The Masters", accept: ["the masters", "masters"], choices: ["US Open", "The Open Championship", "PGA Championship"], diff: 4 }
    ],
    400: [
      { clue: "Jack Nicklaus won how many Masters titles?", answer: "6", accept: ["6", "six"], choices: ["5", "4", "7"], diff: 1 },
      { clue: "Gary Player completed a career Grand Slam, meaning he won all four major championships at least once. How many total majors did he win?", answer: "9", accept: ["9", "nine"], choices: ["7", "11", "8"], diff: 2 },
      { clue: "Byron Nelson won 18 PGA Tour events in 1945. What is the total number of tournaments he played that remarkable year?", answer: "30", accept: ["30", "thirty"], choices: ["24", "35", "28"], diff: 3 },
      { clue: "Seve Ballesteros won The Open Championship twice. In which two years did he win?", answer: "1979 and 1984", accept: ["1979 and 1984", "1979 1984", "79 and 84", "79 84"], choices: ["1976 and 1980", "1980 and 1985", "1983 and 1988"], diff: 4 }
    ]
  },
  2: { // RECORDS & FIRSTS
    100: [
      { clue: "Tiger Woods won the 1997 Masters at age 21, making him the youngest Masters champion. By how many strokes did he win?", answer: "12", accept: ["12", "twelve"], choices: ["8", "15", "10"], diff: 1 },
      { clue: "Phil Mickelson became the oldest major winner in history when he won the 2021 PGA Championship. How old was he?", answer: "50", accept: ["50", "fifty"], choices: ["47", "48", "52"], diff: 2 },
      { clue: "Dustin Johnson set a Masters scoring record in 2020 with what total score (strokes under par)?", answer: "20 under par", accept: ["20 under par", "20 under", "-20", "20-under", "268"], choices: ["18 under par", "22 under par", "17 under par"], diff: 3 },
      { clue: "Annika Sorenstam made history in 2003 by becoming the first woman to play a PGA Tour event in nearly 60 years. Which tournament did she play?", answer: "Colonial", accept: ["colonial", "bank of america colonial", "the colonial"], choices: ["The Players Championship", "Pebble Beach Pro-Am", "Phoenix Open"], diff: 4 }
    ],
    200: [
      { clue: "Tiger Woods won the 2000 US Open by how many strokes — a record margin of victory?", answer: "15", accept: ["15", "fifteen"], choices: ["12", "10", "18"], diff: 1 },
      { clue: "Jack Nicklaus won his 18th and final major at the 1986 Masters at what age, making him the oldest modern-era major champion?", answer: "46", accept: ["46", "forty-six", "forty six"], choices: ["44", "48", "43"], diff: 2 },
      { clue: "Tiger Woods held all four major championship titles simultaneously in 2000-2001. What is this feat called?", answer: "Tiger Slam", accept: ["tiger slam", "the tiger slam"], choices: ["Grand Slam", "Calendar Slam", "Career Grand Slam"], diff: 3 },
      { clue: "Young Tom Morris won how many consecutive Open Championships between 1868 and 1872?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "6"], diff: 4 }
    ],
    300: [
      { clue: "How many PGA Tour wins does Tiger Woods have — a record he shares with Sam Snead?", answer: "82", accept: ["82", "eighty-two", "eighty two"], choices: ["75", "79", "86"], diff: 1 },
      { clue: "Tiger Woods completed his career Grand Slam (winning all four different majors) at which 2000 major?", answer: "The Open Championship", accept: ["the open championship", "the open", "british open", "st andrews"], choices: ["US Open", "PGA Championship", "The Masters"], diff: 2 },
      { clue: "Annika Sorenstam holds the record for most LPGA Tour wins. How many did she win?", answer: "72", accept: ["72", "seventy-two", "seventy two"], choices: ["68", "60", "80"], diff: 3 },
      { clue: "Tiger Woods' 2000 US Open win at Pebble Beach was by 15 strokes — a record. What was his winning score (under par)?", answer: "12 under par", accept: ["12 under par", "12 under", "-12", "272"], choices: ["15 under par", "10 under par", "8 under par"], diff: 4 }
    ],
    400: [
      { clue: "At what age did Tiger Woods win his first Masters title in 1997?", answer: "21", accept: ["21", "twenty-one", "twenty one"], choices: ["23", "22", "20"], diff: 1 },
      { clue: "Phil Mickelson won the 2021 PGA Championship at Kiawah Island — how many years older was he than the previous oldest major winner record?", answer: "4 years", accept: ["4 years", "four years", "4"], choices: ["2 years", "6 years", "3 years"], diff: 2 },
      { clue: "Dustin Johnson's record Masters score of 268 (-20) in 2020 beat the previous record by how many strokes?", answer: "2", accept: ["2", "two"], choices: ["4", "1", "3"], diff: 3 },
      { clue: "Tiger Woods set a record for consecutive PGA Tour cuts made. Approximately how many consecutive cuts did he make?", answer: "142", accept: ["142", "one hundred forty-two"], choices: ["118", "156", "130"], diff: 4 }
    ]
  },
  3: { // GOLF LINGO
    100: [
      { clue: "In golf, scoring one stroke under par on a hole is called a what?", answer: "Birdie", accept: ["birdie"], choices: ["Eagle", "Bogey", "Par"], diff: 1 },
      { clue: "A score of two strokes under par on a single hole is called an what?", answer: "Eagle", accept: ["eagle"], choices: ["Birdie", "Albatross", "Condor"], diff: 2 },
      { clue: "A score of one stroke over par on a hole is called a what?", answer: "Bogey", accept: ["bogey"], choices: ["Birdie", "Double bogey", "Par"], diff: 3 },
      { clue: "In golf, a 'links' course refers to what type of terrain?", answer: "Coastal/sandy terrain", accept: ["coastal", "sandy", "coastal sandy terrain", "seaside", "links land", "ocean", "seaside terrain"], choices: ["Mountain terrain", "Parkland/tree-lined", "Desert terrain"], diff: 4 }
    ],
    200: [
      { clue: "What golf term describes completing a hole with a single stroke?", answer: "Hole-in-one", accept: ["hole-in-one", "hole in one", "ace"], choices: ["Condor", "Eagle", "Albatross"], diff: 1 },
      { clue: "In match play, a short putt that is conceded by your opponent is called a what?", answer: "Gimme", accept: ["gimme", "gimmie"], choices: ["Mulligan", "Tap-in", "Concession"], diff: 2 },
      { clue: "A golf hole that bends left or right is called a what?", answer: "Dog-leg", accept: ["dog-leg", "dogleg", "dog leg"], choices: ["Snake hole", "Banana hole", "Boomerang hole"], diff: 3 },
      { clue: "What is the term for the involuntary wrist spasms that can ruin a golfer's putting stroke?", answer: "The yips", accept: ["yips", "the yips"], choices: ["The shakes", "The wobbles", "The flinches"], diff: 4 }
    ],
    300: [
      { clue: "A score of three strokes under par on a single hole — extremely rare — is called an albatross or what else?", answer: "Double eagle", accept: ["double eagle", "albatross"], choices: ["Triple birdie", "Super eagle", "Condor"], diff: 1 },
      { clue: "An informal do-over shot in casual golf that is NOT allowed in formal competition is called a what?", answer: "Mulligan", accept: ["mulligan"], choices: ["Redo", "Gimme", "Provisional"], diff: 2 },
      { clue: "A numerical measure of a golfer's potential ability used to level competition between players of different skill levels is called a what?", answer: "Handicap", accept: ["handicap", "golf handicap"], choices: ["Scratch", "Index", "Rating"], diff: 3 },
      { clue: "In a 72-hole tournament, 'making the cut' means what?", answer: "Scoring low enough after 36 holes to continue playing", accept: ["scoring low enough to continue", "advancing past 36 holes", "qualifying for the final two rounds", "advancing after two rounds"], choices: ["Finishing in the top 10", "Completing 72 holes", "Earning prize money"], diff: 4 }
    ],
    400: [
      { clue: "In golf, what does 'par' mean?", answer: "The expected number of strokes for a hole or round", accept: ["expected number of strokes", "standard score", "the target score"], choices: ["The lowest possible score", "One under average", "The course record"], diff: 1 },
      { clue: "A slight left or right curve of the ball in flight — intentional in skilled golfers — is called a fade or a what?", answer: "Draw", accept: ["draw", "fade or draw", "draw or fade"], choices: ["Hook", "Slice", "Punch"], diff: 2 },
      { clue: "What term describes a coastal Scottish-style golf course laid out on natural sandy terrain, often near the sea?", answer: "Links", accept: ["links", "links course"], choices: ["Heathland", "Parkland", "Moorland"], diff: 3 },
      { clue: "In stroke play, what does it mean to be 'on the cut line'?", answer: "Exactly at the score needed to advance to the final rounds", accept: ["at the score to advance", "at the qualifying score", "at the threshold to continue"], choices: ["Leading the tournament", "In last place", "Tied for the lead"], diff: 4 }
    ]
  },
  4: { // MODERN ERA
    100: [
      { clue: "Scottie Scheffler won this medal at the 2024 Paris Olympics in golf.", answer: "Gold medal", accept: ["gold medal", "gold", "olympic gold"], choices: ["Silver medal", "Bronze medal", "He did not medal"], diff: 1 },
      { clue: "Rory McIlroy has won 4 major championships. Which major has he NOT won, keeping him from a career Grand Slam?", answer: "The Masters", accept: ["the masters", "masters", "masters tournament"], choices: ["US Open", "PGA Championship", "The Open Championship"], diff: 2 },
      { clue: "Jon Rahm won the 2023 Masters and then made a controversial move to join which Saudi-backed rival golf tour in 2024?", answer: "LIV Golf", accept: ["liv golf", "liv"], choices: ["Asian Tour", "DP World Tour", "PGA Tour Asia"], diff: 3 },
      { clue: "Collin Morikawa won The Open Championship in 2021 — his second major. What was his first major title, won in 2020?", answer: "PGA Championship", accept: ["pga championship", "pga"], choices: ["US Open", "The Masters", "The Open Championship"], diff: 4 }
    ],
    200: [
      { clue: "Bryson DeChambeau is known for his scientific approach to golf. He won which 2024 major at Pinehurst?", answer: "US Open", accept: ["us open", "u.s. open"], choices: ["The Masters", "PGA Championship", "The Open Championship"], diff: 1 },
      { clue: "LIV Golf, the Saudi-backed rival tour, launched in which year?", answer: "2022", accept: ["2022", "twenty twenty-two"], choices: ["2021", "2023", "2020"], diff: 2 },
      { clue: "Brooks Koepka has won 4 major championships — 2 US Opens and 2 PGA Championships. In which year did he win his first US Open?", answer: "2017", accept: ["2017", "twenty seventeen"], choices: ["2015", "2018", "2016"], diff: 3 },
      { clue: "Scottie Scheffler held the World No. 1 ranking for most of 2024. How many PGA Tour wins did he have in the 2023-24 season?", answer: "9", accept: ["9", "nine"], choices: ["7", "6", "8"], diff: 4 }
    ],
    300: [
      { clue: "Kylian Mbappé signed with Real Madrid in 2024 — but in golf's modern era, which golfer joined Al Nassr in 2023? (trick question — this is a soccer fact; in golf, which player is ranked #1 in 2024?)", answer: "Scottie Scheffler", accept: ["scottie scheffler", "scheffler"], choices: ["Rory McIlroy", "Jon Rahm", "Xander Schauffele"], diff: 1 },
      { clue: "Xander Schauffele won two major championships in 2024. Name either one.", answer: "PGA Championship or The Open Championship", accept: ["pga championship", "the open championship", "the open", "pga", "british open"], choices: ["US Open and Masters", "Masters and PGA", "US Open and The Open"], diff: 2 },
      { clue: "Brooks Koepka was one of the first high-profile PGA Tour players to join LIV Golf. How many major championships did he win before joining?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 3 },
      { clue: "Collin Morikawa won 2 major championships in his first 3 major appearances. What is the name of the second major he won (The Open Championship) and in what year?", answer: "2021", accept: ["2021", "twenty twenty-one"], choices: ["2020", "2022", "2023"], diff: 4 }
    ],
    400: [
      { clue: "Scottie Scheffler won how many Masters titles as of 2024?", answer: "2", accept: ["2", "two"], choices: ["1", "3", "4"], diff: 1 },
      { clue: "Rory McIlroy won back-to-back majors in 2014. Which two majors did he win that year?", answer: "The Open Championship and PGA Championship", accept: ["the open and pga", "open championship and pga championship", "open championship and pga", "pga championship and the open championship"], choices: ["Masters and US Open", "US Open and PGA Championship", "Masters and The Open"], diff: 2 },
      { clue: "Bryson DeChambeau is also known by a nickname based on his analytical approach to golf. What is his nickname?", answer: "The Scientist", accept: ["the scientist", "scientist", "mad scientist"], choices: ["The Professor", "The Calculator", "The Engineer"], diff: 3 },
      { clue: "Jon Rahm won the 2021 US Open and 2023 Masters. What country does he represent?", answer: "Spain", accept: ["spain", "spanish"], choices: ["Argentina", "Mexico", "Portugal"], diff: 4 }
    ]
  },
  5: { // RYDER CUP
    100: [
      { clue: "The Ryder Cup is a team golf competition between which two sides?", answer: "USA vs Europe", accept: ["usa vs europe", "united states vs europe", "united states and europe", "america and europe"], choices: ["USA vs World", "Europe vs Asia", "USA vs Great Britain"], diff: 1 },
      { clue: "How often is the Ryder Cup held?", answer: "Every 2 years", accept: ["every 2 years", "every two years", "biennial", "biennially"], choices: ["Every year", "Every 4 years", "Every 3 years"], diff: 2 },
      { clue: "Europe won the 2023 Ryder Cup in Rome by what dominant score?", answer: "16.5 to 11.5", accept: ["16.5 to 11.5", "16.5-11.5", "16½ to 11½"], choices: ["14 to 14 (tie)", "18 to 10", "15 to 13"], diff: 3 },
      { clue: "In the famous '1969 Concession,' Jack Nicklaus conceded a putt to which British player to halve the final match and tie the Ryder Cup?", answer: "Tony Jacklin", accept: ["tony jacklin", "jacklin"], choices: ["Lee Trevino", "Peter Alliss", "Brian Huggett"], diff: 4 }
    ],
    200: [
      { clue: "The USA had its biggest Ryder Cup victory ever in 2021 at Whistling Straits, winning by what score?", answer: "19 to 9", accept: ["19 to 9", "19-9"], choices: ["17 to 11", "18 to 10", "20 to 8"], diff: 1 },
      { clue: "Which Spanish legend is considered the heart and soul of European Ryder Cup teams from 1979 to 1995?", answer: "Seve Ballesteros", accept: ["seve ballesteros", "seve", "ballesteros"], choices: ["Nick Faldo", "Bernhard Langer", "Ian Woosnam"], diff: 2 },
      { clue: "Europe first won the Ryder Cup on American soil in which year?", answer: "1987", accept: ["1987", "eighty-seven"], choices: ["1985", "1989", "1991"], diff: 3 },
      { clue: "Francesco Molinari had an unbeaten record at the 2018 Ryder Cup in Paris, going 5-0. What nationality is Molinari?", answer: "Italian", accept: ["italian", "italy"], choices: ["Spanish", "French", "Swedish"], diff: 4 }
    ],
    300: [
      { clue: "Before 1979, the Ryder Cup featured the USA versus which opponent?", answer: "Great Britain and Ireland", accept: ["great britain and ireland", "great britain", "britain and ireland", "gb and ireland", "gb&i"], choices: ["Europe", "The Commonwealth", "England"], diff: 1 },
      { clue: "Phil Mickelson holds the US record for most Ryder Cup appearances. How many times did he compete?", answer: "12", accept: ["12", "twelve"], choices: ["10", "11", "13"], diff: 2 },
      { clue: "Tiger Woods holds the USA record for most Ryder Cup points earned. Despite his individual excellence, what is his overall Ryder Cup win-loss record generally considered?", answer: "Disappointing/poor", accept: ["disappointing", "poor", "below expectations", "losing record", "more losses than wins"], choices: ["Outstanding", "Even/balanced", "Perfect record"], diff: 3 },
      { clue: "At the 2018 Ryder Cup in Paris, Europe beat the USA. What was the final score of Europe's victory?", answer: "17.5 to 10.5", accept: ["17.5 to 10.5", "17.5-10.5", "17½ to 10½"], choices: ["15 to 13", "16 to 12", "18 to 10"], diff: 4 }
    ],
    400: [
      { clue: "The 2023 Ryder Cup was held in which city?", answer: "Rome", accept: ["rome", "rome italy", "italy"], choices: ["Paris", "London", "Madrid"], diff: 1 },
      { clue: "Europe began its era of Ryder Cup dominance in 1985. In which country was that match played?", answer: "England", accept: ["england", "great britain", "uk", "the belfry"], choices: ["Scotland", "Ireland", "Wales"], diff: 2 },
      { clue: "The 2021 Ryder Cup was held at Whistling Straits in which US state?", answer: "Wisconsin", accept: ["wisconsin"], choices: ["Minnesota", "Michigan", "Ohio"], diff: 3 },
      { clue: "Seve Ballesteros captained which Ryder Cup team to victory in 1997 at Valderrama, Spain?", answer: "Europe", accept: ["europe", "european team", "team europe"], choices: ["USA", "Great Britain and Ireland", "International"], diff: 4 }
    ]
  }
};

const GOLF_FINALS = [
  { category: "MAJOR CHAMPIONSHIPS", clue: "Tiger Woods won the 2019 Masters for his 15th and most recent major title. How many years had passed since his previous major win in 2008?", answer: "11 years", accept: ["11 years", "eleven years", "11"] },
  { category: "GOLF LEGENDS", clue: "Jack Nicklaus won 18 major championships. How many of those were PGA Championship titles?", answer: "5", accept: ["5", "five"] },
  { category: "GOLF LINGO", clue: "What is the term for when a golfer hits the ball through an opponent's legs in a playful or skillful move?", answer: "Nutmeg", accept: ["nutmeg"] },
  { category: "RYDER CUP", clue: "Francesco Molinari went unbeaten (5-0) at the 2018 Ryder Cup for Team Europe. What country does he represent?", answer: "Italy", accept: ["italy", "italian"] }
];

const SOCCER_Q = {
  0: { // FIFA WORLD CUP
    100: [
      { clue: "Which country has won the most FIFA World Cups with 5 titles?", answer: "Brazil", accept: ["brazil", "brasil"], choices: ["Germany", "Italy", "Argentina"], diff: 1 },
      { clue: "England's only World Cup victory came in 1966 on home soil. Who did they beat in the final?", answer: "West Germany", accept: ["west germany", "germany", "west german"], choices: ["Argentina", "Brazil", "France"], diff: 2 },
      { clue: "Pelé is the only player to win three World Cup titles. In which years did Brazil win those cups?", answer: "1958, 1962, and 1970", accept: ["1958 1962 1970", "1958, 1962, 1970", "58 62 70"], choices: ["1950, 1962, 1970", "1954, 1958, 1962", "1958, 1970, 1994"], diff: 3 },
      { clue: "The very first FIFA World Cup was held in 1930. Which country hosted AND won the inaugural tournament?", answer: "Uruguay", accept: ["uruguay"], choices: ["Brazil", "Argentina", "France"], diff: 4 }
    ],
    200: [
      { clue: "Messi finally won his first World Cup in 2022. Which country did Argentina beat in the final?", answer: "France", accept: ["france"], choices: ["Brazil", "Croatia", "Morocco"], diff: 1 },
      { clue: "The 2022 World Cup final ended in a 3-3 draw. How did Argentina win the title?", answer: "On penalties", accept: ["on penalties", "penalty shootout", "penalties", "penalty kicks"], choices: ["Golden goal in extra time", "By aggregate score", "Coin toss"], diff: 2 },
      { clue: "Miroslav Klose holds the record for most World Cup goals ever with how many?", answer: "16", accept: ["16", "sixteen"], choices: ["15", "14", "17"], diff: 3 },
      { clue: "Zinedine Zidane scored two headers in the 1998 World Cup final to lead France to victory. Who did France beat in that final?", answer: "Brazil", accept: ["brazil", "brasil"], choices: ["Germany", "Italy", "Argentina"], diff: 4 }
    ],
    300: [
      { clue: "How many World Cup titles has Germany won?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 1 },
      { clue: "Geoff Hurst scored a hat trick in the 1966 World Cup final. For which country?", answer: "England", accept: ["england"], choices: ["West Germany", "Brazil", "Italy"], diff: 2 },
      { clue: "Kylian Mbappé scored a hat trick in the 2022 World Cup final — in a losing effort. He plays for which country?", answer: "France", accept: ["france"], choices: ["Belgium", "Morocco", "Spain"], diff: 3 },
      { clue: "Pelé was how old when he won his first World Cup in 1958, making him the youngest World Cup winner?", answer: "17", accept: ["17", "seventeen"], choices: ["18", "16", "19"], diff: 4 }
    ],
    400: [
      { clue: "France won the World Cup in 1998. Where was that World Cup held?", answer: "France", accept: ["france"], choices: ["Germany", "Spain", "Italy"], diff: 1 },
      { clue: "The 2026 FIFA World Cup will be co-hosted by three nations. Name any one of them.", answer: "USA, Mexico, or Canada", accept: ["usa", "united states", "us", "mexico", "canada"], choices: ["Brazil, Argentina, Colombia", "England, France, Germany", "Japan, South Korea, Australia"], diff: 2 },
      { clue: "Luka Modric led Croatia to the 2018 World Cup final and won the Ballon d'Or that year. Who did Croatia lose to in the final?", answer: "France", accept: ["france"], choices: ["Brazil", "Germany", "Argentina"], diff: 3 },
      { clue: "The 2026 World Cup will feature how many teams — an expansion from the current 32?", answer: "48", accept: ["48", "forty-eight"], choices: ["40", "36", "64"], diff: 4 }
    ]
  },
  1: { // GOAL SCORING LEGENDS
    100: [
      { clue: "Lionel Messi has won the Ballon d'Or a record number of times. How many has he won as of 2024?", answer: "8", accept: ["8", "eight"], choices: ["7", "6", "9"], diff: 1 },
      { clue: "Cristiano Ronaldo holds the record for most international goals. He plays for which country?", answer: "Portugal", accept: ["portugal", "portuguese"], choices: ["Spain", "Brazil", "France"], diff: 2 },
      { clue: "Pelé's legendary status is tied to Brazil's success. Approximately how many competitive career goals did he officially score?", answer: "767", accept: ["767", "about 767", "around 767"], choices: ["1000", "500", "652"], diff: 3 },
      { clue: "Robert Lewandowski set a Bundesliga record with 41 goals in one season in 2020-21. Which club was he playing for?", answer: "Bayern Munich", accept: ["bayern munich", "bayern", "fc bayern"], choices: ["Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen"], diff: 4 }
    ],
    200: [
      { clue: "Erling Haaland scored 36 Premier League goals in his debut season 2022-23 — a single-season record. Which club does he play for?", answer: "Manchester City", accept: ["manchester city", "man city"], choices: ["Arsenal", "Liverpool", "Manchester United"], diff: 1 },
      { clue: "Gerd Müller, 'Der Bomber,' scored 68 international goals for which country?", answer: "Germany", accept: ["germany", "west germany"], choices: ["Austria", "Netherlands", "Italy"], diff: 2 },
      { clue: "Eusébio was the top scorer at the 1966 World Cup with 9 goals. He played for which country?", answer: "Portugal", accept: ["portugal"], choices: ["Spain", "Brazil", "Italy"], diff: 3 },
      { clue: "Ferenc Puskás scored 84 international goals, a record for a European player for many decades. Which country did he originally represent?", answer: "Hungary", accept: ["hungary", "hungarian"], choices: ["Romania", "Czechoslovakia", "Austria"], diff: 4 }
    ],
    300: [
      { clue: "Cristiano Ronaldo has scored over 130 international goals. Which Saudi Arabian club did he join in 2023?", answer: "Al Nassr", accept: ["al nassr", "al-nassr"], choices: ["Al Hilal", "Al Ahli", "Al Ittihad"], diff: 1 },
      { clue: "Ronaldo Nazario ('R9') won two World Cups and is considered one of the greatest strikers ever. Which two years did Brazil win those World Cups?", answer: "1994 and 2002", accept: ["1994 and 2002", "1994 2002", "94 and 02"], choices: ["1994 and 1998", "1998 and 2002", "1990 and 2002"], diff: 2 },
      { clue: "Robert Lewandowski is the all-time leading scorer for which national team?", answer: "Poland", accept: ["poland", "polish"], choices: ["Czech Republic", "Slovakia", "Hungary"], diff: 3 },
      { clue: "Messi won his 8th Ballon d'Or in 2023. In which years did he win his first four Ballon d'Or awards consecutively?", answer: "2009, 2010, 2011, 2012", accept: ["2009 2010 2011 2012", "2009, 2010, 2011, 2012", "09 10 11 12"], choices: ["2008, 2009, 2010, 2011", "2010, 2011, 2012, 2013", "2009, 2011, 2013, 2015"], diff: 4 }
    ],
    400: [
      { clue: "Erling Haaland's father Alfie also played professional football. What position does Erling play?", answer: "Striker", accept: ["striker", "forward", "centre forward", "center forward"], choices: ["Midfielder", "Defender", "Goalkeeper"], diff: 1 },
      { clue: "Miroslav Klose scored 16 World Cup goals for Germany. At which World Cup did he score his record-breaking 16th goal?", answer: "2014", accept: ["2014", "twenty fourteen", "brazil 2014"], choices: ["2006", "2010", "2002"], diff: 2 },
      { clue: "Cristiano Ronaldo scored how many Champions League goals — an all-time record?", answer: "140+", accept: ["140", "over 140", "more than 140", "140 plus"], choices: ["120+", "100+", "160+"], diff: 3 },
      { clue: "Lionel Messi joined Inter Miami in which year, bringing MLS unprecedented global attention?", answer: "2023", accept: ["2023", "twenty twenty-three"], choices: ["2022", "2024", "2021"], diff: 4 }
    ]
  },
  2: { // RECORDS & FIRSTS
    100: [
      { clue: "Which club has won the most UEFA Champions League titles with 15 as of 2024?", answer: "Real Madrid", accept: ["real madrid", "madrid"], choices: ["AC Milan", "Bayern Munich", "Barcelona"], diff: 1 },
      { clue: "Neymar's 2017 transfer from Barcelona to PSG set the world record transfer fee at what price?", answer: "€222 million", accept: ["222 million", "€222 million", "222m", "222"], choices: ["€198 million", "€180 million", "€250 million"], diff: 2 },
      { clue: "The USA won the 2015 Women's World Cup final 5-2 against Japan. Carli Lloyd scored a hat trick in how many minutes?", answer: "16 minutes", accept: ["16 minutes", "16", "first 16 minutes"], choices: ["25 minutes", "30 minutes", "12 minutes"], diff: 3 },
      { clue: "Arsenal went an entire Premier League season unbeaten in 2003-04, earning the nickname 'The Invincibles.' How many games did they play unbeaten?", answer: "38", accept: ["38", "thirty-eight"], choices: ["34", "42", "36"], diff: 4 }
    ],
    200: [
      { clue: "Alan Shearer holds the record for most Premier League goals. How many did he score?", answer: "260", accept: ["260", "two hundred sixty"], choices: ["240", "280", "220"], diff: 1 },
      { clue: "Sadio Mané scored the fastest hat trick in Premier League history in 2015 for Southampton in how many minutes and seconds?", answer: "2 minutes 56 seconds", accept: ["2 minutes 56 seconds", "2:56", "under 3 minutes", "2 mins 56 secs"], choices: ["3 minutes 12 seconds", "4 minutes 22 seconds", "5 minutes"], diff: 2 },
      { clue: "Real Madrid won their 15th Champions League title in which year?", answer: "2024", accept: ["2024", "twenty twenty-four"], choices: ["2022", "2023", "2021"], diff: 3 },
      { clue: "Pelé was 17 years old when he won his first World Cup in 1958. Name the country Brazil beat in that World Cup final.", answer: "Sweden", accept: ["sweden"], choices: ["France", "West Germany", "Argentina"], diff: 4 }
    ],
    300: [
      { clue: "Brazil has won 5 World Cups. What makes Brazil's World Cup record unique among all nations?", answer: "Only nation to qualify for every World Cup", accept: ["qualified for every world cup", "never missed a world cup", "only country in every world cup", "participated in every world cup"], choices: ["Won most consecutive World Cups", "Scored most goals in history", "Never been eliminated in group stage"], diff: 1 },
      { clue: "The very first FIFA World Cup was held in Uruguay in 1930. How many teams participated in that inaugural tournament?", answer: "13", accept: ["13", "thirteen"], choices: ["16", "8", "12"], diff: 2 },
      { clue: "Manchester United holds the record for most English league titles. How many have they won?", answer: "20", accept: ["20", "twenty"], choices: ["18", "19", "21"], diff: 3 },
      { clue: "Inter Milan won the treble (Serie A, Coppa Italia, Champions League) in 2009-10. Which legendary manager led them?", answer: "José Mourinho", accept: ["jose mourinho", "mourinho", "josé mourinho"], choices: ["Carlo Ancelotti", "Pep Guardiola", "Antonio Conte"], diff: 4 }
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
      { clue: "When a defender accidentally kicks the ball into their own net, it's called an what?", answer: "Own goal", accept: ["own goal", "og"], choices: ["Penalty", "Foul goal", "Error goal"], diff: 2 },
      { clue: "When you kick the ball through an opponent's legs, it's called a what?", answer: "Nutmeg", accept: ["nutmeg", "meg"], choices: ["Tunnel", "Slot", "Peg"], diff: 3 },
      { clue: "What does 'parking the bus' mean in soccer tactics?", answer: "Putting all players behind the ball to defend", accept: ["putting all players behind the ball", "defensive tactic", "defending with all players", "packing the defense"], choices: ["Playing with 11 attackers", "Time-wasting near the corner flag", "Pressing high up the pitch"], diff: 4 }
    ],
    200: [
      { clue: "When a goalkeeper does not concede a single goal in a match, it is called a what?", answer: "Clean sheet", accept: ["clean sheet", "shutout"], choices: ["Blank slate", "Zero game", "Perfect defense"], diff: 1 },
      { clue: "The VAR system in soccer stands for what?", answer: "Video Assistant Referee", accept: ["video assistant referee", "var", "video assistant review"], choices: ["Virtual Athletic Review", "Video Action Replay", "Verified Automatic Ruling"], diff: 2 },
      { clue: "Scoring two goals in a single match is called a what?", answer: "Brace", accept: ["brace"], choices: ["Double", "Duo", "Twin strike"], diff: 3 },
      { clue: "In a two-legged cup tie, the 'aggregate' score is what?", answer: "Combined total score over both matches", accept: ["combined total score", "total goals over both legs", "sum of both games", "total from both matches"], choices: ["The score in the second leg only", "The score by the home team only", "The score after extra time"], diff: 4 }
    ],
    300: [
      { clue: "When a player is in an offside position, they must be closer to the opponent's goal than both the ball and who else?", answer: "The second-to-last defender", accept: ["second to last defender", "second-to-last defender", "the last outfield defender", "second defender"], choices: ["The goalkeeper", "The last two defenders", "The halfway line"], diff: 1 },
      { clue: "A match between two local rival clubs is called a what?", answer: "Derby", accept: ["derby", "local derby"], choices: ["Showdown", "Grudge match", "Clasico"], diff: 2 },
      { clue: "When a match is tied after 90 minutes in a knockout competition, what happens next?", answer: "Extra time", accept: ["extra time", "overtime"], choices: ["Penalty shootout immediately", "Replay the game", "Away goals rule"], diff: 3 },
      { clue: "An 'overhead kick' or 'bicycle kick' describes what type of acrobatic shot?", answer: "Kicking the ball backwards over your own head while airborne", accept: ["kicking backwards over head", "overhead kick", "bicycle kick", "kicking ball over own head"], choices: ["Spinning shot hit with the heel", "A diving header", "A volley struck with the chest"], diff: 4 }
    ],
    400: [
      { clue: "A 'red card' in soccer results in what?", answer: "The player is ejected from the game", accept: ["ejection", "player is sent off", "dismissed from the game", "removed from the game"], choices: ["A 10-minute suspension", "A penalty kick for the other team", "Loss of a substitute"], diff: 1 },
      { clue: "What is the 'offside trap' in soccer?", answer: "Defenders step up to catch attackers in an offside position", accept: ["defenders step up to catch attackers offside", "defensive tactic to trigger offside", "stepping up to put attackers offside"], choices: ["Trapping the ball before a goal kick", "A corner kick taken quickly", "Playing with a low defensive line"], diff: 2 },
      { clue: "'Tiki-taka' is a style of play known for short passing and ball possession. Which club and manager made it world-famous?", answer: "Barcelona under Pep Guardiola", accept: ["barcelona", "barca", "pep guardiola", "barcelona and pep guardiola"], choices: ["Real Madrid under Zinedine Zidane", "Liverpool under Jurgen Klopp", "Manchester City under Roberto Mancini"], diff: 3 },
      { clue: "What does 'pressing high' mean in modern soccer tactics?", answer: "Defending aggressively close to the opponent's goal to win the ball back quickly", accept: ["pressing close to opponent's goal", "high defensive line", "attacking press", "winning ball high up the pitch"], choices: ["Putting many players in the penalty area", "Playing long balls over the defense", "Sitting deep and counter-attacking"], diff: 4 }
    ]
  },
  4: { // MODERN ERA
    100: [
      { clue: "Manchester City won the Premier League, FA Cup, and Champions League in 2022-23, completing what achievement?", answer: "The Treble", accept: ["the treble", "treble"], choices: ["The Double", "The Grand Slam", "The Quadruple"], diff: 1 },
      { clue: "Kylian Mbappé signed for Real Madrid in 2024, leaving PSG on a free transfer. Which country does he represent?", answer: "France", accept: ["france", "french"], choices: ["Belgium", "Ivory Coast", "Senegal"], diff: 2 },
      { clue: "Lionel Messi joined Inter Miami in MLS in 2023. In which country is Miami located, and therefore which country's league did Messi join?", answer: "USA / MLS", accept: ["usa", "united states", "mls", "major league soccer"], choices: ["Mexico", "Canada", "Brazil"], diff: 3 },
      { clue: "Vinicius Jr. won the Ballon d'Or in 2024 and the Champions League with Real Madrid. What nationality is Vinicius Jr.?", answer: "Brazilian", accept: ["brazilian", "brazil"], choices: ["Spanish", "Portuguese", "Colombian"], diff: 4 }
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
