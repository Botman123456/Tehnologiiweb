import { getParent, getParentOfType, types } from 'mobx-state-tree'
import LoginRootStore from './LoginRootStore';

export const LogModel = types.model('LogModel', {
    id: types.identifier,
    username: '',
    password: ''
})