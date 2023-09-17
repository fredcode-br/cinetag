import { Outlet } from "react-router-dom";

import Cabecalho from "components/Cabecalho";
import FavoritosProvider from "contextos/Favoritos";
import Container from "components/Container";
import Rodape from "components/Rodape";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
                    <FavoritosProvider>
                        <Container>
                            <Outlet />
                        </Container>
                    </FavoritosProvider>
                <Rodape />
        </main>
    )
}

export default PaginaBase;