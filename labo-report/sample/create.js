const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let schema = `
create table pokemonvalue (
  id integer primary key,
  pokemon_id integer,
  HP integer,
  攻撃 integer,
  防御 integer,
  特攻 integer,
  特防 integer,
  素早 integer
);
`
db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
