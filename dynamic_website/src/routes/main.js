const express=require('express');
const {route}=require('express/lib/application')

const async=require('hbs/lib/async');


const Contact=require("../models/contact")
const Details=require("../models/details");
const slider = require('../models/slider');
const Service=require("../models/service");

// const gallery=require("../models/gallery");
const Gallery = require('../models/gallery');

const routes=express.Router();

routes.get("/",async (req,res)=>{
   const details= await Details.findOne({"_id":"662641f6d478f9fd20e8df13"})
   const slides=await slider.find();
//    console.log(details)
//    console.log(slides);

    const services=await Service.find();
    


    res.render("index",{
        details:details,
        slides:slides,
        services:services
    });
});

routes.get("/gallery",async (req,res)=>{
    const details= await Details.findOne({"_id":"662641f6d478f9fd20e8df13"})
const gallery=await Gallery.find();
// console.log(gallery)
    res.render("gallery",{
        details:details,
        gallery:gallery
    })
})

1
//process contact form 
routes.post("/process-contact-form", async (req,res)=>{
    console.log("hello ");
    console.log(req.body)
    //save the data to db
    try{
        const data=await Contact.create(req.body)
        console.log(data);
        res.redirect("/");
    }
    catch(e){
        res.redirect("/")
    }
})

module.exports=routes;