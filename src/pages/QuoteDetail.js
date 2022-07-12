import {Route, useParams} from "react-router-dom";
import {Fragment} from "react";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
    const params = useParams();
    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                {/*now Comments component will load if the url is http:localhost:3000/quotes/123/comments */}
                <Comments/>
            </Route>
        </Fragment>
   );
}

export default QuoteDetail;