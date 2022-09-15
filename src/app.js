import React, { useState, createContext, useReducer } from "react";
import "./PR.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Search from "./Jobsearch";
import Homepage from "./Home";
import Nav from "./Nav";
import ContactUs from "./ContactForm";
import Apartments from "./Quotes";
import { lightTheme, darkTheme, GlobalStyles } from "./DarkMode";
import { ThemeProvider } from "styled-components";

export const RatingContext = createContext()

const initialstate = {
  dislike: 0,
  like: 0
}

const reducer = (state, action) => {
  switch (action){
    case 'like':
      return state + 1
    case 'dislike':
      return state + 1
    default:
      return state
  }
}

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [likecount, dispatch] = useReducer(reducer, initialstate.like)
  const [dislikecount, dispatchTwo] = useReducer(reducer, initialstate.dislike)

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <RatingContext.Provider value={ { rateState: likecount, rateDispatch: dispatch, rateState2: dislikecount, rateDispatch2: dispatchTwo}}>
        <div className = 'Top'>
          <button onClick={() => themeToggler()}>DarkMode</button>
          <Nav />
        </div>
        <div className="Content">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/Home" exact component={Homepage} />
            <Route path="/Jobsearch" component={Search} />
            <Route path="/Quotes" component={Apartments} />
            <Route path="/ContactForm" component={ContactUs} />
          </Switch>
          <div id="footer">
            <footer>
              If you have any questions or information you would like me to add,
              email me at <strong>chrisbrowne91@gmail.com</strong> or go to my {" "}
              <Link to="/ContactForm">ContactUs</Link> page.
            </footer>
          </div>
        </div>
        </RatingContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
