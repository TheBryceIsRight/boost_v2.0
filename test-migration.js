const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

(async () => {
  // open the database
  const db = await sqlite.open({
    filename: './microphones.sqlite',
    driver: sqlite3.Database,
  });

  await db.migrate({ force: true });
  const people = await db.all('select * from person');
  console.log(JSON.stringify(people, null, 4));
})();
