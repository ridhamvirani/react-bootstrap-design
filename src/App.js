import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './Media.css'

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Navbars from './Components/Navbars';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Ourteam from './Components/Ourteam';
import Projects from './Components/Projects';
import FAQ from './Components/Faq';
import Contactus from './Components/Contactus';
import Shop from './Components/Shop';
import Partners from './Components/Partners';
import Getintouch from './Components/Getintouch';
import Blog from './Components/Blog';


// Menu-submenu
const menuname = [
  { menu: "Home", route: "/home", submenu: [
    {sub:"Main Home",subroute:""}, 
    {sub:"Studio Light",subroute:""}, 
    {sub:"Portrait categories",subroute:""},
    {sub:"Studio Dark",subroute:""},
    {sub:"Shop Minimal",subroute:""},
    {sub:"Portrait Masony",subroute:""},
    {sub:"Architech Portfolio",subroute:""},
    {sub:"Shop Home",subroute:""},
    {sub:"Architech Company",subroute:""},
    {sub:"Horizontal Portfolio",subroute:""},
    {sub:"Landing",subroute:""}
    ]  
  },

  { menu: "page", route: null, submenu: [
    {sub:"About Us",subroute:"/aboutus"}, 
    {sub:"Contact us",subroute:"/contactus"},
    {sub:"Faq",subroute:"/faq"},
    {sub:"Get In Touch",subroute:"/gettouch"},
    {sub:"Our Team",subroute:"/teamus"},
    {sub:"Our Partners",subroute:"/partners"}, 
    {sub:"Our Projects",subroute:"/Projects"}, 
     ] },


  { menu: "Portfolio", route: null, submenu: [] },
  { menu: "Blog", route: "/blog", submenu: [] },
  { menu: "Shop", route: "/shop", submenu: [] }
];
// slider data
const sliderimg = [
  {
    image: require('./Img/asset 1.jpeg'),
    subsame: "Interior Design",
    slidename: "Discover Inspired Intrior Designs",
    slidedesc: "We believe that a well-designed space can have a profound impact quality life.",
    slidebtn: "view Details",
    borderimg: require('./Img/asset 2.png')
  },
  {
    image: require('./Img/asset 3.jpeg'),
    subsame: "Interior Design",
    slidename: "Elegant Modern Minimalist Charm",
    slidedesc: "We believe that a well-designed space can have a profound impact quality life.",
    slidebtn: "view Details",
    borderimg: require('./Img/asset 2.png')
  },
  {
    image: require('./Img/asset 4.jpeg'),
    subsame: "Interior Design",
    slidename: "Inspire The Best Interior Design",
    slidedesc: "We believe that a well-designed space can have a profound impact quality life.",
    slidebtn: "view Details",
    borderimg: require('./Img/asset 2.png')
  }];

