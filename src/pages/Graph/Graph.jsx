export default function Graph({behaviors}){
    return (
        <>
            <h1>Graph Page</h1>
            <ul>
                {Object.values(behaviors).map(function(keyName, keyIndex) {
                    return (
                    <h1 key={keyIndex}>
                        {keyName.recording}
                        {keyName.startDate}
                        {keyName.goalDate}
                        {keyName._id}
                    </h1>
                    )
                })}
            </ul>
        </>
    )
}