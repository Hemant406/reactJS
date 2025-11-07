import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div className='card'>
        <div className="top">
          <div className="upper">
          <img src={props.logo} alt="amazon" />
          <button>Save <Bookmark size={18} absoluteStrokeWidth /></button>
        </div>
        <div className="center">
          <div className="comp">
            <h3>{props.companyName}</h3><span>{props.timePosted}</span>
          </div>
          <div className="company">
            <h4>{props.post}</h4>
          </div>
          <div className="tags">
            <button>Part time</button>
            <button>Full time</button>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div className="payment">
            <h4>{props. pay}</h4>
            <span>{props.location}</span>
          </div>
          <div className="apply">
            <button>Apply now</button>
          </div>
        </div>
    </div>
  )
}

export default Card