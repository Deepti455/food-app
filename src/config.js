export const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"

export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

export const FETCH_MENU_URL = (resId)=>"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&submitAction=ENTER"

export const restaurantList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "533773",
        name: "Third Wave Coffee",
        uuid: "19dff2cd-d21d-4cac-9c26-4580e0c61346",
        city: "1",
        area: "Ashok Nagar",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "0dca660dbdf2e04f9b861c4426ffd41e",
        cuisines: [
          "Beverages",
          "Bakery",
          "Continental"
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant: "third-wave-coffee-central-bangalore-central-bangalore",
          city: "bangalore"
        },
        cityState: "1",
        address: "hird Wave Coffee, Corporation No.13, Old No.4/1, Ground Floor, Lavelle Road Junction, Walton Road, Bangalore, Shanthinagara , B.B.M.P East, Karnataka-560001",
        locality: "Lavelle Road",
        parentId: 274773,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "40% off",
          shortDescriptionList: [
            {
              meta: "40% off | Use GUILTFREE",
              discountType: "Percentage",
              operationType: "RESTAURANT"
            }
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹100 | Use code GUILTFREE",
              discountType: "Percentage",
              operationType: "RESTAURANT"
            }
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: ""
        },
        aggregatedDiscountInfoV2: {
          header: "40% OFF",
          shortDescriptionList: [
            {
              meta: "Use GUILTFREE",
              discountType: "Percentage",
              operationType: "RESTAURANT"
            }
          ],
          descriptionList: [
            {
              meta: "40% off up to ₹100 | Use code GUILTFREE",
              discountType: "Percentage",
              operationType: "RESTAURANT"
            }
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: ""
        },
        ribbon: [
          {
            type: "PROMOTED"
          }
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3100,
              message: ""
            },
            {
              name: "time",
              fee: 0,
              message: ""
            },
            {
              name: "special",
              fee: 0,
              message: ""
            }
          ],
          totalFees: 3100,
          message: "",
          title: "Delivery Charge",
          amount: "3100",
          icon: ""
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: ""
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=6100949~p=16~eid=00000187-0cdf-e245-2c73-04c600ec1012",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: []
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "533773",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY"
        },
        promoted: true,
        avgRating: "4.1",
        totalRatings: 50,
        new: false
      },
      subtype: "basic"
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "47385",
        name: "Priyadarshini Grand",
        uuid: "cbca89ad-df12-4303-a7d2-baadc5700ff8",
        city: "1",
        area: "Basaveshwara Nagar",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "c9elzh8awx7jcx70cood",
        cuisines: [
          "South Indian",
          "North Indian",
          "Chaat",
          "Chinese",
          "Beverages"
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        slaString: "42 MINS",
        lastMileTravel: 7.5,
        slugs: {
          restaurant: "priyadarshini-grand-basaveshwaranagar",
          city: "bangalore"
        },
        cityState: "1",
        address: "315, Siddhaiah Puranik Road, Basaveshwara Nagar, Bangalore - 560020",
        locality: "Siddhaiah Puranik Road",
        parentId: 9727,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 6100,
              message: ""
            },
            {
              name: "time",
              fee: 0,
              message: ""
            },
            {
              name: "special",
              fee: 0,
              message: ""
            }
          ],
          totalFees: 6100,
          message: "",
          title: "Delivery Charge",
          amount: "6100",
          icon: ""
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: ""
        },
        longDistanceEnabled: 1,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: []
        },
        lastMileTravelString: "7.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "47385",
          deliveryTime: 42,
          minDeliveryTime: 42,
          maxDeliveryTime: 42,
          lastMileTravel: 7.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "IT_IS_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY"
        },
        promoted: false,
        avgRating: "4.5",
        totalRatings: 1000,
        new: false
      },
      subtype: "basic"
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "30903",
        name: "Sannidhi Grand",
        uuid: "3eacf224-7c6d-497e-903a-ebbd2101cc35",
        city: "1",
        area: "Kammanahalli",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "glun7fhhutgl0lkgekso",
        cuisines: [
          "South Indian",
          "North Indian",
          "Chinese",
          "Beverages"
        ],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 41,
        minDeliveryTime: 41,
        maxDeliveryTime: 41,
        slaString: "41 MINS",
        lastMileTravel: 7.900000095367432,
        slugs: {
          restaurant: "sannidhi-grand-kammanahallikalyan-nagar-kammanahallikalyan-nagar",
          city: "bangalore"
        },
        cityState: "1",
        address: "#26, Nehru Road, Yadhav layout, kammanhalli, Bangalore -84",
        locality: "Yadhav layout",
        parentId: 21007,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FLAT100 off",
          shortDescriptionList: [
            {
              meta: "FLAT100 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT"
            }
          ],
          descriptionList: [
            {
              meta: "FLAT100 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT"
            }
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: ""
        },
        aggregatedDiscountInfoV2: {
          header: "₹100 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT"
            }
          ],
          descriptionList: [
            {
              meta: "FLAT100 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT"
            }
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: ""
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 6100,
              message: ""
            },
            {
              name: "time",
              fee: 0,
              message: ""
            },
            {
              name: "special",
              fee: 0,
              message: ""
            }
          ],
          totalFees: 6100,
          message: "",
          title: "Delivery Charge",
          amount: "6100",
          icon: ""
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: ""
        },
        longDistanceEnabled: 1,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: []
        },
        lastMileTravelString: "7.9 kms",
        hasSurge: false,
        sla: {
          restaurantId: "30903",
          deliveryTime: 41,
          minDeliveryTime: 41,
          maxDeliveryTime: 41,
          lastMileTravel: 7.900000095367432,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "IT_IS_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY"
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 1000,
        new: false
      },
      subtype: "basic"
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "201474",
        name: "DOCTOR JUICE - Immunity Health Bar!",
        uuid: "3ebb25d4-5bf3-4a90-a1ba-6b0bf88d6a6d",
        city: "1",
        area: "Ejipura",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "n7xq04rczhnpykshnnv5",
        cuisines: [
          "Beverages",
          "Juices",
          "Healthy Food"
        ],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 48,
        minDeliveryTime: 48,
        maxDeliveryTime: 48,
        slaString: "48 MINS",
        lastMileTravel: 6.900000095367432,
        slugs: {
          restaurant: "doctor-juice-pvt-ltd-hsr-hsr",
          city: "bangalore"
        },
        cityState: "1",
        address: "#4 Gullandappa Garden, Ejipura Near Srinivagilu main road last stop, Koramangala/Ejipura Bengaluru-560047, Mahadevapura , B.B.M.P East, , Karnataka, 560047",
        locality: "Vivek nagar",
        parentId: 73757,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        ribbon: [
          {
            type: "PROMOTED"
          }
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 5500,
              message: ""
            },
            {
              name: "time",
              fee: 0,
              message: ""
            },
            {
              name: "special",
              fee: 0,
              message: ""
            }
          ],
          totalFees: 5500,
          message: "",
          title: "Delivery Charge",
          amount: "5500",
          icon: ""
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: ""
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=6235698~p=4~eid=00000187-0cdf-e245-2c73-04c200ec0407",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: []
        },
        lastMileTravelString: "6.9 kms",
        hasSurge: false,
        sla: {
          restaurantId: "201474",
          deliveryTime: 48,
          minDeliveryTime: 48,
          maxDeliveryTime: 48,
          lastMileTravel: 6.900000095367432,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY"
        },
        promoted: true,
        avgRating: "4.3",
        totalRatings: 100,
        new: false
      },
      subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
          type: "F",
          id: "34301",
          name: "Sri Udupi Park (100ft Road)",
          uuid: "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
          city: "1",
          area: "Indiranagar",
          totalRatingsString: "1000+ ratings",
          cloudinaryImageId: "jxp8y1chnqljwqylpkov",
          cuisines: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Beverages",
            "Chinese"
          ],
          tags: [],
          costForTwo: 10000,
          costForTwoString: "₹100 FOR TWO",
          deliveryTime: 42,
          minDeliveryTime: 42,
          maxDeliveryTime: 42,
          slaString: "42 MINS",
          lastMileTravel: 6,
          slugs: {
            restaurant: "sri-udupi-park-indiranagar-indiranagar",
            city: "bangalore"
          },
          cityState: "1",
          address: "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
          locality: "Defence Colony",
          parentId: 194697,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          chain: [],
          feeDetails: {
            fees: [
              {
                name: "distance",
                fee: 5500,
                message: ""
              },
              {
                name: "time",
                fee: 0,
                message: ""
              },
              {
                name: "special",
                fee: 0,
                message: ""
              }
            ],
            totalFees: 5500,
            message: "",
            title: "Delivery Charge",
            amount: "5500",
            icon: ""
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
          },
          longDistanceEnabled: 1,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: []
          },
          lastMileTravelString: "6 kms",
          hasSurge: false,
          sla: {
            restaurantId: "34301",
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 6,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "IT_IS_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
          },
          promoted: false,
          avgRating: "4.4",
          totalRatings: 1000,
          new: false
        },
        subtype: "basic"
      },
      {
        type: "restaurant",
        data: {
          type: "F",
          id: "607314",
          name: "Namaste",
          uuid: "153cd716-c7ca-436c-bd8e-825e6f08d9c8",
          city: "1",
          area: "Vijayanagar",
          totalRatingsString: "1000+ ratings",
          cloudinaryImageId: "dzacemjl8oskvogrxpyw",
          cuisines: [
            "South Indian",
            "Thalis",
            "Snacks",
            "Biryani",
            "Indian",
            "Chinese",
            "Desserts",
            "Beverages"
          ],
          tags: [],
          costForTwo: 10000,
          costForTwoString: "₹100 FOR TWO",
          deliveryTime: 42,
          minDeliveryTime: 42,
          maxDeliveryTime: 42,
          slaString: "42 MINS",
          lastMileTravel: 7.400000095367432,
          slugs: {
            restaurant: "namaste-vijayanagar-vijayanagar",
            city: "bangalore"
          },
          cityState: "1",
          address: "#80, Marenahalli Main Road, Vijayanagar 560040",
          locality: "Marenahalli Main Road",
          parentId: 366271,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          aggregatedDiscountInfo: {
            header: "20% off",
            shortDescriptionList: [
              {
                meta: "20% off | Use PARTY",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            descriptionList: [
              {
                meta: "20% off | Use code PARTY",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
          },
          aggregatedDiscountInfoV2: {
            header: "20% OFF",
            shortDescriptionList: [
              {
                meta: "Use PARTY",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            descriptionList: [
              {
                meta: "20% off | Use code PARTY",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
          },
          chain: [],
          feeDetails: {
            fees: [
              {
                name: "distance",
                fee: 6100,
                message: ""
              },
              {
                name: "time",
                fee: 0,
                message: ""
              },
              {
                name: "special",
                fee: 0,
                message: ""
              }
            ],
            totalFees: 6100,
            message: "",
            title: "Delivery Charge",
            amount: "6100",
            icon: ""
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
          },
          longDistanceEnabled: 1,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: []
          },
          lastMileTravelString: "7.4 kms",
          hasSurge: false,
          sla: {
            restaurantId: "607314",
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 7.400000095367432,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "IT_IS_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
          },
          promoted: false,
          avgRating: "4.1",
          totalRatings: 1000,
          new: false
        },
        subtype: "basic"
      },
      {
        type: "restaurant",
        data: {
          type: "F",
          id: "3883",
          name: "Vidyarthi Bhavan",
          uuid: "3f4171f1-63c4-461a-a21d-01e5aaa624c6",
          city: "1",
          area: "Basavanagudi",
          totalRatingsString: "1000+ ratings",
          cloudinaryImageId: "tvur6lwwvnd2euflpswm",
          cuisines: [
            "South Indian"
          ],
          tags: [],
          costForTwo: 15000,
          costForTwoString: "₹150 FOR TWO",
          deliveryTime: 36,
          minDeliveryTime: 36,
          maxDeliveryTime: 36,
          slaString: "36 MINS",
          lastMileTravel: 4.300000190734863,
          slugs: {
            restaurant: "vidhyarthi-bhavan-basavanagudi",
            city: "bangalore"
          },
          cityState: "1",
          address: "#32, Gandhi Bazar Main Road, Basvangudi, Bangalore-04",
          locality: "Gandhi Bazaar Main Road",
          parentId: 20949,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          chain: [],
          feeDetails: {
            fees: [
              {
                name: "distance",
                fee: 4300,
                message: ""
              },
              {
                name: "time",
                fee: 0,
                message: ""
              },
              {
                name: "special",
                fee: 0,
                message: ""
              }
            ],
            totalFees: 4300,
            message: "",
            title: "Delivery Charge",
            amount: "4300",
            icon: ""
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
          },
          longDistanceEnabled: 0,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: []
          },
          lastMileTravelString: "4.3 kms",
          hasSurge: false,
          sla: {
            restaurantId: "3883",
            deliveryTime: 36,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            lastMileTravel: 4.300000190734863,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
          },
          promoted: false,
          avgRating: "4.3",
          totalRatings: 1000,
          new: false
        },
        subtype: "basic"
      },
      {
        type: "restaurant",
        data: {
          type: "F",
          id: "297530",
          name: "KRISHNA VAIBHAVA",
          uuid: "5816e153-8181-4282-b7e3-6f167d92a0e7",
          city: "1",
          area: "Vijayanagar",
          totalRatingsString: "500+ ratings",
          cloudinaryImageId: "dpnjzshuy4ots4hjil3t",
          cuisines: [
            "Indian",
            "Chinese"
          ],
          tags: [],
          costForTwo: 25000,
          costForTwoString: "₹250 FOR TWO",
          deliveryTime: 43,
          minDeliveryTime: 43,
          maxDeliveryTime: 43,
          slaString: "43 MINS",
          lastMileTravel: 7.5,
          slugs: {
            restaurant: "krishna-vaibhava-vijayanagar-vijayanagar",
            city: "bangalore"
          },
          cityState: "1",
          address: "NO 1712, 17TH CROSS , 21ST MAIN , BEHIND MARUTHI MANDIR, CHORD ROAD EXTENTION, VIJAYANAGAR BENGALURU,560040",
          locality: "Chord Road",
          parentId: 21125,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          chain: [],
          feeDetails: {
            fees: [
              {
                name: "distance",
                fee: 6100,
                message: ""
              },
              {
                name: "time",
                fee: 0,
                message: ""
              },
              {
                name: "special",
                fee: 0,
                message: ""
              }
            ],
            totalFees: 6100,
            message: "",
            title: "Delivery Charge",
            amount: "6100",
            icon: ""
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
          },
          longDistanceEnabled: 1,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: []
          },
          lastMileTravelString: "7.5 kms",
          hasSurge: false,
          sla: {
            restaurantId: "297530",
            deliveryTime: 43,
            minDeliveryTime: 43,
            maxDeliveryTime: 43,
            lastMileTravel: 7.5,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "IT_IS_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
          },
          promoted: false,
          avgRating: "4.3",
          totalRatings: 500,
          new: false
        },
        subtype: "basic"
      },
      {
        type: "restaurant",
        data: {
          type: "F",
          id: "107476",
          name: "Davanagere Benne Dose",
          uuid: "0843868d-938f-4a52-9830-d872172f7d22",
          city: "1",
          area: "Jayanagar",
          totalRatingsString: "1000+ ratings",
          cloudinaryImageId: "qz6bnyiainw6carl2vei",
          cuisines: [
            "South Indian"
          ],
          tags: [],
          costForTwo: 15000,
          costForTwoString: "₹150 FOR TWO",
          deliveryTime: 46,
          minDeliveryTime: 46,
          maxDeliveryTime: 46,
          slaString: "46 MINS",
          lastMileTravel: 7,
          slugs: {
            restaurant: "davanagere-benne-dosa-jayanagar",
            city: "bangalore"
          },
          cityState: "1",
          address: "#20/2, 26th main road, puttenapalya( opp ganesha temple) jayanagar 9th block, bangalore",
          locality: "9th Block",
          parentId: 399029,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          aggregatedDiscountInfo: {
            header: "15% off",
            shortDescriptionList: [
              {
                meta: "15% off | Use PARTY",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            descriptionList: [
              {
                meta: "15% off | Use code PARTY",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
          },
          aggregatedDiscountInfoV2: {
            header: "15% OFF",
            shortDescriptionList: [
              {
                meta: "Use PARTY",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            descriptionList: [
              {
                meta: "15% off | Use code PARTY",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
          },
          chain: [],
          feeDetails: {
            fees: [
              {
                name: "distance",
                fee: 6100,
                message: ""
              },
              {
                name: "time",
                fee: 0,
                message: ""
              },
              {
                name: "special",
                fee: 0,
                message: ""
              }
            ],
            totalFees: 6100,
            message: "",
            title: "Delivery Charge",
            amount: "6100",
            icon: ""
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
          },
          longDistanceEnabled: 1,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: []
          },
          lastMileTravelString: "7 kms",
          hasSurge: false,
          sla: {
            restaurantId: "107476",
            deliveryTime: 46,
            minDeliveryTime: 46,
            maxDeliveryTime: 46,
            lastMileTravel: 7,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "IT_IS_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
          },
          promoted: false,
          avgRating: "4.2",
          totalRatings: 1000,
          new: false
        },
        subtype: "basic"
      },
      {
        type: "restaurant",
        data: {
          type: "F",
          id: "443387",
          name: "Flying Kombucha",
          uuid: "54111d0b-64a7-4a31-89da-d04a664d3664",
          city: "1",
          area: "MG Road",
          totalRatingsString: "Too Few Ratings",
          cloudinaryImageId: "tijsbzeyx2tgxexipdx5",
          cuisines: [
            "Healthy Food",
            "Beverages",
            "Juices"
          ],
          tags: [],
          costForTwo: 20000,
          costForTwoString: "₹200 FOR TWO",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          slaString: "35 MINS",
          lastMileTravel: 2.200000047683716,
          slugs: {
            restaurant: "flying-kombucha-majestic-majestic-2",
            city: "bangalore"
          },
          cityState: "1",
          address: "#54, 1st Floor, Monarch Plaza, Brigade Rd, Bengaluru, 560001",
          locality: "Brigade road",
          parentId: 80695,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          aggregatedDiscountInfo: {
            header: "50% off",
            shortDescriptionList: [
              {
                meta: "50% off | Use TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            descriptionList: [
              {
                meta: "50% off up to ₹100 | Use code TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
          },
          aggregatedDiscountInfoV2: {
            header: "50% OFF",
            shortDescriptionList: [
              {
                meta: "Use TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            descriptionList: [
              {
                meta: "50% off up to ₹100 | Use code TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT"
              }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
          },
          ribbon: [
            {
              type: "PROMOTED"
            }
          ],
          chain: [],
          feeDetails: {
            fees: [
              {
                name: "distance",
                fee: 3100,
                message: ""
              },
              {
                name: "time",
                fee: 0,
                message: ""
              },
              {
                name: "special",
                fee: 0,
                message: ""
              }
            ],
            totalFees: 3100,
            message: "",
            title: "Delivery Charge",
            amount: "3100",
            icon: ""
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
          },
          longDistanceEnabled: 0,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "cid=6235708~p=13~eid=00000187-0cdf-e245-2c73-04c500ec0d47",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: []
          },
          lastMileTravelString: "2.2 kms",
          hasSurge: false,
          sla: {
            restaurantId: "443387",
            deliveryTime: 35,
            minDeliveryTime: 35,
            maxDeliveryTime: 35,
            lastMileTravel: 2.200000047683716,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
          },
          promoted: true,
          avgRating: "--",
          totalRatings: 0,
          new: false
        },
        subtype: "basic"
      },
      {
        type: "restaurant",
        data: {
          type: "F",
          id: "57086",
          name: "Priyadarshini Veg",
          uuid: "f2c8d945-8215-4f9a-a25b-4f7c57c512d4",
          city: "1",
          area: "Yeshwantpur",
          totalRatingsString: "1000+ ratings",
          cloudinaryImageId: "cdvfsusuorofg8dbocg4",
          cuisines: [
            "North Indian",
            "South Indian",
            "Chinese",
            "Fast Food",
            "Desserts"
          ],
          tags: [],
          costForTwo: 15000,
          costForTwoString: "₹150 FOR TWO",
          deliveryTime: 42,
          minDeliveryTime: 42,
          maxDeliveryTime: 42,
          slaString: "42 MINS",
          lastMileTravel: 8.100000381469727,
          slugs: {
            restaurant: "priyadarshini-veg-sanjay-nagar-new-bel-rd-yeshwanthpur-yeshwanthpur",
            city: "bangalore"
          },
          cityState: "1",
          address: "765. 1st Main Road, 5th Cross, Yeshwanthpura, Bangalore 560022",
          locality: "LCR Complex",
          parentId: 9726,
          unserviceable: false,
          veg: true,
          select: false,
          favorite: false,
          tradeCampaignHeaders: [],
          chain: [],
          feeDetails: {
            fees: [
              {
                name: "distance",
                fee: 6900,
                message: ""
              },
              {
                name: "time",
                fee: 0,
                message: ""
              },
              {
                name: "special",
                fee: 0,
                message: ""
              }
            ],
            totalFees: 6900,
            message: "",
            title: "Delivery Charge",
            amount: "6900",
            icon: ""
          },
          availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
          },
          longDistanceEnabled: 1,
          rainMode: "NONE",
          thirdPartyAddress: false,
          thirdPartyVendor: "",
          adTrackingID: "",
          badges: {
            imageBased: [],
            textBased: [],
            textExtendedBadges: []
          },
          lastMileTravelString: "8.1 kms",
          hasSurge: false,
          sla: {
            restaurantId: "57086",
            deliveryTime: 42,
            minDeliveryTime: 42,
            maxDeliveryTime: 42,
            lastMileTravel: 8.100000381469727,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "IT_IS_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
          },
          promoted: false,
          avgRating: "4.4",
          totalRatings: 1000,
          new: false
        },
        subtype: "basic"
      }
  ]