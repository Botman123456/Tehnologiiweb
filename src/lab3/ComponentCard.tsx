
import { Card } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { informatiiCard } from './ComponentLayout';

export const ComponentCard = ({title, description} : {title: string, description: string}) =>{
    return(


        <div className="site-card-border-less-wrapper">
            <Card title={ title } bordered={false} style={{ width: 400 }} hoverable={true}>
            {description}
            </Card>
        </div>
    
    )
}

export const Cards = () => {
    return(
        <>
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
                </Content>    
            </main>  
        </>
    );
}