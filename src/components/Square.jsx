
const Square = ({ value, onClick,iswinningSuares }) => {


    const colorClassName = value === "X" ? 'text-green' : 'text-orange';
    const winningClassName = iswinningSuares ? 'winning': ' ';
   

    
    return (
    
        <button type="button" 
        className={`square ${colorClassName}
           ${winningClassName}`}
            onClick={onClick}>
        {value}
        </button> 
            
    );
};
export default Square;


