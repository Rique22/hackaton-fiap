import React from 'react';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg" id='navbar'>
            <div class="container-fluid">
                <a class="navbar-brand" href="/" id='labelNavbar'>FIAP News</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/" id='homeLabel'>Home</a>
                        <div id='buttonsLoginRegister'>
                        <a class="nav-link" href="#" id='loginLabel'>Login</a>
                        <a class="nav-link" href="#" id='registerLabel'>Cadastro</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;