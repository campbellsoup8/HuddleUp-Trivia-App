// HuddleUp Trivia � Baseball Question Database

const BASEBALL_Q = {
  0: {
    100: [
      { clue: "This franchise has won the most World Series titles in MLB history with 27 championships.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "ny yankees"], choices: ["Boston Red Sox", "St. Louis Cardinals", "Los Angeles Dodgers"], diff: 1 },
      { clue: "These 'Amazin'' underdogs shocked the baseball world by winning the 1969 World Series.", answer: "New York Mets", accept: ["new york mets", "mets", "ny mets"], choices: ["Chicago Cubs", "Baltimore Orioles", "Cincinnati Reds"], diff: 2 },
      { clue: "This Canadian franchise won back-to-back World Series titles in 1992 and 1993.", answer: "Toronto Blue Jays", accept: ["toronto blue jays", "blue jays"], choices: ["Montreal Expos", "Minnesota Twins", "Oakland Athletics"], diff: 2 },
      { clue: "This team ended a 32-year championship drought by winning the 2020 World Series in a neutral-site bubble format.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["Tampa Bay Rays", "Houston Astros", "Chicago Cubs"], diff: 1 },
    ],
    200: [
      { clue: "The 2004 World Series champions who overcame an 0-3 ALCS deficit to end their famous 86-year championship drought.", answer: "Boston Red Sox", accept: ["boston red sox", "red sox"], choices: ["New York Yankees", "St. Louis Cardinals", "Chicago Cubs"], diff: 1 },
      { clue: "The 2017 World Series champion whose title was later tainted by a sign-stealing scandal.", answer: "Houston Astros", accept: ["houston astros", "astros"], choices: ["Los Angeles Dodgers", "New York Yankees", "Chicago Cubs"], diff: 1 },
      { clue: "This franchise became the first wild-card team to win the World Series when they won it all in 1997.", answer: "Florida Marlins", accept: ["florida marlins", "marlins", "miami marlins"], choices: ["Atlanta Braves", "Cleveland Indians", "San Francisco Giants"], diff: 2 },
      { clue: "The 2019 World Series champion that had never previously won a championship in their franchise history.", answer: "Washington Nationals", accept: ["washington nationals", "nationals", "nats"], choices: ["Houston Astros", "New York Yankees", "Cleveland Indians"], diff: 2 },
    ],
    300: [
      { clue: "The 2016 World Series champion who ended their 108-year championship drought with a dramatic Game 7 victory.", answer: "Chicago Cubs", accept: ["chicago cubs", "cubs"], choices: ["Cleveland Indians", "Boston Red Sox", "San Francisco Giants"], diff: 1 },
      { clue: "Kirk Gibson hit his iconic pinch-hit walk-off home run in Game 1 of the World Series for this 1988 champion.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["Oakland Athletics", "New York Mets", "Boston Red Sox"], diff: 2 },
      { clue: "This franchise won three consecutive World Series championships from 1972 to 1974.", answer: "Oakland Athletics", accept: ["oakland athletics", "oakland a's", "a's", "athletics"], choices: ["New York Yankees", "Cincinnati Reds", "Baltimore Orioles"], diff: 3 },
      { clue: "The 2023 World Series was won by this franchise for the first time in their history, defeating the Diamondbacks.", answer: "Texas Rangers", accept: ["texas rangers", "rangers"], choices: ["Arizona Diamondbacks", "Houston Astros", "Atlanta Braves"], diff: 1 },
    ],
    400: [
      { clue: "This Pittsburgh Pirates second baseman hit a walk-off home run in the bottom of the 9th of Game 7 to win the 1960 World Series.", answer: "Bill Mazeroski", accept: ["bill mazeroski", "mazeroski"], choices: ["Roberto Clemente", "Dick Groat", "Roy Face"], diff: 3 },
      { clue: "Injured and barely able to walk, this Dodger hit a pinch-hit two-run walk-off homer in Game 1 of the 1988 World Series.", answer: "Kirk Gibson", accept: ["kirk gibson", "gibson"], choices: ["Steve Sax", "Mike Scioscia", "Mickey Hatcher"], diff: 2 },
      { clue: "This Red Sox catcher waved his iconic home run fair with his arm in Game 6 of the 1975 World Series.", answer: "Carlton Fisk", accept: ["carlton fisk", "fisk"], choices: ["Johnny Bench", "Thurman Munson", "Ted Simmons"], diff: 3 },
      { clue: "Freddie Freeman hit a walk-off grand slam in Game 1 of the 2024 World Series for this team.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["New York Yankees", "San Francisco Giants", "Atlanta Braves"], diff: 1 },
    ],
  },
  1: {
    100: [
      { clue: "This player holds the all-time MLB home run record with 762 career home runs.", answer: "Barry Bonds", accept: ["barry bonds", "bonds"], choices: ["Hank Aaron", "Babe Ruth", "Alex Rodriguez"], diff: 1 },
      { clue: "Known as 'The Hammer,' this player held the all-time home run record for decades before it was broken.", answer: "Hank Aaron", accept: ["hank aaron", "aaron", "hammerin hank"], choices: ["Babe Ruth", "Barry Bonds", "Willie Mays"], diff: 1 },
      { clue: "Babe Ruth hit 714 career home runs, a record that stood until 1974 when it was broken by this player.", answer: "Hank Aaron", accept: ["hank aaron", "aaron", "hammerin hank"], choices: ["Barry Bonds", "Willie Mays", "Reggie Jackson"], diff: 2 },
      { clue: "Aaron Judge set the American League single-season home run record in 2022 with this many home runs.", answer: "62", accept: ["62", "sixty-two", "sixty two"], choices: ["61", "60", "64"], diff: 2 },
    ],
    200: [
      { clue: "Babe Ruth set the single-season home run record in 1927 by hitting this many home runs.", answer: "60", accept: ["60", "sixty"], choices: ["61", "59", "58"], diff: 3 },
      { clue: "Hank Aaron hit his record-breaking 715th home run in 1974 while playing for this team.", answer: "Atlanta Braves", accept: ["atlanta braves", "braves"], choices: ["Milwaukee Brewers", "Cincinnati Reds", "Los Angeles Dodgers"], diff: 2 },
      { clue: "Mark McGwire set a then-record 70 home runs in 1998, playing for this team.", answer: "St. Louis Cardinals", accept: ["st. louis cardinals", "st louis cardinals", "cardinals"], choices: ["Oakland Athletics", "Chicago Cubs", "New York Yankees"], diff: 2 },
      { clue: "Shohei Ohtani made history in 2024 by becoming the first player to hit 50 home runs and steal this many bases in a single season.", answer: "50", accept: ["50", "fifty"], choices: ["40", "45", "55"], diff: 2 },
    ],
    300: [
      { clue: "Roger Maris broke Babe Ruth's single-season home run record in 1961 by hitting this many home runs.", answer: "61", accept: ["61", "sixty-one", "sixty one"], choices: ["60", "62", "58"], diff: 1 },
      { clue: "Mickey Mantle won the Triple Crown in 1956, leading the AL in batting average, home runs, and this third statistical category.", answer: "RBI", accept: ["rbi", "rbis", "runs batted in"], choices: ["Stolen Bases", "On-Base Percentage", "Slugging Percentage"], diff: 3 },
      { clue: "Sammy Sosa hit 60 or more home runs three different times, all while playing for this team.", answer: "Chicago Cubs", accept: ["chicago cubs", "cubs"], choices: ["Houston Astros", "Baltimore Orioles", "Texas Rangers"], diff: 2 },
      { clue: "Pete Alonso set the MLB rookie home run record in 2019 with 53 home runs playing for this team.", answer: "New York Mets", accept: ["new york mets", "mets", "ny mets"], choices: ["New York Yankees", "Chicago Cubs", "Houston Astros"], diff: 2 },
    ],
    400: [
      { clue: "Barry Bonds set the single-season home run record in 2001 with this many home runs.", answer: "73", accept: ["73", "seventy-three", "seventy three"], choices: ["70", "72", "71"], diff: 2 },
      { clue: "Sammy Sosa hit 66 home runs in 1998 for the Cubs, finishing second to Mark McGwire. What was McGwire's total?", answer: "70", accept: ["70", "seventy"], choices: ["68", "72", "69"], diff: 3 },
      { clue: "Ken Griffey Jr. hit a career-high 56 home runs in 1997 and 1998 while playing for this team.", answer: "Seattle Mariners", accept: ["seattle mariners", "mariners"], choices: ["Cincinnati Reds", "New York Yankees", "Atlanta Braves"], diff: 2 },
      { clue: "After 17 seasons with the Los Angeles Angels, Shohei Ohtani signed a record-breaking $700 million deal with this team before the 2024 season.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["New York Yankees", "San Francisco Giants", "Chicago Cubs"], diff: 1 },
    ],
  },
  2: {
    100: [
      { clue: "This player broke the color barrier in Major League Baseball on April 15, 1947, wearing number 42.", answer: "Jackie Robinson", accept: ["jackie robinson", "robinson"], choices: ["Willie Mays", "Satchel Paige", "Larry Doby"], diff: 1 },
      { clue: "Joe DiMaggio began his legendary 56-game hitting streak on May 15 of this year.", answer: "1941", accept: ["1941"], choices: ["1939", "1942", "1940"], diff: 3 },
      { clue: "Sandy Koufax threw four no-hitters during his career, all with this franchise.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["New York Yankees", "San Francisco Giants", "Cincinnati Reds"], diff: 2 },
      { clue: "MLB introduced this timing device in 2023 to speed up games, requiring pitchers to deliver within 15 seconds with bases empty.", answer: "pitch clock", accept: ["pitch clock", "pitching clock"], choices: ["strike zone camera", "automatic ball-strike system", "batting clock"], diff: 2 },
    ],
    200: [
      { clue: "Don Larsen threw the only perfect game in World Series history in 1956, playing for this team.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "ny yankees"], choices: ["Brooklyn Dodgers", "Milwaukee Braves", "Chicago White Sox"], diff: 2 },
      { clue: "Hank Aaron broke Babe Ruth's all-time home run record with his 715th homer in this year.", answer: "1974", accept: ["1974"], choices: ["1972", "1973", "1975"], diff: 3 },
      { clue: "Joe DiMaggio's 56-game hitting streak ended when it was stopped by pitchers from this team.", answer: "Cleveland Indians", accept: ["cleveland indians", "indians", "cleveland"], choices: ["Boston Red Sox", "Chicago White Sox", "St. Louis Browns"], diff: 3 },
      { clue: "The National League officially adopted the universal designated hitter rule permanently starting in this year.", answer: "2022", accept: ["2022"], choices: ["2020", "2021", "2023"], diff: 2 },
    ],
    300: [
      { clue: "Fenway Park, the oldest active MLB stadium, was built in this year.", answer: "1912", accept: ["1912"], choices: ["1910", "1914", "1916"], diff: 3 },
      { clue: "Known as the 'Friendly Confines,' Wrigley Field opened in this year.", answer: "1914", accept: ["1914"], choices: ["1912", "1916", "1920"], diff: 3 },
      { clue: "The first MLB All-Star Game was played in 1933 at this Chicago stadium.", answer: "Comiskey Park", accept: ["comiskey park", "comiskey"], choices: ["Wrigley Field", "Forbes Field", "Polo Grounds"], diff: 3 },
      { clue: "MLB banned this fielding strategy in 2023, requiring two infielders on each side of second base.", answer: "defensive shift", accept: ["defensive shift", "shift", "infield shift"], choices: ["four-man outfield", "intentional walk", "defensive positioning"], diff: 2 },
    ],
    400: [
      { clue: "The American League adopted the designated hitter rule in this year.", answer: "1973", accept: ["1973"], choices: ["1969", "1971", "1975"], diff: 3 },
      { clue: "The 1994 players' strike resulted in the cancellation of this event for the first time since 1904.", answer: "World Series", accept: ["world series"], choices: ["All-Star Game", "League Championship Series", "MLB Draft"], diff: 2 },
      { clue: "The Astrodome in Houston opened in 1965 and was nicknamed this for being an engineering marvel.", answer: "Eighth Wonder of the World", accept: ["eighth wonder of the world", "eighth wonder"], choices: ["House of Grass", "The Dome", "Space Stadium"], diff: 3 },
      { clue: "Roy Halladay pitched a perfect game in the regular season AND a no-hitter in the NLDS, both in this year.", answer: "2010", accept: ["2010"], choices: ["2011", "2009", "2012"], diff: 3 },
    ],
  },
  3: {
    100: [
      { clue: "Pete Rose holds the all-time MLB hits record with this many career hits.", answer: "4,256", accept: ["4256", "4,256", "four thousand two hundred fifty-six"], choices: ["3,771", "3,630", "4,191"], diff: 3 },
      { clue: "This player holds the MLB all-time stolen base record with 1,406 career stolen bases.", answer: "Rickey Henderson", accept: ["rickey henderson", "henderson"], choices: ["Lou Brock", "Tim Raines", "Vince Coleman"], diff: 2 },
      { clue: "Aaron Judge set the American League single-season home run record in 2022, breaking Roger Maris's record of 61. How many did Judge hit?", answer: "62", accept: ["62", "sixty-two", "sixty two"], choices: ["63", "61", "65"], diff: 3 },
    ],
    200: [
      { clue: "Cy Young holds the all-time record for career pitching wins. How many did he win?", answer: "511", accept: ["511", "five hundred eleven"], choices: ["417", "373", "363"], diff: 4 },
      { clue: "Rickey Henderson set the single-season stolen base record in 1982 with how many steals?", answer: "130", accept: ["130", "one hundred thirty"], choices: ["118", "100", "143"], diff: 3 },
      { clue: "Ronald Acuña Jr. made history in 2023 by becoming the first player to hit 40 home runs and steal how many bases in a season?", answer: "70", accept: ["70", "seventy"], choices: ["60", "50", "65"], diff: 2 },
    ],
    300: [
      { clue: "Orel Hershiser set the record for consecutive scoreless innings pitched in 1988 with this many innings.", answer: "59", accept: ["59", "fifty-nine", "fifty nine"], choices: ["58", "60", "55"], diff: 3 },
      { clue: "Kerry Wood struck out this many batters in a single game in 1998, tying the NL record.", answer: "20", accept: ["20", "twenty"], choices: ["19", "18", "21"], diff: 3 },
      { clue: "The 2001 Seattle Mariners tied the 1906 Chicago Cubs record for most wins in a season with this many victories.", answer: "116", accept: ["116", "one hundred sixteen"], choices: ["114", "111", "118"], diff: 3 },
    ],
    400: [
      { clue: "Nolan Ryan holds the all-time MLB strikeout record. How many career strikeouts did he record?", answer: "5,714", accept: ["5714", "5,714", "five thousand seven hundred fourteen"], choices: ["4,875", "3,509", "4,136"], diff: 3 },
      { clue: "Walter Johnson threw a record 110 shutouts during his career with this team.", answer: "Washington Senators", accept: ["washington senators", "senators"], choices: ["Boston Red Sox", "Detroit Tigers", "Cleveland Indians"], diff: 4 },
      { clue: "Ichiro Suzuki set the single-season hits record in 2004 with how many hits?", answer: "262", accept: ["262", "two hundred sixty-two", "two hundred sixty two"], choices: ["257", "248", "271"], diff: 3 },
      { clue: "Cal Ripken Jr. holds the record for consecutive games played with 2,632 straight games, breaking Lou Gehrig's record of how many consecutive games?", answer: "2,130", accept: ["2130", "2,130", "two thousand one hundred thirty"], choices: ["1,999", "2,009", "2,215"], diff: 4 },
    ],
  },
  4: {
    100: [
      { clue: "In baseball, 'hitting for the cycle' means a player gets a single, double, triple, and this in the same game.", answer: "home run", accept: ["home run", "homer", "homerun"], choices: ["grand slam", "walk-off hit", "sacrifice fly"], diff: 1 },
      { clue: "A 'walk' in baseball is also officially called this.", answer: "base on balls", accept: ["base on balls", "bb", "walk"], choices: ["hit by pitch", "intentional pass", "free pass"], diff: 1 },
      { clue: "When a fielder mishandles or drops a ball, allowing a batter or runner to advance, it is scored as this.", answer: "error", accept: ["error", "e"], choices: ["passed ball", "wild pitch", "fielder's choice"], diff: 2 },
      { clue: "The MLB pitch clock introduced in 2023 requires pitchers to deliver the ball within this many seconds with runners on base.", answer: "20", accept: ["20", "twenty"], choices: ["15", "25", "18"], diff: 2 },
    ],
    200: [
      { clue: "A 'perfect game' in baseball means the pitcher retires all batters without allowing any baserunner. How many outs does that require?", answer: "27", accept: ["27", "twenty-seven", "twenty seven"], choices: ["24", "21", "30"], diff: 2 },
      { clue: "Unlike a perfect game, a no-hitter still allows this type of baserunner.", answer: "walks", accept: ["walks", "walk", "base on balls"], choices: ["home runs", "hit batters", "errors"], diff: 2 },
      { clue: "The 'battery' in baseball refers to this pair of players.", answer: "pitcher and catcher", accept: ["pitcher and catcher", "catcher and pitcher"], choices: ["shortstop and second baseman", "first baseman and third baseman", "center fielder and pitcher"], diff: 2 },
      { clue: "Since 2023, MLB places a runner on second base at the start of extra innings. This runner is known by this nickname.", answer: "ghost runner", accept: ["ghost runner", "free runner", "automatic runner"], choices: ["bonus runner", "extra runner", "pace runner"], diff: 2 },
    ],
    300: [
      { clue: "The 'Mendoza Line' refers to a batting average at or below this figure, considered the threshold for a weak hitter.", answer: ".200", accept: [".200", "200", ".200 batting average", "two hundred"], choices: [".250", ".150", ".225"], diff: 2 },
      { clue: "A 'southpaw' in baseball refers to a pitcher who throws with this hand.", answer: "left hand", accept: ["left hand", "left-handed", "left", "left arm"], choices: ["right hand", "both hands", "right arm"], diff: 1 },
      { clue: "OPS is a statistic that combines on-base percentage and this other stat.", answer: "slugging percentage", accept: ["slugging percentage", "slugging", "slg"], choices: ["batting average", "wOBA", "ISO"], diff: 2 },
      { clue: "This team popularized the 'opener' strategy, using a reliever to start the game before a bulk pitcher takes over.", answer: "Tampa Bay Rays", accept: ["tampa bay rays", "rays", "tampa bay"], choices: ["Oakland Athletics", "Houston Astros", "Chicago Cubs"], diff: 4 },
    ],
    400: [
      { clue: "A 'Golden Sombrero' in baseball means a batter strikes out this many times in a single game.", answer: "4", accept: ["4", "four"], choices: ["3", "5", "6"], diff: 3 },
      { clue: "A 'quality start' is defined as a starting pitcher going at least 6 innings while allowing this many earned runs or fewer.", answer: "3", accept: ["3", "three"], choices: ["2", "4", "5"], diff: 3 },
      { clue: "A sacrifice fly does not count as an official at-bat. What does it count as in the box score?", answer: "sacrifice fly", accept: ["sacrifice fly", "sac fly", "sf"], choices: ["fielder's choice", "at-bat", "plate appearance only"], diff: 2 },
      { clue: "FIP stands for this advanced pitching metric that removes defense from the equation.", answer: "Fielding Independent Pitching", accept: ["fielding independent pitching", "fip"], choices: ["Fastball Impact Percentage", "Fielder Impact Percentage", "Franchise Impact Pitching"], diff: 3 },
    ],
  },
  5: {
    100: [
      { clue: "Hall of Famer Willie Mays was nicknamed this, reflecting his enthusiastic greeting to teammates.", answer: "Say Hey Kid", accept: ["say hey kid", "the say hey kid"], choices: ["The Hammer", "The Natural", "Big Willie"], diff: 1 },
      { clue: "Joe DiMaggio earned the nickname 'Yankee Clipper' and set his famous 56-game hitting streak in this year.", answer: "1941", accept: ["1941"], choices: ["1939", "1942", "1937"], diff: 3 },
      { clue: "Randy Johnson, known as 'The Big Unit,' stood this tall and won 5 Cy Young Awards.", answer: "6 feet 10 inches", accept: ["6'10\"", "6 feet 10 inches", "6-10", "six foot ten", "six feet ten inches"], choices: ["6'7\"", "6'8\"", "7'0\""], diff: 3 },
      { clue: "Mariano Rivera became the first player elected unanimously to the Hall of Fame in this year.", answer: "2019", accept: ["2019"], choices: ["2017", "2018", "2020"], diff: 2 },
    ],
    200: [
      { clue: "Lou Gehrig earned the nickname 'Iron Horse' by playing this many consecutive games, a record at the time.", answer: "2,130", accept: ["2130", "2,130", "two thousand one hundred thirty"], choices: ["1,897", "2,009", "1,999"], diff: 4 },
      { clue: "Reggie Jackson earned the nickname 'Mr. October' by hitting three home runs on three consecutive pitches in Game 6 of the 1977 World Series for this team.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "ny yankees"], choices: ["Oakland Athletics", "California Angels", "Baltimore Orioles"], diff: 2 },
      { clue: "Nolan Ryan, known as 'The Ryan Express,' pitched in the majors until he was this age, a record for a starting pitcher.", answer: "46", accept: ["46", "forty-six", "forty six"], choices: ["44", "45", "47"], diff: 3 },
      { clue: "David Ortiz, known as 'Big Papi,' was inducted into the Baseball Hall of Fame in this year.", answer: "2022", accept: ["2022"], choices: ["2020", "2021", "2023"], diff: 2 },
    ],
    300: [
      { clue: "Ted Williams, known as 'The Splendid Splinter,' was the last MLB player to hit over .400 in a season, hitting .406 in this year.", answer: "1941", accept: ["1941"], choices: ["1939", "1940", "1942"], diff: 3 },
      { clue: "Rogers Hornsby, nicknamed 'The Rajah,' set the modern-era single-season batting average record of .424 in this year.", answer: "1924", accept: ["1924"], choices: ["1920", "1922", "1926"], diff: 4 },
      { clue: "Stan Musial, known as 'The Man,' finished his career with a .331 lifetime batting average playing for this team.", answer: "St. Louis Cardinals", accept: ["st. louis cardinals", "st louis cardinals", "cardinals"], choices: ["Chicago Cubs", "Brooklyn Dodgers", "Cincinnati Reds"], diff: 2 },
      { clue: "Ichiro Suzuki made history in 2001 by winning both the AL MVP and this other award in the same season.", answer: "Rookie of the Year", accept: ["rookie of the year", "al rookie of the year", "american league rookie of the year"], choices: ["Gold Glove", "Silver Slugger", "Batting Title"], diff: 2 },
    ],
    400: [
      { clue: "Ty Cobb, known as the 'Georgia Peach,' holds the MLB all-time career batting average record at .366.", answer: "Ty Cobb", accept: ["ty cobb", "cobb"], choices: ["Rogers Hornsby", "Ted Williams", "Joe Jackson"], diff: 2 },
      { clue: "Sandy Koufax won three Cy Young Awards and abruptly retired at just 30 years old due to this medical condition.", answer: "arthritis", accept: ["arthritis", "elbow arthritis", "traumatic arthritis"], choices: ["torn rotator cuff", "bone spurs", "elbow ligament damage"], diff: 2 },
      { clue: "Roberto Clemente became the first Latin American player inducted into the Baseball Hall of Fame in 1973. He died in a plane crash while delivering aid to this country.", answer: "Nicaragua", accept: ["nicaragua"], choices: ["Puerto Rico", "Dominican Republic", "Panama"], diff: 3 },
      { clue: "Mike Piazza holds the record for most career home runs by a catcher with 427. For which team did he spend most of his career?", answer: "New York Mets", accept: ["new york mets", "mets", "ny mets"], choices: ["Los Angeles Dodgers", "San Diego Padres", "Florida Marlins"], diff: 2 },
    ],
  },
};

const BASEBALL_FINALS = [
  { category: "Baseball History", clue: "Jackie Robinson broke baseball's color barrier in 1947 playing for this team.", answer: "Brooklyn Dodgers", accept: ["brooklyn dodgers", "dodgers"] },
  { category: "Scandals & Legends", clue: "This player was banned from baseball for life for allegedly betting on games while managing the Cincinnati Reds.", answer: "Pete Rose", accept: ["pete rose", "rose"] },
  { category: "Legendary Moments", clue: "Don Larsen's 1956 perfect game in the World Series was played against this team.", answer: "Brooklyn Dodgers", accept: ["brooklyn dodgers", "dodgers"] },
  { category: "Modern Records", clue: "In 2023, this player became the first in MLB history to hit 40 home runs and steal 70 bases in a single season.", answer: "Ronald Acuña Jr.", accept: ["ronald acuna jr", "ronald acuña jr", "acuna", "acuña", "ronald acuna"] },
  { category: "Modern Era Stars", clue: "Shohei Ohtani made history in 2024 by becoming the first player ever to reach 50 home runs and 50 stolen bases in a single season, accomplishing this feat for this team.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"] },
];


const BASEBALL_EXTRA = {
  // Category 0: WORLD SERIES WINS
  0: {
    100: [
      { clue: "The St. Louis Cardinals have won 11 World Series titles, ranking them second all-time behind this franchise.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "the yankees"], choices: ["Boston Red Sox", "Los Angeles Dodgers", "San Francisco Giants"], diff: 1 },
      { clue: "The 1969 'Miracle Mets' defeated the Baltimore Orioles in the World Series, managed by this Hall of Famer.", answer: "Gil Hodges", accept: ["gil hodges", "hodges"], choices: ["Casey Stengel", "Yogi Berra", "Leo Durocher"], diff: 2 },
      { clue: "In the 2004 ALCS, the Boston Red Sox became the first team in MLB history to overcome a 3-0 series deficit to beat this opponent.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "the yankees"], choices: ["Oakland Athletics", "Minnesota Twins", "Cleveland Indians"], diff: 1 },
      { clue: "The St. Louis Cardinals won their most recent World Series title in this year, defeating the Texas Rangers in Game 7.", answer: "2011", accept: ["2011"], choices: ["2006", "2004", "2013"], diff: 2 },
      { clue: "The 1994 World Series was never played because of this event that cancelled the postseason.", answer: "Players Strike", accept: ["players strike", "strike", "labor strike", "mlb strike"], choices: ["Hurricane", "Earthquake", "Commissioner's Death", "Lockout"], diff: 2 },
    ],
    200: [
      { clue: "The Cardinals' Bob Gibson dominated the 1967 World Series, winning this many games against the Boston Red Sox.", answer: "Three", accept: ["three", "3"], choices: ["Two", "Four", "One"], diff: 2 },
      { clue: "Montreal had the best record in baseball (74-40) when the 1994 strike hit. This was the only year this franchise had a realistic chance at a title before eventually relocating.", answer: "Montreal Expos", accept: ["montreal expos", "expos", "the expos"], choices: ["Pittsburgh Pirates", "San Diego Padres", "Cincinnati Reds"], diff: 2 },
      { clue: "The 2004 Red Sox ALCS comeback MVP was this 'Big Papi' designated hitter.", answer: "David Ortiz", accept: ["david ortiz", "ortiz", "big papi"], choices: ["Manny Ramirez", "Kevin Millar", "Jason Varitek"], diff: 1 },
      { clue: "Fernando Valenzuela led the Dodgers to win this championship in his legendary 1981 rookie season.", answer: "World Series", accept: ["world series", "the world series", "1981 world series"], choices: ["NLCS", "NL West Division", "Pennant"], diff: 1 },
      { clue: "The Cardinals have won 11 World Series titles. This decade saw them win 3 championships: 1942, 1944, and 1946.", answer: "1940s", accept: ["1940s", "the 1940s", "forties"], choices: ["1930s", "1950s", "1920s"], diff: 3 },
    ],
    300: [
      { clue: "The 1982 St. Louis Cardinals defeated this team in the World Series, clinching in 7 games.", answer: "Milwaukee Brewers", accept: ["milwaukee brewers", "brewers", "the brewers"], choices: ["Kansas City Royals", "California Angels", "Baltimore Orioles"], diff: 3 },
      { clue: "The 2004 ALCS lasted this many games, with Boston winning the final four after dropping the first three.", answer: "Seven", accept: ["seven", "7"], choices: ["Five", "Six", "Four"], diff: 2 },
      { clue: "St. Louis won the World Series in 1964 over the Yankees in large part thanks to this pitcher who also won the 1964 NL MVP.", answer: "Bob Gibson", accept: ["bob gibson", "gibson"], choices: ["Lou Brock", "Curt Flood", "Tim McCarver"], diff: 2 },
      { clue: "The 1948 Cleveland Indians won the World Series, making Satchel Paige the first Black pitcher to win a World Series game. The Indians defeated this team in the Series.", answer: "Boston Braves", accept: ["boston braves", "braves"], choices: ["Brooklyn Dodgers", "New York Giants", "Philadelphia Phillies"], diff: 3 },
      { clue: "The Cardinals won the World Series in 1934 featuring this colorful outfielder who won the Triple Crown in the NL that year.", answer: "Joe Medwick", accept: ["joe medwick", "medwick", "ducky medwick"], choices: ["Dizzy Dean", "Pepper Martin", "Frankie Frisch"], diff: 3 },
    ],
    400: [
      { clue: "In 1926, Rogers Hornsby managed and played for the Cardinals to win their first World Series title, defeating these Yankees in 7 games.", answer: "New York Yankees", accept: ["new york yankees", "yankees"], choices: ["Philadelphia Athletics", "Washington Senators", "Chicago White Sox"], diff: 3 },
      { clue: "The Cardinals won their 9th title in 2006, led by this pitcher who won the World Series MVP despite a 3.83 regular-season ERA.", answer: "Jeff Suppan", accept: ["jeff suppan", "suppan"], choices: ["Chris Carpenter", "Adam Wainwright", "Jason Marquis"], diff: 4 },
      { clue: "The Cardinals' 1944 'Streetcar Series' opponent was the only other team from the same city to ever appear in a World Series against them. This team was the:", answer: "St. Louis Browns", accept: ["st. louis browns", "browns", "st louis browns"], choices: ["Chicago Cubs", "Cincinnati Reds", "Pittsburgh Pirates"], diff: 3 },
      { clue: "The 1994 strike began on August 12. The season had played exactly this many games before shutting down.", answer: "113", accept: ["113", "one hundred thirteen"], choices: ["98", "105", "121"], diff: 4 },
      { clue: "Adam Wainwright struck out this Yankees batter to end the 2006 World Series for St. Louis.", answer: "Brandon Inge", accept: ["brandon inge", "inge"], choices: ["Derek Jeter", "Alex Rodriguez", "Robinson Cano"], diff: 4 },
    ],
  },

  // Category 1: HOME RUN LEGENDS
  1: {
    100: [
      { clue: "Mark McGwire hit 70 home runs in 1998, breaking the single-season record previously held by this New York Yankee.", answer: "Roger Maris", accept: ["roger maris", "maris"], choices: ["Babe Ruth", "Mickey Mantle", "Joe DiMaggio"], diff: 1 },
      { clue: "In 1998, Sammy Sosa hit this many home runs to finish second behind Mark McGwire in the famous home run race.", answer: "66", accept: ["66", "sixty-six", "sixty six"], choices: ["63", "61", "65"], diff: 2 },
      { clue: "Mickey Mantle hit 536 career home runs and is considered the greatest player ever at this position.", answer: "Center Field", accept: ["center field", "centerfield", "cf"], choices: ["First Base", "Left Field", "Right Field"], diff: 1 },
      { clue: "Frank Robinson won the AL Triple Crown in 1966 with 49 home runs for this team.", answer: "Baltimore Orioles", accept: ["baltimore orioles", "orioles", "the orioles"], choices: ["Cincinnati Reds", "New York Yankees", "Minnesota Twins"], diff: 2 },
      { clue: "Shohei Ohtani led the American League with 44 home runs in 2023 while also pitching for the Los Angeles Angels.", answer: "Los Angeles Angels", accept: ["los angeles angels", "angels", "the angels", "la angels"], choices: ["Houston Astros", "New York Yankees", "Tampa Bay Rays"], diff: 1 },
    ],
    200: [
      { clue: "Mickey Mantle was the only switch-hitter to ever win baseball's Triple Crown, achieving the feat in this year.", answer: "1956", accept: ["1956"], choices: ["1955", "1957", "1961"], diff: 3 },
      { clue: "Frank Robinson became the first player to win MVP awards in both leagues. He won the NL MVP with this team before the Orioles.", answer: "Cincinnati Reds", accept: ["cincinnati reds", "reds", "the reds"], choices: ["Pittsburgh Pirates", "Milwaukee Braves", "San Francisco Giants"], diff: 2 },
      { clue: "Bryce Harper won his second NL MVP award in 2021 with a .309 average, 35 home runs, and a league-leading 42 of these extra-base hits.", answer: "Doubles", accept: ["doubles", "double"], choices: ["Triples", "Home runs", "Stolen Bases"], diff: 3 },
      { clue: "Mark McGwire broke Roger Maris's record with his 62nd home run on September 8, 1998, ironically against this team that also featured Sammy Sosa.", answer: "Chicago Cubs", accept: ["chicago cubs", "cubs", "the cubs"], choices: ["Houston Astros", "Pittsburgh Pirates", "Cincinnati Reds"], diff: 2 },
      { clue: "Mickey Mantle is the only player in history to hit 150 or more home runs batting from both sides of the plate. He hit 372 home runs from the left side and this many from the right.", answer: "164", accept: ["164"], choices: ["134", "189", "142"], diff: 4 },
    ],
    300: [
      { clue: "Shohei Ohtani became the first player since this Hall of Famer in 1918 to pitch 130+ innings and hit 10+ home runs in the same season.", answer: "Babe Ruth", accept: ["babe ruth", "ruth", "the babe"], choices: ["Cy Young", "Walter Johnson", "Christy Mathewson"], diff: 2 },
      { clue: "Sammy Sosa hit 60 or more home runs in THREE different seasons. The years were 1998, 1999, and this year.", answer: "2001", accept: ["2001"], choices: ["2000", "2002", "2003"], diff: 3 },
      { clue: "Josh Gibson's .466 batting average for the 1943 Homestead Grays became the single-season MLB batting record after this happened in 2024.", answer: "MLB integrated Negro League statistics", accept: ["mlb integrated negro league statistics", "negro league stats added", "negro leagues integrated into record books", "mlb added negro league stats"], choices: ["Hall of Fame induction", "Congressional legislation", "Commissioner's ruling"], diff: 3 },
      { clue: "When MLB integrated Negro League statistics in 2024, Josh Gibson surpassed Ty Cobb as the all-time career batting average leader. Gibson's mark was .372 while Cobb's was this.", answer: ".367", accept: [".367", "0.367", "point three six seven"], choices: [".356", ".375", ".362"], diff: 3 },
      { clue: "Bryce Harper won his first NL MVP award in 2015 with this team.", answer: "Washington Nationals", accept: ["washington nationals", "nationals", "the nationals"], choices: ["Philadelphia Phillies", "Los Angeles Dodgers", "Chicago Cubs"], diff: 2 },
    ],
    400: [
      { clue: "On September 25, 1998, Sammy Sosa briefly held the HR record with 66, hitting his blast off this Houston Astros pitcher.", answer: "Jose Lima", accept: ["jose lima", "lima"], choices: ["Mike Hampton", "Shane Reynolds", "Billy Wagner"], diff: 4 },
      { clue: "Mark McGwire set the then-record with his 70th home run in the final homestand of 1998, hitting it off this Montreal Expos pitcher.", answer: "Carl Pavano", accept: ["carl pavano", "pavano"], choices: ["Ugueth Urbina", "Dustin Hermanson", "Jose Vidro"], diff: 4 },
      { clue: "Josh Gibson is credited with hitting close to 800 career home runs, though his Baseball Hall of Fame plaque says 'almost' this many.", answer: "800", accept: ["800", "eight hundred"], choices: ["700", "900", "600"], diff: 3 },
      { clue: "Mickey Mantle famously hit a home run measured at 565 feet at this stadium in 1953, the longest officially measured homer in MLB history at the time.", answer: "Griffith Stadium", accept: ["griffith stadium", "griffith"], choices: ["Yankee Stadium", "Sportsman's Park", "Comiskey Park"], diff: 4 },
      { clue: "Frank Robinson won the Triple Crown in 1966 with a .316 average — the lowest batting average ever recorded by a Triple Crown winner at that time.", answer: ".316", accept: [".316", "0.316", "point three one six"], choices: [".330", ".299", ".325"], diff: 4 },
    ],
  },

  // Category 2: DIAMOND FIRSTS
  2: {
    100: [
      { clue: "Fernando Valenzuela became the first, and still only, player to win both the Cy Young Award and Rookie of the Year in the same season, doing so in this year.", answer: "1981", accept: ["1981"], choices: ["1979", "1983", "1977"], diff: 2 },
      { clue: "Roberto Clemente became the first Latin American player elected to the Baseball Hall of Fame. He was inducted in this year, the year after his death.", answer: "1973", accept: ["1973"], choices: ["1972", "1975", "1971"], diff: 2 },
      { clue: "Satchel Paige made his MLB debut with the Cleveland Indians in 1948 at age 42, making him the oldest player ever to debut in the major leagues.", answer: "42", accept: ["42", "forty-two", "forty two"], choices: ["38", "44", "40"], diff: 2 },
      { clue: "Ron Blomberg of the New York Yankees became the first designated hitter in MLB history on Opening Day of this year.", answer: "1973", accept: ["1973"], choices: ["1972", "1974", "1975"], diff: 2 },
      { clue: "Shohei Ohtani won his first AL MVP award unanimously in 2021, becoming the first two-way player ever to win the award.", answer: "Shohei Ohtani", accept: ["shohei ohtani", "ohtani"], choices: ["Babe Ruth", "Bo Jackson", "Dave Winfield"], diff: 1 },
    ],
    200: [
      { clue: "Roberto Clemente recorded his 3,000th career hit in his final regular-season at-bat on September 30 of this year.", answer: "1972", accept: ["1972"], choices: ["1971", "1973", "1970"], diff: 2 },
      { clue: "Satchel Paige was also the first Black pitcher in the American League. He became the first Negro League inductee into the Baseball Hall of Fame in this year.", answer: "1971", accept: ["1971"], choices: ["1969", "1975", "1973"], diff: 3 },
      { clue: "The American League adopted the designated hitter rule on January 11, 1973. The rule was originally approved as a this-year experiment.", answer: "Three-year", accept: ["three-year", "three year", "3-year", "3 year", "three years"], choices: ["Two-year", "Five-year", "One-year"], diff: 3 },
      { clue: "Greg Maddux made history by winning four consecutive Cy Young Awards from 1992 to 1995 — the only pitcher to do this at the time. He later shared the record with this fellow Hall of Famer.", answer: "Randy Johnson", accept: ["randy johnson", "johnson", "the big unit"], choices: ["Roger Clemens", "Pedro Martinez", "Tom Seaver"], diff: 2 },
      { clue: "Fernando Valenzuela's 'Fernandomania' helped increase the percentage of Latino fans at Dodger Stadium from under 10% to eventually this percentage by 2015.", answer: "54%", accept: ["54%", "54 percent", "fifty-four percent", "fifty four percent"], choices: ["25%", "38%", "67%"], diff: 4 },
    ],
    300: [
      { clue: "Tom Seaver set the all-time record for consecutive seasons with 200 or more strikeouts, accomplishing this nine times in a row from 1968 through this year.", answer: "1976", accept: ["1976"], choices: ["1975", "1977", "1978"], diff: 3 },
      { clue: "Roberto Clemente was the first Latin American player to record 3,000 career hits. His 3,000th hit was this type of hit.", answer: "Double", accept: ["double", "a double"], choices: ["Single", "Home Run", "Triple"], diff: 3 },
      { clue: "The DH rule was first proposed by legendary manager Connie Mack as early as this decade.", answer: "1900s", accept: ["1900s", "the 1900s", "nineteen hundreds", "early 1900s"], choices: ["1920s", "1940s", "1950s"], diff: 4 },
      { clue: "Pedro Martinez posted the highest single-season adjusted ERA+ in MLB history in this year.", answer: "2000", accept: ["2000"], choices: ["1999", "2001", "1998"], diff: 3 },
      { clue: "Frank Robinson became the first player to win MVP awards in both leagues when he won the 1966 AL MVP after previously winning the NL MVP with the Reds in this year.", answer: "1961", accept: ["1961"], choices: ["1962", "1959", "1963"], diff: 3 },
    ],
    400: [
      { clue: "Bob Gibson's 1.12 ERA in 1968 is the lowest in the 'Live Ball Era.' This indirectly led to MLB lowering the pitching mound from 15 inches to this height in 1969.", answer: "10 inches", accept: ["10 inches", "ten inches", "10\""], choices: ["8 inches", "12 inches", "6 inches"], diff: 3 },
      { clue: "The 1994-95 MLB strike caused the cancellation of exactly this many regular-season games.", answer: "921", accept: ["921", "nine hundred twenty-one"], choices: ["842", "1,004", "776"], diff: 4 },
      { clue: "Satchel Paige's MLB debut year of 1948 also ended with the Cleveland Indians winning the World Series — a championship that would not be repeated by that franchise until this year (2016 or never again under Cleveland name).", answer: "Never", accept: ["never", "they haven't", "not yet", "2016 as Indians"], choices: ["1954", "1997", "1987"], diff: 3 },
      { clue: "Roberto Clemente's plane crashed into the Atlantic Ocean on New Year's Eve 1972 while carrying relief supplies to this country devastated by a December earthquake.", answer: "Nicaragua", accept: ["nicaragua"], choices: ["Haiti", "Dominican Republic", "Puerto Rico"], diff: 2 },
      { clue: "The 2004 Red Sox ALCS comeback began in Game 4 when this player stole a base in the 9th inning to set up the tying run against Mariano Rivera.", answer: "Dave Roberts", accept: ["dave roberts", "roberts"], choices: ["Johnny Damon", "Kevin Millar", "Pokey Reese"], diff: 3 },
    ],
  },

  // Category 3: RECORD BREAKERS
  3: {
    100: [
      { clue: "Bob Gibson posted a 1.12 ERA in 1968 — the lowest in the modern era. He also went 22-9 with this many strikeouts that season.", answer: "268", accept: ["268", "two hundred sixty-eight"], choices: ["247", "285", "301"], diff: 2 },
      { clue: "Pedro Martinez posted a 1.74 ERA in 2000 — the lowest American League ERA since 1978. His ERA+ of 291 is the highest this stat has ever been in MLB history.", answer: "291", accept: ["291", "two hundred ninety-one"], choices: ["267", "310", "248"], diff: 3 },
      { clue: "Greg Maddux won 4 consecutive Cy Young Awards from 1992-1995. His ERA across those four seasons was below this number.", answer: "2.00", accept: ["2.00", "two", "under two", "below 2.00", "1.98"], choices: ["2.50", "2.25", "1.75"], diff: 2 },
      { clue: "Miguel Cabrera won the first Triple Crown in 45 years in 2012, batting .330 with 44 home runs and this many RBIs.", answer: "139", accept: ["139", "one hundred thirty-nine"], choices: ["121", "147", "132"], diff: 3 },
      { clue: "Derek Jeter retired with 3,465 career hits, the most ever by a player at this position.", answer: "Shortstop", accept: ["shortstop", "ss"], choices: ["Third Base", "Second Base", "Left Field"], diff: 1 },
    ],
    200: [
      { clue: "Tony Gwynn batted .394 in the strike-shortened 1994 season. In the month of August before the strike ended things, he batted this astronomical average.", answer: ".475", accept: [".475", "0.475", "point four seven five"], choices: [".423", ".450", ".389"], diff: 3 },
      { clue: "Roger Clemens won a record 7 Cy Young Awards across his career, winning them with 4 different teams. This was the number of teams he played for in his career that did NOT earn him a Cy Young.", answer: "One", accept: ["one", "1"], choices: ["Two", "Zero", "Three"], diff: 4 },
      { clue: "Tom Seaver finished his career with 311 wins and 3,640 strikeouts. He holds the Mets' all-time record in wins and is nicknamed this.", answer: "Tom Terrific", accept: ["tom terrific", "terrific"], choices: ["The Franchise", "Big Tom", "The Stork"], diff: 2 },
      { clue: "Wade Boggs won 5 batting titles with the Red Sox, all coming in a 6-year window from 1983 to 1988. He finished his 18-year career with exactly this many hits.", answer: "3,010", accept: ["3,010", "3010", "three thousand ten"], choices: ["2,987", "3,112", "3,056"], diff: 3 },
      { clue: "Yogi Berra won 10 World Series rings as a player — more than anyone in MLB history. He also holds the record for playing in this many World Series games.", answer: "75", accept: ["75", "seventy-five"], choices: ["63", "81", "68"], diff: 3 },
    ],
    300: [
      { clue: "Pedro Martinez won the 1999 pitching 'Triple Crown' — leading the AL in wins (23), ERA (2.07), and this counting stat (313).", answer: "Strikeouts", accept: ["strikeouts", "k's", "ks"], choices: ["Complete Games", "Shutouts", "Innings Pitched"], diff: 2 },
      { clue: "Ozzie Smith won 13 consecutive Gold Gloves at shortstop and holds the all-time MLB record for career assists at any position with this many.", answer: "8,375", accept: ["8,375", "8375", "eighty-three seventy-five"], choices: ["7,412", "9,102", "6,988"], diff: 4 },
      { clue: "Bob Gibson pitched 28 complete games and this many shutouts in his dominant 1968 season.", answer: "13", accept: ["13", "thirteen"], choices: ["10", "16", "11"], diff: 3 },
      { clue: "Tony Gwynn won 8 batting titles in his career, all with the San Diego Padres. This placed him tied for the NL record with this Hall of Famer.", answer: "Honus Wagner", accept: ["honus wagner", "wagner", "the flying dutchman"], choices: ["Stan Musial", "Rogers Hornsby", "Willie Mays"], diff: 3 },
      { clue: "Roger Clemens was 42 years old when he won his 7th and final Cy Young Award in 2004. He won it pitching for this team.", answer: "Houston Astros", accept: ["houston astros", "astros", "the astros"], choices: ["New York Yankees", "Boston Red Sox", "Toronto Blue Jays"], diff: 2 },
    ],
    400: [
      { clue: "Bob Gibson's 47 consecutive scoreless innings in 1968 was, at the time, the fourth-longest scoreless streak in MLB history. He went 23 complete games in his last 25 starts of the season, posting this ERA over that stretch.", answer: "0.50", accept: ["0.50", ".50", "zero point five", "0.5"], choices: ["0.75", "0.88", "0.42"], diff: 4 },
      { clue: "Greg Maddux's 4-year Cy Young run included his 1994 season where his ERA was a remarkable 1.56. His record that year was 16-6 for this team.", answer: "Atlanta Braves", accept: ["atlanta braves", "braves", "the braves"], choices: ["Chicago Cubs", "Los Angeles Dodgers", "San Diego Padres"], diff: 3 },
      { clue: "Pedro Martinez's 2000 WHIP of 0.737 is the second-lowest in MLB history in a single season. His adjusted ERA+ of 291 means he was this much better than league average.", answer: "191% better", accept: ["191% better", "191 percent better", "291 era+", "291"], choices: ["191% worse", "91% better", "291% better"], diff: 4 },
      { clue: "Wade Boggs hit .368 in 1985 — the highest batting average by a Red Sox player since Ted Williams hit .388 in this year.", answer: "1957", accept: ["1957"], choices: ["1952", "1960", "1948"], diff: 4 },
      { clue: "Johnny Bench won 10 consecutive Gold Gloves at catcher (1968-77). He was a two-time NL MVP, winning in 1970 and this other year.", answer: "1972", accept: ["1972"], choices: ["1971", "1973", "1975"], diff: 3 },
    ],
  },

  // Category 4: BASEBALL LINGO
  4: {
    100: [
      { clue: "This term describes a pitcher who bats in his own spot in the lineup, rather than having a designated hitter bat for him.", answer: "Two-way player", accept: ["two-way player", "two way player"], choices: ["Complete game pitcher", "Spot starter", "Swing man"], diff: 1 },
      { clue: "Winning the batting average, home run, and RBI titles in the same season is called this.", answer: "Triple Crown", accept: ["triple crown", "the triple crown"], choices: ["Grand Slam", "Hat Trick", "Golden Slam"], diff: 1 },
      { clue: "A pitcher who completes all nine innings of a game himself earns this statistical credit.", answer: "Complete Game", accept: ["complete game", "cg"], choices: ["Quality Start", "Shutout", "Save"], diff: 1 },
      { clue: "This award, given annually since 1971, honors the MLB player who best combines outstanding play with significant community contributions.", answer: "Roberto Clemente Award", accept: ["roberto clemente award", "clemente award"], choices: ["Cy Young Award", "Lou Gehrig Award", "Jackie Robinson Award"], diff: 2 },
      { clue: "Fernandomania was the pop-culture frenzy surrounding this Dodgers pitcher's spectacular 1981 rookie season.", answer: "Fernando Valenzuela", accept: ["fernando valenzuela", "valenzuela", "fernando"], choices: ["Tommy John", "Don Sutton", "Orel Hershiser"], diff: 1 },
    ],
    200: [
      { clue: "A pitcher's ERA+ of 291 — like Pedro Martinez achieved in 2000 — means the pitcher's ERA was this much better than league average.", answer: "191% better", accept: ["191% better", "191 percent better", "191 points above average", "nearly twice as good"], choices: ["291% better", "91% better", "2.91 times better"], diff: 3 },
      { clue: "In baseball lingo, 'The Wizard of Oz' was a nickname for this Cardinals shortstop known for his acrobatic defense.", answer: "Ozzie Smith", accept: ["ozzie smith", "smith", "the wizard"], choices: ["Cal Ripken Jr.", "Alan Trammell", "Barry Larkin"], diff: 1 },
      { clue: "The term 'Big Red Machine' referred to this dominant 1970s Cincinnati Reds lineup.", answer: "Cincinnati Reds", accept: ["cincinnati reds", "reds", "the reds", "big red machine"], choices: ["Oakland Athletics", "Baltimore Orioles", "Pittsburgh Pirates"], diff: 1 },
      { clue: "A 'Cy Young' is awarded to the best pitcher in each league. The award is named after a pitcher who amassed a record 511 wins. This is the name given to a pitcher who dominates his era so thoroughly that others joke he deserves the award every season.", answer: "Workhorse", accept: ["workhorse", "ace", "staff ace"], choices: ["Bullpen closer", "Spot starter", "Swing man"], diff: 2 },
      { clue: "This colorful baseball phrase describes a home run that clears the fences with plenty of distance to spare — same as Mantle's famous 565-foot blast.", answer: "Tape measure home run", accept: ["tape measure home run", "tape measure shot", "tape measure homer"], choices: ["Moonshot", "Grand salami", "Walk-off"], diff: 2 },
    ],
    300: [
      { clue: "In the Negro Leagues, Josh Gibson was known as 'the Black Babe Ruth.' His spectacular power earned him this informal nickname.", answer: "The Black Babe Ruth", accept: ["the black babe ruth", "black babe ruth"], choices: ["The Black Gehrig", "The Black DiMaggio", "Thunder Gibson"], diff: 2 },
      { clue: "When a team blows a 3-0 series lead in the playoffs, it is often called 'doing a [team name]' after the 2004 Yankees. The Red Sox comeback is also called 'reversing' this legendary curse.", answer: "The Curse of the Bambino", accept: ["the curse of the bambino", "curse of the bambino", "bambino curse"], choices: ["The Black Sox Curse", "The Billy Goat Curse", "The 86-Year Curse"], diff: 2 },
      { clue: "A pitcher who gives up a home run in the last at-bat of a game that his team loses is said to have given up a 'walk-off.' The pitcher who threw the famous Carlton Fisk walk-off was this Reds pitcher.", answer: "Pat Darcy", accept: ["pat darcy", "darcy"], choices: ["Will McEnaney", "Don Gullett", "Jack Billingham"], diff: 4 },
      { clue: "The phrase 'playing the hot corner' refers to this defensive position, where Brooks Robinson made his legendary 1970 World Series plays.", answer: "Third Base", accept: ["third base", "third", "3b"], choices: ["First Base", "Shortstop", "Catcher"], diff: 1 },
      { clue: "A 'screwball' is a pitch that breaks opposite to a slider or curveball. It was the signature pitch that made Fernando Valenzuela nearly unhittable in 1981, and Valenzuela learned it from this former MLB pitcher.", answer: "Bobby Castillo", accept: ["bobby castillo", "castillo"], choices: ["Tommy John", "Jerry Reuss", "Burt Hooton"], diff: 4 },
    ],
    400: [
      { clue: "The term 'WHIP' stands for Walks plus Hits per Inning Pitched. Pedro Martinez's 2000 WHIP of 0.737 is the second-lowest ever, meaning he gave up fewer than this fraction of a baserunner per inning.", answer: "One", accept: ["one", "1", "less than one"], choices: ["Two", "Three", "Half"], diff: 2 },
      { clue: "The 'dead ball era' roughly ended in 1920 after this change made offense explode across baseball.", answer: "Live ball introduced", accept: ["live ball introduced", "new ball introduced", "livelier baseball", "balls replaced more often", "livened ball"], choices: ["Expansion teams added", "Mound lowered", "DH rule added"], diff: 3 },
      { clue: "An 'ERA+' of 100 means a pitcher is exactly average. Bob Gibson's 1968 adjusted ERA+ was an astounding 258. This means his ERA was roughly this many percent better than the league average.", answer: "158% better", accept: ["158% better", "158 percent better", "258 era+", "258"], choices: ["100% better", "258% better", "58% better"], diff: 4 },
      { clue: "The 1994 players strike started on August 12 after players walked out over this core negotiating issue.", answer: "Salary cap", accept: ["salary cap", "the salary cap"], choices: ["Free agency", "Drug testing", "Revenue sharing"], diff: 3 },
      { clue: "Mickey Mantle's career on-base percentage of .421 is the record for this specific type of batter in MLB history.", answer: "Switch hitter", accept: ["switch hitter", "switch-hitter"], choices: ["Left-handed hitter", "Right-handed hitter", "Designated hitter"], diff: 3 },
    ],
  },

  // Category 5: HALL OF FAMERS
  5: {
    100: [
      { clue: "Derek Jeter received 396 of 397 possible Hall of Fame votes in 2020, the highest percentage ever by a player at his position. He was elected to the Hall alongside his Yankees teammate who received 100% of the vote.", answer: "Mariano Rivera", accept: ["mariano rivera", "rivera", "mo"], choices: ["Bernie Williams", "Jorge Posada", "Andy Pettitte"], diff: 1 },
      { clue: "Johnny Bench is widely considered the greatest catcher in baseball history. He spent his entire 17-year career with this franchise.", answer: "Cincinnati Reds", accept: ["cincinnati reds", "reds", "the reds"], choices: ["New York Yankees", "Los Angeles Dodgers", "Pittsburgh Pirates"], diff: 1 },
      { clue: "Tom Seaver won three Cy Young Awards and was known as 'The Franchise' for this team.", answer: "New York Mets", accept: ["new york mets", "mets", "the mets"], choices: ["Cincinnati Reds", "Boston Red Sox", "Chicago White Sox"], diff: 1 },
      { clue: "Roberto Clemente played his entire career with the Pittsburgh Pirates and won 12 Gold Gloves at this position.", answer: "Right Field", accept: ["right field", "rf"], choices: ["Left Field", "Center Field", "First Base"], diff: 2 },
      { clue: "Brooks Robinson won 16 consecutive Gold Gloves at third base, making him the all-time record holder at that position.", answer: "16", accept: ["16", "sixteen"], choices: ["13", "12", "18"], diff: 2 },
    ],
    200: [
      { clue: "Yogi Berra played his entire career with the Yankees and won 3 MVP awards. He also managed the Mets to the 1973 World Series, losing to this team.", answer: "Oakland Athletics", accept: ["oakland athletics", "athletics", "a's", "oakland a's"], choices: ["Cincinnati Reds", "Baltimore Orioles", "New York Yankees"], diff: 3 },
      { clue: "Wade Boggs famously won 5 batting titles with the Red Sox, but later won his only World Series ring with this team.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "the yankees"], choices: ["Tampa Bay Devil Rays", "Cleveland Indians", "California Angels"], diff: 2 },
      { clue: "Tom Seaver was traded away from the Mets in 1977, prompting this nickname for the devastating trade.", answer: "The Midnight Massacre", accept: ["the midnight massacre", "midnight massacre"], choices: ["The Great Trade", "The Seaver Swap", "The Dark Deal"], diff: 4 },
      { clue: "Fernando Valenzuela pitched his entire MLB career in the United States but was born and raised in this Mexican state.", answer: "Sonora", accept: ["sonora", "sonora mexico"], choices: ["Jalisco", "Sinaloa", "Chihuahua"], diff: 3 },
      { clue: "Satchel Paige also pitched for the Kansas City Athletics at age 59 in 1965. He threw this many scoreless innings in that appearance.", answer: "Three", accept: ["three", "3"], choices: ["Two", "One", "Six"], diff: 3 },
    ],
    300: [
      { clue: "Johnny Bench was a 10-time Gold Glove winner at catcher and is credited with revolutionizing how catchers hold their throwing hand, preventing this.", answer: "Foul tip injuries", accept: ["foul tip injuries", "foul tips", "finger injuries", "hand injuries"], choices: ["Stolen bases", "Wild pitches", "Passed balls"], diff: 3 },
      { clue: "Derek Jeter played 2,747 career games at shortstop. He was elected to the Hall of Fame in 2020, just the second time in history a player received all but one vote. The other player with a perfect minus-one vote was this person.", answer: "Tom Seaver", accept: ["tom seaver", "seaver"], choices: ["Willie Mays", "Hank Aaron", "Nolan Ryan"], diff: 3 },
      { clue: "Mike Trout won the AL Rookie of the Year unanimously in 2012 and followed it with 3 AL MVP awards. He spent his entire career with this franchise.", answer: "Los Angeles Angels", accept: ["los angeles angels", "angels", "anaheim angels", "la angels"], choices: ["Seattle Mariners", "Minnesota Twins", "Kansas City Royals"], diff: 1 },
      { clue: "Brooks Robinson's 1970 World Series performance earned him MVP honors. He batted .429 and made countless defensive gems in a series against this NL team.", answer: "Cincinnati Reds", accept: ["cincinnati reds", "reds", "the reds"], choices: ["Pittsburgh Pirates", "New York Mets", "San Francisco Giants"], diff: 2 },
      { clue: "Bob Gibson won the 1968 World Series MVP despite losing Game 7 to the Tigers. The pitcher who outdueled him in that decisive game was this 31-game winner.", answer: "Mickey Lolich", accept: ["mickey lolich", "lolich"], choices: ["Denny McLain", "Earl Wilson", "Joe Sparma"], diff: 4 },
    ],
    400: [
      { clue: "Greg Maddux walked just 23 batters in 202.2 innings pitched in 1997, a record-setting season for control. This Hall of Famer said Maddux made hitting feel like 'trying to hit a moving spot.'", answer: "Tony Gwynn", accept: ["tony gwynn", "gwynn", "mr. padre"], choices: ["Wade Boggs", "Frank Thomas", "Ken Griffey Jr."], diff: 4 },
      { clue: "Roger Clemens's record 7th Cy Young Award in 2004 came at age 42, making him the oldest Cy Young winner ever at that time. He was 2 years younger than this pitcher who won a Cy Young in 1986 at age 43.", answer: "Phil Niekro", accept: ["phil niekro", "niekro"], choices: ["Nolan Ryan", "Tommy John", "Gaylord Perry"], diff: 4 },
      { clue: "Tom Seaver holds the Mets all-time record in wins. His Hall of Fame vote percentage in 1992 was 98.84%, making him the most-voted Hall of Famer at the time. This was later surpassed by Mariano Rivera and then Derek Jeter. Seaver received all but this many votes.", answer: "5", accept: ["5", "five"], choices: ["1", "3", "8"], diff: 4 },
      { clue: "Satchel Paige's birthdate was officially listed as July 7, 1906, making his MLB debut age 42. However, some historians believe he was actually this many years older.", answer: "2-3 years older", accept: ["2-3 years older", "two to three years older", "older", "44-45"], choices: ["5 years older", "1 year younger", "10 years older"], diff: 4 },
      { clue: "Wade Boggs was such a noted creature of habit that he ate chicken before every game. He ended his career with 3,010 hits and was elected to the Hall of Fame in this year.", answer: "2005", accept: ["2005"], choices: ["2003", "2007", "2004"], diff: 3 },
    ],
  },
};

const BASEBALL_EXTRA_FINALS = [
  {
    category: "RECORD BREAKERS",
    clue: "Bob Gibson posted a 1.12 ERA in 1968 — the lowest in the modern era. His dominance was so complete that MLB made this specific rule change before the 1969 season to restore offensive balance.",
    answer: "Lowered the pitching mound from 15 inches to 10 inches",
    accept: ["lowered the pitching mound", "mound was lowered", "lowered the mound", "mound height reduced", "pitching mound lowered to 10 inches"],
  },
  {
    category: "HALL OF FAMERS",
    clue: "In 2024, MLB officially integrated Negro League statistics into its all-time record books. This made Josh Gibson the all-time career batting average leader, surpassing Ty Cobb. Gibson's official career batting average was this figure.",
    answer: ".372",
    accept: [".372", "0.372", "point three seven two"],
  },
  {
    category: "DIAMOND FIRSTS",
    clue: "Fernando Valenzuela's 1981 season produced a record that still stands 40+ years later: he is the only player in MLB history to win both the Cy Young Award AND this other award in the same season.",
    answer: "NL Rookie of the Year",
    accept: ["nl rookie of the year", "rookie of the year", "cy young and rookie of the year"],
  },
  {
    category: "WORLD SERIES WINS",
    clue: "The 1994 World Series was cancelled due to the player strike. The team with the best record in baseball at the time of the stoppage — 74-40 — was this franchise, which has never won a World Series and has since relocated.",
    answer: "Montreal Expos",
    accept: ["montreal expos", "expos", "the expos"],
  },
  {
    category: "HOME RUN LEGENDS",
    clue: "Shohei Ohtani became the first player since Babe Ruth in 1918 to pitch 130+ innings AND hit 10+ home runs in the same MLB season. Ohtani has accomplished this rare two-way feat exactly this many times as of the 2023 season.",
    answer: "Three times",
    accept: ["three times", "three", "3", "3 times"],
  },
];

