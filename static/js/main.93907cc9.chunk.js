(this.webpackJsonpspookygifts=this.webpackJsonpspookygifts||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),i=t(5),m=t.n(i),s=t(6);var r=function(){return s.a.initialize("UA-174302758-1"),n.a.createElement("nav",{className:"navbar position-sticky"},n.a.createElement("img",{src:"%PUBLIC_URL%/img/SpookyGiftsTempLogo.png",width:"300px",className:"d-inline-block align-top m-4",alt:""}))};var p=function(){return n.a.createElement("footer",{className:"footer mt-5"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("h5",{className:"text-light"},"Spooky Gifts")),n.a.createElement("p",null,"\xa9 Copyright 2022")))},c=t(7),w=t(3);var l=function(e){var a=Math.round(100*Math.random()+0),t="";return"yes"===e.featured&&(t="Featured"),n.a.createElement("div",{className:"card m-3 p-3",style:{width:"16rem"},id:e.id},n.a.createElement("div",{className:"spider-web"},n.a.createElement("img",{src:w[Math.floor(Math.random()*w.length)],height:"200px",width:"200px",style:{marginLeft:a},alt:""})),n.a.createElement("a",{className:"card-img-frame thumbnail","data-click":"Try"+e.name.replace(/\s/g,""),href:e.view,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:e.img,className:"card-img-top",alt:e.name})),n.a.createElement("div",{className:"card-title mt-1 mb-0"},n.a.createElement("h3",null,e.name)),n.a.createElement("div",{className:"card-body mt-0 pt-0"},n.a.createElement("p",{className:"card-sub-text"},n.a.createElement("strong",null,"Price: "),"$",e.price),n.a.createElement("p",{className:"featured"},t,n.a.createElement("i",{className:"fas fa-cloud-moon"}))),n.a.createElement("div",{className:"row btn-group"},n.a.createElement("a",{"data-click":"View"+e.name.replace(/\s/g,""),href:e.view,className:"btn card-btn mr-1 ml-1",target:"_blank",rel:"noopener noreferrer"},"Details"),n.a.createElement("a",{"data-click":"Try"+e.name.replace(/\s/g,""),href:e.buy,className:"btn card-btn ml-1 mr-1",target:"_blank",rel:"noopener noreferrer"},"Buy Now")))},d=t(2),g=function(e){var a=Object(o.useState)([]),t=Object(c.a)(a,2),i=t[0],m=t[1];Object(o.useEffect)((function(){m(d)}),[]);var s=JSON.parse(JSON.stringify(d.sort((function(e,a){return parseInt(e.price)>parseInt(a.price)?-1:1})))),r=JSON.parse(JSON.stringify(d.sort((function(e,a){return parseInt(e.price)>parseInt(a.price)?-1:1})).reverse()));return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-around top-headline"},n.a.createElement("h1",null,"Looking for the perfect spooky gift?"),n.a.createElement("h2",null,"Check these out!")),n.a.createElement("div",{className:"filter-row"},n.a.createElement("hr",{className:"row"}),n.a.createElement("div",{className:"row"},"Sort By"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col btn btn-secondary m-1",onClick:function(){m(r)}},"Lowest Price"),n.a.createElement("div",{className:"col btn btn-secondary m-1",onClick:function(){var e=JSON.parse(JSON.stringify(d.filter((function(e){return"yes"===e.featured})))),a=JSON.parse(JSON.stringify(d.filter((function(e){return"yes"!==e.featured}))));Array.prototype.push.apply(e,a),m(e)}},"Hot"),n.a.createElement("div",{className:"col btn btn-secondary m-1",onClick:function(){m(s)}},"Highest Price")),n.a.createElement("hr",{className:"row"})),n.a.createElement("div",{className:"row justify-content-around"},i.map((function(e){return n.a.createElement(l,{key:e.id,description:e.description,id:e.id,img:e.img,buy:e.buy,name:e.name,view:e.view,price:e.price,web:e.web,featured:e.featured})}))))};var f=function(){return n.a.createElement("div",null,n.a.createElement(r,null),n.a.createElement(g,null),n.a.createElement(p,null))};t(15);m.a.render(n.a.createElement(f,null),document.getElementById("root"))},2:function(e){e.exports=JSON.parse('[{"id":"1","img":"spookygifts/img/nanayo Makeup Coffin Shelf.jpg","buy":"https://www.amazon.com/dp/B08MJ3DQLQ","name":"Makeup Coffin Shelf","view":"https://www.amazon.com/dp/B08MJ3DQLQ","price":"36.95","featured":"yes"},{"id":"2","img":"spookygifts/img/Coffin Letter Board.jpg","buy":"https://www.amazon.com/dp/B08P1DSW1L","name":"Coffin Letter Board","view":"https://www.amazon.com/dp/B08P1DSW1L","price":"28.99","featured":"no"},{"id":"3","img":"spookygifts/img/Crescent Moon Shelf.jpg","buy":"https://www.amazon.com/dp/B08JG38VP8","name":"Crescent Moon Shelf","view":"https://www.amazon.com/dp/B08JG38VP8","price":"29.99","featured":"yes"},{"id":"4","img":"spookygifts/img/Black Rose In Glass Dome.jpg","buy":"https://www.amazon.com/dp/B085H7VFDH","name":"Black Rose In Glass Dome","view":"https://www.amazon.com/dp/B085H7VFDH","price":"39.99","featured":"no"},{"id":"5","img":"spookygifts/img/Bones and Skulls Candels.jpg","buy":"https://www.amazon.com/dp/B08F4QQG52","name":"Bones and Skulls Candels","view":"https://www.amazon.com/dp/B08F4QQG52","price":"38.95","featured":"no"},{"id":"6","img":"spookygifts/img/Coffin Wall Hanger.jpg","buy":"https://www.amazon.com/dp/B08R5NV8TQ","name":"Coffin Wall Hanger","view":"https://www.amazon.com/dp/B08R5NV8TQ","price":"12.97","featured":"no"},{"id":"7","img":"spookygifts/img/Coffin Picture Frame.jpg","buy":"https://www.amazon.com/dp/B092VT7WYK","name":"Coffin Picture Frame","view":"https://www.amazon.com/dp/B092VT7WYK","price":"26.95","featured":"yes"},{"id":"8","img":"spookygifts/img/Skull Posters.jpg","buy":"https://www.amazon.com/dp/B08V6Q97ZY","name":"Skull Posters","view":"https://www.amazon.com/dp/B08V6Q97ZY","price":"14.95","featured":"no"},{"id":"9","img":"spookygifts/img/Bat Wine Bottle Opener.jpg","buy":"https://www.amazon.com/dp/B08J4GMWBR","name":"Bat Wine Bottle Opener","view":"https://www.amazon.com/dp/B08J4GMWBR","price":"29.95","featured":"no"},{"id":"10","img":"spookygifts/img/Jason Funko Pop.jpg","buy":"https://www.amazon.com/dp/B004GFWBCU","name":"Jason Funko Pop","view":"https://www.amazon.com/dp/B004GFWBCU","price":"16.99","featured":"no"},{"id":"12","img":"spookygifts/img/Zodiak Sign Coffin Backpack.jpg","buy":"https://www.amazon.com/dp/B098T4Z4XZ","name":"Zodiak Sign Coffin Backpack","view":"https://www.amazon.com/dp/B098T4Z4XZ","price":"32.99","featured":"no"},{"id":"13","img":"spookygifts/img/Bloody Knife Necklace.jpg","buy":"https://www.amazon.com/dp/B07WW3MVWF","name":"Bloody Knife Necklace","view":"https://www.amazon.com/dp/B07WW3MVWF","price":"9.90","featured":"no"},{"id":"14","img":"spookygifts/img/Vampire Coffin Lamp.jpg","buy":"https://www.amazon.com/dp/B014QAKXO2","name":"Vampire Coffin Lamp","view":"https://www.amazon.com/dp/B014QAKXO2","price":"95.99","featured":"no"},{"id":"15","img":"spookygifts/img/Bats Wall Clock.jpg","buy":"https://www.amazon.com/dp/B07CTGN36N","name":"Bats Wall Clock","view":"https://www.amazon.com/dp/B07CTGN36N","price":"26.99","featured":"no"},{"id":"16","img":"spookygifts/img/Spider Web Key Shelf.jpg","buy":"https://www.amazon.com/dp/B097L9JW5V","name":"Spider Web Key Shelf","view":"https://www.amazon.com/dp/B097L9JW5V","price":"22.99","featured":"no"},{"id":"17","img":"spookygifts/img/Nightmare Before Christmas Crossbody Bag.jpg","buy":"https://www.amazon.com/dp/B07XNL7CWP","name":"Nightmare Before Christmas Crossbody Bag","view":"https://www.amazon.com/dp/B07XNL7CWP","price":"79.00","featured":"yes"},{"id":"18","img":"spookygifts/img/Skeleton Wine Glass Set.jpg","buy":"https://www.amazon.com/dp/B091JB6DWV","name":"Skeleton Wine Glass Set","view":"https://www.amazon.com/dp/B091JB6DWV","price":"35.95","featured":"no"},{"id":"19","img":"spookygifts/img/Bat Hanging Crescent Moon Necklace.jpg","buy":"https://www.amazon.com/dp/B09CP9NLP1","name":"Bat Hanging Crescent Moon Necklace","view":"https://www.amazon.com/dp/B09CP9NLP1","price":"39.99","featured":"no"},{"id":"20","img":"spookygifts/img/Skull Tissue Box Cover.jpg","buy":"https://www.amazon.com/dp/B08T1J3CDH","name":"Skull Tissue Box Cover","view":"https://www.amazon.com/dp/B08T1J3CDH","price":"33.95","featured":"no"},{"id":"21","img":"spookygifts/img/Skeleton Pen Holder.jpg","buy":"https://www.amazon.com/dp/B08LP9W1DY","name":"Skeleton Pen Holder","view":"https://www.amazon.com/dp/B08LP9W1DY","price":"18.99","featured":"no"},{"id":"22","img":"spookygifts/img/Skull Snake Lamp.jpg","buy":"https://www.amazon.com/dp/B094NVG1W3","name":"Skull Snake Lamp","view":"https://www.amazon.com/dp/B094NVG1W3","price":"79.95","featured":"no"},{"id":"23","img":"spookygifts/img/Coffin Butter Dish.jpg","buy":"https://www.amazon.com/dp/B09V8D4GTH","name":"Coffin Butter Dish","view":"https://www.amazon.com/dp/B09V8D4GTH","price":"15.87","featured":"no"},{"id":"24","img":"spookygifts/img/Skull Makeup Brush Holder.jpg","buy":"https://www.amazon.com/dp/B07T18CZFV","name":"Skull Makeup Brush Holder","view":"https://www.amazon.com/dp/B07T18CZFV","price":"17.98","featured":"no"},{"id":"25","img":"spookygifts/img/Skull Book Ends.jpg","buy":"https://www.amazon.com/dp/B094NTSN1C","name":"Skull Book Ends","view":"https://www.amazon.com/dp/B094NTSN1C","price":"34.95","featured":"no"},{"id":"26","img":"spookygifts/img/Bat Vanity Cabinet Knobs.jpg","buy":"https://www.amazon.com/dp/B08R6SBCMC","name":"Bat Vanity Cabinet Knobs","view":"https://www.amazon.com/dp/B08R6SBCMC","price":"20.99","featured":"no"},{"id":"27","img":"spookygifts/img/Ghost In A Bottle.jpg","buy":"https://www.amazon.com/dp/B08V11146X","name":"Ghost In A Bottle","view":"https://www.amazon.com/dp/B08V11146X","price":"13.99","featured":"no"},{"id":"28","img":"spookygifts/img/Ghosts Cosmetic Bag.jpg","buy":"https://www.amazon.com/dp/B08ZXVLFVS","name":"Ghosts Cosmetic Bag","view":"https://www.amazon.com/dp/B08ZXVLFVS","price":"14.99","featured":"no"},{"id":"29","img":"spookygifts/img/Ghost Salt and Pepper Shakers.jpg","buy":"https://www.amazon.com/dp/B07FT46QD2","name":"Ghost Salt and Pepper Shakers","view":"https://www.amazon.com/dp/B07FT46QD2","price":"14.99","featured":"no"}]')},3:function(e){e.exports=JSON.parse('["./img/Spider Web.svg","./img/Spider Web 2.svg","./img/Spider Web 3.svg","./img/Spider Web 4.svg"]')},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.93907cc9.chunk.js.map