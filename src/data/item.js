import img1 from "../images/burger-mi.jpg";
import img2 from "../images/burger-thit-cuu.jpg";
import img3 from "../images/burger-ga-tay.jpg";
import img4 from "../images/double-burger.jpg";
import img5 from "../images/turkey-burger.jpg";
import img6 from "../images/smokey-house.jpg";
import img7 from "../images/classic-burger.jpg";
import img8 from "../images/vegan-burger.jpg";

let invoices = [
  {id: 1, 
    name: "Burger mỹ", 
    img: img1,
    pirce: 5.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
   
    {id: 2, 
    name: "Burger thịt cừu", 
    img: img2,
    pirce: 4.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 3, 
    name: "Buger gà tây", 
    img: img3,
    pirce: 3.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 4, 
    name: "DOUBLE BURGER", 
    img: img4,
    pirce: 2.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 5, 
    name: "TURKEY BURGER", 
    img: img5,
    pirce: 1.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 6, 
    name: "SMOKEY HOUSE", 
    img: img6,
    pirce: 8.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 7, 
    name: "CLASSIC BURGER", 
    img: img7,
    pirce: 12.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 8, 
    name: "VEGAN BURGER", 
    img: img8,
    pirce: 20.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  ];
  
  export function getInvoices() {
    return invoices;
  }
  export function getInvoice(number) {
    return invoices.find(
      (invoice) => invoice.id === number
    );
  }

  export default invoices;