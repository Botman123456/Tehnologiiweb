import { Form, Input, Button } from 'antd';
import { useState } from 'react';

export const MyLogin = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const checkLocal = () => {
        const localSInfo = localStorage.getItem("laboratorul6");
        let flag = false;

        if(localSInfo){
            const data = JSON.parse(localSInfo);

            for(let i=0; i<data.length; i++){
                if(data[i].username == user && data[i].password == password){
                    alert("Logat cu succes!");
                    flag = true;
                    break;
                }
            }

            if(!flag){
                alert("Logarea nu avut loc!");
            }
        }
    }

    return(
        <>
            <main>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 5 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input 
                        value={ user}
                        onChange={(e) => {setUser(e.target.value);}}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password 
                        value={ password }
                        onChange={ (e) => {setPassword(e.target.value);}}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        onClick={ checkLocal }
                    >
                    Submit
                    </Button>
                </Form.Item>
            </Form>
            </main>
        </>
    );
}