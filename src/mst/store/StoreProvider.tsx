import RootStore from "./RootStore";

const storeProvider = RootStore.create({
    contents:[
        {
            id: '1',
            title: 'Numele',
            description: 'Give me your name',
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: 'Prenumele',
            description: 'Give me your sourname',
            seen: false,
            notes: '',

        },
        {
            id: '3',
            title: 'My crush',
            description: 'Who is your crush ?',
            seen: false,
            notes: '',

        }
    ]
})




export default storeProvider;