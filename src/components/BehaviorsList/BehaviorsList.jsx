import { useNavigate, Link, useParams } from 'react-router-dom';

export default function BehaviorsList({behaviors, user}){

  const navigate = useNavigate();
  const params = useParams();

  return (
  <ul>
    {Object.values(behaviors).map(function(keyName, keyIndex) {
      return (
        <li key={keyIndex}>
            <Link
              to={{
                pathname: `/dashboard/behavior/${keyName._id}`}}>
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
