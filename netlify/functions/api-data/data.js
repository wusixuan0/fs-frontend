const programs = require('./programs');

// for testing index page; 
// format for GET /music {"id":1,"title":"Scheherazade"}
const buildProgramIndexByLetter = (programs) => {
    const programIndex = {};
    const charCode = Array.from(Array(26)).map((_, i) => i + 65);
    charCode.map((x) => programIndex[String.fromCharCode(x)]=[]);
    
    programs.forEach(program => {        
        const firstLetter = program.program_title[0].toUpperCase();
        music_id_titles = {
          id: program.id,
          title: program.program_title
        }
        programIndex[firstLetter].push(music_id_titles);
    });

    return programIndex;
};
const musicIndexed = buildProgramIndexByLetter(programs);

// for testing item page; sample data from GET /music/:id
const response = {
  "music_title":"Scheherazade",
  "programs":[
  {
    "skater_name": "Meryl Davis / Charlie White",
    "skater_country": "USA",
    "discipline_type": "Ice Dance",
    "program_type": "Free Dance",
    "season": "2013-2014",
    "choreographer_name": null
  },
  {
    "skater_name": "Mao Asada",
    "skater_country": "Japan",
    "discipline_type": "Women",
    "program_type": "Short Program",
    "season": "2011-2012",
    "choreographer_name": "Tatiana Tarasova"
  },
  {
    "skater_name": "Yuna Kim",
    "skater_country": "South Korea",
    "discipline_type": "Women",
    "program_type": "Free Skating",
    "season": "2008-2009",
    "choreographer_name": "David Wilson"
  },
  {
    "skater_name": "Tatiana Totmianina / Maxim Marinin",
    "skater_country": "Russia",
    "discipline_type": "Pairs",
    "program_type": "Free Skating",
    "season": "2004-2005",
    "choreographer_name": null
  },
  {
    "skater_name": "Michelle Kwan",
    "skater_country": "USA",
    "discipline_type": "Men",
    "program_type": "Free Skating",
    "season": "2001-2002",
    "choreographer_name": null
  }
]}

data = {
  programs: musicIndexed, response
}
module.exports = data;