import Image from "next/image";
import Link from "next/link";

import { Footer } from "@styles/components/Footer";
import { globals } from "@utils/constants";
import Logo from "@components/logo";
import logosData from "@utils/gluetexts/logos";

const footer: React.FC = () => {
    return (
        <Footer>
            <div className="item">
                <div className="item__logos">
                    <Logo
                        alt={logosData.ig.alt}
                        height={logosData.ig.heigth}
                        width={logosData.ig.width}
                        url={logosData.ig.url}
                        src={logosData.ig.src}
                    />
                    <Logo
                        alt={logosData.ws.alt}
                        height={logosData.ws.heigth}
                        width={logosData.ws.width}
                        url={logosData.ws.url}
                        src={logosData.ws.src}
                    />
                </div>
            </div>

            <div className="item">
                <Image
                    src={`${globals.cloudinaryBaseUrl}v1633725873/naturnia/logos/logocolor.png`}
                    width={250}
                    height={200}
                />

                <ul className="item__list">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/catalogo">Catalogo</Link>
                    </li>
                    <li>
                        <Link href="/soy-naturnia">Soy Naturnia</Link>
                    </li>
                </ul>
            </div>

            <div className="item item-end">
                <div className="item__contact">
                    <p>
                        Direccion:
                        <a href="" target="_blank" rel="noreferrer">
                            Planta de producción, Vereda Labriegos Guarne –
                            Colombia
                        </a>
                    </p>
                    <p>
                        Telefono:
                        <a href="tel:+573147073406">+57 314-707-3406</a>
                    </p>
                    <p>
                        Email:
                        <a href="mailto:contacto@naturnia.com.co">
                            contacto@naturnia.com.co
                        </a>
                    </p>
                </div>
            </div>
        </Footer>
    );
};

export default footer;
