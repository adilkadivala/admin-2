import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main>
        <h1 className="title">Dashboard</h1>
        <ul className="breadcrumbs">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="divider">/</li>
          <li>
            <Link to="/" className="active">
              Dashboard
            </Link>
          </li>
        </ul>
        <div className="info-data">
          <div className="card">
            <div className="head">
              <div>
                <h2>1500</h2>
                <p>Traffic</p>
              </div>
              <i className="bx bx-trending-up icon"></i>
            </div>
            <span className="progress" data-value="40%"></span>
            <span className="label">40%</span>
          </div>
          <div className="card">
            <div className="head">
              <div>
                <h2>234</h2>
                <p>Sales</p>
              </div>
              <i className="bx bx-trending-down icon down"></i>
            </div>
            <span className="progress" data-value="60%"></span>
            <span className="label">60%</span>
          </div>
          <div className="card">
            <div className="head">
              <div>
                <h2>465</h2>
                <p>Pageviews</p>
              </div>
              <i className="bx bx-trending-up icon"></i>
            </div>
            <span className="progress" data-value="30%"></span>
            <span className="label">30%</span>
          </div>
          <div className="card">
            <div className="head">
              <div>
                <h2>235</h2>
                <p>Visitors</p>
              </div>
              <i className="bx bx-trending-up icon"></i>
            </div>
            <span className="progress" data-value="80%"></span>
            <span className="label">80%</span>
          </div>
        </div>
        <div className="data">
          <div className="content-data">
            <div className="head">
              <h3>Sales Report</h3>
              <div className="menu">
                <i className="bx bx-dots-horizontal-rounded icon"></i>
                <ul className="menu-link">
                  <li>
                    <Link to="/">Edit</Link>
                  </li>
                  <li>
                    <Link to="/">Save</Link>
                  </li>
                  <li>
                    <Link to="/">Remove</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content-data">
            <div className="head">
              <h3>Chatbox</h3>
              <div className="menu">
                <i className="bx bx-dots-horizontal-rounded icon"></i>
                <ul className="menu-link">
                  <li>
                    <Link to="/">Edit</Link>
                  </li>
                  <li>
                    <Link to="/">Save</Link>
                  </li>
                  <li>
                    <Link to="/">Remove</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="chat-box">
              <p className="day">
                <span>Today</span>
              </p>
              <div className="msg">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="chat">
                  <div className="profile">
                    <span className="username">Alan</span>
                    <span className="time">18:30</span>
                  </div>
                  <p>Hello</p>
                </div>
              </div>
              <div className="msg me">
                <div className="chat">
                  <div className="profile">
                    <span className="time">18:30</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque voluptatum eos quam dolores eligendi exercitationem
                    animi nobis reprehenderit laborum! Nulla.
                  </p>
                </div>
              </div>
              <div className="msg me">
                <div className="chat">
                  <div className="profile">
                    <span className="time">18:30</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, architecto!
                  </p>
                </div>
              </div>
              <div className="msg me">
                <div className="chat">
                  <div className="profile">
                    <span className="time">18:30</span>
                  </div>
                  <p>Lorem ipsum, dolor sit amet.</p>
                </div>
              </div>
            </div>
            <form action="#">
              <div className="form-group">
                <input type="text" placeholder="Type..." />
                <button type="submit" className="btn-send">
                  <i className="bx bxs-send"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
