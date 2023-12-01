
$(function(){
var scroll  = 'smooth';
var start = 1,
    max = 150,
    sitemap5Arr = new Array(),
    grup = new Array(),
    key = new Array(),
    abjad = '',
    print = '',
    nav = '';
    
  $.ajax({
    
    url:'https://zapier.com/engine/rss/17179753/sabdaliterasiv4',
    type:"get",
    dataType:"xml",
    success:function(data){


      
    var SITEMAP5 = document.getElementById('sitemap5');
    if (!SITEMAP5) {
        return
    };
    SITEMAP5.innerHTML = '';

    var FID1 = $(data).find("item");
    var feed1= $(FID1).find('item title');
    var feed2 = $(FID1).find("item author");
    var feed3 = $(FID1).find('item description');
    var feed4 = $(FID1).find('item link');
     
      
    if (FID1.length > 0) {
        for (var Xm = 0; Xm < FID1.length; Xm++) {
            var FIFID = FID1[Xm].innerHTML;
            var JUDUL = feed1[Xm].innerHTML;
            var BUY   = feed3[Xm].innerHTML;
            var IMAGE = feed2[Xm].innerHTML;
            for (var _0xd28cx12 = 0; _0xd28cx12 < FIFID.length; _0xd28cx12++) {
               
                    var URLL = feed4[Xm].innerHTML;
                    if (JUDUL && JUDUL.length > 0 && URLL && URLL.length > 0 && BUY && BUY.length > 0 && IMAGE && IMAGE.length > 0) {
                        sitemap5Arr.push({
                              "url": URLL,
                            "judul": JUDUL,
                           "gambar": IMAGE,
                         	"harga": BUY
                        })
                    };
                    break
                
            }
                
            
        };
        if (FID1.length >= max) {
            start += max;
            runSitemap5()
        } else {
            for (var ABJADD = sitemap5Arr, loopins = 0; loopins < ABJADD.length; loopins++) {
              var ANAN=ABJADD[loopins].judul.toLowerCase().split(' ').join('');
                var RsR = ANAN.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'');
                if (abjad.indexOf(RsR) == -1) {
                    abjad += RsR;
                    grup[RsR] = [{
                       	 url: ABJADD[loopins].url,
                       judul: ABJADD[loopins].judul,
                      gambar: ABJADD[loopins].gambar,
                       harga: ABJADD[loopins].harga
                    }]
                } else {
                    grup[RsR].push({
                          "url": ABJADD[loopins].url,
                        "judul": ABJADD[loopins].judul,
                       "gambar": ABJADD[loopins].gambar,
                        "harga": ABJADD[loopins].harga
                    })
                }
            };
            for (var PpP in grup) {
                key.push(PpP)
            };
            var ABJADD = key.sort();
          
          
          
            for (var loopjad = 0; loopjad < ABJADD.length; loopjad++) {
               
              print += '';
                
              
              for (var XnX = 0, Qqq = grup[ABJADD[loopjad]]; XnX < Qqq.length; XnX++) {
                    var ZzZ = Qqq.sort(function (PpP, ABJADD) {
                        return PpP.judul > ABJADD.judul ? 1 : -1
                    });
                    print += '<a class="grid-layout list-produk serrcok" id="' + ABJADD[loopjad] + '" data-value="' + ABJADD[loopjad] + '" data-search-term="' + ZzZ[XnX].judul.toLowerCase().split(' ').join('') + '" title="' + ZzZ[XnX].judul + '" href="' + ZzZ[XnX].url + '" class="grid-layout " target="_blank"> <div data-trigger="" target="_blank"> <div class="cst Pos(r) cbg Mih(63px) Scale(1.03):h Trs($c1) Py(11px) Mb(16px) " style=""> <div style="border-radius: inherit;"> <img class="W(100%) Pos(r) Z(1) undefined" src="' + ZzZ[XnX].gambar + '" alt="' + ZzZ[XnX].judul + '" style="border-top-left-radius: inherit;border-top-right-radius: inherit;"> <div class="Py(16px) Px(16px)"> <p class="filter-0 C(#24253d)" style=";font-family: ">' + ZzZ[XnX].judul + '</p><p class="filter-0 C(#24253d) Fw(700) Mt(8px)" style=";font-family: ">IDR '+ ZzZ[XnX].harga +'</p> </div> </div> </div> </div> </a>'
                };
              
              
              
                print += '';
                nav += '<li>' + ABJADD[loopjad] + '</li>'
            
            
            };
          
          
          
            SITEMAP5.innerHTML = '<div id="judul" class="judul">Total Ebook: ' + sitemap5Arr.length + '</div><div class="nav"><ol>' + nav + '</ol><div class="ulng" id="ulng" style="display:none"><button class="reset">RESET</button></div></div>';$("#sitemap5").after('<div data-block-container="" class="row Mt(16px) block-parent">' + print + '</div>');setTimeout(function(){
        $('#prelod,#prelod #content').addClass('loaded');
        $('h1').css('color','#222222');
    }, 1000); 
          
          
            
            scrollSitemap5();GETpara();
        }
    }

    
      
    
   },
    error:function(){$("#result").html("<strong>Error loading feed!</strong>")}});
function scrollSitemap5() {
  document.querySelectorAll('#sitemap5 div.nav div.ulng').forEach(function (Pp) {
    
  Pp.addEventListener('click', function () {
  var lii = document.querySelectorAll("a.serrcok");
    for(var kk = 0; kk<lii.length; kk++){
      if(lii){
      lii[kk].classList.remove('hidden');
      lii[kk].classList.add('showw');
      };
      document.getElementById("CariBook").reset();
      var kam=document.getElementById('ulng');
   kam.style.display='none';    
      Menunu();
      }
    })
  });
  document.querySelectorAll('#sitemap5 .nav ol li').forEach(function (PpP) {
        PpP.addEventListener('click', function () {
           
         
   var ABJADD = 'a[data-value="' + this.innerHTML + '"]';
           
    document.getElementById("CariBook").reset();
    var input =  this.innerText;
	var filter = input.toLowerCase();
	var ul = document.getElementById("badan");
	var li = document.querySelectorAll("a.serrcok");
	for(var i = 0; i<li.length; i++){
		var ahref = li[i];
		if(ahref.getAttribute('data-value').toLowerCase().indexOf(filter) > -1){
			li[i].classList.remove('hidden');
            li[i].classList.add('showw');
		}else{
			li[i].classList.add('hidden');
            li[i].classList.remove('showw');
        }
      
Menunu()
      
      
      
	}
   
   var kam=document.getElementById('ulng');
   kam.style.display='flex';    
        
        })
    });
    
}



});
function Menunu(){      
var kaka=document.getElementsByClassName('showw');
var kaka1=document.getElementById('judul');
if (kaka.length > 0){
        kaka1.innerHTML='Total Ebook: '+kaka.length
          }
      else{
          kaka1.innerHTML='Maaf Ebook yang Anda cari belum kami input.<br>HUBUNGI PENJUAL UNTUK REQUEST EBOOK<br><a href="https://api.whatsapp.com/send?phone=6285186666836&amp;text=Halo%20min%20saya%20ingin%20memesan%20Ebook%2Cberikut%20datanya%3A%0A---%0AJudul%3A%0APenulis%3A%0APenerbit%3A%0A---%0Asaya%20berharap%20bisa%20segerah%20di%20upload%20di%20https%3A%2F%2Fwww.sophiainstitute.id%2Fpage%2Febook-shop" style="border: 2px solid; display: block; color: #FFF; margin: 7px; padding: 2px; font-weight: 600;">KLIK DISINI</a>'
          }};
