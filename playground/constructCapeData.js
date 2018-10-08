const fs = require('fs');

var raw = fs.readFileSync('raw.txt').toString();
var data = [];

var capes = raw.split('<tr>');

capes.forEach(cape => {
  var toPush = {};

  var title = cape.match(/title=\"(.*?)cape"/g);
  var imgs = cape.match(/<img src="(.*?)"/g);
  if (title && imgs) {
    title = title[0].replace(/title=\"/g, '');
    title = title.replace(/"/g, '');
    toPush.name = title;
    toPush.id = title.split(' ')[0].toLowerCase();


    var imgUrls = [];
    imgs.forEach(img => {
      var vignette = img.match(/\"https:\/\/vignette(.*?)\"/g);
      // console.log(vignette);
      if (vignette) {
        vignette = vignette[0].replace(/"/g, '');
        imgUrls.push(vignette)
      }
    });

    // console.log(imgUrls);
    toPush.image = imgUrls[0];

    if (toPush.id && toPush.name && toPush.image) {
      data.push(toPush);
    }
  }



});


// console.log(data);
fs.writeFileSync('./capeFromWiki.json', JSON.stringify(data, null, 4));

// {
//   "id": "cabbage",
//   "name": "Cabbage Cape",
//   "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/5e/Cabbage_cape_detail.png/revision/latest/scale-to-width-down/100?cb=20160401160934",
//   "animation": "/images/cabbage.gif' //'https://vignette.wikia.nocookie.net/2007scape/images/5/53/Cabbage_cape_emote.gif/revision/latest?cb=20160401161558"
// }
