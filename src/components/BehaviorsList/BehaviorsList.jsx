export default function BehaviorsList({behaviors, user}){
    
    console.log(behaviors, "<----behaviors")
    console.log(user, "<----user")

    const mapBehaviors = behaviors.map((b) => {
        return (
            <>
                <h1>{b.name}</h1>
            </>
        )
    })
    return mapBehaviors
}