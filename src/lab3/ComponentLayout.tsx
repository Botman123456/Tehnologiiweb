import { Layout} from 'antd';
import { ShowInterfataMea } from '../interfaces/InterfataMea';
import { ComponentCard } from './ComponentCard';
import { ComponentForm } from './ComponentForm';
import {ContentData} from './ContentData'


const { Content } = Layout;

const informatiiCard = [
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

const infoInterfata = {
    id: 1,
    nume: "Adasan",
    prenume: "Cristian",
    email: "cristi.adasan@email.com",
    varsta: 21,
    adresa: "Strada Teilor 14",
    s_f: "frate"
}

export const ComponentLayout = () =>{
    return(

        <>
            <Layout className="layout">
                
                <main>
                    <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content grid">
                       {
                           informatiiCard.map((el, index)=>{
                               return(
                                   <ComponentCard key={ el.id } title={ el.titlu } description={ el.descriere } />
                               )
                           })
                       } 
                    </div>

                    <br />

                    <div>

                       <ComponentForm />

                    </div>

                    <div>
                        <ShowInterfataMea myData1={infoInterfata} myData2={infoInterfata}/>
                    </div>

                    
                    </Content>


                    <ContentData/>


                </main>
            </Layout>
        </>

    )
}