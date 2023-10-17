import React from 'react';
import './styles/spinnerPage.css'
const SpinnerPage = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-center items-center h-full">
                <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <style></style>

                    <circle className="spinner_VpEe" cx="12" cy="12" r="0" />
                    <circle className="spinner_VpEe spinner_eahp" cx="12" cy="12" r="0" />
                    <circle className="spinner_VpEe spinner_f7Y2" cx="12" cy="12" r="0" />
                </svg>
            </div>
        </div>
    )
}

export default SpinnerPage
