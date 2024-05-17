import express from 'express';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import _ from 'lodash';
moment.locale("es")

const routes = express.Router()
const users = [];

routes.get("usuarios", async (req, res)=>{
try {
    const consulta = await axios.get("https://randomuser.me/api/");
    const usuario = consulta.data.results[0];
    const name = usuario.name.first;
    const lastname = usuario.name.last;
    const gender = usaurio.gender;
    const id = uuidv4().slice(0, 8)
    const timestamp = moment().format("MM Do YYYY, hh:mm a")
    
    users.push({name, lastname, gender, id, timestamp})

    const [mujeres, hombres] = _.partition(users, {gender: "famale"});
    //console.log('Mujeres', mujeres);
    //console.log('Hombres', hombres);
    const template = `
    <h5>Mujeres:</h5>
    <ol>
        ${mujeres.map((item)=>`<li>Nombre: ${item.name} - Apellido: ${item.lastname} - Genero: ${item.gender} - ID: ${item.id} - Timestamp: ${item.timestamp}</li>`)}
    </ol>
    <h5>Hombres:</h5>
    <ol>
        ${hombres.map((item)=>`<li>Nombre: ${item.name} - Apellido: ${item.lastname} - Genero: ${item.gender} - ID: ${item.id} - Timestamp: ${item.timestamp}</li>`)}
    </ol>
    `
    
console.log(chalk.blue.bgWhite(template))
    

    res.send(template);
    
    
} catch (error) {
    console.log("error");
}
})



export default routes;