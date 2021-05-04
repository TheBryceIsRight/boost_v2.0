-- Up
CREATE TABLE microphone (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    price INTEGER,
    imageUrl TEXT
);

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


INSERT INTO Microphone (brand, model, price, imageUrl) values('Blue', 'Amber', 99.99, '/microphones/blue-amber.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Blue', 'Bluebird SL', 299.99, '/microphones/bluebird.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Blue', 'Kiwi', 2000, '/microphones/blue-kiwi.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Blue', 'Spark', 399, '/microphones/blue-spark.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Blue', 'Yeti', 130, '/microphones/blue-yeti.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Rode', 'NT-USB Mini', 100.00, '/microphones/nt-usb-mini.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Rode', 'Broadcaster', 350.00, '/microphones/rode-broadcaster.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Rode', 'Podcaster', 145, '/microphones/podcaster.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Rode', 'Nt1', 230, '/microphones/rode-nt1.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Rode', 'Nt1a', 220, '/microphones/rode-nt1a.png');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Rode', 'NT-USB', 135, '/microphones/rode-ntusb.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Rode', 'Podmic', 105, '/microphones/rode-podmic.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Rode', 'Procaster', 130, '/microphones/rode-procaster.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Samson', 'USB', 179, '/microphones/samson-usb.jpeg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Shure', 'Beta 58a', 139, '/microphones/shure-beta-58a.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Shure', 'Beta 87a', 280, '/microphones/shure-beta-87a.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Shure', 'sm7b', 399, '/microphones/shure-sm7b.jpg');
INSERT INTO Microphone (brand, model, price, imageUrl) values('Shure', 'Super-55', 200, '/microphones/shure-super55.jpg');

-- Down
DROP TABLE Microphone;
DROP TABLE Person;
DROP TABLE Vehicle;