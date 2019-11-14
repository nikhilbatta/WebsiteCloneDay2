import React from 'react';

function SignIn(){
  return(
    <div>
      <hr/>
      <hr/>
      <hr/>
      <hr/>
      {/* Need to make this work with styling rather than hardcoding some space */}
      <h2>Sign in to check out some buff beefy horse hunks</h2>
      <hr/>
      <form>
        <input
          type='text'
          id='username'
          placeholder='username..'/>
        <input
          type='text'
          id='password'
          placeholder='password..'/>
        <button type='submit'>Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;