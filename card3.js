
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let searchtype = document.getElementById('search1')
let massegdelet = document.getElementById('shur')
let nameVesabl = document.getElementById('name_visabl')
let card = document.querySelector('.card')
let btnmodelight = document.getElementById('btncashing1')
let head = document.querySelector('head')
let totalmetr = document.getElementById('total2')
let lesta = document.querySelector('#les1')
let mnue = document.getElementById('menu')
let obj1 = document.querySelector('.object')
let ttf = document.getElementById('tbd123'); 
let username = document.getElementById('username')
let password = document.getElementById('password')
let log = document.getElementById('log')
let mnu = document.getElementById('mnu')
let logout = document.getElementById('log_out')
let divchangepass = document.getElementById('change_pass')
let peror = document.getElementById('erorlogin')
let inpedit = document.getElementById('inpedit')
let cash = document.getElementById('cch1')
let notestitle = document.getElementById('notes')
let site = document.getElementById('site')
let btnobj = document.getElementById('Add_Withdraw')
let datawin = document.getElementById('datawin')
let Perorobj = document.querySelector('.p_object')
let v1 = document.getElementsByClassName('typ1')
let v2 = document.getElementsByClassName('typ2')
let v3 = document.getElementsByClassName('ss5')
let v4 =  document.getElementsByClassName('typ3')
let data5 = document.getElementById('datawin')
let prision = document.getElementById('perm1')
let names = document.getElementById('name_cus')
let notes = document.getElementById('Notes')
let divcash = document.getElementById('cash')
let bt1 = document.getElementById('bntplus')
let bt2 = document.getElementById('bntreduce')
let textobj = document.getElementById('textobj')
let InpSearchDeletCahs = document.getElementById('inpidexreduce')
let p1 = document.getElementById('p_1')
let p2 = document.getElementById('p_2')
///////////////////////////////////////////////////////
let passlogin;
let allpass;
let btnmodeobj;
let shei;
let shevalue;
let idex1;
let objects;
let newobj
let ititle;
let idex;
let isshowtitle;
let totalm1;
let arrplus;
let idshowcash
let isdeletcash;
let MenesOrPlus;
let MenesOrPlus1;
let ideletreduce;
let totalmm;
let countvalue;
let idtitle;
let valueedit;
let objreduce; 
let objreduce1; 

//////////////////////////////////////////////////////
let color = '#6f104ab4';
let arrreduce = [];
let cssrun = '';
let btnchange = 'h1'
let vvf = 'min';
let modesearch = 'title'
let mode = 'create';
total1.style.display = 'none'
let arridex = [];
let isagain = true;
let code = []
let titlereduce = []
let reduce = []
let modesearchcash = arrreduce
var os = null;
textobj.innerHTML = '----'


function getOS() {
    var userAgent = window.navigator.userAgent
    if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/iPhone/.test(userAgent)) {
        os = 'iOS';
    }
    
    return os;
}
getOS()

function zoom(){
    if(os === 'Android' || os === 'iOS'){

        document.body.style.zoom = '40%'
    }
    else{
        document.body.style.zoom = '80%'
    }
    console.log(os)
}
zoom()

function getname(){
    nameVesabl.innerHTML = localStorage.getItem('nameUser') + ' / ' + localStorage.getItem('advansev')
}
getname()
let idsort;

if(localStorage.getItem('sort') !== null){
    idsort = localStorage.getItem('sort');
}else{idsort = 'Coding'}

let dark = localStorage.getItem("mode1");



function showchaengpass(){
    if(btnchange === 'h1'){
        document.getElementById('change_pass').style.transition = '1s';
        document.getElementById('change_pass').style.display = 'block'
        document.getElementById('btnshow_chaengpass').innerHTML = '▲ Chaenge Password'
        btnchange = 'h2'
    }
    else{
        document.getElementById('change_pass').style.transition = '1s';
        document.getElementById('change_pass').style.display = 'none'
        document.getElementById('btnshow_chaengpass').innerHTML = '▼ Chaenge Password'
        btnchange = 'h1'
    }
}


