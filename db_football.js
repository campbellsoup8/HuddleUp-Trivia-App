// HuddleUp Trivia � Football Question Database

const FOOTBALL_Q = {
  0: {
    100: [
      { clue: "The Kansas City Chiefs won Super Bowl LVII in February 2023, defeating this team 38-35.", answer: "Philadelphia Eagles", accept: ["philadelphia eagles", "eagles"], choices: ["San Francisco 49ers", "Cincinnati Bengals", "Buffalo Bills"], diff: 1 },
      { clue: "The New England Patriots have the most Super Bowl appearances in NFL history. How many times have they appeared?", answer: "11", accept: ["11", "eleven"], choices: ["9", "10", "8"], diff: 2 },
      { clue: "The Pittsburgh Steelers are tied for the most Super Bowl wins in NFL history with this many championships.", answer: "6", accept: ["6", "six"], choices: ["5", "7", "4"], diff: 2 },
      { clue: "The 1972 Miami Dolphins completed the only perfect season in NFL history, finishing with this record.", answer: "17-0", accept: ["17-0", "17 and 0", "seventeen and zero"], choices: ["16-0", "15-0", "18-0"], diff: 1 },
    ],
    200: [
      { clue: "In Super Bowl LI, the New England Patriots overcame a 28-3 deficit to defeat this team in overtime.", answer: "Atlanta Falcons", accept: ["atlanta falcons", "falcons"], choices: ["Seattle Seahawks", "Carolina Panthers", "Los Angeles Rams"], diff: 1 },
      { clue: "In Super Bowl XLIX, this Patriots cornerback intercepted a pass on the Seattle 1-yard line to seal the win.", answer: "Malcolm Butler", accept: ["malcolm butler", "butler"], choices: ["Darrelle Revis", "Devin McCourty", "Brandon Browner"], diff: 2 },
      { clue: "Joe Namath famously 'guaranteed' a Jets win before Super Bowl III. The Jets defeated this heavily favored team.", answer: "Baltimore Colts", accept: ["baltimore colts", "colts"], choices: ["Dallas Cowboys", "Green Bay Packers", "Minnesota Vikings"], diff: 3 },
      { clue: "In Super Bowl XXV, this Bills kicker missed a 47-yard field goal at the end of the game, giving the Giants a 20-19 victory.", answer: "Scott Norwood", accept: ["scott norwood", "norwood"], choices: ["Steve Christie", "John Carney", "Nick Lowery"], diff: 4 },
    ],
    300: [
      { clue: "David Tyree made the famous 'Helmet Catch' in Super Bowl XLII to help the Giants defeat the previously undefeated Patriots. What was the Patriots' regular season record that year?", answer: "16-0", accept: ["16-0", "16 and 0", "sixteen and zero"], choices: ["15-1", "14-2", "13-3"], diff: 1 },
      { clue: "In Super Bowl XXIII, Joe Montana drove 92 yards in the final minutes and hit this receiver for the game-winning TD with 34 seconds left.", answer: "John Taylor", accept: ["john taylor", "taylor"], choices: ["Jerry Rice", "Roger Craig", "Dwight Clark"], diff: 3 },
      { clue: "Super Bowl L (50) was Peyton Manning's final game as the Broncos defeated the Panthers 24-10. What was the final score?", answer: "24-10", accept: ["24-10", "24 to 10"], choices: ["20-10", "27-17", "17-10"], diff: 3 },
      { clue: "Cooper Kupp won Super Bowl MVP in Super Bowl LVI as the Rams defeated the Bengals. In which city was this Super Bowl played?", answer: "Inglewood", accept: ["inglewood", "los angeles", "la", "sofi stadium"], choices: ["Las Vegas", "Atlanta", "Minneapolis"], diff: 2 },
    ],
    400: [
      { clue: "Tom Brady won how many Super Bowls during his NFL career?", answer: "7", accept: ["7", "seven"], choices: ["6", "5", "8"], diff: 1 },
      { clue: "The Green Bay Packers, coached by Vince Lombardi, won the first two Super Bowls. The Super Bowl trophy was named after this coach.", answer: "Vince Lombardi", accept: ["vince lombardi", "lombardi"], choices: ["Chuck Noll", "Bill Walsh", "Don Shula"], diff: 2 },
      { clue: "The Kansas City Chiefs won Super Bowl LVIII in February 2024, defeating this team in overtime.", answer: "San Francisco 49ers", accept: ["san francisco 49ers", "49ers", "niners", "san francisco"], choices: ["Baltimore Ravens", "Detroit Lions", "Philadelphia Eagles"], diff: 1 },
      { clue: "In Super Bowl XIII, the Steelers beat the Cowboys 35-31. This was the first Super Bowl rematch. Who was the Steelers' winning quarterback and MVP?", answer: "Terry Bradshaw", accept: ["terry bradshaw", "bradshaw"], choices: ["Roger Staubach", "Joe Gilliam", "Joe Montana"], diff: 3 },
    ],
  },
  1: {
    100: [
      { clue: "Tom Brady won 7 Super Bowls, including one with the Tampa Bay Buccaneers in Super Bowl LV. For which team did he win his first 6 championships?", answer: "New England Patriots", accept: ["new england patriots", "patriots", "new england"], choices: ["Tampa Bay Buccaneers", "Indianapolis Colts", "Green Bay Packers"], diff: 1 },
      { clue: "Patrick Mahomes became the youngest Super Bowl MVP at 23 years old when his Kansas City Chiefs won Super Bowl this number.", answer: "LIV", accept: ["liv", "54", "super bowl liv", "super bowl 54"], choices: ["LV", "LIII", "LVI"], diff: 2 },
      { clue: "Peyton Manning holds the record for most NFL MVP awards. How many times did he win the award?", answer: "5", accept: ["5", "five"], choices: ["4", "3", "6"], diff: 2 },
      { clue: "Joe Montana threw zero interceptions in his four Super Bowl appearances. How many Super Bowls did he win?", answer: "4", accept: ["4", "four"], choices: ["3", "5", "2"], diff: 2 },
    ],
    200: [
      { clue: "Lamar Jackson became the first player in NFL history to win the MVP award unanimously twice. He plays for this team.", answer: "Baltimore Ravens", accept: ["baltimore ravens", "ravens"], choices: ["Kansas City Chiefs", "Cincinnati Bengals", "Buffalo Bills"], diff: 1 },
      { clue: "Aaron Rodgers won the Super Bowl MVP for Super Bowl XLV when the Packers defeated the Steelers. He later signed with this team in 2023.", answer: "New York Jets", accept: ["new york jets", "jets", "ny jets"], choices: ["Las Vegas Raiders", "Los Angeles Rams", "Tennessee Titans"], diff: 2 },
      { clue: "Drew Brees set the NFL record for all-time career passing yards with 80,358 yards, later surpassed by Tom Brady. Brees spent most of his career with this team.", answer: "New Orleans Saints", accept: ["new orleans saints", "saints", "new orleans"], choices: ["San Diego Chargers", "Indianapolis Colts", "Denver Broncos"], diff: 2 },
      { clue: "Dan Marino set the NFL record for passing yards in a season in 1984 with 5,084 yards and this many touchdown passes, both records at the time.", answer: "48", accept: ["48", "forty-eight", "forty eight"], choices: ["45", "50", "55"], diff: 3 },
    ],
    300: [
      { clue: "Brett Favre holds the NFL record for consecutive starts at quarterback. How many consecutive starts did he make?", answer: "297", accept: ["297", "two hundred ninety-seven", "two hundred ninety seven"], choices: ["240", "271", "321"], diff: 3 },
      { clue: "Brett Favre won the NFL MVP award three consecutive times from 1995 to 1997 while playing for this team.", answer: "Green Bay Packers", accept: ["green bay packers", "packers", "green bay"], choices: ["Minnesota Vikings", "New York Jets", "New England Patriots"], diff: 2 },
      { clue: "Joe Burrow was the #1 overall pick in the 2020 NFL Draft out of LSU. In just his second season, he led the Bengals to the Super Bowl against this team.", answer: "Los Angeles Rams", accept: ["los angeles rams", "rams", "la rams"], choices: ["San Francisco 49ers", "Kansas City Chiefs", "New England Patriots"], diff: 2 },
      { clue: "Peyton Manning set the single-season records for passing yards (5,477) and touchdown passes (55) in this year.", answer: "2013", accept: ["2013"], choices: ["2004", "2012", "2014"], diff: 3 },
    ],
    400: [
      { clue: "Tom Brady holds the all-time NFL record for career regular season touchdown passes with 649. Which team did he retire with?", answer: "Tampa Bay Buccaneers", accept: ["tampa bay buccaneers", "buccaneers", "bucs", "tampa bay"], choices: ["New England Patriots", "Las Vegas Raiders", "San Francisco 49ers"], diff: 1 },
      { clue: "Patrick Mahomes has won how many Super Bowls as of the 2024 season?", answer: "3", accept: ["3", "three"], choices: ["2", "4", "1"], diff: 1 },
      { clue: "Joe Montana won 3 Super Bowl MVP awards. Which of these Super Bowls did he NOT win MVP?", answer: "Super Bowl XIX", accept: ["super bowl xix", "super bowl 19", "xix", "19"], choices: ["Super Bowl XVI", "Super Bowl XXIII", "Super Bowl XXIV"], diff: 3 },
      { clue: "Lamar Jackson won the NFL MVP unanimously in both 2019 and 2023. In 2019, he set the single-season record for rushing yards by a quarterback with approximately how many yards?", answer: "1,206", accept: ["1206", "1,206", "approximately 1206"], choices: ["987", "1,100", "1,400"], diff: 4 },
    ],
  },
  2: {
    100: [
      { clue: "Emmitt Smith holds the NFL all-time rushing yards record. How many career rushing yards did he accumulate?", answer: "18,355", accept: ["18355", "18,355"], choices: ["16,726", "15,269", "17,162"], diff: 3 },
      { clue: "Jerry Rice holds the NFL records for career receiving yards (22,895) and receiving touchdowns. How many career receiving TDs did he score?", answer: "197", accept: ["197", "one hundred ninety-seven"], choices: ["178", "208", "156"], diff: 3 },
      { clue: "Eric Dickerson set the single-season rushing record in 1984 with this many yards, playing for the LA Rams.", answer: "2,105", accept: ["2105", "2,105", "two thousand one hundred five"], choices: ["1,966", "2,003", "1,884"], diff: 3 },
      { clue: "Justin Tucker set the longest field goal in NFL history in 2021. How long was the kick?", answer: "66 yards", accept: ["66", "66 yards", "sixty-six yards"], choices: ["64 yards", "63 yards", "68 yards"], diff: 2 },
    ],
    200: [
      { clue: "Tom Brady holds the NFL record for career passing yards with 89,214 yards. He also holds the record for career passing touchdowns with this many.", answer: "649", accept: ["649", "six hundred forty-nine"], choices: ["581", "520", "700"], diff: 2 },
      { clue: "Calvin Johnson set the NFL single-season receiving yards record in 2012 with this many yards, playing for the Detroit Lions.", answer: "1,964", accept: ["1964", "1,964", "one thousand nine hundred sixty-four"], choices: ["1,848", "1,781", "2,001"], diff: 3 },
      { clue: "Bruce Smith holds the NFL all-time career sacks record. How many career sacks did he record?", answer: "200", accept: ["200", "two hundred"], choices: ["198", "189", "212"], diff: 3 },
      { clue: "Adam Vinatieri holds the record for most career points scored by a kicker. Approximately how many points did he score?", answer: "2,673", accept: ["2673", "2,673"], choices: ["2,434", "2,511", "2,900"], diff: 4 },
    ],
    300: [
      { clue: "Peyton Manning set the single-season NFL record for touchdown passes in 2013. How many did he throw?", answer: "55", accept: ["55", "fifty-five", "fifty five"], choices: ["50", "49", "48"], diff: 2 },
      { clue: "The single-season NFL rushing record of 2,105 yards was set in 1984 by Eric Dickerson while playing for this team.", answer: "Los Angeles Rams", accept: ["los angeles rams", "la rams", "rams"], choices: ["Dallas Cowboys", "Chicago Bears", "Miami Dolphins"], diff: 2 },
      { clue: "Calvin Johnson's single-season receiving yards record of 1,964 was set in 2012. He played his entire career for this franchise.", answer: "Detroit Lions", accept: ["detroit lions", "lions"], choices: ["Atlanta Falcons", "Houston Texans", "Tampa Bay Buccaneers"], diff: 2 },
      { clue: "Tom Brady set the all-time career passing yards record, surpassing Drew Brees. Approximately how many career passing yards did Brady accumulate?", answer: "89,214", accept: ["89214", "89,214", "approximately 89000", "over 89000"], choices: ["80,358", "75,000", "95,000"], diff: 4 },
    ],
    400: [
      { clue: "Jerry Rice won how many Super Bowl championships during his career?", answer: "3", accept: ["3", "three"], choices: ["2", "4", "1"], diff: 1 },
      { clue: "Bruce Smith, the all-time NFL sacks leader, spent most of his career with this team.", answer: "Buffalo Bills", accept: ["buffalo bills", "bills"], choices: ["Washington Redskins", "Indianapolis Colts", "New York Giants"], diff: 2 },
      { clue: "Emmitt Smith won three Super Bowl championships, all with this team.", answer: "Dallas Cowboys", accept: ["dallas cowboys", "cowboys"], choices: ["San Francisco 49ers", "Green Bay Packers", "New England Patriots"], diff: 2 },
      { clue: "The NFL single-season passing yards record of 5,477 was set by Peyton Manning in 2013. He broke his own record, which he had set in which earlier year with 4,557 yards?", answer: "2004", accept: ["2004"], choices: ["2000", "2006", "2009"], diff: 3 },
    ],
  },
  3: {
    100: [
      { clue: "A 'Hail Mary' in football refers to this type of desperate pass.", answer: "long pass at the end of the game", accept: ["hail mary", "long pass", "desperation pass", "long last-second pass"], choices: ["short screen pass", "fake punt pass", "draw play"], diff: 1 },
      { clue: "The 'red zone' in football refers to the area inside the opponent's how many yard line?", answer: "20-yard line", accept: ["20", "twenty", "20 yard line", "twenty yard line"], choices: ["30-yard line", "10-yard line", "25-yard line"], diff: 1 },
      { clue: "A 'blitz' in football occurs when the defense sends more than this many pass rushers.", answer: "4", accept: ["4", "four"], choices: ["3", "5", "6"], diff: 2 },
      { clue: "A 'Pick-6' in football occurs when a defender intercepts a pass and does this.", answer: "returns it for a touchdown", accept: ["returns it for a touchdown", "scores a touchdown", "pick six", "pick-6"], choices: ["kicks a field goal", "returns it for a safety", "fumbles after the interception"], diff: 1 },
    ],
    200: [
      { clue: "The 'two-minute warning' in football is an automatic timeout called when how much time is left in each half?", answer: "2 minutes", accept: ["2 minutes", "two minutes", "2:00"], choices: ["5 minutes", "1 minute", "3 minutes"], diff: 1 },
      { clue: "An 'audible' in football occurs when the quarterback does this at the line of scrimmage.", answer: "changes the play", accept: ["changes the play", "calls an audible", "changes the called play"], choices: ["calls a timeout", "signals for a punt", "motions a receiver"], diff: 1 },
      { clue: "A 'nickel defense' involves having this many defensive backs on the field.", answer: "5", accept: ["5", "five"], choices: ["4", "6", "3"], diff: 2 },
      { clue: "A 'dime defense' involves having this many defensive backs on the field.", answer: "6", accept: ["6", "six"], choices: ["5", "7", "4"], diff: 3 },
    ],
    300: [
      { clue: "The 'shotgun formation' in football gets its name because the quarterback lines up several yards behind the center, rather than directly under it. Approximately how many yards behind center does the QB typically line up?", answer: "5 yards", accept: ["5 yards", "five yards", "5", "five"], choices: ["2 yards", "10 yards", "7 yards"], diff: 1 },
      { clue: "In a 'Cover 2' defensive scheme, two of these players split the deep field in half.", answer: "safeties", accept: ["safeties", "safety"], choices: ["cornerbacks", "linebackers", "defensive ends"], diff: 2 },
      { clue: "An 'onside kick' is a short kick attempt where the kicking team tries to recover the ball. The ball must travel at least how many yards before the kicking team can recover it?", answer: "10 yards", accept: ["10 yards", "10", "ten yards", "ten"], choices: ["5 yards", "15 yards", "20 yards"], diff: 2 },
      { clue: "YAC is a football statistic that stands for this.", answer: "yards after catch", accept: ["yards after catch", "yac"], choices: ["yards against coverage", "yards across center", "yards at completion"], diff: 2 },
    ],
    400: [
      { clue: "A 'pancake block' in football is when an offensive lineman knocks a defender to the ground. This statistic is named after what food?", answer: "pancake", accept: ["pancake", "pancakes"], choices: ["waffle", "french toast", "crepe"], diff: 2 },
      { clue: "In football, when a ball carrier is tackled in their own end zone by the defense, it results in this scoring play worth 2 points.", answer: "safety", accept: ["safety"], choices: ["touchback", "blocked punt", "forfeit"], diff: 1 },
      { clue: "The 'West Coast Offense' was pioneered by this legendary 49ers coach and emphasizes short, horizontal passing routes.", answer: "Bill Walsh", accept: ["bill walsh", "walsh"], choices: ["Don Shula", "Tom Landry", "Chuck Noll"], diff: 3 },
      { clue: "A 'prevent defense' is a conservative scheme often used late in games to stop big plays. Critics joke that this defense only 'prevents' one thing. What is it?", answer: "winning", accept: ["winning", "the team from winning", "victory"], choices: ["scoring", "big plays", "field goals"], diff: 2 },
    ],
  },
  4: {
    100: [
      { clue: "Jerry Rice is widely considered the greatest wide receiver in NFL history. He spent most of his career with this team.", answer: "San Francisco 49ers", accept: ["san francisco 49ers", "49ers", "niners", "san francisco"], choices: ["Dallas Cowboys", "Denver Broncos", "Green Bay Packers"], diff: 1 },
      { clue: "Lawrence Taylor revolutionized the linebacker position and won two Super Bowls with this NFL franchise.", answer: "New York Giants", accept: ["new york giants", "giants", "ny giants"], choices: ["Pittsburgh Steelers", "Chicago Bears", "Dallas Cowboys"], diff: 2 },
      { clue: "Walter Payton, nicknamed 'Sweetness,' was a legendary Bears running back. He won his only Super Bowl championship in this year.", answer: "1985", accept: ["1985", "super bowl xx", "1986 season"], choices: ["1983", "1987", "1984"], diff: 2 },
      { clue: "Reggie White, nicknamed 'The Minister of Defense,' held the NFL career sacks record before Bruce Smith. White won a Super Bowl with this team.", answer: "Green Bay Packers", accept: ["green bay packers", "packers", "green bay"], choices: ["Philadelphia Eagles", "Carolina Panthers", "San Francisco 49ers"], diff: 2 },
    ],
    200: [
      { clue: "Emmitt Smith won three Super Bowls with the Dallas Cowboys and holds the NFL all-time rushing record. He was part of a trio called 'The Triplets' along with Michael Irvin and this quarterback.", answer: "Troy Aikman", accept: ["troy aikman", "aikman"], choices: ["Steve Young", "Drew Bledsoe", "Vinny Testaverde"], diff: 1 },
      { clue: "Barry Sanders rushed for 1,000 or more yards in 10 consecutive seasons before abruptly retiring in 1999. He played his entire career for this team.", answer: "Detroit Lions", accept: ["detroit lions", "lions"], choices: ["Dallas Cowboys", "Chicago Bears", "Minnesota Vikings"], diff: 1 },
      { clue: "Deion Sanders, known as 'Prime Time,' not only played in the NFL but also played professionally in this other major sport.", answer: "baseball", accept: ["baseball", "mlb"], choices: ["basketball", "soccer", "track and field"], diff: 2 },
      { clue: "Jim Brown, one of the greatest running backs in NFL history, retired abruptly after 9 seasons with this team, never having missed a game.", answer: "Cleveland Browns", accept: ["cleveland browns", "browns"], choices: ["Detroit Lions", "Chicago Bears", "Los Angeles Rams"], diff: 3 },
    ],
    300: [
      { clue: "John Elway won back-to-back Super Bowls late in his career (XXXII and XXXIII) with this team.", answer: "Denver Broncos", accept: ["denver broncos", "broncos"], choices: ["Cleveland Browns", "Los Angeles Rams", "Atlanta Falcons"], diff: 1 },
      { clue: "Dick Butkus is considered one of the greatest middle linebackers in NFL history. Despite his legendary career, he never won this.", answer: "Super Bowl", accept: ["super bowl", "nfl championship", "championship"], choices: ["Pro Bowl selection", "defensive MVP", "All-Pro selection"], diff: 2 },
      { clue: "Lawrence Taylor was known for transforming the outside linebacker position. He was elected unanimously to the Hall of Fame, and his position is often listed as this on modern rosters.", answer: "outside linebacker", accept: ["outside linebacker", "olb", "linebacker"], choices: ["defensive end", "safety", "cornerback"], diff: 2 },
      { clue: "Reggie White recorded 198 career sacks. Which team did he play for in Philadelphia, the city where he earned his 'Minister of Defense' nickname?", answer: "Philadelphia Eagles", accept: ["philadelphia eagles", "eagles"], choices: ["Pittsburgh Steelers", "New York Giants", "Dallas Cowboys"], diff: 2 },
    ],
    400: [
      { clue: "Barry Sanders retired with this many career rushing yards, finishing second all-time at the time of his retirement.", answer: "15,269", accept: ["15269", "15,269", "approximately 15000"], choices: ["16,726", "14,807", "13,259"], diff: 3 },
      { clue: "Jerry Rice won how many Super Bowls, and which teams did he win them with?", answer: "3 with the 49ers", accept: ["3", "three", "three with the 49ers", "3 with san francisco"], choices: ["2 with the 49ers", "1 with the 49ers and 1 with the Raiders", "4 with the 49ers"], diff: 1 },
      { clue: "Walter Payton held the NFL career rushing yards record at retirement with 16,726 yards. This record was later broken by which player?", answer: "Emmitt Smith", accept: ["emmitt smith", "smith"], choices: ["Barry Sanders", "Eric Dickerson", "Jim Brown"], diff: 2 },
      { clue: "Deion Sanders holds the record for defensive touchdowns in a career. He is one of only two players in sports history to play in both a Super Bowl and this other major championship game.", answer: "World Series", accept: ["world series", "mlb world series"], choices: ["NBA Finals", "Stanley Cup Finals", "NCAA Championship"], diff: 3 },
    ],
  },
  5: {
    100: [
      { clue: "The New England Patriots made 9 Super Bowl appearances from 2001 to 2019 under coach Bill Belichick and QB Tom Brady, winning how many championships?", answer: "6", accept: ["6", "six"], choices: ["5", "7", "4"], diff: 1 },
      { clue: "The Pittsburgh Steelers of the 1970s won 4 Super Bowls in 6 years under head coach Chuck Noll. What was the name of their legendary defensive unit?", answer: "Steel Curtain", accept: ["steel curtain", "the steel curtain"], choices: ["Purple People Eaters", "Doomsday Defense", "No-Name Defense"], diff: 2 },
      { clue: "The San Francisco 49ers won 5 Super Bowls between 1981 and 1994 under two coaches. Bill Walsh coached 3 of them, and this coach won the other 2.", answer: "George Seifert", accept: ["george seifert", "seifert"], choices: ["Mike Shanahan", "Dennis Green", "Mike Holmgren"], diff: 3 },
      { clue: "The Dallas Cowboys of the 1990s won 3 Super Bowls in 4 years (XXVII, XXVIII, XXX). Their famous trio of Troy Aikman, Emmitt Smith, and Michael Irvin was nicknamed what?", answer: "The Triplets", accept: ["the triplets", "triplets"], choices: ["The Big Three", "The Holy Trinity", "The Dynasty Trio"], diff: 3 },
    ],
    200: [
      { clue: "The Kansas City Chiefs won how many Super Bowls in the 6 seasons from 2019 to 2024 under Patrick Mahomes?", answer: "3", accept: ["3", "three"], choices: ["2", "4", "1"], diff: 1 },
      { clue: "Vince Lombardi coached the Green Bay Packers to 5 NFL titles and the first 2 Super Bowls in the 1960s. The Super Bowl trophy is named after him. What is it called?", answer: "Vince Lombardi Trophy", accept: ["vince lombardi trophy", "lombardi trophy"], choices: ["Commissioner's Trophy", "Pete Rozelle Trophy", "NFL Championship Trophy"], diff: 2 },
      { clue: "The Miami Dolphins completed the only perfect season in NFL history in 1972, going 17-0. Who was their head coach?", answer: "Don Shula", accept: ["don shula", "shula"], choices: ["Chuck Noll", "Tom Landry", "Bill Parcells"], diff: 2 },
      { clue: "The Baltimore Ravens won Super Bowls with two completely different quarterbacks. Name either quarterback who led them to the championship.", answer: "Trent Dilfer or Joe Flacco", accept: ["trent dilfer", "dilfer", "joe flacco", "flacco"], choices: ["Lamar Jackson", "Kyle Boller", "Mark Brunell"], diff: 2 },
    ],
    300: [
      { clue: "The New England Patriots' dynasty of 2001-2019 included 9 Super Bowl appearances. Coach Bill Belichick and Tom Brady began their dynasty run by defeating this team in Super Bowl XXXVI.", answer: "St. Louis Rams", accept: ["st. louis rams", "st louis rams", "rams"], choices: ["Pittsburgh Steelers", "Tennessee Titans", "Indianapolis Colts"], diff: 1 },
      { clue: "The 1970s Pittsburgh Steelers won 4 Super Bowls. Their offense featured the legendary 'Immaculate Reception' in the 1972 playoffs. Who caught that famous play?", answer: "Franco Harris", accept: ["franco harris", "harris"], choices: ["Lynn Swann", "Terry Bradshaw", "John Stallworth"], diff: 2 },
      { clue: "The Dallas Cowboys' dynasty in the 1990s was also led by owner Jerry Jones and head coach Jimmy Johnson. After Johnson left, which coach led them to Super Bowl XXX?", answer: "Barry Switzer", accept: ["barry switzer", "switzer"], choices: ["Bill Parcells", "Chan Gailey", "Dave Campo"], diff: 3 },
      { clue: "The 49ers' dynasty included Joe Montana and Jerry Rice. In which Super Bowl did Montana make his famous 92-yard TD drive to defeat the Bengals 20-16?", answer: "Super Bowl XXIII", accept: ["super bowl xxiii", "xxiii", "23", "super bowl 23"], choices: ["Super Bowl XVI", "Super Bowl XIX", "Super Bowl XXIX"], diff: 3 },
    ],
    400: [
      { clue: "The Kansas City Chiefs appeared in Super Bowl LV but lost to Tom Brady's Tampa Bay Buccaneers. What was the score of that game?", answer: "31-9", accept: ["31-9", "31 to 9"], choices: ["38-24", "27-14", "35-17"], diff: 2 },
      { clue: "The Miami Dolphins' perfect 1972 season ended with a Super Bowl VII victory over this team.", answer: "Washington Redskins", accept: ["washington redskins", "redskins", "washington", "washington commanders"], choices: ["Dallas Cowboys", "Minnesota Vikings", "Pittsburgh Steelers"], diff: 3 },
      { clue: "The New England Patriots' dynasty started against all odds. In Super Bowl XXXVI, the Patriots were 14-point underdogs against the 'Greatest Show on Turf' Rams. Who was the Rams' star QB that year?", answer: "Kurt Warner", accept: ["kurt warner", "warner"], choices: ["Marc Bulger", "Jake Plummer", "Mike Martz"], diff: 2 },
      { clue: "The Pittsburgh Steelers won Super Bowls IX, X, XIII, and XIV in the 1970s. Their Hall of Fame receiver who made several acrobatic catches in those Super Bowls was this player.", answer: "Lynn Swann", accept: ["lynn swann", "swann"], choices: ["John Stallworth", "Franco Harris", "Rocky Bleier"], diff: 3 },
    ],
  },
};

