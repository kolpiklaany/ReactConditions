import React, { useState } from "react";

function UserStatus(){
    const [ isLoggedIn ]= useState(false);
    const [userName] = useState('jmena');
    //if /else
    /*
    if(isLoggedIn){
        return(
        
            <div>
                Welcome dear {userName}
            </div>          
        );
        }else{
        return(
            <div>
                Login
            </div>
        );
    }    */

    //if ternario:
    /*
    return( 
        isLoggedIn ?
            <div>
                welcome {username}
            </div>
            :
            <div>
                Login
            </div>
        );*/

        //if con variable
        /*
        let status;
        if(isLoggedIn){
            status=<div>welcome{userName}</div>
        }else{
            status =<div>Login</div>
        }
        return status;
        */

        //Operador logico
        /*
       return (isLoggedIn &&(
           <div>
               welcome {userName}
           </div>
       ))||(
           <div>
               Login
           </div>
       );
       */
        //operador logico 2
    return (
        <div>
          { isLoggedIn ?(
            <span>Welcome{userName}</span>  
          ):(
              <span>Login</span>
          )}
        </div>
          
    );
          
    }

  
export default UserStatus;