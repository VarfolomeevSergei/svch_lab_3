import { Component } from "react";
import './Cards.css';

const Cards = ({ card, onDelete, onEdit, isSelected, onSelect }) => {
    return (
      <div className={`card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <div className="card-buttons">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(card.id);
            }}
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(card.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default Cards;




// 
// const Card = [
//     {
//         src: '../../../img/card-1.png',
//         title: "Individuals",
//         text: "Undervalued and underpaid? Let's change that. Our career-development program, Fulfilled, is here to provide you with the resources and tools you need to not only go for a higher-paying job, but secure it. We believe it’s already yours.",
//         buttonText: "Reimagine Now"
//     },
//     {
//         src: '../../../img/card-2.png',
//         title: "Employers",
//         text: "Through our Fulfilled Work Framework, we advise employers on how to better position employees of color to unlock their potential and take ownership of their careers while increasing retention rates all around.",
//         buttonText: "Learn More"
//     },
//     {
//         src: '../../../img/card-3.png',
//         title: "Leaders",
//         text: "We coach leaders, business owners, and influencers on how to maximize their value, unleash their power, and grow their success. From where we’re looking, there’s no glass ceiling.",
//         buttonText: "Explore More"
//     }
// ];

// class PersonCard extends Component {
//     render() {
//         return (
//             <div className="section-four-card">
//                 <img
//                     className="card-img"
//                     src={this.props.src}
//                     alt={this.props.title}
//                 />
//                 <h4 className={`lng-${this.props.title.toLowerCase()}`}>{this.props.title}</h4>
//                 <p className="section-four-card-text lng-section-four-card-text">
//                     {this.props.text}
//                 </p>
//                 <button className="section-four-button lng-section-four-button">
//                     <p>{this.props.buttonText}</p>
//                 </button>
//             </div>
//         );
//     }
// }

// class Cards extends Component {
//     render() {
//         return (
//             <div className="section-four-container">
//                 <p className="section-four-teg lng-section-four-teg">Our Programs</p>
//                 <div className="section-four-card-container flex-box-between">
//                     {Card.map((item, index) => (
//                         <PersonCard
//                             key={index}
//                             src={item.src}
//                             title={item.title}
//                             text={item.text}
//                             buttonText={item.buttonText}
//                         />
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Cards;