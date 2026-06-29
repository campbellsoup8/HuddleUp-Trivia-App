// HuddleUp Trivia — Formula 1 Question Database
// Categories: WORLD CHAMPIONS | ICONIC RACES | TEAMS & CONSTRUCTORS | F1 RECORDS | TRACKS & CIRCUITS | MODERN ERA

const F1_Q = {
  0: { // WORLD CHAMPIONS
    100: [
      { clue: "This Dutch driver became the first from his country to win the Formula 1 World Championship, claiming the 2021 title in a dramatic final-lap overtake at Abu Dhabi.", answer: "Max Verstappen", accept: ["max verstappen", "verstappen"], choices: ["Lewis Hamilton", "Nico Rosberg", "Sebastian Vettel"], diff: 1 },
      { clue: "This British driver won a record-tying seventh Formula 1 World Championship in 2020, matching Michael Schumacher's all-time total.", answer: "Lewis Hamilton", accept: ["lewis hamilton", "hamilton"], choices: ["Sebastian Vettel", "Nico Rosberg", "Jenson Button"], diff: 1 },
      { clue: "A member of the famous Rothschild banking dynasty hid his identity by racing under the pseudonym 'Georges Philippe' in 1928 and 1929 — concealing his involvement from his disapproving family. He finished fourth at the very first Monaco Grand Prix in 1929. What was his real name?", answer: "Baron Philippe de Rothschild", accept: ["philippe de rothschild", "baron philippe", "rothschild", "philippe rothschild", "baron philippe de rothschild"], choices: ["Baron Guy de Rothschild", "Lord Walter Rothschild", "Baron Edouard de Rothschild"], diff: 4 },
      { clue: "Max Verstappen shattered the Formula 1 record for most wins in a single season during 2023. How many Grands Prix did he win that year?", answer: "19", accept: ["19", "nineteen"], choices: ["17", "15", "21"], diff: 2 },
    ],
    200: [
      { clue: "Max Verstappen won his first Formula 1 World Championship in 2021 in the controversial season finale at this UAE circuit.", answer: "Yas Marina Circuit", accept: ["yas marina", "yas marina circuit", "abu dhabi", "abu dhabi circuit"], choices: ["Jeddah Corniche Circuit", "Bahrain International Circuit", "Circuit of the Americas"], diff: 1 },
      { clue: "This Spanish driver won back-to-back Formula 1 World Championships in 2005 and 2006 with Renault, then returned to the sport in 2021 and dazzled with Aston Martin in 2023.", answer: "Fernando Alonso", accept: ["fernando alonso", "alonso"], choices: ["Carlos Sainz", "Pedro de la Rosa", "Marc Gene"], diff: 1 },
      { clue: "Nico Rosberg won the 2016 Formula 1 title, then retired just five days later. He edged this teammate to the championship in the final race of the season.", answer: "Lewis Hamilton", accept: ["lewis hamilton", "hamilton"], choices: ["Sebastian Vettel", "Kimi Raikkonen", "Valtteri Bottas"], diff: 1 },
      { clue: "Sebastian Vettel retired from Formula 1 at the end of this year, having won four consecutive World Championships with Red Bull from 2010 to 2013.", answer: "2022", accept: ["2022"], choices: ["2021", "2023", "2020"], diff: 2 },
    ],
    300: [
      { clue: "The 2021 Formula 1 World Championship was decided by a controversial safety car restart. This race director made the disputed call to allow only some lapped cars to un-lap before the final lap — and was removed from his position afterward.", answer: "Michael Masi", accept: ["michael masi", "masi"], choices: ["Charlie Whiting", "Niels Wittich", "Eduardo Freitas"], diff: 3 },
      { clue: "Charles Leclerc and Ferrari led the 2022 Formula 1 World Championship through the early races before reliability issues struck and this driver dominated the rest of the season.", answer: "Max Verstappen", accept: ["max verstappen", "verstappen"], choices: ["Sergio Perez", "Carlos Sainz", "George Russell"], diff: 2 },
      { clue: "Lewis Hamilton secured his seventh Formula 1 World Championship at the 2020 Turkish Grand Prix, equaling the record of this German legend.", answer: "Michael Schumacher", accept: ["michael schumacher", "schumacher"], choices: ["Ayrton Senna", "Alain Prost", "Sebastian Vettel"], diff: 2 },
      { clue: "Max Verstappen became only the fourth driver in history to win four or more consecutive Formula 1 World Championships when he claimed his fourth title in 2024. Name any of the other three drivers who achieved this.", answer: "Michael Schumacher, Sebastian Vettel, or Lewis Hamilton", accept: ["michael schumacher", "schumacher", "sebastian vettel", "vettel", "lewis hamilton", "hamilton"], choices: ["Ayrton Senna", "Alain Prost", "Niki Lauda"], diff: 3 },
    ],
    400: [
      { clue: "Lewis Hamilton broke Michael Schumacher's all-time Formula 1 race wins record in 2020. What number was Schumacher's record that Hamilton surpassed?", answer: "91", accept: ["91", "ninety-one", "ninety one"], choices: ["87", "93", "95"], diff: 2 },
      { clue: "Sebastian Vettel became the youngest Formula 1 World Champion in history when he won the 2010 title. How old was Vettel when he claimed that championship?", answer: "23", accept: ["23", "twenty-three", "twenty three"], choices: ["24", "22", "25"], diff: 3 },
      { clue: "The 2021 Abu Dhabi controversy centered on the safety car restart. The disputed FIA Sporting Regulations Article allowed the race director to selectively release lapped cars — how many lapped cars were allowed to un-lap between Verstappen and Hamilton?", answer: "Five", accept: ["5", "five"], choices: ["All lapped cars", "None", "Three"], diff: 4 },
      { clue: "Kimi Raikkonen is the reigning holder of one Formula 1 record that Lewis Hamilton or Max Verstappen have yet to break. Which record does Raikkonen hold?", answer: "Most Formula 1 race starts (349)", accept: ["most starts", "race starts", "349 starts", "most races started", "349"], choices: ["Oldest race winner", "Most podiums without a championship", "Most fastest laps"], diff: 3 },
    ],
  },
  1: { // ICONIC RACES
    100: [
      { clue: "Lando Norris claimed his first Formula 1 Grand Prix victory at the 2024 Miami Grand Prix. Which team was he driving for?", answer: "McLaren", accept: ["mclaren", "mclaren f1 team"], choices: ["Red Bull", "Ferrari", "Mercedes"], diff: 1 },
      { clue: "George Russell took his maiden Formula 1 victory at the 2022 Brazilian Grand Prix. He was driving for this team when he crossed the line first.", answer: "Mercedes", accept: ["mercedes", "mercedes amg", "mercedes f1"], choices: ["Red Bull", "Williams", "Ferrari"], diff: 1 },
      { clue: "At the 2021 British Grand Prix, Lewis Hamilton and Max Verstappen collided on the opening lap at this famous high-speed corner, sending Verstappen heavily into the barriers.", answer: "Copse", accept: ["copse", "copse corner"], choices: ["Maggotts", "Becketts", "Club"], diff: 2 },
      { clue: "Charles Leclerc finally won his home race at the 2024 Monaco Grand Prix — an event he had agonizingly come close to winning on multiple previous occasions. What country does Leclerc race for?", answer: "Monaco", accept: ["monaco", "monegasque"], choices: ["France", "Italy", "Belgium"], diff: 1 },
    ],
    200: [
      { clue: "At the 2021 Italian Grand Prix at Monza, Max Verstappen's car mounted a kerb and landed on top of Lewis Hamilton's Mercedes, knocking both out. Which newly introduced cockpit safety device is widely credited with protecting Hamilton's head in that incident?", answer: "Halo", accept: ["halo", "halo device", "the halo"], choices: ["HANS device", "Roll hoop", "Carbon monocoque"], diff: 1 },
      { clue: "Lando Norris's first F1 victory in 2024 ended McLaren's race-win drought stretching back to 2012. Which driver won McLaren's last race before that 12-year gap?", answer: "Jenson Button", accept: ["jenson button", "button"], choices: ["Lewis Hamilton", "Fernando Alonso", "Kimi Raikkonen"], diff: 3 },
      { clue: "Carlos Sainz scored his first Formula 1 victory at the 2022 British Grand Prix for Ferrari. A late-race safety car scrambled the order — what incident triggered the safety car?", answer: "A first-lap crash involving Zhou Guanyu", accept: ["zhou crash", "zhou guanyu", "first lap crash", "safety car crash", "zhou accident", "guanyu"], choices: ["A tyre failure for Verstappen", "A red flag for a pit lane fire", "Rain started mid-race"], diff: 3 },
      { clue: "The 2023 Las Vegas Grand Prix marked F1's return to Las Vegas after a long absence. In what decade did Formula 1 last race on the Las Vegas streets before 2023?", answer: "1980s", accept: ["1980s", "the 80s", "1982", "eighties"], choices: ["1970s", "1990s", "2000s"], diff: 2 },
    ],
    300: [
      { clue: "The 2020 Bahrain Grand Prix saw Romain Grosjean survive a terrifying first-lap crash where his car split in two and burst into flames. He escaped with burns after being trapped momentarily. Which safety barrier system absorbed the majority of the impact?", answer: "Armco barrier / catch fencing", accept: ["armco", "armco barrier", "catch fencing", "barrier", "steel barrier"], choices: ["Tyre wall", "Gravel trap", "Carbon crush structure"], diff: 4 },
      { clue: "Max Verstappen's dominant 2023 season ended with him winning 10 consecutive races — a new F1 record. Whose previous record of 9 straight wins did he break?", answer: "Sebastian Vettel", accept: ["sebastian vettel", "vettel"], choices: ["Michael Schumacher", "Alberto Ascari", "Ayrton Senna"], diff: 3 },
      { clue: "The 2023 Singapore Grand Prix at Marina Bay was the one race Red Bull did NOT win all season, snapping Verstappen's streak. Who won?", answer: "Carlos Sainz", accept: ["carlos sainz", "sainz"], choices: ["Charles Leclerc", "Fernando Alonso", "George Russell"], diff: 2 },
      { clue: "At the 2021 Azerbaijan Grand Prix, Max Verstappen suffered a dramatic tyre blowout while leading the race, handing a likely win to Lewis Hamilton — who then made a mistake. Who ultimately won that chaotic Grand Prix?", answer: "Sergio Perez", accept: ["sergio perez", "perez", "checo"], choices: ["Valtteri Bottas", "Sebastian Vettel", "Pierre Gasly"], diff: 3 },
    ],
    400: [
      { clue: "Ayrton Senna's supernatural qualifying lap at the 1988 Monaco Grand Prix — over a second faster than teammate Alain Prost — has been called one of the greatest single laps in motorsport history. Senna later described entering a trance-like state during the lap. On which lap number was he when he decided to pit for his own safety?", answer: "Lap 67", accept: ["67", "sixty-seven", "lap 67"], choices: ["Lap 54", "Lap 72", "Lap 81"], diff: 4 },
      { clue: "The 2022 Belgian Grand Prix at Spa saw Max Verstappen start from the back of the grid due to engine penalties and win the race. From what grid position did he start?", answer: "14th", accept: ["14", "14th", "fourteenth", "p14"], choices: ["10th", "Last", "6th"], diff: 3 },
      { clue: "McLaren's 2024 Constructors' Championship win came in a dramatic finale at the Las Vegas Grand Prix. Lando Norris narrowly beat Max Verstappen in the drivers' title fight through most of the season but ultimately finished second in the championship. How many points separated Verstappen and Norris at the end of 2024?", answer: "63 points", accept: ["63", "sixty-three", "63 points"], choices: ["29 points", "47 points", "84 points"], diff: 4 },
      { clue: "The 2019 German Grand Prix at Hockenheim is remembered as one of the most chaotic wet-weather races in recent history. Lewis Hamilton charged from this position to win after starting at the back of the grid.", answer: "Last place / pit lane", accept: ["last", "pit lane", "pit", "back of the grid", "p20", "20th"], choices: ["10th", "5th", "16th"], diff: 3 },
    ],
  },
  2: { // TEAMS & CONSTRUCTORS
    100: [
      { clue: "This team won eight consecutive Formula 1 Constructors' Championships from 2014 to 2021 — the longest such winning streak in F1 history.", answer: "Mercedes", accept: ["mercedes", "mercedes amg", "mercedes f1", "mercedes-amg petronas"], choices: ["Red Bull", "Ferrari", "McLaren"], diff: 1 },
      { clue: "Red Bull Racing signed this Mexican driver in 2021 to partner Max Verstappen, and together they formed the championship-winning lineup that dominated the sport.", answer: "Sergio Perez", accept: ["sergio perez", "perez", "checo", "checo perez"], choices: ["Carlos Sainz", "Pierre Gasly", "Alexander Albon"], diff: 1 },
      { clue: "Alpine is the current name of the French manufacturer's F1 team. What was the team called in the 2020 season before it was rebranded ahead of 2021?", answer: "Renault", accept: ["renault", "renault f1"], choices: ["Lotus", "Toleman", "Ligier"], diff: 2 },
      { clue: "Ferrari holds the record for the most Formula 1 Constructors' Championships. How many have they won in total?", answer: "16", accept: ["16", "sixteen"], choices: ["14", "12", "18"], diff: 3 },
    ],
    200: [
      { clue: "Aston Martin returned to Formula 1 as a constructor in 2021. What was the team known as in the 2020 season, before the rebrand to Aston Martin?", answer: "Racing Point", accept: ["racing point", "bwt racing point"], choices: ["Force India", "Jordan", "BAR"], diff: 2 },
      { clue: "This American team entered Formula 1 in 2016, making them the first American-based constructor on the grid in decades. They are named after their founder, who also manufactures CNC machining equipment.", answer: "Haas F1 Team", accept: ["haas", "haas f1", "haas f1 team"], choices: ["Andretti Autosport", "Chip Ganassi Racing", "Penske F1"], diff: 2 },
      { clue: "Red Bull's junior team has operated under multiple names. After being called Toro Rosso and then AlphaTauri, what is the team's name as of the 2024 season?", answer: "RB", accept: ["rb", "visa cash app rb", "rb f1", "racing bulls", "racingbulls"], choices: ["Scuderia Alpha", "Red Bull B", "Bull Racing"], diff: 3 },
      { clue: "Ferrari's most recent Formula 1 Constructors' Championship before the 2020s came in 2008. Who won the Drivers' Championship that same year — which was NOT a Ferrari driver?", answer: "Lewis Hamilton", accept: ["lewis hamilton", "hamilton"], choices: ["Kimi Raikkonen", "Felipe Massa", "Robert Kubica"], diff: 2 },
    ],
    300: [
      { clue: "The Aston Martin F1 team had a breakthrough 2023 season, finishing fourth in the Constructors' Championship. Their rapid car improvement was partly credited to engineers recruited from this rival team.", answer: "Red Bull", accept: ["red bull", "red bull racing"], choices: ["Mercedes", "Ferrari", "McLaren"], diff: 3 },
      { clue: "In 2022, Red Bull Racing became the first team penalized for breaching Formula 1's newly introduced cost-cap regulations. Their 2021 overspend resulted in a financial penalty plus this sporting sanction.", answer: "Reduction in wind tunnel testing time", accept: ["wind tunnel", "testing time", "aerodynamic testing", "aero testing", "cfd reduction"], choices: ["Loss of constructor points", "A race ban for team management", "Driver grid penalties"], diff: 4 },
      { clue: "Williams Racing, winners of seven Constructors' Championships, was sold by the Williams family in 2020. What is the name of the investment firm that bought the team?", answer: "Dorilton Capital", accept: ["dorilton", "dorilton capital"], choices: ["Liberty Media", "Lucid Group", "Andretti Global"], diff: 4 },
      { clue: "McLaren-Honda's partnership in 2015-2017 was disastrous compared to their legendary late-1980s collaboration. What was Fernando Alonso's infamous radio description of the Honda engine's power during this troubled era?", answer: "GP2 engine", accept: ["gp2 engine", "gp2", "gp2 power", "its a gp2 engine"], choices: ["A lawnmower engine", "A diesel tractor", "A rubber band"], diff: 3 },
    ],
    400: [
      { clue: "McLaren won their first Constructors' Championship since 1998 in 2024. However, their star driver Lando Norris lost a potential race win at the 2024 Dutch Grand Prix after Verstappen's aggressive defending forced him wide. How many penalty points did Verstappen receive from stewards for the incident?", answer: "None — no penalty was issued", accept: ["none", "no penalty", "0", "zero", "no action"], choices: ["5-second time penalty", "3 penalty points", "Grid drop for next race"], diff: 4 },
      { clue: "Porsche and the Volkswagen Group attempted to buy a 50% stake in Red Bull Racing in 2022 before negotiations collapsed. In what month and year did Red Bull officially confirm the deal was dead?", answer: "October 2022", accept: ["october 2022", "2022", "october"], choices: ["January 2023", "June 2022", "March 2023"], diff: 4 },
      { clue: "The Red Bull Ring circuit in Austria — home of the Austrian Grand Prix — is owned by the Red Bull company. Before Red Bull purchased and renovated it, what was the circuit previously called?", answer: "A1 Ring", accept: ["a1 ring", "osterreichring", "osterreich ring"], choices: ["Styrian Circuit", "Zeltweg Airfield", "Euro Ring"], diff: 3 },
      { clue: "In 2021, Mercedes' dominant era ended with Red Bull winning the Drivers' Championship via Verstappen. Yet Mercedes still won the Constructors' Championship that year. How many constructors' points separated Mercedes and Red Bull at the end of 2021?", answer: "28 points", accept: ["28", "twenty-eight", "28 points"], choices: ["5 points", "44 points", "61 points"], diff: 4 },
    ],
  },
  3: { // F1 RECORDS
    100: [
      { clue: "Lewis Hamilton holds the all-time Formula 1 record for most career race wins. Which legendary German driver's previous record of 91 wins did he surpass in 2020?", answer: "Michael Schumacher", accept: ["michael schumacher", "schumacher"], choices: ["Ayrton Senna", "Alain Prost", "Sebastian Vettel"], diff: 1 },
      { clue: "Max Verstappen set the Formula 1 record for most wins in a single season in 2023 with 19 victories. He also holds the single-season record for most consecutive wins. How many races did he win in a row?", answer: "10", accept: ["10", "ten"], choices: ["7", "9", "12"], diff: 2 },
      { clue: "This Finnish driver holds the all-time Formula 1 record for most race starts, having competed in 349 Grands Prix across his career.", answer: "Kimi Raikkonen", accept: ["kimi raikkonen", "raikkonen", "kimi"], choices: ["Fernando Alonso", "Rubens Barrichello", "Michael Schumacher"], diff: 2 },
      { clue: "Lewis Hamilton holds the Formula 1 record for most career pole positions. Approximately how many poles did he secure throughout his career?", answer: "104", accept: ["104", "one hundred four", "over 100"], choices: ["91", "88", "112"], diff: 3 },
    ],
    200: [
      { clue: "Max Verstappen became the youngest Formula 1 race winner in history when he won the 2016 Spanish Grand Prix at just 18 years old. He had been promoted from Toro Rosso to this team just days before the race.", answer: "Red Bull Racing", accept: ["red bull", "red bull racing"], choices: ["Toro Rosso", "Ferrari", "Mercedes"], diff: 2 },
      { clue: "Lewis Hamilton broke Michael Schumacher's all-time win record at the 2020 Portuguese Grand Prix at Portimao — a circuit that had not hosted Formula 1 in how many years?", answer: "24 years", accept: ["24", "twenty-four", "24 years", "over 20 years"], choices: ["18 years", "31 years", "12 years"], diff: 3 },
      { clue: "Lewis Hamilton and Michael Schumacher share the record for most Formula 1 World Championships. How many titles do each of them hold?", answer: "7", accept: ["7", "seven"], choices: ["6", "8", "5"], diff: 1 },
      { clue: "Ayrton Senna won this many Formula 1 World Championships — all three with McLaren.", answer: "3", accept: ["3", "three"], choices: ["4", "2", "5"], diff: 1 },
    ],
    300: [
      { clue: "The first-ever Formula 1 World Championship race took place on May 13, 1950, at this famous British circuit.", answer: "Silverstone", accept: ["silverstone", "silverstone circuit", "british grand prix", "raf silverstone"], choices: ["Monaco", "Monza", "Nurburgring"], diff: 2 },
      { clue: "Red Bull's dominant 2023 season saw them win 21 of 22 Grands Prix — a team record. Which constructors' championship was it for Red Bull?", answer: "Fifth", accept: ["5th", "fifth", "their fifth"], choices: ["Fourth", "Third", "Sixth"], diff: 3 },
      { clue: "Max Verstappen clinched his 2023 World Championship at the Qatar Grand Prix Sprint — becoming only the second driver in history to clinch a title in a Sprint race. Who was the first?", answer: "Max Verstappen in 2022", accept: ["verstappen", "max verstappen", "himself", "2022", "verstappen 2022"], choices: ["Lewis Hamilton", "Sebastian Vettel", "Fernando Alonso"], diff: 4 },
      { clue: "The Circuit de Spa-Francorchamps features the infamous Eau Rouge / Raidillon complex, taken flat-out at high speed. In 2021, this section was redesigned primarily for what safety reason?", answer: "Multiple fatal accidents involving junior formulas", accept: ["accidents", "fatal crashes", "safety", "deaths", "junior formula accidents", "unsafe"], choices: ["FIA noise regulations", "Weather drainage issues", "Crowd viewing improvements"], diff: 4 },
    ],
    400: [
      { clue: "Michael Schumacher won seven Formula 1 World Championships — one with Benetton and six with Ferrari. How many of his 91 career wins came during his Ferrari years?", answer: "72", accept: ["72", "seventy-two"], choices: ["65", "68", "77"], diff: 4 },
      { clue: "The Formula 1 record for fastest average race speed was set at Monza. The 2003 Italian Grand Prix holds the record with an average speed of approximately this figure.", answer: "247 km/h", accept: ["247", "247 km", "247 km/h", "about 247", "153 mph"], choices: ["229 km/h", "261 km/h", "215 km/h"], diff: 4 },
      { clue: "Sebastian Vettel's record of 9 consecutive race wins — set in 2013 — was broken by Verstappen in 2023. In which race did Verstappen record his record-breaking 10th consecutive victory?", answer: "United States Grand Prix", accept: ["us gp", "united states gp", "united states grand prix", "austin", "cota"], choices: ["Japanese Grand Prix", "Qatar Grand Prix", "Singapore Grand Prix"], diff: 3 },
      { clue: "Max Verstappen won his fourth consecutive Formula 1 title in 2024. How many race wins did he record in 2024 — the lowest total across his four championship-winning seasons?", answer: "9", accept: ["9", "nine"], choices: ["12", "7", "11"], diff: 3 },
    ],
  },
  4: { // TRACKS & CIRCUITS
    100: [
      { clue: "The Monaco Grand Prix, one of the most prestigious events in motorsport, is held on the winding streets of this tiny Mediterranean principality.", answer: "Monaco", accept: ["monaco", "monte carlo", "principality of monaco"], choices: ["San Marino", "Andorra", "Liechtenstein"], diff: 1 },
      { clue: "This American circuit, located in Austin, Texas, opened in 2012 and hosts the United States Grand Prix. It features a replica of famous corners from circuits around the world.", answer: "Circuit of the Americas", accept: ["circuit of the americas", "cota", "austin", "texas"], choices: ["Indianapolis Motor Speedway", "Watkins Glen", "Las Vegas Strip Circuit"], diff: 1 },
      { clue: "The Las Vegas Grand Prix debuted in 2023 on a street circuit running along this famous stretch of road through the Nevada desert city.", answer: "The Las Vegas Strip", accept: ["the strip", "las vegas strip", "strip", "las vegas boulevard"], choices: ["Fremont Street", "Paradise Road", "Sahara Avenue"], diff: 1 },
      { clue: "The Miami International Autodrome, which hosted its first Grand Prix in 2022, is built around the parking structure and facilities of which NFL team's stadium?", answer: "Miami Dolphins", accept: ["miami dolphins", "dolphins", "hard rock stadium"], choices: ["Miami Heat", "Jacksonville Jaguars", "Tampa Bay Buccaneers"], diff: 2 },
    ],
    200: [
      { clue: "The Dutch Grand Prix returned to the Formula 1 calendar in 2021, bringing enormous orange-clad crowds to support home hero Max Verstappen. The race is held at this historic coastal circuit.", answer: "Circuit Zandvoort", accept: ["zandvoort", "circuit zandvoort"], choices: ["Circuit Assen", "TT Circuit", "Spa-Francorchamps"], diff: 2 },
      { clue: "The Saudi Arabian Grand Prix, first held in 2021 at the Jeddah Corniche Circuit, is one of the fastest street circuits in Formula 1. In which Saudi city is the circuit located?", answer: "Jeddah", accept: ["jeddah", "jeddah saudi arabia"], choices: ["Riyadh", "Mecca", "Dammam"], diff: 2 },
      { clue: "The Singapore Grand Prix at the Marina Bay Street Circuit is distinctive as Formula 1's only permanent night race under floodlights. In what year did the first night race take place?", answer: "2008", accept: ["2008"], choices: ["2010", "2007", "2012"], diff: 3 },
      { clue: "The Bahrain International Circuit hosted its first Formula 1 Grand Prix in this year, becoming the first permanent circuit in the Middle East to stage a World Championship race.", answer: "2004", accept: ["2004"], choices: ["2002", "2006", "2001"], diff: 2 },
    ],
    300: [
      { clue: "The Red Bull Ring in Austria is unusual among Formula 1 venues in that it is owned by an F1 team's parent company. What was the circuit's name before Red Bull purchased and redeveloped it in the early 2000s?", answer: "A1 Ring", accept: ["a1 ring", "osterreichring", "osterreich ring"], choices: ["Styrian Circuit", "Zeltweg Airfield", "Euro Ring"], diff: 3 },
      { clue: "The street circuit in Azerbaijan's capital that hosts the Azerbaijan Grand Prix debuted on the F1 calendar as the European Grand Prix in 2016. What is the circuit's official name?", answer: "Baku City Circuit", accept: ["baku city circuit", "baku", "baku circuit"], choices: ["Azerbaijan Grand Prix Circuit", "Caspian Circuit", "Baku Street Circuit"], diff: 2 },
      { clue: "The Autodromo Nazionale Monza near Milan — the 'Temple of Speed' — features the remnants of a banked oval track that was last used in Formula 1 in the 1960s. In what year did the banking last appear in a World Championship race?", answer: "1961", accept: ["1961"], choices: ["1969", "1955", "1973"], diff: 4 },
      { clue: "Interlagos in Sao Paulo, Brazil has hosted Formula 1 since 1973 and is famous for passionate fans and unpredictable weather. What is the circuit's full official name, honouring a Brazilian racing legend?", answer: "Autodromo Jose Carlos Pace", accept: ["jose carlos pace", "autodromo jose carlos pace", "pace", "interlagos"], choices: ["Autodromo de Sao Paulo", "Autodromo Ayrton Senna", "Autodromo Nelson Piquet"], diff: 4 },
    ],
    400: [
      { clue: "The Melbourne street circuit in Australia has hosted the season-opening Australian Grand Prix since 1996. Before Melbourne, which city hosted the Australian Grand Prix from 1985 to 1995?", answer: "Adelaide", accept: ["adelaide"], choices: ["Sydney", "Brisbane", "Perth"], diff: 3 },
      { clue: "The Circuit de Spa-Francorchamps in Belgium is famous for its unpredictable weather — sunshine at one sector and heavy rain at another is common. What is the name of the famous forest section where conditions can vary the most?", answer: "Fagnes / Hautes Fagnes", accept: ["fagnes", "hautes fagnes", "the forest", "ardennes"], choices: ["Raidillon sector", "Les Combes", "Pouhon"], diff: 4 },
      { clue: "The Qatar Grand Prix was added to the F1 calendar in 2021 at the Losail International Circuit. The circuit was previously used primarily for what type of motorsport before Formula 1 arrived?", answer: "MotoGP / Motorcycle racing", accept: ["motogp", "motorcycle", "moto gp", "bike racing"], choices: ["IndyCar", "NASCAR", "Touring car racing"], diff: 3 },
      { clue: "Sector 3 of the Silverstone circuit — running from Chapel through Stowe and Club — was rebuilt and redesigned in what year as part of a major circuit upgrade?", answer: "2010", accept: ["2010"], choices: ["2007", "2014", "2018"], diff: 4 },
    ],
  },
  5: { // MODERN ERA
    100: [
      { clue: "The Netflix documentary series 'Drive to Survive,' first released in 2019, is widely credited with massively growing Formula 1's fanbase — especially in this country where the sport was previously a niche interest.", answer: "United States", accept: ["united states", "usa", "america", "us"], choices: ["China", "India", "Brazil"], diff: 1 },
      { clue: "Formula 1 introduced Sprint race weekends in 2021 — shorter Saturday races that award championship points. How long is a Sprint race distance compared to a full Grand Prix?", answer: "About one-third the distance", accept: ["one third", "1/3", "shorter", "third", "100km", "approximately 100km", "about a third"], choices: ["Half the distance", "Two-thirds the distance", "One quarter the distance"], diff: 2 },
      { clue: "The 2024 Formula 1 Constructors' Championship was won by McLaren for the first time since 1998. Lando Norris was paired with this Australian rookie-turned-race-winner as his teammate.", answer: "Oscar Piastri", accept: ["oscar piastri", "piastri", "oscar"], choices: ["Alex Palou", "Logan Sargeant", "Nyck de Vries"], diff: 2 },
      { clue: "The Miami Grand Prix joined the Formula 1 calendar in 2022. It is held in Miami Gardens — but the circuit layout wraps around the outside of which Miami sports arena?", answer: "Hard Rock Stadium", accept: ["hard rock stadium", "miami dolphins stadium", "dolphins stadium", "nfl stadium"], choices: ["FTX Arena", "Kaseya Center", "LoanDepot Park"], diff: 2 },
    ],
    200: [
      { clue: "The 2022 Formula 1 season introduced sweeping new car regulations that brought back 'ground effect' aerodynamics for the first time in decades. What key aerodynamic feature was central to these new cars?", answer: "Venturi tunnels under the floor", accept: ["venturi", "tunnels", "underfloor", "ground effect", "venturi tunnels", "floor tunnels"], choices: ["Front wing DRS", "Rear diffuser ban", "V-shaped cockpit"], diff: 2 },
      { clue: "Formula 1 introduced a budget cap starting in 2021 to level the playing field between teams. What was the initial annual spending limit for the first season?", answer: "$145 million", accept: ["145 million", "$145m", "145", "145 million dollars"], choices: ["$200 million", "$100 million", "$175 million"], diff: 3 },
      { clue: "Fernando Alonso's remarkable comeback with Aston Martin in 2023 saw him finish on the podium eight times. He became the oldest driver to lead a World Championship race in the modern era. What age was Alonso during the 2023 season?", answer: "41", accept: ["41", "forty-one"], choices: ["38", "43", "39"], diff: 3 },
      { clue: "Following the controversial 2021 Abu Dhabi finale, the FIA replaced race director Michael Masi and split the role between two new officials on a rotating basis. Name either of them.", answer: "Niels Wittich or Eduardo Freitas", accept: ["niels wittich", "wittich", "eduardo freitas", "freitas"], choices: ["Charlie Whiting", "Herbie Blash", "Alan Donnelly"], diff: 4 },
    ],
    300: [
      { clue: "The 2023 Formula 1 season featured a record 22 Grands Prix on the calendar. How many of those 22 races did Red Bull Racing win as a team?", answer: "21", accept: ["21", "twenty-one"], choices: ["19", "18", "20"], diff: 3 },
      { clue: "Max Verstappen's 2023 title clinch at the Qatar Grand Prix Sprint came with six rounds still remaining in the season. Which team had won the Qatar Grand Prix proper the previous year in 2021?", answer: "Red Bull", accept: ["red bull", "red bull racing"], choices: ["Mercedes", "Ferrari", "Renault"], diff: 4 },
      { clue: "The 2020 Sakhir Grand Prix used a unique outer loop configuration of the Bahrain circuit — one of the shortest and fastest tracks in modern F1. An unlikely driver won that unusual race after a dramatic pit stop mix-up for others. Who won?", answer: "Sergio Perez", accept: ["sergio perez", "perez", "checo"], choices: ["Valtteri Bottas", "George Russell", "Esteban Ocon"], diff: 3 },
      { clue: "In 2024, Formula 1 ran a record 24 Grands Prix across the season. Which brand new venue made its debut on the 2024 calendar for the first time?", answer: "Shanghai / China", accept: ["china", "shanghai", "chinese grand prix", "shanghai international circuit"], choices: ["South African GP", "Kyoto GP", "Mumbai GP"], diff: 3 },
    ],
    400: [
      { clue: "Charles Leclerc finally won at Monaco in 2024. In how many previous attempts had Leclerc retired from the Monaco Grand Prix while strongly positioned to win?", answer: "Twice", accept: ["twice", "two", "2", "2021 and 2022", "two times"], choices: ["Once", "Three times", "Never before"], diff: 3 },
      { clue: "Max Verstappen won his fourth consecutive World Championship in 2024, but faced his toughest title fight in years. In how many races did Verstappen win in 2024 — the fewest across his four title-winning seasons?", answer: "9", accept: ["9", "nine"], choices: ["12", "7", "11"], diff: 4 },
      { clue: "Lando Norris won his first race at the 2024 Miami Grand Prix. It was McLaren's first race win since 2021. Wait — actually their drought stretched further. In what year did McLaren last win a race before Norris in 2024?", answer: "2021", accept: ["2021", "daniel ricciardo", "ricciardo", "monza 2021"], choices: ["2019", "2018", "2023"], diff: 4 },
      { clue: "The 2024 Qatar Grand Prix saw a mass of driver penalties for track limits violations — a growing controversy in the sport. How many drivers received post-race time penalties for exceeding track limits during that race?", answer: "7", accept: ["7", "seven", "multiple drivers"], choices: ["3", "11", "4"], diff: 4 },
    ],
  },
};

