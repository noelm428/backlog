CREATE DATABASE Backlog;

CREATE TABLE books(book_id SERIAL PRIMARY KEY, title VARCHAR(50),image TEXT, description TEXT, writer VARCHAR(25));
INSERT INTO books( title, image, description, writer ) VALUES ( '
Yu Yu Hakusho', 'https://www.rightstufanime.com/images/productImages/9781569319048_manga-Yu-Yu-Hakusho-Graphic-Novel-1-Goodbye-Material-World-primary?resizeid=5&resizeh=1000&resizew=1000','It was a typical day for Yusuke: go to school at noon, get kicked out by the teacher... fight with his rival Kuwabara, and head for home in time to wake his mom from her drunken stupor. But when he throws himself in front of a car to save a little kids life. He becomes Tokyos toughest teenage ghost!','Yoshihiro Togashi' );
INSERT INTO books ( title, image, description, writer ) VALUES ( 'title','image','description','writer' );