Vue.component("nav-component", {
	template: `
    <div v-show="!submitted">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Uber Fox</a>

      <ul class="nav navbar-nav pull-sm-right">
        <li class="nav-item">
          <a href="#" class="nav-link" data-toggle="modal" data-target="#loginModal">Login
            <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>


  <!-- loginModal -->
  <div class="modal fade" id="loginModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="/action_page.php">
            <div class="form-group">
              <label for="email">Username:</label>
              <input v-model:"username"  type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input  v-model:"password" type="password" class="form-control" id="pwd">
            </div>
            <button type="submit" @click="login" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /.registerModal -->
  </div>

    `,
	data() {
		return {
			username: "",
			password: "",
			submitted: false
		};
	},
	methods: {
		login() {
			axios({
				method: "POST",
				url: "http://localhost:3000/register",
				data: {
					username: this.username,
					password: this.password
				}
			})
				.then(res => {
					this.submitted = true;
					this.token = res.data.token;
					let token = this.token;
          localStorage.setItem("token", token);
          this.$emit("status", this.submitted);
				})
				.catch(err => {
					console.log(err);
				});
		}
	},
	mounted() {
		if (localStorage.token) {
			this.token = localStorage.token;
		}
	},
	watch: {
		token(token) {
			localStorage.token = token;
		}
	}
});