const F1_FINALS = [
  {
    category: "F1 Champions",
    clue: "This three-time Formula 1 World Champion, widely regarded by many as the greatest driver in history, died tragically during the 1994 San Marino Grand Prix at Imola after crashing at the Tamburello corner.",
    answer: "Ayrton Senna",
    accept: ["ayrton senna", "senna", "ayrton"],
  },
  {
    category: "Modern Champions",
    clue: "Max Verstappen's record-breaking 2023 Formula 1 season saw him win 19 races and clinch the World Championship with six rounds remaining. He drove for this constructor throughout the season.",
    answer: "Red Bull Racing",
    accept: ["red bull", "red bull racing", "oracle red bull racing"],
  },
  {
    category: "Iconic Moments",
    clue: "The 2021 Abu Dhabi Grand Prix finale was decided on the final lap when Max Verstappen overtook this driver — who had led the race from lap 1 and appeared certain to win a record eighth World Championship.",
    answer: "Lewis Hamilton",
    accept: ["lewis hamilton", "hamilton"],
  },
  {
    category: "F1 Records",
    clue: "Lewis Hamilton holds the all-time records for most Formula 1 race wins and most pole positions. He also shares one all-time record with Michael Schumacher. How many Formula 1 World Championships does Hamilton hold?",
    answer: "7",
    accept: ["7", "seven"],
  },
  {
    category: "F1 Tracks",
    clue: "This Italian circuit — known as the 'Temple of Speed' — has hosted a Formula 1 Grand Prix in every season since the inaugural World Championship in 1950, making it one of the only tracks to achieve this distinction.",
    answer: "Monza",
    accept: ["monza", "autodromo nazionale monza", "autodromo di monza", "autodromo monza"],
  },
];

