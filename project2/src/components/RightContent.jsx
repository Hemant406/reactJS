import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto gap-10 p-2 w-2/3'>
        {props.users.map(function(elem,idx){

            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>      
        })}
    </div>
  )
}

export default RightContent