// HuddleUp Trivia � Golf Question Database

const GOLF_Q = {
  0: { // MAJOR CHAMPIONSHIPS
    100: [
      { clue: "This tournament is held every April at Augusta National Golf Club.", answer: "The Masters", accept: ["the masters", "masters", "masters tournament"], choices: ["The US Open", "The Open Championship", "PGA Championship"], diff: 1 },
      { clue: "How many major championships did Tiger Woods win in his career?", answer: "15", accept: ["15", "fifteen"], choices: ["14", "18", "12"], diff: 2 },
      { clue: "Jack Nicklaus holds the all-time record for most major championships. How many did he win?", answer: "18", accept: ["18", "eighteen"], choices: ["20", "15", "16"], diff: 2 },
      { clue: "Gene Sarazen's double eagle on the par-5 15th hole at Augusta in 1935 is known as the 'shot heard round the world.' What tournament was he playing?", answer: "The Masters", accept: ["the masters", "masters"], choices: ["US Open", "The Open Championship", "PGA Championship"], diff: 4 }
    ],
    200: [
      { clue: "Which major did Rory McIlroy win in 2025 to complete his career Grand Slam?", answer: "The Masters", accept: ["the masters", "masters", "masters tournament"], choices: ["US Open", "PGA Championship", "The Open Championship"], diff: 1 },
      { clue: "Scottie Scheffler won this 2024 major for his second time at Augusta.", answer: "The Masters", accept: ["the masters", "masters"], choices: ["US Open", "The Open Championship", "PGA Championship"], diff: 1 },
      { clue: "Xander Schauffele won both the 2024 PGA Championship and this 2024 major held at Royal Troon.", answer: "The Open Championship", accept: ["the open championship", "the open", "british open", "open championship"], choices: ["US Open", "The Masters", "PGA Championship"], diff: 2 },
      { clue: "Phil Mickelson won the 2021 PGA Championship at age 50, making him the oldest major winner in history. How old was he?", answer: "50", accept: ["50", "fifty"], choices: ["48", "51", "47"], diff: 2 }
    ],
    300: [
      { clue: "Tiger Woods won his first Masters in 1997 at age 21. By how many strokes did he win?", answer: "12", accept: ["12", "twelve"], choices: ["10", "8", "15"], diff: 2 },
      { clue: "Bryson DeChambeau won the 2024 US Open at this historic North Carolina venue.", answer: "Pinehurst", accept: ["pinehurst", "pinehurst no. 2", "pinehurst number 2"], choices: ["Pebble Beach", "Bethpage Black", "Winged Foot"], diff: 2 },
      { clue: "Ben Hogan won three majors in 1953 — the Masters, US Open, and The Open — but could not win the fourth major that year due to a scheduling conflict. Which major did he miss?", answer: "PGA Championship", accept: ["pga championship", "pga"], choices: ["He won all four", "The Masters", "US Open"], diff: 3 },
      { clue: "Bobby Jones completed a 'Grand Slam' in 1930, winning all four of the era's top amateur and professional titles. How many total majors did he win in his career?", answer: "13", accept: ["13", "thirteen"], choices: ["9", "11", "7"], diff: 4 }
    ],
    400: [
      { clue: "How many Masters titles did Tiger Woods win?", answer: "5", accept: ["5", "five"], choices: ["4", "3", "6"], diff: 1 },
      { clue: "Jack Nicklaus won his final Masters title in 1986 at age 46. What was historically significant about this win?", answer: "Oldest major winner (modern era)", accept: ["oldest major winner", "oldest winner", "oldest player to win a major"], choices: ["First back-to-back winner", "Won by record margin", "Lowest final round score"], diff: 2 },
      { clue: "Phil Mickelson won three Masters titles. In which years did he win at Augusta?", answer: "2004, 2006, 2010", accept: ["2004 2006 2010", "2004, 2006, 2010", "04 06 10"], choices: ["2002, 2006, 2010", "2004, 2008, 2012", "2003, 2006, 2009"], diff: 3 },
      { clue: "Tiger's first PGA Championship win came in 1999. How many PGA Championship titles did he win total?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 3 }
    ]
  },
  1: { // GOLF LEGENDS
    100: [
      { clue: "Known as 'The Golden Bear,' this golfer won a record 18 major championships.", answer: "Jack Nicklaus", accept: ["jack nicklaus", "nicklaus", "jack"], choices: ["Arnold Palmer", "Tiger Woods", "Gary Player"], diff: 1 },
      { clue: "Arnold Palmer was known as 'The King' and his loyal fan following was called what?", answer: "Arnie's Army", accept: ["arnie's army", "arnies army", "arnie army"], choices: ["Palmer's Platoon", "The King's Court", "Arnold's Angels"], diff: 2 },
      { clue: "This South African golfer, known for his fitness obsession, was the first international superstar of golf and won 9 majors.", answer: "Gary Player", accept: ["gary player", "player"], choices: ["Ernie Els", "Retief Goosen", "Nick Price"], diff: 2 },
      { clue: "Byron Nelson's 1945 season is legendary. How many consecutive PGA Tour events did he win that year?", answer: "11", accept: ["11", "eleven"], choices: ["9", "13", "8"], diff: 3 }
    ],
    200: [
      { clue: "Sam Snead and Tiger Woods are tied for the record of most PGA Tour wins. How many wins is that record?", answer: "82", accept: ["82", "eighty-two", "eighty two"], choices: ["79", "86", "75"], diff: 2 },
      { clue: "Known as 'The Hawk,' this golfer survived a near-fatal car accident in 1949 and returned to win the US Open in 1950.", answer: "Ben Hogan", accept: ["ben hogan", "hogan"], choices: ["Sam Snead", "Byron Nelson", "Jimmy Demaret"], diff: 2 },
      { clue: "Spanish legend Seve Ballesteros won 5 major championships. He was particularly known for his inspiring performances in what team competition?", answer: "Ryder Cup", accept: ["ryder cup", "the ryder cup"], choices: ["Presidents Cup", "Solheim Cup", "World Cup of Golf"], diff: 3 },
      { clue: "Australian Greg Norman, 'The Shark,' famously blew a 6-shot lead in the final round of which major in 1996?", answer: "The Masters", accept: ["the masters", "masters", "masters tournament"], choices: ["US Open", "The Open Championship", "PGA Championship"], diff: 3 }
    ],
    300: [
      { clue: "Tiger Woods has how many PGA Tour victories, a record he shares with Sam Snead?", answer: "82", accept: ["82", "eighty-two", "eighty two"], choices: ["79", "75", "86"], diff: 2 },
      { clue: "Nick Faldo won 6 majors total, split evenly between The Masters and which other major?", answer: "The Open Championship", accept: ["the open championship", "the open", "british open"], choices: ["US Open", "PGA Championship", "All four majors"], diff: 2 },
      { clue: "Sam Snead was famous for his smooth swing and his long career, but he famously never won which major?", answer: "US Open", accept: ["us open", "u.s. open", "united states open"], choices: ["The Masters", "PGA Championship", "The Open Championship"], diff: 3 },
      { clue: "Arnold Palmer won 7 major championships. Which major did he win the most times (4 times)?", answer: "The Masters", accept: ["the masters", "masters"], choices: ["US Open", "The Open Championship", "PGA Championship"], diff: 3 }
    ],
    400: [
      { clue: "Jack Nicklaus won how many Masters titles?", answer: "6", accept: ["6", "six"], choices: ["5", "4", "7"], diff: 2 },
      { clue: "Gary Player completed a career Grand Slam, meaning he won all four major championships at least once. How many total majors did he win?", answer: "9", accept: ["9", "nine"], choices: ["7", "11", "8"], diff: 2 },
      { clue: "Byron Nelson won 18 PGA Tour events in 1945. What is the total number of tournaments he played that remarkable year?", answer: "30", accept: ["30", "thirty"], choices: ["24", "35", "28"], diff: 3 },
      { clue: "Seve Ballesteros won The Open Championship twice. In which two years did he win?", answer: "1979 and 1984", accept: ["1979 and 1984", "1979 1984", "79 and 84", "79 84"], choices: ["1976 and 1980", "1980 and 1985", "1983 and 1988"], diff: 4 }
    ]
  },
  2: { // RECORDS & FIRSTS
    100: [
      { clue: "Tiger Woods won the 1997 Masters at age 21, making him the youngest Masters champion. By how many strokes did he win?", answer: "12", accept: ["12", "twelve"], choices: ["8", "15", "10"], diff: 2 },
      { clue: "Phil Mickelson became the oldest major winner in history when he won the 2021 PGA Championship. How old was he?", answer: "50", accept: ["50", "fifty"], choices: ["47", "48", "52"], diff: 2 },
      { clue: "Dustin Johnson set a Masters scoring record in 2020 with what total score (strokes under par)?", answer: "20 under par", accept: ["20 under par", "20 under", "-20", "20-under", "268"], choices: ["18 under par", "22 under par", "17 under par"], diff: 3 },
      { clue: "Annika Sorenstam made history in 2003 by becoming the first woman to play a PGA Tour event in nearly 60 years. Which tournament did she play?", answer: "Colonial", accept: ["colonial", "bank of america colonial", "the colonial"], choices: ["The Players Championship", "Pebble Beach Pro-Am", "Phoenix Open"], diff: 3 }
    ],
    200: [
      { clue: "Tiger Woods won the 2000 US Open by how many strokes — a record margin of victory?", answer: "15", accept: ["15", "fifteen"], choices: ["12", "10", "18"], diff: 2 },
      { clue: "Jack Nicklaus won his 18th and final major at the 1986 Masters at what age, making him the oldest modern-era major champion?", answer: "46", accept: ["46", "forty-six", "forty six"], choices: ["44", "48", "43"], diff: 2 },
      { clue: "Tiger Woods held all four major championship titles simultaneously in 2000-2001. What is this feat called?", answer: "Tiger Slam", accept: ["tiger slam", "the tiger slam"], choices: ["Grand Slam", "Calendar Slam", "Career Grand Slam"], diff: 3 },
      { clue: "Young Tom Morris won how many consecutive Open Championships between 1868 and 1872?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "6"], diff: 4 }
    ],
    300: [
      { clue: "How many PGA Tour wins does Tiger Woods have — a record he shares with Sam Snead?", answer: "82", accept: ["82", "eighty-two", "eighty two"], choices: ["75", "79", "86"], diff: 2 },
      { clue: "Tiger Woods completed his career Grand Slam (winning all four different majors) at which 2000 major?", answer: "The Open Championship", accept: ["the open championship", "the open", "british open", "st andrews"], choices: ["US Open", "PGA Championship", "The Masters"], diff: 2 },
      { clue: "Annika Sorenstam holds the record for most LPGA Tour wins. How many did she win?", answer: "72", accept: ["72", "seventy-two", "seventy two"], choices: ["68", "60", "80"], diff: 3 },
      { clue: "Tiger Woods' 2000 US Open win at Pebble Beach was by 15 strokes — a record. What was his winning score (under par)?", answer: "12 under par", accept: ["12 under par", "12 under", "-12", "272"], choices: ["15 under par", "10 under par", "8 under par"], diff: 4 }
    ],
    400: [
      { clue: "At what age did Tiger Woods win his first Masters title in 1997?", answer: "21", accept: ["21", "twenty-one", "twenty one"], choices: ["23", "22", "20"], diff: 1 },
      { clue: "Phil Mickelson won the 2021 PGA Championship at Kiawah Island — how many years older was he than the previous oldest major winner record?", answer: "4 years", accept: ["4 years", "four years", "4"], choices: ["2 years", "6 years", "3 years"], diff: 3 },
      { clue: "Dustin Johnson's record Masters score of 268 (-20) in 2020 beat the previous record by how many strokes?", answer: "2", accept: ["2", "two"], choices: ["4", "1", "3"], diff: 3 },
      { clue: "Tiger Woods set a record for consecutive PGA Tour cuts made. Approximately how many consecutive cuts did he make?", answer: "142", accept: ["142", "one hundred forty-two"], choices: ["118", "156", "130"], diff: 4 }
    ]
  },
  3: { // GOLF LINGO
    100: [
      { clue: "In golf, scoring one stroke under par on a hole is called a what?", answer: "Birdie", accept: ["birdie"], choices: ["Eagle", "Bogey", "Par"], diff: 1 },
      { clue: "A score of two strokes under par on a single hole is called an what?", answer: "Eagle", accept: ["eagle"], choices: ["Birdie", "Albatross", "Condor"], diff: 1 },
      { clue: "A score of one stroke over par on a hole is called a what?", answer: "Bogey", accept: ["bogey"], choices: ["Birdie", "Double bogey", "Par"], diff: 1 },
      { clue: "In golf, a 'links' course refers to what type of terrain?", answer: "Coastal/sandy terrain", accept: ["coastal", "sandy", "coastal sandy terrain", "seaside", "links land", "ocean", "seaside terrain"], choices: ["Mountain terrain", "Parkland/tree-lined", "Desert terrain"], diff: 2 }
    ],
    200: [
      { clue: "What golf term describes completing a hole with a single stroke?", answer: "Hole-in-one", accept: ["hole-in-one", "hole in one", "ace"], choices: ["Condor", "Eagle", "Albatross"], diff: 1 },
      { clue: "In match play, a short putt that is conceded by your opponent is called a what?", answer: "Gimme", accept: ["gimme", "gimmie"], choices: ["Mulligan", "Tap-in", "Concession"], diff: 2 },
      { clue: "A golf hole that bends left or right is called a what?", answer: "Dog-leg", accept: ["dog-leg", "dogleg", "dog leg"], choices: ["Snake hole", "Banana hole", "Boomerang hole"], diff: 2 },
      { clue: "What is the term for the involuntary wrist spasms that can ruin a golfer's putting stroke?", answer: "The yips", accept: ["yips", "the yips"], choices: ["The shakes", "The wobbles", "The flinches"], diff: 2 }
    ],
    300: [
      { clue: "A score of three strokes under par on a single hole — extremely rare — is called an albatross or what else?", answer: "Double eagle", accept: ["double eagle", "albatross"], choices: ["Triple birdie", "Super eagle", "Condor"], diff: 2 },
      { clue: "An informal do-over shot in casual golf that is NOT allowed in formal competition is called a what?", answer: "Mulligan", accept: ["mulligan"], choices: ["Redo", "Gimme", "Provisional"], diff: 2 },
      { clue: "A numerical measure of a golfer's potential ability used to level competition between players of different skill levels is called a what?", answer: "Handicap", accept: ["handicap", "golf handicap"], choices: ["Scratch", "Index", "Rating"], diff: 2 },
      { clue: "In a 72-hole tournament, 'making the cut' means what?", answer: "Scoring low enough after 36 holes to continue playing", accept: ["scoring low enough to continue", "advancing past 36 holes", "qualifying for the final two rounds", "advancing after two rounds"], choices: ["Finishing in the top 10", "Completing 72 holes", "Earning prize money"], diff: 2 }
    ],
    400: [
      { clue: "In golf, what does 'par' mean?", answer: "The expected number of strokes for a hole or round", accept: ["expected number of strokes", "standard score", "the target score"], choices: ["The lowest possible score", "One under average", "The course record"], diff: 1 },
      { clue: "A slight left or right curve of the ball in flight — intentional in skilled golfers — is called a fade or a what?", answer: "Draw", accept: ["draw", "fade or draw", "draw or fade"], choices: ["Hook", "Slice", "Punch"], diff: 2 },
      { clue: "What term describes a coastal Scottish-style golf course laid out on natural sandy terrain, often near the sea?", answer: "Links", accept: ["links", "links course"], choices: ["Heathland", "Parkland", "Moorland"], diff: 2 },
      { clue: "In stroke play, what does it mean to be 'on the cut line'?", answer: "Exactly at the score needed to advance to the final rounds", accept: ["at the score to advance", "at the qualifying score", "at the threshold to continue"], choices: ["Leading the tournament", "In last place", "Tied for the lead"], diff: 2 }
    ]
  },
  4: { // MODERN ERA
    100: [
      { clue: "Scottie Scheffler won this medal at the 2024 Paris Olympics in golf.", answer: "Gold medal", accept: ["gold medal", "gold", "olympic gold"], choices: ["Silver medal", "Bronze medal", "He did not medal"], diff: 1 },
      { clue: "Rory McIlroy completed the career Grand Slam in 2025. Which major was the final one he captured to do so?", answer: "The Masters", accept: ["the masters", "masters", "masters tournament"], choices: ["US Open", "PGA Championship", "The Open Championship"], diff: 1 },
      { clue: "Jon Rahm won the 2023 Masters and then made a controversial move to join which Saudi-backed rival golf tour in 2024?", answer: "LIV Golf", accept: ["liv golf", "liv"], choices: ["Asian Tour", "DP World Tour", "PGA Tour Asia"], diff: 2 },
      { clue: "Collin Morikawa won The Open Championship in 2021 — his second major. What was his first major title, won in 2020?", answer: "PGA Championship", accept: ["pga championship", "pga"], choices: ["US Open", "The Masters", "The Open Championship"], diff: 3 }
    ],
    200: [
      { clue: "Bryson DeChambeau is known for his scientific approach to golf. He won which 2024 major at Pinehurst?", answer: "US Open", accept: ["us open", "u.s. open"], choices: ["The Masters", "PGA Championship", "The Open Championship"], diff: 1 },
      { clue: "LIV Golf, the Saudi-backed rival tour, launched in which year?", answer: "2022", accept: ["2022", "twenty twenty-two"], choices: ["2021", "2023", "2020"], diff: 2 },
      { clue: "Brooks Koepka has won 4 major championships — 2 US Opens and 2 PGA Championships. In which year did he win his first US Open?", answer: "2017", accept: ["2017", "twenty seventeen"], choices: ["2015", "2018", "2016"], diff: 3 },
      { clue: "Scottie Scheffler held the World No. 1 ranking for most of 2024. How many PGA Tour wins did he have in the 2023-24 season?", answer: "9", accept: ["9", "nine"], choices: ["7", "6", "8"], diff: 3 }
    ],
    300: [
      { clue: "Kylian Mbappé signed with Real Madrid in 2024 — but in golf's modern era, which golfer joined Al Nassr in 2023? (trick question — this is a soccer fact; in golf, which player is ranked #1 in 2024?)", answer: "Scottie Scheffler", accept: ["scottie scheffler", "scheffler"], choices: ["Rory McIlroy", "Jon Rahm", "Xander Schauffele"], diff: 1 },
      { clue: "Xander Schauffele won two major championships in 2024. Name either one.", answer: "PGA Championship or The Open Championship", accept: ["pga championship", "the open championship", "the open", "pga", "british open"], choices: ["US Open and Masters", "Masters and PGA", "US Open and The Open"], diff: 2 },
      { clue: "Brooks Koepka was one of the first high-profile PGA Tour players to join LIV Golf. How many major championships did he win before joining?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 2 },
      { clue: "Collin Morikawa won 2 major championships in his first 3 major appearances. What is the name of the second major he won (The Open Championship) and in what year?", answer: "2021", accept: ["2021", "twenty twenty-one"], choices: ["2020", "2022", "2023"], diff: 3 }
    ],
    400: [
      { clue: "Scottie Scheffler won how many Masters titles as of 2024?", answer: "2", accept: ["2", "two"], choices: ["1", "3", "4"], diff: 1 },
      { clue: "Rory McIlroy won back-to-back majors in 2014. Which two majors did he win that year?", answer: "The Open Championship and PGA Championship", accept: ["the open and pga", "open championship and pga championship", "open championship and pga", "pga championship and the open championship"], choices: ["Masters and US Open", "US Open and PGA Championship", "Masters and The Open"], diff: 2 },
      { clue: "Bryson DeChambeau is also known by a nickname based on his analytical approach to golf. What is his nickname?", answer: "The Scientist", accept: ["the scientist", "scientist", "mad scientist"], choices: ["The Professor", "The Calculator", "The Engineer"], diff: 2 },
      { clue: "Jon Rahm won the 2021 US Open and 2023 Masters. What country does he represent?", answer: "Spain", accept: ["spain", "spanish"], choices: ["Argentina", "Mexico", "Portugal"], diff: 2 }
    ]
  },
  5: { // RYDER CUP
    100: [
      { clue: "The Ryder Cup is a team golf competition between which two sides?", answer: "USA vs Europe", accept: ["usa vs europe", "united states vs europe", "united states and europe", "america and europe"], choices: ["USA vs World", "Europe vs Asia", "USA vs Great Britain"], diff: 1 },
      { clue: "How often is the Ryder Cup held?", answer: "Every 2 years", accept: ["every 2 years", "every two years", "biennial", "biennially"], choices: ["Every year", "Every 4 years", "Every 3 years"], diff: 1 },
      { clue: "Europe won the 2023 Ryder Cup in Rome by what dominant score?", answer: "16.5 to 11.5", accept: ["16.5 to 11.5", "16.5-11.5", "16½ to 11½"], choices: ["14 to 14 (tie)", "18 to 10", "15 to 13"], diff: 3 },
      { clue: "In the famous '1969 Concession,' Jack Nicklaus conceded a putt to which British player to halve the final match and tie the Ryder Cup?", answer: "Tony Jacklin", accept: ["tony jacklin", "jacklin"], choices: ["Lee Trevino", "Peter Alliss", "Brian Huggett"], diff: 4 }
    ],
    200: [
      { clue: "The USA had its biggest Ryder Cup victory ever in 2021 at Whistling Straits, winning by what score?", answer: "19 to 9", accept: ["19 to 9", "19-9"], choices: ["17 to 11", "18 to 10", "20 to 8"], diff: 2 },
      { clue: "Which Spanish legend is considered the heart and soul of European Ryder Cup teams from 1979 to 1995?", answer: "Seve Ballesteros", accept: ["seve ballesteros", "seve", "ballesteros"], choices: ["Nick Faldo", "Bernhard Langer", "Ian Woosnam"], diff: 2 },
      { clue: "Europe first won the Ryder Cup on American soil in which year?", answer: "1987", accept: ["1987", "eighty-seven"], choices: ["1985", "1989", "1991"], diff: 3 },
      { clue: "Francesco Molinari had an unbeaten record at the 2018 Ryder Cup in Paris, going 5-0. What nationality is Molinari?", answer: "Italian", accept: ["italian", "italy"], choices: ["Spanish", "French", "Swedish"], diff: 3 }
    ],
    300: [
      { clue: "Before 1979, the Ryder Cup featured the USA versus which opponent?", answer: "Great Britain and Ireland", accept: ["great britain and ireland", "great britain", "britain and ireland", "gb and ireland", "gb&i"], choices: ["Europe", "The Commonwealth", "England"], diff: 2 },
      { clue: "Phil Mickelson holds the US record for most Ryder Cup appearances. How many times did he compete?", answer: "12", accept: ["12", "twelve"], choices: ["10", "11", "13"], diff: 3 },
      { clue: "Tiger Woods holds the USA record for most Ryder Cup points earned. Despite his individual excellence, what is his overall Ryder Cup win-loss record generally considered?", answer: "Disappointing/poor", accept: ["disappointing", "poor", "below expectations", "losing record", "more losses than wins"], choices: ["Outstanding", "Even/balanced", "Perfect record"], diff: 2 },
      { clue: "At the 2018 Ryder Cup in Paris, Europe beat the USA. What was the final score of Europe's victory?", answer: "17.5 to 10.5", accept: ["17.5 to 10.5", "17.5-10.5", "17½ to 10½"], choices: ["15 to 13", "16 to 12", "18 to 10"], diff: 3 }
    ],
    400: [
      { clue: "The 2023 Ryder Cup was held in which city?", answer: "Rome", accept: ["rome", "rome italy", "italy"], choices: ["Paris", "London", "Madrid"], diff: 1 },
      { clue: "Europe began its era of Ryder Cup dominance in 1985. In which country was that match played?", answer: "England", accept: ["england", "great britain", "uk", "the belfry"], choices: ["Scotland", "Ireland", "Wales"], diff: 2 },
      { clue: "The 2021 Ryder Cup was held at Whistling Straits in which US state?", answer: "Wisconsin", accept: ["wisconsin"], choices: ["Minnesota", "Michigan", "Ohio"], diff: 2 },
      { clue: "Seve Ballesteros captained which Ryder Cup team to victory in 1997 at Valderrama, Spain?", answer: "Europe", accept: ["europe", "european team", "team europe"], choices: ["USA", "Great Britain and Ireland", "International"], diff: 3 }
    ]
  }
};

const GOLF_FINALS = [
  { category: "MAJOR CHAMPIONSHIPS", clue: "Tiger Woods won the 2019 Masters for his 15th and most recent major title. How many years had passed since his previous major win in 2008?", answer: "11 years", accept: ["11 years", "eleven years", "11"] },
  { category: "GOLF LEGENDS", clue: "Jack Nicklaus won 18 major championships. How many of those were PGA Championship titles?", answer: "5", accept: ["5", "five"] },
  { category: "GOLF LINGO", clue: "What is the term for when a golfer hits the ball through an opponent's legs in a playful or skillful move?", answer: "Nutmeg", accept: ["nutmeg"] },
  { category: "RYDER CUP", clue: "Francesco Molinari went unbeaten (5-0) at the 2018 Ryder Cup for Team Europe. What country does he represent?", answer: "Italy", accept: ["italy", "italian"] }
];


const GOLF_EXTRA = {
  // CATEGORY 0: MAJOR CHAMPIONSHIPS
  0: {
    100: [
      { clue: "Since 1949, the winner of the Masters Tournament is awarded this iconic green-colored item of clothing.", answer: "Green Jacket", accept: ["green jacket", "the green jacket", "green blazer"], choices: ["Gold Medal", "Silver Cup", "Claret Jug"], diff: 1 },
      {
        clue: "This Englishman blew a 5-shot lead at the 2016 Masters, allowing Danny Willett to slip on the green jacket.",
        answer: "Jordan Spieth",
        accept: ["jordan spieth", "spieth"],
        choices: ["Rory McIlroy", "Phil Mickelson", "Justin Rose"],
        diff: 1
      },
      {
        clue: "Bubba Watson won the 2012 Masters in a sudden-death playoff, holing out after an audacious hooked wedge from the trees at this hole.",
        answer: "10th hole",
        accept: ["10th hole", "hole 10", "tenth hole", "number 10"],
        choices: ["11th hole", "13th hole", "18th hole"],
        diff: 1
      },
      {
        clue: "Graeme McDowell's 2010 US Open win at Pebble Beach made him the first European to win that title since which year?",
        answer: "1970",
        accept: ["1970"],
        choices: ["1965", "1975", "1980"],
        diff: 1
      },
      {
        clue: "Hideki Matsuyama's 2021 Masters victory made him the first man from this country to win a golf major.",
        answer: "Japan",
        accept: ["japan"],
        choices: ["South Korea", "China", "Australia"],
        diff: 1
      },
      {
        clue: "Padraig Harrington won back-to-back Open Championships in these two consecutive years.",
        answer: "2007 and 2008",
        accept: ["2007 and 2008", "2007-2008", "2007 2008"],
        choices: ["2006 and 2007", "2008 and 2009", "2005 and 2006"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Rory McIlroy set the all-time US Open 72-hole scoring record at this 2011 venue, finishing at 16-under 268.",
        answer: "Congressional Country Club",
        accept: ["congressional", "congressional country club"],
        choices: ["Oakmont", "Pebble Beach", "Bethpage Black"],
        diff: 2
      },
      {
        clue: "Justin Thomas won the 2022 PGA Championship in a playoff after this Chilean player made a double bogey on the 72nd hole to collapse.",
        answer: "Mito Pereira",
        accept: ["mito pereira", "pereira"],
        choices: ["Will Zalatoris", "Cameron Young", "Matthew Fitzpatrick"],
        diff: 2
      },
      {
        clue: "Louis Oosthuizen won the 2010 Open Championship at St Andrews by this many strokes, dominating the field.",
        answer: "7",
        accept: ["7", "seven"],
        choices: ["5", "4", "3"],
        diff: 2
      },
      {
        clue: "Scottie Scheffler won his first major at the 2022 Masters. This was his first season achieving which ranking milestone?",
        answer: "World number 1",
        accept: ["world number 1", "world number one", "number 1 in the world", "#1"],
        choices: ["World number 2", "World number 5", "Top 10"],
        diff: 2
      },
      {
        clue: "Curtis Strange became the first player since Ben Hogan to win back-to-back US Opens when he defended his title in 1989 at this course.",
        answer: "Oak Hill",
        accept: ["oak hill"],
        choices: ["Winged Foot", "Merion", "Brookline"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Tiger Woods won the 2008 US Open at Torrey Pines on a broken leg and torn ACL, defeating this opponent in sudden death.",
        answer: "Rocco Mediate",
        accept: ["rocco mediate", "mediate"],
        choices: ["Lee Westwood", "Sergio Garcia", "Jim Furyk"],
        diff: 3
      },
      {
        clue: "Lee Trevino completed his six major championships with his 1984 PGA Championship win at age 44, at this age he became the first player to shoot all four rounds under par 70 in that major.",
        answer: "44",
        accept: ["44", "forty-four", "forty four"],
        choices: ["46", "48", "42"],
        diff: 3
      },
      {
        clue: "Padraig Harrington won the 2008 PGA Championship, becoming the first European to win that major since Tommy Armour in 1930. Harrington is from this country.",
        answer: "Ireland",
        accept: ["ireland", "republic of ireland"],
        choices: ["Scotland", "England", "Wales"],
        diff: 3
      },
      {
        clue: "Nick Price won two majors in the same calendar year in 1994: the Open Championship at Turnberry and this other major.",
        answer: "PGA Championship",
        accept: ["pga championship", "pga"],
        choices: ["US Open", "Masters", "Players Championship"],
        diff: 3
      },
      {
        clue: "Danny Willett won the 2016 Masters while Jordan Spieth was in the clubhouse. Willett was the first player from this country to win the Masters since Nick Faldo in 1996.",
        answer: "England",
        accept: ["england", "english"],
        choices: ["Scotland", "Ireland", "Wales"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Curtis Strange's 1988 US Open victory at Brookline came after a playoff against which Hall of Fame player from England?",
        answer: "Nick Faldo",
        accept: ["nick faldo", "faldo"],
        choices: ["Sandy Lyle", "Ian Woosnam", "Bernhard Langer"],
        diff: 4
      },
      {
        clue: "Lee Trevino famously won three different major titles in a remarkable 20-day span in the summer of 1971. Name two of those three titles.",
        answer: "US Open, Canadian Open, Open Championship",
        accept: ["us open", "open championship", "canadian open", "british open"],
        choices: ["Masters, PGA, US Open", "PGA, US Open, British Open", "Masters, British Open, Canadian Open"],
        diff: 4
      },
      {
        clue: "Tiger Woods' 2019 Masters win came how many years after his previous major, the 2008 US Open?",
        answer: "11 years",
        accept: ["11", "eleven", "11 years"],
        choices: ["9 years", "13 years", "10 years"],
        diff: 4
      },
      {
        clue: "In 1977, Tom Watson and Jack Nicklaus separated themselves from the field by a wide margin at Turnberry. What name was given to their epic final-round duel?",
        answer: "Duel in the Sun",
        accept: ["duel in the sun"],
        choices: ["Battle at Turnberry", "Sun Showdown", "Scottish Standoff"],
        diff: 4
      },
      {
        clue: "Dustin Johnson won the 2016 US Open at Oakmont despite receiving a controversial one-shot penalty. What was the final winning score?",
        answer: "4 under par",
        accept: ["4 under", "4 under par", "-4", "four under", "276"],
        choices: ["6 under par", "2 under par", "8 under par"],
        diff: 4
      }
    ]
  },

  // CATEGORY 1: GOLF LEGENDS
  1: {
    100: [
      {
        clue: "Phil Mickelson is nicknamed 'Lefty' because he swings a club left-handed, yet he does nearly everything else with this hand.",
        answer: "Right hand",
        accept: ["right hand", "right", "right-handed"],
        choices: ["Left hand", "Both hands equally", "He is ambidextrous"],
        diff: 1
      },
      {
        clue: "This golfer won 6 major championships: 2 US Opens, 2 Open Championships, and 2 PGA Championships, and is nicknamed 'Super Mex'.",
        answer: "Lee Trevino",
        accept: ["lee trevino", "trevino"],
        choices: ["Chi-Chi Rodriguez", "Raymond Floyd", "Hale Irwin"],
        diff: 1
      },
      {
        clue: "Tom Watson won five Open Championships, with his first coming in 1975. He is also remembered for his rivalry with this fellow legend in the 1970s and 1980s.",
        answer: "Jack Nicklaus",
        accept: ["jack nicklaus", "nicklaus"],
        choices: ["Arnold Palmer", "Gary Player", "Lee Trevino"],
        diff: 1
      },
      {
        clue: "Nicknamed 'The Big Easy' for his smooth, effortless swing, this South African won 4 majors: 2 US Opens and 2 Open Championships.",
        answer: "Ernie Els",
        accept: ["ernie els", "els"],
        choices: ["Retief Goosen", "Trevor Immelman", "Tim Clark"],
        diff: 1
      },
      {
        clue: "Vijay Singh is from this Pacific island nation and won 3 majors including the 2000 Masters.",
        answer: "Fiji",
        accept: ["fiji"],
        choices: ["Samoa", "Papua New Guinea", "Tonga"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Phil Mickelson learned to swing left-handed by mirroring his right-handed father. He actually signs autographs and performs daily tasks with this hand.",
        answer: "Right hand",
        accept: ["right hand", "right"],
        choices: ["Left hand", "Either hand", "Both hands"],
        diff: 2
      },
      {
        clue: "Lee Trevino won his final major, the 1984 PGA Championship, at the age of 44 with this winning total score of 15-under par.",
        answer: "273",
        accept: ["273", "15 under par", "15 under", "-15"],
        choices: ["270", "275", "268"],
        diff: 2
      },
      {
        clue: "Nick Price's dominant mid-1990s form included winning the 1994 Open Championship at Turnberry with a memorable eagle putt on the second-to-last hole of how many feet?",
        answer: "50 feet",
        accept: ["50 feet", "50", "about 50 feet", "18 metres"],
        choices: ["30 feet", "15 feet", "70 feet"],
        diff: 2
      },
      {
        clue: "Vijay Singh set the PGA Tour single-season earnings record in 2004 when he won nine times and surpassed this dollar amount.",
        answer: "$10 million",
        accept: ["10 million", "$10 million", "10905166"],
        choices: ["$8 million", "$12 million", "$9 million"],
        diff: 2
      },
      {
        clue: "Tom Watson defeated Jack Nicklaus by one stroke at the 1977 Open Championship, held at this Scottish course.",
        answer: "Turnberry",
        accept: ["turnberry", "ailsa course turnberry"],
        choices: ["St Andrews", "Muirfield", "Carnoustie"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Tom Watson won his fifth and final Open Championship in 1983. He also had a heartbreaking near-miss at Turnberry in 2009 at age 59, losing a playoff to this golfer.",
        answer: "Stewart Cink",
        accept: ["stewart cink", "cink"],
        choices: ["Lee Westwood", "Padraig Harrington", "Sergio Garcia"],
        diff: 3
      },
      {
        clue: "Ernie Els won his fourth major at the 2012 Open Championship at Royal Lytham, with this golfer missing a short putt on the final hole to hand Els the title.",
        answer: "Adam Scott",
        accept: ["adam scott", "scott"],
        choices: ["Brandt Snedeker", "Tiger Woods", "Luke Donald"],
        diff: 3
      },
      {
        clue: "Vijay Singh held the world number 1 ranking for 32 weeks in 2004, displacing Tiger Woods. Singh's total career PGA Tour wins number what?",
        answer: "34",
        accept: ["34", "thirty-four"],
        choices: ["29", "41", "38"],
        diff: 3
      },
      {
        clue: "Padraig Harrington won the 2007 Open Championship in a playoff at Carnoustie, beating this Spanish player who led going into the 18th hole.",
        answer: "Sergio Garcia",
        accept: ["sergio garcia", "garcia"],
        choices: ["Miguel Angel Jimenez", "Jose Maria Olazabal", "Angel Cabrera"],
        diff: 3
      },
      {
        clue: "Curtis Strange's consecutive US Open victories in 1988 and 1989 made him the first player to defend the US Open since Hogan in 1951. What score did Strange shoot in the 1988 playoff against Nick Faldo?",
        answer: "71",
        accept: ["71"],
        choices: ["69", "73", "68"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Lee Trevino was the first player to shoot all four rounds under 70 at a PGA Championship. He accomplished this at his 1984 win at this course.",
        answer: "Shoal Creek",
        accept: ["shoal creek"],
        choices: ["Southern Hills", "Oak Hill", "Riviera"],
        diff: 4
      },
      {
        clue: "Nick Price won back-to-back majors in 1994, becoming the seventh golfer to do so. The first was the Open at Turnberry; the PGA Championship came weeks later at this course.",
        answer: "Southern Hills",
        accept: ["southern hills"],
        choices: ["Shoal Creek", "Valhalla", "Baltusrol"],
        diff: 4
      },
      {
        clue: "Ernie Els won the 1994 US Open at Oakmont, defeating this American and Colin Montgomerie in an 18-hole playoff.",
        answer: "Loren Roberts",
        accept: ["loren roberts", "roberts"],
        choices: ["Fuzzy Zoeller", "Curtis Strange", "Tom Kite"],
        diff: 4
      },
      {
        clue: "Tom Watson's final round at the 1982 US Open at Pebble Beach included a miraculous chip-in birdie at the 17th hole from this location.",
        answer: "The rough",
        accept: ["rough", "the rough", "deep rough"],
        choices: ["A bunker", "A fairway lie", "The fringe"],
        diff: 4
      },
      {
        clue: "Vijay Singh won three majors. His first was the 1998 PGA Championship, won at this course.",
        answer: "Sahalee Country Club",
        accept: ["sahalee", "sahalee country club"],
        choices: ["Valhalla", "Medinah", "Hazeltine"],
        diff: 4
      }
    ]
  },

  // CATEGORY 2: RECORDS & FIRSTS
  2: {
    100: [
      {
        clue: "Lee Elder became the first African-American man to play in the Masters Tournament in this year.",
        answer: "1975",
        accept: ["1975"],
        choices: ["1968", "1972", "1980"],
        diff: 1
      },
      {
        clue: "Augusta National Golf Club admitted its first female members in 2012. Former US Secretary of State Condoleezza Rice was one; this former chairman of IBM was the other.",
        answer: "Darla Moore",
        accept: ["darla moore", "moore"],
        choices: ["Katherine Graham", "Martha Burk", "Angela Merkel"],
        diff: 1
      },
      {
        clue: "Rory McIlroy holds the US Open 72-hole record with this score set at Congressional in 2011.",
        answer: "268",
        accept: ["268", "16 under", "16-under", "-16"],
        choices: ["272", "270", "265"],
        diff: 1
      },
      {
        clue: "This golfer was the first Japanese man to win a major when he captured the 2021 Masters.",
        answer: "Hideki Matsuyama",
        accept: ["hideki matsuyama", "matsuyama"],
        choices: ["Ryo Ishikawa", "Shingo Katayama", "Keita Nakajima"],
        diff: 1
      },
      {
        clue: "This powerful American won back-to-back US Opens in 2017 and 2018, becoming the first man in 29 years to successfully defend the title.",
        answer: "Brooks Koepka",
        accept: ["brooks koepka", "koepka"],
        choices: ["Dustin Johnson", "Justin Thomas", "Jon Rahm"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "The 2010 Open Championship at St Andrews was won by Louis Oosthuizen, who finished 7 strokes clear. This was the largest winning margin at the Open since Tiger Woods won by this margin in 2000.",
        answer: "8",
        accept: ["8", "eight"],
        choices: ["6", "5", "10"],
        diff: 2
      },
      {
        clue: "Phil Mickelson became only the third lefty to win a major. The first was Bob Charles (1963 Open), the second was Mike Weir (2003 Masters). Mickelson broke through with his first major at this event.",
        answer: "2004 Masters",
        accept: ["2004 masters", "masters 2004", "the masters"],
        choices: ["2005 PGA Championship", "2013 Open Championship", "2006 Masters"],
        diff: 2
      },
      {
        clue: "Rory McIlroy's 2011 US Open victory at Congressional set how many scoring records in total at the event?",
        answer: "12",
        accept: ["12", "twelve"],
        choices: ["8", "6", "15"],
        diff: 2
      },
      {
        clue: "This golfer was the first European to win the US Open since Tony Jacklin in 1970, winning at Pebble Beach in 2010.",
        answer: "Graeme McDowell",
        accept: ["graeme mcdowell", "mcdowell", "g-mac"],
        choices: ["Lee Westwood", "Luke Donald", "Martin Kaymer"],
        diff: 2
      },
      {
        clue: "Tiger Woods' 2008 US Open playoff against Rocco Mediate became the most-viewed golf event in cable TV history. Woods played on a double stress fracture in his left tibia AND a torn ligament in which leg?",
        answer: "Left leg",
        accept: ["left leg", "left", "left ACL"],
        choices: ["Right leg", "Both legs", "Neither, it was his wrist"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Only three golfers have successfully defended their US Open title since WWII: Ben Hogan (1951), Curtis Strange (1989), and this golfer who did it in 2018.",
        answer: "Brooks Koepka",
        accept: ["brooks koepka", "koepka"],
        choices: ["Dustin Johnson", "Tiger Woods", "Rory McIlroy"],
        diff: 3
      },
      {
        clue: "Hideki Matsuyama was the second Asian man to win a major, following Y.E. Yang who won the 2009 PGA Championship. Yang's nationality is?",
        answer: "South Korean",
        accept: ["south korean", "south korea", "korean"],
        choices: ["Japanese", "Chinese", "Thai"],
        diff: 3
      },
      {
        clue: "Lee Elder earned his 1975 Masters invitation by winning the 1974 Monsanto Open. At Augusta that year, he missed the cut after shooting 74 and this score in round two.",
        answer: "78",
        accept: ["78"],
        choices: ["80", "76", "82"],
        diff: 3
      },
      {
        clue: "The 2012 Open Championship at Royal Lytham produced a record-setting finish when Ernie Els won at 7-under par and Adam Scott missed a putt on the last hole. What was Scott's final round bogey count on the last four holes?",
        answer: "4",
        accept: ["4", "four"],
        choices: ["3", "2", "5"],
        diff: 3
      },
      {
        clue: "Justin Thomas' 2022 PGA Championship comeback saw him erase a 7-shot deficit on the final day. This was tied for the joint-third largest 54-hole deficit overcome in major history.",
        answer: "7",
        accept: ["7", "seven"],
        choices: ["5", "9", "10"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "When Graeme McDowell won the 2010 US Open, the previous European to win had been Tony Jacklin. At which course did Jacklin claim his 1970 US Open title?",
        answer: "Hazeltine",
        accept: ["hazeltine", "hazeltine national"],
        choices: ["Pebble Beach", "Medinah", "Baltusrol"],
        diff: 4
      },
      {
        clue: "Nick Price won both his 1994 majors within weeks of each other, equaling this record of back-to-back major wins held by 7 players before him.",
        answer: "Back-to-back majors in the same year",
        accept: ["back to back", "two majors same year", "back-to-back majors"],
        choices: ["Wire-to-wire wins", "Three consecutive rounds under 65", "Leading from round one"],
        diff: 4
      },
      {
        clue: "Tiger Woods' 2019 Masters win made him the second oldest Masters winner at age 43. The oldest Masters winner remains Jack Nicklaus, who won his sixth green jacket at age what?",
        answer: "46",
        accept: ["46", "forty-six"],
        choices: ["44", "48", "50"],
        diff: 4
      },
      {
        clue: "Rory McIlroy's record-setting 2011 US Open included an opening round 65 that set the halfway scoring record when paired with his second round score of what?",
        answer: "66",
        accept: ["66"],
        choices: ["67", "64", "68"],
        diff: 4
      },
      {
        clue: "Bubba Watson used which specific club to execute his famous 2012 Masters winning shot from the trees on the 10th hole playoff?",
        answer: "Gap wedge",
        accept: ["gap wedge", "52 degree wedge", "52-degree"],
        choices: ["Sand wedge", "Pitching wedge", "Lob wedge"],
        diff: 4
      }
    ]
  },

  // CATEGORY 3: GOLF LINGO
  3: {
    100: [
      {
        clue: "In Ryder Cup foursomes, partners take turns hitting the same ball. This format is also known by this term.",
        answer: "Alternate shot",
        accept: ["alternate shot", "alternating shots"],
        choices: ["Best ball", "Scramble", "Stableford"],
        diff: 1
      },
      {
        clue: "In the Ryder Cup, this format has both players in a pair playing their own ball throughout the hole, with the team counting the lower of the two scores.",
        answer: "Fourball",
        accept: ["fourball", "four ball", "best ball"],
        choices: ["Foursomes", "Singles", "Scramble"],
        diff: 1
      },
      {
        clue: "When a golfer hits from the tee but the ball veers well to the right of the target (for a right-handed player), this is called a what?",
        answer: "Slice",
        accept: ["slice"],
        choices: ["Hook", "Draw", "Fade"],
        diff: 1
      },
      {
        clue: "A shot that moves slightly right-to-left in the air for a right-handed golfer is called a what?",
        answer: "Draw",
        accept: ["draw"],
        choices: ["Fade", "Slice", "Pull"],
        diff: 1
      },
      {
        clue: "When a golfer's ball comes to rest touching the flag stick or very close to the hole and their partner concedes the remaining putt, this is known as a what?",
        answer: "Gimme",
        accept: ["gimme", "gimmie"],
        choices: ["Tap-in", "Concession", "Freebie"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "A 'condor' in golf is a score of 4-under par on a single hole. What score is required on a par 5 to make a condor?",
        answer: "1",
        accept: ["1", "hole in one", "ace"],
        choices: ["2", "3", "0"],
        diff: 2
      },
      {
        clue: "In match play, when neither player can win a hole and it is declared a draw, the hole is said to be what?",
        answer: "Halved",
        accept: ["halved", "a half", "tied"],
        choices: ["Cancelled", "Shared", "Forfeited"],
        diff: 2
      },
      {
        clue: "A golf course that features natural terrain with no trees, typically coastal and beside the sea, is called what type of course?",
        answer: "Links",
        accept: ["links", "links course"],
        choices: ["Parkland", "Desert", "Mountain"],
        diff: 2
      },
      {
        clue: "The 'yips' is a condition that affects golfers, causing involuntary twitching. It most commonly affects which part of the game?",
        answer: "Putting",
        accept: ["putting", "the putting stroke"],
        choices: ["Driving", "Chipping", "Bunker play"],
        diff: 2
      },
      {
        clue: "When a golfer's approach shot hits the green and spins backwards due to heavy backspin, this is described as the ball having what?",
        answer: "Bite",
        accept: ["bite", "backspin", "check"],
        choices: ["Release", "Roll", "Run"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "A 'stymie' was a situation in golf where one ball blocked another's path on the putting green. In what year was the rule changed to allow ball marking?",
        answer: "1952",
        accept: ["1952"],
        choices: ["1934", "1960", "1948"],
        diff: 3
      },
      {
        clue: "In tournament golf, when a player's ball is 'embedded' in its own pitch mark through the green, a player is entitled to this free relief.",
        answer: "Free drop",
        accept: ["free drop", "free relief", "drop without penalty"],
        choices: ["One-stroke penalty", "Re-tee", "Two-stroke penalty"],
        diff: 3
      },
      {
        clue: "The term 'dormie' in match play means a player leads by this number of holes, equal to the number of holes remaining.",
        answer: "Same number as holes left",
        accept: ["same number", "as many holes as remain", "equal to remaining holes"],
        choices: ["One hole up", "Two holes up", "Three holes up"],
        diff: 3
      },
      {
        clue: "A 'bump and run' shot is played low along the ground, typically using a mid-iron. This technique is most common on what type of course?",
        answer: "Links",
        accept: ["links", "links course", "coastal course"],
        choices: ["Parkland", "Desert", "Mountain"],
        diff: 3
      },
      {
        clue: "What term describes a prolonged and severe form of the yips affecting chipping, sometimes caused by neurological issues?",
        answer: "Chipping yips",
        accept: ["chipping yips", "yips"],
        choices: ["Shanks", "Hose rockets", "Whiffs"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "In the Rules of Golf, a 'water hazard' was renamed to this term in the 2019 rule overhaul.",
        answer: "Penalty area",
        accept: ["penalty area", "penalty areas"],
        choices: ["Hazard zone", "Water zone", "Red stakes area"],
        diff: 4
      },
      {
        clue: "The two governing bodies of golf, the R&A and the USGA, issued a split rulebook from 1951. In what year did they reunify the rules into one global ruleset?",
        answer: "1952",
        accept: ["1952"],
        choices: ["1960", "1975", "1980"],
        diff: 4
      },
      {
        clue: "A 'flyer lie' in the rough causes the ball to fly farther than expected. What is missing between the clubface and ball that causes this phenomenon?",
        answer: "Spin / friction",
        accept: ["spin", "friction", "grass between club and ball", "backspin"],
        choices: ["Moisture", "Air", "Compression"],
        diff: 4
      },
      {
        clue: "In strokeplay, a player who picks up their ball without holing out and walks off is said to have done what?",
        answer: "Picked up / Withdrawn",
        accept: ["picked up", "withdrawn", "retired", "walked off"],
        choices: ["Conceded", "Forfeited", "Abandoned"],
        diff: 4
      },
      {
        clue: "The 'Texas wedge' is a nickname for using your putter from off the green. The name refers to the windy, firm conditions of golf in which US state?",
        answer: "Texas",
        accept: ["texas"],
        choices: ["Oklahoma", "Kansas", "Nevada"],
        diff: 4
      }
    ]
  },

  // CATEGORY 4: MODERN ERA
  4: {
    100: [
      {
        clue: "Scottie Scheffler won gold at the 2024 Paris Olympics and multiple PGA Tour events that year. He had previously won this major in 2022.",
        answer: "Masters",
        accept: ["masters", "the masters"],
        choices: ["US Open", "Open Championship", "PGA Championship"],
        diff: 1
      },
      {
        clue: "Tiger Woods' remarkable 2019 Masters win came after multiple back surgeries. It was his how-manyeth major championship?",
        answer: "15th",
        accept: ["15th", "15", "fifteenth"],
        choices: ["14th", "16th", "13th"],
        diff: 1
      },
      {
        clue: "Jon Rahm won the 2023 Masters in dominant fashion, finishing the tournament leading from start to finish. This is called a what?",
        answer: "Wire-to-wire",
        accept: ["wire to wire", "wire-to-wire"],
        choices: ["Comeback win", "Playoff win", "Sudden death"],
        diff: 1
      },
      {
        clue: "Xander Schauffele won his first major at the 2024 PGA Championship at Valhalla, then added a second major weeks later at this event.",
        answer: "The Open Championship",
        accept: ["open championship", "the open", "british open"],
        choices: ["US Open", "Masters", "Players Championship"],
        diff: 1
      },
      {
        clue: "Bryson DeChambeau won the 2024 US Open at Pinehurst No. 2. He was previously known for this scientific, data-driven approach to the game.",
        answer: "Scientific approach / physics-based approach",
        accept: ["scientific", "physics", "data-driven", "analytical", "scientific approach"],
        choices: ["Feel-based swing", "Traditional approach", "Short-game focus"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Jordan Spieth's meltdown at the 2016 Masters began with a quadruple-bogey 7 at which par-3 hole?",
        answer: "12th hole",
        accept: ["12th", "hole 12", "twelfth", "number 12"],
        choices: ["15th hole", "11th hole", "16th hole"],
        diff: 2
      },
      {
        clue: "Collin Morikawa won the 2020 PGA Championship in his major debut and the 2021 Open Championship, all before turning this age.",
        answer: "24",
        accept: ["24", "twenty-four"],
        choices: ["23", "25", "22"],
        diff: 2
      },
      {
        clue: "Dustin Johnson's controversial 2016 US Open victory at Oakmont included a one-shot penalty for causing his ball to move on this hole.",
        answer: "5th hole",
        accept: ["5th hole", "fifth hole", "hole 5", "5"],
        choices: ["12th hole", "18th hole", "9th hole"],
        diff: 2
      },
      {
        clue: "Scottie Scheffler won four PGA Tour events in a six-week stretch in early 2022 before his first major. He claimed the world no. 1 ranking before this major win.",
        answer: "Masters",
        accept: ["masters", "the masters", "2022 masters"],
        choices: ["US Open", "PGA Championship", "Players Championship"],
        diff: 2
      },
      {
        clue: "Matt Fitzpatrick won the 2022 US Open at The Country Club in Brookline after previously winning the US Amateur at the same course. In what year did he win the US Amateur there?",
        answer: "2013",
        accept: ["2013"],
        choices: ["2015", "2011", "2010"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Jon Rahm's 2023 Masters win came just months after testing positive for COVID-19 caused him to withdraw from a 2021 tournament while leading. That tournament was the what?",
        answer: "Memorial Tournament",
        accept: ["memorial tournament", "memorial"],
        choices: ["Players Championship", "RBC Heritage", "Travelers Championship"],
        diff: 3
      },
      {
        clue: "Hideki Matsuyama had a 10-year anniversary connection to Augusta National when he won the 2021 Masters — he had previously been the low amateur at Augusta 10 years prior. What year was that?",
        answer: "2011",
        accept: ["2011"],
        choices: ["2010", "2012", "2009"],
        diff: 3
      },
      {
        clue: "Justin Thomas won the 2022 PGA Championship in a 3-hole aggregate playoff. Who did he defeat in the playoff?",
        answer: "Will Zalatoris",
        accept: ["will zalatoris", "zalatoris"],
        choices: ["Mito Pereira", "Cameron Young", "Rory McIlroy"],
        diff: 3
      },
      {
        clue: "Rory McIlroy won the 2011 US Open at Congressional by 8 strokes. Who finished as runner-up?",
        answer: "Jason Day",
        accept: ["jason day", "day"],
        choices: ["Lee Westwood", "Bubba Watson", "Dustin Johnson"],
        diff: 3
      },
      {
        clue: "Bryson DeChambeau bulked up significantly between 2019 and 2021, adding about this many pounds of muscle weight.",
        answer: "40 pounds",
        accept: ["40", "40 pounds", "about 40", "40 lbs"],
        choices: ["20 pounds", "60 pounds", "25 pounds"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Matt Fitzpatrick's 2022 US Open win at The Country Club in Brookline was notable because the same course hosted the Ryder Cup in what year when Justin Leonard holed a long putt to secure a US win?",
        answer: "1999",
        accept: ["1999"],
        choices: ["1997", "2001", "2003"],
        diff: 4
      },
      {
        clue: "Jon Rahm won the 2023 Masters after previously withdrawing from the Memorial Tournament while in the lead due to a positive COVID test. By how many shots was he leading?",
        answer: "6",
        accept: ["6", "six"],
        choices: ["3", "4", "8"],
        diff: 4
      },
      {
        clue: "Scottie Scheffler was arrested before his second round at the 2024 PGA Championship at Valhalla for a minor traffic incident. Despite this, he finished in which place?",
        answer: "Second place",
        accept: ["second", "runner up", "2nd", "2"],
        choices: ["First place", "Third place", "Tied fourth"],
        diff: 4
      },
      {
        clue: "Collin Morikawa holed a perfect wedge shot on the 72nd hole of the 2020 PGA Championship to effectively clinch his win. He was at which venue?",
        answer: "TPC Harding Park",
        accept: ["tpc harding park", "harding park"],
        choices: ["Valhalla", "Bellerive", "Kiawah Island"],
        diff: 4
      },
      {
        clue: "Xander Schauffele's 2024 PGA Championship win at Valhalla ended a streak of near-misses in majors. How many top-5 major finishes did he record before his first win?",
        answer: "10",
        accept: ["10", "ten"],
        choices: ["7", "12", "8"],
        diff: 4
      }
    ]
  },

  // CATEGORY 5: RYDER CUP
  5: {
    100: [
      {
        clue: "The Ryder Cup is played between teams from the USA and this collective region.",
        answer: "Europe",
        accept: ["europe"],
        choices: ["Rest of World", "Great Britain and Ireland", "Commonwealth"],
        diff: 1
      },
      {
        clue: "Europe overcame a 10-6 deficit on the final day of the 2012 Ryder Cup at Medinah to win. This comeback is known as the what?",
        answer: "Miracle at Medinah",
        accept: ["miracle at medinah", "miracle of medinah"],
        choices: ["Comeback at Chicago", "Medinah Miracle", "Great European Comeback"],
        diff: 1
      },
      {
        clue: "The Ryder Cup is played over three days with foursomes, fourballs, and this final-day format.",
        answer: "Singles",
        accept: ["singles"],
        choices: ["Matchplay", "Scramble", "Strokeplay"],
        diff: 1
      },
      {
        clue: "Ian Poulter earned the nickname 'The Postman' at the Ryder Cup because he always does what?",
        answer: "Delivers",
        accept: ["delivers", "always delivers"],
        choices: ["Takes the mail route", "Walks quickly", "Wears a uniform"],
        diff: 1
      },
      {
        clue: "The USA won the 2021 Ryder Cup at Whistling Straits by this record margin of 19-9.",
        answer: "19-9",
        accept: ["19-9", "19 to 9", "ten points"],
        choices: ["18-10", "17-11", "20-8"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "The 2012 Ryder Cup final score was 14.5-13.5 in favor of Europe. Who holed the putt that clinched Europe retaining the Cup?",
        answer: "Martin Kaymer",
        accept: ["martin kaymer", "kaymer"],
        choices: ["Ian Poulter", "Sergio Garcia", "Lee Westwood"],
        diff: 2
      },
      {
        clue: "Tiger Woods has a historically poor Ryder Cup record. How many of his 8 appearances resulted in a USA team victory?",
        answer: "1",
        accept: ["1", "one"],
        choices: ["3", "2", "4"],
        diff: 2
      },
      {
        clue: "Ian Poulter's individual Ryder Cup singles record is remarkable: he is unbeaten across how many singles matches?",
        answer: "7",
        accept: ["7", "seven"],
        choices: ["5", "6", "8"],
        diff: 2
      },
      {
        clue: "The 2023 Ryder Cup was held at Marco Simone Golf Club in Rome. Europe won by this score.",
        answer: "16.5-11.5",
        accept: ["16.5-11.5", "16.5 to 11.5"],
        choices: ["18-10", "15-13", "17-11"],
        diff: 2
      },
      {
        clue: "In the Ryder Cup, how many total points are available across foursomes, fourballs and singles sessions?",
        answer: "28",
        accept: ["28", "twenty-eight"],
        choices: ["24", "32", "30"],
        diff: 2
      }
    ],
    300: [
      {
        clue: "Tiger Woods' overall individual Ryder Cup win-loss-half record is 13-21-3. What percentage of available points did he earn?",
        answer: "39.2 percent",
        accept: ["39.2%", "39.2 percent", "39%", "about 39"],
        choices: ["55%", "45%", "30%"],
        diff: 3
      },
      {
        clue: "At the 2012 Ryder Cup at Medinah, Tiger Woods conceded a putt to Francesco Molinari on the last hole to halve the final singles match, giving Europe their last-needed half point. What was Europe's final score?",
        answer: "14.5",
        accept: ["14.5", "14 and a half"],
        choices: ["15", "14", "13.5"],
        diff: 3
      },
      {
        clue: "The Ryder Cup was first held in 1927. The trophy is named after Samuel Ryder, who was from this profession.",
        answer: "Seed merchant",
        accept: ["seed merchant", "seeds", "horticulture", "nurseryman"],
        choices: ["Banker", "Politician", "Steelmaker"],
        diff: 3
      },
      {
        clue: "Ian Poulter's best Ryder Cup came in 2012 at Medinah when he won all this many matches.",
        answer: "4",
        accept: ["4", "four"],
        choices: ["3", "5", "6"],
        diff: 3
      },
      {
        clue: "At the 2023 Ryder Cup in Rome, the USA captain was Zach Johnson. Who captained the European team to victory?",
        answer: "Luke Donald",
        accept: ["luke donald", "donald"],
        choices: ["Henrik Stenson", "Padraig Harrington", "Thomas Bjorn"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Tiger Woods' sole Ryder Cup team win came in 1999 at The Country Club in Brookline, when the USA staged a dramatic comeback to win 14.5-13.5. Justin Leonard holed a memorable putt on which hole during singles?",
        answer: "17th hole",
        accept: ["17th", "17th hole", "seventeen"],
        choices: ["18th hole", "15th hole", "16th hole"],
        diff: 4
      },
      {
        clue: "Ian Poulter's overall Ryder Cup record stands at 15 wins, 8 losses, and 2 halves. What percentage of potential points has he won?",
        answer: "64 percent",
        accept: ["64%", "64 percent", "64"],
        choices: ["70%", "58%", "72%"],
        diff: 4
      },
      {
        clue: "The Ryder Cup formula changed in 1979 to expand the European team beyond Great Britain and Ireland. The first expanded European team faced the USA at this venue.",
        answer: "The Greenbrier",
        accept: ["the greenbrier", "greenbrier"],
        choices: ["Walton Heath", "PGA National", "Muirfield Village"],
        diff: 4
      },
      {
        clue: "Europe's away record in the Ryder Cup has been strong since 1987. The 2012 Medinah win was Europe's last away win prior to 2023. In that stretch, how many away wins did Europe have?",
        answer: "2",
        accept: ["2", "two"],
        choices: ["1", "3", "4"],
        diff: 4
      },
      {
        clue: "The US team's record 19-9 victory at the 2021 Ryder Cup at Whistling Straits saw Dustin Johnson go undefeated. What was his personal match record?",
        answer: "5-0",
        accept: ["5-0", "five and zero", "5 wins 0 losses"],
        choices: ["4-1", "3-0", "5-1"],
        diff: 4
      }
    ]
  }
};

const GOLF_EXTRA_FINALS = [
  {
    category: "MAJOR CHAMPIONSHIPS",
    clue: "At the 1977 Open Championship at Turnberry, Tom Watson and Jack Nicklaus outscored the entire field by miles in an epic duel. Watson shot 65-65 over the weekend to win. What did Nicklaus shoot in the same final two rounds, the lowest score ever to lose an Open at that time?",
    answer: "65-66",
    accept: ["65-66", "131 total", "65 65"]
  },
  {
    category: "GOLF LEGENDS",
    clue: "Lee Trevino won 6 majors. His two Open Championships came in back-to-back years; his two US Opens were three years apart. Name the years he won both US Opens.",
    answer: "1968 and 1971",
    accept: ["1968 and 1971", "1968 1971"]
  },
  {
    category: "RECORDS & FIRSTS",
    clue: "Padraig Harrington won three majors in 13 months from 2007 to 2008. He was the first European to win the PGA Championship since Tommy Armour in 1930. Harrington won the 2008 PGA at this historic Detroit-area course.",
    answer: "Oakland Hills",
    accept: ["oakland hills", "oakland hills country club"]
  },
  {
    category: "MODERN ERA",
    clue: "Jon Rahm had a stunning 2023 Masters win with a wire-to-wire victory. Just 20 months later, he made a controversial move to join this rival golf league, shocking the golf world.",
    answer: "LIV Golf",
    accept: ["liv golf", "liv"]
  },
  {
    category: "RYDER CUP",
    clue: "In the famous 2012 Ryder Cup 'Miracle at Medinah', Europe trailed 10-6 going into Sunday singles and needed to win 8 points from 12. They won 8 and halved 1. Name the European player who won 4.5 points on Sunday to almost single-handedly ignite the comeback.",
    answer: "Ian Poulter",
    accept: ["ian poulter", "poulter"]
  }
];

// extra_soccer.js — 120 NEW Soccer/Football trivia questions
// Categories: 0=FIFA WORLD CUP, 1=GOAL SCORING LEGENDS, 2=RECORDS & FIRSTS,
//             3=SOCCER LINGO, 4=MODERN ERA, 5=CLUB FOOTBALL

