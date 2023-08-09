

function menuList(){
    var menuList = document.getElementById('MenuListForMobile');
    var menuListIcon = document.getElementById('default_menu_icon');
    var closeMenuIcon = document.getElementById('close_menu_icon');
    

    


    console.log('menu pressed');

    menuList.classList.remove('hidden');
    menuList.classList.add('block');
    menuList.classList.add('md:hidden');

    menuListIcon.classList.add('hidden');
    closeMenuIcon.classList.remove('hidden')
    closeMenuIcon.classList.add('block');
    closeMenuIcon.classList.add('md:hidden');
   

   //console.log(menuList.classList.contains('hidden'));
       
    
}

function closeMenu(){
    var menuList = document.getElementById('MenuListForMobile');
    var menuListIcon = document.getElementById('default_menu_icon');
    var closeMenuIcon = document.getElementById('close_menu_icon');
console.log('close pressed');


    menuList.classList.remove('block');
    menuList.classList.add('hidden');
    
    menuListIcon.classList.remove('hidden');
    menuListIcon.classList.add('block');
    closeMenuIcon.classList.add('hidden');

   
}