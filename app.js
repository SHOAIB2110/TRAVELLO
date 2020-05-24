const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//const _=require("lodash");
var say = require('say');
const helmet = require('helmet')



const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(express.static('files'))

app.use(helmet.noSniff())

app.get("/",function(req,res){

  res.render("home");
});

app.post("/",function(req,res){
  var city;
  city=req.body.cityname;

  res.redirect(city);


});
/////////////////////////////////////////////////////Mumbai///////////////////////////////////////////////////
app.get("/mumbai",function(req,res){

  res.render("mumbai");
});



app.get("/mumbai/cstm",function(req,res){

  res.render("cstm");
  say.speak('Chhatrapati Shivaji Maharaj Terminus, also known by its former name Victoria Terminus, is a historic terminal train station and UNESCO World Heritage Site in Mumbai, Maharashtra, India. The terminus was designed by British born architectural engineer Frederick William Stevens, in an exuberant Italian Gothic style. Wikipedia Opened: May 1888 Architectural style: Indo-Saracenic architecture Platforms in use: 18 Former names: Victoria Terminus; Bori Bunder Railway Station Engineer: Frederick William Stevens Architects: Frederick William Stevens, Axel Haig', 0.5, (err) => {
      if (err) {
          return console.error(err);
      }

      console.log('Text has been spoken.');
  });
});

app.get("/mumbai/goim",function(req,res){

  res.render("goim");
  say.speak('The Gateway of India is an arch-monument built in the early twentieth century in the city of Mumbai, in the Indian state of Maharashtra. It was erected to commemorate the landing in December 1911 at Apollo Bunder, Mumbai of King-Emperor George V and Queen-Empress Mary, the first British monarch to visit India. Opened: 4 December 1924 Height: 26 m Construction started: 31 March 1913 Architectural style: Indo-Saracenic architecture Architecture firm: Gammon India Architect: George Wittet', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});



});

app.get("/mumbai/ecm",function(req,res){

  res.render("ecm");
  say.speak('Elephanta Caves are a UNESCO World Heritage Site and a collection of cave temples predominantly dedicated to the Hindu god Shiva. They are on Elephanta Island, or Gharapuri, in Mumbai Harbour, 10 kilometres east of Mumbai in the Indian state of Mahārāshtra. Wikipedia UNESCO World Heritage Site inscription: 1987', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});
});

app.get("/mumbai/mdm",function(req,res){

  res.render("mdm");
  say.speak('Marine Drive is a 3.6-kilometre-long Promenade along the Netaji Subhash Chandra Bose Road in South Mumbai in the city of Mumbai, India. Often, the names Marine Drive and Netaji Subhash Chandra Bose Road are used interchangeably to refer to this 3.9km stretch. The road and promenade were constructed by late philanthropist Bhagojisheth Keer and Pallonji Mistry. It is a c-shaped six-lane concrete road along the coast of a natural bay. At the northern end of Marine Drive is Girgaon Chowpatty and the adjacent road along links Nariman Point at southern tip to Babulnath and Malabar Hill at northern tip. Marine Drive is situated on reclaimed land facing west-south-west. Marine Drive is also known as the Queens Necklace because, when viewed at night from an elevated point anywhere along the drive, the street lights resemble a string of pearls in a necklace', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});

});
/////////////////////////kolkata///////////////////////////////////////
app.get("/kolkata",function(req,res){
res.render("kolkata");
});

app.get("/kolkata/vmk",function(req,res){
  res.render("vmk");
  say.speak('The Victoria Memorial is a large marble building in Kolkata, West Bengal, India, which was built between 1906 and 1921. It is dedicated to the memory of Queen Victoria, then Empress of India, and is now a museum and tourist destination under the auspices of the Ministry of Culture. Wikipedia Construction started: 1906 Height: 56 m Founded: 1921 Architectural style: Indo-Saracenic architecture Architects: William Emerson, Vincent Esch', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});

});

