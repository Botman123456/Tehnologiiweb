import { Layout, Menu } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { MyLogin } from "../Forms/Login";
import { Interfata } from "../interfaces/InterfataMea";
import { Cards } from "../lab3/ComponentCard";
import { MyForm } from "../lab3/ComponentForm";
import { MyContent } from "../lab3/ComponentLayout";

const { Header } = Layout;

export const MyHeader = () =>{
    return(
        <>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    
                    <Menu.Item key={1}>
                        <Link to="/">Login</Link>
                    </Menu.Item>
                    
                    <Menu.Item key={2}>
                        <Link to="/cards">Cards</Link>
                    </Menu.Item>
                    
                    <Menu.Item key={3}>
                        <Link to="/form">Form</Link>
                    </Menu.Item>
                    
                    <Menu.Item key={4}>
                        <Link to="/interface">Interface</Link>
                    </Menu.Item>
                    
                    <Menu.Item key={5}>
                        <Link to="/content">RootStore</Link>
                    </Menu.Item>

                </Menu>
            </Header>

            <Routes>
                <Route path="/" element={ <MyLogin /> } />
                <Route path="/cards" element={ <Cards /> } />
                <Route path="/form" element={ <MyForm /> } />
                <Route path="/interface" element={ <Interfata /> } />
                <Route path="/content" element={ <MyContent /> } />
            </Routes>
    </>
    );
}