function islight(){
    if(dark == 'dark')
    {
        btnmodelight.innerHTML = '<img src="1off.png" alt="gg">'
        cssrun = 'card2light.css'
    }
    else
    {
        btnmodelight.innerHTML = '<img src="1on.png" alt="gg">'
        cssrun = 'card2.css'
    }

    head.innerHTML = `<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document1</title>
        <link rel="stylesheet" href="${cssrun}">
    `
}
islight()


function mnu1(){
    if(obj1.style.display == 'block'){
        obj1.style.display = 'none'
    }
    if(vvf == 'min'){
        mnu.style.display = 'block'
        vvf = 'man'
        card.style.transition = '0.25s';
        card.style.margin = 'auto 95px auto auto'
        if(os === 'Android' || os === 'iOS'){
            card.style.width = '64%'
            menu.style.width = '68%'
        }
        else{
            card.style.width = '68%'
            menu.style.width = '73%'
        }
    }
    else if(vvf == 'man'){
        vvf = 'min'
        mnu.style.display = 'none'
        card.style.width = '80%'
        card.style.margin = 'auto'
        menu.style.width = '90%'
    }
    console.log(vvf)
}

function getnewpass(){
    if(localStorage.getItem('pass') !== null){

        passlogin = localStorage.getItem('pass').split(',')
    }
    if(localStorage.getItem('allpassword') !== null){

        allpass = localStorage.getItem('allpassword')   
    }
}
getnewpass()

function loguot(){
    localStorage.setItem('allpassword','')
    getnewpass()
    cheack()
}

let isobj = false;
let isshowcashin = false;
function cheack(){
    if(allpass == passlogin.join()){
        if(localStorage.getItem('advansev') == 'admin'){

            log.style.display = 'none'
            card.style.display = 'block'
            submit.style.display = 'block'
        }
        else if(localStorage.getItem('advansev') == 'editor'){
            editor()
        }
        else if(localStorage.getItem('advansev') == 'user'){
            user()
        }
        // getname()
    }
    else{
        islight()
        log.style.display = 'block'
        card.style.display = 'none'
        cash.style.display = 'none'
        mnu.style.display = 'none'
        vvf = 'man'
        mnu1()
        if(isobj){
            iobj('fole')
        }
    }
}
cheack()

function login(){
    log.style.display = 'block'
    let des = username.value.split('/')
    if(String(des[1]).toLowerCase() == 'admin' && password.value == passlogin[0])
    {
        admin()
        localStorage.setItem('advansev',String(des[1]).toLowerCase())
        location.reload()
    }
    else if(String(des[1]).toLowerCase() == 'editor' && password.value == passlogin[1]){
        editor()
        localStorage.setItem('advansev',String(des[1]).toLowerCase())
        location.reload()
    }
    else if(String(des[1]).toLowerCase() == 'user' && password.value == passlogin[2]){
        user();
        localStorage.setItem('advansev',String(des[1]).toLowerCase())
        location.reload()
    }
    else{
        peror.style.display = 'block'
    }
    localStorage.setItem('nameUser',String(des[0]))
    sharedpowers()
    cheack()
    getname()
}

function sharedpowers(){
    if(isshowcashin == false && allpass == passlogin){

        card.style.display = 'block'
    }else{card.style.display = 'none'}
}

function admin(){
    sharedpowers()
    log.style.display = 'none'
    localStorage.setItem('allpassword',passlogin.join())
    allpass = localStorage.getItem('allpassword')
    divchangepass.style.display = 'block'
    document.getElementById('Add_Withdraw').style.display = 'block'
    submit.style.display = 'block'
    // document.getElementById('btnshow_chaengpass').style.display = 'block'
    document.querySelector('.adduser').style.display = 'block'
    document.getElementById('Editproducts').style.display = 'block'

}

