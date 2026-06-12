import kitchen1 from "../assets/products/kitchen1.jpeg";
import kitchen2 from "../assets/products/kitchen2.jpeg";
import kitchen3 from "../assets/products/kitchen3.jpeg";
import wardrobe1 from "../assets/products/wardrobe1.jpeg";
import wardrobe2 from "../assets/products/wardrobe2.jpeg";
import wardrobe3 from "../assets/products/wardrobe3.jpeg";
import tvunit1 from "../assets/products/tvunit1.jpeg";
import tvunit2 from "../assets/products/tvunit2.jpeg";
import tvunit3 from "../assets/products/tvunit3.jpeg";
import interior1 from "../assets/products/interior1.jpeg";
import interior2 from "../assets/products/interior2.jpeg";
import interior3 from "../assets/products/interior3.jpeg";
import plywood1 from "../assets/products/plywood1.jpeg";
import plywood2 from "../assets/products/plywood2.jpeg";
import plywood3 from "../assets/products/plywood3.jpeg";


const products = [
  
  {
  id: 1,
  name: "Modular Kitchen",
  category: "Kitchen",
  bestseller: true,
  image:kitchen1,
  images: [kitchen1, kitchen2, kitchen3],
  description: "Custom modular kitchens designed for modern homes.",
  features: [
    "Premium Quality Materials",
    "Customized Design",
    "Professional Installation",
    "Warranty Support"
  ],
  specifications: {
  Material: "Premium Plywood",
  Finish: "Matte Laminate",
  Warranty: "4 Years",
  Delivery: "20 Days"
  }
},

  {
    id: 2,
    name: "Wardrobe",
    category: "Wardrobe",
    bestseller: true,
    image: wardrobe1,
    images: [wardrobe1, wardrobe2, wardrobe3],
    description:
      "Premium wardrobes tailored to your storage needs.",
      features: [
    "Premium Quality Materials",
    "Customized Design",
    "Professional Installation",
    "Warranty Support"],
    specifications: {
      Material: "Premium Plywood",
      Finish: "Matte Laminate",
      Warranty: "3 Years",
      Delivery: "25 Days"
    }

    
  },

  {
    id: 3,
    name: "TV Unit",
    category: "TV Unit",
    bestseller: false,
    image: tvunit1,
    images: [tvunit1, tvunit2, tvunit3],
    description:
      "Modern TV units with elegant finishes.",
    features: [
    "Premium Quality Materials",
    "Customized Design",
    "Professional Installation",
    "Warranty Support"],
    specifications: {
      Material: "Premium Plywood",
      Finish: "Matte Laminate",
      Warranty: "4 Years",
      Delivery: "20 Days"
    }
  },

  {
    id: 4,
    name: "Interior Work",
    category: "Interior",
    bestseller: false,
    image: interior1,
    images: [interior1, interior2, interior3],
    description:
      "Complete interior solutions for your home.",
    features: [
    "Premium Quality Materials",
    "Customized Design",
    "Professional Installation",
    "Warranty Support"],
    specifications: {
      Material: "Premium Plywood",
      Finish: "Matte Laminate",
      Warranty: "2 Years",
      Delivery: "30 Days"
    }
  },

  {
    id: 5,
    name: "Plywood Furniture",
    category: "Plywood",
    bestseller: false,
    image: plywood1,
    images: [plywood1, plywood2, plywood3],
    description:
      "Durable plywood furniture crafted with quality.",
    features: [
    "Premium Quality Materials",
    "Customized Design",
    "Professional Installation",
    "Warranty Support"],
    specifications: {
      Material: "Premium Plywood",
      Finish: "Matte Laminate",
      Warranty: "4 Years",
      Delivery: "15 Days"
    }
  },
];

export default products;