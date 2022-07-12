import {Redirect, Route, Switch} from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {//routes goes from top to bottom. since switch is there it stops when it found a match
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes/>
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail/>
          </Route>
          <Route path='/new-quote'>
            <NewQuote/>
          </Route>
          {/*this wild card route should be at the bottom as the last step*/}
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;
