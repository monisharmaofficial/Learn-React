const Contact = ()=>{
    return(
        <div>
            <h1 className="p-4 m-4 font-bold text-4xl">Contact Us Page</h1> 

            <form>
                <input type="text" className="border border-slate-700 p-2 m-3 ml-8" placeholder="Enter name"/>
                <input type="text" className="border border-slate-700 p-2 m-3" placeholder="write message"/>
                <button className="border border-slate-700 p-2 m-3 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;