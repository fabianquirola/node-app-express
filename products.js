const express = require('express');
const router = express.Router();

let products = [{
    "id": "1",
    "title": "Brown eggs",
    "type": "dairy",
    "description": "Raw organic brown eggs in a basket",
    "filename": "0.jpg",
    "height": 600,
    "width": 400,
    "price": 28.1,
    "rating": 4
  }, {
    "id": "2",
    "title": "Sweet fresh stawberry",
    "type": "fruit",
    "description": "Sweet fresh stawberry on the wooden table",
    "filename": "1.jpg",
    "height": 450,
    "width": 299,
    "price": 29.45,
    "rating": 4
  }, {
    "id": "3",
    "title": "Asparagus",
    "type": "vegetable",
    "description": "Asparagus with ham on the wooden table",
    "filename": "2.jpg",
    "height": 450,
    "width": 299,
    "price": 18.95,
    "rating": 3
  }, {
    "id": "4",
    "title": "Green smoothie",
    "type": "dairy",
    "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    "filename": "3.jpg",
    "height": 600,
    "width": 399,
    "price": 17.68,
    "rating": 4
  }, {
    "id": "5",
    "title": "Raw legums",
    "type": "vegetable",
    "description": "Raw legums on the wooden table",
    "filename": "4.jpg",
    "height": 450,
    "width": 299,
    "price": 17.11,
    "rating": 2
  }]



  router.route('/')
    .get((req,res)=>{
        
        res.send(products);
    })
    .post((req,res)=>{
        const obj = req.body;
 
        if(obj){
    
            products.push(obj);
            return res.status(201).send(obj);
        }
    
        res.status(404).send(`${id} not found`);
    })

router.route('/:id')
    .get((req,res)=>{
        const id = req.params.id;
        //const products = ['nodejs','express','javascript','react','angular','java','php'];
        const obj = products.find(obj => obj.id === id);
        if(obj){
            return res.send(obj);
        }
    
        res.status(404).send(`${id} not found`);
    })
    .put((req,res)=>{
        const idp = req.params.id;
        const objb = req.body;
        const obj = products.find(obj => obj.id === idp);
        
        if(obj && objb){
            const index = products.findIndex((obj => obj.id == idp));
            console.log(index);
            products[index] = objb;
        
            return res.send(products);
        }
    
        res.status(404).send(`${idp} not found`);
    })
    .patch((req,res)=>{
        const idp = req.params.id;
        const objb = req.body;
        const obj = products.find(obj => obj.id === idp);
        
        if(!obj){
            return res.status(404).end();
        }
      

        const newProduct = {
            ...products,
            ...patch
        };

        products.splice(index,1,newProduct)
    
        res.status(200).send(products);
    })
    .delete((req,res)=>{
        const idp = req.params.id;
        const objb = req.body;
        const obj = products.find(obj => obj.id === idp);
        if(obj){
            const index = products.findIndex((obj => obj.id == idp));
            products.splice(index,1);
            //return res.send(products);
            return res.status(201).send(products);
        }
    
        res.status(404).send(`${idp} not found`);
    })


    module.exports = router;