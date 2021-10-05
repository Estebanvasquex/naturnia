import Head from "next/head";
import type { NextPage } from "next";

import { HomeStyled } from "@styles/components/Home";
import Asociate from "@components/asociate";
import Carousel from "@components/carousel";
import Categorias from "@components/categorias";
import Clientes from "@components/clientes";
import SoyNaturnia from "@components/soy-naturnia";
import Compra from "@components/compra";

const Home: NextPage = () => {
    return (
        <HomeStyled>
            <Head>
                <title>Naturnia.com | Inicio</title>
                <meta
                    name="Bienvenidos a  Naturnia.com"
                    content="Sitio oficial de Naturnia.com"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <section className="carousel">
                <Carousel />
            </section>

            <section className="soy-naturnia">
                <SoyNaturnia />
            </section>

            <section className="categories">
                <Categorias />
            </section>

            <section>
                <Asociate />
            </section>

            <section>
                <Clientes />
            </section>

            <section>
                <Compra />
            </section>
        </HomeStyled>
    );
};

export default Home;
