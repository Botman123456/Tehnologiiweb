import { List } from 'antd'
import { IContentModel } from '../interfaces/Interfata2'

export const Note = ({ content }: { content: IContentModel }) => {
    return (
        <List.Item.Meta
            title={ content.title }
            description={ content.notes }
        />
    )
}
