/* const fs = require('fs');
const { parse } = require('path');
const path = require('path');


const productFilePath = path.resolve(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));

let maxId = 0;
products.forEach(element => {
	if(element.id > maxId){ 
		maxId = element.id;
	}
});
maxId++;

const product = {

    findByPk: (id)=>{
        console.log(id);
        let productFound = products.find(product => product.id == id);
        console.log(productFound);
        return productFound;
    },

    findByField: (field, text)=>{
        
        let productFound = products.find(product => product[field] === text)
        return productFound
    },

    createProduct: function (data,file) {

        const price = parseInt(data.price);
        const discount = parseInt(data.discount);

        const productToStore = {
			"id": maxId,
			"name": data.name,
			"price": price,
			"discount": discount,
			"category":data.category,
			"description":data.description,
			"image": file.filename,
		}

        
        products.push(productToStore);
        let productJson=JSON.stringify(products,null,2);
        fs.writeFileSync("./data/productsDataBase.json",productJson);
        return productToStore;
        
    },

    delete: (id)=>{
        
        let leftProducts = products.filter(product => product.id != id)
        let productJson=JSON.stringify(leftProducts,null,2);
        fs.writeFileSync("./data/productsDataBase.json",productJson);
        return true;
    }
}

module.exports = product; */