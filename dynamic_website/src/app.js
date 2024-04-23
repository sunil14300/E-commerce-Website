const express=require('express');
const hbs=require('hbs')
const app=express();
const mongoose=require('mongoose');
//for contact us
const bodyparser=require('body-parser')

const port=process.env.PORT||5556;
const Details=require("./models/details")
const Slider=require("./models/slider");
const Service = require("./models/service");
const gallery=require("./models/gallery");

//FOR CONTACT US
app.use(bodyparser.urlencoded({
    extended:true
}))

// using router
const routes=require("./routes/main");
app.use('',routes);


//static/css/style.css
app.use('/static',express.static("public"));

//(templete engine)

app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials")

//db connnection
mongoose.connect("mongodb://localhost:27017/Website")


// gallery.create([
//     {
//         img:'static/images/p4.jpeg'
//     },
//     {
//         img:'static/images/p1.jpg'
//     },
//     {
//         img:'static/images/p3.webp'
//     }   
// ])

// Service.create([
//     {
//         icon:'fab fa-accusoft',
//         title:'Provides Best Courses',
//         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nemo soluta assumenda veritatis laboriosam nulla dicta ',
//         linkText:'https://www.learn.com',
//         link:'Check'
//     },
//     {
//         icon:'fab fa-affiliatetheme',
//         title:'Learn Project',
//         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nemo soluta assumenda veritatis laboriosam nulla dicta ',
//         linkText:'https://www.learn.com',
//         link:'Learn'
//     },
//     {
//         icon:'fab fa-affiliatetheme',
//         title:'Learn Project',
//         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nemo soluta assumenda veritatis laboriosam nulla dicta ',
//         linkText:'https://www.learn.com',
//         link:'Learn'
//     }
// ])

// Slider.create([
//     {
//         title:'Learn java in easy manner',
//         subTitle:"java is most popupalr language",
//         imageUrl:"/static/images/p4.jpeg"
//     },
//     {
//         title:'What is monodb',
//         subTitle:"It is most popular database",
//         imageUrl:"/static/images/p3.webp"
//     },
//     {
//         title:'What is node js',
//         subTitle:"Node js is runtime environament to execute javascript outside broweser",
//         imageUrl:"/static/images/p1.jpg"
//     }
// ])


// Details.create({
//     brandName:"Technical Solution",
//     brandIconUrl:"url.dfndfnlflf",
//     links:[
//         {
//             label:'Home',
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/#services_section"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact us",
//             url:"/contact-us"
//         }

//     ]
// })



app.listen(port,()=>{
    console.log("server startrd")
})