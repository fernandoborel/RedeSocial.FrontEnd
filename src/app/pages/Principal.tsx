import Feed from "../components/Feed";
import Friends from "../components/Friends";
import Profile from "../components/Profile";


const Principal = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <Profile />
        </div>
        <div className="col-md-6">
          <Feed />
        </div>
        <div className="col-md-3">
          <Friends />
        </div>
      </div>
    </div>
  );
};


export default Principal;