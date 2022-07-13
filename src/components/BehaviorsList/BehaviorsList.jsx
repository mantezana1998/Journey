export default function BehaviorsList({behaviors}){
    
    const mapBehaviors = behaviors.map((b) => {
        return (
            <h1>{b}</h1>
        )
    })
    return mapBehaviors
}