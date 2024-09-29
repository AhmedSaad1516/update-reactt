interface DataLable{
    titleLable? :string 
}
function Select ({titleLable} :DataLable){
    return (
        <select className="mySelect form-select" aria-label="Request Select">
            <option value="" disabled>{titleLable}</option>
            <option value="1">All</option>
            <option value="2">Company Upgrade Requests</option>
            <option value="3">Accountant Upgrade Requests</option>
        </select>
    )
}

export default Select;
