import { applySnapshot, types } from "mobx-state-tree";
import { LogModel } from "./Login.model";


const LoginRootStore = types.model('LoginRootStore', {
    contents: types.array(LogModel),

    contents_notes: types.array(types.safeReference(LogModel))

})
    .actions((self) => ({
        setDataToLocalStorage(value: any = {}) {
            localStorage.setItem('laboratorul6', JSON.stringify(value))
        },
    }))

    .actions((self) => ({
        setInitialStorageContents() {
            self.setDataToLocalStorage(self.contents)
        }

    }))

export default LoginRootStore