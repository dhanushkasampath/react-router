import {Route, Switch} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {//routes goes from top to bottom. since switch is there it stops when it found a match
  return (
    <Switch>
      <Route path='/quotes' exact>
        <AllQuotes/>
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail/>
      </Route>
      <Route path='/new-quote'>
        <NewQuote/>
      </Route>
    </Switch>
  );
}

export default App;
