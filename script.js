document.documentElement.classList.add("js");

const restaurantInfo = {
  name: "Sai Silver Dum Biryani",
  tagline: "Authentic Hyderabadi Dum Biryani Experience",
  rating: 4.4,
  reviewCount: 192,
  priceRange: "\u20B9200\u2013400",
  phone: "089194 43535",
  smsPhone: "+918919443535",
  email: "contact@saisilverbiryani.com",
  address: "FMRC+3Q9, Vijayawada Rd, Sanath Nagar, Vijayawada, Andhra Pradesh 520007",
  openingTime: "11:30 AM",
  closingTime: "11:30 PM",
  services: ["Dine-in", "Drive-through", "No-contact delivery"],
};



const menuItems = [
  {
    "category": "Signature Biryanis",
    "icon": "\ud83d\udc51",
    "count": 22,
    "items": [
      {
        "id": 1003,
        "zomatoId": "ctl_749433042",
        "name": "Chicken Dum Biryani",
        "price": 320,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/5c7/fedc6ea540ed5f1ee56528520f4a35c7.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.1,
        "votes": "239 votes",
        "portions": [
          {
            "name": "Mini Pack",
            "price": 320
          },
          {
            "name": "Single",
            "price": 399
          },
          {
            "name": "Couple Pack",
            "price": 599
          },
          {
            "name": "Family Pack",
            "price": 930
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1004,
        "zomatoId": "ctl_749331663",
        "name": "Chicken Fry Biryani",
        "price": 320,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/3ab/ba2dc1e1e5832a27aecc11d6beed53ab.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 3.8,
        "votes": "253 votes",
        "portions": [
          {
            "name": "Mini Pack",
            "price": 320
          },
          {
            "name": "Single",
            "price": 409
          },
          {
            "name": "Couple Pack",
            "price": 599
          },
          {
            "name": "Family Pack",
            "price": 930
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1002,
        "zomatoId": "ctl_749331661",
        "name": "Chicken 65 Biryani",
        "price": 449,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/064/d92b46d58659e90df68bcee9e8fdf064.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.4,
        "votes": "16 votes",
        "portions": [
          {
            "name": "Single",
            "price": 449
          },
          {
            "name": "Couple Pack",
            "price": 659
          },
          {
            "name": "Family Pack",
            "price": 949
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1005,
        "zomatoId": "ctl_749331664",
        "name": "Chicken Joint Biryani",
        "price": 469,
        "description": "[Serves 1-2  person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/a89/98c945cae68ee797f78481bd37624a89.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [
          {
            "name": "Single",
            "price": 469
          },
          {
            "name": "Couple Pack",
            "price": 699
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1006,
        "zomatoId": "ctl_551317816",
        "name": "Chicken Kalmi Biryani",
        "price": 459,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/067/29b915f3a9869ed5298ab731dda17067.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1007,
        "zomatoId": "ctl_749331665",
        "name": "Chicken Lollypop Biryani",
        "price": 440,
        "description": "A flavorful biryani featuring 4 crispy chicken lollypop pieces served with fragrant, spiced basmati rice. Perfectly balanced with rich spices and tender chicken, this hearty meal serves 1-2 people.",
        "image": "https://b.zmtcdn.com/data/dish_photos/d6c/559b62b41e3aef72acd4d9998744fd6c.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.0,
        "votes": "50 votes",
        "portions": [
          {
            "name": "Single",
            "price": 440
          },
          {
            "name": "Couple Pack",
            "price": 680
          },
          {
            "name": "Family Pack",
            "price": 949
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1008,
        "zomatoId": "ctl_749331666",
        "name": "Chicken Moghalai Biryani",
        "price": 459,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/b85/0e1f6f61739d634006ca7ae97a34bb85.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 3.9,
        "votes": "29 votes",
        "portions": [
          {
            "name": "Single",
            "price": 459
          },
          {
            "name": "Couple Pack",
            "price": 659
          },
          {
            "name": "Family Pack",
            "price": 949
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1009,
        "zomatoId": "ctl_749331668",
        "name": "Chicken Tikka Biryani",
        "price": 459,
        "description": "[Serves 1-2  person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/ca7/8b3d3629e19ed0f25fee89e8802aaca7.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [
          {
            "name": "Single",
            "price": 459
          },
          {
            "name": "Couple Pack",
            "price": 659
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1010,
        "zomatoId": "ctl_749331670",
        "name": "Chicken Wings Biryani",
        "price": 449,
        "description": "[Serves 1-2person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/e52/4f9be149ecbc87a72421fafbbec89e52.jpg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [
          {
            "name": "Single",
            "price": 449
          },
          {
            "name": "Couple Pack",
            "price": 659
          },
          {
            "name": "Family Pack",
            "price": 949
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1011,
        "zomatoId": "ctl_614141789",
        "name": "Dum Biryani 2 Pieces",
        "price": 330,
        "description": "[Non Veg Preparation] [serves 1 person]",
        "image": "",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 3.7,
        "votes": "32 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1015,
        "zomatoId": "ctl_625610749",
        "name": "Mini Fry Biryani",
        "price": 330,
        "description": "[Non Veg Preparation] [serves 1 person]",
        "image": "",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.4,
        "votes": "10 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1021,
        "zomatoId": "ctl_749331681",
        "name": "Tandoori Chicken Biryani",
        "price": 459,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/de7/ab0a5823848acac5e91ac3392ef56de7.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [
          {
            "name": "Single",
            "price": 459
          },
          {
            "name": "Couple Pack",
            "price": 659
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1018,
        "zomatoId": "ctl_749331677",
        "name": "Paneer Biriyani",
        "price": 299,
        "description": "[Serves 1-2  person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/bbb/2686b9d9a784107d74922caac3bb9bbb.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "97 votes",
        "portions": [
          {
            "name": "Mini Pack",
            "price": 299
          },
          {
            "name": "Single",
            "price": 399
          },
          {
            "name": "Couple Pack",
            "price": 599
          },
          {
            "name": "Family Pack",
            "price": 889
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1014,
        "zomatoId": "ctl_794579278",
        "name": "Kaju Paneer Biryani",
        "price": 449,
        "description": "A rich and aromatic biryani combining soft paneer cubes and crunchy cashews [kaju] with fragrant basmati rice and traditional spices. Creamy, nutty, and flavorful.",
        "image": "https://b.zmtcdn.com/data/dish_photos/1e8/9ab1b5598b5de21457df24de3943a1e8.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 5,
        "votes": "8 votes",
        "portions": [
          {
            "name": "Single",
            "price": 449
          },
          {
            "name": "Couple Pack",
            "price": 659
          },
          {
            "name": "Family Pack",
            "price": 929
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1013,
        "zomatoId": "ctl_749331674",
        "name": "Kaju Biryani",
        "price": 439,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/c38/64574b32fbb97541defab30db83c1c38.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.6,
        "votes": "5 votes",
        "portions": [
          {
            "name": "Single",
            "price": 439
          },
          {
            "name": "Couple Pack",
            "price": 639
          },
          {
            "name": "Family Pack",
            "price": 949
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1016,
        "zomatoId": "ctl_749331675",
        "name": "Mushroom Biriyani",
        "price": 399,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/2db/ab7c255db160d3d4429a4a1b67af62db.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 3.7,
        "votes": "20 votes",
        "portions": [
          {
            "name": "Single",
            "price": 399
          },
          {
            "name": "Couple Pack",
            "price": 599
          },
          {
            "name": "Family Pack",
            "price": 889
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1020,
        "zomatoId": "ctl_749331680",
        "name": "Sai Silver Special Veg Biryani",
        "price": 429,
        "description": "[Serves 1-2 person]",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "5 votes",
        "portions": [
          {
            "name": "Single",
            "price": 429
          },
          {
            "name": "Couple Pack",
            "price": 649
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1022,
        "zomatoId": "ctl_749331682",
        "name": "Veg Biryani",
        "price": 279,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/90a/604653396151d6fdd64884f2d2ee790a.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.3,
        "votes": "46 votes",
        "portions": [
          {
            "name": "Mini Pack",
            "price": 279
          },
          {
            "name": "Single",
            "price": 359
          },
          {
            "name": "Couple Pack",
            "price": 499
          },
          {
            "name": "Family Pack",
            "price": 859
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1012,
        "zomatoId": "ctl_749331671",
        "name": "Egg Biryani",
        "price": 349,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/c1a/0724bfa444d32437e5cabe99da111c1a.jpg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.7,
        "votes": "5 votes",
        "portions": [
          {
            "name": "Single",
            "price": 349
          },
          {
            "name": "Couple Pack",
            "price": 400
          },
          {
            "name": "Family Pack",
            "price": 849
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1001,
        "zomatoId": "ctl_749331660",
        "name": "Biryani Rice",
        "price": 299,
        "description": "[Serves 1-2 person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/7d0/2884def54e40a84d9ad961ec255567d0.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.3,
        "votes": "15 votes",
        "portions": [
          {
            "name": "Single",
            "price": 299
          },
          {
            "name": "Couple Pack",
            "price": 419
          },
          {
            "name": "Family Pack",
            "price": 699
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1017,
        "zomatoId": "ctl_749331676",
        "name": "Panasakaya Dum Biryani",
        "price": 399,
        "description": "Delicious authentic panasakaya dum biryani prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.5,
        "votes": "26 votes",
        "portions": [
          {
            "name": "Single",
            "price": 399
          },
          {
            "name": "Couple Pack",
            "price": 599
          },
          {
            "name": "Family Pack",
            "price": 889
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1019,
        "zomatoId": "ctl_749331679",
        "name": "Sai Silver Chicken Spl Biryani",
        "price": 449,
        "description": "[Serves 1-2 person]",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "39 votes",
        "portions": [
          {
            "name": "Single",
            "price": 449
          },
          {
            "name": "Couple Pack",
            "price": 659
          },
          {
            "name": "Family Pack",
            "price": 959
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      }
    ]
  },
  {
    "category": "Couple & Family Packs",
    "icon": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",
    "count": 9,
    "items": [
      {
        "id": 1088,
        "zomatoId": "ctl_766308370",
        "name": "Chicken Dum Biryani Couple Pack",
        "price": 599,
        "description": "[Serves 2-3 persons]",
        "image": "",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.0,
        "votes": "36 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1089,
        "zomatoId": "ctl_766308371",
        "name": "Chicken Fry Biryani Couple Pack",
        "price": 599,
        "description": "[Serves 2-3 persons]",
        "image": "",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.6,
        "votes": "18 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1090,
        "zomatoId": "ctl_766308373",
        "name": "Chicken Joint Couple Pack",
        "price": 649,
        "description": "[Serves 2-3 persons]",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1091,
        "zomatoId": "ctl_766308374",
        "name": "Chicken Lollypop Biryani Couple Pack",
        "price": 649,
        "description": "[Serves 2-3 persons]",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1092,
        "zomatoId": "ctl_766308375",
        "name": "Chicken Mogalai Biryani Couple Pack",
        "price": 649,
        "description": "[Serves 2-3 persons]",
        "image": "https://b.zmtcdn.com/data/dish_photos/ecf/a0e956ad1479d0130286c698b0ebcecf.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1093,
        "zomatoId": "ctl_766308377",
        "name": "Chicken Tikka Couple Pack",
        "price": 679,
        "description": "[Serves 2-3 persons]",
        "image": "",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1094,
        "zomatoId": "ctl_766308379",
        "name": "Chicken Wings Biryani Couple Pack",
        "price": 649,
        "description": "[Serves 2-3 persons]",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1095,
        "zomatoId": "ctl_766308380",
        "name": "COUPLE PACK Tandouri Chicken Biryani",
        "price": 649,
        "description": "[Serves 2-3 persons]",
        "image": "",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1096,
        "zomatoId": "ctl_766308381",
        "name": "Sai Silver Sp Chicken Couple Pack",
        "price": 649,
        "description": "[Serves 2-3 persons]",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "8 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      }
    ]
  },
  {
    "category": "Chicken Starters",
    "icon": "\ud83c\udf57",
    "count": 19,
    "items": [
      {
        "id": 1031,
        "zomatoId": "ctl_537793261",
        "name": "Chicken 65",
        "price": 359,
        "description": "Delicious authentic chicken 65 prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/ac1/56a45e821fb43826e925305042f97ac1.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1030,
        "zomatoId": "ctl_537793260",
        "name": "Chicken 555",
        "price": 359,
        "description": "Delicious authentic chicken 555 prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/470/0c724967d019d285c315018bc4428470.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Spicy",
        "rating": 4.4,
        "votes": "6 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1033,
        "zomatoId": "ctl_537793262",
        "name": "Chicken Fry",
        "price": 339,
        "description": "Delicious authentic chicken fry prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/554/6f9cc87744cb495c5f84d71d05527554.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 3.6,
        "votes": "15 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1034,
        "zomatoId": "ctl_537793263",
        "name": "Chicken Lollypops",
        "price": 359,
        "description": "Chicken Lollipop",
        "image": "https://b.zmtcdn.com/data/dish_photos/dc1/31e5152cff565c04e5a07dfcea5d5dc1.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 3.9,
        "votes": "17 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1035,
        "zomatoId": "ctl_537793264",
        "name": "Chicken Majestick",
        "price": 359,
        "description": "Delicious authentic chicken majestick prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/47c/136998d05b0f8f666580f347417b347c.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 3.5,
        "votes": "10 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1037,
        "zomatoId": "ctl_537793266",
        "name": "Chicken Pakodi",
        "price": 359,
        "description": "Delicious authentic chicken pakodi prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/7b5/f895c0fa56884953ae28fd40551077b5.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.1,
        "votes": "8 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1039,
        "zomatoId": "ctl_537793268",
        "name": "Chilli Chicken",
        "price": 359,
        "description": "Delicious authentic chilli chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/9f8/f639dcb9209366ac0d8a34ac88c499f8.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Spicy",
        "rating": 4.5,
        "votes": "12 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1046,
        "zomatoId": "ctl_537793271",
        "name": "Pepper Chicken",
        "price": 359,
        "description": "Delicious authentic pepper chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/96f/8f66ac4800c7acfeb5a53b9c8d55696f.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1045,
        "zomatoId": "ctl_708157633",
        "name": "Lemon Chicken",
        "price": 369,
        "description": "Delicious authentic lemon chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/37f/d4fc0ed348d1f096b535b6784c97137f.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1042,
        "zomatoId": "ctl_551317828",
        "name": "Garlic Chicken",
        "price": 359,
        "description": "Delicious authentic garlic chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/67c/e332379aedd22cb82019826f5a6aa67c.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.4,
        "votes": "21 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1038,
        "zomatoId": "ctl_537793267",
        "name": "Chicken Wings (5pc)",
        "price": 349,
        "description": "Delicious authentic chicken wings (5pc) prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/bf5/74db869a346ebed3d1f388b8abeebbf5.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.6,
        "votes": "6 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1032,
        "zomatoId": "ctl_782005437",
        "name": "Chicken Five Spicy",
        "price": 369,
        "description": "Delicious authentic chicken five spicy prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1036,
        "zomatoId": "ctl_551317826",
        "name": "Chicken Manchuria",
        "price": 359,
        "description": "Delicious authentic chicken manchuria prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1040,
        "zomatoId": "ctl_551317827",
        "name": "Diamond Chicken",
        "price": 369,
        "description": "Delicious authentic diamond chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1041,
        "zomatoId": "ctl_537793269",
        "name": "Dragon Chicken",
        "price": 349,
        "description": "Delicious authentic dragon chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1043,
        "zomatoId": "ctl_537793270",
        "name": "Kaju Chicken",
        "price": 389,
        "description": "Delicious authentic kaju chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1044,
        "zomatoId": "ctl_617277519",
        "name": "Kariveypaku Chicken",
        "price": 369,
        "description": "Delicious authentic kariveypaku chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1047,
        "zomatoId": "ctl_617277029",
        "name": "Podeena Chicken",
        "price": 369,
        "description": "Delicious authentic podeena chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1048,
        "zomatoId": "ctl_551317829",
        "name": "Stick Chicken",
        "price": 369,
        "description": "Delicious authentic stick chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      }
    ]
  },
  {
    "category": "Tandoori & Kebabs",
    "icon": "\ud83d\udd25",
    "count": 9,
    "items": [
      {
        "id": 1103,
        "zomatoId": "ctl_537793313",
        "name": "Tandoori Chicken Full",
        "price": 579,
        "description": "Delicious authentic tandoori chicken full prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/834/02aee76b8634e769020da424d7c9d834.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1104,
        "zomatoId": "ctl_537793314",
        "name": "Tandoori Chicken Half",
        "price": 399,
        "description": "Delicious authentic tandoori chicken half prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1105,
        "zomatoId": "ctl_551317898",
        "name": "Tangidi Kabab (4pc)",
        "price": 379,
        "description": "Chicken",
        "image": "https://b.zmtcdn.com/data/dish_photos/349/078700b6906d2af927286bdd5bbc2349.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1099,
        "zomatoId": "ctl_537793312",
        "name": "Kalami Kabab (4pc)",
        "price": 399,
        "description": "Non-Veg preparation",
        "image": "https://b.zmtcdn.com/data/dish_photos/4a7/331e755b9f6871dfa9beaeb113c864a7.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1098,
        "zomatoId": "ctl_537793311",
        "name": "Chicken Tikka (8pc)",
        "price": 399,
        "description": "Delicious authentic chicken tikka (8pc) prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/80a/248c18a1d4ea135801069842f6de480a.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1102,
        "zomatoId": "ctl_551317897",
        "name": "Reshmi Kabab",
        "price": 440,
        "description": "Chicken",
        "image": "https://b.zmtcdn.com/data/dish_photos/1ea/bf33d48d4add9c129e6b851fd17731ea.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1100,
        "zomatoId": "ctl_551317895",
        "name": "Malai Paneer Tikka",
        "price": 359,
        "description": "Delicious authentic malai paneer tikka prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1101,
        "zomatoId": "ctl_551317896",
        "name": "Paneer Tikka",
        "price": 359,
        "description": "Delicious authentic paneer tikka prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/9a2/c8e1eb6d025d95cea670e811c429a9a2.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1097,
        "zomatoId": "ctl_551317894",
        "name": "Chicken Malai Tikka",
        "price": 399,
        "description": "Delicious authentic chicken malai tikka prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Mild",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      }
    ]
  },
  {
    "category": "Veg Starters",
    "icon": "\ud83e\udd66",
    "count": 12,
    "items": [
      {
        "id": 1049,
        "zomatoId": "ctl_551317830",
        "name": "Baby Corn 65",
        "price": 309,
        "description": "Delicious authentic baby corn 65 prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1050,
        "zomatoId": "ctl_708157634",
        "name": "Five Spicy Baby Corn",
        "price": 299,
        "description": "Delicious authentic five spicy baby corn prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1051,
        "zomatoId": "ctl_537793301",
        "name": "Chilli Mushroom",
        "price": 329,
        "description": "Delicious authentic chilli mushroom prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1052,
        "zomatoId": "ctl_551317831",
        "name": "Chilli Paneer",
        "price": 329,
        "description": "Delicious authentic chilli paneer prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/96a/6787f979648bf2b28f6a435b34cf196a.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1053,
        "zomatoId": "ctl_551317832",
        "name": "Crispy Baby Corn",
        "price": 309,
        "description": "Delicious authentic crispy baby corn prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1054,
        "zomatoId": "ctl_537793303",
        "name": "Mushroom 65",
        "price": 329,
        "description": "Delicious authentic mushroom 65 prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/364/116b160f5bc2a795e1ff8099ddab2364.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1055,
        "zomatoId": "ctl_537793304",
        "name": "Mushroom Manchuria",
        "price": 329,
        "description": "Delicious authentic mushroom manchuria prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1056,
        "zomatoId": "ctl_552353501",
        "name": "Mushroom Manchurian",
        "price": 329,
        "description": "Delicious authentic mushroom manchurian prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1057,
        "zomatoId": "ctl_537793306",
        "name": "Paneer 65",
        "price": 329,
        "description": "Delicious authentic paneer 65 prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/7e2/95d701b2f35ad1b217a4f21bdcfc17e2.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1058,
        "zomatoId": "ctl_551317836",
        "name": "Paneer Majestick",
        "price": 329,
        "description": "Delicious authentic paneer majestick prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/88a/368375b433cbed54e95b5d200b77f88a.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1059,
        "zomatoId": "ctl_537793307",
        "name": "Panner Manchuria",
        "price": 329,
        "description": "Delicious authentic panner manchuria prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1060,
        "zomatoId": "ctl_537793308",
        "name": "Veg Manchuria",
        "price": 269,
        "description": "Delicious authentic veg manchuria prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/e29/b9d852c1cae6ca6640700cbb4a8dce29.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "8 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      }
    ]
  },
  {
    "category": "Seafood Specials",
    "icon": "\ud83c\udf64",
    "count": 9,
    "items": [
      {
        "id": 1061,
        "zomatoId": "ctl_537793315",
        "name": "Appolo Fish",
        "price": 409,
        "description": "Delicious authentic appolo fish prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/bba/9b943c70ba917ac23f017058ceb46bba.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 3.9,
        "votes": "5 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1062,
        "zomatoId": "ctl_551317839",
        "name": "Chilli Fish",
        "price": 409,
        "description": "Delicious authentic chilli fish prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1063,
        "zomatoId": "ctl_618577751",
        "name": "Chilli Prawns",
        "price": 449,
        "description": "Delicious authentic chilli prawns prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1064,
        "zomatoId": "ctl_551317841",
        "name": "Fish 65",
        "price": 409,
        "description": "Delicious authentic fish 65 prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1065,
        "zomatoId": "ctl_749331684",
        "name": "Fish Biryani",
        "price": 559,
        "description": "[Serves 1-2  person]",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [
          {
            "name": "Single",
            "price": 559
          },
          {
            "name": "Couple Pack",
            "price": 779
          },
          {
            "name": "Family Pack",
            "price": 1100
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1066,
        "zomatoId": "ctl_551317844",
        "name": "Fish Finger",
        "price": 419,
        "description": "Delicious authentic fish finger prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1067,
        "zomatoId": "ctl_551317845",
        "name": "Loose Prawn",
        "price": 459,
        "description": "Delicious authentic loose prawn prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/7b3/bf604a0d1c9231b639fb82aa77fec7b3.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1068,
        "zomatoId": "ctl_749331685",
        "name": "Prawn Biryani",
        "price": 549,
        "description": "[Serves1-2  person]",
        "image": "https://b.zmtcdn.com/data/dish_photos/9f4/7c92ff8a7b8f7453f59b03cd7a7d69f4.png",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.3,
        "votes": "9 votes",
        "portions": [
          {
            "name": "Single",
            "price": 549
          },
          {
            "name": "Couple Pack",
            "price": 779
          },
          {
            "name": "Family Pack",
            "price": 1100
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1069,
        "zomatoId": "ctl_551317848",
        "name": "Prawns 65",
        "price": 449,
        "description": "Delicious authentic prawns 65 prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      }
    ]
  },
  {
    "category": "Non-Veg Curries",
    "icon": "\ud83c\udf72",
    "count": 11,
    "items": [
      {
        "id": 1077,
        "zomatoId": "ctl_551317858",
        "name": "Butter Chicken",
        "price": 369,
        "description": "Delicious authentic butter chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/c35/f0d58820e053cf45eae8948a5bba8c35.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Mild",
        "rating": 3.9,
        "votes": "7 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1078,
        "zomatoId": "ctl_551317859",
        "name": "Chicken Bonless Curry (single)",
        "price": 299,
        "description": "Delicious authentic chicken bonless curry (single) prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/42c/4030d57e4fd4bdba2cc11bf57a6f842c.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 3.9,
        "votes": "13 votes",
        "portions": [
          {
            "name": "1/2 [Size]",
            "price": 299
          },
          {
            "name": "Single",
            "price": 399
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1079,
        "zomatoId": "ctl_551317860",
        "name": "Chicken Curry (bons)",
        "price": 299,
        "description": "Delicious authentic chicken curry (bons) prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/1bf/f45b01802b3c170f3b809d7b10bd51bf.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1080,
        "zomatoId": "ctl_708157642",
        "name": "Chicken Kaju Curry",
        "price": 379,
        "description": "Delicious authentic chicken kaju curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1081,
        "zomatoId": "ctl_551317862",
        "name": "Chicken Mogalai Curry",
        "price": 369,
        "description": "Delicious authentic chicken mogalai curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/a0c/9dcab328a2f873cde05c6cd6edf03a0c.jpg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1082,
        "zomatoId": "ctl_551317863",
        "name": "Chicken Tikka Masala",
        "price": 379,
        "description": "Delicious authentic chicken tikka masala prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1083,
        "zomatoId": "ctl_708157643",
        "name": "Egg Bhurji",
        "price": 299,
        "description": "Delicious authentic egg bhurji prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1084,
        "zomatoId": "ctl_708157644",
        "name": "Egg Curry",
        "price": 299,
        "description": "Delicious authentic egg curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1085,
        "zomatoId": "ctl_551317864",
        "name": "Fish Curry",
        "price": 399,
        "description": "Delicious authentic fish curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1086,
        "zomatoId": "ctl_551317867",
        "name": "Kadai Chicken",
        "price": 369,
        "description": "Delicious authentic kadai chicken prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1087,
        "zomatoId": "ctl_551317870",
        "name": "Prowns Curry",
        "price": 300,
        "description": "Delicious authentic prowns curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      }
    ]
  },
  {
    "category": "Veg Curries",
    "icon": "\ud83e\udd58",
    "count": 7,
    "items": [
      {
        "id": 1070,
        "zomatoId": "ctl_708157636",
        "name": "Kaju Curry",
        "price": 379,
        "description": "Delicious authentic kaju curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/b49/21a0d7ee5cb9fed8187029706fa00b49.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1071,
        "zomatoId": "ctl_708157637",
        "name": "Kaju Mushroom Curry",
        "price": 369,
        "description": "Delicious authentic kaju mushroom curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1072,
        "zomatoId": "ctl_708157638",
        "name": "Kaju Paneer Curry",
        "price": 369,
        "description": "Delicious authentic kaju paneer curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/173/c7c86fef34650b920d97b35824bb6173.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "10 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1073,
        "zomatoId": "ctl_708157639",
        "name": "Kaju Tamato (single)",
        "price": 369,
        "description": "Palak Paneer",
        "image": "https://b.zmtcdn.com/data/dish_photos/e05/efc4c893950276d34d43bdfe18590e05.png",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1074,
        "zomatoId": "ctl_708157640",
        "name": "Mixed Veg Curry",
        "price": 339,
        "description": "Delicious authentic mixed veg curry prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/a84/8878899c2ada2a858bdc7f0e02b3ba84.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1075,
        "zomatoId": "ctl_551317853",
        "name": "Mushroom Masala",
        "price": 339,
        "description": "Delicious authentic mushroom masala prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/bb0/3bec808f096d63d3b083730398fddbb0.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 3.0,
        "votes": "5 votes",
        "portions": [
          {
            "name": "Single",
            "price": 339
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1076,
        "zomatoId": "ctl_551317855",
        "name": "Paneer Butter Masala",
        "price": 339,
        "description": "Delicious authentic paneer butter masala prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/eea/578c58f4a3ccdbd02c8b7c1ab1e0ceea.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 4.4,
        "votes": "24 votes",
        "portions": [
          {
            "name": "Single",
            "price": 339
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      }
    ]
  },
  {
    "category": "Rotis & Breads",
    "icon": "\ud83e\uded3",
    "count": 10,
    "items": [
      {
        "id": 1117,
        "zomatoId": "ctl_632119302",
        "name": "2 Butter Naan With Paneer Butter Masala",
        "price": 199,
        "description": "Delicious authentic 2 butter naan with paneer butter masala prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/cb3/2533d43897c7810d01d7a656308efcb3.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 4.2,
        "votes": "83 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1118,
        "zomatoId": "ctl_632119304",
        "name": "4 Pulkas With Paneer Butter Masala",
        "price": 199,
        "description": "Delicious authentic 4 pulkas with paneer butter masala prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/2a7/bf59a09701d5ded4361ffb472cada2a7.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 4.2,
        "votes": "17 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1119,
        "zomatoId": "ctl_627602799",
        "name": "Chapathi",
        "price": 50,
        "description": "Delicious authentic chapathi prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/a7c/3b569c2a75e0d30aa22c23b2ec0d3a7c.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1120,
        "zomatoId": "ctl_551317901",
        "name": "Butter Naan",
        "price": 70,
        "description": "Delicious authentic butter naan prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/dc4/04bce3b77d6a3b0f761e35a42eb69dc4.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 4.2,
        "votes": "54 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1121,
        "zomatoId": "ctl_551317902",
        "name": "Butter Roti",
        "price": 50,
        "description": "Delicious authentic butter roti prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/3aa/a3eee5991a22ea3ea341cf721ccf63aa.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 4.6,
        "votes": "8 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1122,
        "zomatoId": "ctl_794667093",
        "name": "Garlic Non",
        "price": 75,
        "description": "Delicious authentic garlic non prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1123,
        "zomatoId": "ctl_551317903",
        "name": "Masala Kulcha",
        "price": 85,
        "description": "Delicious authentic masala kulcha prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/83b/4cf5fcf589ceb06f6a883219c716d83b.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "7 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1124,
        "zomatoId": "ctl_551317904",
        "name": "Phulka",
        "price": 20,
        "description": "Delicious authentic phulka prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/0dc/d10da5a851220bf04cc54bfa1775e0dc.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 3.9,
        "votes": "76 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1125,
        "zomatoId": "ctl_551317905",
        "name": "Plane Naan",
        "price": 50,
        "description": "Delicious authentic plane naan prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/d28/e26f74fef139b3539d52262798105d28.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 4.6,
        "votes": "9 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1126,
        "zomatoId": "ctl_551317906",
        "name": "Plane Roti",
        "price": 40,
        "description": "Delicious authentic plane roti prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/648/e4c8482aae93b01cbff832a76ca5b648.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 1.9,
        "votes": "8 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      }
    ]
  },
  {
    "category": "Fried Rice",
    "icon": "\ud83c\udf5a",
    "count": 11,
    "items": [
      {
        "id": 1106,
        "zomatoId": "ctl_537793293",
        "name": "Chicken Fried Rice",
        "price": 329,
        "description": "Delicious authentic chicken fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/ebd/68fd91a9ac8e5d62c7f2d35a5736cebd.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.4,
        "votes": "61 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1107,
        "zomatoId": "ctl_708157667",
        "name": "Chicken Schezwan Fried Rice",
        "price": 379,
        "description": "Delicious authentic chicken schezwan fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1108,
        "zomatoId": "ctl_537793294",
        "name": "Egg Fried Rice",
        "price": 299,
        "description": "Delicious authentic egg fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/a02/3905cfe679ac1c1696ebfdedd3a6fa02.jpeg",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.0,
        "votes": "13 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1109,
        "zomatoId": "ctl_551317899",
        "name": "Kaju Fried Rice",
        "price": 349,
        "description": "Delicious authentic kaju fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/792/db1234a88f03e4b4e47e53e5b9d13792.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.0,
        "votes": "6 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1110,
        "zomatoId": "ctl_537793295",
        "name": "Mushroom Fried Rice",
        "price": 329,
        "description": "Delicious authentic mushroom fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1111,
        "zomatoId": "ctl_537793296",
        "name": "Paneer Fried Rice",
        "price": 329,
        "description": "Delicious authentic paneer fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.4,
        "votes": "6 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1112,
        "zomatoId": "ctl_551317900",
        "name": "Prawn Fried Rice",
        "price": 379,
        "description": "Delicious authentic prawn fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1113,
        "zomatoId": "ctl_620176885",
        "name": "Sai Silver Sp Veg Fried Rice",
        "price": 399,
        "description": "Delicious authentic sai silver sp veg fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1114,
        "zomatoId": "ctl_537793297",
        "name": "Sai Silver Spl Fried Rice",
        "price": 399,
        "description": "Sai Silver Special Chicken Fried Rice",
        "image": "https://b.zmtcdn.com/data/dish_photos/2b5/74b6e0e998365db1d53cc091616402b5.png",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.5,
        "votes": "6 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1115,
        "zomatoId": "ctl_537793298",
        "name": "Veg Fried Rice",
        "price": 279,
        "description": "Delicious authentic veg fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/eb4/1e1e41662d54b3ebae6b955297f0eeb4.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "36 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1116,
        "zomatoId": "ctl_708157668",
        "name": "Veg Schezwan Fried Rice",
        "price": 299,
        "description": "Delicious authentic veg schezwan fried rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Spicy",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      }
    ]
  },
  {
    "category": "Soups",
    "icon": "\ud83e\udd63",
    "count": 7,
    "items": [
      {
        "id": 1023,
        "zomatoId": "ctl_551317807",
        "name": "Egg Mushroom Soup",
        "price": 150,
        "description": "Delicious authentic egg mushroom soup prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/d02/3063f210cdeb701d44545544daf6ad02.jpeg",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [
          {
            "name": "Single",
            "price": 150
          },
          {
            "name": "1/2 [Size]",
            "price": 190
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1024,
        "zomatoId": "ctl_551317808",
        "name": "Sweet Corn Soup",
        "price": 150,
        "description": "Delicious authentic sweet corn soup prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Mild",
        "rating": 4.0,
        "votes": "5 votes",
        "portions": [
          {
            "name": "Single",
            "price": 150
          },
          {
            "name": "1/2 [Size]",
            "price": 190
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1025,
        "zomatoId": "ctl_551317809",
        "name": "Veg Hot & Sour Soup",
        "price": 160,
        "description": "Delicious authentic veg hot & sour soup prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/5c6/e7c5c26298d25cf41c0856b93d2ca5c6.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Spicy",
        "rating": 4.3,
        "votes": "6 votes",
        "portions": [
          {
            "name": "Single",
            "price": 160
          },
          {
            "name": "1/2 [Size]",
            "price": 190
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": true
      },
      {
        "id": 1026,
        "zomatoId": "ctl_551317810",
        "name": "Veg Manchow Soup",
        "price": 150,
        "description": "Delicious authentic veg manchow soup prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [
          {
            "name": "Single",
            "price": 150
          },
          {
            "name": "1/2 [Size]",
            "price": 190
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1027,
        "zomatoId": "ctl_551317811",
        "name": "Chicken Corn Soup",
        "price": 180,
        "description": "Delicious authentic chicken corn soup prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [
          {
            "name": "Single",
            "price": 180
          },
          {
            "name": "1/2 [Size]",
            "price": 199
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      },
      {
        "id": 1028,
        "zomatoId": "ctl_551317812",
        "name": "Chicken Hot & Sour Soup",
        "price": 180,
        "description": "Delicious authentic chicken hot & sour soup prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": true,
        "isVeg": false,
        "spiceLevel": "Spicy",
        "rating": 4,
        "votes": "5 votes",
        "portions": [
          {
            "name": "Single",
            "price": 180
          },
          {
            "name": "1/2 [Size]",
            "price": 199
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1029,
        "zomatoId": "ctl_551317813",
        "name": "Chicken Manchow",
        "price": 180,
        "description": "Delicious authentic chicken manchow prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.6,
        "votes": "13 votes",
        "portions": [
          {
            "name": "Single",
            "price": 180
          },
          {
            "name": "1/2 [Size]",
            "price": 199
          }
        ],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      }
    ]
  },
  {
    "category": "Accompaniments & Addons",
    "icon": "\ud83e\udd57",
    "count": 8,
    "items": [
      {
        "id": 1127,
        "zomatoId": "ctl_708157669",
        "name": "Chicken Dum 1 Piece",
        "price": 60,
        "description": "Delicious authentic chicken dum 1 piece prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.3,
        "votes": "8 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1128,
        "zomatoId": "ctl_708157670",
        "name": "Chicken Lollipop (1 Piece)",
        "price": 70,
        "description": "Delicious authentic chicken lollipop (1 piece) prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.2,
        "votes": "23 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1129,
        "zomatoId": "ctl_708157671",
        "name": "Chicken Wings (1 Piece)",
        "price": 70,
        "description": "Delicious authentic chicken wings (1 piece) prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": false,
        "spiceLevel": "Medium",
        "rating": 4.3,
        "votes": "6 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1130,
        "zomatoId": "ctl_708157672",
        "name": "Double Masala Rice",
        "price": 40,
        "description": "Delicious authentic double masala rice prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 4.5,
        "votes": "13 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": true,
        "hasImage": false
      },
      {
        "id": 1131,
        "zomatoId": "ctl_708157673",
        "name": "Katta Extra",
        "price": 20,
        "description": "Delicious authentic katta extra prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/9bd/0946162aa45f7255058e0b72a4ecd9bd.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1132,
        "zomatoId": "ctl_708157674",
        "name": "Onion, Lemon Extra",
        "price": 20,
        "description": "Delicious authentic onion, lemon extra prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/f7c/8c87c8e114714dc83b535d00a791cf7c.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 3.4,
        "votes": "6 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1133,
        "zomatoId": "ctl_708157675",
        "name": "Raita Extra",
        "price": 20,
        "description": "Delicious authentic raita extra prepared fresh at Sai Silver Dum Biryani.",
        "image": "https://b.zmtcdn.com/data/dish_photos/859/5b4120210f17e3add4605b1fbf9f8859.jpeg",
        "hasRealImage": true,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": null,
        "votes": "",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": true
      },
      {
        "id": 1134,
        "zomatoId": "ctl_708157676",
        "name": "Thumsup (250 Ml)",
        "price": 30,
        "description": "Delicious authentic thumsup (250 ml) prepared fresh at Sai Silver Dum Biryani.",
        "image": "",
        "hasRealImage": false,
        "isVeg": true,
        "spiceLevel": "Medium",
        "rating": 3.7,
        "votes": "17 votes",
        "portions": [],
        "orderUrl": "https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order",
        "popular": false,
        "hasImage": false
      }
    ]
  }
];

const reviews = [
  {
    id: 1,
    name: "Aswini Kumar",
    rating: 5,
    date: "1 week ago",
    comment:
      "Biryanis are very good. Starters are also ok. Definitely worth trying to satisfy your Biryani cravings.",
    reviewCount: 144,
    photoCount: 44,
  },
  {
    id: 2,
    name: "Anonymous Customer",
    rating: 5,
    date: "2 weeks ago",
    comment: "Rice in fry biryani is too good and very unique flavour. Worth the price.",
    reviewCount: 0,
    photoCount: 0,
  },
  {
    id: 3,
    name: "Happy Diner",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Super, food quality, clean ambiance, homely hospitality, overall awesome.",
    reviewCount: 0,
    photoCount: 0,
  },
  {
    id: 4,
    name: "Food Lover",
    rating: 5,
    date: "1 month ago",
    comment:
      "Food was very delicious. Service is so humble. Atmosphere is somewhat conjusted but food makes up for it!",
    reviewCount: 0,
    photoCount: 0,
  },
  {
    id: 5,
    name: "Biryani Enthusiast",
    rating: 4,
    date: "1 month ago",
    comment:
      "Great taste and authentic flavors. The chicken dum biryani is a must-try. Portion sizes are good.",
    reviewCount: 0,
    photoCount: 0,
  },
];

const gallery = [
  {
    id: 1,
    url: "./media/gallery/signature-chicken-dum.jpeg",
    alt: "Signature chicken dum biryani with salan and raita at Sai Silver Dum Biryani Vijayawada",
    title: "Signature Dum Biryani",
    tag: "Best Seller",
    featured: true,
  },
  {
    id: 2,
    url: "./media/gallery/fry-biryani-special.jpeg",
    alt: "Rich fry biryani topped with roasted cashews and peppers at Sai Silver Dum Biryani",
    title: "Rich Fry Biryani",
    tag: "Chef Pick",
  },
  {
    id: 3,
    url: "./media/gallery/special-rice-platter.jpeg",
    alt: "Special rice platter with curry and garnish from Sai Silver Dum Biryani Vijayawada",
    title: "Special Rice Platter",
    tag: "House Special",
  },
  {
    id: 4,
    url: "./media/gallery/roomali-roti-curry.jpeg",
    alt: "Roomali roti served with creamy curry at Sai Silver Dum Biryani",
    title: "Roti & Curry Pairing",
    tag: "Freshly Served",
  },
  {
    id: 5,
    url: "./media/gallery/butter-naan-gravy.jpeg",
    alt: "Butter naan with signature gravy served at Sai Silver Dum Biryani Vijayawada",
    title: "Butter Naan Combo",
    tag: "Bread Special",
  },
  {
    id: 6,
    url: "./media/gallery/veg-starter-platter.jpeg",
    alt: "Veg starter platter with crisp fried vegetables at Sai Silver Dum Biryani",
    title: "Veg Starter Platter",
    tag: "Starter Favourite",
  },
  {
    id: 7,
    url: "./media/gallery/handi-rice-sides.jpeg",
    alt: "Handi rice served with salan and raita at Sai Silver Dum Biryani Vijayawada",
    title: "Handi Rice Set",
    tag: "Table Favourite",
  },
  {
    id: 8,
    url: "./media/gallery/butter-naan-basket.jpeg",
    alt: "Butter naan basket fresh from the tandoor at Sai Silver Dum Biryani",
    title: "Fresh Butter Naan",
    tag: "Tandoor Fresh",
  },
];

const offers = [
  {
    id: 1,
    title: "Family Combo",
    description: "2 Chicken Biryanis + 1 Starter + Raita",
    price: 550,
    originalPrice: 650,
    discount: "15% OFF",
    validUntil: "Valid till: 31 Jan 2025",
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "Special Silver Dum Biryani + Mirchi Ka Salan + Dessert",
    price: 450,
    originalPrice: 580,
    discount: "22% OFF",
    validUntil: "Valid till: Every Weekend",
  },
  {
    id: 3,
    title: "Lunch Deal",
    description: "Any Biryani + Raita (11:30 AM - 3:00 PM)",
    price: 220,
    originalPrice: 300,
    discount: "27% OFF",
    validUntil: "Valid till: Daily",
  },
];

const cateringPackages = [
  {
    id: 1,
    name: "Small Gathering",
    servings: "20-30 people",
    price: "\u20B98,000",
    features: [
      "Choice of 2 Biryani varieties",
      "2 Starter options",
      "Raita & Salan included",
      "Disposable plates & cutlery",
    ],
  },
  {
    id: 2,
    name: "Medium Event",
    servings: "50-75 people",
    price: "\u20B915,000",
    featured: true,
    features: [
      "Choice of 3 Biryani varieties",
      "3 Starter options",
      "Raita, Salan & Dessert included",
      "Service staff provided",
      "Chafing dishes setup",
    ],
  },
  {
    id: 3,
    name: "Large Celebration",
    servings: "100+ people",
    price: "Custom Quote",
    features: [
      "Choice of 4+ Biryani varieties",
      "5+ Starter & Side options",
      "Full menu customization",
      "Professional service staff",
      "Complete setup & cleanup",
      "Live counter option available",
    ],
  },
];

const videos = [
  {
    id: 1,
    title: "Krishna Podcast: Story, Growth, and Restaurant Journey",
    description:
      "A highlighted podcast conversation with Krishna about how Sai Silver Dum Biryani was built, the work behind the kitchen, and the ambition to grow the brand.",
    thumbnail: "./media/gallery/podcast-cover.jpeg",
    source: "./media/videos/krishna-podcast.mp4",
    sourceType: "local",
    duration: "3:02",
    eyebrow: "Owner Podcast",
  },
  {
    id: 2,
    title: "Kitchen Preparation in Motion",
    description:
      "A longer kitchen-side clip showing the pace, flame, and finishing movement behind service time.",
    thumbnail: "./media/gallery/signature-chicken-dum.jpeg",
    source: "./media/videos/kitchen-prep.mp4",
    sourceType: "local",
    duration: "0:39",
    eyebrow: "Kitchen Clip",
  },
  {
    id: 3,
    title: "Fresh Plating Showcase",
    description:
      "A clean service clip showing the final plated visual before it reaches the table.",
    thumbnail: "./media/gallery/special-rice-platter.jpeg",
    source: "./media/videos/plating-showcase.mp4",
    sourceType: "local",
    duration: "0:21",
    eyebrow: "Service Clip",
  },
  {
    id: 4,
    title: "Quick Serve Reel",
    description:
      "A fast short-format shot that adds live energy to the page and highlights ready-to-serve movement.",
    thumbnail: "./media/gallery/fry-biryani-special.jpeg",
    source: "./media/videos/quick-serve.mp4",
    sourceType: "local",
    duration: "0:02",
    eyebrow: "Quick Reel",
  },
  {
    id: 5,
    title: "Fresh Crowd Favorite: What Makes Our Biryani Stand Out",
    description:
      "A recent reel capturing the buzz around Sai Silver Dum Biryani, from rich masala layers and dum aroma to the serving style that keeps customers coming back for something different.",
    thumbnail: "./media/gallery/special-rice-platter.jpeg",
    source: "./media/videos/instagram-reel-highlight.mp4",
    sourceType: "local",
    duration: "Latest",
    eyebrow: "Recent Highlight",
    featured: true,
  },
];

const menuCardDetails = {
  "Chicken Dum Biryani": {
    cooking:
      "Fresh chicken is marinated with house spices, layered with long-grain basmati, and sealed for a slow dum cook so the steam carries the masala into every grain.",
    ingredients: [
      "Premium basmati rice",
      "Fresh chicken",
      "Saffron and ghee",
      "Mint, fried onions, and house masala",
    ],
    finish:
      "The result is juicy chicken, aromatic rice, and that rich restaurant-style dum fragrance.",
  },
  "Mughlai Chicken Biryani": {
    cooking:
      "Chicken is cooked with a richer masala base and layered with fragrant rice so the final pot feels fuller, warmer, and more indulgent.",
    ingredients: [
      "Marinated chicken",
      "Basmati rice",
      "Mughlai-style masala",
      "Whole spices and fresh herbs",
    ],
    finish: "It lands with deeper gravy flavor, rich aroma, and a more celebratory biryani feel.",
  },
  "Special Chicken Biryani": {
    cooking:
      "This house special gets extra layering, stronger seasoning, and a longer dum finish so every spoon tastes fuller and more premium.",
    ingredients: [
      "Premium chicken pieces",
      "Aged basmati rice",
      "Ghee-roasted onions",
      "House special spice mix",
    ],
    finish: "It is built to feel richer, more aromatic, and clearly more indulgent than the regular plate.",
  },
  "Chicken 65 Biryani": {
    cooking:
      "Spicy Chicken 65 pieces are paired with biryani rice and finishing masala, giving the dish a sharper kick and a more crowd-pleasing style.",
    ingredients: [
      "Chicken 65 pieces",
      "Spiced biryani rice",
      "Green chilies",
      "Fresh coriander and masala oil",
    ],
    finish: "You get a lively spice hit, crisp chicken bites, and a distinctly punchier biryani experience.",
  },
  "Mutton Dum Biryani": {
    cooking:
      "Tender mutton is slow-cooked until soft, then sealed with fragrant rice on dum so the juices and spices build deep flavor into every layer.",
    ingredients: [
      "Slow-cooked mutton",
      "Basmati rice",
      "Saffron milk",
      "Whole spices and fresh herbs",
    ],
    finish: "It lands with bold aroma, richer masala depth, and a premium festive feel.",
  },
  "Veg Manchuria": {
    cooking:
      "Vegetable dumplings are fried until crisp, then tossed in a glossy Indo-Chinese sauce with garlic, chilies, and fresh aromatics.",
    ingredients: [
      "Mixed vegetable balls",
      "Garlic and chili sauce",
      "Spring onion",
      "Soy-style seasoning",
    ],
    finish: "It brings a crisp bite, savory coating, and a familiar starter-style comfort.",
  },
  "Paneer Tikka": {
    cooking:
      "Paneer cubes are coated in a spiced yogurt marinade and roasted until lightly charred on the edges.",
    ingredients: ["Fresh paneer", "Yogurt marinade", "Tandoori spices", "Capsicum and onion"],
    finish: "It balances smoky grill flavor with a creamy center.",
  },
  "Chicken Tikka": {
    cooking:
      "Chicken is marinated in spiced curd and roasted in the tandoor until the edges pick up char and color.",
    ingredients: ["Boneless chicken", "Yogurt marinade", "Tandoori spices", "Smoky grill heat"],
    finish: "It delivers a juicy center, smoky finish, and classic tandoori depth.",
  },
  "Paneer Butter Masala": {
    cooking:
      "Paneer is simmered in a buttery tomato gravy until the sauce turns smooth, rich, and lightly sweet.",
    ingredients: ["Paneer cubes", "Tomato-butter gravy", "Cream", "Mild spice blend"],
    finish: "It lands creamy, comforting, and ideal with naan or roti.",
  },
  "Butter Naan": {
    cooking:
      "The dough is stretched and baked fast so it stays soft, then brushed with butter for a rich finish.",
    ingredients: ["Refined flour dough", "Butter", "Salt", "Tandoor heat"],
    finish: "Soft texture and buttery warmth make it perfect with gravies and curries.",
  },
  Lassi: {
    cooking:
      "Curd is churned until smooth and chilled before service so it stays cool, creamy, and refreshing.",
    ingredients: ["Fresh curd", "Water", "Sugar or salt", "Chilled finish"],
    finish: "It cools the palate and balances the spice from biryani and starters.",
  },
};



// Global DOM references
let menuTabs, menuGrid, offerGrid, galleryGrid, videoGrid, reviewGrid, cateringGrid, servicePills, toast, modal, videoFrame, videoPlayer, heroBackdrop, menuDietFilters, menuSearchInput, menuSearchClear, menuResultsInfo;

function queryDOMElements() {
  menuTabs = document.querySelector("#menu-tabs");
  menuGrid = document.querySelector("#menu-grid");
  offerGrid = document.querySelector("#offer-grid") || document.querySelector("#offers-grid");
  galleryGrid = document.querySelector("#gallery-grid");
  videoGrid = document.querySelector("#video-grid") || document.querySelector("#videos-grid");
  reviewGrid = document.querySelector("#review-grid") || document.querySelector("#reviews-grid");
  cateringGrid = document.querySelector("#catering-grid");
  servicePills = document.querySelector("#service-pills");
  toast = document.querySelector("#toast");
  modal = document.querySelector("#video-modal");
  videoFrame = document.querySelector("#video-frame");
  videoPlayer = document.querySelector("#video-player");
  heroBackdrop = document.querySelector(".hero__backdrop");
  menuDietFilters = document.querySelector(".menu-diet-filters") || document.querySelector("#menu-diet-filters");
  menuSearchInput = document.querySelector("#menu-search-input");
  menuSearchClear = document.querySelector("#menu-search-clear");
  menuResultsInfo = document.querySelector("#menu-results-info");
}

let menuViewMode = "grid";
let activeCategory = menuItems[0].category;
let activeDietFilter = "all";
let menuSearchQuery = "";
let selectedPortions = {};
let activeMenuItemId = null;
let toastTimer = null;
let toastHideTimer = null;
let modalHideTimer = null;
let menuRefreshTimer = null;
let searchDebounceTimer = null;
let revealObserver = null;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileViewport = window.matchMedia("(max-width: 760px)");
const saveDataEnabled = Boolean(navigator.connection?.saveData);

function canUseMotion() {
  return !(prefersReducedMotion.matches || mobileViewport.matches || saveDataEnabled);
}

function formatCurrency(value) {
  return `\u20B9 ${value}`;
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getMenuCardDetails(item, categoryName) {
  return (
    menuCardDetails[item.name] ?? {
      cooking: item.description,
      ingredients: [categoryName, item.spiceLevel || "Medium Spice", "Prepared Fresh Daily", "Served Hot"],
      finish: "Prepared in authentic Vijayawada & Hyderabadi culinary tradition with balanced spices.",
    }
  );
}

function getFirstMenuItemId(categoryName) {
  return menuItems.find((category) => category.category === categoryName)?.items[0]?.id ?? null;
}

function renderServicePills() {
  if (!servicePills) return;
  servicePills.innerHTML = restaurantInfo.services
    .map((service) => `<span>${service}</span>`)
    .join("");
}

function renderMenuTabs() {
  if (!menuTabs) return;
  menuTabs.classList.add("tabs-wrap");
  menuTabs.innerHTML = menuItems
    .map((category) => {
      const isActive = category.category === activeCategory && !menuSearchQuery.trim();
      return `
        <button
          type="button"
          role="tab"
          aria-selected="${isActive}"
          class="menu-tab-btn ${isActive ? "is-active" : ""}"
          data-category="${escapeHtml(category.category)}"
        >
          
          <span class="menu-tab-label">${category.category}</span>
          <span class="menu-tab-count">${category.items.length}</span>
        </button>
      `;
    })
    .join("");
}

function getFilteredItems() {
  let list = [];
  const query = menuSearchQuery.toLowerCase().trim();

  if (query) {
    for (const cat of menuItems) {
      for (const item of cat.items) {
        if (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          cat.category.toLowerCase().includes(query)
        ) {
          list.push({ ...item, categoryName: cat.category });
        }
      }
    }
  } else {
    const curCat = menuItems.find((c) => c.category === activeCategory);
    list = curCat ? curCat.items.map((item) => ({ ...item, categoryName: curCat.category })) : [];
  }

  if (activeDietFilter === "veg") {
    list = list.filter((item) => item.isVeg);
  } else if (activeDietFilter === "non-veg") {
    list = list.filter((item) => !item.isVeg);
  } else if (activeDietFilter === "popular") {
    list = list.filter((item) => item.popular || (item.rating && item.rating >= 4.0));
  } else if (activeDietFilter === "family") {
    list = list.filter(
      (item) =>
        item.categoryName.includes("Couple") ||
        item.name.toLowerCase().includes("couple") ||
        item.name.toLowerCase().includes("family") ||
        (item.portions &&
          item.portions.some(
            (p) =>
              p.name.toLowerCase().includes("family") ||
              p.name.toLowerCase().includes("couple")
          ))
    );
  }

  return list;
}

function renderMenuCards(animate = false) {
  if (!menuGrid) return;
  const items = getFilteredItems();

  if (menuResultsInfo) {
    if (menuSearchQuery.trim()) {
      menuResultsInfo.innerHTML = `Found <strong>${items.length}</strong> dish${items.length === 1 ? "" : "es"} matching "<em>${escapeHtml(menuSearchQuery)}</em>"`;
      menuResultsInfo.hidden = false;
    } else if (activeDietFilter !== "all") {
      const labels = {
        veg: "Pure Veg",
        "non-veg": "Non-Veg",
        popular: "Top Rated & Popular",
        family: "Couple & Family Packs",
      };
      menuResultsInfo.innerHTML = `Showing <strong>${items.length}</strong> ${labels[activeDietFilter] || activeDietFilter} item${items.length === 1 ? "" : "s"} in ${escapeHtml(activeCategory)}`;
      menuResultsInfo.hidden = false;
    } else {
      menuResultsInfo.hidden = true;
    }
  }

  if (items.length === 0) {
    menuGrid.innerHTML = `
      <div class="menu-empty-state">
        <div class="menu-empty-icon"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        <h3>No dishes found</h3>
        <p>We couldn't find any dish matching your selection. Try clearing search or choosing another filter.</p>
        <button type="button" class="button button--ghost" id="reset-menu-filters">View Full Menu</button>
      </div>
    `;
    const resetBtn = document.querySelector("#reset-menu-filters");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        menuSearchQuery = "";
        if (menuSearchInput) menuSearchInput.value = "";
        if (menuSearchClear) menuSearchClear.hidden = true;
        activeDietFilter = "all";
        updateDietFilterPills();
        renderMenuTabs();
        renderMenuCards(true);
      });
    }
    return;
  }

  // Support for Compact High-Speed List View
  if (menuViewMode === "list") {
    menuGrid.classList.add("menu-layout--list");
    menuGrid.innerHTML = items
      .map((item, index) => {
        const selectedPortion =
          selectedPortions[item.id] ||
          (item.portions && item.portions.length > 0 ? item.portions[0] : null);
        const currentPrice = selectedPortion ? selectedPortion.price : item.price;

        const dietBadge = item.isVeg
          ? `<span class="diet-symbol diet-symbol--veg" title="Pure Veg"><span class="diet-symbol__dot"></span></span>`
          : `<span class="diet-symbol diet-symbol--non-veg" title="Non-Veg"><span class="diet-symbol__dot"></span></span>`;

        const ratingHtml = item.rating
          ? `<span class="list-row__rating" title="Zomato Verified Rating"><svg class="star-icon" width="11" height="11" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg> ${item.rating.toFixed(1)}</span>`
          : "";

        const popularBadge = item.popular ? `<span class="list-row__bestseller">Bestseller</span>` : "";

        let portionsHtml = "";
        if (item.portions && item.portions.length > 1) {
          portionsHtml = `
            <div class="list-row__portions" role="group" aria-label="Portion size">
              ${item.portions
                .map(
                  (p) => `
                <button
                  type="button"
                  class="portion-chip portion-chip--mini ${selectedPortion && selectedPortion.name === p.name ? "is-selected" : ""}"
                  data-portion-dish="${item.id}"
                  data-portion-name="${escapeHtml(p.name)}"
                  data-portion-price="${p.price}"
                >
                  ${escapeHtml(p.name)}: ${formatCurrency(p.price)}
                </button>
              `
                )
                .join("")}
            </div>
          `;
        }

        return `
          <article class="menu-list-row ${item.popular ? "is-popular" : ""}" style="--row-index: ${index};">
            <div class="list-row__main">
              <div class="list-row__badge-wrap">
                ${dietBadge}
              </div>
              <div class="list-row__content">
                <div class="list-row__header">
                  <h4 class="list-row__title">${escapeHtml(item.name)}</h4>
                  ${popularBadge}
                  ${ratingHtml}
                  <span class="list-row__spice list-row__spice--${item.spiceLevel ? item.spiceLevel.toLowerCase() : "medium"}">${item.spiceLevel || "Medium"}</span>
                </div>
                ${item.description ? `<p class="list-row__desc">${escapeHtml(item.description)}</p>` : ""}
                ${portionsHtml}
              </div>
            </div>

            <div class="list-row__actions">
              <div class="list-row__price-block">
                <span class="list-row__price" id="card-price-${item.id}">${formatCurrency(currentPrice)}</span>
              </div>
              <div class="list-row__btns">
                <a
                  href="https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order"
                  target="_blank"
                  rel="noreferrer"
                  class="button button--zomato-mini"
                  title="Order on Zomato"
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                  <span>Zomato</span>
                </a>
                <a
                  href="https://www.swiggy.com/city/vijayawada/sai-silver-dum-biryani-mogalrajapuram-benz-circle-and-auto-nagar-rest809458"
                  target="_blank"
                  rel="noreferrer"
                  class="button button--swiggy-mini"
                  title="Order on Swiggy"
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg>
                  <span>Swiggy</span>
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  } else {
    // Normal Visual Card Grid
    menuGrid.classList.remove("menu-layout--list");
    menuGrid.innerHTML = items
      .map((item, index) => {
        const isExpanded = activeMenuItemId === item.id;
        const details = getMenuCardDetails(item, item.categoryName || activeCategory);

        const selectedPortion =
          selectedPortions[item.id] ||
          (item.portions && item.portions.length > 0 ? item.portions[0] : null);
        const currentPrice = selectedPortion ? selectedPortion.price : item.price;

        let portionsHtml = "";
        if (item.portions && item.portions.length > 1) {
          portionsHtml = `
            <div class="menu-card__portions" role="group" aria-label="Portion sizes">
              ${item.portions
                .map(
                  (p) => `
                <button
                  type="button"
                  class="portion-chip ${selectedPortion && selectedPortion.name === p.name ? "is-selected" : ""}"
                  data-portion-dish="${item.id}"
                  data-portion-name="${escapeHtml(p.name)}"
                  data-portion-price="${p.price}"
                >
                  ${escapeHtml(p.name)}: ${formatCurrency(p.price)}
                </button>
              `
                )
                .join("")}
            </div>
          `;
        }

        const dietBadge = item.isVeg
          ? `<span class="diet-symbol diet-symbol--veg" title="Pure Veg"><span class="diet-symbol__dot"></span></span>`
          : `<span class="diet-symbol diet-symbol--non-veg" title="Non-Veg"><span class="diet-symbol__dot"></span></span>`;

        const ratingHtml = item.rating
          ? `<span class="menu-card__rating" title="Zomato Verified Rating"><svg class="star-icon" width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg> ${item.rating.toFixed(1)} ${item.votes ? `<small>(${item.votes})</small>` : ""}</span>`
          : `<span class="menu-card__rating" title="Customer Favorite"><svg class="star-icon" width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg> 4.2 <small>(Verified)</small></span>`;

        const popularHtml = item.popular ? '<span class="menu-card__badge-popular">Bestseller</span>' : '';
        const spiceHtml = `<span class="spice-pill spice-pill--${item.spiceLevel ? item.spiceLevel.toLowerCase() : "medium"}">${item.spiceLevel === "Spicy" ? "Spicy" : item.spiceLevel === "Mild" ? "Mild Spice" : "Medium Spice"}</span>`;

        const hasImage = Boolean(item.image && item.image.trim());
        const visualHtml = hasImage
          ? `
            <div class="menu-card__visual">
              <img
                src="${item.image}"
                alt="${escapeHtml(item.name)} - Sai Silver Dum Biryani"
                loading="lazy"
                decoding="async"
                width="640"
                height="440"
              />
              <div class="menu-card__badges">
                ${dietBadge}
                ${ratingHtml}
                ${popularHtml}
              </div>
              ${spiceHtml}
            </div>
          `
          : "";

        const topMetaHtml = !hasImage
          ? `
            <div class="menu-card__top-meta">
              ${dietBadge}
              ${ratingHtml}
              ${spiceHtml}
              ${popularHtml}
            </div>
          `
          : "";

        return `
          <article class="menu-card ${!hasImage ? "menu-card--text-only" : ""} ${isExpanded ? "is-expanded" : ""} ${item.popular ? "is-popular" : ""}" style="--card-index: ${index};">
            ${visualHtml}

            <div class="menu-card__body">
              ${topMetaHtml}
              <div class="menu-card__header">
                <h3 class="menu-card__title">${escapeHtml(item.name)}</h3>
                <span class="menu-card__price" id="card-price-${item.id}">${formatCurrency(currentPrice)}</span>
              </div>

              <p class="menu-card__desc">${escapeHtml(item.description)}</p>

              ${portionsHtml}

              <div class="menu-card__actions">
                <div class="menu-card__order-group">
                  <a
                    href="https://www.zomato.com/vijayawada/sai-silver-dum-biryani-auto-nagar/order"
                    target="_blank"
                    rel="noreferrer"
                    class="button button--zomato-card"
                    title="Order on Zomato"
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                    <span>Zomato</span>
                  </a>
                  <a
                    href="https://www.swiggy.com/city/vijayawada/sai-silver-dum-biryani-mogalrajapuram-benz-circle-and-auto-nagar-rest809458"
                    target="_blank"
                    rel="noreferrer"
                    class="button button--swiggy-card"
                    title="Order on Swiggy"
                  >
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg>
                    <span>Swiggy</span>
                  </a>
                </div>
                <button
                  type="button"
                  class="menu-card__story-btn"
                  data-story-toggle="${item.id}"
                  aria-expanded="${isExpanded}"
                  aria-controls="menu-card-detail-${item.id}"
                  title="View kitchen recipe & notes"
                >
                  <span>${isExpanded ? "Close" : "Story"}</span>
                  <span class="menu-card__chevron" aria-hidden="true"></span>
                </button>
              </div>
            </div>

            <div class="menu-card__details" id="menu-card-detail-${item.id}">
              <div class="menu-card__details-inner">
                <div class="menu-card__details-intro">
                  <p class="menu-card__detail-kicker">Kitchen Story &amp; Preparation</p>
                  <p class="menu-card__detail-summary">${escapeHtml(details.finish)}</p>
                </div>
                <div class="menu-card__detail-grid">
                  <div class="menu-card__detail-block menu-card__detail-block--story">
                    <p class="menu-card__detail-label">Authentic Recipe</p>
                    <p>${escapeHtml(details.cooking)}</p>
                  </div>
                  <div class="menu-card__detail-block menu-card__detail-block--ingredients">
                    <p class="menu-card__detail-label">Portions &amp; Highlights</p>
                    <div class="menu-card__detail-list">
                      ${
                        item.portions && item.portions.length > 0
                          ? item.portions
                              .map((p) => `<span><strong>${escapeHtml(p.name)}:</strong> ₹${p.price}</span>`)
                              .join("")
                          : details.ingredients
                              .map((ing) => `<span>${escapeHtml(ing)}</span>`)
                              .join("")
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  markRevealTargets(menuGrid);
  if (animate) triggerMenuGridRefresh();
}

function updateDietFilterPills() {
  if (!menuDietFilters) return;
  menuDietFilters.querySelectorAll(".filter-pill, .diet-pill, [data-filter], [data-diet]").forEach((pill) => {
    const val = pill.dataset.filter || pill.dataset.diet;
    pill.classList.toggle("is-active", val === activeDietFilter);
  });
}
function renderOffers() {
  if (!offerGrid) return;
  offerGrid.innerHTML = offers
    .map(
      (offer) => `
        <article class="offer-card">
          <div class="offer-card__top">
            <span class="offer-discount">${offer.discount}</span>
            <h3>${offer.title}</h3>
          </div>
          <div class="offer-card__body">
            <p>${offer.description}</p>
            <div class="offer-prices">
              <strong>${formatCurrency(offer.price)}</strong>
              <span>${formatCurrency(offer.originalPrice)}</span>
            </div>
            <div class="offer-validity">${offer.validUntil}</div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderGallery() {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = gallery
    .map(
      (item) => `
        <article class="gallery-card ${item.featured ? "gallery-card--feature" : ""}">
          <img src="${item.url}" alt="${item.alt}" loading="lazy" decoding="async" width="940" height="650" />
          <div class="gallery-card__meta">
            <span class="gallery-card__tag">${item.tag}</span>
            <strong>${item.title}</strong>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderVideos() {
  if (!videoGrid) return;
  videoGrid.innerHTML = videos
    .map(
      (video) => `
        <article class="video-card ${video.featured ? "video-card--featured" : ""}">
          <div class="video-thumb">
            <video controls playsinline preload="metadata" poster="${video.thumbnail}">
              <source src="${video.source}" type="video/mp4" />
            </video>
            ${video.eyebrow ? `<span class="video-badge">${video.eyebrow}</span>` : ""}
            <span class="video-duration">${video.duration}</span>
          </div>
          <div class="video-card__copy">
            ${video.eyebrow ? `<p class="video-card__eyebrow">${video.eyebrow}</p>` : ""}
            <h3>${video.title}</h3>
            <p>${video.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderReviews() {
  if (!reviewGrid) return;
  reviewGrid.innerHTML = reviews
    .map((review) => {
      const meta = [];

      if (review.reviewCount) meta.push(`${review.reviewCount} reviews`);
      if (review.photoCount) meta.push(`${review.photoCount} photos`);

      return `
        <article class="review-card">
          <div class="review-card__top">
            <div class="review-card__identity">
              <div class="review-card__avatar">${review.name.charAt(0)}</div>
              <div>
                <h4>${review.name}</h4>
                <p>${review.date}</p>
              </div>
            </div>
          </div>
          <p class="stars" aria-label="${review.rating} star review">${"&#9733;".repeat(review.rating)}</p>
          <p>"${review.comment}"</p>
          <div class="review-card__meta">${meta.join(" • ")}</div>
        </article>
      `;
    })
    .join("");
}

function renderCatering() {
  if (!cateringGrid) return;
  cateringGrid.innerHTML = cateringPackages
    .map(
      (item) => `
        <article class="catering-card ${item.featured ? "catering-card--featured" : ""}">
          ${item.featured ? '<span class="catering-badge">MOST POPULAR</span>' : ""}
          <h3>${item.name}</h3>
          <p class="catering-card__servings">${item.servings}</p>
          <div class="catering-card__price">${item.price}</div>
          <ul>
            ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.hidden = false;
  toast.classList.remove("is-visible");
  void toast.offsetWidth;
  toast.classList.add("is-visible");

  clearTimeout(toastTimer);
  clearTimeout(toastHideTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    toastHideTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 220);
  }, 3200);
}

function getFormValue(formData, key, fallback = "Not provided") {
  const value = String(formData.get(key) ?? "").trim();
  return value || fallback;
}

function formatDateValue(value) {
  if (!value || value === "Not provided") return "Not provided";

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(date);
}

function formatTimeValue(value) {
  if (!value || value === "Not provided") return "Not provided";

  const [hours, minutes] = value.split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return value;

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat("en-IN", { timeStyle: "short" }).format(date);
}

function buildReservationMessage(formData) {
  return [
    `New table reservation for ${restaurantInfo.name}`,
    "",
    `Name: ${getFormValue(formData, "name")}`,
    `Phone: ${getFormValue(formData, "phone")}`,
    `Email: ${getFormValue(formData, "email")}`,
    `Date: ${formatDateValue(getFormValue(formData, "date"))}`,
    `Time: ${formatTimeValue(getFormValue(formData, "time"))}`,
    `Guests: ${getFormValue(formData, "guests")}`,
    `Special requests: ${getFormValue(formData, "requests")}`,
    "",
    "Please confirm this table booking.",
  ].join("\n");
}

function buildCateringMessage(formData) {
  return [
    `New catering inquiry for ${restaurantInfo.name}`,
    "",
    `Name: ${getFormValue(formData, "name")}`,
    `Phone: ${getFormValue(formData, "phone")}`,
    `Email: ${getFormValue(formData, "email")}`,
    `Event date: ${formatDateValue(getFormValue(formData, "date"))}`,
    `Guests: ${getFormValue(formData, "guests")}`,
    `Package: ${getFormValue(formData, "package")}`,
    `Details: ${getFormValue(formData, "details")}`,
    "",
    "Please contact me regarding the catering requirement.",
  ].join("\n");
}

function getSmsLink(message) {
  const separator = /iPad|iPhone|iPod/i.test(window.navigator.userAgent) ? "&" : "?";
  return `sms:${restaurantInfo.smsPhone}${separator}body=${encodeURIComponent(message)}`;
}

function openSmsComposer(message) {
  const link = document.createElement("a");
  link.href = getSmsLink(message);
  link.style.display = "none";
  document.body.append(link);
  link.click();
  link.remove();
}

function openVideo(source, sourceType, title) {
  if (!modal || !videoFrame || !videoPlayer) return;

  clearTimeout(modalHideTimer);
  document.querySelector("#video-modal-title").textContent = title;

  if (sourceType === "youtube") {
    videoPlayer.pause();
    videoPlayer.hidden = true;
    videoPlayer.removeAttribute("src");
    videoFrame.hidden = false;
    videoFrame.src = `https://www.youtube.com/embed/${source}?autoplay=1`;
  } else {
    videoFrame.hidden = true;
    videoFrame.src = "";
    videoPlayer.hidden = false;
    videoPlayer.src = source;
    videoPlayer.load();
    void videoPlayer.play().catch(() => {});
  }

  modal.hidden = false;
  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  if (!modal || !videoFrame || !videoPlayer) return;

  modal.classList.remove("is-open");
  clearTimeout(modalHideTimer);
  modalHideTimer = window.setTimeout(() => {
    modal.hidden = true;
    videoFrame.src = "";
    videoFrame.hidden = true;
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoPlayer.hidden = true;
    document.body.style.overflow = "";
  }, 240);
}

function handleMenuClick(event) {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  const targetCategory = button.dataset.category;
  if (targetCategory === activeCategory && !menuSearchQuery.trim()) {
    return;
  }

  activeCategory = targetCategory;
  menuSearchQuery = "";
  if (menuSearchInput) menuSearchInput.value = "";
  if (menuSearchClear) menuSearchClear.hidden = true;
  activeMenuItemId = null;

  renderMenuTabs();
  renderMenuCards(true);

  button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

function handleMenuGridInteractions(event) {
  const portionBtn = event.target.closest("[data-portion-dish]");
  if (portionBtn) {
    event.stopPropagation();
    const dishId = Number(portionBtn.dataset.portionDish);
    const pName = portionBtn.dataset.portionName;
    const pPrice = Number(portionBtn.dataset.portionPrice);

    selectedPortions[dishId] = { name: pName, price: pPrice };

    const card = portionBtn.closest(".menu-card");
    if (card) {
      card.querySelectorAll(".portion-chip").forEach((c) => c.classList.remove("is-selected"));
      portionBtn.classList.add("is-selected");
      const priceSpan = card.querySelector(`#card-price-${dishId}`);
      if (priceSpan) priceSpan.textContent = formatCurrency(pPrice);
    }
    return;
  }

  const storyBtn = event.target.closest("[data-story-toggle]");
  if (storyBtn) {
    event.stopPropagation();
    const itemId = Number(storyBtn.dataset.storyToggle);
    activeMenuItemId = activeMenuItemId === itemId ? null : itemId;
    renderMenuCards();
    return;
  }
}

function handleDietFilter(event) {
  const filterBtn = event.target.closest("[data-filter]") || event.target.closest("[data-diet]");
  if (!filterBtn) return;

  activeDietFilter = filterBtn.dataset.filter || filterBtn.dataset.diet;
  updateDietFilterPills();
  renderMenuCards(true);
}

function handleSearchInput(event) {
  clearTimeout(searchDebounceTimer);
  const val = event.target.value;
  searchDebounceTimer = setTimeout(() => {
    menuSearchQuery = val;
    if (menuSearchClear) menuSearchClear.hidden = !val;
    renderMenuTabs();
    renderMenuCards(true);
  }, 180);
}

function handleSearchClear() {
  if (menuSearchInput) menuSearchInput.value = "";
  menuSearchQuery = "";
  if (menuSearchClear) menuSearchClear.hidden = true;
  renderMenuTabs();
  renderMenuCards(true);
}
function handleScrollClick(event) {
  const trigger = event.target.closest("[data-scroll-target]");
  if (!trigger) return;

  event.preventDefault();
  scrollToSection(trigger.dataset.scrollTarget);
}

function handleVideoClick(event) {
  const trigger = event.target.closest("[data-video-src]");
  if (!trigger) return;

  openVideo(trigger.dataset.videoSrc, trigger.dataset.videoType, trigger.dataset.videoTitle);
}

function handleFormSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  event.preventDefault();

  const isCateringForm = form.id === "catering-form";
  const formData = new FormData(form);
  const message = isCateringForm
    ? buildCateringMessage(formData)
    : buildReservationMessage(formData);
  const toastMessage = isCateringForm
    ? "Opening your SMS app with the catering inquiry details."
    : "Opening your SMS app with the reservation details.";

  openSmsComposer(message);
  showToast(toastMessage);
  form.reset();
}

function handleKeydown(event) {
  if (event.key === "Escape" && modal && !modal.hidden) {
    closeVideo();
  }
}

function markRevealTargets(scope = document) {
  const selector = [
    ".section-copy",
    ".about-visual",
    ".about-copy",
    ".feature-card",
    ".menu-book-promo",
    ".menu-card",
    ".pricing-note",
    ".offer-card",
    ".gallery-card",
    ".video-card",
    ".review-card",
    ".catering-banner",
    ".catering-card",
    ".form-intro",
    ".form-card",
    ".contact-card",
    ".map-card",
    ".footer-grid > div",
    ".footer-bottom",
  ].join(", ");

  const nodes = Array.from(scope.querySelectorAll(selector));

  nodes.forEach((node, index) => {
    if (node.dataset.revealReady) return;

    node.dataset.reveal = "true";
    node.dataset.revealReady = "true";
    node.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 280)}ms`);

    if (
      !canUseMotion() ||
      node.getBoundingClientRect().top < window.innerHeight * 0.92
    ) {
      node.classList.add("is-visible");
      return;
    }

    revealObserver?.observe(node);
  });
}

function setupRevealAnimations() {
  if (!canUseMotion()) {
    markRevealTargets(document);
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  markRevealTargets(document);
}

function triggerMenuGridRefresh() {
  if (!canUseMotion()) return;

  menuGrid.classList.remove("is-refreshing");
  clearTimeout(menuRefreshTimer);
  void menuGrid.offsetWidth;
  menuGrid.classList.add("is-refreshing");

  menuRefreshTimer = window.setTimeout(() => {
    menuGrid.classList.remove("is-refreshing");
  }, 520);
}

function setupHeroParallax() {
  if (!heroBackdrop) return;
  heroBackdrop.style.willChange = "auto";
  heroBackdrop.style.transform = "";
}

function init() {
  queryDOMElements();

  renderServicePills();
  renderMenuTabs();
  renderMenuCards();
  renderOffers();
  renderGallery();
  renderVideos();
  renderReviews();
  renderCatering();
  setupRevealAnimations();
  setupHeroParallax();

  document.addEventListener("click", handleScrollClick);
  if (menuTabs) menuTabs.addEventListener("click", handleMenuClick);
  if (menuGrid) menuGrid.addEventListener("click", handleMenuGridInteractions);
  if (menuDietFilters) menuDietFilters.addEventListener("click", handleDietFilter);
  if (menuSearchInput) menuSearchInput.addEventListener("input", handleSearchInput);
  if (menuSearchClear) menuSearchClear.addEventListener("click", handleSearchClear);
  if (videoGrid) videoGrid.addEventListener("click", handleVideoClick);

  const cateringForm = document.querySelector("#catering-form");
  if (cateringForm) cateringForm.addEventListener("submit", handleFormSubmit);
  const reservationForm = document.querySelector("#reservation-form");
  if (reservationForm) reservationForm.addEventListener("submit", handleFormSubmit);

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target.closest("[data-close-modal='true']")) {
        closeVideo();
      }
    });
  }
  document.addEventListener("keydown", handleKeydown);

  // Tier Navigation Dropdown & Fast Filter Handlers
  document.querySelectorAll("[data-tier-filter]").forEach(link => {
    link.addEventListener("click", (e) => {
      const filter = link.dataset.tierFilter;
      if (filter) {
        activeDietFilter = filter;
        updateDietFilterPills();
        renderMenuTabs();
        renderMenuCards(true);
      }
    });
  });

  document.querySelectorAll("[data-tier-speed]").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetCat = link.dataset.tierSpeed;
      const matched = menuItems.find(c => c.category === targetCat);
      if (matched) {
        activeCategory = matched.category;
        menuSearchQuery = "";
        if (menuSearchInput) menuSearchInput.value = "";
        if (menuSearchClear) menuSearchClear.hidden = true;
        renderMenuTabs();
        renderMenuCards(true);
      }
    });
  });


  // View mode switcher: Cards vs High-Speed List
  const viewModeBtns = document.querySelectorAll("[data-view-mode]");
  viewModeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.viewMode;
      if (mode && (mode === "grid" || mode === "list")) {
        menuViewMode = mode;
        viewModeBtns.forEach((b) => {
          const isActive = b.dataset.viewMode === mode;
          b.classList.toggle("is-active", isActive);
          b.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
        renderMenuCards(true);
      }
    });
  });

  // Speed nav category jump pills
  document.addEventListener("click", (e) => {
    const speedChip = e.target.closest("[data-speed-cat]");
    if (speedChip) {
      const targetCategory = speedChip.dataset.speedCat;
      const matched = menuItems.find((c) => c.category === targetCategory);
      if (matched) {
        activeCategory = matched.category;
        menuSearchQuery = "";
        if (menuSearchInput) menuSearchInput.value = "";
        if (menuSearchClear) menuSearchClear.hidden = true;
        renderMenuTabs();
        renderMenuCards(true);
      }
    }
  });

  // Group Meal Planner Calculator (works on both index.html and menu-book.html)
  const plannerChips = document.querySelectorAll(".planner-chip");
  if (plannerChips.length > 0) {
    const plannerData = {
      solo: {
        title: "Solo Feast: Chicken Dum Biryani",
        desc: "Ideal single portion with slow-dum basmati rice, tender chicken pieces, raita, and spicy mirchi salan (katta).",
        price: "₹ 320 – ₹ 399",
        sub: "₹ 320 per person",
        items: [
          "1x Chicken Dum Biryani (Mini ₹320 / Single ₹399)",
          "1x Mirchi ka Salan & Fresh Raita (Complimentary)",
          "Serves: 1 Person (~500g yield)"
        ]
      },
      couple: {
        title: "Duo Feast: Couple Pack + Starter",
        desc: "Packed specifically for 2-3 people with generous basmati portions, large chicken pieces, plus a spicy starter.",
        price: "₹ 599 – ₹ 958",
        sub: "Approx. ₹ 320 per person (Save ₹ 140 vs single orders)",
        items: [
          "1x Chicken Dum Biryani Couple Pack (₹599)",
          "1x Chicken 65 or Chicken 555 Starter (₹359)",
          "Generous Raita & Mirchi Salan Servings",
          "Serves: 2 to 3 Persons (~1.1kg yield)"
        ]
      },
      family: {
        title: "Family Jumbo Feast: Family Pack + Starters + Naans",
        desc: "The ultimate 4-5 person meal box. Handi-packed dum rice with 4-5 chicken pieces, crispy starters, and fresh breads.",
        price: "₹ 930 – ₹ 1,488",
        sub: "Approx. ₹ 280 per person (Save over ₹ 320)",
        items: [
          "1x Chicken Dum Biryani Family Pack (₹930)",
          "1x Chicken Lollypops or Chicken 65 (₹359)",
          "2x Butter Naan or Roti (₹140)",
          "Double Masala Gravy & Raita",
          "Serves: 4 to 5 Persons (~2kg yield)"
        ]
      },
      party: {
        title: "Party & Office Feast (8–10+ Guests)",
        desc: "A balanced group combo combining Biryani Family Packs, Tandoori chicken platters, and rich butter gravies.",
        price: "₹ 2,450 – ₹ 3,200",
        sub: "Approx. ₹ 260 per person",
        items: [
          "2x Chicken Dum Biryani Family Packs (₹1,860)",
          "1x Tandoori Chicken Full (₹579)",
          "1x Chicken 555 Starter (₹359)",
          "5x Butter Naans (₹350)",
          "Serves: 8 to 10+ Guests (Full catering available)"
        ]
      }
    };

    plannerChips.forEach((btn) => {
      btn.addEventListener("click", () => {
        plannerChips.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        const data = plannerData[btn.dataset.group];
        if (!data) return;

        const titleEl = document.querySelector("#home-planner-title") || document.querySelector("#planner-title");
        const descEl = document.querySelector("#home-planner-desc") || document.querySelector("#planner-desc");
        const priceEl = document.querySelector("#home-planner-price") || document.querySelector("#planner-price");
        const subEl = document.querySelector("#home-planner-sub") || document.querySelector("#planner-sub");
        const itemsEl = document.querySelector("#home-planner-items") || document.querySelector("#planner-items");

        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.desc;
        if (priceEl) priceEl.textContent = data.price;
        if (subEl) subEl.textContent = data.sub;
        if (itemsEl) itemsEl.innerHTML = data.items.map((it) => `<span>${it}</span>`).join("");
      });
    });
  }
}

init();

