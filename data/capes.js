const capes = [
  {
    id: 'cabbage',
    name: 'Cabbage Cape',
    image: 'https://vignette.wikia.nocookie.net/2007scape/images/5/5e/Cabbage_cape_detail.png/revision/latest/scale-to-width-down/100?cb=20160401160934',
    animation: '/images/cabbage.gif' //'https://vignette.wikia.nocookie.net/2007scape/images/5/53/Cabbage_cape_emote.gif/revision/latest?cb=20160401161558'
  },
  {
    id: 'max',
    name: 'Max Cape',
    image: 'https://vignette.wikia.nocookie.net/2007scape/images/5/51/Max_cape_detail.png/revision/latest/scale-to-width-down/155?cb=20170202215319',
    animation: '/images/max.gif'

  }
];

const capeIds = capes.map(cur => cur.id);

var getCapeData = id => {
  return capes.find(cape => {
    return cape.id == id;
  });
}

var htmlCapes = '';
capes.forEach(cape => {
  htmlCapes += `
  <p> ${cape.name} </p>

  `;
  // <img src="${cape.image}" alt="${cape.name}">
  // <a href="/capes/${cape.id}">
  //   <img alt="${cape.name}" src="${cape.image}" width="100" height="100">
  // </a>
});


module.exports = {
  capes,
  capeIds,
  getCapeData,
  htmlCapes
};
