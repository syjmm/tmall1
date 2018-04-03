//banner部分
{	let bannerbox=document.querySelector("#banner");
	const imgs=document.querySelectorAll(".imgbox img");
	const pagers=document.querySelectorAll(".banner_pargerbox li");
	const banner=document.querySelector("#banner");
	const l=imgs.length;
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000)
		function move(){
			n++;
			// n=n%5;
			if(n===l){
				n=0;
			}
			if(n<0){
				n=l-1;
			}
			  if(n===0)
        {
            bannerbox.style.background="#e8e8e8";
        }
        if(n===1||n===2||n===3)
        {
            bannerbox.style.background="#e8e8e8";
        }
        if(n===4)
        {
            bannerbox.style.background="#e8e8e8";
        }
        if(n===5)
        {
            bannerbox.style.background="#e8e8e8";
        }
			for(let i=0;i<l;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[n].classList.add("active");
				pagers[n].classList.add("active");

		}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	
}
// {
//     let blocks=$(".banner_small_block");
//     let imgs=$(".banner_scroll_tu1");
//     let banner=$(".banner");
//     let goodtan=$(".goods_tan");
//     let goodtanul=$(".goodsul li");
//     let n=0;
//     function move()
//     {
//         n++;
//         if(n===imgs.length)
//         {
//             n=0;
//         }
//         if(n<0)
//         {
//             n=imgs.length-1;
//         }
//         if(n===0)
//         {
//             banner.css("background","#3d71c2");
//         }
//         if(n===1||n===2||n===3)
//         {
//             banner.css("background","#e8edf5");
//         }
//         if(n===4)
//         {
//             banner.css("background","#0f1e35");
//         }
//         if(n===5)
//         {
//             banner.css("background","#e8edf5");
//         }
       
//     }
//     let t=setInterval(move,3000);
//     blocks.mouseenter(function(){
//         let index=$(this).index(".banner_small_block");
//         blocks.removeClass("active").eq(index).addClass("active");
//         imgs.removeClass("banner_index").eq(index).fadeIn().addClass("banner_index");
//         if(index===0)
//         {
//             banner.css("background","#3d71c2");
//         }
//         if(index===1||index===2||index===3)
//         {
//             banner.css("background","#e8edf5");
//         }
//         if(index===4)
//         {
//             banner.css("background","#0f1e35");
//         }
//         if(index===5)
//         {
//             banner.css("background","#e8edf5");
//         }
//     })
//     banner.mouseenter(function(){
//         clearInterval(t);
//     })
//     banner.mouseleave(function(){
//         t=setInterval(move,3000);
//     })
    

// }
//头部导航
{
	// let box=document.querySelector(".nav");
	let top=document.querySelector(".head_m1");
	let bottom=document.querySelector(".head_menuzhu");
	let wenzis=document.querySelectorAll(".head_m1");
	let navitems=document.querySelectorAll(".head_menuzhu");
	console.dir(navitems)
	top.onmouseenter=function(){
		
		wenzis.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<wenzis.length;i++){
					wenzis[i].classList.remove("active");
					navitems[i].classList.remove("active");
				}
					// this.classList.add("active");
					navitems[index].classList.add("active");
				}
	
		})

	}
	
	top.onmouseleave=function(){
		
		bottom.style.display="none";
	}
}
//顶部显示
{
	let flxtop=document.querySelector(".sidebar");
	let letbar=document.querySelector(".floatbar");
	window.onscroll=function(){
	let st=document.documentElement.scrollTop;
	if(st>700){
		flxtop.style.display="block";
	}else{
		flxtop.style.display="none";
	}

	if(st>400){
		letbar.style.display="block";
	}else{
		letbar.style.display="none";
	}
	}
}
{
	function content(parent){
	const types=parent.querySelectorAll(".type");
	const goods=parent.querySelectorAll(".goodlist");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goods[i].classList.remove("active");
			}
			this.classList.add("active");
			goods[index].classList.add("active");
		}
	})
	}
	const contentList=document.querySelectorAll(".chaoshi_rb_sitem");
	contentList.forEach(function(ele){
		content(ele);
	})
}
{
	let totop=document.querySelector(".rtotop");
	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
}
{
	let totop=document.querySelector(".tipstop");
	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
}

// {
// 	$(".totop").click(function(){
		
// 		$("html,body").animate({scrollTop:0})

// 	})
// 	$(window).scroll(function(){
// 		let st=$(window).scrollTop();
// 		if(st>500){
// 			$(".topBar").show()
// 		}else{
// 			$(".topBar").hide()
// 		}
// 		if(st>800){
// 			$(".leftBar").show()
// 		}else{
// 			$(".leftBar").hide()
// 		}
// 	})
// 	$(".tips").click(function(){
// 		let index=$(this).index(".tips");
// 		let ot=$(".container").eq(index).offset().top-80;
// 		$("html,body").animate({scrollTop:ot},200)
// 	});
// 	$(window).scroll(function(){
// 		let st=$(window).scrollTop();
// 		$(".container").each(function(index,ele){
// 			if(st>$(this).offset().top-200){
// 				$(".tips").removeClass("active").eq(index).addClass("active")
// 			}
// 		})
// 	})
// }
//对应模板
// {
// 	let tips=document.querySelectorAll(".tips");
// 	let containers=document.querySelectorAll(".container");
// 	tips.forEach(function(ele,index){
// 		ele.onclick=function(){
// 			let ot=containers[index].offsetTop-50;
// 			// console.log(ot);
// 			// document.documentElement.scrollTop=ot;
// 			let now=document.documentElement.scrollTop;
// 			let speed=(ot-now)/8;
// 			let time=0;
// 			let t=setInterval(function(){
// 				time+=25;
// 				now+=speed;
// 				if(time===200){
// 					clearInterval(t);
// 				}
// 				document.documentElement.scrollTop=now;
// 			},25);
// 		}
// 	})

// 	window.addEventListener("scroll",function(){
// 		let st=document.documentElement.scrollTop;
		
// 		for(let i=0;i<containers.length;i++){
// 			if(st>containers[i].offsetTop-50){
// 				for(let i=0;i<tips.length;i++){
// 					tips[i].classList.remove("active");
					
// 				}
// 				tips[i].classList.add("active");
// 			}
// 		}
// 	})
// }
//楼层跳转
{
    let item=$(".container");
    let tip=$(".tips");
    let arr=["#EAA8DC","orange","#A9EAE4","green","blue","pink","#EA5F8D","#0AA6E8"]
    $(tip).click(function(){
        let index=$(tip).index(this);
        let ot=$(item).eq(index).offset().top-70;
        $("html").animate({scrollTop:ot},100);
    })
    $(window).scroll(function(){
        let st=$(window).scrollTop();
        $(item).each(function(index,ele){
            if(st>=$(this).offset().top-90){
                $(tip).css("background","rgba(0,0,0,0.8)").eq(index).css("background",arr[index]);
            }
        })
    })
}
//banner侧导航
{
	let bns=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	bns.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//右侧弹出效果
{
    $(".mui-mbar-tab li").each(function(ele){
        $(this).mouseenter(function(){
                $(".buycar_tan").eq(ele).animate({right:'35px'},100);
                $(".buycar_tan").eq(ele).show();
        });
        $(this).mouseleave(function(){
            $(".buycar_tan").eq(ele).animate({right:'70px'});
                $(".buycar_tan").hide();
        });
    })
}