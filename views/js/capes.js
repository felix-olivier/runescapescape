var capes = [
  {
    "id": "cabbage",
    "name": "Cabbage Cape",
    "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/5e/Cabbage_cape_detail.png/revision/latest/scale-to-width-down/100?cb=20160401160934",
    "animation": "/images/cabbage.gif' //'https://vignette.wikia.nocookie.net/2007scape/images/5/53/Cabbage_cape_emote.gif/revision/latest?cb=20160401161558"
  },
  {
    "id": "max",
    "name": "Max Cape",
    "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/51/Max_cape_detail.png/revision/latest/scale-to-width-down/155?cb=20170202215319",
    "animation": "/images/max.gif"

  }
];



var capesAlt = [
    {
        "name": "Black cape",
        "id": "black",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/1/11/Black_cape.png/revision/latest?cb=20151024054157"
    },
    {
        "name": "Blue cape",
        "id": "blue",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/50/Blue_cape.png/revision/latest?cb=20151024041236"
    },
    {
        "name": "Green cape",
        "id": "green",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/50/Green_cape.png/revision/latest?cb=20151024041401"
    },
    {
        "name": "Orange cape",
        "id": "orange",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/d/d3/Orange_cape.png/revision/latest?cb=20151024055406"
    },
    {
        "name": "Pink cape",
        "id": "pink",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/4/4d/Pink_cape.png/revision/latest?cb=20151024043539"
    },
    {
        "name": "Purple cape",
        "id": "purple",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/5c/Purple_cape.png/revision/latest?cb=20151024043541"
    },
    {
        "name": "Red cape",
        "id": "red",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/4/46/Red_cape.png/revision/latest?cb=20151024043543"
    },
    {
        "name": "Yellow cape",
        "id": "yellow",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/d/d7/Yellow_cape.png/revision/latest?cb=20151024054157"
    },
    {
        "name": "Mythical cape",
        "id": "mythical",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/c/c6/Mythical_cape.png/revision/latest?cb=20180104132535"
    },
    {
        "name": "Champion&#39;s cape",
        "id": "champion&#39;s",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/2/25/Champion%27s_cape.png/revision/latest?cb=20170831103827"
    },
    {
        "name": "Eagle cape",
        "id": "eagle",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/d/dc/Eagle_cape.png/revision/latest?cb=20151213052647"
    },
    {
        "name": "Fire cape",
        "id": "fire",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/54/Fire_cape.png/revision/latest?cb=20130629105429"
    },
    {
        "name": "Moonclan cape",
        "id": "moonclan",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/7/74/Moonclan_cape.png/revision/latest?cb=20140330015311"
    },
    {
        "name": "Lunar cape",
        "id": "lunar",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/7/77/Lunar_cape.png/revision/latest?cb=20140102213718"
    },
    {
        "name": "Obsidian cape",
        "id": "obsidian",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/e/ea/Obsidian_cape.png/revision/latest?cb=20150102015742"
    },
    {
        "name": "Graceful cape",
        "id": "graceful",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/54/Graceful_cape.png/revision/latest?cb=20140717120717"
    },
    {
        "name": "Spotted cape",
        "id": "spotted",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/4/4f/Spotted_cape.png/revision/latest?cb=20130524025146"
    },
    {
        "name": "Spottier cape",
        "id": "spottier",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/9/97/Spottier_cape.png/revision/latest?cb=20130907112356"
    },
    {
        "name": "Team-1 cape",
        "id": "team-1",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/6/60/Team-1_cape.png/revision/latest?cb=20140728201806"
    },
    {
        "name": "Saradomin cape",
        "id": "saradomin",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/e/e2/Saradomin_cape.png/revision/latest?cb=20150105142118"
    },
    {
        "name": "Zamorak cape",
        "id": "zamorak",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/0/07/Zamorak_cape.png/revision/latest?cb=20130519020921"
    },
    {
        "name": "Guthix cape",
        "id": "guthix",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/6/6f/Guthix_cape.png/revision/latest?cb=20130810064349"
    },
    {
        "name": "Imbued saradomin cape",
        "id": "imbued",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/9/9b/Imbued_saradomin_cape.png/revision/latest?cb=20171123151240"
    },
    {
        "name": "Imbued zamorak cape",
        "id": "imbued",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/c/cf/Imbued_zamorak_cape.png/revision/latest?cb=20171123151242"
    },
    {
        "name": "Imbued guthix cape",
        "id": "imbued",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/f/f8/Imbued_guthix_cape.png/revision/latest?cb=20171123151239"
    },
    {
        "name": "Agility cape",
        "id": "agility",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/3/3d/Agility_cape.png/revision/latest?cb=20170624050439"
    },
    {
        "name": "Attack cape",
        "id": "attack",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/4/46/Attack_cape.png/revision/latest?cb=20170624050440"
    },
    {
        "name": "Construct. cape",
        "id": "construct.",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/2/23/Construct._cape.png/revision/latest?cb=20170624050441"
    },
    {
        "name": "Cooking cape",
        "id": "cooking",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/7/75/Cooking_cape.png/revision/latest?cb=20170624050442"
    },
    {
        "name": "Crafting cape",
        "id": "crafting",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/9/90/Crafting_cape.png/revision/latest?cb=20170624050443"
    },
    {
        "name": "Defence cape",
        "id": "defence",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/58/Defence_cape.png/revision/latest?cb=20170624050444"
    },
    {
        "name": "Farming cape",
        "id": "farming",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/3/38/Farming_cape.png/revision/latest?cb=20170624050445"
    },
    {
        "name": "Firemaking cape",
        "id": "firemaking",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/7/7c/Firemaking_cape.png/revision/latest?cb=20160916034845"
    },
    {
        "name": "Fishing cape",
        "id": "fishing",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/2/2a/Fishing_cape.png/revision/latest?cb=20170624050447"
    },
    {
        "name": "Fletching cape",
        "id": "fletching",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/b/ba/Fletching_cape.png/revision/latest?cb=20170624050449"
    },
    {
        "name": "Herblore cape",
        "id": "herblore",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/f/f7/Herblore_cape.png/revision/latest?cb=20170624050613"
    },
    {
        "name": "Hitpoints cape",
        "id": "hitpoints",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/d/da/Hitpoints_cape.png/revision/latest?cb=20170624050616"
    },
    {
        "name": "Hunter cape",
        "id": "hunter",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/8/83/Hunter_cape.png/revision/latest?cb=20170624050617"
    },
    {
        "name": "Magic cape",
        "id": "magic",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/5c/Magic_cape.png/revision/latest?cb=20170624050619"
    },
    {
        "name": "Mining cape",
        "id": "mining",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/5/54/Mining_cape.png/revision/latest?cb=20170624050620"
    },
    {
        "name": "Prayer cape",
        "id": "prayer",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/a/aa/Prayer_cape.png/revision/latest?cb=20170624050622"
    },
    {
        "name": "Ranging cape",
        "id": "ranging",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/d/dc/Ranging_cape.png/revision/latest?cb=20170624050623"
    },
    {
        "name": "Runecraft cape",
        "id": "runecraft",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/9/99/Runecraft_cape.png/revision/latest?cb=20170624050625"
    },
    {
        "name": "Slayer cape",
        "id": "slayer",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/c/cb/Slayer_cape.png/revision/latest?cb=20170624050626"
    },
    {
        "name": "Smithing cape",
        "id": "smithing",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/e/e8/Smithing_cape.png/revision/latest?cb=20170624050713"
    },
    {
        "name": "Strength cape",
        "id": "strength",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/b/b9/Strength_cape.png/revision/latest?cb=20170624050715"
    },
    {
        "name": "Thieving cape",
        "id": "thieving",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/f/f2/Thieving_cape.png/revision/latest?cb=20170624050716"
    },
    {
        "name": "Woodcutting cape",
        "id": "woodcutting",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/d/d3/Woodcutting_cape.png/revision/latest?cb=20170624050718"
    },
    {
        "name": "Quest point cape",
        "id": "quest",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/f/f0/Quest_point_cape.png/revision/latest?cb=20170624050623"
    },
    {
        "name": "Achievement diary cape",
        "id": "achievement",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/8/8e/Achievement_diary_cape.png/revision/latest?cb=20160508100314"
    },
    {
        "name": "Music cape",
        "id": "music",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/6/65/Music_cape.png/revision/latest?cb=20150730105109"
    },
    {
        "name": "Max cape",
        "id": "max",
        "image": "https://vignette.wikia.nocookie.net/2007scape/images/2/29/Max_cape.png/revision/latest?cb=20151015103426"
    }
]



var cList = jQuery('ul.capesList')

jQuery.each(capesAlt, function(i)
{
    var li = jQuery('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .appendTo(cList);
    var aaa = jQuery('<a/>')
        .addClass('ui-all')
        .attr('href', '/capes/' + capesAlt[i].id)
        // .text(capes[i].name)
        .appendTo(li);
    var img = jQuery('<img/>')
        .attr('src', capesAlt[i].image)
        .attr('alt', capesAlt[i].name)
        .attr('width', '100')
        .attr('heigth', '100')
        .appendTo(aaa)
});


// <a href="/capes/cabbage">
//   <img alt="Cabbage Cape" src="https://vignette.wikia.nocookie.net/2007scape/images/5/5e/Cabbage_cape_detail.png/revision/latest/scale-to-width-down/100?cb=20160401160934" width="100" height="100">
// </a>
