import { useParams } from 'react-router-dom';
import Recording from '../../components/Recording/Recording';
import { createRecord } from "../../utils/recordApi";
import {useState} from 'react';

export default function Graph({behaviors}){

    const [records, setRecordsList] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();

    async function handleAddRecord(record){
        try{
            const data = await createRecord(record);
            setRecordsList([
                data.record,
                ...setRecordsList
            ]);
        }catch(err){
            setError(err.message)
        }
    }

    return (
        <>
            <h1>Graph Page</h1>
            <ul>
                {Object.values(behaviors)
                .filter((list) => list._id === id)
                .map((list, index) => {
                    return (
                        <>
                            <h1 key={index}>{list.behaviorName}</h1>  
                            <h1>{list.recording}</h1>
                            <h1>{list.startDate}</h1>
                            <h1>{list.goalDate}</h1> 
                        </>
                    )
                })}
            </ul>
            <Recording id={id} handleAddRecord={handleAddRecord}/>
        </>
    )
}