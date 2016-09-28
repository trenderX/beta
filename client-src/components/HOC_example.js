// function ppHOC(WrappedComponent) {
//   return class PP extends React.Component {
//     handleChange = (e) => {
//       console.log('changeE:',e)
//     };
//     handleFocus = (e) => {
//       console.log('focused:',e)
//     };

//     render() {
//       const newProps = {
//         label: 'composed',
//         onChange: this.props.query,
//         onFocus: this.handleFocus
//       }
//       return <WrappedComponent  {...this.props} {...newProps}/>
//     }
//   }
// }
