Vue.component('content-component',{
    template: `
    <!-- Page Content -->
    <div class="container">
      <div class="my-4">
        <div class="success-alert" style="">
          <div class="alert alert-success">
            Login success
          </div>
        </div>
        <div class="error-alert" style="display: none;">
          <div class="alert alert-danger">
            Error message
          </div>
        </div>
      </div>

      <div class="new-item">
        <h2>Create new Item</h2>
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="input_name" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input v-model="input_price" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="stock">Stock:</label>
          <input v-model="input_stock" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="tags">Tags:</label>
          <input v-model="input_tags" type="text" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary" @click="addItem">Submit</button>
        <hr>
      </div>

      <div class="search-item">
        <h2>Search Item</h2>
        <div class="form-group">
          <label for="name">Name:</label>
          <input v-model="input_name" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="price">Start Price:</label>
          <input v-model="input_price" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="tags">Tags:</label>
          <input v-model="input_tags" type="text" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary" @click="searchItem">Search</button>
        <hr>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="row my-4">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Item One</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p class="card-text">Stock: 20pcs</p>
                </div>
                <div class="card-footer">
                  <span class="badge badge-primary tag">
                    Kitchen
                  </span>
                  <span class="badge badge-primary tag">
                    Electric
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Item Two</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p class="card-text">Stock: 20pcs</p>
                </div>
                <div class="card-footer">
                  <span class="badge badge-primary tag">
                    Kitchen
                  </span>
                  <span class="badge badge-primary tag">
                    Juicer
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Item Three</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p class="card-text">Stock: 20pcs</p>
                </div>
                <div class="card-footer">
                  <span class="badge badge-primary tag">
                    Cook
                  </span>
                  <span class="badge badge-primary tag">
                    Healthy
                  </span>
                  <span class="badge badge-primary tag">
                    Fruits
                  </span>
                  <span class="badge badge-primary tag">
                    Electric
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Item Four</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p class="card-text">Stock: 20pcs</p>
                </div>
                <div class="card-footer">
                  <span class="badge badge-primary tag">
                    Kitchen
                  </span>
                  <span class="badge badge-primary tag">
                    Electric
                  </span>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">Item Five</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p class="card-text">Stock: 20pcs</p>
                </div>
                <div class="card-footer">
                  <span class="badge badge-primary tag">
                    Kitchen
                  </span>
                  <span class="badge badge-primary tag">
                    Electric
                  </span>
                </div>
              </div>
            </div>



          </div>
          <!-- /.row -->

        </div>
        <!-- /.col-lg-9 -->

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->
    `,
    data(){
      return{
        input_name: '',
        input_price: '',
        input_stock: '',
        input_tags:'',

      }
    },
    methods:{
      addItem(){
        axios({
          method: "POST",
          url: "http://localhost:3000/items",
          data: {
            items: [],
            name: input_name,
            price: input_price,
            stock: input_stock,
            tags: input_tags,
          },
          headers: {
            token: localStorage.getItem("token")
          }
        })
          .then(res => {
                let item = res.data.item
          })
          .catch(err => {
            console.log(err);
          });
      },

      searchItem(){
        axios({
          method: "GET",
          url: "http://localhost:3000/items/",
          data: {
            name: input_name,
            price: input_price,
            tags: input_tags,
          },
          headers: {
            token: localStorage.getItem("token")
          }
        })
          .then(res => {
                let items = res.data
          })
          .catch(err => {
            console.log(err);
          });
      }
    }

})