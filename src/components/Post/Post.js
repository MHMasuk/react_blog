import React from 'react';

const post = ( props ) => (
    <article onClick={props.clicked}>
        <div className="card-group">
            <div className="card p-3">
                <h1>{props.title}</h1>
                <div>
                    <p>{props.author}</p>
                </div>
                <a href="#" class="stretched-link"></a>
            </div>
        </div>
    </article>
);

export default post;