// Inspiration2
const inspiration2=[
  {img:require('./Img/asset 89.png'),name:"Interior design",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus"},
  {img:require('./Img/asset 90.png'),name:"Visualization",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus"},
  {img:require('./Img/asset 91.png'),name:"Exterior design",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus"},
  {img:require('./Img/asset 92.png'),name:"Urban planning",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus"},
  {img:require('./Img/asset 93.png'),name:"Construction",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus"},
  {img:require('./Img/asset 94.png'),name:"3D Models",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus"},
  {img:require('./Img/asset 95.png'),name:"Interior design",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus"},
  {img:require('./Img/asset 96.png'),name:"House plans",desc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus"},
]

// review 
const Reviews = [

  {
    same: "What Other Says",
    feedback: "“Voluptatem accusantium ed ut perspiciatis unde omnis iste natus error sit voluptatem. Cusantium natus error sit omnis iste natus error sit ”",
    feedbacker: "Loman Segal"
  },
  {
    same: "What Other Says",
    feedback: "“Cusantium natus error sit omnis iste natus error sit voluptatem accusantium. Sed ut perspiciatis unde omnis iste natus error sit volupt atem uzem.”",
    feedbacker: "Nick Tubon"
  },
  {
    same: "What Other Says",
    feedback: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem cusantium natus error sit omnis iste natus error sit voluptatem accusac ntium uli.”",
    feedbacker: "Ellena Simon"
  }

]

// Inspiration Everyday
const interiordata = [
  {
    img: require('./Img/asset 66.jpeg'),
    title: "Urban Interior, Architecture",
    desc: "Sed ut perspiciatis unde omnis isteutl natus lap sit errorlo, voluptatem aicus anti um natus error sitomnti is istet.", readbtn: "read more"
  },
  {
    img: require('./Img/asset 68.jpeg'),
    title: "Extravagante Room Design",
    desc: "Sed ut perspiciatis unde omnis isteutl natus lap sit errorlo, voluptatem aicus anti um natus error sitomnti is istet.", readbtn: "read more"
  },
  {
    img: require('./Img/asset 69.jpeg'),
    title: "Choose the Right Chair for you",
    desc: "Sed ut perspiciatis unde omnis isteutl natus lap sit errorlo, voluptatem aicus anti um natus error sitomnti is istet.", readbtn: "read more"
  },
  {
    img: require('./Img/asset70.jpeg'),
    title: "Garden Design and Decoration",
    desc: "Sed ut perspiciatis unde omnis isteutl natus lap sit errorlo, voluptatem aicus anti um natus error sitomnti is istet.", readbtn: "read more"
  }
]

// about us
const aboutdata = [

  { image: require('./Img/asset 123.jpeg'), projectname: "Architech Project", projectdetail: "Sed ut perspiciatis unde omnis iste natus eror sit voluptatem accusantium natusei", readbtn: "read more" },
  { image: require('./Img/asset 122.jpeg'), projectname: "Curved Shapes", projectdetail: "Sed ut perspiciatis unde omnis iste natus eror sitvoluptatem accusantium natusei", readbtn: "read more" },
  { image: require('./Img/asset 124.jpeg'), projectname: "Vertigo", projectdetail: "Sed ut perspiciatis unde omnis iste natus eror sit voluptatem accusantium natusei", readbtn: "read more" }
]

const aboutracio = [
  { percentage: 52, dept: "Interiro Design", desc: "Sed ut perspiciatis underet omnis iste natus error sit" },
  { percentage: 64, dept: "Visualization", desc: "Sed ut perspiciatis underet omnis iste natus error sit" },
  { percentage: 78, dept: "Urban planning", desc: "Sed ut perspiciatis underet omnis iste natus error sit" },
  { percentage: 62, dept: "Projects", desc: "Sed ut perspiciatis underet omnis iste natus error sit" }
]

// team 
const teams = [
  { memberimg: require('./Img/asset 97.jpeg'), authority: "DESIGNER", name: "Marina Morelo", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 98.jpeg'), authority: "DESIGNER", name: "Marina Morelo", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 99.jpeg'), authority: "DESIGNER", name: "Marina Morelo", social: ["Instagram", "Twitter", "Linkedin"] },

  {memberimg: require('./Img/asset 100.jpeg'), authority: "DESIGNER",name: "Marina Morelo", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 125.jpg'), authority: "COPYRIGHTER", name: "Julia Lewis", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 126.jpg'), authority: "MANAGER", name: "Anna Pierce", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 127.jpg'), authority: "DIRECTOR", name: "Gregory Scott", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 128.jpg'), authority: "DESIGNER", name: "Ruth Woods", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 129.jpg'), authority: "ARCHITECt", name: "Janet Guzman", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 130.jpg'), authority: "DEVELOPER", name: "Frank Fostre", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 131.jpg'), authority: "DESIGNER", name: "Cynthia Brewer", social: ["Instagram", "Twitter", "Linkedin"] },

  { memberimg: require('./Img/asset 132.jpg'), authority: "COPYRIGHTER", name: "Charles Cox", social: ["Instagram", "Twitter", "Linkedin"] },

]

// Partners 
const partners=[
  require('./Img/Client-page-img-1.png'),
  require('./Img/Client-page-img-2.png'),
  require('./Img/Client-page-img-3.png'),
  require('./Img/Client-page-img-4.png'),
  require('./Img/Client-page-img-5.png'),
  require('./Img/Client-page-img-6.png'),
  require('./Img/Client-page-img-7.png'),
  require('./Img/Client-page-img-8.png'),
  require('./Img/Client-page-img-9.png'),
  require('./Img/Client-page-img-10.png'),
  require('./Img/Client-page-img-11.png'),
  require('./Img/Client-page-img-12.png'),
  require('./Img/Client-page-img-13.png'),
  require('./Img/Client-page-img-14.png'),
  require('./Img/Client-page-img-15.png'),
  require('./Img/Client-page-img-16.png'),
  require('./Img/Client-page-img-17.png'),
  require('./Img/Client-page-img-18.png'),
  require('./Img/Client-page-img-19.png'),
  require('./Img/Client-page-img-20.png'),
]

// Shop
const shopitems=[
  {img:require('./Img/asset 143.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 144.jpg'),itemname:"Modern Lamp",price:95},
  {img:require('./Img/asset 145.jpg'),itemname:"Small Table",price:108},
  {img:require('./Img/asset 146.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 147.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 148.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 149.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 150.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 151.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 152.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 153.jpg'),itemname:"Lorena Chair",price:220},
  {img:require('./Img/asset 154.jpg'),itemname:"Lorena Chair",price:220},
]
function App() {


  return (
    <>
      <Navbars menu={menuname} />

      <Routes>
        <Route path="" element={<Home feed={Reviews} slider={sliderimg} team={teams} interior={interiordata} inspiration2={inspiration2} />}></Route>
        <Route path="/home" element={<Home feed={Reviews} slider={sliderimg} team={teams} interior={interiordata} inspiration2={inspiration2} />}></Route>
        <Route path='/aboutus' element={<Aboutus aboutdata={aboutdata} aboutracio={aboutracio} />}></Route>
        <Route path='/contactus' element={<Contactus />}></Route>
        <Route path='/teamus' element={<Ourteam teams={teams} />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/Faq' element={<FAQ />}></Route>
        <Route path='/shop' element={<Shop shopdata={shopitems} />}></Route>
        <Route path='/partners' element={<Partners partner={partners} />}></Route>
        <Route path='/gettouch' element={<Getintouch />}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>

      <Footer />


    </>
  );
}

export default App;