function editor(){
    sharedpowers()
    log.style.display = 'none'
    submit.style.display = 'none'
    localStorage.setItem('allpassword',passlogin.join())
    allpass = localStorage.getItem('allpassword')
    // document.getElementById('btnshow_chaengpass').style.display = 'none'
    document.querySelector('.adduser').style.display = 'none'
    document.getElementById('Editproducts').style.display = 'none'
}
function user(){
    sharedpowers()
    log.style.display = 'none'
    submit.style.display = 'none'
    localStorage.setItem('allpassword',passlogin.join())
    allpass = localStorage.getItem('allpassword')
    document.getElementById('Add_Withdraw').style.display = 'none'
    document.querySelector('.adduser').style.display = 'none'
    document.getElementById('Editproducts').style.display = 'none'
    // document.getElementById('btnshow_chaengpass').style.display = 'none'
}

setInterval(function(){
if(localStorage.getItem('read') == 'true'){
    alldata()
}
},100)

    function alldata(){
        islocal()
        mysort(idsort)
        showdata()
        isreduce()
        showreduce(idshowcash)
        cheack()
        getnewpass()
        cheack();
        sharedpowers();
        localStorage.setItem('read',false)
    }



    function getidx(value){
        let ddr = value.indexOf('-')
        let ide = (value.split(''))
        
        if(value.length === 3){
         ide.splice(ddr,1,'0')
      }
      else if (value.length === 5){
          ide.splice(ddr,1)
        }
        else{
            if(ddr == 1){
                ide.splice(ddr,1)
            }
            else{
                ide.splice(ddr,1,'0')
            }
        }
        
        let idx;
        for(i = 0; i < ide.length; i++){
            idx += ide[i]
        }
        idex1 = (+idx.slice(9))
        console.log()
    }

    
    function islocal(){

        if(localStorage.product != null)
        {
            (objects = JSON.parse(localStorage.product));
    
        }
        else{ localStorage.removeItem('product'); objects = [] };
    }
    islocal()


    document.getElementById('submit').onclick = function(){
            newobj = 
            {
                title:title.value,
                ads:Number(ads.value),
                category:category.value,
                notestitle:notestitle.value,
                site:site.value,
                dexx:idex1,
            }
            if(title.value != '' && category.value != '')
            {
                if(mode === 'create')
                {
                    objects.push(newobj); 
                }
                else
                {
                    objects[shei] = newobj;
                    mode = 'create';
                    submit.innerHTML = 'Create';
                }
                localStorage.setItem('product', JSON.stringify(objects))

                cleardata()
            }
            mysort(idsort)
            showdata()
        }

        mysort(idsort)
        function cleardata(){
            title.value = '';
            ads.value = '';
            category.value = '';
            notestitle.value = '';
            site.value = '';
        }
        
        function showdata(){
            let table = '';
            for(let i = 0; i < objects.length; i++)
            {
                table += `<tr >
                <th>${i+1}</th>
                <td>${objects[i].title}</td>
                <td style="background-color:${color}">${objects[i].ads}</td>
                <td>${objects[i].category}</td>
                <td>${objects[i].site}</td>
                <td>${objects[i].notestitle}</td>
                </tr>
                    `
                    if(color == '#6f104ab4'){
                        color = '#8a2554b4'
                    }
                    else{color = '#6f104ab4'}
                }
                document.getElementById('tbody').innerHTML = table;
                }

    function deletdata(){  
        if(valueedit != isNaN && inpedit.value != ''){
            console.log('10')
            objects.splice(valueedit,1);
            localStorage.product = JSON.stringify(objects);
            if(searchtype.value != ''){
            searchobject(shevalue)
            }
            else if(searchtype.value == '')
            {showdata()}
            inpedit.value = ''
            indexobj()
        }
        else if(inpedit.value == 'Delet All' + '/' + passlogin[0]){
            ShowDeletAll()
        }
        else{
            console.log('0')

        }
    }

    function ShowDeletAll(){
        objects.splice(0)
        localStorage.product = JSON.stringify(objects);
        location.reload();
    }
    
    function updateprodect(){
        shei = valueedit;
        title.value = objects[valueedit].title;
        ads.value = objects[valueedit].ads;
        category.value = objects[valueedit].category;
        notestitle.value = objects[valueedit].notestitle;
        site.value = objects[valueedit].site;
        getidx(category.value)
        mode = 'update';
        submit.innerHTML = 'Update'
        scroll({
            top:0,
            behavior:'smooth'
        })
        inpedit.value = ''
        indexobj()
    }
    
    document.getElementById('searchbtn1').onclick= () =>{
        searchtype.style.display = 'block'
        modesearch = 'title';
        searchtype.focus();
        searchtype.value = '';
    }

    let issear = objects.length;

    
    function searchobject(value){
        shevalue = value;
        let table = '';
        let pice = '';
        let metr = 0;
        let yong = [];
        for(let i = 0; i < objects.length; i++)
        {
            if(pice < issear)
            {

                if(modesearch == 'title')
                {
                    if(objects[i].title.includes(value) || objects[i].category.includes(value))
                    {
                        if(obj1.style.display !== 'block'){

                            table += `<tr>
                            <th>${i+1}</th>
                            <td>${objects[i].title}</td>
                            <td style="background-color:${color}">${objects[i].ads}</td>
                            <td>${objects[i].category}</td>
                            <td>${objects[i].site}</td> 
                            <td>${objects[i].notestitle}</td>
                            </tr>
                            `
                            if(color == '#6f104ab4'){
                                color = '#8a2554b4'
                            }
                            else{color = '#6f104ab4'}
                        }
                        
                        ititle = objects[i].title
                        idex = objects.indexOf(objects[i])
                        pice++;
                        yong.push(+objects[i].ads)
                        totalm1 = objects[i].ads  
                    }
                    
                }
            }
        }
           
        for(let j = 0;j < yong.length; j++){
            metr += yong[j];
            totalmm = metr
        }

        if(pice == objects.length || pice == 0){
            isshowtitle = true;
        }else
        {
            total1.style.display = 'block'
            totalmetr.style.display = 'block'
            isshowtitle = false;
        }

        if(obj1.style.display == 'block'){
            showtitle();
            issear = 1
        }else{
            issear = objects.length
            totalmetr.innerHTML = metr;
            total1.innerHTML = pice;
            document.getElementById('tbody').innerHTML = table;
        }

        if(value != '' && value.length >= 2 && objects.length !== 0){
            total1.style.display = 'block'
            totalmetr.style.display = 'block'
        }
        else{
            total1.style.display = 'none'
            totalmetr.style.display = 'none'
        }
    }

    
    btnmodelight.onclick = function(){
        btnmodelight.id = localStorage.getItem("mode2")
        if(btnmodelight.id == 'btncashing1'){
            dark = 'light'
            this.id = 'btncashing10'
        }
        else{
            dark = 'dark'
            this.id = 'btncashing1'
        }
        localStorage.setItem("mode1",dark)
        localStorage.setItem("mode2",btnmodelight.id)
        btnobject(btnmodeobj)
        if(isobj){
            btnaplly()
        }
        islight()
        location.reload();
    }

