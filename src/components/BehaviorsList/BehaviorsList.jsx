export default function BehaviorsList({behaviors}){

    return (
        <div>
          {/* 👇️ iterate object KEYS */}
          {Object.keys(behaviors).map((key, index) => {
            return (
              <div key={index}>
                <h2>
                  {key}: {behaviors[key]}
                </h2>
                <hr />
              </div>
            );
          })}
        </div>
      );
}