const FOOTBALL_FINALS = [
  { category: "Super Bowl Legends", clue: "In Super Bowl XLII, this Giants wide receiver made the famous 'Helmet Catch' off his own helmet to keep the game-winning drive alive against the undefeated Patriots. Name the receiver.", answer: "David Tyree", accept: ["david tyree", "tyree"] },
  { category: "NFL Records", clue: "Eric Dickerson set the single-season NFL rushing record in 1984 with 2,105 yards. He was playing for this team at the time, and the record still stands today.", answer: "Los Angeles Rams", accept: ["los angeles rams", "la rams", "rams"] },
  { category: "Gridiron History", clue: "The 1972 Miami Dolphins remain the only undefeated team in NFL history. Surviving members of that team reportedly celebrate every year when the last undefeated team loses. Name the coach who led them to that perfect 17-0 season.", answer: "Don Shula", accept: ["don shula", "shula"] },
  { category: "Dynasty Trivia", clue: "Tom Brady and Bill Belichick began their Super Bowl dynasty together in 2001. Brady was a 6th-round draft pick that year and famously replaced injured starting quarterback Drew Bledsoe. Against which team did Brady win his very first Super Bowl?", answer: "St. Louis Rams", accept: ["st. louis rams", "st louis rams", "rams", "los angeles rams"] },
];

