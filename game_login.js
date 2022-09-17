function add_user(){
    jugador_1=document.getElementById("jugador_1").value;
    jugador_2=document.getElementById("jugador_2").value;
    localStorage.setItem("jugador_1", jugador_1);
    localStorage.setItem("jugador_2", jugador_2); 
    window.location="game_page.html"
}