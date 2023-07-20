const Todo = ({item}) =>  {
    return(
        <>
            {/* <div className="item"> */}
            {
                item.map((item, index) => (
                <div key={index} className="item">
                    <input type="checkbox" />
                <p className="addtext">{item}</p>
                </div>
            ))
            }
            {/* </div> */}
        </>
    )
}

export default Todo



// <input type="checkbox"/>
//                 <div className="addtext">{item}</div>