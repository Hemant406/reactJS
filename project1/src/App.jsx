import React from 'react'
import Card from './components/Card'

const App = () => {
  const arr = [
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    timePosted: "5 days ago",
    post: "Frontend Developer",
    jobDuration: "Full-time",
    pay: "$58/hr",
    location: "Bangalore, India",
  },
  {
    logo: "https://thumbs.dreamstime.com/b/meta-logo-icon-american-multinational-company-parent-organization-facebook-instagram-whatsapp-others-vector-233392134.jpg",
    companyName: "Meta",
    timePosted: "2 days ago",
    post: "Senior UI/UX Designer",
    jobDuration: "Full-time",
    pay: "$65/hr",
    location: "Menlo Park, USA",
  },
  {
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
    companyName: "Google",
    timePosted: "1 week ago",
    post: "Machine Learning Engineer",
    jobDuration: "Full-time",
    pay: "$80/hr",
    location: "Mountain View, USA",
  },
  {
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    timePosted: "3 days ago",
    post: "Backend Developer",
    jobDuration: "Contract",
    pay: "$72/hr",
    location: "Los Gatos, USA",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png",
    companyName: "Apple",
    timePosted: "4 days ago",
    post: "iOS Engineer",
    jobDuration: "Full-time",
    pay: "$75/hr",
    location: "Cupertino, USA",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    timePosted: "6 days ago",
    post: "Cloud Infrastructure Engineer",
    jobDuration: "Full-time",
    pay: "$68/hr",
    location: "Hyderabad, India",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJbxuh5HLL3yL8aWqeRbOKzD6u6nriF5CWQ&s",
    companyName: "IBM",
    timePosted: "1 week ago",
    post: "Data Analyst",
    jobDuration: "Part-time",
    pay: "$42/hr",
    location: "Pune, India",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    companyName: "Adobe",
    timePosted: "3 days ago",
    post: "Product Designer",
    jobDuration: "Full-time",
    pay: "$60/hr",
    location: "San Jose, USA",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtR3neyop9Cpm0RBJU4pRFAXIpYAk6qqf2OA&s",
    companyName: "Tesla",
    timePosted: "2 weeks ago",
    post: "Software Developer",
    jobDuration: "Full-time",
    pay: "$70/hr",
    location: "Berlin, Germany",
  },
  {
    logo: "https://www.svgrepo.com/show/306500/openai.svg",
    companyName: "OpenAI",
    timePosted: "1 day ago",
    post: "AI Research Engineer",
    jobDuration: "Full-time",
    pay: "$90/hr",
    location: "San Francisco, USA",
  },
];

  return (
    <div className='parent'>
      {arr.map(function(elem,idx){
          return <div key={idx}>
            <Card logo={elem.logo} companyName={elem.companyName} timePosted={elem.timePosted} post={elem.post} jobDuration={elem.jobDuration} pay={elem.pay} location={elem.location}/>
          </div>
      })}
    </div>
  )
}

export default App