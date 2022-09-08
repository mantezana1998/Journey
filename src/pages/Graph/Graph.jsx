import { useParams } from 'react-router-dom';
import Recording from '../../components/Recording/Recording';

export default function Graph({behaviors}){

    const { id } = useParams();

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
            <Recording id={id}/>
        </>
    )
}