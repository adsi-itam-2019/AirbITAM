function activeModal() {
    var modal = document.getElementById("login");
    if (!modal.classList.contains("is-active")){
        modal.classList.add("is-active");
    }
    else{
        modal.classList.remove("is-active"); 
    }
}
