import React from 'react';

export const Header=(props)=> {
    // console.log(props)

    return(<div><h1>Hello {props.name}</h1>
          {props.children}
          </div>
        
        
        )
}

// export default Header;ex