const F1_EXTRA = {
  0: { // WORLD CHAMPIONS extras
    100: [
      { clue: "Max Verstappen won his third consecutive Formula 1 World Championship in 2023 with six races to spare. What nationality is Verstappen?", answer: "Dutch", accept: ["dutch", "netherlands", "holland", "dutch/belgian"], choices: ["Belgian", "German", "Austrian"], diff: 1 },
    ],
    200: [
      { clue: "Jenson Button's 2009 Formula 1 World Championship victory came as a major surprise — he won with this team, which had been on the verge of folding at the end of 2008.", answer: "Brawn GP", accept: ["brawn gp", "brawn", "brawn grand prix"], choices: ["Williams", "Force India", "Toyota"], diff: 2 },
    ],
    300: [],
    400: [],
  },
  1: { // ICONIC RACES extras
    100: [
      { clue: "Oscar Piastri took his first Formula 1 victory at the 2024 Hungarian Grand Prix, driving for McLaren. What nationality is Piastri?", answer: "Australian", accept: ["australian", "australia"], choices: ["New Zealand", "British", "Canadian"], diff: 1 },
    ],
    200: [
      { clue: "The 2021 Dutch Grand Prix at Zandvoort was the first time the Netherlands hosted a Formula 1 race since 1985. Who won the race, thrilling the home crowd?", answer: "Max Verstappen", accept: ["max verstappen", "verstappen"], choices: ["Lewis Hamilton", "Valtteri Bottas", "Fernando Alonso"], diff: 1 },
    ],
    300: [],
    400: [],
  },
  2: { // TEAMS extras
    100: [
      { clue: "Which team won the 2022 and 2023 Formula 1 Constructors' Championships?", answer: "Red Bull Racing", accept: ["red bull", "red bull racing"], choices: ["Mercedes", "Ferrari", "McLaren"], diff: 1 },
    ],
    200: [],
    300: [],
    400: [],
  },
  3: { // F1 RECORDS extras
    100: [
      { clue: "Max Verstappen's first Formula 1 race win came at the 2016 Spanish Grand Prix at age 18, making him the youngest F1 race winner ever. Which circuit hosted that historic race?", answer: "Circuit de Barcelona-Catalunya", accept: ["barcelona", "spain", "spanish grand prix", "circuit de barcelona", "barcelona-catalunya"], choices: ["Monza", "Silverstone", "Monaco"], diff: 1 },
    ],
    200: [],
    300: [],
    400: [],
  },
  4: { // TRACKS extras
    100: [
      { clue: "The iconic Spa-Francorchamps circuit in Belgium is famous for a weather phenomenon where it can be sunny at one end and raining heavily at the other. In which country is Spa-Francorchamps located?", answer: "Belgium", accept: ["belgium", "belgian"], choices: ["France", "Luxembourg", "Netherlands"], diff: 1 },
    ],
    200: [],
    300: [],
    400: [],
  },
  5: { // MODERN ERA extras
    100: [
      { clue: "Drive to Survive, the Netflix Formula 1 documentary series that transformed the sport's popularity, premiered in what year?", answer: "2019", accept: ["2019"], choices: ["2018", "2020", "2021"], diff: 1 },
    ],
    200: [],
    300: [],
    400: [],
  },
};