function bard1()
{
    if(localStorage.getItem('cashdiv') != null){

        head.innerHTML = `    <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>torol</title>
        <link rel="stylesheet" href="cashin.css">`
    
        cash.style.display = 'block'
        card.style.display = 'none';
        mnue.style.display = 'none'
        isshowcashin = true;
        showreduce('Reduce')
        console.log(isshowcashin)
        mnu.style.display = 'none'
        iobj('fole')
    }
}



btnobj.onclick = ()=>{
    if(localStorage.getItem('savedata') !== null){
        console.log('hsan')
        iobj('save data')
    }
    else{iobj('Auto System')}
}

let opensave = true;
function iobj(id){
    if(vvf == 'man'){
        mnu1()
    }

    countinput()
    isobj = true;
    obj1.style.display = 'block'
    datawin.style.fontSize = '16px';
    mnue.style.display = 'none'
    scroll({
        top:0,
        behavior:'smooth'
    })

    if(id == 'Auto System'){
        let data = new Date();
        datawin.value =  data.getDate() + '/' + (data.getMonth() +1) + '/' + data.getFullYear();
        btnobject()
        document.getElementById(`${0 + '2inp'}`).focus();
    }
    else if(id == 'save data'){

        datawin.value = arrsave[0].data5
        prision.value = arrsave[0].prision
        names.value = arrsave[0].names
        notes.value = arrsave[0].notes
        btnobject(arrsave[0].modesystem)
        for(let i = 0; i < arrsave[0].code1.length; i++){
            if(arrsave[0].code1[i] == '_' || arrsave[0].code1[i] == null){

                arrsave[0].code1.splice(i,1)
                i--
            }
            else{
                hyt(i)
                let k1 = document.getElementById(`${i + '2inp'}`)
                k1.value = objects[arrsave[0].code1[i]].category
                opensave = false
                searchobject(objects[arrsave[0].code1[i]].category)
                showtitle()
            }
        }
        document.getElementById(`${arrsave[0].code1.length + '2inp'}`).focus();
        opensave = true
        showtitle()
    }
    else{
        // location.reload()
    }
    console.log(opensave)

}



