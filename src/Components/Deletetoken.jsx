import React from "react";
const Delete = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('status')
    window.location.href = "/"
}
export default Delete