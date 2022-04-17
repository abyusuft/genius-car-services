import React from 'react';

const Registar = () => {
    return (
        <div>
            <h2>Please Registar</h2>
            <form >
                <input type="text" name="name" id="" required placeholder='Your Name' />
                <input type="email" name="email" id="" required placeholder='Your Email' />
                <input type="password" name="password" id="" required placeholder='Your Password' />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Registar;