document.addEventListener("DOMcontentLoaded" , () => {
    const login = document.querySelector ("#login");
    const createAccount = document.querySelector ("#createAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click" , () =>{
        login.classList.add("form_hidden");
        createAccount.classList.remove
    })
    });