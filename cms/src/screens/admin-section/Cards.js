import React from 'react';

let Cards=()=> {
    return ( 
        <React.Fragment>
            <div className='row'>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header bg-info text-center '>
                            <h4>Total camps</h4>
                        </div>
                        <div className='card-body '>
                            <h5 className='text-center'>23</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header bg-success text-center'>
                            <h4>Total users enrolled</h4>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-center'>324234</h5>
                        </div>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-header bg-danger text-center'>
                            <h4>Doctors with Us</h4>
                        </div>
                        <div className='card-body'>
                            <h5 className='text-center'>100</h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}

export default Cards;