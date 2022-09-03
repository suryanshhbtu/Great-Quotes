import useHttp from '../../hooks/use-http';
import { deleteQuote } from '../../lib/api';
import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {

  // console.log("ye wala load hua " +props.quoteId);
  const {sendRequest} = useHttp(deleteQuote);
  const onDeleteHandler = () =>{
     sendRequest(props.quoteId);
  }
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
      <button className='btn'onClick={onDeleteHandler}> Delete Quote</button>
    </figure>
  );
};

export default HighlightedQuote;
