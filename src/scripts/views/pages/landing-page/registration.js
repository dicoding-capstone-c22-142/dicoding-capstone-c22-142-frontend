const Registration = {
  async render() {
    return '';
  },

  async afterRender() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = `
    <div class="d-flex d-flex justify-content-center align-items-center" style="background-color: steelblue; height:100vh">
    <form class="form-registration">
    <div class="signup text-center">
    <h3>Sign Up</h3>
    </div>
    <div class="form-group"">
      <label for="exampleInputEmail1">Full Name</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name">
    </div>
    <div class="form-group"">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group"">
      <label for="exampleInputEmail1">Phone Number</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="d-grid gap-2">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
    </form>
    </div>`;
  },
};

export default Registration;
