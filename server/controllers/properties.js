module.exports={

    insertUser:"insert into  usuario (username,email,contraseña,genero,admin,edad) values($1,$2,$3,$4,false,$5) returning *",
    login:"select * from usuario where email=$1",
    update:"update users  set informacion=$1 where email=$2",
    con:{
        user: 'postgres',
        host: 'localhost',
        database: 'formulario-App',
        password: 'Daniela21',
        port: 5432,
      },
    select:"select (informacion) from users where email=$1"
    
    }