// import React, { Component } from 'react';




// class UU extends Component {

//     state = { selectedFiles: null };
    
//     componentDidUpdate = prevState => {
//       if (prevState.selectedFiles !== this.state.selectedFiles) {
//         this.renderPreviews();
//       }
//     };
  
//     renderPreviews = () => {
//       const { selectedFiles } = this.state;
//       const previewContainer = document.getElementById("preview-container");
//       for (let i = 0; i < selectedFiles.length; i++) {
//         const preview = document.createElement("img");
//         preview.id = `preview_${i}`;
//         preview.style.width = '100%';

//         previewContainer.appendChild(preview);

//         const reader = new FileReader();
//         reader.onload = function(evt) {
//           preview.src = reader.result;
          
//         };
//         reader.readAsDataURL(selectedFiles[i]);
//       }
//     };
//     fileChangedHandler = event => {
//       const files = event.target.files;
//       this.setState({
//         selectedFiles: files
//       });
//     };
//   }
  
//   export default UU;