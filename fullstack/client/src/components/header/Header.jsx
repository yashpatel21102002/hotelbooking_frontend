import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faMountainSun, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';                                    import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destination,setDestination] = useState("")
    const [openDate,setOpenDate] = useState(false)
    const [date,setDate] = useState([
        {
            startDate : new Date(),
            endDate:new Date(),
            key:'selection'  
        }
    ])
    const [openOptions ,setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    })
    const handleOption = (name,operation)=>{
        setOptions((prev)=>{
            return{
            ...prev,
            [name]:operation === "i" ? options[name] +1:options[name]-1,
        }})
    }

    const navigate = useNavigate()
    const handleSearch = ()=>{
        navigate("/hotels" , {state: {destination,date,options}})
    }
  return (
    <div className="header">
        <div className={type==='list' ? "headerContainer listMode":"headerContainer"}>
            <div className="headerList">
                <div className="headerListItems active">
                <FontAwesomeIcon icon={faBed} />
                <span>stays</span>
                
                </div>
                <div className="headerListItems">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>

                </div>
                <div className="headerListItems">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>

                </div>
                <div className="headerListItems">
                <FontAwesomeIcon icon={faMountainSun} />
                <span>Attractions</span>

                </div>
                <div className="headerListItems">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>

                </div>
            </div>
            {type !== 'list' && <><h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or more with a free <span>Heritage.com </span> account
            </p>
            <button className='headerBtn'>Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" placeholder='Where are you going?' className='headerSearchInput'
                     onChange={e=>setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className='headerSearchText' onClick={()=>setOpenDate(!openDate)}>{!openDate && `date to date`}{openDate && `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                    {
                        openDate && <DateRange editableDateInputs={true} onChange={(item)=>setDate([item.selection])} moveRangeOnFirstSelection={false}
                        ranges={date} className='date' minDate={new Date()}/>
                    }
                    

                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span className="headerSearchText" onClick={()=>{setOpenOptions(!openOptions)}}>
                        {`${options.adult} adult ${options.children} children ${options.room} rooms`}
                    </span>
                    {openOptions && <div className="options">
                        <div className="optionsItem">
                            <span className="optionText">
                                Adult
                            </span>
                            <div className="optionCounter">
                                
                            </div>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult","d")} disabled={options.adult < 2}>
                                -
                            </button>
                            <span className="optionCounterNumber">{`${options.adult}`}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>
                                +
                            </button>
                            

                        </div>
                        <div className="optionsItem">
                            <span className="optionText">
                                children
                            </span>
                            <button className="optionCounterButton" onClick={()=>handleOption("children","d")}disabled={options.children < 1}>
                                -
                            </button>
                            <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>
                                +
                            </button>
                            

                        </div>
                        <div className="optionsItem">
                            <span className="optionText">
                                Room
                            </span>
                            <button className="optionCounterButton"onClick={()=>handleOption("room","d")} disabled={options.room < 2}>
                                -
                            </button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>
                                +
                            </button>
                            

                        </div>
                
                
                    </div>}
                   

                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>

                </div>
            </div></>}
        </div>
        
    </div>
  )
}

export default Header