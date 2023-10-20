//
// export function ColorGenerator(){
//
//   var im = new Image();
//   let r;
//   let g;
//   let b;
//   im.onload = function () {
//     $("#can").drawImage({
//       layer: true,
//       crossOrigin: 'anonymous',
//       source: im.src,
//       fromCenter: false,
//       load: function () {
//         $("#can").setPixels({
//           x: 0, y: 0,
//           width: 1, height: 1,
//           fromCenter: false,
//           each: function (px) {
//             r= px.r;
//             g= px.g;
//             b= px.b;
//           }
//         });
//         $('#rgbwert').html("rgb(" + r + "," + g + "," + b +")")
//         $('body').css("background","rgb(" + r + "," + g + "," + b +")")
//         console.log(r, g, b);
//       }
//     });
//   }
//   im.src = "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1600"
//
//
// }
//

import ColorThief from "colorthief/dist/color-thief";




export function ColorGenerator (){

  const colorThief = new ColorThief();
  const img = 'assets/img/books/acotar_2.jpeg';

  if (img.complete) {
    colorThief.getColor(img);
  } else {
    image.addEventListener('load', function() {
      colorThief.getColor(img);
    });
  }

  console.log(colorThief.getColor(img))
}


