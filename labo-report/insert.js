const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
insert into pokemonvalue(pokemon_id,HP,攻撃,防御,特攻,特防,素早)values("3","78","84","78","109","85","100");
`


db.serialize( () => {
	db.run( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "データを追加しました" );
	});
});
