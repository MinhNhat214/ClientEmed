
 
import React, { useRef,useEffect } from 'react';
function InTestBDF(props) {
//class InTestBDF extends Component {
  const { setRef } = props;
  //const ref = useRef();
  //setRef(ref.current);
  const myRef = useRef(null);

  useEffect(() => {
    setRef(myRef.current.focus() );
    //this.inputRef.current.focus();
    //const node = myRef.current;
    // Do something with the node
  }, []);


      return (
        <div ref={myRef}>
          Print content
        </div>
      );
    
  
}
  export default InTestBDF;


