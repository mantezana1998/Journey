import { useNavigate } from 'react-router-dom';

export default function BehaviorsList({behaviors, user}){

  const navigate = useNavigate();

  function handleBehaviorIdClick(e){
    e.preventDefault();
    console.log(e.currentTarget.id)
    navigate(`/dashboard/behavior/${user.id}`)
  }

  return (
  <ul>
    {Object.values(behaviors).map(function(keyName, keyIndex) {
      return (
        <li key={keyIndex}>
            <button onClick={handleBehaviorIdClick}>
              {keyName.behaviorName}
            </button>
        </li>
      )
    })}
  </ul>
  )
}
