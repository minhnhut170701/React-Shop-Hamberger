let invoices = [
  {id: 1, 
    name: "Burger mỹ", 
    img: "https://jthemes.net/themes/html/testo/files/images/menu/burger-11.jpg",
    pirce: 5.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
   
    {id: 2, 
    name: "Burger thịt cừu", 
    img: "https://jthemes.net/themes/html/testo/files/images/menu/burger-12.jpg",
    pirce: 4.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 3, 
    name: "Buger gà tây", 
    img: "https://jthemes.net/themes/html/testo/files/images/menu/burger-13.jpg",
    pirce: 3.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 4, 
    name: "DOUBLE BURGER", 
    img: "https://jthemes.net/themes/html/testo/files/images/menu/burger-14.jpg",
    pirce: 2.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 5, 
    name: "TURKEY BURGER", 
    img: "https://jthemes.net/themes/html/testo/files/images/menu/burger-15.jpg",
    pirce: 1.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 6, 
    name: "SMOKEY HOUSE", 
    img: "https://jthemes.net/themes/html/testo/files/images/menu/burger-16.jpg",
    pirce: 8.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 7, 
    name: "CLASSIC BURGER", 
    img: "https://jthemes.net/themes/html/testo/files/images/menu/burger-17.jpg",
    pirce: 12.50, 
    decs: 'Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium',
    qty: 1,
  },
  {id: 8, 
    name: "VEGAN BURGER", 
    img: "https://jthemes.net/themes/html/testo/files/images/menu/burger-18.jpg",
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