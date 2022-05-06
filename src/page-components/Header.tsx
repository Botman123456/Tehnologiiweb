import { Layout, Menu } from "antd";

const { Header } = Layout;

export const MyHeader = () =>{
    return(
        <>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {new Array(5).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Menu.Item key={key}>{`Meniu ${key}`}</Menu.Item>;
                    })}
                </Menu>
            </Header>
    </>
    );
}