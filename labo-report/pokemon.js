const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const message = "Hello world";
  res.render('show', { mes: message });
});

/*ポケモン図鑑、種族値のinnerjoin結果の表示*/
app.get("/innerjoin", (req, res) => {
  db.serialize(() => {
    db.all("select pokemondb.id, pokemondb.name, pokemondb.type, pokemonvalue.HP, pokemonvalue.攻撃, pokemonvalue.防御, pokemonvalue.特攻, pokemonvalue.特防, pokemonvalue.素早 from pokemondb inner join pokemonvalue on pokemondb.id = pokemonvalue.pokemon_id;", (error, data) => {
      if (error) {
        res.render('show', { mes: "エラーです" });
      }
      res.render('innerjoin', { data: data });
    })
  })
});

/*ポケモン種族値の表示*/
app.get("/pokemonvalue", (req, res) => {
  db.serialize(() => {
    db.all("select id, pokemon_id, HP, 攻撃, 防御, 特攻, 特防, 素早 from pokemonvalue;", (error, data) => {
      if (error) {
        res.render('show', { mes: "エラーです" });
      }
      res.render('value', { data: data });
    })
  })
});

/*ポケモン図鑑の表示*/
app.get("/pokemondb", (req, res) => {
  db.serialize(() => {
    db.all("select id, name, type from pokemondb;", (error, data) => {
      if (error) {
        res.render('show', { mes: "エラーです" });
      }
      res.render('pokemonselect', { data: data });
    })
  })
});

/*ポケモン図鑑へのinsertを行う*/
app.get("/my-insert", (req, res) => {

  x = req.query.pokename;//モンスター名の取得
  y = req.query.poketype;//タイプの取得

  console.log(x);
  console.log(y);

  const sql = 'insert into pokemondb(name,type)values(?,?);';
  db.run(sql, [x, y], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("データを追加しました");

    db.all("select id, name, type from pokemondb;", (error, data) => {
      if (error) {
        res.render('show', { mes: "エラーです" });
      }
      res.render('pokemonselect', { data: data });
    })
  });

});

/*ポケモン図鑑への指定したidの削除*/
app.get("/delete", (req, res) => {
  let sql = `
delete from pokemondb where id=?;
`
  db.serialize(() => {
    db.run(sql, [req.query.pokeid], (error, row) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      console.log("データを削除しました");

      db.all("select id, name, type from pokemondb;", (error, data) => {
      if (error) {
        res.render('show', { mes: "エラーです" });
      }
      res.render('pokemonselect', { data: data });
    })
    });
  });

});

/*ポケモン種族値への登録*/
app.get("/insert-value", (req, res) => {

  const id = req.query.pokeid;//idの取得
  const h = req.query.pokehp;//HPの取得
  const a = req.query.pokeA;//攻撃の取得
  const b = req.query.pokeB;//防御の取得
  const c = req.query.pokeC;//特攻の取得
  const d = req.query.pokeD;//特防の取得
  const s = req.query.pokeS;//素早の取得


  console.log(id);
  console.log(h);

  const sql = 'insert into pokemonvalue(pokemon_id,HP,攻撃,防御,特攻,特防,素早)values(?,?,?,?,?,?,?);';
  db.run(sql, [id, h, a, b, c, d, s], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("データを追加しました");

    db.all("select id, pokemon_id, HP, 攻撃, 防御, 特攻, 特防, 素早 from pokemonvalue;", (error, data) => {
      if (error) {
        res.render('show', { mes: "エラーです" });
      }
      res.render('value', { data: data });
    })
  });

});

/*ポケモン種族値への指定したidの削除*/
app.get("/delete-value", (req, res) => {
  let sql = `
delete from pokemonvalue where id=?;
`
  db.serialize(() => {
    db.run(sql, [req.query.pokeval], (error, row) => {
      if (error) {
        console.log('Error: ', error);
        return;
      }
      console.log("データを削除しました");

      db.all("select id, pokemon_id, HP, 攻撃, 防御, 特攻, 特防, 素早 from pokemonvalue;", (error, data) => {
      if (error) {
        res.render('show', { mes: "エラーです" });
      }
      res.render('value', { data: data });
    })
    });
  });

});

/*接続結果*/
app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
