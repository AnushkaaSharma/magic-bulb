import React from 'react';



 class Table extends React.Component {
    constructor( ){
        super();
        this.state ={
            data:false
        }
    }
    componentDidMount()
    {
        let url ='https://reqres.in/api/users?page=1';
        fetch(url, {
            method:'GET',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }).then((result) =>{
            result.json().then((resp)=>{
                this.setState({data:resp})
            })
        })
       
    }
    render(){
        const data=this.state.data;
        return(
            <div>
                {
                    data?
                    <div>
                        <p>Page: {data.page} </p>
                        <p>id:{data.id} FirstName:{data.first_name} LastName: {data.last_name}</p>
                    </div>
                    :<p>Please wait...</p>
                }
                
            </div>
        )

    }
}
 
export default Table;