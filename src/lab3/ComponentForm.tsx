import { Form, Input, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';


export const ComponentForm = () => {

    const onFinish = (values: any) => {
        console.log(values);
    };

    return(
        <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 5 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        >
        <Form.Item
            label="Nume"
            name="name"
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Prenume"
            name="surname"
        >
            <Input />
        </Form.Item>
        
        <Form.Item
            label="Varsta"
            name="age"
        >
            <Input type={ 'number' }/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 12, span: 10 }}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    )
}

export const MyForm = () => {
    return(
        <>
            <main>
                    <Content style={{ padding: '0 50px' }}>
                    <div>

                       <ComponentForm />

                    </div>
                    </Content>
                </main>
        </>
    );
}