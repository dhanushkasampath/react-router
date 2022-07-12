import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id:'q1', author:'Max', text:'Learning React is Fun!'},
    {id:'q2', author:'John', text:'Learning Java is Fun!'},
    {id:'q3', author:'Peter', text:'Learning Python is Fun!'}
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    );
}

export default AllQuotes;