app.get("/kolkata/imk",function(req,res){
  res.render("imk");
  say.speak('The Indian Museum in Kolkata, West Bengal, India, also referred to as the Imperial Museum at Calcutta in colonial-era texts, is the ninth oldest museum of the world, oldest museum in India and the largest museum in India. Wikipedia Founded: 1814 Director: Shri Arijit Dutta Choudhury Public transit access: Park Street metro station (Kolkata Metro) Collection size: 102,646 (as of March 31, 2004)', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});

});

app.get("/kolkata/hbk",function(req,res){
  res.render("hbk");
  say.speak('Howrah Bridge is a bridge with a suspended span over the Hooghly River in West Bengal, India. Commissioned in 1943, the bridge was originally named the New Howrah Bridge, because it replaced a pontoon bridge at the same location linking the two cities of Howrah and Kolkata. Wikipedia Total length: 705 m Construction started: 1935 Opened: 3 February 1943 Body of water: Hooghly River Location: Howrah, Kolkata, West Bengal Bridge type: Suspension bridge, Cantilever bridge, Pontoon bridge, Truss arch bridge', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});
});

app.get("/kolkata/dktk",function(req,res){
  res.render("dktk");
  say.speak('Dakshineswar Kali Temple is a Hindu navaratna temple located at Dakshineswar. Situated on the eastern bank of the Hooghly River, the presiding deity of the temple is Bhavatarini, an aspect of Kali, meaning, She who liberates Her devotees from the ocean of existence i.e. Saṃsāra. Wikipedia Opened: 31 May 1855 Floors: 3 Founder: Rani Rashmoni Creator: Rani Rashmoni District: North 24 Parganas Deity: Bhavatarini Kali', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});
});





///////////////////////delhi//////////////////////////////////////////
app.get("/delhi",function(req,res){

  res.render("delhi");
});
app.get("/delhi/nd",function(req,res){
  res.render("nd");
  say.speak('New Delhi is an urban district located in the city of Delhi. New Delhi serves as the capital of India and the seat of all three branches of the Government of India. The foundation stone of New Delhi was laid by Emperor George V during the Delhi Durbar of 1911. It was designed by British architects Sir Edwin Lutyens and Sir Herbert Baker. The new capital was inaugurated on 13 February 1931, by Viceroy and Governor-General of India Lord Irwin. Although colloquially Delhi and New Delhi are used interchangeably to refer to the National Capital Territory of Delhi, these are two distinct entities, with New Delhi forming a small part of the city of Delhi. The National Capital Region is a much larger entity comprising the entire NCT along with adjoining districts in neighbouring states. ', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});
});

app.get("/delhi/htd",function(req,res){
  res.render("htd");
  say.speak('Humayuns tomb is the tomb of the Mughal Emperor Humayun in Delhi, India. The tomb was commissioned by Humayuns first wife and chief consort, Empress Bega Begum, in 1569- 70, and designed by Mirak Mirza Ghiyas and his son, Sayyid Muhammad, Persian architects chosen by her. Wikipedia Architectural style: Mughal architecture Area: 27.04 ha (0.1044 sq mi) Owner: Archaeological Survey of India Inscription: 1993 (17th session) Architect: Mirak Mirza Ghiyath Burials: Humayun, Dara Shikoh, Hamida Banu Begum, Bega Begum, Jahandar Shah, Farrukhsiyar, Isa Khan Niazi, Alamgir II, Murad Bakhsh, Murad Mirza, William Stephen Raikes Hodson, Balaji Baji Rao, Ghazi ud-Din Khan Feroze Jung III ', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});
});

