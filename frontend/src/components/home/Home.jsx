import React from "react";
import Main from "../templates/Main";

export default props =>
    <Main icon="home" title="Início" subtitle="Projeto Crud 2 de React.">
        <div className="display-4">
            Bem Vindo! <hr />
        </div>
        <p className='mb-0'>
            Sistema para exemplificar a contrução de um
            cadastro desenvolvido em React.
        </p>
    </Main>