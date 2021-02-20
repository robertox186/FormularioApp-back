module.exports={

    insertUser:"insert into  users (varnames,email,password,edad,informacion) values($1,$2,$3,$4,$5) returning *",
    login:"select * from users where email=$1",
    update:"update users  set informacion=$1 where email=$2",
    con:"",
    select:"select (informacion) from users where email=$1"
    
    }