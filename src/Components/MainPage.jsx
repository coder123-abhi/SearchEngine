import React, {useRef, useState} from "react";
import './MainPage.css';


function MainPage(){

  
const inp=useRef('');
const [data, setData]=useState('');
const [text, setText]=useState(null);
const [showset, showSet]=useState(null);

const [res, setRes]=useState(null);

function show(){
    const x=inp.current.value;
    setData(x);
}

function reset(){
    setText('');
    window.location.reload(false);
}

function enable(){
    showSet(true);
}

function disable(){
    showSet(false);
}

function night(){
setRes(true);
}

function day(){
    setRes(false);
    }

return (
    <>

 <div className="searchEngine">   

<div className="nav_bar">
<div className='night_btn'><button onClick={()=>night()} id ='n_btn'>🌙</button></div>
<div className='day_btn'><button onClick={()=>day()} id='d_btn'>⛅️</button></div>
</div>




  {res ? 
   <>
    <div className="main_content_dark">

        

<div className="google_logo"><span id='G'>E</span><span id='O_one'>n</span><span id='O_two'>g</span><span id='g'>i</span><span id='le'>n</span><span id='e'>e</span></div>
<div className="google_search" onMouseEnter={()=>enable()} onMouseLeave={()=>disable()}><div id='s_logo'><a href={`https://www.google.co.in/search?q=${data}&sca_esv=564584496&sxsrf=AB5stBgTT1hXfIEcIxJ-yXTLivlSCRDaSg%3A1694495257011&source=hp&ei=GPL_ZILUOe_s2roPx9SM-Ac&iflsig=AD69kcEAAAAAZQAAKWfR9xIJETR-SyrpTWGlsI3sqsFj&gs_ssp=eJzj4tDP1Tcwzi6uNGD0Ys9ILCpLLEoBADeuBgI&oq=harvard&gs_lp=Egdnd3Mtd2l6IgdoYXJ2YXJkKgIIATIHECMYigUYJzILEC4YsQMYigUYkQIyCxAAGIoFGLEDGJECMgsQLhixAxiKBRiRAjILEAAYigUYsQMYkQIyCxAAGIAEGLEDGIMBMgUQABiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQLhiABBixAxiDAUiFHVCKBljcD3ABeACQAQCYAZ4BoAHFB6oBAzAuN7gBAcgBAPgBAagCCsICBxAjGOoCGCfCAggQLhiKBRiRAsICERAuGIMBGMcBGLEDGNEDGIAEwgILEAAYigUYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICBRAuGIAEwgIHEC4YigUYJ8ICCBAuGIAEGLEDwgILEC4YigUYsQMYgwHCAgsQLhiABBjHARivAcICCBAuGLEDGIAEwgIKEAAYAhjLARiABMICCxAuGIMBGLEDGIAE&sclient=gws-wiz`}><button onClick={()=>show()}  id='s_btn_logo_night'>🔎︎</button></a></div><div id='s_area'><input ref={inp}  value={text}   type='text' maxLength="1000" id='s_box_night'/></div>{showset ? <><div  className="reset_btn_night"><button onClick={()=>reset()} id='r_btn_night'>X</button></div></>:null }</div>
<div className="g_buttons">
    <div className="search_btn"><a href={`https://www.google.co.in/search?q=${data}&sca_esv=564584496&sxsrf=AB5stBgTT1hXfIEcIxJ-yXTLivlSCRDaSg%3A1694495257011&source=hp&ei=GPL_ZILUOe_s2roPx9SM-Ac&iflsig=AD69kcEAAAAAZQAAKWfR9xIJETR-SyrpTWGlsI3sqsFj&gs_ssp=eJzj4tDP1Tcwzi6uNGD0Ys9ILCpLLEoBADeuBgI&oq=harvard&gs_lp=Egdnd3Mtd2l6IgdoYXJ2YXJkKgIIATIHECMYigUYJzILEC4YsQMYigUYkQIyCxAAGIoFGLEDGJECMgsQLhixAxiKBRiRAjILEAAYigUYsQMYkQIyCxAAGIAEGLEDGIMBMgUQABiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQLhiABBixAxiDAUiFHVCKBljcD3ABeACQAQCYAZ4BoAHFB6oBAzAuN7gBAcgBAPgBAagCCsICBxAjGOoCGCfCAggQLhiKBRiRAsICERAuGIMBGMcBGLEDGNEDGIAEwgILEAAYigUYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICBRAuGIAEwgIHEC4YigUYJ8ICCBAuGIAEGLEDwgILEC4YigUYsQMYgwHCAgsQLhiABBjHARivAcICCBAuGLEDGIAEwgIKEAAYAhjLARiABMICCxAuGIMBGLEDGIAE&sclient=gws-wiz`}><button onClick={()=>show()}  id='s_btn_night'>Google Search</button></a></div>
    <div className="lucky_btn"><a href='https://www.google.com/doodles'><button id='l_btn_night'>I'm Feeling Lucky</button></a></div>
</div>

<div className="info_main">
    <div className="info">Help your kids be safe and confident online with Be <a id='info_link' href='https://beinternetawesome.withgoogle.com/en_in/?utm_source=google&utm_medium=hpp&utm_campaign=inbia2023'><span>Internet Awesome</span></a></div>
</div>

<div className='google_lang'>Engine offered in:<a href='https://www.google.com/?hl=hi' id='l'> हिन्दी</a> <a href='https://www.google.com/?hl=bn' id='l'>বাংলা</a> <a href='https://www.google.co.in/?hl=te' id='l'> తెలుగు</a> <a href='https://www.google.com/?hl=mr' id='l'>मराठी</a> <a href='https://www.google.com/?hl=ta' id='l'>தமிழ்</a> <a href='https://www.google.com/?hl=gu' id='l'>ગુજરાતી </a><a href='https://www.google.com/?hl=kn' id='l'>ಕನ್ನಡ</a> <a href='https://www.google.com/?hl=ml' id='l'>മലയാളം</a> <a href='https://www.google.com/?hl=pa' id='l'>ਪੰਜਾਬੀ</a></div>

    </div>
 </>
   :
    
        <>
    <div className="main_content">

        

<div className="google_logo"><span id='G'>E</span><span id='O_one'>n</span><span id='O_two'>g</span><span id='g'>i</span><span id='le'>n</span><span id='e'>e</span></div>
<div className="google_search" onMouseEnter={()=>enable()} onMouseLeave={()=>disable()}><div id='s_logo'><a href={`https://www.google.co.in/search?q=${data}&sca_esv=564584496&sxsrf=AB5stBgTT1hXfIEcIxJ-yXTLivlSCRDaSg%3A1694495257011&source=hp&ei=GPL_ZILUOe_s2roPx9SM-Ac&iflsig=AD69kcEAAAAAZQAAKWfR9xIJETR-SyrpTWGlsI3sqsFj&gs_ssp=eJzj4tDP1Tcwzi6uNGD0Ys9ILCpLLEoBADeuBgI&oq=harvard&gs_lp=Egdnd3Mtd2l6IgdoYXJ2YXJkKgIIATIHECMYigUYJzILEC4YsQMYigUYkQIyCxAAGIoFGLEDGJECMgsQLhixAxiKBRiRAjILEAAYigUYsQMYkQIyCxAAGIAEGLEDGIMBMgUQABiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQLhiABBixAxiDAUiFHVCKBljcD3ABeACQAQCYAZ4BoAHFB6oBAzAuN7gBAcgBAPgBAagCCsICBxAjGOoCGCfCAggQLhiKBRiRAsICERAuGIMBGMcBGLEDGNEDGIAEwgILEAAYigUYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICBRAuGIAEwgIHEC4YigUYJ8ICCBAuGIAEGLEDwgILEC4YigUYsQMYgwHCAgsQLhiABBjHARivAcICCBAuGLEDGIAEwgIKEAAYAhjLARiABMICCxAuGIMBGLEDGIAE&sclient=gws-wiz`}><button onClick={()=>show()}  id='s_btn_logo'>🔎︎</button></a></div><div id='s_area'><input ref={inp}  value={text} onHove  type='text' maxLength="1000" id='s_box'/></div>{showset ? <><div  className="reset_btn"><button onClick={()=>reset()} id='r_btn'>X</button></div></>:null }</div>
<div className="g_buttons">
    <div className="search_btn"><a href={`https://www.google.co.in/search?q=${data}&sca_esv=564584496&sxsrf=AB5stBgTT1hXfIEcIxJ-yXTLivlSCRDaSg%3A1694495257011&source=hp&ei=GPL_ZILUOe_s2roPx9SM-Ac&iflsig=AD69kcEAAAAAZQAAKWfR9xIJETR-SyrpTWGlsI3sqsFj&gs_ssp=eJzj4tDP1Tcwzi6uNGD0Ys9ILCpLLEoBADeuBgI&oq=harvard&gs_lp=Egdnd3Mtd2l6IgdoYXJ2YXJkKgIIATIHECMYigUYJzILEC4YsQMYigUYkQIyCxAAGIoFGLEDGJECMgsQLhixAxiKBRiRAjILEAAYigUYsQMYkQIyCxAAGIAEGLEDGIMBMgUQABiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQLhiABBixAxiDAUiFHVCKBljcD3ABeACQAQCYAZ4BoAHFB6oBAzAuN7gBAcgBAPgBAagCCsICBxAjGOoCGCfCAggQLhiKBRiRAsICERAuGIMBGMcBGLEDGNEDGIAEwgILEAAYigUYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICBRAuGIAEwgIHEC4YigUYJ8ICCBAuGIAEGLEDwgILEC4YigUYsQMYgwHCAgsQLhiABBjHARivAcICCBAuGLEDGIAEwgIKEAAYAhjLARiABMICCxAuGIMBGLEDGIAE&sclient=gws-wiz`}><button onClick={()=>show()}  id='s_btn'>Google Search</button></a></div>
    <div className="lucky_btn"><a href='https://www.google.com/doodles'><button id='l_btn'>I'm Feeling Lucky</button></a></div>
</div>

<div className="info_main">
    <div className="info">Help your kids be safe and confident online with Be <a id='info_link' href='https://beinternetawesome.withgoogle.com/en_in/?utm_source=google&utm_medium=hpp&utm_campaign=inbia2023'><span>Internet Awesome</span></a></div>
</div>

<div className='google_lang'>Engine offered in:<a href='https://www.google.com/?hl=hi' id='l'> हिन्दी</a> <a href='https://www.google.com/?hl=bn' id='l'>বাংলা</a> <a href='https://www.google.co.in/?hl=te' id='l'> తెలుగు</a> <a href='https://www.google.com/?hl=mr' id='l'>मराठी</a> <a href='https://www.google.com/?hl=ta' id='l'>தமிழ்</a> <a href='https://www.google.com/?hl=gu' id='l'>ગુજરાતી </a><a href='https://www.google.com/?hl=kn' id='l'>ಕನ್ನಡ</a> <a href='https://www.google.com/?hl=ml' id='l'>മലയാളം</a> <a href='https://www.google.com/?hl=pa' id='l'>ਪੰਜਾਬੀ</a></div>

    </div>
    </>

    

}


</div>
    </>


)




}

export default MainPage;

