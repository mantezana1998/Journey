import { Link } from 'react-router-dom';

export default function BehaviorsList({behaviors}){

  return (
    <ul>
      {Object.values(behaviors).map(function(keyName, keyIndex) {
        return (
          <li key={keyIndex}>
              <Link to={{ pathname: `/dashboard/behavior/${keyName._id}` }}>
                <button>
                  {keyName.behaviorName}
                </button>
              </Link>
          </li>
        )
      })}
    </ul>
  )
}