app.get("/delhi/rfd",function(req,res){
  res.render("rfd");
  say.speak('The Red Fort is a historic fort in the city of Delhi in India that served as the main zresidence of the Mughal Emperors. Emperor Shah Jahan commissioned zconstruction of the Red Fort on 12 May 1638, when he decided to shift his zcapital from Agra to Delhi. Wikipedia zBuilt: 12 May 1639 – 6 April 1648; (8 years, 10 months and 25 days) zHeight: 18–33 m (59–108 ft) zState Party: India zArchitect: Ustad Ahmad Lahouri zOwners: Mughal Empire (1638–1857), British Empire (1857–1947), Government zof India (1947–) zArchitectural styles: Indo-Islamic architecture, Mughal architecture ', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});
});

app.get("/delhi/qmd",function(req,res){
  res.render("qmd");
  say.speak('The Qutb Minar, also spelled as Qutub Minar and Qutab Minar, is a minaret and "victory tower" that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi, India. Qutb Minar was 73-metres tall before the final, fifth section was added after 1369. Wikipedia Height: 73 m Closed: 1981 Construction: Started by Qutb-ud-din Aibak / completed by his son-in-law Iltutmish Designated: 1993 (17th session) Architectural style: Indo-Islamic architecture Constructed by: Qutb al-Din Aibak ', 0.5, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('Text has been spoken.');
});
});



////////////////////chennei///////////////////////////////////////////
app.get("/chennei",function(req,res){

  res.render("chennei");
});


  app.get("/chennei/mbc",function(req,res){
    res.render("mbc");
    say.speak('Marina Beach is a natural urban beach in Chennai, Tamil Nadu, India, along the Bay of Bengal. The beach runs from near Fort St. George in the north to Foreshore Estate in the south, a distance of 6.0 km, making it the longest natural urban beach in the country. Wikipedia Location: Chennai, Tamil Nadu, India Total length: 13 km (8.1 mi) Maximum width: 437 m (1,434 ft) Length of promenade: 6 km (3.7 mi) Coast: Coromandel, Bay of Bengal', 0.5, (err) => {
      if (err) {
          return console.error(err);
      }

      console.log('Text has been spoken.');
  });
});

  app.get("/chennei/fgc",function(req,res){
    res.render("fgc");
    say.speak('Fort St George is the first English fortress in India, founded in 1644 at the coastal city of Madras, the modern city of Chennai. The construction of the fort provided the impetus for further settlements and trading activity, in what was originally an uninhabited land. Wikipedia Built by: East India Company Function: Fortification Condition: Good Height: 45 metres Architect: Francis Day', 0.5, (err) => {
      if (err) {
          return console.error(err);
      }

      console.log('Text has been spoken.');
  });
});


  app.get("/chennei/gmc",function(req,res){
    res.render("gmc");
    say.speak('The Government Museum or Madras Museum is a museum of human history and culture located in the Government Museum Complex in the neighbourhood of Egmore in Chennai, India. Started in 1851, it is the second oldest museum in India after the Indian Museum in Kolkata and is the tenth oldest Museum in the World.Wikipedia Collection size: 1.7 million Public transit access: Chennai Egmore railway station Number of visitors: 6,02,345 (2018) Established: 1851 Visitors: 602,345 (2018) Owners: Ministry of Culture, Government of India', 0.5, (err) => {
      if (err) {
          return console.error(err);
      }

      console.log('Text has been spoken.');
  });
});


  app.get("/chennei/ac",function(req,res){
    res.render("ac");
    say.speak('Arignar Anna Zoological Park, also known as the Vandalur Zoo, is a zoological garden located in Vandalur, is in the southwestern part of Chennai, Tamil Nadu, about 31 kilometres from the Chennai Central and 15 kilometres from Chennai Airport. Established in 1855, it is the first public zoo in India. Wikipedia Area: 6.03 km² Opened: 24 July 1985 No. of animals: 2,644 (2018) No. of species: 171 (2018)', 0.5, (err) => {
      if (err) {
          return console.error(err);
      }

      console.log('Text has been spoken.');
  });

});


app.listen(process.env.PORT||3000, function() {
  console.log("Server started on port 3000");
});
