const BASEBALL_Q = {
  0: {
    100: [
      { clue: "This franchise has won the most World Series titles in MLB history with 27 championships.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "ny yankees"], choices: ["Boston Red Sox", "St. Louis Cardinals", "Los Angeles Dodgers"], diff: 1 },
      { clue: "These 'Amazin'' underdogs shocked the baseball world by winning the 1969 World Series.", answer: "New York Mets", accept: ["new york mets", "mets", "ny mets"], choices: ["Chicago Cubs", "Baltimore Orioles", "Cincinnati Reds"], diff: 2 },
      { clue: "This Canadian franchise won back-to-back World Series titles in 1992 and 1993.", answer: "Toronto Blue Jays", accept: ["toronto blue jays", "blue jays"], choices: ["Montreal Expos", "Minnesota Twins", "Oakland Athletics"], diff: 3 },
      { clue: "This team ended a 32-year championship drought by winning the 2020 World Series in a neutral-site bubble format.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["Tampa Bay Rays", "Houston Astros", "Chicago Cubs"], diff: 4 },
    ],
    200: [
      { clue: "The 2004 World Series champions who overcame an 0-3 ALCS deficit to end their famous 86-year championship drought.", answer: "Boston Red Sox", accept: ["boston red sox", "red sox"], choices: ["New York Yankees", "St. Louis Cardinals", "Chicago Cubs"], diff: 1 },
      { clue: "The 2017 World Series champion whose title was later tainted by a sign-stealing scandal.", answer: "Houston Astros", accept: ["houston astros", "astros"], choices: ["Los Angeles Dodgers", "New York Yankees", "Chicago Cubs"], diff: 2 },
      { clue: "This franchise became the first wild-card team to win the World Series when they won it all in 1997.", answer: "Florida Marlins", accept: ["florida marlins", "marlins", "miami marlins"], choices: ["Atlanta Braves", "Cleveland Indians", "San Francisco Giants"], diff: 3 },
      { clue: "The 2019 World Series champion that had never previously won a championship in their franchise history.", answer: "Washington Nationals", accept: ["washington nationals", "nationals", "nats"], choices: ["Houston Astros", "New York Yankees", "Cleveland Indians"], diff: 4 },
    ],
    300: [
      { clue: "The 2016 World Series champion who ended their 108-year championship drought with a dramatic Game 7 victory.", answer: "Chicago Cubs", accept: ["chicago cubs", "cubs"], choices: ["Cleveland Indians", "Boston Red Sox", "San Francisco Giants"], diff: 1 },
      { clue: "Kirk Gibson hit his iconic pinch-hit walk-off home run in Game 1 of the World Series for this 1988 champion.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["Oakland Athletics", "New York Mets", "Boston Red Sox"], diff: 2 },
      { clue: "This franchise won three consecutive World Series championships from 1972 to 1974.", answer: "Oakland Athletics", accept: ["oakland athletics", "oakland a's", "a's", "athletics"], choices: ["New York Yankees", "Cincinnati Reds", "Baltimore Orioles"], diff: 3 },
      { clue: "The 2023 World Series was won by this franchise for the first time in their history, defeating the Diamondbacks.", answer: "Texas Rangers", accept: ["texas rangers", "rangers"], choices: ["Arizona Diamondbacks", "Houston Astros", "Atlanta Braves"], diff: 4 },
    ],
    400: [
      { clue: "This Pittsburgh Pirates second baseman hit a walk-off home run in the bottom of the 9th of Game 7 to win the 1960 World Series.", answer: "Bill Mazeroski", accept: ["bill mazeroski", "mazeroski"], choices: ["Roberto Clemente", "Dick Groat", "Roy Face"], diff: 1 },
      { clue: "Injured and barely able to walk, this Dodger hit a pinch-hit two-run walk-off homer in Game 1 of the 1988 World Series.", answer: "Kirk Gibson", accept: ["kirk gibson", "gibson"], choices: ["Steve Sax", "Mike Scioscia", "Mickey Hatcher"], diff: 2 },
      { clue: "This Red Sox catcher waved his iconic home run fair with his arm in Game 6 of the 1975 World Series.", answer: "Carlton Fisk", accept: ["carlton fisk", "fisk"], choices: ["Johnny Bench", "Thurman Munson", "Ted Simmons"], diff: 3 },
      { clue: "Freddie Freeman hit a walk-off grand slam in Game 1 of the 2024 World Series for this team.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["New York Yankees", "San Francisco Giants", "Atlanta Braves"], diff: 4 },
    ],
  },
  1: {
    100: [
      { clue: "This player holds the all-time MLB home run record with 762 career home runs.", answer: "Barry Bonds", accept: ["barry bonds", "bonds"], choices: ["Hank Aaron", "Babe Ruth", "Alex Rodriguez"], diff: 1 },
      { clue: "Known as 'The Hammer,' this player held the all-time home run record for decades before it was broken.", answer: "Hank Aaron", accept: ["hank aaron", "aaron", "hammerin hank"], choices: ["Babe Ruth", "Barry Bonds", "Willie Mays"], diff: 2 },
      { clue: "Babe Ruth hit 714 career home runs, a record that stood until 1974 when it was broken by this player.", answer: "Hank Aaron", accept: ["hank aaron", "aaron", "hammerin hank"], choices: ["Barry Bonds", "Willie Mays", "Reggie Jackson"], diff: 3 },
      { clue: "Aaron Judge set the American League single-season home run record in 2022 with this many home runs.", answer: "62", accept: ["62", "sixty-two", "sixty two"], choices: ["61", "60", "64"], diff: 4 },
    ],
    200: [
      { clue: "Babe Ruth set the single-season home run record in 1927 by hitting this many home runs.", answer: "60", accept: ["60", "sixty"], choices: ["61", "59", "58"], diff: 1 },
      { clue: "Hank Aaron hit his record-breaking 715th home run in 1974 while playing for this team.", answer: "Atlanta Braves", accept: ["atlanta braves", "braves"], choices: ["Milwaukee Brewers", "Cincinnati Reds", "Los Angeles Dodgers"], diff: 2 },
      { clue: "Mark McGwire set a then-record 70 home runs in 1998, playing for this team.", answer: "St. Louis Cardinals", accept: ["st. louis cardinals", "st louis cardinals", "cardinals"], choices: ["Oakland Athletics", "Chicago Cubs", "New York Yankees"], diff: 3 },
      { clue: "Shohei Ohtani made history in 2024 by becoming the first player to hit 50 home runs and steal this many bases in a single season.", answer: "50", accept: ["50", "fifty"], choices: ["40", "45", "55"], diff: 4 },
    ],
    300: [
      { clue: "Roger Maris broke Babe Ruth's single-season home run record in 1961 by hitting this many home runs.", answer: "61", accept: ["61", "sixty-one", "sixty one"], choices: ["60", "62", "58"], diff: 1 },
      { clue: "Mickey Mantle won the Triple Crown in 1956, leading the AL in batting average, home runs, and this third statistical category.", answer: "RBI", accept: ["rbi", "rbis", "runs batted in"], choices: ["Stolen Bases", "On-Base Percentage", "Slugging Percentage"], diff: 2 },
      { clue: "Sammy Sosa hit 60 or more home runs three different times, all while playing for this team.", answer: "Chicago Cubs", accept: ["chicago cubs", "cubs"], choices: ["Houston Astros", "Baltimore Orioles", "Texas Rangers"], diff: 3 },
      { clue: "Pete Alonso set the MLB rookie home run record in 2019 with 53 home runs playing for this team.", answer: "New York Mets", accept: ["new york mets", "mets", "ny mets"], choices: ["New York Yankees", "Chicago Cubs", "Houston Astros"], diff: 4 },
    ],
    400: [
      { clue: "Barry Bonds set the single-season home run record in 2001 with this many home runs.", answer: "73", accept: ["73", "seventy-three", "seventy three"], choices: ["70", "72", "71"], diff: 1 },
      { clue: "Sammy Sosa hit 66 home runs in 1998 for the Cubs, finishing second to Mark McGwire. What was McGwire's total?", answer: "70", accept: ["70", "seventy"], choices: ["68", "72", "69"], diff: 2 },
      { clue: "Ken Griffey Jr. hit a career-high 56 home runs in 1997 and 1998 while playing for this team.", answer: "Seattle Mariners", accept: ["seattle mariners", "mariners"], choices: ["Cincinnati Reds", "New York Yankees", "Atlanta Braves"], diff: 3 },
      { clue: "After 17 seasons with the Los Angeles Angels, Shohei Ohtani signed a record-breaking $700 million deal with this team before the 2024 season.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["New York Yankees", "San Francisco Giants", "Chicago Cubs"], diff: 4 },
    ],
  },
  2: {
    100: [
      { clue: "This player broke the color barrier in Major League Baseball on April 15, 1947, wearing number 42.", answer: "Jackie Robinson", accept: ["jackie robinson", "robinson"], choices: ["Willie Mays", "Satchel Paige", "Larry Doby"], diff: 1 },
      { clue: "Joe DiMaggio began his legendary 56-game hitting streak on May 15 of this year.", answer: "1941", accept: ["1941"], choices: ["1939", "1942", "1940"], diff: 2 },
      { clue: "Sandy Koufax threw four no-hitters during his career, all with this franchise.", answer: "Los Angeles Dodgers", accept: ["los angeles dodgers", "dodgers", "la dodgers"], choices: ["New York Yankees", "San Francisco Giants", "Cincinnati Reds"], diff: 3 },
      { clue: "MLB introduced this timing device in 2023 to speed up games, requiring pitchers to deliver within 15 seconds with bases empty.", answer: "pitch clock", accept: ["pitch clock", "pitching clock"], choices: ["strike zone camera", "automatic ball-strike system", "batting clock"], diff: 4 },
    ],
    200: [
      { clue: "Don Larsen threw the only perfect game in World Series history in 1956, playing for this team.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "ny yankees"], choices: ["Brooklyn Dodgers", "Milwaukee Braves", "Chicago White Sox"], diff: 1 },
      { clue: "Hank Aaron broke Babe Ruth's all-time home run record with his 715th homer in this year.", answer: "1974", accept: ["1974"], choices: ["1972", "1973", "1975"], diff: 2 },
      { clue: "Joe DiMaggio's 56-game hitting streak ended when it was stopped by pitchers from this team.", answer: "Cleveland Indians", accept: ["cleveland indians", "indians", "cleveland"], choices: ["Boston Red Sox", "Chicago White Sox", "St. Louis Browns"], diff: 3 },
      { clue: "The National League officially adopted the universal designated hitter rule permanently starting in this year.", answer: "2022", accept: ["2022"], choices: ["2020", "2021", "2023"], diff: 4 },
    ],
    300: [
      { clue: "Fenway Park, the oldest active MLB stadium, was built in this year.", answer: "1912", accept: ["1912"], choices: ["1910", "1914", "1916"], diff: 1 },
      { clue: "Known as the 'Friendly Confines,' Wrigley Field opened in this year.", answer: "1914", accept: ["1914"], choices: ["1912", "1916", "1920"], diff: 2 },
      { clue: "The first MLB All-Star Game was played in 1933 at this Chicago stadium.", answer: "Comiskey Park", accept: ["comiskey park", "comiskey"], choices: ["Wrigley Field", "Forbes Field", "Polo Grounds"], diff: 3 },
      { clue: "MLB banned this fielding strategy in 2023, requiring two infielders on each side of second base.", answer: "defensive shift", accept: ["defensive shift", "shift", "infield shift"], choices: ["four-man outfield", "intentional walk", "defensive positioning"], diff: 4 },
    ],
    400: [
      { clue: "The American League adopted the designated hitter rule in this year.", answer: "1973", accept: ["1973"], choices: ["1969", "1971", "1975"], diff: 1 },
      { clue: "The 1994 players' strike resulted in the cancellation of this event for the first time since 1904.", answer: "World Series", accept: ["world series"], choices: ["All-Star Game", "League Championship Series", "MLB Draft"], diff: 2 },
      { clue: "The Astrodome in Houston opened in 1965 and was nicknamed this for being an engineering marvel.", answer: "Eighth Wonder of the World", accept: ["eighth wonder of the world", "eighth wonder"], choices: ["House of Grass", "The Dome", "Space Stadium"], diff: 3 },
      { clue: "Roy Halladay pitched a perfect game in the regular season AND a no-hitter in the NLDS, both in this year.", answer: "2010", accept: ["2010"], choices: ["2011", "2009", "2012"], diff: 4 },
    ],
  },
  3: {
    100: [
      { clue: "Pete Rose holds the all-time MLB hits record with this many career hits.", answer: "4,256", accept: ["4256", "4,256", "four thousand two hundred fifty-six"], choices: ["3,771", "3,630", "4,191"], diff: 1 },
      { clue: "This player holds the MLB all-time stolen base record with 1,406 career stolen bases.", answer: "Rickey Henderson", accept: ["rickey henderson", "henderson"], choices: ["Lou Brock", "Tim Raines", "Vince Coleman"], diff: 2 },
      { clue: "Aaron Judge set the American League single-season home run record in 2022, breaking Roger Maris's record of 61. How many did Judge hit?", answer: "62", accept: ["62", "sixty-two", "sixty two"], choices: ["63", "61", "65"], diff: 3 },
    ],
    200: [
      { clue: "Cy Young holds the all-time record for career pitching wins. How many did he win?", answer: "511", accept: ["511", "five hundred eleven"], choices: ["417", "373", "363"], diff: 1 },
      { clue: "Rickey Henderson set the single-season stolen base record in 1982 with how many steals?", answer: "130", accept: ["130", "one hundred thirty"], choices: ["118", "100", "143"], diff: 2 },
      { clue: "Ronald Acuña Jr. made history in 2023 by becoming the first player to hit 40 home runs and steal how many bases in a season?", answer: "70", accept: ["70", "seventy"], choices: ["60", "50", "65"], diff: 3 },
    ],
    300: [
      { clue: "Orel Hershiser set the record for consecutive scoreless innings pitched in 1988 with this many innings.", answer: "59", accept: ["59", "fifty-nine", "fifty nine"], choices: ["58", "60", "55"], diff: 1 },
      { clue: "Kerry Wood struck out this many batters in a single game in 1998, tying the NL record.", answer: "20", accept: ["20", "twenty"], choices: ["19", "18", "21"], diff: 2 },
      { clue: "The 2001 Seattle Mariners tied the 1906 Chicago Cubs record for most wins in a season with this many victories.", answer: "116", accept: ["116", "one hundred sixteen"], choices: ["114", "111", "118"], diff: 3 },
    ],
    400: [
      { clue: "Nolan Ryan holds the all-time MLB strikeout record. How many career strikeouts did he record?", answer: "5,714", accept: ["5714", "5,714", "five thousand seven hundred fourteen"], choices: ["4,875", "3,509", "4,136"], diff: 1 },
      { clue: "Walter Johnson threw a record 110 shutouts during his career with this team.", answer: "Washington Senators", accept: ["washington senators", "senators"], choices: ["Boston Red Sox", "Detroit Tigers", "Cleveland Indians"], diff: 2 },
      { clue: "Ichiro Suzuki set the single-season hits record in 2004 with how many hits?", answer: "262", accept: ["262", "two hundred sixty-two", "two hundred sixty two"], choices: ["257", "248", "271"], diff: 3 },
      { clue: "Cal Ripken Jr. holds the record for consecutive games played with 2,632 straight games, breaking Lou Gehrig's record of how many consecutive games?", answer: "2,130", accept: ["2130", "2,130", "two thousand one hundred thirty"], choices: ["1,999", "2,009", "2,215"], diff: 4 },
    ],
  },
  4: {
    100: [
      { clue: "In baseball, 'hitting for the cycle' means a player gets a single, double, triple, and this in the same game.", answer: "home run", accept: ["home run", "homer", "homerun"], choices: ["grand slam", "walk-off hit", "sacrifice fly"], diff: 1 },
      { clue: "A 'walk' in baseball is also officially called this.", answer: "base on balls", accept: ["base on balls", "bb", "walk"], choices: ["hit by pitch", "intentional pass", "free pass"], diff: 2 },
      { clue: "When a fielder mishandles or drops a ball, allowing a batter or runner to advance, it is scored as this.", answer: "error", accept: ["error", "e"], choices: ["passed ball", "wild pitch", "fielder's choice"], diff: 3 },
      { clue: "The MLB pitch clock introduced in 2023 requires pitchers to deliver the ball within this many seconds with runners on base.", answer: "20", accept: ["20", "twenty"], choices: ["15", "25", "18"], diff: 4 },
    ],
    200: [
      { clue: "A 'perfect game' in baseball means the pitcher retires all batters without allowing any baserunner. How many outs does that require?", answer: "27", accept: ["27", "twenty-seven", "twenty seven"], choices: ["24", "21", "30"], diff: 1 },
      { clue: "Unlike a perfect game, a no-hitter still allows this type of baserunner.", answer: "walks", accept: ["walks", "walk", "base on balls"], choices: ["home runs", "hit batters", "errors"], diff: 2 },
      { clue: "The 'battery' in baseball refers to this pair of players.", answer: "pitcher and catcher", accept: ["pitcher and catcher", "catcher and pitcher"], choices: ["shortstop and second baseman", "first baseman and third baseman", "center fielder and pitcher"], diff: 3 },
      { clue: "Since 2023, MLB places a runner on second base at the start of extra innings. This runner is known by this nickname.", answer: "ghost runner", accept: ["ghost runner", "free runner", "automatic runner"], choices: ["bonus runner", "extra runner", "pace runner"], diff: 4 },
    ],
    300: [
      { clue: "The 'Mendoza Line' refers to a batting average at or below this figure, considered the threshold for a weak hitter.", answer: ".200", accept: [".200", "200", ".200 batting average", "two hundred"], choices: [".250", ".150", ".225"], diff: 1 },
      { clue: "A 'southpaw' in baseball refers to a pitcher who throws with this hand.", answer: "left hand", accept: ["left hand", "left-handed", "left", "left arm"], choices: ["right hand", "both hands", "right arm"], diff: 2 },
      { clue: "OPS is a statistic that combines on-base percentage and this other stat.", answer: "slugging percentage", accept: ["slugging percentage", "slugging", "slg"], choices: ["batting average", "wOBA", "ISO"], diff: 3 },
      { clue: "This team popularized the 'opener' strategy, using a reliever to start the game before a bulk pitcher takes over.", answer: "Tampa Bay Rays", accept: ["tampa bay rays", "rays", "tampa bay"], choices: ["Oakland Athletics", "Houston Astros", "Chicago Cubs"], diff: 4 },
    ],
    400: [
      { clue: "A 'Golden Sombrero' in baseball means a batter strikes out this many times in a single game.", answer: "4", accept: ["4", "four"], choices: ["3", "5", "6"], diff: 1 },
      { clue: "A 'quality start' is defined as a starting pitcher going at least 6 innings while allowing this many earned runs or fewer.", answer: "3", accept: ["3", "three"], choices: ["2", "4", "5"], diff: 2 },
      { clue: "A sacrifice fly does not count as an official at-bat. What does it count as in the box score?", answer: "sacrifice fly", accept: ["sacrifice fly", "sac fly", "sf"], choices: ["fielder's choice", "at-bat", "plate appearance only"], diff: 3 },
      { clue: "FIP stands for this advanced pitching metric that removes defense from the equation.", answer: "Fielding Independent Pitching", accept: ["fielding independent pitching", "fip"], choices: ["Fastball Impact Percentage", "Fielder Impact Percentage", "Franchise Impact Pitching"], diff: 4 },
    ],
  },
  5: {
    100: [
      { clue: "Hall of Famer Willie Mays was nicknamed this, reflecting his enthusiastic greeting to teammates.", answer: "Say Hey Kid", accept: ["say hey kid", "the say hey kid"], choices: ["The Hammer", "The Natural", "Big Willie"], diff: 1 },
      { clue: "Joe DiMaggio earned the nickname 'Yankee Clipper' and set his famous 56-game hitting streak in this year.", answer: "1941", accept: ["1941"], choices: ["1939", "1942", "1937"], diff: 2 },
      { clue: "Randy Johnson, known as 'The Big Unit,' stood this tall and won 5 Cy Young Awards.", answer: "6 feet 10 inches", accept: ["6'10\"", "6 feet 10 inches", "6-10", "six foot ten", "six feet ten inches"], choices: ["6'7\"", "6'8\"", "7'0\""], diff: 3 },
      { clue: "Mariano Rivera became the first player elected unanimously to the Hall of Fame in this year.", answer: "2019", accept: ["2019"], choices: ["2017", "2018", "2020"], diff: 4 },
    ],
    200: [
      { clue: "Lou Gehrig earned the nickname 'Iron Horse' by playing this many consecutive games, a record at the time.", answer: "2,130", accept: ["2130", "2,130", "two thousand one hundred thirty"], choices: ["1,897", "2,009", "1,999"], diff: 1 },
      { clue: "Reggie Jackson earned the nickname 'Mr. October' by hitting three home runs on three consecutive pitches in Game 6 of the 1977 World Series for this team.", answer: "New York Yankees", accept: ["new york yankees", "yankees", "ny yankees"], choices: ["Oakland Athletics", "California Angels", "Baltimore Orioles"], diff: 2 },
      { clue: "Nolan Ryan, known as 'The Ryan Express,' pitched in the majors until he was this age, a record for a starting pitcher.", answer: "46", accept: ["46", "forty-six", "forty six"], choices: ["44", "45", "47"], diff: 3 },
      { clue: "David Ortiz, known as 'Big Papi,' was inducted into the Baseball Hall of Fame in this year.", answer: "2022", accept: ["2022"], choices: ["2020", "2021", "2023"], diff: 4 },
    ],
    300: [
      { clue: "Ted Williams, known as 'The Splendid Splinter,' was the last MLB player to hit over .400 in a season, hitting .406 in this year.", answer: "1941", accept: ["1941"], choices: ["1939", "1940", "1942"], diff: 1 },
      { clue: "Rogers Hornsby, nicknamed 'The Rajah,' set the modern-era single-season batting average record of .424 in this year.", answer: "1924", accept: ["1924"], choices: ["1920", "1922", "1926"], diff: 2 },
      { clue: "Stan Musial, known as 'The Man,' finished his career with a .331 lifetime batting average playing for this team.", answer: "St. Louis Cardinals", accept: ["st. louis cardinals", "st louis cardinals", "cardinals"], choices: ["Chicago Cubs", "Brooklyn Dodgers", "Cincinnati Reds"], diff: 3 },
      { clue: "Ichiro Suzuki made history in 2001 by winning both the AL MVP and this other award in the same season.", answer: "Rookie of the Year", accept: ["rookie of the year", "al rookie of the year", "american league rookie of the year"], choices: ["Gold Glove", "Silver Slugger", "Batting Title"], diff: 4 },
    ],
    400: [
      { clue: "Ty Cobb, known as the 'Georgia Peach,' holds the MLB all-time career batting average record at .366.", answer: "Ty Cobb", accept: ["ty cobb", "cobb"], choices: ["Rogers Hornsby", "Ted Williams", "Joe Jackson"], diff: 1 },
      { clue: "Sandy Koufax won three Cy Young Awards and abruptly retired at just 30 years old due to this medical condition.", answer: "arthritis", accept: ["arthritis", "elbow arthritis", "traumatic arthritis"], choices: ["torn rotator cuff", "bone spurs", "elbow ligament damage"], diff: 2 },
      { clue: "Roberto Clemente became the first Latin American player inducted into the Baseball Hall of Fame in 1973. He died in a plane crash while delivering aid to this country.", answer: "Nicaragua", accept: ["nicaragua"], choices: ["Puerto Rico", "Dominican Republic", "Panama"], diff: 3 },
      { clue: "Mike Piazza holds the record for most career home runs by a catcher with 427. For which team did he spend most of his career?", answer: "New York Mets", accept: ["new york mets", "mets", "ny mets"], choices: ["Los Angeles Dodgers", "San Diego Padres", "Florida Marlins"], diff: 4 },
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

const FOOTBALL_Q = {
  0: {
    100: [
      { clue: "The Kansas City Chiefs won Super Bowl LVII in February 2023, defeating this team 38-35.", answer: "Philadelphia Eagles", accept: ["philadelphia eagles", "eagles"], choices: ["San Francisco 49ers", "Cincinnati Bengals", "Buffalo Bills"], diff: 1 },
      { clue: "The New England Patriots have the most Super Bowl appearances in NFL history. How many times have they appeared?", answer: "11", accept: ["11", "eleven"], choices: ["9", "10", "8"], diff: 2 },
      { clue: "The Pittsburgh Steelers are tied for the most Super Bowl wins in NFL history with this many championships.", answer: "6", accept: ["6", "six"], choices: ["5", "7", "4"], diff: 3 },
      { clue: "The 1972 Miami Dolphins completed the only perfect season in NFL history, finishing with this record.", answer: "17-0", accept: ["17-0", "17 and 0", "seventeen and zero"], choices: ["16-0", "15-0", "18-0"], diff: 4 },
    ],
    200: [
      { clue: "In Super Bowl LI, the New England Patriots overcame a 28-3 deficit to defeat this team in overtime.", answer: "Atlanta Falcons", accept: ["atlanta falcons", "falcons"], choices: ["Seattle Seahawks", "Carolina Panthers", "Los Angeles Rams"], diff: 1 },
      { clue: "In Super Bowl XLIX, this Patriots cornerback intercepted a pass on the Seattle 1-yard line to seal the win.", answer: "Malcolm Butler", accept: ["malcolm butler", "butler"], choices: ["Darrelle Revis", "Devin McCourty", "Brandon Browner"], diff: 2 },
      { clue: "Joe Namath famously 'guaranteed' a Jets win before Super Bowl III. The Jets defeated this heavily favored team.", answer: "Baltimore Colts", accept: ["baltimore colts", "colts"], choices: ["Dallas Cowboys", "Green Bay Packers", "Minnesota Vikings"], diff: 3 },
      { clue: "In Super Bowl XXV, this Bills kicker missed a 47-yard field goal at the end of the game, giving the Giants a 20-19 victory.", answer: "Scott Norwood", accept: ["scott norwood", "norwood"], choices: ["Steve Christie", "John Carney", "Nick Lowery"], diff: 4 },
    ],
    300: [
      { clue: "David Tyree made the famous 'Helmet Catch' in Super Bowl XLII to help the Giants defeat the previously undefeated Patriots. What was the Patriots' regular season record that year?", answer: "16-0", accept: ["16-0", "16 and 0", "sixteen and zero"], choices: ["15-1", "14-2", "13-3"], diff: 1 },
      { clue: "In Super Bowl XXIII, Joe Montana drove 92 yards in the final minutes and hit this receiver for the game-winning TD with 34 seconds left.", answer: "John Taylor", accept: ["john taylor", "taylor"], choices: ["Jerry Rice", "Roger Craig", "Dwight Clark"], diff: 2 },
      { clue: "Super Bowl L (50) was Peyton Manning's final game as the Broncos defeated the Panthers 24-10. What was the final score?", answer: "24-10", accept: ["24-10", "24 to 10"], choices: ["20-10", "27-17", "17-10"], diff: 3 },
      { clue: "Cooper Kupp won Super Bowl MVP in Super Bowl LVI as the Rams defeated the Bengals. In which city was this Super Bowl played?", answer: "Inglewood", accept: ["inglewood", "los angeles", "la", "sofi stadium"], choices: ["Las Vegas", "Atlanta", "Minneapolis"], diff: 4 },
    ],
    400: [
      { clue: "Tom Brady won how many Super Bowls during his NFL career?", answer: "7", accept: ["7", "seven"], choices: ["6", "5", "8"], diff: 1 },
      { clue: "The Green Bay Packers, coached by Vince Lombardi, won the first two Super Bowls. The Super Bowl trophy was named after this coach.", answer: "Vince Lombardi", accept: ["vince lombardi", "lombardi"], choices: ["Chuck Noll", "Bill Walsh", "Don Shula"], diff: 2 },
      { clue: "The Kansas City Chiefs won Super Bowl LVIII in February 2024, defeating this team in overtime.", answer: "San Francisco 49ers", accept: ["san francisco 49ers", "49ers", "niners", "san francisco"], choices: ["Baltimore Ravens", "Detroit Lions", "Philadelphia Eagles"], diff: 3 },
      { clue: "In Super Bowl XIII, the Steelers beat the Cowboys 35-31. This was the first Super Bowl rematch. Who was the Steelers' winning quarterback and MVP?", answer: "Terry Bradshaw", accept: ["terry bradshaw", "bradshaw"], choices: ["Roger Staubach", "Joe Gilliam", "Joe Montana"], diff: 4 },
    ],
  },
  1: {
    100: [
      { clue: "Tom Brady won 7 Super Bowls, including one with the Tampa Bay Buccaneers in Super Bowl LV. For which team did he win his first 6 championships?", answer: "New England Patriots", accept: ["new england patriots", "patriots", "new england"], choices: ["Tampa Bay Buccaneers", "Indianapolis Colts", "Green Bay Packers"], diff: 1 },
      { clue: "Patrick Mahomes became the youngest Super Bowl MVP at 23 years old when his Kansas City Chiefs won Super Bowl this number.", answer: "LIV", accept: ["liv", "54", "super bowl liv", "super bowl 54"], choices: ["LV", "LIII", "LVI"], diff: 2 },
      { clue: "Peyton Manning holds the record for most NFL MVP awards. How many times did he win the award?", answer: "5", accept: ["5", "five"], choices: ["4", "3", "6"], diff: 3 },
      { clue: "Joe Montana threw zero interceptions in his four Super Bowl appearances. How many Super Bowls did he win?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 4 },
    ],
    200: [
      { clue: "Lamar Jackson became the first player in NFL history to win the MVP award unanimously twice. He plays for this team.", answer: "Baltimore Ravens", accept: ["baltimore ravens", "ravens"], choices: ["Kansas City Chiefs", "Cincinnati Bengals", "Buffalo Bills"], diff: 1 },
      { clue: "Aaron Rodgers won the Super Bowl MVP for Super Bowl XLV when the Packers defeated the Steelers. He later signed with this team in 2023.", answer: "New York Jets", accept: ["new york jets", "jets", "ny jets"], choices: ["Las Vegas Raiders", "Los Angeles Rams", "Tennessee Titans"], diff: 2 },
      { clue: "Drew Brees set the NFL record for all-time career passing yards with 80,358 yards, later surpassed by Tom Brady. Brees spent most of his career with this team.", answer: "New Orleans Saints", accept: ["new orleans saints", "saints", "new orleans"], choices: ["San Diego Chargers", "Indianapolis Colts", "Denver Broncos"], diff: 3 },
      { clue: "Dan Marino set the NFL record for passing yards in a season in 1984 with 5,084 yards and this many touchdown passes, both records at the time.", answer: "48", accept: ["48", "forty-eight", "forty eight"], choices: ["45", "50", "55"], diff: 4 },
    ],
    300: [
      { clue: "Brett Favre holds the NFL record for consecutive starts at quarterback. How many consecutive starts did he make?", answer: "297", accept: ["297", "two hundred ninety-seven", "two hundred ninety seven"], choices: ["240", "271", "321"], diff: 1 },
      { clue: "Brett Favre won the NFL MVP award three consecutive times from 1995 to 1997 while playing for this team.", answer: "Green Bay Packers", accept: ["green bay packers", "packers", "green bay"], choices: ["Minnesota Vikings", "New York Jets", "New England Patriots"], diff: 2 },
      { clue: "Joe Burrow was the #1 overall pick in the 2020 NFL Draft out of LSU. In just his second season, he led the Bengals to the Super Bowl against this team.", answer: "Los Angeles Rams", accept: ["los angeles rams", "rams", "la rams"], choices: ["San Francisco 49ers", "Kansas City Chiefs", "New England Patriots"], diff: 3 },
      { clue: "Peyton Manning set the single-season records for passing yards (5,477) and touchdown passes (55) in this year.", answer: "2013", accept: ["2013"], choices: ["2004", "2012", "2014"], diff: 4 },
    ],
    400: [
      { clue: "Tom Brady holds the all-time NFL record for career regular season touchdown passes with 649. Which team did he retire with?", answer: "Tampa Bay Buccaneers", accept: ["tampa bay buccaneers", "buccaneers", "bucs", "tampa bay"], choices: ["New England Patriots", "Las Vegas Raiders", "San Francisco 49ers"], diff: 1 },
      { clue: "Patrick Mahomes has won how many Super Bowls as of the 2024 season?", answer: "3", accept: ["3", "three"], choices: ["2", "4", "1"], diff: 2 },
      { clue: "Joe Montana won 3 Super Bowl MVP awards. Which of these Super Bowls did he NOT win MVP?", answer: "Super Bowl XIX", accept: ["super bowl xix", "super bowl 19", "xix", "19"], choices: ["Super Bowl XVI", "Super Bowl XXIII", "Super Bowl XXIV"], diff: 3 },
      { clue: "Lamar Jackson won the NFL MVP unanimously in both 2019 and 2023. In 2019, he set the single-season record for rushing yards by a quarterback with approximately how many yards?", answer: "1,206", accept: ["1206", "1,206", "approximately 1206"], choices: ["987", "1,100", "1,400"], diff: 4 },
    ],
  },
  2: {
    100: [
      { clue: "Emmitt Smith holds the NFL all-time rushing yards record. How many career rushing yards did he accumulate?", answer: "18,355", accept: ["18355", "18,355"], choices: ["16,726", "15,269", "17,162"], diff: 1 },
      { clue: "Jerry Rice holds the NFL records for career receiving yards (22,895) and receiving touchdowns. How many career receiving TDs did he score?", answer: "197", accept: ["197", "one hundred ninety-seven"], choices: ["178", "208", "156"], diff: 2 },
      { clue: "Eric Dickerson set the single-season rushing record in 1984 with this many yards, playing for the LA Rams.", answer: "2,105", accept: ["2105", "2,105", "two thousand one hundred five"], choices: ["1,966", "2,003", "1,884"], diff: 3 },
      { clue: "Justin Tucker set the longest field goal in NFL history in 2021. How long was the kick?", answer: "66 yards", accept: ["66", "66 yards", "sixty-six yards"], choices: ["64 yards", "63 yards", "68 yards"], diff: 4 },
    ],
    200: [
      { clue: "Tom Brady holds the NFL record for career passing yards with 89,214 yards. He also holds the record for career passing touchdowns with this many.", answer: "649", accept: ["649", "six hundred forty-nine"], choices: ["581", "520", "700"], diff: 1 },
      { clue: "Calvin Johnson set the NFL single-season receiving yards record in 2012 with this many yards, playing for the Detroit Lions.", answer: "1,964", accept: ["1964", "1,964", "one thousand nine hundred sixty-four"], choices: ["1,848", "1,781", "2,001"], diff: 2 },
      { clue: "Bruce Smith holds the NFL all-time career sacks record. How many career sacks did he record?", answer: "200", accept: ["200", "two hundred"], choices: ["198", "189", "212"], diff: 3 },
      { clue: "Adam Vinatieri holds the record for most career points scored by a kicker. Approximately how many points did he score?", answer: "2,673", accept: ["2673", "2,673"], choices: ["2,434", "2,511", "2,900"], diff: 4 },
    ],
    300: [
      { clue: "Peyton Manning set the single-season NFL record for touchdown passes in 2013. How many did he throw?", answer: "55", accept: ["55", "fifty-five", "fifty five"], choices: ["50", "49", "48"], diff: 1 },
      { clue: "The single-season NFL rushing record of 2,105 yards was set in 1984 by Eric Dickerson while playing for this team.", answer: "Los Angeles Rams", accept: ["los angeles rams", "la rams", "rams"], choices: ["Dallas Cowboys", "Chicago Bears", "Miami Dolphins"], diff: 2 },
      { clue: "Calvin Johnson's single-season receiving yards record of 1,964 was set in 2012. He played his entire career for this franchise.", answer: "Detroit Lions", accept: ["detroit lions", "lions"], choices: ["Atlanta Falcons", "Houston Texans", "Tampa Bay Buccaneers"], diff: 3 },
      { clue: "Tom Brady set the all-time career passing yards record, surpassing Drew Brees. Approximately how many career passing yards did Brady accumulate?", answer: "89,214", accept: ["89214", "89,214", "approximately 89000", "over 89000"], choices: ["80,358", "75,000", "95,000"], diff: 4 },
    ],
    400: [
      { clue: "Jerry Rice won how many Super Bowl championships during his career?", answer: "3", accept: ["3", "three"], choices: ["2", "4", "1"], diff: 1 },
      { clue: "Bruce Smith, the all-time NFL sacks leader, spent most of his career with this team.", answer: "Buffalo Bills", accept: ["buffalo bills", "bills"], choices: ["Washington Redskins", "Indianapolis Colts", "New York Giants"], diff: 2 },
      { clue: "Emmitt Smith won three Super Bowl championships, all with this team.", answer: "Dallas Cowboys", accept: ["dallas cowboys", "cowboys"], choices: ["San Francisco 49ers", "Green Bay Packers", "New England Patriots"], diff: 3 },
      { clue: "The NFL single-season passing yards record of 5,477 was set by Peyton Manning in 2013. He broke his own record, which he had set in which earlier year with 4,557 yards?", answer: "2004", accept: ["2004"], choices: ["2000", "2006", "2009"], diff: 4 },
    ],
  },
  3: {
    100: [
      { clue: "A 'Hail Mary' in football refers to this type of desperate pass.", answer: "long pass at the end of the game", accept: ["hail mary", "long pass", "desperation pass", "long last-second pass"], choices: ["short screen pass", "fake punt pass", "draw play"], diff: 1 },
      { clue: "The 'red zone' in football refers to the area inside the opponent's how many yard line?", answer: "20-yard line", accept: ["20", "twenty", "20 yard line", "twenty yard line"], choices: ["30-yard line", "10-yard line", "25-yard line"], diff: 2 },
      { clue: "A 'blitz' in football occurs when the defense sends more than this many pass rushers.", answer: "4", accept: ["4", "four"], choices: ["3", "5", "6"], diff: 3 },
      { clue: "A 'Pick-6' in football occurs when a defender intercepts a pass and does this.", answer: "returns it for a touchdown", accept: ["returns it for a touchdown", "scores a touchdown", "pick six", "pick-6"], choices: ["kicks a field goal", "returns it for a safety", "fumbles after the interception"], diff: 4 },
    ],
    200: [
      { clue: "The 'two-minute warning' in football is an automatic timeout called when how much time is left in each half?", answer: "2 minutes", accept: ["2 minutes", "two minutes", "2:00"], choices: ["5 minutes", "1 minute", "3 minutes"], diff: 1 },
      { clue: "An 'audible' in football occurs when the quarterback does this at the line of scrimmage.", answer: "changes the play", accept: ["changes the play", "calls an audible", "changes the called play"], choices: ["calls a timeout", "signals for a punt", "motions a receiver"], diff: 2 },
      { clue: "A 'nickel defense' involves having this many defensive backs on the field.", answer: "5", accept: ["5", "five"], choices: ["4", "6", "3"], diff: 3 },
      { clue: "A 'dime defense' involves having this many defensive backs on the field.", answer: "6", accept: ["6", "six"], choices: ["5", "7", "4"], diff: 4 },
    ],
    300: [
      { clue: "The 'shotgun formation' in football gets its name because the quarterback lines up several yards behind the center, rather than directly under it. Approximately how many yards behind center does the QB typically line up?", answer: "5 yards", accept: ["5 yards", "five yards", "5", "five"], choices: ["2 yards", "10 yards", "7 yards"], diff: 1 },
      { clue: "In a 'Cover 2' defensive scheme, two of these players split the deep field in half.", answer: "safeties", accept: ["safeties", "safety"], choices: ["cornerbacks", "linebackers", "defensive ends"], diff: 2 },
      { clue: "An 'onside kick' is a short kick attempt where the kicking team tries to recover the ball. The ball must travel at least how many yards before the kicking team can recover it?", answer: "10 yards", accept: ["10 yards", "10", "ten yards", "ten"], choices: ["5 yards", "15 yards", "20 yards"], diff: 3 },
      { clue: "YAC is a football statistic that stands for this.", answer: "yards after catch", accept: ["yards after catch", "yac"], choices: ["yards against coverage", "yards across center", "yards at completion"], diff: 4 },
    ],
    400: [
      { clue: "A 'pancake block' in football is when an offensive lineman knocks a defender to the ground. This statistic is named after what food?", answer: "pancake", accept: ["pancake", "pancakes"], choices: ["waffle", "french toast", "crepe"], diff: 1 },
      { clue: "In football, when a ball carrier is tackled in their own end zone by the defense, it results in this scoring play worth 2 points.", answer: "safety", accept: ["safety"], choices: ["touchback", "blocked punt", "forfeit"], diff: 2 },
      { clue: "The 'West Coast Offense' was pioneered by this legendary 49ers coach and emphasizes short, horizontal passing routes.", answer: "Bill Walsh", accept: ["bill walsh", "walsh"], choices: ["Don Shula", "Tom Landry", "Chuck Noll"], diff: 3 },
      { clue: "A 'prevent defense' is a conservative scheme often used late in games to stop big plays. Critics joke that this defense only 'prevents' one thing. What is it?", answer: "winning", accept: ["winning", "the team from winning", "victory"], choices: ["scoring", "big plays", "field goals"], diff: 4 },
    ],
  },
  4: {
    100: [
      { clue: "Jerry Rice is widely considered the greatest wide receiver in NFL history. He spent most of his career with this team.", answer: "San Francisco 49ers", accept: ["san francisco 49ers", "49ers", "niners", "san francisco"], choices: ["Dallas Cowboys", "Denver Broncos", "Green Bay Packers"], diff: 1 },
      { clue: "Lawrence Taylor revolutionized the linebacker position and won two Super Bowls with this NFL franchise.", answer: "New York Giants", accept: ["new york giants", "giants", "ny giants"], choices: ["Pittsburgh Steelers", "Chicago Bears", "Dallas Cowboys"], diff: 2 },
      { clue: "Walter Payton, nicknamed 'Sweetness,' was a legendary Bears running back. He won his only Super Bowl championship in this year.", answer: "1985", accept: ["1985", "super bowl xx", "1986 season"], choices: ["1983", "1987", "1984"], diff: 3 },
      { clue: "Reggie White, nicknamed 'The Minister of Defense,' held the NFL career sacks record before Bruce Smith. White won a Super Bowl with this team.", answer: "Green Bay Packers", accept: ["green bay packers", "packers", "green bay"], choices: ["Philadelphia Eagles", "Carolina Panthers", "San Francisco 49ers"], diff: 4 },
    ],
    200: [
      { clue: "Emmitt Smith won three Super Bowls with the Dallas Cowboys and holds the NFL all-time rushing record. He was part of a trio called 'The Triplets' along with Michael Irvin and this quarterback.", answer: "Troy Aikman", accept: ["troy aikman", "aikman"], choices: ["Steve Young", "Drew Bledsoe", "Vinny Testaverde"], diff: 1 },
      { clue: "Barry Sanders rushed for 1,000 or more yards in 10 consecutive seasons before abruptly retiring in 1999. He played his entire career for this team.", answer: "Detroit Lions", accept: ["detroit lions", "lions"], choices: ["Dallas Cowboys", "Chicago Bears", "Minnesota Vikings"], diff: 2 },
      { clue: "Deion Sanders, known as 'Prime Time,' not only played in the NFL but also played professionally in this other major sport.", answer: "baseball", accept: ["baseball", "mlb"], choices: ["basketball", "soccer", "track and field"], diff: 3 },
      { clue: "Jim Brown, one of the greatest running backs in NFL history, retired abruptly after 9 seasons with this team, never having missed a game.", answer: "Cleveland Browns", accept: ["cleveland browns", "browns"], choices: ["Detroit Lions", "Chicago Bears", "Los Angeles Rams"], diff: 4 },
    ],
    300: [
      { clue: "John Elway won back-to-back Super Bowls late in his career (XXXII and XXXIII) with this team.", answer: "Denver Broncos", accept: ["denver broncos", "broncos"], choices: ["Cleveland Browns", "Los Angeles Rams", "Atlanta Falcons"], diff: 1 },
      { clue: "Dick Butkus is considered one of the greatest middle linebackers in NFL history. Despite his legendary career, he never won this.", answer: "Super Bowl", accept: ["super bowl", "nfl championship", "championship"], choices: ["Pro Bowl selection", "defensive MVP", "All-Pro selection"], diff: 2 },
      { clue: "Lawrence Taylor was known for transforming the outside linebacker position. He was elected unanimously to the Hall of Fame, and his position is often listed as this on modern rosters.", answer: "outside linebacker", accept: ["outside linebacker", "olb", "linebacker"], choices: ["defensive end", "safety", "cornerback"], diff: 3 },
      { clue: "Reggie White recorded 198 career sacks. Which team did he play for in Philadelphia, the city where he earned his 'Minister of Defense' nickname?", answer: "Philadelphia Eagles", accept: ["philadelphia eagles", "eagles"], choices: ["Pittsburgh Steelers", "New York Giants", "Dallas Cowboys"], diff: 4 },
    ],
    400: [
      { clue: "Barry Sanders retired with this many career rushing yards, finishing second all-time at the time of his retirement.", answer: "15,269", accept: ["15269", "15,269", "approximately 15000"], choices: ["16,726", "14,807", "13,259"], diff: 1 },
      { clue: "Jerry Rice won how many Super Bowls, and which teams did he win them with?", answer: "3 with the 49ers", accept: ["3", "three", "three with the 49ers", "3 with san francisco"], choices: ["2 with the 49ers", "1 with the 49ers and 1 with the Raiders", "4 with the 49ers"], diff: 2 },
      { clue: "Walter Payton held the NFL career rushing yards record at retirement with 16,726 yards. This record was later broken by which player?", answer: "Emmitt Smith", accept: ["emmitt smith", "smith"], choices: ["Barry Sanders", "Eric Dickerson", "Jim Brown"], diff: 3 },
      { clue: "Deion Sanders holds the record for defensive touchdowns in a career. He is one of only two players in sports history to play in both a Super Bowl and this other major championship game.", answer: "World Series", accept: ["world series", "mlb world series"], choices: ["NBA Finals", "Stanley Cup Finals", "NCAA Championship"], diff: 4 },
    ],
  },
  5: {
    100: [
      { clue: "The New England Patriots made 9 Super Bowl appearances from 2001 to 2019 under coach Bill Belichick and QB Tom Brady, winning how many championships?", answer: "6", accept: ["6", "six"], choices: ["5", "7", "4"], diff: 1 },
      { clue: "The Pittsburgh Steelers of the 1970s won 4 Super Bowls in 6 years under head coach Chuck Noll. What was the name of their legendary defensive unit?", answer: "Steel Curtain", accept: ["steel curtain", "the steel curtain"], choices: ["Purple People Eaters", "Doomsday Defense", "No-Name Defense"], diff: 2 },
      { clue: "The San Francisco 49ers won 5 Super Bowls between 1981 and 1994 under two coaches. Bill Walsh coached 3 of them, and this coach won the other 2.", answer: "George Seifert", accept: ["george seifert", "seifert"], choices: ["Mike Shanahan", "Dennis Green", "Mike Holmgren"], diff: 3 },
      { clue: "The Dallas Cowboys of the 1990s won 3 Super Bowls in 4 years (XXVII, XXVIII, XXX). Their famous trio of Troy Aikman, Emmitt Smith, and Michael Irvin was nicknamed what?", answer: "The Triplets", accept: ["the triplets", "triplets"], choices: ["The Big Three", "The Holy Trinity", "The Dynasty Trio"], diff: 4 },
    ],
    200: [
      { clue: "The Kansas City Chiefs won how many Super Bowls in the 6 seasons from 2019 to 2024 under Patrick Mahomes?", answer: "3", accept: ["3", "three"], choices: ["2", "4", "1"], diff: 1 },
      { clue: "Vince Lombardi coached the Green Bay Packers to 5 NFL titles and the first 2 Super Bowls in the 1960s. The Super Bowl trophy is named after him. What is it called?", answer: "Vince Lombardi Trophy", accept: ["vince lombardi trophy", "lombardi trophy"], choices: ["Commissioner's Trophy", "Pete Rozelle Trophy", "NFL Championship Trophy"], diff: 2 },
      { clue: "The Miami Dolphins completed the only perfect season in NFL history in 1972, going 17-0. Who was their head coach?", answer: "Don Shula", accept: ["don shula", "shula"], choices: ["Chuck Noll", "Tom Landry", "Bill Parcells"], diff: 3 },
      { clue: "The Baltimore Ravens won Super Bowls with two completely different quarterbacks. Name either quarterback who led them to the championship.", answer: "Trent Dilfer or Joe Flacco", accept: ["trent dilfer", "dilfer", "joe flacco", "flacco"], choices: ["Lamar Jackson", "Kyle Boller", "Mark Brunell"], diff: 4 },
    ],
    300: [
      { clue: "The New England Patriots' dynasty of 2001-2019 included 9 Super Bowl appearances. Coach Bill Belichick and Tom Brady began their dynasty run by defeating this team in Super Bowl XXXVI.", answer: "St. Louis Rams", accept: ["st. louis rams", "st louis rams", "rams"], choices: ["Pittsburgh Steelers", "Tennessee Titans", "Indianapolis Colts"], diff: 1 },
      { clue: "The 1970s Pittsburgh Steelers won 4 Super Bowls. Their offense featured the legendary 'Immaculate Reception' in the 1972 playoffs. Who caught that famous play?", answer: "Franco Harris", accept: ["franco harris", "harris"], choices: ["Lynn Swann", "Terry Bradshaw", "John Stallworth"], diff: 2 },
      { clue: "The Dallas Cowboys' dynasty in the 1990s was also led by owner Jerry Jones and head coach Jimmy Johnson. After Johnson left, which coach led them to Super Bowl XXX?", answer: "Barry Switzer", accept: ["barry switzer", "switzer"], choices: ["Bill Parcells", "Chan Gailey", "Dave Campo"], diff: 3 },
      { clue: "The 49ers' dynasty included Joe Montana and Jerry Rice. In which Super Bowl did Montana make his famous 92-yard TD drive to defeat the Bengals 20-16?", answer: "Super Bowl XXIII", accept: ["super bowl xxiii", "xxiii", "23", "super bowl 23"], choices: ["Super Bowl XVI", "Super Bowl XIX", "Super Bowl XXIX"], diff: 4 },
    ],
    400: [
      { clue: "The Kansas City Chiefs appeared in Super Bowl LV but lost to Tom Brady's Tampa Bay Buccaneers. What was the score of that game?", answer: "31-9", accept: ["31-9", "31 to 9"], choices: ["38-24", "27-14", "35-17"], diff: 1 },
      { clue: "The Miami Dolphins' perfect 1972 season ended with a Super Bowl VII victory over this team.", answer: "Washington Redskins", accept: ["washington redskins", "redskins", "washington", "washington commanders"], choices: ["Dallas Cowboys", "Minnesota Vikings", "Pittsburgh Steelers"], diff: 2 },
      { clue: "The New England Patriots' dynasty started against all odds. In Super Bowl XXXVI, the Patriots were 14-point underdogs against the 'Greatest Show on Turf' Rams. Who was the Rams' star QB that year?", answer: "Kurt Warner", accept: ["kurt warner", "warner"], choices: ["Marc Bulger", "Jake Plummer", "Mike Martz"], diff: 3 },
      { clue: "The Pittsburgh Steelers won Super Bowls IX, X, XIII, and XIV in the 1970s. Their Hall of Fame receiver who made several acrobatic catches in those Super Bowls was this player.", answer: "Lynn Swann", accept: ["lynn swann", "swann"], choices: ["John Stallworth", "Franco Harris", "Rocky Bleier"], diff: 4 },
    ],
  },
};

const FOOTBALL_FINALS = [
  { category: "Super Bowl Legends", clue: "In Super Bowl XLII, this Giants wide receiver made the famous 'Helmet Catch' off his own helmet to keep the game-winning drive alive against the undefeated Patriots. Name the receiver.", answer: "David Tyree", accept: ["david tyree", "tyree"] },
  { category: "NFL Records", clue: "Eric Dickerson set the single-season NFL rushing record in 1984 with 2,105 yards. He was playing for this team at the time, and the record still stands today.", answer: "Los Angeles Rams", accept: ["los angeles rams", "la rams", "rams"] },
  { category: "Gridiron History", clue: "The 1972 Miami Dolphins remain the only undefeated team in NFL history. Surviving members of that team reportedly celebrate every year when the last undefeated team loses. Name the coach who led them to that perfect 17-0 season.", answer: "Don Shula", accept: ["don shula", "shula"] },
  { category: "Dynasty Trivia", clue: "Tom Brady and Bill Belichick began their Super Bowl dynasty together in 2001. Brady was a 6th-round draft pick that year and famously replaced injured starting quarterback Drew Bledsoe. Against which team did Brady win his very first Super Bowl?", answer: "St. Louis Rams", accept: ["st. louis rams", "st louis rams", "rams", "los angeles rams"] },
];
