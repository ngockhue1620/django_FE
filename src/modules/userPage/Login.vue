<template>
  <div class="login-form-container">
    <div class="login-form">
      <div class="form-group">
        <label for="exampleInputEmail1">User Name</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter user name"
        />
        
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>      
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login-form {
  
}
.login-form-container {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 60%;
}
.login-form {
  width: 100%;
}
</style>