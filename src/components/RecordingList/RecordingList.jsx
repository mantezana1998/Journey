export default function RecordingList({getRecords, id}){

    console.log(getRecords)
    return (
        <ul>
            {Object.values(getRecords)
                .map((item, key) =>{
                    return (
                        <>
                            <h1 key={key}>
                                {item.occurrences} : time is {item.time} seconds
                            </h1>
                        </>
                    )
                })}
        </ul>
    )    
}