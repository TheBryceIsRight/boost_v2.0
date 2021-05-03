-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (firstName, lastName, email, password) values ('Wanda', 'Maximoff',  'theDarkHold@gmail.com', 'jbyM3&oXvcnmJFL2?~du7U=-&8eXAL*yr)nhshCo');
INSERT INTO Person (firstName, lastName, email, password) values ('The', 'Vision', 'theMindStone@hotmail.com', 'yUf=kqjdmcgH@}oD!!H^cHybZD%],w#Tfw*?.h4}');

-- INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R8', 1);
-- INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R6', 1);
-- INSERT INTO Vehicle (brand, model, ownerId) values('mercedes', 'benz', 2);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;