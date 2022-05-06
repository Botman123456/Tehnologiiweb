import Interfata1 from "./Interfata1";
import { Instance } from "mobx-state-tree"
import RootStore from "../mst/store/RootStore"
import { ContentModel } from "../mst/model/Content.model";

interface Interfata2 extends Interfata1{
    myData2: {
        adresa: string;
        s_f: string;
    };
};

export default Interfata2;


export interface IRootStore extends Instance<typeof RootStore>{

}

export interface IContentModel extends Instance<typeof ContentModel>{
    
}