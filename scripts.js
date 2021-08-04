$('#Mesa').click((event) => {
  clicked.style.backgroundImage = "url('./Imagines/Mesa_bp.png')";
  $("h1").text("Mesa")
  $("p").text("The Deadyeye. Mesa draws out her Regulator and shoot everyone into the hell in the field of wiew. Shattered Shield makes this poverful stationary autoturret pritty tanky as like as immortal. She can make more deadly this doommaker with her Shooting Gallery which give Mesa and one of her ally damage boost for more damgerous strikes.")
})

$('#Wisp').click((event) => {
  clicked.style.backgroundImage = "url('./Imagines/Wisp_bp.png')";
  $("h1").text("Wisp")
  $("p").text("The Buffer. Her Reserviors give some sefull modifier to herslf and allies. These buffs are temporary grant maximum healt, healt regen, weapon speed and an aura, which shock nearby enemies. Breach Surge blind foes and open up to finisher for a powerful single strike. The Sol Gate burn enemies alive. This channeling most potential with Reservior buffs.")
})

$('#Sevagoth').click((event) => {
  clicked.style.backgroundImage = "url('./Imagines/Sevagoth_bp.png')";
  $("h1").text("Sevagoth")
  $("p").text("The Reaper. Sevagoth makes enemies vurnerable to damage and damaging overtime while filling his Death Well. After it's full, send forth, his Shadow to reap the life of the unwary. When Shadow is not avaible Gloom keep Sevagoth alive with a significant slow and life steal. Sow and Reap combo is a powerful ability combination which almost instatly fills the Well.")
})

$('#Atlas').click((event) => {
  clicked.style.backgroundImage = "url('./Imagines/Atlas_bp.png')";
  $("h1").text("Atlas")
  $("p").text("The Mountain. Atlas punch enemies soul out of their body. Landslide bash enemies with an exploding sliding punch, and repeat for a devastating combo. After killing foes who are Petrified Atlas gain temporary armor. If u have no heavy enemy which neem combo to kill or just want some friends, summon your two stone shaped Rumblers. This guys are fighting in your side.")
})

$('#Saryn').click((event) => {
  clicked.style.backgroundImage = "url('./Imagines/Saryn_bp.png')";
  $("h1").text("Saryn")
  $("p").text("Mistress of decay. Saryn unleashing an endless epidemic of contagious spores and shred enemies from inside. While Saryn's decoy drawing foes attention, he can make a more deadly damage over time. Casting Miasma after spredding Spore to melt down unfriendly bodies. Toxic Lash a great opportunity to shoot the toxic heavy damage from his weapon while enemies are suffering. ")
})

$('#Khora').click((event) => {
  clicked.style.backgroundImage = "url('./Imagines/Khora_bp.png')";
  $("h1").text("Khora")
  $("p").text("The Huntress. Fiercely poised with feral instincts, the huntress Khora and her feline familiar Venari prowl amidst combat scouring for prey. Mistress of the livewire, she enchains her foes with Ensnare to enforce deadly discipline by whiplash, claws, and serrated steel. Strangledome a great trap, which help Khora and Venari to survive and prepare for a heavier finishing.")
})

const picturesA = [];
picturesA.push({backgroundImage:"url('./Imagines/Mesa_bp.png')", h1: "Mesa", text:"The Deadyeye. Mesa draws out her Regulator and shoot everyone into the hell in the field of wiew. Shattered Shield makes this poverful stationary autoturret pritty tanky as like as immortal. She can make more deadly this doommaker with her Shooting Gallery which give Mesa and one of her ally damage boost for more damgerous strikes."})
picturesA.push({backgroundImage:"url('./Imagines/Wisp_bp.png')", h1: "Wisp", text:"The Buffer. Her Reserviors give some sefull modifier to herslf and allies. These buffs are temporary grant maximum healt, healt regen, weapon speed and an aura, which shock nearby enemies. Breach Surge blind foes and open up to finisher for a powerful single strike. The Sol Gate burn enemies alive. This channeling most potential with Reservior buffs."})
picturesA.push({backgroundImage:"url('./Imagines/Sevagoth_bp.png')", h1: "Sevagoth", text:"The Reaper. Sevagoth makes enemies vurnerable to damage and damaging overtime while filling his Death Well. After it's full, send forth, his Shadow to reap the life of the unwary. When Shadow is not avaible Gloom keep Sevagoth alive with a significant slow and life steal. Sow and Reap combo is a powerful ability combination which almost instatly fills the Well."})
picturesA.push({backgroundImage:"url('./Imagines/Atlas_bp.png')", h1:"Atlas", text:"The Mountain. Atlas punch enemies soul out of their body. Landslide bash enemies with an exploding sliding punch, and repeat for a devastating combo. After killing foes who are Petrified Atlas gain temporary armor. If u have no heavy enemy which neem combo to kill or just want some friends, summon your two stone shaped Rumblers. This guys are fighting in your side."})
picturesA.push({backgroundImage:"url('./Imagines/Saryn_bp.png')", h1:"Saryn", text:"Mistress of decay. Saryn unleashing an endless epidemic of contagious spores and shred enemies from inside. While Saryn's decoy drawing foes attention, he can make a more deadly damage over time. Casting Miasma after spredding Spore to melt down unfriendly bodies. Toxic Lash a great opportunity to shoot the toxic heavy damage from his weapon while enemies are suffering."})
picturesA.push({backgroundImage:"url('./Imagines/Khora_bp.png')", h1:"Khora", text:"The Huntress. Fiercely poised with feral instincts, the huntress Khora and her feline familiar Venari prowl amidst combat scouring for prey. Mistress of the livewire, she enchains her foes with Ensnare to enforce deadly discipline by whiplash, claws, and serrated steel. Strangledome a great trap, which help Khora and Venari to survive and prepare for a heavier finishing."})

let currentPic=0;

$('#jobb_arrow').click(showNextPicture);
$('#bal_arrow').click(showPrevPicture);
function showNextPicture(event){
  currentPic++;
  if(currentPic>5){
    currentPic = 0;
  }
  clicked.style.backgroundImage = picturesA[currentPic].backgroundImage;
  $("h1").text(picturesA[currentPic].h1);
  $("p").text(picturesA[currentPic].text);
}
function showPrevPicture(event){
  currentPic--;
  if(currentPic<0){
    currentPic = 5;
  }
  clicked.style.backgroundImage = picturesA[currentPic].backgroundImage;
  $("h1").text(picturesA[currentPic].h1);
  $("p").text(picturesA[currentPic].text);
}

