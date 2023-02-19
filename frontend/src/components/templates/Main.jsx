import './Main.css'
import './Header.css'
import React from 'react'
import Header from './Header'
// Linha 8: AS PROPRIEDADES DO 'props' DO MAIN, FORAM ATRIBUÍDOS DENTRO DO 'Header'
export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>


