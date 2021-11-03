import { down } from "styled-breakpoints";
import styled from "styled-components";

import { Font } from "@styles/abstracts/mixins";
import { ThemedProps } from "../theme";

interface ClientesStyled extends ThemedProps {}

export const ClientesStyled = styled.section<ClientesStyled>`
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 992px;
    justify-content: center;
    margin: 0 auto;

    h1 {
        ${Font(45, 60, 0.5, 700)};
    }

    h2 {
        ${Font(45, 50, 0.5, 700)};
    }

    .clients {
        display: flex;
        width: 100%;
        margin: 32px 0;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;

        &__item--image {
            position: relative;
            width: 340px;
            height: 340px;
        }

        .sm {
            width: 200px;
            height: 200px;
        }
    }

    ${down("md")} {
        h1 {
            text-align: center;
        }

        .clients {
            &__item {
                margin: 24px 0;
            }

            &__item--image,
            .sm {
                width: 250px;
                height: 250px;
            }
        }
    }
`;
