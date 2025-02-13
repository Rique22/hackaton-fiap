import React from 'react';

function Home() {
    return (
        <div id='homePage'>
            <section id='carossel'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" id="carousel-item">
                            <h1>Bem-vindo ao FIAP News!</h1>
                            <p>Explore as últimas notícias e tendências em tecnologia.</p>
                        </div>
                        <div class="carousel-item" id="carousel-item">
                            <h1>Inteligência Artificial</h1>
                            <p>Descubra como a IA está transformando o mundo.</p>
                        </div>
                        <div class="carousel-item" id="carousel-item">
                            <h1>Inovações em Gadgets</h1>
                            <p>Conheça os gadgets mais recentes do mercado.</p>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section id='lastNews'>
                <h1>Ultimas noticias</h1>
            </section>
        </div>
    );
}

export default Home;