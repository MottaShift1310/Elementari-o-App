// import React from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { response } = require('express');

const connection = mysql.createPool({  // conexão com o banco 

    host: 'localhost',
    user: 'root',
    password: null,
    database: 'projeto_02'
});

const app = express();

app.get('/tb_adminalunos', function(req, res){  //conexão com a tabela de alunos 

    connection.getConnection(function(err, connection){ 

        connection.query('SELECT * FROM `tb_adminalunos`', function(error, results, fields){ //vai fazer uma consulta na tabela

                if(error) throw error; //se tiver erro ele vai avisar
                res.send(results); // se não tiver, vai retornar a resposta
        });
    });
});

app.listen(3333, ()=>{ // entrar pela porta 3333

    console.log('Entre na porta');
});

// function InApp(){

//     fetch('http://255.255.255.0:3333/tb_adminalunos')
//     .then(response=>response.json())
//     .then(users=>console.warn(users));

// }