let inpcountobj = document.getElementById('count1')

let arrsave = []
if(localStorage.savedata != null)
    {
        (arrsave = JSON.parse(localStorage.savedata));
    }
    else{ localStorage.removeItem('savedata')};

    let code1;

function saveip(arr1){
    objreduce1 = {
        data5:data5.value,
        prision:prision.value,
        names:names.value,
        notes:notes.value,
        code1:arr1,
        reduce:reduce,
        Username:localStorage.getItem('nameUser'),
        modesystem:btnmodeobj,
    }
    arrsave[0] = (objreduce1)
    localStorage.setItem('savedata',JSON.stringify(arrsave))
}


function countinput(){
    let desplayinp = 'block'

    let tablez = '';
 
        for(let i = 0; i < objects.length; i++){
            tablez +=
            `<tr>
            <th id="${i + '1inp'}" style="display:${desplayinp};">${i+1}.</th>
            <th><input id="${i + '2inp'}" style="display:${desplayinp};" class="typ2"  onfocus="hyt(${i})" onkeyup="searchobject(this.value)" type="text"></th>
            <th><input id="${i + '3inp'}" style="display:${desplayinp};" type="text" id="vf" class="typ1"></th>
            <th><small id="${i + 'M'}" style="display:${desplayinp};" class="ss5"></small><th>
            <th><input id="${i + '4inp'}" style="display:${desplayinp};" type="tel" class="typ3"></th>
            </tr>`
            desplayinp = 'none'
        }
        ttf.innerHTML = tablez;  

}

function hyt(i){
    idtitle = i;
}




function showtitle(){
    if(issear == 1 && v2[idtitle].value.length > 2 && isshowtitle == false){

         for(let i = 0; i < arridex.length - 1; i++){
            let idpro = arridex[i]
            if(idpro === idex){
                isagain = false
                p1.style.display = 'block'
                p2.innerHTML = 'This product has already been added to the invoice'
                p2.style.color = '#ffffff'
                Perorobj.style.display = 'block'
                arridex.splice(idtitle,1,'_')
                v1[idtitle].value = '';
                v3[idtitle].innerHTML = '';
                i = arridex.length
            }
            else{
                isagain = true
            }
        }
        if(isagain === true){
            v1[idtitle].value = ititle
            v3[idtitle].innerHTML = totalmm
            arridex[idtitle] = idex;
            // Perorobj.style.display = 'none'
            if(arridex.length < objects.length){
                document.getElementById(`${idtitle + 1}` + '1inp').style.display = 'block'
                document.getElementById(`${idtitle + 1}` + '2inp').style.display = 'block'
                document.getElementById(`${idtitle + 1}` + '3inp').style.display = 'block'
                document.getElementById(`${idtitle + 1}` + 'M').style.display = 'block'
                document.getElementById(`${idtitle + 1}` + '4inp').style.display = 'block'
            }
        }
    }
    else{
        arridex.splice(idtitle,1,'_')
        v1[idtitle].value = '';
        v3[idtitle].innerHTML = '';
    }
    if(opensave){
        saveip(arridex);
        console.log('pop')
    }
}


