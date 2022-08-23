export default function BehaviorsList({behaviors}){

  return (
  <ul>
    {Object.keys(behaviors).map(function(keyName, keyIndex) {
      return (
        <li key={keyName}>
          {keyName.behaviorName}
        </li>
      )
    })}
  </ul>
  )
}
