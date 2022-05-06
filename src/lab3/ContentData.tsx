import { List } from 'antd';
import { Content } from 'antd/lib/layout/layout'
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useRootStore } from '..';
import { IContentModel } from '../interfaces/Interfata2';
import { Note } from '../Notes/Notes';

import { CardCustom2 } from './CardCustom2';

//commnet #2
export const ContentData = observer(() => {

    const { contents, contents_notes } = useRootStore()

    useEffect(() => {
        console.log('>>contents_notes', contents_notes)
    }, [ contents_notes ])

    return(
        <main>
            <Content style={ { padding: '0 50px' } }>

                <div>
                    
                    <div>
                        {
                            contents.map((content: IContentModel) => {
                                return(
                                    <CardCustom2 key={ content.id } content={ content } />
                                )
                            })
                        }
                    </div>

                    <br />

                    <div>
                        {
                            contents_notes.map((content: IContentModel) => {
                                return(
                                    <List.Item>

                                        <Note key={ content.id } content={ content } />

                                    </List.Item>
                                )
                            })
                        }
                    </div>

                </div>
            </Content>
        </main>
    )
})