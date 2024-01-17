import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/6.jpg"
import img7 from "./assets/7.jpg"
import img8 from "./assets/8.jpg"
import img9 from "./assets/9.jpg"
import img10 from "./assets/10.jpg"
import img11 from "./assets/11.jpg"
import img12 from "./assets/12.jpg"
import img13 from "./assets/13.jpg"
import img14 from "./assets/14.jpg"
import img15 from "./assets/15.jpg"
import img16 from "./assets/16.jpg"
import zegna from "./assets/brandImg/zegna.png"
import prada from "./assets/brandImg/prada.png"
import valentino from './assets/brandImg/valentino.png'
import bv from './assets/brandImg/bv.png'
import missioni from './assets/brandImg/missioni.png'
import zara from './assets/brandImg/zara.png'
import frame from './assets/brandImg/frame.png'
import hg from './assets/brandImg/hg.webp'
import md from './assets/brandImg/MD.png'
import opposuits from './assets/brandImg/opposuits.png'
import nike from './assets/brandImg/nike.png'
import dg from './assets/brandImg/dg.png'
import alex from './assets/brandImg/alex.png'

export const products = [
  {
    "id": 1,
    "brand": "PRADA", 
    "brand_Image":prada,
    "title": "Crossback Halter Dress",
    "discount": 4 ,
    "o_price":2650,
    "price": 2400,
    "size": "M",
    "overview":"A shapely halter dress designed with slinky crossback straps and a leg-baring slit is an elegant option for your upcoming event.",
    "description": "42″ center front length \
                    Halter neck \
                    Sleeveless \
                    Lined \
                    95% polyester, 5% spandex \
                    Machine wash, line dry \
                    Imported \
                    Prada time and time again proves themselves an influential force in the fashion industry.For over 100 years, Prada has designed and sold beautifully crafted and ingenious handbags, clothes, shoes, and accessories for women, men, and now children.Prada today has become synonymous with luxury goods and never fails to disappoint year-in and year - out.",
    "category": "women",
    "image": img1,
    "rating": {
      "rate": 3.9,
      "count": 120
    },
    "stock": "In Stock"
  },
  {
    "id": 2,
    "brand": "valentino",
    "brand_Image":valentino,
    "title": "V Logo Pocket Wool & Silk Dress ",
    "discount":13,
    "o_price":7500,
    "price": 6500,
    "size": "S",
    "overview":"A pair of pockets is often the best thing a dress can offer, and when they appear with the iconic Valentino logo, they really reach perfection.",
    "description": "Hidden back-zip closure\
                    Jewel neck\
                    Short sleeves\
                    Front patch pockets\
                    65% virgin wool, 35% silk\
                    Dry clean\
                    Made in Italy\
                    Women’s Designer Clothing\
                    When it comes to Valentino history, the brand was founded in 1960 in Rome, by Valentino Garavani himself. The brand and all of the Valentino clothing are known for their remarkable style but especially, for the unique “Valentino red” color. Valentino clothing is very popular among a huge amount of famous people.",
    "category": "women",
    "image": img2,
    "rating": {
      "rate": 4.1,
      "count": 259
    },
    "stock": "In Stock"
  },
  {
    "id": 3,
    "brand": "bottega veneta",
    "brand_Image":bv,
    "title": "Sequin Textured Knit A-Line Gown",
    "discount":7,
    "o_price":7000,
    "price": 6500,
    "size": "L",
    "overview":"Shimmering sequins illuminate the textured knit of this occasion-worthy gown in a simply elegant A-line cut.",
    "description": "Hidden side-zip closure\
                    Scoop neck\
                    38% polyester, 30% rayon, 19% cotton, 10% polyamide, 3% metallic fibers\
                    Dry clean\
                    Imported\
                    Women's Designer Clothing\
                    The founders of the fashion house,which in the future will conquer fashionistas from all over the world, were Michele Taddei and Renzo Zengiaro. In 1966, the entrepreneurs founded their workshop to produce leather goods in Vicenza, Venice.",
    "category": "women",
    "image": img3,
    "rating": {
      "rate": 4.7,
      "count": 500
    },
    "stock": "Not In Stock"
  },
  {
    "id": 4,
    "brand": "missoni",
    "brand_Image":missioni,
    "title": "Sequin Zigzag Sweater Dress",
    "price": 7600,
    "size": "XL",
    "overview":"Luminous clear sequins light up the iconic Missoni stripes on this fine-gauge bouclé sweater-dress highlighted with a leg-baring side slit.",
    "description": "47 1/2″ length (size 36 IT)\
                    Jewel neck\
                    Sleeveless\
                    Side slit\
                    59% polyamide, 41% cotton\
                    Dry clean\
                    Made in Italy\
                    Women’s Designer Clothing\
                    Best known for its boldly graphic knitwear, world-renowned fashion house Missoni began humbly in 1953, when Ottavio and Rosita Missoni began making pieces in their home in Gallarate, Italy. The business is still family-run: daughter Angela is Missoni’s creative director, while Rosita now serves as creative director for Missoni Home. The heritage brand represents an unmistakable way of dressing and living.",
    "category": "women",
    "image": img4,
    "rating": {
      "rate": 2.1,
      "count": 430
    },
    "stock": "In Stock"
  },
  {
    "id": 5,
    "brand": "zegna",
    "brand_Image":zegna,
    "title": "Pin Dot Trofeo Milano Wool Suit",
    "discount": 6 ,
    "o_price":6800,
    "price": 6400,
    "size": "M",
    "overview":"Crafted from the brand’s signature Trofeo wool, this suit features an impeccable fit and modern polish for a subtly sophisticated look and daylong comfort.",
    "description": "Jacket has notched lapels; nonfunctional four-button cuffs; chest pocket; flap pockets; side vents\
                      Trousers have zip fly with button-tab closure; front slant pockets; back button-welt pockets\
                      Jacket is lined; trousers are lined to the knee\
                      100% wool\
                      Dry clean\
                      Men's Designer Clothing\
                      An acclaimed family enterprise since 1910, Ermenegildo Zegna offers finely tailored attire with plenty of cosmopolitan style, producing innovative fabrics developed from materials including cashmere, superfine merino wool and high-performance silks. A range of accessories, including sunglasses, belts and shoes, ensures a polished look from head to toe.",
    "category": "men",
    "image": img5,
    "rating": {
      "rate": 2.6,
      "count": 235
    },
    "stock": "In Stock"
  },
  {
    "id": 6,
    "brand": "zara",
    "brand_Image":zara,
    "title": "Leather Camp Shirt",
    "discount":8,
    "o_price":600,
    "price": 550,
    "size": "S",
    "overview":"Lambskin leather brings standout looks and comfort to this short-sleeve camp shirt framed with a point collar and snap placket.",
    "description": "27 1/2″ length (size Medium)\
                    Notched collar\
                    Short sleeves\
                    Leather\
                    Professional leather clean",
    "category": "men",
    "image": img6,
    "rating": {
      "rate": 2.9,
      "count": 340
    },
    "stock": "Not In Stock"
  },
  {
    "id": 7,
    "brand": "hugo boss",
    "brand_Image":hg,
    "title": "Hanry Solid Suit",
    "discount":4,
    "o_price":4500,
    "price": 4300,
    "size": "L",
    "overview":"A navy-blue color adds dapper appeal to an Italian suit that’s styled for simplicity with flat-front trousers and classic notched lapels.",
    "description": "29 1/2″ jacket length; 28″ inseam; 14″ leg opening; 12″ front rise; 16 1/2″ back rise\
                      Lined\
                      91% polyamide, 9% elastane\
                      Dry clean or machine wash, dry flat\
                      Made in Italy\
                      Hugo Boss/BOSS/HUGO has received the Fair Labor Association accreditation, which signifies that the company has effective systems and procedures in place to successfully uphold fair labor standards throughout its supply chains, including strategies and tools to address and improve working conditions\
                      This product meets Nordstrom Responsible Manufacturing criteria: made in a factory that meets higher environmental or social standards\
                      BOSS is world-renowned for its versatile collections of modern yet classic styles for business, leisure and formal events. While impeccably tailored BOSS suits remain a hallmark of the brand, both men’s and women’s clothing collections include casual and sportswear pieces as well. Shoes, accessories and cologne round out the sophisticated line.",
    "category": "men",
    "image": img7,
    "rating": {
      "rate": 3.8,
      "count": 679
    },
    "stock": "Not In Stock"
  },
  {
    "id": 8,
    "brand":"frame",
    "brand_Image":frame,
    "title": "L'Homme Skinny Jeans ",
    "discount":11,
    "o_price":350,
    "price": 310,
    "size": "XL",
    "overview":"Light distressing lends a broken-in finish to mid-rise skinny jeans in a wear-with-anything wash.",
    "description": "32 1/2″ inseam, 11″ leg opening; 9 1/2″ front rise; 14″ back rise (size 29)\
                      Zip fly with button closure\
                      Five-pocket style\
                      94% cotton, 5% polyester, 1% spandex\
                      Machine wash, tumble dry\
                      Imported\
                      Men's Clothing\
                      Since the brand's inception in 2012, FRAME has quickly emerged as a fan favorite for its wardrobe classics and American craftsmanship. Inspired by the French concept of dressed-up casual embodied by the style icons of the 1970s, FRAME produces beautifully structured jeans with a modern European fit, informed by a fabrication ethos that emphasizes shape retention.",
    "category": "men",
    "image": img8,
    "rating": {
      "rate": 4.7,
      "count": 130
    },
    "stock": "In Stock"
  },
  {
    "id": 9,
    "brand":"Mac duggal",
    "brand_Image":md,
    "title": "Kids' Embroidered Tiered Tulle Dress",
    "discount":9,
    "o_price":550,
    "price": 500,
    "size": "M",
    "overview":"Floral embroidery details the bodice of this keepsake-worthy dress with a ruffled neck and tiered tulle skirt trimmed in scalloped lace.",
    "description": "100% polyester\
                    Spot clean, dry flat\
                    Imported\
                    Since launching in 1984, Mac Duggal special-occasion dresses have left an impression on those doing the wearing and those doing the looking. Known for flattering all body types and sizes, the stunning designs have been spotted on celebrities such as Kylie Jenner, Khloé Kardashian, Gwyneth Paltrow and Carrie Underwood. Mac Duggal creations are also perennial favorites in top-level pageants.",
    "category": "kids",
    "image": img9,
    "rating": {
      "rate": 4.5,
      "count": 146
    },
    "stock": "In Stock"
  },
  {
    "id": 10,
    "brand":"Mac duggal",
    "brand_Image":md,
    "title": "Kids' Floral Embroidered Ruffle Party Dress",
    "discount":20,
    "o_price":750,
    "price": 600,
    "size": "S",
    "overview":"Ribbon trim and double-edge ruffles define the long skirt of this picture-perfect tulle dress detailed with beautifully embroidered flowers.",
    "description": "100% polyester\
                    Spot clean, dry flat\
                    Imported\
                    Since launching in 1984, Mac Duggal special-occasion dresses have left an impression on those doing the wearing and those doing the looking. Known for flattering all body types and sizes, the stunning designs have been spotted on celebrities such as Kylie Jenner, Khloé Kardashian, Gwyneth Paltrow and Carrie Underwood. Mac Duggal creations are also perennial favorites in top-level pageants.",
    "category": "kids",
    "image": img10,
    "rating": {
      "rate": 3.6,
      "count": 145
    },
    "stock": "Not In Stock"
  },
  {
    "id": 11,
    "brand":"Opposuits",
    "brand_Image":opposuits,
    "title": "Knight Two-Piece Suit With Tie",
    "discount":40,
    "o_price":100,
    "price": 60,
    "size": "S",
    "overview":"Formal style doesn’t have to come with a bank-breaking price tag.",
    "description": "OppoSuits pairs a classic, lightweight single-button suit jacket with trousers and a complementary tie in a strikingly clean and simple colorway.\
                    Jacket has single-button closure; notched lapels; nonfunctional three-button cuffs; chest welt pocket; front flap pockets; side vents\
                    Trousers have zip fly with button-tab closure; front slant pockets; back welt pockets\
                    Lined\
                    100% polyester\
                    Machine wash, dry flat\
                    Imported\
                    Kids’ Wear\
                    Funny, awesome and crazy sums it up for the OppoSuits brand, started in 2012 from an idea the Netherlands-based founders hatched while traveling. The affordable, high-quality suits feature bright colors and prints that pop, many in collaboration with iconic brands. As their international and celebrity-studded following knows, OppoSuits are made for those with a sense of style—and a sense of humor.",
    "category": "kids",
    "image": img11,
    "rating": {
      "rate": 4.4,
      "count": 145
    },
    "stock": "In Stock"
  },
  {

    "id": 12,
    "brand":"Nike",
    "brand_Image":nike,
    "title": "Kids' Sportswear Stacked Logo Graphic Tee",
    "price": 1300,
    "size": "S",
    "overview":"Stacked logos pile up the energy of a tee made for kids who like to play or relax in the comfort of soft, breathable cotton.",
    "description": "100% cotton\
                    Machine wash, dry flat\
                    Imported\
                    Rooted in a dedication to innovation and helping people improve their game, Nike asserts that we’re all athletes and strives to outfit each of us with the high-performance gear our workouts need. Founded in Oregon by a track athlete and his coach, this now globally renowned brand creates inventive shoes and apparel for athletes at all levels..",
    "category": "kids",
    "image": img12,
    "rating": {
      "rate": 4.4,
      "count": 145
    },
    "stock": "Out of Stock"
  },
  {

    "id": 13,
    "brand":"Dolce & gabbana",
    "brand_Image":dg,
    "title": " Small Kim Sicily Crystal Embellished Handbag",
    "discount":20,
    "price": 1200,
    "o_price":1500,
    "size": "S",
    "overview":"Signature Dolce&Gabbana flair and modern aesthetics merge on this dazzling crystal-embellished satin handbag from the Kim Kardashian runway collection.",
    "description": "Magnetic-snap flap closure\
                    Top carry handle; removable, adjustable shoulder strap\
                    Interior wall pocket\
                    Textile with leather trim\
                    Made in Italy\
                    Designer Handbags\
                    Since launching their namesake brand in 1985, Domenico Dolce and Stefano Gabbana have become industry icons, inspiring tastemakers around the world with their unique blend of classic Italian style and modern sensuality. Distinctive prints, feminine silhouettes and a penchant for color make Dolce&Gabbana a favorite among fashion buffs worldwide.",
    "category": "accessories",
    "image": img13,
    "rating": {
      "rate": 4.4,
      "count": 145
    },
    "stock": "Not In Stock"
  },
  {

    "id": 14,
    "brand":"Valentino",
    "brand_Image":valentino,
    "title": " VLOGO Wool Felt Fedora",
    "discount":14,
    "o_price":350,
    "price": 300,
    "size": "S",
    "overview":"A tonal calfskin-leather band embellished with golden VLOGO hardware wraps the crown of this classic fedora crafted from felted wool.",
    "description": "Wool with leather trim\
                    Dry clean\
                    Made in Italy\
                    When considering legendary Italian fashion house Valentino, three words come to mind: luxurious, bold and iconic. For more than 50 years, Valentino has been a cornerstone of the international fashion scene, creating evocative fragrances, statement-making ready-to-wear, and signature shoes and handbags (under the Valentino Garavani label) with haute couture craftsmanship.",
    "category": "accessories",
    "image": img14,
    "rating": {
      "rate": 4.4,
      "count": 145
    },
    "stock": "Not In Stock"
  },
  {

    "id": 15,
    "brand":"bottega veneta",
    "brand_Image":bv,
    "title": "59mm Square Sunglasses",
    "discount":15,
    "o_price":400,
    "price": 300,
    "size": "S",
    "overview":"Polished frames and temples add style sleek to Italian-made sunglasses fitted with adjustable nose pads.",
    "description": "59mm lens width; 17mm bridge width; 140mm temple length\
                    100% UV protection\
                    Adjustable nonslip nose pads\
                    Metal\
                    Made in Italy\
                    Bottega Veneta has been inspiring individuality with innovative craftsmanship since 1966. Creativity lies at the heart of all it does. Born in Vicenza, the house is rooted in Italian culture yet maintains a truly global outlook. An inclusive brand with exclusive products, Bottega Veneta is as much a feeling as it is an aesthetic.",
    "category": "accessories",
    "image": img15,
    "rating": {
      "rate": 4.4,
      "count": 145
    },
    "stock": "Not In Stock"
  },
  {

    "id": 16,
    "brand":"alexander mcqueen",
    "brand_Image":alex,
    "title": "58mm Hexagonal Sunglasses",
    "discount":9,
    "o_price":550,
    "price": 500,
    "size": "S",
    "overview":"Signature skull hardware marks the temples of these hexagonal sunglasses that deliver bold rocker-chic style.",
    "description": "58mm lens width; 17mm bridge width; 145mm temple length\
                    100% UV protection\
                    Adjustable nonslip nose pads\
                    Lightweight nylon sunglasses\
                    Metal\
                    Made in Italy\
                    Innovative, emotional, uncompromising—all words that describe the romantic and provocative fashion of Alexander McQueen, a brand that’s become synonymous with modern British couture. Integral to the Alexander McQueen culture is the juxtaposition between contrasting elements: fragility and strength, tradition and modernity, fluidity and severity. An openly emotional and even passionate viewpoint is realized with a respect for the arts and crafts tradition, a profound influence on the brand.",
    "category": "accessories",
    "image": img16,
    "rating": {
      "rate": 4.4,
      "count": 145
    },
    "stock": "Not In Stock"
  }

]