function btnaplly(){
    arrmaines1 = []
    let totalarr1 = 0
    let ku = true;

        for( i = 0; i < arridex.length; i++)
        {
            if(v1[i].value != ''){

                arrmaines1 = v4[i].value.split('+')
                for(j = 0; j < arrmaines1.length; j++){
    
                    totalarr1 += +arrmaines1[j]
                 }
                if(v4[i].value !== '' && !isNaN(totalarr1)){

                        if(btnmodeobj == 'bntreduce'){

                         if(+totalarr1 > +objects[arridex[i]].ads || +totalarr1 == 0){
                             let isok = window.confirm(`There are products whose quantity is less than the withdrawn quantity in"${objects[arridex[i]].title}"`)
                             if(isok == true){
                                if(i == arridex.length){
                                    ku = true
                                }
                                console.log('yes')
                             }
                             else{
                                ku = false
                                i = arridex.length
                                console.log('no')
                             }
                            }
                            arrmaines1.splice(0)
                            totalarr1 = 0
                        }
                        else if(btnmodeobj == 'bntplus'){
                            if(i == arridex.length){
                                ku = true
                            }
                        }
                        else{
                            ku = false
                            p2.innerHTML = 'Please must select the invoice system'
                            p2.style.color = '#f80000'
                            p2.style.display = 'block'
                            p1.style.display = 'none'
                        }
                        v4[i].classList.remove('inperor')
                        if(dark == 'light'){

                            v4[i].style.background = '#2e032e'
                        }
                        else{v4[i].style.background = '#f0f8ff'}
                }
                else{
                    v4[i].classList.add('inperor')
                    v4[i].style.background = '#62088036'
                    v4[i].placeholder = 'Fill the void'
                    v4[i].focus()
                    ku = false
                    i = arridex.length
                }
            }
            arrmaines1.splice(0)
            totalarr1 = 0
        }
        if(ku == true && arridex.length != 0){
            yesapllyreduce()
        }
}


function isreduce(){

    if(localStorage.cashdiv != null){
        arrreduce = JSON.parse(localStorage.cashdiv)
        localStorage.setItem('cashdiv',JSON.stringify(arrreduce))
    }
    else{ localStorage.removeItem('cashdiv'); arrreduce = []}

    if(localStorage.pluscashdiv != null){
        arrplus = JSON.parse(localStorage.pluscashdiv)
        localStorage.setItem('pluscashdiv',JSON.stringify(arrplus))
    }
    else{localStorage.removeItem('pluscashdiv'); arrplus = []}
}
isreduce()

function impurtcach(){
    localStorage.setItem('cashdiv',JSON.stringify(arrreduce))
    localStorage.setItem('pluscashdiv',JSON.stringify(arrplus))
}

function yesapllyreduce(){
    if(btnmodeobj !== undefined){
        arrmaines = []
        totalarr = 0
        for( i = 0; i < arridex.length; i++){
            if(v1[i].value != ''){
                arrmaines = v4[i].value.split('+')
                for(j = 0; j < arrmaines.length; j++){
                    
                    totalarr += +arrmaines[j]
                }
                if(btnmodeobj == 'bntreduce'){
    
                    if(+totalarr <= +objects[arridex[i]].ads){
                        objects[arridex[i]].ads -= (+totalarr);
                    }
                    else{
                        objects[arridex[i]].ads = 0
                    }
                }
                else{
                    objects[arridex[i]].ads += (+totalarr);
                    console.log('plus1')
                }
                code.push(objects[arridex[i]].category)
                titlereduce.push(objects[arridex[i]].title)
                reduce.push(+totalarr)
                arrmaines.splice(0);
                totalarr = 0;
            }
        }
        localStorage.setItem('product',JSON.stringify(objects));
    
        objreduce = {
            data5:data5.value,
            prision:prision.value,
            names:names.value,
            notes:notes.value,
            code:code,
            titlereduce:titlereduce,
            reduce:reduce,
            Username:localStorage.getItem('nameUser'),
        }
    
        if(btnmodeobj == 'bntreduce'){
            arrreduce.push(objreduce);
            localStorage.setItem('cashdiv',JSON.stringify(arrreduce))
        }
        else{
            arrplus.push(objreduce);
            localStorage.setItem('pluscashdiv',JSON.stringify(arrplus))
            console.log('arrplus')
        }
        code.splice(0)
        titlereduce.splice(0)
        reduce.splice(0)
        location.reload();
    }
    else{
        Perorobj.innerHTML = 'Please must select the invoice system'
        Perorobj.style.Color = '#f80000'
        Perorobj.style.display = 'block'
    }
}

