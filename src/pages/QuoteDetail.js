import {Route, useParams} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id:'q1', author:'Max', text:'Learning React is Fun!'},
    {id:'q2', author:'John', text:'Learning Java is Fun!'},
    {id:'q3', author:'Peter', text:'Learning Python is Fun!'}
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote){
        return <p>No quote found!!</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            {/*<h1>Quote Detail Page</h1>*/}
            {/*<p>{params.quoteId}</p>*/}
            <Route path={`/quotes/${params.quoteId}/comments`}>
                {/*now Comments component will load if the url is http:localhost:3000/quotes/123/comments */}
                <Comments/>
            </Route>
        </Fragment>
   );
}

export default QuoteDetail;