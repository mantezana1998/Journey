export default function BehaviorsList({behaviors}){

  return (
  <ul>
    {Object.values(behaviors).map(function(keyName, keyIndex) {
      return (
        <li key={keyIndex}>
          {keyName.behaviorName}
        </li>
      )
    })}
  </ul>
  )
}
