import React from 'react';

let Cards=()=> {
    return ( 
        <React.Fragment>
            <div className='row'>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header bg-success text-center '>
                            <h4>Total users enrolled</h4>
                        </div>
                        <div className='card-body '>
                            <h5 className='text-center'>233</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header bg-danger text-center'>
                            <h4>Users Remaining</h4>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-center'>564</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header bg-warning text-center'>
                            <h4>Camp days left</h4>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-center'>3</h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default Cards;