window.onload = function(){
    var searchM = document.getElementById('searchM');
    searchM.addEventListener('click',function(){
        searchM.value = '';
    })
    
    var bottomList = document.getElementsByTagName('aside');
    for(var j=0;j<bottomList.length;j++){
        bottomList[j].style.color='#b2a3a0';
    }
    bottomList[0].style.color='white';
    for(var i=0;i<bottomList.length;i++){
        bottomList[i].addEventListener('click',function(){
            for(var j=0;j<bottomList.length;j++){
                bottomList[j].style.color='#b2a3a0';
            }
            this.style.color='white';
        })
    }

    var navList = document.getElementsByClassName('nav');
    navList[0].style['border-bottom']='0.02rem red solid';
    for(var i=0;i<navList.length;i++){
        // console.log(navList[i]);
        navList[i].addEventListener('click',function(){
            for(var j=0;j<navList.length;j++){
                navList[j].style['border-bottom']='0.02rem white solid';
            }

            this.style['border-bottom']='0.02rem red solid';
        })
    }
}
