import React from "react";

function Card(article) {
    return (
        <a class="post__link" href="/article/${article._id}">
            <div class="card">
                {article.images && article.images.length > 0 ? (
                    <img src={article.images[0]} class='card-img-top' alt={article.title}/>
                ) : (
                    <img src='https://picsum.photos/200/300?random=1' class='card-img-top' 
                    alt='Imagem não disponível'/>
                )}
                <div class="card-body">
                    <h5 class="card-text">{article.title}</h5>
                    <p class="card-text">{article.content.substring(0, 200)}...</p>
                </div>
            </div>
        </a>
    );
}

export default Card;