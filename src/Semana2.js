const [user, setUser] = useState("");
const [pass, setPass] = useState("");

const [showInfo, setShowInfo] = useState(false);



const handleLogin = (e) => {
    e.preventDefault();
    setShowInfo(true);
    console.log({user, pass});
};

return (
    <div className="App">
      {showInfo && (
          <h1>
            {""}
            User: {user} y Password: {pass}{""}
          </h1>
      )}
      <form onSubmit={(e) => handleLogin(e)}>
        <input value={user} placeholder="Enter username" onChange={(e) => setUser(e.target.value)} />
        <input value={pass} type="password" placeholder="Enter passwrod" onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
);
