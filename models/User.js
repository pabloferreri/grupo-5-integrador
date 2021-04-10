const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');


const userFilePath = path.resolve(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

let maxId = 0;
users.forEach(element => {
	if(element.id > maxId){ 
		maxId = element.id;
	}
});
maxId++;

const User = {

    findByPk: (id)=>{
        let userFound = users.find(user => user.id === id)
        return userFound
    },

    findByField: (field, text)=>{
        
        let userFound = users.find(user => user[field] === text)
        return userFound
    },

    createUser: function (data,file) {

        const passwordPlainText = data.password;
        const passwordHash = bcryptjs.hashSync(passwordPlainText, 10);

        const userToSave = {
			"id": maxId,
			"name": data.name,
            "lastName": data.lastname,
			"email":data.email,
			"phone":data.phone,
			"password": passwordHash,
			"image": file.filename
		}

        
        users.push(userToSave);
        let userJson=JSON.stringify(users,null,2);
        fs.writeFileSync("./data/usersDataBase.json",userJson);
        return userToSave;
        
    },

    delete: (id)=>{
        let usersToSave = users.filter(user => user.id !== id)
        let userJson=JSON.stringify(usersToSave,null,2);
        fs.writeFileSync("./data/usersDataBase.json",userJson);
        return true;
    }
}

module.exports = User;