const F1_EXTRA_FINALS = [
  {
    category: "WORLD CHAMPIONS",
    clue: "Fernando Alonso returned to Formula 1 in 2021 after a two-year absence and won 8 podiums for Aston Martin in 2023. He first won the World Championship in 2005 at age 24, becoming at that time the youngest champion in F1 history. Which team did he drive for when he won his first title?",
    answer: "Renault",
    accept: ["renault", "renault f1 team"],
  },
  {
    category: "MODERN ERA",
    clue: "Oscar Piastri was so highly rated that when he won the F2 Championship in 2021, his talent was in such demand that a legal dispute erupted between two Formula 1 teams over rights to his services. Which two teams were involved in the contract dispute over Piastri?",
    answer: "Alpine and McLaren",
    accept: ["alpine and mclaren", "mclaren and alpine", "alpine", "mclaren"],
  },
];

// ─────────────────────────────────────────────
// Added 20260628 (Sunday → F1 Racing nightly expansion)
// 18 regular + 2 Final Round questions, fact-checked via web search.
// ─────────────────────────────────────────────
const F1_EXTRA_20260628 = {

  "WORLD CHAMPIONS": {
    questions: [
      { clue: "This McLaren driver won his first Formula 1 World Championship in 2025, clinching the title at the season finale in Abu Dhabi.", answer: "Lando Norris", accept: ["lando norris", "norris", "lando"], choices: ["Oscar Piastri", "Max Verstappen", "Charles Leclerc"], diff: 1 },
      { clue: "This British driver dominated the 1992 Formula 1 season, winning a then-record nine Grands Prix to claim his only World Championship with Williams.", answer: "Nigel Mansell", accept: ["nigel mansell", "mansell"], choices: ["Damon Hill", "Nelson Piquet", "Alain Prost"], diff: 2 },
      { clue: "Graham and Damon Hill are one of only two father-and-son pairs to have each won the Formula 1 World Championship. Name the other father-son champion pair.", answer: "Keke and Nico Rosberg", accept: ["keke and nico rosberg", "rosberg", "keke rosberg and nico rosberg", "nico and keke rosberg", "the rosbergs"], choices: ["Mario and Michael Andretti", "Jos and Max Verstappen", "Gilles and Jacques Villeneuve"], diff: 3 },
      { clue: "Lando Norris won the 2025 Formula 1 World Championship by a razor-thin margin over Max Verstappen at the final race. How many points separated them?", answer: "2 points", accept: ["2", "two", "2 points", "two points"], choices: ["12 points", "8 points", "1 point"], diff: 4 },
      { clue: "Lando Norris's 2025 World Championship brought an end to a streak of four consecutive Drivers' titles (2021–2024) held by one driver. Name the driver whose championship run Norris ended.", answer: "Max Verstappen", accept: ["max verstappen", "verstappen", "max"], diff: 3 },
      { clue: "Name the Argentine maestro who won five Formula 1 World Championships in the 1950s with four different constructors — Alfa Romeo, Maserati, Mercedes, and Ferrari — a feat unmatched for generations.", answer: "Juan Manuel Fangio", accept: ["juan manuel fangio", "fangio", "juan fangio"], diff: 3 }
    ]
  },

  "ICONIC RACES": {
    questions: [
      { clue: "At the 1976 German Grand Prix, this driver suffered a horrific fiery crash at the Nürburgring, was given last rites, yet astonishingly returned to racing just six weeks later.", answer: "Niki Lauda", accept: ["niki lauda", "lauda"], choices: ["James Hunt", "Clay Regazzoni", "Jody Scheckter"], diff: 2 },
      { clue: "Lewis Hamilton made his Ferrari race debut in 2025 after leaving Mercedes. At which season-opening Grand Prix did he line up in red for the first time?", answer: "Australian Grand Prix", accept: ["australian grand prix", "australia", "melbourne", "australian gp"], choices: ["Bahrain Grand Prix", "Chinese Grand Prix", "Saudi Arabian Grand Prix"], diff: 2 }
    ]
  },

  "TEAMS & CONSTRUCTORS": {
    questions: [
      { clue: "Which team is the only constructor to have competed in every Formula 1 World Championship season since the championship began in 1950?", answer: "Ferrari", accept: ["ferrari", "scuderia ferrari"], choices: ["McLaren", "Williams", "Mercedes"], diff: 1 },
      { clue: "In 1976, Tyrrell stunned Formula 1 by introducing the radical P34 car, which featured an unusual number of wheels. How many wheels did the P34 have?", answer: "Six", accept: ["six", "6", "6 wheels", "six wheels"], choices: ["Three", "Eight", "Five"], diff: 3 },
      { clue: "Cadillac joined the Formula 1 grid as the 11th team in 2026. They are the first all-new constructor to enter the sport since which team debuted in 2016?", answer: "Haas", accept: ["haas", "haas f1", "haas f1 team"], choices: ["Aston Martin", "AlphaTauri", "Racing Point"], diff: 2 }
    ]
  },

  "F1 RECORDS": {
    questions: [
      { clue: "Michael Schumacher won five consecutive Formula 1 World Championships from 2000 to 2004 while driving for which team?", answer: "Ferrari", accept: ["ferrari", "scuderia ferrari"], choices: ["Benetton", "Mercedes", "McLaren"], diff: 1 },
      { clue: "This Brazilian legend holds the record for the most Monaco Grand Prix victories, winning the prestigious street race six times.", answer: "Ayrton Senna", accept: ["ayrton senna", "senna", "ayrton"], choices: ["Alain Prost", "Graham Hill", "Michael Schumacher"], diff: 3 },
      { clue: "McLaren set the record for the fastest pit stop in Formula 1 history at the 2023 Qatar Grand Prix, servicing Lando Norris's car in what time?", answer: "1.80 seconds", accept: ["1.80", "1.8", "1.80 seconds", "1.8 seconds", "1.80s"], choices: ["2.31 seconds", "1.92 seconds", "0.98 seconds"], diff: 4 }
    ]
  },

  "TRACKS & CIRCUITS": {
    questions: [
      { clue: "The original Nürburgring Nordschleife in Germany — a treacherous 14-mile forest circuit — earned what ominous nickname, famously coined by three-time champion Jackie Stewart?", answer: "The Green Hell", accept: ["the green hell", "green hell", "grüne hölle", "grune holle"], choices: ["The Black Forest", "The Devil's Loop", "The Widowmaker"], diff: 3 },
      { clue: "The slowest corner in modern Formula 1 — taken at barely 30 mph — is the famous hairpin on which glamorous street circuit?", answer: "Monaco", accept: ["monaco", "monte carlo", "monaco grand prix"], choices: ["Singapore", "Baku", "Las Vegas"], diff: 2 }
    ]
  },

  "MODERN ERA": {
    questions: [
      { clue: "DRS, the driver-activated movable rear wing flap designed to make overtaking easier, was introduced to Formula 1 in which year?", answer: "2011", accept: ["2011"], choices: ["2009", "2014", "2007"], diff: 2 },
      { clue: "The sweeping 2026 Formula 1 power unit regulations remove one energy-recovery component from the hybrid engine to simplify it. Which component is being deleted?", answer: "The MGU-H", accept: ["mgu-h", "mguh", "the mgu-h", "mgu h", "heat motor generator unit"], choices: ["The MGU-K", "The turbocharger", "The energy store / battery"], diff: 3 },
      { clue: "Ferrari is the most successful and most famous constructor in Formula 1 history. In which Italian town is the Scuderia Ferrari team based?", answer: "Maranello", accept: ["maranello"], choices: ["Modena", "Monza", "Bologna"], diff: 1 },
      { clue: "Under the 2026 power unit regulations, the share of total power coming from the electrical (hybrid) system jumps to roughly what level, up from about 20% previously?", answer: "About 50%", accept: ["50", "50%", "about 50%", "fifty percent", "half", "around 50%"], choices: ["About 30%", "About 70%", "About 90%"], diff: 4 }
    ]
  }

};

if (typeof mergeExtra === 'function') mergeExtra(F1_EXTRA_20260628, 'F1 Racing');
