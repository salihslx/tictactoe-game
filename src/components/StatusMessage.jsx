import React from "react";

const StatusMessage = ({winner , isXNext , squares}) => {

    const noMovesleft = squares.every(squareValue => squareValue !== null);
    const nextPlayer = isXNext ? 'X' : '0';
    

     const renderStatusmessage = () => {
         if(winner){
            return( 
               <React.Fragment>
                    winner is  {' '}
                    <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                    {winner}
                    </span>
               </React.Fragment>
                );
         }
         if(!winner && noMovesleft){
           return( 
                <React.Fragment>
                    <span className="text-orange">0</span> and{''} 
                    <span className="text-green">X</span>  tied
                </React.Fragment>
                );
         }
         if(!winner && !noMovesleft){
              return(
                 <React.Fragment>
                    Next Player is  {' '}
                    <span className={ isXNext ? 'text-green' : 'text-orange'}>
                        {nextPlayer}
                    </span>
                </React.Fragment>
                );
         }

         return null ;

     }
    return (
        <div className="status-message">{renderStatusmessage()}</div>
    );

};
export default StatusMessage;