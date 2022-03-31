import React, { createRef, useRef } from 'react';

export default function Referencias(props){
    //let refMenu = createRef(), Este es para clases y el useRef para funciones (componentes we)
    let refMenu = useRef(),
    refMenuBtn = useRef();
    console.log(refMenu)
    console.log(refMenuBtn)
    const handleToggleMenu = (e) => {

        if (refMenuBtn.current.textContent === "Menu") {
            refMenuBtn.current.textContent = "Cerrar"
            refMenu.current.style.display = 'block'    
        }else {
            refMenuBtn.current.textContent = "Menu"
            refMenu.current.style.display = 'none'    
        }
        // Así ya no se manipula y recarga a todo el DOM
        //const $menu = document.getElementById('menu');
        
        // if (e.target.textContent === "Menu") {
        //     e.target.textContent = "Cerrar"
        //     $menu.style.display = 'block'    
        // }else {
        //     e.target.textContent = "Menu"
        //     $menu.style.display = 'none'    
        // }

    }

    
    return (
        <>
        <h2>Referencias</h2>
        <button id='menu-btn' ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
        <nav id='menu' ref={refMenu} style={{display: 'none'}}>
            <a href="#">Seccion 1</a> <br/>
            <a href="#">Seccion 2</a> <br/>
            <a href="#">Seccion 3</a> <br/>
            <a href="#">Seccion 4</a> <br/>
            <a href="#">Seccion 5</a> <br/>
        </nav>
        </>
    )
}