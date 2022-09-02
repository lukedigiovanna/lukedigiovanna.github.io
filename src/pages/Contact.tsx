import { Header, Body, Row, Column } from '../theme';

import styled from 'styled-components';

const Field = styled.p`
    margin-block: 10px;
    font-size: 1.05rem;
    font-family: sans-serif;
`

const FieldTitle = styled.span`
    font-weight: bold;
    margin-right: 20px;
`

const FieldValue = styled.span`
    /* text-decoration: underline; */
    border-bottom: 1px solid black;
    font-weight: thin;
`

export const Contact = () => {
    return (
        <Row>
            <Column>
                <Header> Contact </Header>
                <Body>
                    Feel free to reach out with any questions!
                    <Field>
                        <FieldTitle>
                            Email (personal): 
                        </FieldTitle>
                        <FieldValue>
                            lukedigiovanna@gmail.com
                        </FieldValue>
                    </Field>
                    <Field>
                        <FieldTitle>
                            Email (school): 
                        </FieldTitle>
                        <FieldValue>
                            lukedigiovanna@vt.com
                        </FieldValue>
                    </Field>
                </Body>
            </Column>
        </Row>
    );
}