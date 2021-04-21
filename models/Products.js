const fs = require('fs');
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
        let productFound = products.find(product => product.id === id)
        return productFound
    },

    findByField: (field, text)=>{
        
        let productFound = products.find(product => product[field] === text)
        return productFound
    },

    createProduct: function (data,file) {

        const productToStore = {
			"id": maxId,
			"name": data.name,
			"price":data.price,
			"discount":data.discount,
			"category":data.category,
			"description":data.description,
			"image": file.filename
		}

        
        products.push(productToStore);
        let productJson=JSON.stringify(products,null,2);
        fs.writeFileSync("./data/productsDataBase.json",productJson);
        return productToStore;
        
    },

    delete: (id)=>{
        let productToSave = products.filter(product => product.id !== id)
        let productJson=JSON.stringify(productToSave,null,2);
        fs.writeFileSync("./data/productsDataBase.json",productJson);
        return true;
    }
}

module.exports = product;