function mysort(id){
    if(id == 'Letters'){

        objects.sort(function(a,b){
            let x = (a.title.toLowerCase());
            let y = (b.title.toLowerCase());
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
    }
    else{

        objects.sort(function(a,b){return a.dexx - b.dexx})
    }
    localStorage.setItem('sort',id);
    document.getElementById('tbodyedit').innerHTML = ''
    inpedit.value = ''
    showdata();
}

function showreduce(id){

    idshowcash = id
    document.getElementById('inpidexreduce').value = ''
    document.getElementById('Inp_Search_Cash').value = ''
    idexreduce()
    
    let bodycash = document.querySelector('body')
    if(id === 'Addition'){
        modesearchcash = arrplus
        bodycash.classList.add('bodyadd')
        document.getElementById('title_cash').innerHTML = 'Addition'
    }
    else{
        modesearchcash = arrreduce
        bodycash.classList.remove('bodyadd')
        document.getElementById('title_cash').innerHTML = 'Reduce'
    }
   let tbl = ''
   let tbl1 = ''
    for(i = 0; i < modesearchcash.length; i++)
    {
        for(j = 0; j < modesearchcash[i].code.length; j++)
        {
            tbl1 += `<tr>
            <th>${modesearchcash[i].code[j]}</th>
            <th>${modesearchcash[i].titlereduce[j]}</th>
            <th>${modesearchcash[i].reduce[j]}</th>
            </tr>
            `
        }
        tbl += `<div id="cash1">
        <button onclick="hi(${i+1})" id="ireduce">${i+1}</button>
        <table id="ta">
        <tr>
        <th>date: ${modesearchcash[i].data5} </th>
        <th>permission: ${modesearchcash[i].prision} </th>
        <th>customer name: ${modesearchcash[i].names} </th>
        <th>Notes: ${modesearchcash[i].notes}</th>
        <th id="User">${modesearchcash[i].Username}</th>
        </tr>
        </table>
        <table id="taa">
            <tr id="tale">
            <th>code title</th>
            <th>title</th>
            <th class="style_idshowcash" >${idshowcash}</th>
            </tr>
            <tbody id="tbcash">
            ${tbl1}
            </tbody>
            </table>
            </div>
            `
            tbl1 = ''
        }
    divcash.innerHTML = tbl
}



function cashdelet(){
    if(isdeletcash){
        modesearchcash.splice(ideletreduce,1);
        impurtcach()
        idexreduce(value = '')
        showreduce(idshowcash)
        InpSearchDeletCahs.value = ''
    }
}

function searchreduce(value){
    let tbl = ''
    let tbl1 = ''
    for(i = 0; i < modesearchcash.length; i++)
    {

        if(modesearchcash[i].data5.includes(value) || modesearchcash[i].prision.includes(value) || modesearchcash[i].names.includes(value) || modesearchcash[i].notes.includes(value))
        {
            for(j = 0; j < modesearchcash[i].code.length; j++)
            {
            tbl1 += `<tr>
            <th>${modesearchcash[i].code[j]}</th>
            <th>${modesearchcash[i].titlereduce[j]}</th>
            <th>${modesearchcash[i].reduce[j]}</th>
            </tr>
            `
            }
            tbl += `<div id="cash1">
            <button onclick="hi(${i+1})" id="ireduce">${i+1}</button>
            <table id="ta">
            <tr>
            <th>date: ${modesearchcash[i].data5} </th>
            <th>permission: ${modesearchcash[i].prision} </th>
            <th>customer name: ${modesearchcash[i].names} </th>
            <th>Notes: ${modesearchcash[i].notes}</th>
            <th id="User">${modesearchcash[i].Username}</th>
            </tr>
            </table>
            <table id="taa">
            <tr id="tale">
            <th>code title</th>
            <th>title</th>
            <th id="style_idshowcash">${idshowcash}</th>
            </tr>
            <tbody id="tbcash">
            ${tbl1}
            </tbody>
            </table>
            </div>
            `
            tbl1 = ''
        }
    }
    divcash.innerHTML = tbl
}

function hi(value){
    InpSearchDeletCahs.value = value
    idexreduce(value)
}




function btnobject(id){
    btnmodeobj = id

    if(btnmodeobj == 'bntplus'){
        document.getElementById('name_cus').placeholder = 'Resource Name'
        if(dark === 'light'){

            bt1.style.background = '#278663'
            bt2.style.background = '#4e004b'
        }
        else{
            bt1.style.background = '#278663'
            bt2.style.background = '#04546b'
        }
        bt1.style.transform = `scale(1.1)`
        bt2.style.transform = `scale(1)`
        bt1.classList.add('stybtn1')
        bt2.classList.remove('stybtn1')
        textobj.innerHTML = 'Addition'
        stlyeM(btnmodeobj)
    }
    else if(btnmodeobj == 'bntreduce'){
        document.getElementById('name_cus').placeholder = 'Client Name'
        if(dark === 'light'){

            bt2.style.background = '#741111'
            bt1.style.background = '#4e004b'
        }
        else{
            bt2.style.background = '#741111'
            bt1.style.background = '#04546b'
        }
        bt2.style.transform = `scale(1.1)`
        bt1.style.transform = `scale(1)`
        bt1.classList.remove('stybtn1')
        bt2.classList.add('stybtn1')
        textobj.innerHTML = 'Reduce'
        stlyeM(btnmodeobj)
    }
    else{
        
        if(dark === 'light'){

            bt1.style.background = '#4e004b'
            bt2.style.background = '#4e004b'
        }
        else{
            bt1.style.background = '#04546b'
            bt2.style.background = '#04546b'
        }
        bt2.style.transform = `scale(1)`
        bt1.style.transform = `scale(1)`
        bt1.classList.remove('stybtn1')
        bt2.classList.remove('stybtn1')
    }
}

function stlyeM(PorR){
    if(PorR == 'bntplus'){
        MenesOrPlus = 'plus'
        MenesOrPlus1 = 'menes'
    }
    else{
        MenesOrPlus = 'menes'
        MenesOrPlus1 = 'plus'
    }
    for( i = 0; i < objects.length; i++){
        document.getElementById(`${i + 'M'}`).classList.add(MenesOrPlus)
        document.getElementById(`${i + 'M'}`).classList.remove(MenesOrPlus1)
    }
}

function indexobj(value){
    valueedit = value-1;

    if(value != '' && value <= objects.length && !isNaN(value)){

        let table =`<tr>
        <td>${objects[value-1].title}</td>
        <td class="adss">${objects[value-1].ads}</td>
        <td>${objects[value-1].category}</td>
        </tr>
        `
        document.getElementById('tbodyedit').innerHTML = table
    }
    else{
        document.getElementById('tbodyedit').innerHTML = ''
        valueedit = ''
    }
}


function idexreduce(value){
    ideletreduce = value - 1;
    if(value != '' && value <= modesearchcash.length){
    tbdy = `<table>
                <tr>
                    <td>${modesearchcash[ideletreduce].data5}</td>
                </tr>
                <tr>
                    <td>${modesearchcash[ideletreduce].prision}</td>
                </tr>
                <tr>
                    <td>${modesearchcash[ideletreduce].names}</td>
                </tr>
                <tr>
                    <td>${modesearchcash[ideletreduce].notes}</td>
                </tr>
            </table>`

                document.getElementById('tbodycash').innerHTML = tbdy;
                isdeletcash = true;
            }
            else{
                document.getElementById('tbodycash').innerHTML = '';
                isdeletcash = false;
            }
}
btnobject()
showdata();
alldata();
