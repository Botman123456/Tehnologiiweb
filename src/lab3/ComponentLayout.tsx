import { Layout} from 'antd';
import { ShowInterfataMea } from '../interfaces/InterfataMea';
import { ComponentCard } from './ComponentCard';
import { ComponentForm } from './ComponentForm';
import {ContentData} from './ContentData'


const { Content } = Layout;

export const informatiiCard = [
    {
        id: 1,
        titlu: "Titlu1",
        descriere: "Descriere 1",
    },
    {
        id: 2,
        titlu: "Titlu2",
        descriere: "Descriere 2",
    },
    {
        id: 3,
        titlu: "Titlu3",
        descriere: "Descriere 3",
    },
    {
        id: 4,
        titlu: "Titlu4",
        descriere: "Descriere 4",
    },
    {
        id: 5,
        titlu: "Titlu5",
        descriere: "Descriere 5",
    },
    {
        id: 6,
        titlu: "Titlu6",
        descriere: "Descriere 6",
    },
]

export const infoInterfata = {
    id: 1,
    nume: "Adasan",
    prenume: "Cristian",
    email: "cristi.adasan@email.com",
    varsta: 21,
    adresa: "Strada Teilor 14",
    s_f: "frate"
}

export const MyContent = () =>{
    return(

        <>
            <Layout className="layout">
                
                <main>
                    <Content style={{ padding: '0 50px' }}>
                        <ContentData/>
                    </Content>
                </main>
            </Layout>
        </>

    )
}