function prosesMenu(){
	var input = document.getElementById("TypeNow");
	var filter = input.value.toLowerCase();
	var ul = document.getElementById("badan");
	var li = document.querySelectorAll("a.serrcok");
	for(var i = 0; i<li.length; i++){
		var ahref = li[i];
		if(ahref.getAttribute('data-search-term').toLowerCase().indexOf(filter.split(' ').join('')) > -1){
			li[i].classList.remove('hidden');
            li[i].classList.add('showw');

		}
      else{
			li[i].classList.add('hidden');
          li[i].classList.remove('showw');   
        }
Menunu()
	}
};
function GETpara(){
  var e=function e(a=null){if(null===a)return null;for(var t,i=[],l=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),s=0;s<l.length;s++)t=l[s].split("="),i.push(t[0]),i[t[0]]=t[1];return i[a]}("ebook"),a=e.toLowerCase().replace("#","").split("%20").join("");console.log(a),document.getElementById("badan");for(var t=document.querySelectorAll("a.serrcok"),i=0;i<t.length;i++){t[i].getAttribute("data-search-term").toLowerCase().indexOf(a.split(" ").join(""))>-1?(t[i].classList.remove("hidden"),t[i].classList.add("showw")):(t[i].classList.add("hidden"),t[i].classList.remove("showw"));var l=document.getElementsByClassName("showw"),s=document.getElementById("judul");l.length>0?s.innerHTML="Hasil dari:  <i>"+e.toUpperCase().replace("#","").split("%20").join(" ")+"</i><br/> Total Ebook: "+l.length:s.innerHTML='Maaf Ebook yang Anda cari (<i>'+e.toUpperCase().replace("#","").split("%20").join(" ")+'</i>) belum kami input.<br>HUBUNGI PENJUAL UNTUK REQUEST EBOOK<br><a href="https://api.whatsapp.com/send?phone=6285186666836&amp;text=Halo%20min%20saya%20ingin%20memesan%20Ebook%2Cberikut%20datanya%3A%0A---%0AJudul%3A%0APenulis%3A%0APenerbit%3A%0A---%0Asaya%20berharap%20bisa%20segerah%20di%20upload%20di%20https%3A%2F%2Fwww.sophiainstitute.id%2Fpage%2Febook-shop" style="border: 2px solid; display: block; color: #FFF; margin: 7px; padding: 2px; font-weight: 600;">KLIK DISINI</a>',document.getElementById("ulng").style.display="flex"}}
