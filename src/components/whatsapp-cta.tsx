import Image from "next/image";

import { globals } from "@utils/constants";
import { WhatsAppCTAStyled } from "@styles/components/WhatsAppCTAStyled";

type Props = {
    width?: number;
    height?: number;
};

const whatsApp: React.FC<Props> = ({ width = 20, height = 20 }) => {
    const url = `${globals.wsApiUrl}${globals.wsContactNumber}&amp;text=${globals.wsMessage}`;

    return (
        <WhatsAppCTAStyled>
            <a href={url} target="_blank" rel="noreferrer">
                <Image
                    src={`${globals.cloudinaryBaseUrl}v1633615417/naturnia/logos/whatsapp.svg`}
                    alt="Contactanos por whatsapp"
                    width={width}
                    height={height}
                    loading="eager"
                />
            </a>
        </WhatsAppCTAStyled>
    );
};

export default whatsApp;
