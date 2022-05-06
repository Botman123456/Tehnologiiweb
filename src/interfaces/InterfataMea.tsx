import { number } from "mobx-state-tree/dist/internal"
import Interfata2 from "./Interfata2"
import "../lab3/stiluri.css";
import { Content } from "antd/lib/layout/layout";
import { infoInterfata } from "../lab3/ComponentLayout";

export const ShowInterfataMea = (props: Interfata2) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Email</th>
                    <th>Varsta</th>
                    <th>Adresa</th>
                    <th>Sora/Frate</th>
                </tr>

                <tr key={props.myData1.id}>
                    <td>{props.myData1.nume}</td>
                    <td>{props.myData1.prenume}</td>
                    <td>{props.myData1.email}</td>
                    <td>{props.myData1.varsta}</td>
                    <td>{props.myData2.adresa}</td>
                    <td>{props.myData2.s_f}</td>
                </tr>
            </table>
        </div>
    )
}

export const Interfata = () => {
    return(
        <>
             <main>
                    <Content style={{ padding: '0 50px' }}>
                    

                    <div>
                        <ShowInterfataMea myData1={infoInterfata} myData2={infoInterfata}/>
                    </div>

                    
                    </Content>

                </main>
        </>
    )
}