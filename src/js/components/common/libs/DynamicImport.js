import React, { Component, useState, useEffect } from "react";

export default function DynamicImport(props){

    const [ Component, setComponent] = useState(null);

    async function getComponent(){
        setComponent(await props.load());
        // props.load()
        //   .then((module) => {
        //       setComponent(module);
        //   })
        //   .catch((error) => {
        //       console.log(error);
        //       return null; //alert("Component can not be loaded." + error)
        //   });
    }

    useEffect(() => {
        getComponent()
    }, [Component]);

    if(!Component) return null;

    return props.children(Component.default);
}

//
// export default class DynamicImport extends Component{
//
//   state = {
//     component: null
//   };
//
//   isCancelled = false;
//
//   componentDidMount(){
//     this.props.load()
//       .then((module) => {
//         !this.isCancelled && this.setState(() => ({
//           component: module.default
//         }))
//       })
//       .catch((error) => {
//         console.log(error);
//         return null; //alert("Component can not be loaded." + error)
//       })
//   }
//
//   componentWillUnmount() {
//     this.isCancelled = true;
//   }
//
//   render(){
//     return this.props.children(this.state.component);
//   }
// }