const FOOTBALL_EXTRA = {
  // Category 0: SUPER BOWL HISTORY
  0: {
    100: [
      {
        clue: "Super Bowl I was played on January 15, 1967, at this Los Angeles stadium.",
        answer: "Los Angeles Memorial Coliseum",
        accept: ["la memorial coliseum", "los angeles memorial coliseum", "memorial coliseum"],
        choices: ["Rose Bowl", "Dodger Stadium", "Anaheim Stadium"],
        diff: 2
      },
      {
        clue: "The Green Bay Packers defeated this AFL team 35-10 in the very first Super Bowl.",
        answer: "Kansas City Chiefs",
        accept: ["kansas city chiefs", "the chiefs", "chiefs"],
        choices: ["Oakland Raiders", "New York Jets", "Buffalo Bills"],
        diff: 1
      },
      {
        clue: "Doug Williams of the Washington Redskins became the first Black starting QB to win a Super Bowl in this game, Super Bowl ___.",
        answer: "XXII",
        accept: ["xxii", "22", "super bowl xxii"],
        choices: ["XX", "XXI", "XXIII"],
        diff: 2
      },
      {
        clue: "Marcus Allen won Super Bowl XVIII MVP with the Los Angeles Raiders, rushing for 191 yards including a memorable ___ yard touchdown run.",
        answer: "74",
        accept: ["74", "74 yards", "seventy-four"],
        choices: ["68", "80", "58"],
        diff: 3
      },
      {
        clue: "Steve Young set a Super Bowl record by throwing this many touchdown passes in Super Bowl XXIX against the Chargers.",
        answer: "6",
        accept: ["6", "six", "six touchdowns"],
        choices: ["5", "7", "4"],
        diff: 2
      }
    ],
    200: [
      {
        clue: "In Super Bowl XXII, Doug Williams threw 4 touchdown passes in a single quarter — this one — to lead Washington to a 42-10 win.",
        answer: "second quarter",
        accept: ["second quarter", "2nd quarter"],
        choices: ["First quarter", "Third quarter", "Fourth quarter"],
        diff: 3
      },
      {
        clue: "Kurt Warner threw for a then Super Bowl-record 414 passing yards in Super Bowl XXXIV against this team.",
        answer: "Tennessee Titans",
        accept: ["tennessee titans", "titans"],
        choices: ["Pittsburgh Steelers", "New England Patriots", "Jacksonville Jaguars"],
        diff: 2
      },
      {
        clue: "The Buffalo Bills lost four consecutive Super Bowls, appearing in Super Bowls XXV through ___.",
        answer: "XXVIII",
        accept: ["xxviii", "28", "super bowl xxviii"],
        choices: ["XXIX", "XXVII", "XXVI"],
        diff: 2
      },
      {
        clue: "Cooper Kupp caught the game-winning TD in Super Bowl LVI and won this award for his outstanding game performance.",
        answer: "Super Bowl MVP",
        accept: ["super bowl mvp", "mvp", "most valuable player"],
        choices: ["Offensive Player of the Year", "Super Bowl Champion", "Pro Bowl"],
        diff: 1
      },
      {
        clue: "In Super Bowl XXXIV, the Titans' last-gasp drive was stopped one yard short of the end zone on the final play by this Rams linebacker.",
        answer: "Mike Jones",
        accept: ["mike jones"],
        choices: ["London Fletcher", "Tommy Polley", "Grant Wistrom"],
        diff: 4
      }
    ],
    300: [
      {
        clue: "The first Super Bowl was broadcast simultaneously on two TV networks — NBC and this one.",
        answer: "CBS",
        accept: ["cbs", "cbs television"],
        choices: ["ABC", "Fox", "ESPN"],
        diff: 3
      },
      {
        clue: "Jim Kelly quarterbacked the Buffalo Bills to four straight Super Bowls, losing all four. The Bills' first loss came against the New York Giants when this kicker missed a last-second field goal.",
        answer: "Scott Norwood",
        accept: ["scott norwood", "norwood"],
        choices: ["Pete Stoyanovich", "Nick Lowery", "Gary Anderson"],
        diff: 2
      },
      {
        clue: "In Super Bowl XVIII, the Los Angeles Raiders demolished the Washington Redskins by this lopsided score.",
        answer: "38-9",
        accept: ["38-9", "38 to 9"],
        choices: ["45-10", "42-10", "35-7"],
        diff: 3
      },
      {
        clue: "Steve Young was named Super Bowl XXIX MVP after also leading in this statistical category — the only QB ever to lead both rushing and passing in a Super Bowl.",
        answer: "rushing yards",
        accept: ["rushing yards", "rushing", "rushing and passing"],
        choices: ["Touchdowns", "Completions", "Passer rating"],
        diff: 4
      },
      {
        clue: "The Buffalo Bills' four consecutive Super Bowl losses spanned this range of Super Bowls.",
        answer: "XXV through XXVIII",
        accept: ["xxv through xxviii", "25 through 28", "super bowls 25-28", "xxv-xxviii"],
        choices: ["XXIV through XXVII", "XXVI through XXIX", "XXIII through XXVI"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Kurt Warner's Super Bowl XXXIV performance against the Titans included a record-tying 45 pass attempts with this many interceptions.",
        answer: "0",
        accept: ["0", "zero", "no interceptions"],
        choices: ["1", "2", "3"],
        diff: 4
      },
      {
        clue: "Chuck Noll won 4 Super Bowls with the Steelers in a six-year span, defeating the Vikings, Cowboys (twice), and this team in Super Bowl XIV.",
        answer: "Los Angeles Rams",
        accept: ["los angeles rams", "la rams", "rams"],
        choices: ["Dallas Cowboys", "Oakland Raiders", "Cincinnati Bengals"],
        diff: 3
      },
      {
        clue: "Doug Williams threw for 340 yards in Super Bowl XXII, surpassing the previous Super Bowl passing record set by Joe Montana in 1985 of this many yards.",
        answer: "331",
        accept: ["331", "331 yards"],
        choices: ["310", "298", "345"],
        diff: 4
      },
      {
        clue: "The first Super Bowl had an announced attendance of 63,036 — but was not sold out. It was played at a stadium that can hold over this many fans.",
        answer: "93,000",
        accept: ["93000", "93,000", "over 90000"],
        choices: ["75,000", "85,000", "105,000"],
        diff: 4
      },
      {
        clue: "Marcus Allen's 74-yard Super Bowl run in Super Bowl XVIII held the record for longest Super Bowl run until Willie Parker ran for 75 yards in this game.",
        answer: "Super Bowl XL",
        accept: ["super bowl xl", "xl", "40", "super bowl 40"],
        choices: ["Super Bowl XLII", "Super Bowl XXXIX", "Super Bowl XLIII"],
        diff: 4
      }
    ]
  },

  // Category 1: QB LEGENDS
  1: {
    100: [
      {
        clue: "This Cowboys QB served 4 years in the U.S. Navy, including a tour in Vietnam, before becoming an NFL starter at age 27.",
        answer: "Roger Staubach",
        accept: ["roger staubach", "staubach"],
        choices: ["Don Meredith", "Craig Morton", "Danny White"],
        diff: 2
      },
      {
        clue: "Johnny Unitas set a record by throwing a touchdown pass in 47 consecutive games, a streak that stood for 52 years before being broken by Drew Brees in this year.",
        answer: "2012",
        accept: ["2012"],
        choices: ["2009", "2015", "2011"],
        diff: 3
      },
      {
        clue: "Kurt Warner stocked shelves at a grocery store making $5.50/hour before leading the Rams' Greatest Show on Turf offense to a Super Bowl victory.",
        answer: "Kurt Warner",
        accept: ["kurt warner", "warner"],
        choices: ["Trent Dilfer", "Brad Johnson", "Mark Brunell"],
        diff: 1
      },
      {
        clue: "Dan Fouts became the first QB ever to throw for 4,000 yards in three consecutive seasons under head coach Don Coryell's 'Air ___' offense.",
        answer: "Coryell",
        accept: ["coryell", "air coryell"],
        choices: ["Raid", "Attack", "Strike"],
        diff: 2
      },
      {
        clue: "Steve Young threw 6 touchdown passes in Super Bowl XXIX, breaking the record of 5 previously held by this legendary 49ers QB.",
        answer: "Joe Montana",
        accept: ["joe montana", "montana"],
        choices: ["John Elway", "Troy Aikman", "Brett Favre"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Roger Staubach won the Heisman Trophy in 1963 while playing for this military academy.",
        answer: "Navy",
        accept: ["navy", "naval academy", "u.s. naval academy"],
        choices: ["Army", "Air Force", "West Point"],
        diff: 2
      },
      {
        clue: "Johnny Unitas's record of 47 consecutive games with a TD pass, set between 1956 and 1960, is often compared to Joe DiMaggio's 56-game hitting streak in what sport.",
        answer: "baseball",
        accept: ["baseball"],
        choices: ["Basketball", "Hockey", "Soccer"],
        diff: 1
      },
      {
        clue: "Dan Fouts threw for a then-record 4,802 passing yards in this season for the San Diego Chargers.",
        answer: "1981",
        accept: ["1981"],
        choices: ["1979", "1983", "1980"],
        diff: 3
      },
      {
        clue: "Before his NFL career, Kurt Warner played for the Iowa Barnstormers in the Arena Football League, leading them to the championship game called the ___Bowl.",
        answer: "ArenaBowl",
        accept: ["arenabowl", "arena bowl"],
        choices: ["IndoorBowl", "FutureBowl", "ChampionBowl"],
        diff: 3
      },
      {
        clue: "Josh Allen led the Buffalo Bills to the AFC Championship Game in 2020, also becoming the only QB drafted that year to finish second in MVP voting behind this winner.",
        answer: "Aaron Rodgers",
        accept: ["aaron rodgers", "rodgers"],
        choices: ["Patrick Mahomes", "Tom Brady", "Russell Wilson"],
        diff: 3
      }
    ],
    300: [
      {
        clue: "Roger Staubach was selected in the 10th round of the 1964 NFL Draft as a 'future pick' by Dallas, meaning the Cowboys knew he had to serve this many years in the Navy first.",
        answer: "4",
        accept: ["4", "four", "four years"],
        choices: ["2", "3", "5"],
        diff: 3
      },
      {
        clue: "Dan Fouts was the first QB ever to lead the NFL in passing yards for this many consecutive seasons (1979-1982).",
        answer: "4",
        accept: ["4", "four", "four consecutive seasons"],
        choices: ["3", "5", "2"],
        diff: 4
      },
      {
        clue: "Kurt Warner is the only undrafted quarterback ever to accomplish this combination: win NFL MVP, Super Bowl MVP, and lead his team to a Super Bowl win.",
        answer: "undrafted",
        accept: ["undrafted", "undrafted free agent"],
        choices: ["Late-round pick", "Free agent signing", "Practice squad player"],
        diff: 2
      },
      {
        clue: "In his 2020 breakout season, Josh Allen's completion percentage of 69.2% represented the biggest improvement over a three-year period for any QB in this history.",
        answer: "NFL history",
        accept: ["nfl history", "league history", "history"],
        choices: ["AFC history", "Bills franchise history", "Conference history"],
        diff: 3
      },
      {
        clue: "Johnny Unitas's 47-game consecutive TD pass streak was finally broken by Drew Brees in a game against the San Diego Chargers in what city is the Saints' home?",
        answer: "New Orleans",
        accept: ["new orleans"],
        choices: ["Houston", "Tampa", "Atlanta"],
        diff: 2
      }
    ],
    400: [
      {
        clue: "After being cut by the Green Bay Packers, Kurt Warner competed against Brett Favre, Mark Brunell and this third QB for the Packers roster.",
        answer: "Ty Detmer",
        accept: ["ty detmer", "detmer"],
        choices: ["Jay Fiedler", "Jim McMahon", "Don Majkowski"],
        diff: 4
      },
      {
        clue: "Dan Fouts threw for 4,715 yards in 1980 and 4,802 yards in 1981 — both passing the previous single-season record. What was his team's nickname for their passing offense?",
        answer: "Air Coryell",
        accept: ["air coryell"],
        choices: ["Cardiac Kids", "Air McNair", "The Vertical Game"],
        diff: 3
      },
      {
        clue: "Roger Staubach's 1963 Heisman Trophy win came while he was playing for Navy. He won it over this Army player who was runner-up.",
        answer: "Pete Dawkins",
        accept: ["pete dawkins", "dawkins"],
        choices: ["Archie Griffin", "Mike Garrett", "Steve Spurrier"],
        diff: 4
      },
      {
        clue: "Josh Allen was the 7th overall pick in the 2018 NFL Draft. He played college football at this university.",
        answer: "Wyoming",
        accept: ["wyoming", "university of wyoming"],
        choices: ["Utah", "Colorado State", "Boise State"],
        diff: 3
      },
      {
        clue: "Kurt Warner's famous grocery store was a Hy-Vee supermarket located in this Iowa city where he later played Arena Football.",
        answer: "Iowa City",
        accept: ["iowa city", "iowa"],
        choices: ["Des Moines", "Cedar Rapids", "Davenport"],
        diff: 4
      }
    ]
  },

  // Category 2: NFL RECORDS
  2: {
    100: [
      {
        clue: "Randy Moss set the NFL single-season touchdown reception record in 2007 with this many receiving TDs.",
        answer: "23",
        accept: ["23", "twenty-three"],
        choices: ["20", "22", "19"],
        diff: 2
      },
      {
        clue: "LaDainian Tomlinson set the single-season record in 2006 with 28 rushing touchdowns and also set the all-time record for most total TDs in a season with this number.",
        answer: "31",
        accept: ["31", "thirty-one"],
        choices: ["28", "33", "29"],
        diff: 2
      },
      {
        clue: "Bruce Smith of the Buffalo Bills holds the NFL's all-time career sacks record with this total.",
        answer: "200",
        accept: ["200", "two hundred"],
        choices: ["198", "180", "210"],
        diff: 2
      },
      {
        clue: "Adrian Peterson set the NFL single-game rushing record in 2007 with this many yards against the San Diego Chargers.",
        answer: "296",
        accept: ["296", "296 yards"],
        choices: ["275", "310", "253"],
        diff: 2
      },
      {
        clue: "Dick 'Night Train' Lane set the NFL single-season interception record as a rookie in 1952 with this many picks.",
        answer: "14",
        accept: ["14", "fourteen"],
        choices: ["12", "13", "16"],
        diff: 2
      }
    ],
    200: [
      {
        clue: "Cooper Kupp won the receiving triple crown in 2021, leading the NFL in receptions (145), receiving yards (1,947), and receiving TDs (16) for this team.",
        answer: "Los Angeles Rams",
        accept: ["los angeles rams", "la rams", "rams"],
        choices: ["Green Bay Packers", "Tampa Bay Buccaneers", "Dallas Cowboys"],
        diff: 1
      },
      {
        clue: "Justin Jefferson became the fastest player ever to reach 5,000 receiving yards in NFL history, doing it in this many games.",
        answer: "52",
        accept: ["52", "fifty-two", "52 games"],
        choices: ["57", "60", "48"],
        diff: 3
      },
      {
        clue: "Travis Kelce holds the NFL record for most consecutive 1,000-yard receiving seasons by a tight end — he did it how many years in a row?",
        answer: "7",
        accept: ["7", "seven"],
        choices: ["5", "6", "8"],
        diff: 2
      },
      {
        clue: "Randy Moss broke Jerry Rice's previous single-season receiving TD record of 22 (set in 1987) with 23 TDs while playing for this team.",
        answer: "New England Patriots",
        accept: ["new england patriots", "patriots", "new england"],
        choices: ["Minnesota Vikings", "Oakland Raiders", "Dallas Cowboys"],
        diff: 2
      },
      {
        clue: "Dick 'Night Train' Lane's 14-interception season in 1952 is even more remarkable because the season was only this many games long.",
        answer: "12",
        accept: ["12", "twelve", "12 games"],
        choices: ["14", "16", "10"],
        diff: 3
      }
    ],
    300: [
      {
        clue: "Jim Brown's NFL career rushing record of 12,312 yards stood until it was broken by Walter Payton in 1984. Brown played for this team his entire career.",
        answer: "Cleveland Browns",
        accept: ["cleveland browns", "browns"],
        choices: ["Detroit Lions", "Pittsburgh Steelers", "Chicago Bears"],
        diff: 1
      },
      {
        clue: "Adrian Peterson's 296-yard game came as a rookie in 2007, breaking the previous single-game rushing record held by this Baltimore Ravens running back.",
        answer: "Jamal Lewis",
        accept: ["jamal lewis", "lewis"],
        choices: ["Corey Dillon", "Tiki Barber", "Larry Johnson"],
        diff: 3
      },
      {
        clue: "Marshall Faulk of the St. Louis Rams was named NFL MVP in 2000 after totaling 2,189 yards from scrimmage and a league-leading number of touchdowns — how many?",
        answer: "26",
        accept: ["26", "twenty-six"],
        choices: ["22", "24", "28"],
        diff: 3
      },
      {
        clue: "Bruce Smith passed Reggie White's then-record of 198 career sacks in Week 14 of the 2003 NFL season with a sack of this team's quarterback.",
        answer: "New York Giants",
        accept: ["new york giants", "giants"],
        choices: ["Dallas Cowboys", "Philadelphia Eagles", "Washington Redskins"],
        diff: 4
      },
      {
        clue: "Cooper Kupp's 2021 season stats of 1,947 receiving yards were second in NFL history to only Calvin Johnson's 1,964, which Johnson set in what year?",
        answer: "2012",
        accept: ["2012"],
        choices: ["2011", "2013", "2014"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "Jim Brown retired in 1965 at age 29 at the peak of his career. He averaged this remarkable number of yards per carry over his 9-season career.",
        answer: "5.2",
        accept: ["5.2", "5.2 yards", "5.2 yards per carry"],
        choices: ["4.8", "5.7", "4.5"],
        diff: 3
      },
      {
        clue: "Night Train Lane's 14-interception rookie season in 1952 is remarkable because he didn't make his first interception until week 4, then recorded this many interceptions in the final two games alone.",
        answer: "6",
        accept: ["6", "six"],
        choices: ["4", "5", "7"],
        diff: 4
      },
      {
        clue: "Justin Jefferson tied Hall of Famer Lance Alworth's record for fewest games to reach 5,000 career receiving yards. Alworth played for this team when he set the mark.",
        answer: "San Diego Chargers",
        accept: ["san diego chargers", "chargers"],
        choices: ["Oakland Raiders", "Denver Broncos", "Kansas City Chiefs"],
        diff: 4
      },
      {
        clue: "Bruce Smith recorded 10 or more sacks in an NFL record 13 seasons. He won NFL Defensive Player of the Year in 1990 and this other year.",
        answer: "1996",
        accept: ["1996"],
        choices: ["1992", "1993", "1998"],
        diff: 4
      },
      {
        clue: "Adrian Peterson rushed for 253 of his 296 yards in this half of the game against the Chargers in 2007.",
        answer: "second half",
        accept: ["second half", "the second half"],
        choices: ["First half", "Third quarter", "Fourth quarter"],
        diff: 4
      }
    ]
  },

  // Category 3: FOOTBALL LINGO
  3: {
    100: [
      {
        clue: "A play where the defense sends extra pass rushers beyond the standard four is called a ___.",
        answer: "blitz",
        accept: ["blitz", "blitzing"],
        choices: ["Screen", "Zone", "Cover 2"],
        diff: 1
      },
      {
        clue: "When a quarterback hands the ball to a running back going the opposite direction behind the line of scrimmage, it's called a ___.",
        answer: "reverse",
        accept: ["reverse", "a reverse", "jet sweep"],
        choices: ["Draw play", "Option", "Bootleg"],
        diff: 1
      },
      {
        clue: "The area between the 20-yard lines where field position is considered most neutral is called the ___.",
        answer: "midfield",
        accept: ["midfield", "middle of the field"],
        choices: ["Red zone", "No-man's land", "Green zone"],
        diff: 1
      },
      {
        clue: "A defensive scheme that uses three linemen and four linebackers is called a ___ defense.",
        answer: "3-4",
        accept: ["3-4", "three-four", "3-4 defense"],
        choices: ["4-3", "5-2", "6-1"],
        diff: 1
      },
      {
        clue: "When a receiver catches a short pass and runs for extra yards after the catch, those extra yards are abbreviated as ___.",
        answer: "YAC",
        accept: ["yac", "yards after catch", "yards after contact"],
        choices: ["RAC", "EPA", "AYA"],
        diff: 2
      }
    ],
    200: [
      {
        clue: "A trick play where the quarterback pitches the ball to a running back who then throws it downfield to a wide receiver is called a ___ pass.",
        answer: "halfback pass",
        accept: ["halfback pass", "rb pass", "running back pass", "halfback option"],
        choices: ["Screen pass", "Flea flicker", "Wildcat pass"],
        diff: 2
      },
      {
        clue: "When an offensive lineman is legally allowed to receive a forward pass, this is called an ___ lineman play.",
        answer: "eligible",
        accept: ["eligible", "eligible receiver", "eligible lineman"],
        choices: ["Uncovered", "Released", "Shifted"],
        diff: 2
      },
      {
        clue: "The area inside the opposing 20-yard line where scoring chances are high is called the ___.",
        answer: "red zone",
        accept: ["red zone", "the red zone"],
        choices: ["Goal line", "Scoring zone", "Strike zone"],
        diff: 1
      },
      {
        clue: "A defensive coverage scheme where two safeties split the field in half is called ___.",
        answer: "Cover 2",
        accept: ["cover 2", "cover-2", "two-deep"],
        choices: ["Cover 3", "Man coverage", "Tampa 2"],
        diff: 2
      },
      {
        clue: "When a team scores a touchdown, then scores 2 more points on the next play from the 2-yard line, that bonus score is called a ___ conversion.",
        answer: "two-point",
        accept: ["two-point", "2-point", "two point conversion"],
        choices: ["Safety", "Point after", "Extra point"],
        diff: 1
      }
    ],
    300: [
      {
        clue: "A quarterback's rating system that factors in completion percentage, yards per attempt, TD percentage, and INT percentage on a scale of 0-158.3 is called a ___.",
        answer: "passer rating",
        accept: ["passer rating", "qb rating", "quarterback rating", "passser efficiency rating"],
        choices: ["QBR", "WAR", "DVOA"],
        diff: 2
      },
      {
        clue: "When a defensive player catches an interception and returns it for a touchdown, it is called a 'pick ___.'",
        answer: "six",
        accept: ["six", "pick six"],
        choices: ["Score", "Run", "Return"],
        diff: 1
      },
      {
        clue: "A play where the quarterback fakes a handoff and then rolls out to pass or run is called a ___.",
        answer: "bootleg",
        accept: ["bootleg", "waggle", "naked bootleg"],
        choices: ["Draw", "Sprint out", "Scramble"],
        diff: 2
      },
      {
        clue: "The tactic of intentionally throwing the ball into the ground to stop the clock without taking a sack is called ___.",
        answer: "spiking the ball",
        accept: ["spiking the ball", "spike", "spike the ball"],
        choices: ["Throwing it away", "Scrambling", "Taking a knee"],
        diff: 1
      },
      {
        clue: "An advanced stat that measures the number of expected points added by a team on each play compared to average is abbreviated ___.",
        answer: "EPA",
        accept: ["epa", "expected points added"],
        choices: ["PPA", "YPA", "TAR"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "The Steel Curtain was the nickname for the Pittsburgh Steelers' dominant 1970s defense. Which of these players was NOT part of the Steel Curtain?",
        answer: "Franco Harris",
        accept: ["franco harris", "harris"],
        choices: ["Mean Joe Greene", "Mel Blount", "Jack Ham"],
        diff: 3
      },
      {
        clue: "When a team lines up a running back as the only player directly behind the center with no fullback or tight end, this formation is called ___.",
        answer: "I-formation",
        accept: ["i-formation", "the i", "i formation"],
        choices: ["Spread offense", "Shotgun", "Single back"],
        diff: 2
      },
      {
        clue: "A coverage scheme where the cornerback lines up off the receiver and allows a short throw is called ___ coverage.",
        answer: "off-man",
        accept: ["off-man", "off man", "cushion coverage"],
        choices: ["Press coverage", "Bump and run", "Zone"],
        diff: 3
      },
      {
        clue: "The concept of 'Air Coryell' referred to the offensive philosophy of head coach Don Coryell with the San Diego Chargers — what did it emphasize?",
        answer: "passing",
        accept: ["passing", "throwing", "aerial attack", "passing game"],
        choices: ["Running", "Defense", "Special teams"],
        diff: 2
      },
      {
        clue: "A play where the center snaps to a receiver in motion rather than the quarterback is called the ___.",
        answer: "Wildcat",
        accept: ["wildcat", "wildcat formation"],
        choices: ["Shotgun snap", "Direct snap", "Pistol"],
        diff: 2
      }
    ]
  },

  // Category 4: HALL OF FAMERS
  4: {
    100: [
      {
        clue: "This Pittsburgh Steelers defensive tackle was nicknamed 'Mean Joe Greene' and anchored the famous 'Steel Curtain' defense of the 1970s.",
        answer: "Mean Joe Greene",
        accept: ["mean joe greene", "joe greene", "greene"],
        choices: ["Jack Lambert", "Jack Ham", "Mel Blount"],
        diff: 1
      },
      {
        clue: "The Detroit Lions cornerback who set the still-standing NFL single-season interception record of 14 in 1952 was nicknamed 'Night Train ___.'",
        answer: "Lane",
        accept: ["lane", "night train lane", "dick lane"],
        choices: ["Davis", "Brown", "Smith"],
        diff: 2
      },
      {
        clue: "Ronnie Lott famously had the tip of this finger amputated rather than miss games for the San Francisco 49ers in 1985.",
        answer: "pinky",
        accept: ["pinky", "pinky finger", "little finger", "left pinky"],
        choices: ["Index finger", "Ring finger", "Middle finger"],
        diff: 2
      },
      {
        clue: "Chuck Noll coached the Pittsburgh Steelers to 4 Super Bowl championships, all in a 6-year span. He coached the Steelers for how many seasons?",
        answer: "23",
        accept: ["23", "twenty-three"],
        choices: ["18", "25", "20"],
        diff: 2
      },
      {
        clue: "Don Shula finished his NFL coaching career with 347 wins, the most by any NFL head coach. He spent his final 26 seasons coaching this team.",
        answer: "Miami Dolphins",
        accept: ["miami dolphins", "dolphins"],
        choices: ["Baltimore Colts", "Cleveland Browns", "New England Patriots"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "The Pittsburgh Steelers cornerback Mel Blount was so dominant that the NFL changed defensive rules partly because of him, creating what is now called the 'Mel Blount ___.'",
        answer: "Rule",
        accept: ["rule", "mel blount rule"],
        choices: ["Law", "Zone", "Standard"],
        diff: 3
      },
      {
        clue: "Ronnie Lott had the tip of his left pinky amputated to play in a 1985 playoff game. The 49ers lost that game 17-3 to this team.",
        answer: "New York Giants",
        accept: ["new york giants", "giants"],
        choices: ["Chicago Bears", "Washington Redskins", "Dallas Cowboys"],
        diff: 4
      },
      {
        clue: "Don Shula's career record of 347 wins surpassed the previous record held by this legendary Chicago Bears coach and owner.",
        answer: "George Halas",
        accept: ["george halas", "halas", "papa bear"],
        choices: ["Curly Lambeau", "Paul Brown", "Tom Landry"],
        diff: 3
      },
      {
        clue: "Jim Brown was widely considered the greatest running back of his era, retiring at age 29 after this many NFL seasons.",
        answer: "9",
        accept: ["9", "nine"],
        choices: ["11", "7", "12"],
        diff: 2
      },
      {
        clue: "Mean Joe Greene was drafted by the Steelers in 1969 as the 4th overall pick. He came from which university whose team nickname inspired 'Mean Joe'?",
        answer: "North Texas State",
        accept: ["north texas state", "north texas", "unt"],
        choices: ["Texas A&M", "Arkansas", "Oklahoma"],
        diff: 4
      }
    ],
      300: [
      {
        clue: "Aaron Donald retired in 2024 after 10 seasons with the Los Angeles Rams. He recorded this many career sacks, making him one of two DTs ever to reach 100.",
        answer: "111",
        accept: ["111", "one hundred eleven", "111 sacks"],
        choices: ["98", "124", "87"],
        diff: 3
      },
      {
        clue: "Aaron Donald won the NFL Defensive Player of the Year award three times during his career — a record for a defensive tackle. He also won a Super Bowl in this game.",
        answer: "Super Bowl LVI",
        accept: ["super bowl lvi", "lvi", "56", "super bowl 56"],
        choices: ["Super Bowl LIII", "Super Bowl LVII", "Super Bowl LIV"],
        diff: 2
      },
      {
        clue: "Chuck Noll is the only NFL head coach to win 4 Super Bowls. His final overall coaching record with Pittsburgh was 209-156-1. Which Super Bowl was his last championship?",
        answer: "Super Bowl XIV",
        accept: ["super bowl xiv", "xiv", "14", "super bowl 14"],
        choices: ["Super Bowl XIII", "Super Bowl XVI", "Super Bowl XVII"],
        diff: 3
      },
      {
        clue: "Micah Parsons of the Dallas Cowboys won the 2021 AP Defensive Rookie of the Year award unanimously. He recorded this many sacks that season.",
        answer: "13",
        accept: ["13", "thirteen", "13 sacks"],
        choices: ["10", "15", "11"],
        diff: 2
      },
      {
        clue: "Night Train Lane got his nickname from a fellow player who heard him playing this song on a record player when they first met.",
        answer: "Night Train",
        accept: ["night train", "the song night train"],
        choices: ["Midnight Train to Georgia", "Mystery Train", "Train Kept a-Rollin"],
        diff: 4
      }
    ],
    400: [
      {
        clue: "Aaron Donald was drafted 13th overall in 2014 by the Rams. He played college football at this Pittsburgh-area university.",
        answer: "Pittsburgh",
        accept: ["pittsburgh", "university of pittsburgh", "pitt"],
        choices: ["Penn State", "West Virginia", "Duquesne"],
        diff: 3
      },
      {
        clue: "Micah Parsons became the only NFL rookie in the last 25 seasons to record both 80+ tackles and this many or more sacks in the same season.",
        answer: "10",
        accept: ["10", "ten"],
        choices: ["8", "12", "7"],
        diff: 3
      },
      {
        clue: "Don Shula became the NFL's all-time winningest coach on November 14, 1993, with a win over the Philadelphia Eagles. This victory was his __th career win.",
        answer: "325",
        accept: ["325", "three hundred twenty-five"],
        choices: ["300", "310", "320"],
        diff: 4
      },
      {
        clue: "Bruce Smith played for the Buffalo Bills and then ended his career with this NFC East team, where he recorded his 200th sack.",
        answer: "Washington Redskins",
        accept: ["washington redskins", "redskins", "washington"],
        choices: ["Dallas Cowboys", "New York Giants", "Philadelphia Eagles"],
        diff: 3
      },
      {
        clue: "Jim Brown's 1963 season rushing total of 1,863 yards is still the Cleveland Browns franchise record. He set this mark in how many games?",
        answer: "14",
        accept: ["14", "fourteen"],
        choices: ["12", "16", "13"],
        diff: 4
      }
    ]
  },

  // Category 5: TEAM DYNASTIES
  5: {
    100: [
      {
        clue: "The Franco Harris play known as the 'Immaculate Reception' occurred on December 23, 1972, in a playoff game between the Steelers and these opponents.",
        answer: "Oakland Raiders",
        accept: ["oakland raiders", "raiders"],
        choices: ["Miami Dolphins", "Cleveland Browns", "Cincinnati Bengals"],
        diff: 1
      },
      {
        clue: "The 49ers' famous 'The Catch' by Dwight Clark in the 1981 NFC Championship Game was a touchdown pass from this quarterback.",
        answer: "Joe Montana",
        accept: ["joe montana", "montana"],
        choices: ["Steve Young", "Jim McMahon", "Danny White"],
        diff: 1
      },
      {
        clue: "The St. Louis Rams' high-powered offense of the late 1990s and early 2000s was nicknamed 'The Greatest Show on ___.'",
        answer: "Turf",
        accept: ["turf", "the greatest show on turf"],
        choices: ["Grass", "Field", "Earth"],
        diff: 1
      },
      {
        clue: "Monday Night Football debuted on September 21, 1970, with the Cleveland Browns defeating this team 31-21 in the first-ever Monday night game.",
        answer: "New York Jets",
        accept: ["new york jets", "jets"],
        choices: ["Pittsburgh Steelers", "Dallas Cowboys", "Oakland Raiders"],
        diff: 2
      },
      {
        clue: "Art Modell moved the Cleveland Browns to Baltimore for the 1996 season. The new Baltimore team was named the ___.",
        answer: "Ravens",
        accept: ["ravens", "baltimore ravens"],
        choices: ["Colts", "Browns", "Stallions"],
        diff: 1
      }
    ],
    200: [
      {
        clue: "Franco Harris caught the 'Immaculate Reception' after the ball deflected off which Oakland Raiders defender (and possibly John Fuqua).",
        answer: "Jack Tatum",
        accept: ["jack tatum", "tatum"],
        choices: ["George Atkinson", "Willie Brown", "Skip Thomas"],
        diff: 3
      },
      {
        clue: "Dwight Clark's 'The Catch' in the 1981 NFC Championship Game came at the end of a 14-play, 89-yard drive that ended with only this many seconds left.",
        answer: "51",
        accept: ["51", "51 seconds"],
        choices: ["58", "40", "23"],
        diff: 3
      },
      {
        clue: "The 1970 AFL-NFL merger created two conferences. Three NFL teams joined all 10 AFL teams to form the AFC. Pittsburgh was one; Baltimore and _____ were the others.",
        answer: "Cleveland Browns",
        accept: ["cleveland browns", "cleveland", "browns"],
        choices: ["Dallas Cowboys", "Miami Dolphins", "Kansas City Chiefs"],
        diff: 3
      },
      {
        clue: "The Baltimore Ravens got their name from a poem by Edgar Allan Poe. Their name was chosen by a fan vote that drew how many voters?",
        answer: "33,288",
        accept: ["33288", "33,288", "over 33000"],
        choices: ["50,000", "15,000", "100,000"],
        diff: 4
      },
      {
        clue: "Monday Night Football debuted on ABC in 1970 with this Hall of Fame commentator alongside Howard Cosell and Keith Jackson.",
        answer: "Don Meredith",
        accept: ["don meredith", "meredith", "dandy don meredith"],
        choices: ["Frank Gifford", "Al Michaels", "Curt Gowdy"],
        diff: 3
      }
    ],
    300: [
      {
        clue: "The Immaculate Reception gave the Steelers a 13-7 win to advance. Franco Harris ran 42 yards for the score after catching the deflected ball at the Oakland ___ yard line.",
        answer: "42",
        accept: ["42", "forty-two", "42 yard line"],
        choices: ["35", "50", "30"],
        diff: 3
      },
      {
        clue: "In 'The Catch' game, Dwight Clark finished with 8 catches for 120 yards and 2 touchdowns. The Cowboys had a final score deficit of just this many points.",
        answer: "1",
        accept: ["1", "one", "one point"],
        choices: ["3", "7", "4"],
        diff: 3
      },
      {
        clue: "The AFL was founded in 1960. This owner/founding father of the AFL helped negotiate the 1966 merger agreement with NFL Commissioner Pete Rozelle.",
        answer: "Lamar Hunt",
        accept: ["lamar hunt", "hunt"],
        choices: ["Al Davis", "Ralph Wilson", "Bud Adams"],
        diff: 3
      },
      {
        clue: "The Rams' Greatest Show on Turf offense featured QB Kurt Warner, WR Isaac Bruce, WR Torry Holt, and RB Marshall Faulk. Their team scored this many points in the 2000 season.",
        answer: "540",
        accept: ["540", "540 points"],
        choices: ["490", "503", "525"],
        diff: 4
      },
      {
        clue: "When the AFL-NFL merger became official in 1970, three NFL teams moved to the new AFC. The Pittsburgh Steelers were one. Name one of the other two.",
        answer: "Baltimore Colts",
        accept: ["baltimore colts", "colts", "cleveland browns", "browns"],
        choices: ["Dallas Cowboys", "Green Bay Packers", "New York Giants"],
        diff: 3
      }
    ],
    400: [
      {
        clue: "The Immaculate Reception occurred with the Steelers trailing 7-6. It was fourth down with how many seconds left in the game?",
        answer: "22",
        accept: ["22", "22 seconds"],
        choices: ["18", "30", "10"],
        diff: 4
      },
      {
        clue: "Dwight Clark's 'The Catch' was run from a play called 'Sprint Right Option.' It was originally designed as a pass to this other receiver.",
        answer: "Freddie Solomon",
        accept: ["freddie solomon", "solomon"],
        choices: ["Russ Francis", "Charlie Young", "Charle Brown"],
        diff: 4
      },
      {
        clue: "Art Modell announced the Cleveland Browns' move to Baltimore on November 6, 1995, while the team had this win-loss record at the time.",
        answer: "4-5",
        accept: ["4-5", "4 and 5"],
        choices: ["2-7", "6-3", "3-6"],
        diff: 4
      },
      {
        clue: "The first Monday Night Football game in 1970 was broadcast on ABC. The main play-by-play announcer for that debut broadcast was this man.",
        answer: "Keith Jackson",
        accept: ["keith jackson", "jackson"],
        choices: ["Howard Cosell", "Al Michaels", "Curt Gowdy"],
        diff: 4
      },
      {
        clue: "The Greatest Show on Turf's Marshall Faulk won NFL MVP in 2000. He also won the AP Offensive Player of the Year a record three times — in 1999, 2000, and this year.",
        answer: "2001",
        accept: ["2001"],
        choices: ["2002", "1998", "2003"],
        diff: 4
      }
    ]
  }
};

const FOOTBALL_EXTRA_FINALS = [
  {
    category: "SUPER BOWL HISTORY",
    clue: "On January 15, 1967, the Green Bay Packers won Super Bowl I 35-10 over the Kansas City Chiefs. This man was the Packers' legendary head coach who led them to that first championship.",
    answer: "Vince Lombardi",
    accept: ["vince lombardi", "lombardi"]
  },
  {
    category: "QB LEGENDS",
    clue: "This quarterback spent 4 years in the U.S. Navy (including Vietnam) before becoming a 10-year NFL starter, winning 2 Super Bowls, and earning the nickname 'Captain America' with the Dallas Cowboys.",
    answer: "Roger Staubach",
    accept: ["roger staubach", "staubach"]
  },
  {
    category: "NFL RECORDS",
    clue: "In 1952, this Detroit Lions rookie cornerback set the still-standing NFL single-season interception record of 14, doing so in only a 12-game season while not recording his first pick until Week 4.",
    answer: "Dick Night Train Lane",
    accept: ["dick night train lane", "night train lane", "dick lane"]
  },
  {
    category: "HALL OF FAMERS",
    clue: "This Pittsburgh Steelers defensive end retired in 2003 as the NFL's all-time sack leader with 200, surpassing Reggie White's previous record of 198, after 19 seasons primarily with Buffalo.",
    answer: "Bruce Smith",
    accept: ["bruce smith", "smith"]
  },
  {
    category: "TEAM DYNASTIES",
    clue: "On December 23, 1972, Franco Harris of the Pittsburgh Steelers caught a deflected pass and ran 42 yards for a touchdown to beat the Oakland Raiders 13-7 in a play forever known by this name.",
    answer: "The Immaculate Reception",
    accept: ["the immaculate reception", "immaculate reception"]
  }
];

// Extra NBA Basketball Trivia Questions
// 120 questions across 6 categories x 4 tiers x 5 questions each
// + 5 Finals questions

